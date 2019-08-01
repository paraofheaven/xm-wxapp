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

var KeyboardDemo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(KeyboardDemo, _BaseComponent);

  function KeyboardDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyboardDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeyboardDemo.__proto__ || Object.getPrototypeOf(KeyboardDemo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__365", "$compid__366", "value1"], _this.handleChange = function (value) {
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
    }, _this.customComponents = ["AtForm", "AtInput", "KeyBoard", "AtMessage"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyboardDemo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(KeyboardDemo.prototype.__proto__ || Object.getPrototypeOf(KeyboardDemo.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
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
      var $compid__365 = (0, _index.genCompid)(__prefix + "$compid__365");
      var $compid__366 = (0, _index.genCompid)(__prefix + "$compid__366");

      var value1 = this.__state.value1;

      var $props__365 = {
        "name": "value1",
        "type": "text",
        "disabled": true,
        "placeholder": "\u70B9\u51FB\u952E\u76D8\u8F93\u5165",
        "value": value1,
        "onChange": this.handleChange.bind(this)
      };
      var $props__366 = {
        "onKeyboradClear": this.handleInputDelete,
        "onKeyboradFinish": this.handleInputConfirm,
        "onKeyboradNumber": this.handleInput
      };
      _index.propsManager.set($props__365, $compid__365);
      _index.propsManager.set($props__366, $compid__366);
      Object.assign(this.__state, {
        $compid__365: $compid__365,
        $compid__366: $compid__366
      });
      return this.__state;
    }
  }]);

  return KeyboardDemo;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/demo/keyboard/index", _temp2);
exports.default = KeyboardDemo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(KeyboardDemo, true));