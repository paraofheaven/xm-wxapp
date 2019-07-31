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

var PwdKeyBoard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PwdKeyBoard, _BaseComponent);

  function PwdKeyBoard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PwdKeyBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PwdKeyBoard.__proto__ || Object.getPrototypeOf(PwdKeyBoard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__16", "$compid__17", "disableClose", "animation1", "withConfirm", "animation2"], _this.onKeyboradNumber = function (text) {}, _this.customComponents = ["BottomUp", "PwdBox", "KeyBoard"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PwdKeyBoard, [{
    key: "_constructor",
    value: function _constructor() {
      _get(PwdKeyBoard.prototype.__proto__ || Object.getPrototypeOf(PwdKeyBoard.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        animation1: undefined,
        animation2: undefined
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
      var $compid__16 = (0, _index.genCompid)(__prefix + "$compid__16");
      var $compid__17 = (0, _index.genCompid)(__prefix + "$compid__17");

      var _props = this.__props,
          disableClose = _props.disableClose,
          withConfirm = _props.withConfirm;
      var _state = this.__state,
          animation1 = _state.animation1,
          animation2 = _state.animation2;

      var $props__16 = {
        "isOpen": true
      };
      var $props__17 = {
        "onKeyboradNumber": this.onKeyboradNumber
      };
      _index.propsManager.set($props__16, $compid__16);
      _index.propsManager.set($props__17, $compid__17);
      Object.assign(this.__state, {
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        disableClose: disableClose,
        withConfirm: withConfirm
      });
      return this.__state;
    }
  }]);

  return PwdKeyBoard;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "_components/pwd-keyboard/index", _temp2);


PwdKeyBoard.defaultProps = {
  disableClose: false,
  withConfirm: false
};
PwdKeyBoard.externalClass = ['v-class'];
exports.default = PwdKeyBoard;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PwdKeyBoard));