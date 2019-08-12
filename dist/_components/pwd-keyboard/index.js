"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PwdKeyBoard.__proto__ || Object.getPrototypeOf(PwdKeyBoard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__35", "$compid__36", "$compid__37", "$compid__38", "animation1", "withConfirm", "animation2", "message", "pwdboxValue", "confirm", "isOpen", "closeOnClickOverlay", "pwdbox1Config", "pwdbox2Config", "confirmErrorMsg"], _this.onKeyboradNumber = function (value) {
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
    }, _this.onKeyboradDelete = function () {
      var _this$state2 = _this.state,
          pwdboxValue = _this$state2.pwdboxValue,
          confirm = _this$state2.confirm;

      if (pwdboxValue.length > 0) {
        pwdboxValue = pwdboxValue.substring(0, pwdboxValue.length - 1);
        _this.setState({
          pwdboxValue: pwdboxValue
        });
        if (!confirm) {
          _this.pwdboxRef1.setInputState(pwdboxValue);
        } else {
          _this.pwdboxRef2.setInputState(pwdboxValue);
        }
      }
    }, _this.onBottomUpClose = function () {
      _this.setState({
        confirm: false,
        pwdboxValue: ''
      });
      _this.props.onClose();
      _this.pwdboxRef1.clearInputState();
      if (_this.props.withConfirm) {
        _this.pwdboxRef2.clearInputState();
        _this.resetBoxAnimation();
      }
    }, _this.onInputFinish = function (code1) {
      var withConfirm = _this.props.withConfirm;

      if (!withConfirm) {
        _this.onBottomUpClose();
        _this.props.onInputFinish(code1);
        return;
      }
      _this.code1 = code1;
      _this.setState({
        confirm: true
      }, function () {
        _this.createAnimation();
      });
    }, _this.onInputFinishConfirm = function (code2) {
      if (_this.code1 !== code2) {
        _this.setState({
          message: _this.props.confirmErrorMsg
        });
        setTimeout(function () {
          _this.setState({
            message: ''
          });
          _this.resetBoxAnimation();
        }, 1500);
        return;
      }
      _this.onBottomUpClose();
      _this.props.onInputFinish(_this.code1);
    }, _this.resetBoxAnimation = function () {
      _this.setState({
        confirm: false
      });
      _this.createAnimation(true);
    }, _this.createAnimation = function (reset) {
      var translate = -_this.screenWidth;
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
        confirm: false,
        message: ''
      };
      this.$$refs = [{
        type: "component",
        id: "IsPYw",
        refName: "",
        fn: function fn(ref) {
          _this2.bottomupRef = ref;
        }
      }, {
        type: "component",
        id: "uNbLu",
        refName: "",
        fn: function fn(ref) {
          _this2.pwdboxRef1 = ref;
        }
      }, {
        type: "component",
        id: "uHYRt",
        refName: "",
        fn: function fn(ref) {
          _this2.pwdboxRef2 = ref;
        }
      }];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var res = _index2.default.getSystemInfoSync();
        this.screenWidth = res.screenWidth || 375;
      } catch (error) {
        _index2.default.showToast({
          title: error.message || '获取系统信息失败',
          icon: 'failed'
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__35 = (0, _index.genCompid)(__prefix + "$compid__35");
      var $compid__36 = (0, _index.genCompid)(__prefix + "$compid__36");
      var $compid__37 = (0, _index.genCompid)(__prefix + "$compid__37");
      var $compid__38 = (0, _index.genCompid)(__prefix + "$compid__38");

      var _props = this.__props,
          isOpen = _props.isOpen,
          onClose = _props.onClose,
          withConfirm = _props.withConfirm,
          closeOnClickOverlay = _props.closeOnClickOverlay,
          pwdbox1Config = _props.pwdbox1Config,
          pwdbox2Config = _props.pwdbox2Config;
      var _state = this.__state,
          animation1 = _state.animation1,
          animation2 = _state.animation2,
          message = _state.message;

      var $props__35 = {
        "isOpen": isOpen,
        "closeOnClickOverlay": closeOnClickOverlay,
        "onClose": this.__props.onClose
      };
      var $props__36 = _extends({}, pwdbox1Config, {
        "onInputFinish": this.onInputFinish
      });
      var $props__37 = _extends({}, pwdbox2Config, {
        "onInputFinish": this.onInputFinishConfirm
      });
      var $props__38 = {
        "hideFinishBtn": true,
        "onKeyboradNumber": this.onKeyboradNumber,
        "onKeyboradDelete": this.onKeyboradDelete
      };
      _index.propsManager.set($props__35, $compid__35);
      _index.propsManager.set($props__36, $compid__36);
      withConfirm && _index.propsManager.set($props__37, $compid__37);
      _index.propsManager.set($props__38, $compid__38);
      Object.assign(this.__state, {
        $compid__35: $compid__35,
        $compid__36: $compid__36,
        $compid__37: $compid__37,
        $compid__38: $compid__38,
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
  withConfirm: false,
  confirmErrorMsg: '两次输入不一致，请重新输入！',
  pwdbox1Config: {
    title: '请输入支付密码',
    subTitle: '',
    showForgetPwd: true
  },
  pwdbox2Config: {
    title: '再次确认',
    subTitle: '',
    showForgetPwd: false
  },
  onClose: function onClose() {},
  onInputFinish: function onInputFinish() {}
};
PwdKeyBoard.externalClass = ['v-class'];
exports.default = PwdKeyBoard;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PwdKeyBoard));