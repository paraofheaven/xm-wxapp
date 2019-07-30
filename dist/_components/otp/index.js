"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/classnames/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Otp = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Otp, _BaseComponent);

  function Otp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Otp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Otp.__proto__ || Object.getPrototypeOf(Otp)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "ticksNumber", "running", "sendTxt", "beforeSendRequest", "processingTxt", "totalTicks", "duration", "sentTxt", "format"], _this.handleStart = function () {
      var _this$props = _this.props,
          beforeSendRequest = _this$props.beforeSendRequest,
          processingTxt = _this$props.processingTxt,
          onSendRequest = _this$props.onSendRequest,
          sendTxt = _this$props.sendTxt,
          totalTicks = _this$props.totalTicks;
      // 如果该函数返回false，则不请求

      if (!beforeSendRequest()) {
        return;
      }
      if (_this.state.running) {
        return;
      }
      _this.setState({
        ticksNumber: processingTxt,
        running: true
      });
      try {
        _this.props.onSendRequest().then(function () {
          _this._startTicker(totalTicks);
        });
      } catch (error) {
        _this.setState({
          ticksNumber: sendTxt,
          running: false
        });
      }
    }, _this._startTicker = function (count) {
      var _this$props2 = _this.props,
          duration = _this$props2.duration,
          sentTxt = _this$props2.sentTxt;

      _this.setState({
        ticksNumber: _this._formatMessage(count),
        running: true
      });
      _this.ticksTimer = setTimeout(function () {
        if (count > 1) {
          _this._startTicker(count - 1);
        } else {
          _this.setState({
            ticksNumber: sentTxt,
            running: false
          });
        }
      }, duration);
    }, _this._formatMessage = function (count) {
      var _this$props$format = _this.props.format,
          format = _this$props$format === undefined ? '' : _this$props$format;

      return format.replace('{t}', count);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Otp, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Otp.prototype.__proto__ || Object.getPrototypeOf(Otp.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        running: false,
        ticksNumber: ''
      };
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var sendTxt = this.props.sendTxt;

      if (this.ticksTimer) {
        clearTimeout(this.ticksTimer);
      }
      this.setState({
        ticksNumber: sendTxt
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.ticksTimer);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          running = _state.running,
          ticksNumber = _state.ticksNumber;

      var anonymousState__temp = (0, _index4.default)('v-otp', 'v-class', { 'v-optlite-running': running });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return Otp;
}(_index.Component), _class.$$events = ["handleStart"], _class.$$componentPath = "_components/otp/index", _temp2);


Otp.defaultProps = {
  totalTicks: 60,
  duration: 1000,
  autoStart: false,
  format: "{t}s后可重发",
  sendTxt: '获取验证码',
  sentTxt: '重新获取',
  processingTxt: '发送中...',
  beforeSendRequest: function beforeSendRequest() {
    return true;
  },
  onSendRequest: function onSendRequest() {}
};
Otp.externalClasses = ['v-class'];
exports.default = Otp;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Otp));