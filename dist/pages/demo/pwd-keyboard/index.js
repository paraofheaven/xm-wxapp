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

var PwdKeyBoardDemo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PwdKeyBoardDemo, _BaseComponent);

  function PwdKeyBoardDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PwdKeyBoardDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PwdKeyBoardDemo.__proto__ || Object.getPrototypeOf(PwdKeyBoardDemo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__369", "$compid__370", "$compid__371", "isPwdOpen", "test"], _this.openPwdKeyBoard = function () {
      _this.setState({
        isPwdOpen: true
      });
    }, _this.test = function () {
      _this.setState({
        test: 'haohaoah'
      }, function () {
        _index2.default.atMessage({
          message: _this.state.test
        });
      });
    }, _this.onClose = function () {
      _this.setState({
        isPwdOpen: false
      });
    }, _this.onInputFinish = function (value) {
      _index2.default.atMessage({
        message: "\u8BBE\u7F6E\u5BC6\u7801\u4E3A:" + value
      });
    }, _this.customComponents = ["AtButton", "PwdKeyBoard", "AtMessage"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PwdKeyBoardDemo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PwdKeyBoardDemo.prototype.__proto__ || Object.getPrototypeOf(PwdKeyBoardDemo.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        isPwdOpen: false,
        test: ''
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
      var $compid__369 = (0, _index.genCompid)(__prefix + "$compid__369");
      var $compid__370 = (0, _index.genCompid)(__prefix + "$compid__370");
      var $compid__371 = (0, _index.genCompid)(__prefix + "$compid__371");

      var isPwdOpen = this.__state.isPwdOpen;

      var $props__369 = {
        "onClick": this.openPwdKeyBoard
      };
      var $props__370 = {
        "onClick": this.test
      };
      var $props__371 = {
        "isOpen": isPwdOpen,
        "withConfirm": true,
        "onClose": this.onClose,
        "onInputFinish": this.onInputFinish
      };
      _index.propsManager.set($props__369, $compid__369);
      _index.propsManager.set($props__370, $compid__370);
      _index.propsManager.set($props__371, $compid__371);
      Object.assign(this.__state, {
        $compid__369: $compid__369,
        $compid__370: $compid__370,
        $compid__371: $compid__371
      });
      return this.__state;
    }
  }]);

  return PwdKeyBoardDemo;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/demo/pwd-keyboard/index", _temp2);
exports.default = PwdKeyBoardDemo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PwdKeyBoardDemo, true));