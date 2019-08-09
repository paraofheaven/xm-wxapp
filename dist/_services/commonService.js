'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommonService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wxapi = require('./wxapi.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getHomeConfigDto = function getHomeConfigDto(result) {
  return result;
};

var CommonService = exports.CommonService = function (_WxApi) {
  _inherits(CommonService, _WxApi);

  function CommonService() {
    _classCallCheck(this, CommonService);

    return _possibleConstructorReturn(this, (CommonService.__proto__ || Object.getPrototypeOf(CommonService)).apply(this, arguments));
  }

  _createClass(CommonService, [{
    key: 'getHomeConfig',
    value: function getHomeConfig(param) {
      var req = this.$getReqData('homeApi', param);
      return this.$requestPost(req, {
        dto: getHomeConfigDto
      });
    }
  }, {
    key: '$getProtocol',
    value: function $getProtocol() {
      return {
        protocol: {
          fromPlatform: this.$getPlatform(),
          functionCode: 'a_bc'
        }
      };
    }
  }, {
    key: '$getYourCustomServiceConfig',
    value: function $getYourCustomServiceConfig() {
      return {
        homeApi: {
          me: 'http://me.ly.com:3000/api',
          inte: 'http://jr.qa.para.com/home/api',
          rc: 'http://jr.t.para.com/home/api',
          prod: 'http://jr.para.com/home/api'
        },
        detailApi: {
          me: 'http://me.ly.com:3000/api',
          inte: 'http://jr.qa.para.com/detail/api',
          rc: 'http://jr.t.para.com/detail/api',
          prod: 'http://jr.para.com/detail/api'
        }
      };
    }
  }]);

  return CommonService;
}(_wxapi.WxApi);

exports.default = new CommonService();