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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PwdKeyBoard.__proto__ || Object.getPrototypeOf(PwdKeyBoard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__330", "$compid__331", "$compid__332", "animation1", "withConfirm", "animation2", "pwdboxValue", "confirm", "isOpen", "onClose", "closeOnClickOverlay"], _this.onKeyboradNumber = function (value) {
      var _this$state = _this.state,
          pwdboxValue = _this$state.pwdboxValue,
          confirm = _this$state.confirm;

      if (pwdboxValue.length < 6) {
        pwdboxValue += value;
        _this.setState({
          pwdboxValue: pwdboxValue
        });
        if (!confirm) {
          _this.pwdboxRef1.setInputState(pwdboxValue);
        } else {
          _this.pwdboxRef2.setInputState(pwdboxValue);
        }
      }
    }, _this.onKeyboradClear = function () {
      var _this$state2 = _this.state,
          pwdboxValue = _this$state2.pwdboxValue,
          confirm = _this$state2.confirm;

      if (pwdboxValue.length > 0) {
        pwdboxValue = pwdboxValue.substring(0, pwdboxValue.length - 1);
        _this.setState({
          pwdboxValue: pwdboxValue
        });
        if (!confirm) {
          _this.pwdboxRef1.clearInputState();
        } else {
          _this.pwdboxRef2.clearInputState();
        }
      }
    }, _this.onBottomUpClose = function () {
      _this.setState({
        isOpen: false
      });
    }, _this.onInputFinish = function (code) {
      var withConfirm = _this.props.withConfirm;

      if (!withConfirm) {
        _this.props.onInputFinish(code);
      }
      _this.setState({
        confirm: true
      }, function () {
        _this.createAnimation();
      });
    }, _this.createAnimation = function (reset) {
      var screenWidth = 375;
      var translate = -375;
      var baseAnimateConfig = {
        duration: 500,
        timingFunction: 'ease',
        delay: 0
      };
      var animation1 = _index2.default.createAnimation(baseAnimateConfig);
      var animation2 = _index2.default.createAnimation(baseAnimateConfig);
      animation1.translate(reset ? 0 : translate).step();
      animation2.translate(reset ? 0 : translate).step();
      _this.setState({
        animation1: animation1.export(),
        animation2: animation2.export()
      });
      _this.pwdboxRef1.clearInputState();
      _this.pwdboxRef2.clearInputState();
      _this.setState({
        pwdboxValue: ''
      });
    }, _this.customComponents = ["BottomUp", "PwdBox", "KeyBoard"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PwdKeyBoard, [{
    key: "_constructor",
    value: function _constructor() {
      var _this2 = this;

      _get(PwdKeyBoard.prototype.__proto__ || Object.getPrototypeOf(PwdKeyBoard.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        animation1: undefined,
        animation2: undefined,
        pwdboxValue: '',
        confirm: false
      };
      this.$$refs = [{
        type: "component",
        id: "GmHkH",
        refName: "",
        fn: function fn(ref) {
          _this2.pwdboxRef1 = ref;
        }
      }, {
        type: "component",
        id: "QzyYg",
        refName: "",
        fn: function fn(ref) {
          _this2.pwdboxRef2 = ref;
        }
      }];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__330 = (0, _index.genCompid)(__prefix + "$compid__330");
      var $compid__331 = (0, _index.genCompid)(__prefix + "$compid__331");
      var $compid__332 = (0, _index.genCompid)(__prefix + "$compid__332");

      var _props = this.__props,
          isOpen = _props.isOpen,
          withConfirm = _props.withConfirm,
          onClose = _props.onClose,
          closeOnClickOverlay = _props.closeOnClickOverlay;
      var _state = this.__state,
          animation1 = _state.animation1,
          animation2 = _state.animation2;

      var $props__330 = {
        "isOpen": isOpen,
        "closeOnClickOverlay": closeOnClickOverlay,
        "onClose": this.__props.onClose
      };
      var $props__331 = {
        "onInputFinish": this.onInputFinish
      };
      var $props__332 = {
        "hideFinishBtn": true,
        "onKeyboradNumber": this.onKeyboradNumber,
        "onKeyboradClear": this.onKeyboradClear
      };
      _index.propsManager.set($props__330, $compid__330);
      _index.propsManager.set($props__331, $compid__331);
      _index.propsManager.set($props__332, $compid__332);
      Object.assign(this.__state, {
        $compid__330: $compid__330,
        $compid__331: $compid__331,
        $compid__332: $compid__332,
        withConfirm: withConfirm
      });
      return this.__state;
    }
  }]);

  return PwdKeyBoard;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "_components/pwd-keyboard/index", _temp2);


PwdKeyBoard.defaultProps = {
  isOpen: false,
  closeOnClickOverlay: false,
  disableClose: false,
  withConfirm: false,
  onClose: function onClose() {},
  onInputFinish: function onInputFinish() {}
};
PwdKeyBoard.externalClass = ['v-class'];
exports.default = PwdKeyBoard;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PwdKeyBoard));