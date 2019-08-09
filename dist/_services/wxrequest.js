"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

exports.default = function () {
  var GET = request('GET');
  var POST = request('POST');
  var PUT = request('PUT');
  var DELETE = request('DELETE');
  return {
    GET: GET,
    POST: POST,
    PUT: PUT,
    DELETE: DELETE
  };
};

var _lodash = require("../npm/lodash/lodash.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request(method) {
  return function (url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = arguments[2];

    return new Promise(function (resolve, reject) {
      method = method || 'GET';
      _index2.default.request({
        url: url, data: data, method: method,
        header: (0, _lodash.extend)(true, {
          'Content-Type': 'application/json'
        }, config.header),
        success: function success(res) {
          var statusCode = res.statusCode;
          var isSuccess = statusCode >= 200 && statusCode < 300 || statusCode === 304;
          if (isSuccess) {
            resolve(res);
          } else {
            reject({ url: url, data: res.data, header: res.header, method: method, config: config, message: '网路请求错误，请稍后再试~' });
          }
        },
        fail: function fail(err) {
          reject({ code: 'wx_request_fail', url: url, data: data, method: method, config: config, message: err.errMsg || '网路请求不符合规范，请检查域名是否符合要求~' });
        }
      });
    });
  };
}