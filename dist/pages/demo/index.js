"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Demo, _BaseComponent);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__341", "$compid__342", "$compid__343", "$compid__344", "$compid__345", "$compid__346", "bottomupOpen", "value1"], _this.config = {
      navigationBarTitleText: 'demo'
    }, _this.openBottomUp = function () {
      _this.setState({
        bottomupOpen: true
      });
    }, _this.closeBottomUp = function () {
      _this.setState({
        bottomupOpen: false
      });
    }, _this.handleChange = function (value) {
      _this.setState({
        value1: value
      });
    }, _this.handleInputDelete = function () {
      _this.setState({
        value1: _this.state.value1.substring(0, _this.state.value1.length - 1)
      });
    }, _this.handleInputConfirm = function () {
      _index2.default.atMessage({
        message: "\u5F53\u524Dinput\u503C:" + _this.state.value1
      });
    }, _this.handleInput = function (text) {
      _this.setState({
        value1: _this.state.value1 + text
      });
    }, _this.sendRequest = function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 2000);
      });
    }, _this.onPwdInputFinish = function (value) {
      _index2.default.atMessage({
        message: "\u8F93\u5165\u7684\u5BC6\u7801\u4E3A\uFF1A" + value
      });
    }, _this.customComponents = ["AtButton", "AtForm", "AtInput", "Otp", "PwdBox", "BottomUp", "KeyBoard", "AtMessage"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Demo.prototype.__proto__ || Object.getPrototypeOf(Demo.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        bottomupOpen: false,
        value1: ''
      };
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
      var $compid__341 = (0, _index.genCompid)(__prefix + "$compid__341");
      var $compid__342 = (0, _index.genCompid)(__prefix + "$compid__342");
      var $compid__343 = (0, _index.genCompid)(__prefix + "$compid__343");
      var $compid__344 = (0, _index.genCompid)(__prefix + "$compid__344");
      var $compid__345 = (0, _index.genCompid)(__prefix + "$compid__345");
      var $compid__346 = (0, _index.genCompid)(__prefix + "$compid__346");

      var _state = this.__state,
          bottomupOpen = _state.bottomupOpen,
          value1 = _state.value1;

      var $props__341 = {
        "onClick": this.openBottomUp
      };
      var $props__342 = {
        "name": "value1",
        "type": "text",
        "disabled": true,
        "placeholder": "\u70B9\u51FB\u952E\u76D8\u8F93\u5165",
        "value": value1,
        "onChange": this.handleChange.bind(this)
      };
      var $props__343 = {
        "autoStart": true,
        "totalTicks": 100,
        "format": "{t}s后重发",
        "sendTxt": '获取动态码',
        "processingTxt": '短信发送中',
        "onSendRequest": this.sendRequest
      };
      var $props__344 = {
        "onInputFinish": this.onPwdInputFinish
      };
      var $props__345 = {
        "title": "\u6807\u9898",
        "isOpen": bottomupOpen,
        "closeOnClickOverlay": true,
        "onClose": this.closeBottomUp
      };
      var $props__346 = {
        "onKeyboradClear": this.handleInputDelete,
        "onKeyboradFinish": this.handleInputConfirm,
        "onKeyboradNumber": this.handleInput
      };
      _index.propsManager.set($props__341, $compid__341);
      _index.propsManager.set($props__342, $compid__342);
      _index.propsManager.set($props__343, $compid__343);
      _index.propsManager.set($props__344, $compid__344);
      _index.propsManager.set($props__345, $compid__345);
      _index.propsManager.set($props__346, $compid__346);
      Object.assign(this.__state, {
        $compid__341: $compid__341,
        $compid__342: $compid__342,
        $compid__343: $compid__343,
        $compid__344: $compid__344,
        $compid__345: $compid__345,
        $compid__346: $compid__346
      });
      return this.__state;
    }
  }]);

  return Demo;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/demo/index", _temp2);
exports.default = Demo;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Demo, true));