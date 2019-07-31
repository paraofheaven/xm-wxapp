"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OtpDemo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OtpDemo, _BaseComponent);

  function OtpDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OtpDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OtpDemo.__proto__ || Object.getPrototypeOf(OtpDemo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__232"], _this.sendRequest = function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 2000);
      });
    }, _this.customComponents = ["Otp"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OtpDemo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(OtpDemo.prototype.__proto__ || Object.getPrototypeOf(OtpDemo.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__232 = (0, _index.genCompid)(__prefix + "$compid__232");
      var $props__232 = {
        "autoStart": true,
        "totalTicks": 100,
        "format": "{t}s后重发",
        "sendTxt": '获取动态码',
        "processingTxt": '短信发送中',
        "onSendRequest": this.sendRequest
      };
      _index.propsManager.set($props__232, $compid__232);
      Object.assign(this.__state, {
        $compid__232: $compid__232
      });
      return this.__state;
    }
  }]);

  return OtpDemo;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/demo/otp/index", _temp2);
exports.default = OtpDemo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OtpDemo, true));