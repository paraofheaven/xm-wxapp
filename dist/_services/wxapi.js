"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WxApi = exports.AUTH_ERROR_API_TOKEN_EXPIRED = exports.AUTH_ERROR_GET_WX_CODE = exports.AUTH_ERROR_EXCEED_MAX_COUNT = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("../npm/lodash/lodash.js");

var _promisify = require("../_utils/promisify.js");

var _uri = require("../_utils/uri.js");

var _wxPromisify = require("../_utils/wxPromisify.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _wxrequest = require("./wxrequest.js");

var _wxrequest2 = _interopRequireDefault(_wxrequest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseDefaultDto = function baseDefaultDto(result) {
  return result;
};
var AUTH_TOKEN = 'token';
var AUTH_ERROR_EXCEED_MAX_COUNT = exports.AUTH_ERROR_EXCEED_MAX_COUNT = 'AUTH_ERROR_EXCEED_MAX_COUNT';
var AUTH_ERROR_GET_WX_CODE = exports.AUTH_ERROR_GET_WX_CODE = 'AUTH_ERROR_GET_WX_CODE';
var AUTH_ERROR_API_TOKEN_EXPIRED = exports.AUTH_ERROR_API_TOKEN_EXPIRED = '9000';

var WxApi = exports.WxApi = function () {
  function WxApi() {
    var _this = this;

    _classCallCheck(this, WxApi);

    this.serviceApi = {};
    // 授信置换token次数
    this.$authTestCount = 0;
    /**
     * @desc 拦截器, 可以在这里写对应的拦截器，当然也可以在子类override掉
     * @param {Object} options {resolve: callback}
     * @param {Result} result 服务器API返回的真实数据
     * @return 必须实现options.fail|success的回调
     */
    this.$interceptorDto = function (_ref, result) {
      var resolve = _ref.resolve,
          options = _objectWithoutProperties(_ref, ["resolve"]);

      var requestData = options.requestData;

      _this.$wxAuthFilter(requestData, result, resolve);
    };
    this.$requestService = (0, _wxrequest2.default)();
  }

  _createClass(WxApi, [{
    key: "$getReqData",
    value: function $getReqData(servicename, reqParam) {
      var protocol = this.$getProtocol();
      var finalReqData = (0, _lodash.extend)({}, protocol, {
        param: reqParam
      });
      var customServiceConfig = this.$getYourCustomServiceConfig();
      this.serviceApi = (0, _lodash.extend)({}, this.serviceApi, customServiceConfig);
      var domainUrl = this.get("serviceApi." + servicename);
      return {
        url: domainUrl,
        data: finalReqData
      };
    }
  }, {
    key: "get",
    value: function get(key, envName) {
      return this.getFromSource(this, key, envName);
    }
  }, {
    key: "getFromSource",
    value: function getFromSource(source, key, envName) {
      envName = envName || this.getEnvName() || 'prod';
      if (!key) {
        throw new Error('the `key` is required!');
      }
      var keyValues = (0, _lodash.get)(source, "" + key, undefined);
      if ((0, _lodash.isObject)(keyValues)) {
        return (0, _lodash.get)(keyValues, "" + envName, undefined) || keyValues;
      }
      return keyValues;
    }
  }, {
    key: "getEnvName",
    value: function getEnvName() {
      try {
        return (0, _uri.getQueryString)('env') || _index2.default.getStorageSync('env') || 'prod';
      } catch (e) {
        console.log('core.ApiEnvConfig.getEnvName()', e);
        return 'prod';
      }
    }
  }, {
    key: "$getYourCustomServiceConfig",
    value: function $getYourCustomServiceConfig() {
      return {};
    }
  }, {
    key: "$getProtocol",
    value: function $getProtocol() {
      return {
        protocol: {
          fromPlatform: this.$getPlatform()
        }
      };
    }
  }, {
    key: "$getPlatform",
    value: function $getPlatform() {
      return 'xm-wx-app';
    }
  }, {
    key: "$preRequest",
    value: function $preRequest(inputData) {
      try {
        var token = _index2.default.getStorageSync(AUTH_TOKEN) || '';
        if (!token) {
          return this.$wxLogin().then(function (result) {
            (0, _lodash.set)(inputData, 'data.protocol.code', result.code);
            return inputData;
          }).catch(function (e) {
            console.log('wx-web-api->$wxLogin().code: ', e);
          });
        }
        (0, _lodash.set)(inputData, 'data.protocol.token', token);
      } catch (e) {
        console.log('wx-web-api->$preRequest().token: ', e);
      }
      return this.$promiseResult(inputData);
    }
  }, {
    key: "$promiseResult",
    value: function $promiseResult(data) {
      return (0, _promisify.promisify)(function (_ref2) {
        var resolve = _ref2.resolve;
        return resolve(data);
      })({});
    }
  }, {
    key: "$wxLogin",
    value: function $wxLogin() {
      return (0, _wxPromisify.wxPromisify)('login');
    }
    /**
     * 微信小程序登录filter
     * @param request 请求实体
     * @param response 响应实体
     * @param resolve
     */

  }, {
    key: "$wxAuthFilter",
    value: function $wxAuthFilter(request, response, resolve) {
      var _this2 = this;

      var payload = request.data;
      var result = response.data;
      if (result.code !== AUTH_ERROR_API_TOKEN_EXPIRED) {
        this.$saveTokenToStorage(result);
        return resolve(result);
      }
      console.log('this.$authTestCount:', this.$authTestCount);
      // 超过最大的置换TOKEN尝试次数
      if (this.$authTestCount >= 2) {
        return resolve({
          code: AUTH_ERROR_EXCEED_MAX_COUNT,
          message: '[code]置换token失败次数过多!',
          data: {}
        });
      }
      this.$authTestCount++;
      this.$wxLogin().then(function (result) {
        if (!result.code) {
          return resolve({
            code: AUTH_ERROR_GET_WX_CODE,
            message: result.errMsg
          });
        }
        (0, _lodash.set)(payload, 'protocol.code', result.code);
        _this2.$requestPost(payload).then(function (nextResult) {
          if (nextResult.code !== AUTH_ERROR_API_TOKEN_EXPIRED) {
            _this2.$authTestCount = 0;
          }
          if (nextResult.code === '0000') {
            _this2.$saveTokenToStorage(nextResult);
            resolve(nextResult);
          } else {
            resolve(nextResult);
          }
        });
      });
    }
  }, {
    key: "$saveTokenToStorage",
    value: function $saveTokenToStorage(authResult) {
      var token = (0, _lodash.get)(authResult, 'token', '') || (0, _lodash.get)(authResult, 'data.token', '');
      if (token) {
        _index2.default.setStorageSync(AUTH_TOKEN, token);
        console.log('saveAuthTokenSync: ', token);
      }
    }
    /**
     * POST请求
     * @author tianyingchun
     * @param  {String}   url    可选参数
     * @param  {Object}   data   必选，发送的数据对象
     * @param  {Object|Function}   config 必选如果是函数直接当成dto，否则当成配置对象，对象里面可以包含dto对象，和其他属性
     * @return {Object} 转换之后的参数: {url, data, dto, config}.
     */

  }, {
    key: "$adjustParameter",
    value: function $adjustParameter(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var dto = baseDefaultDto;
      if ((0, _lodash.isPlainObject)(url)) {
        data = (0, _lodash.extend)({}, url.data, data);
        url = url.url;
      }
      if (data.dto) {
        dto = data.dto;
        delete data.dto;
      }
      return { url: url, data: data, dto: dto, config: config };
    }
    /**
     * 请求步骤
     * prerequest: 从wxStorage中取token,如果有,塞到请求protocol.token中
     *             如果没有,调wx.login方法取到code,塞到请求protocol.code中,然后请求后台返回token
     * request: 如果后台返回正常token，则塞token到wxStorage中
     *          如果后台置换token失败，则再调wx.login取到code，塞到请求protocol.code中,然后再请求一次
     */

  }, {
    key: "$request",
    value: function $request(method, url) {
      var _this3 = this;

      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var config = arguments[3];

      var inputRawData = this.$adjustParameter(url, data, config);
      return this.$preRequest(inputRawData).then(function (inputData) {
        return _this3.$requestService[method](inputData.url, inputData.data, inputData.config).then(function (result) {
          return (0, _promisify.promisify)(_this3.$interceptorDto)({ requestData: inputData }, result).then(function (newResult) {
            return inputData.dto.call(_this3, newResult);
          });
        });
      }).catch(function (error) {
        throw new Error(error);
      });
    }
    /**
     * http request post
     * @param {String|Object} url optional <string> indicates request url, <object> indicates requestData it's parameter migration
     * @param {Object} data required request data
     * @param {Object} config optional
     */

  }, {
    key: "$requestPost",
    value: function $requestPost(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.$request('POST', url, data, (0, _lodash.extend)({}, config));
    }
  }, {
    key: "$requestGet",
    value: function $requestGet(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.$request('GET', url, data, (0, _lodash.extend)({}, config));
    }
  }]);

  return WxApi;
}();