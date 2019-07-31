'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require('../../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultNumbers = ['', '', '', '', '', ''];

var PwdBox = (_temp2 = _class = function (_BaseComponent) {
  _inherits(PwdBox, _BaseComponent);

  function PwdBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PwdBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PwdBox.__proto__ || Object.getPrototypeOf(PwdBox)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["title", "subTitle", "pwdNumbers", "pwdValue", "message", "showForgetPwd", "forgetPwdText", "__fn_call", "forgetPwdLink"], _this.onPwdInput = function (e) {
      var value = e.detail.value;
      var pwdNumbers = Object.assign({ length: 6 }, defaultNumbers, value.split(''));
      pwdNumbers = Array.prototype.slice.call(pwdNumbers);
      _this.setState({
        pwdNumbers: pwdNumbers,
        pwdValue: value
      });
      if (value.length >= 6) {
        _this._onInputFinish(value);
      }
    }, _this._onInputFinish = function (value) {
      if (value.length !== 6) {
        return;
      }
      _this.props.onInputFinish(value);
    }, _this.forgetPwd = function () {
      var _this$props = _this.props,
          showForgetPwd = _this$props.showForgetPwd,
          forgetPwdLink = _this$props.forgetPwdLink;

      if (showForgetPwd && !forgetPwdLink) {
        throw new Error('forgetPwdLink is undefined!');
      }
      _index2.default.showLoading();
      _index2.default.navigateTo({
        url: _this.props.forgetPwdLink || ''
      });
      _index2.default.hideLoading();
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PwdBox, [{
    key: '_constructor',
    value: function _constructor() {
      _get(PwdBox.prototype.__proto__ || Object.getPrototypeOf(PwdBox.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        pwdNumbers: defaultNumbers,
        pwdValue: ''
      };
      this.$$refs = [];
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          title = _props.title,
          subTitle = _props.subTitle,
          message = _props.message,
          showForgetPwd = _props.showForgetPwd,
          forgetPwdText = _props.forgetPwdText;
      var _state = this.__state,
          pwdNumbers = _state.pwdNumbers,
          pwdValue = _state.pwdValue;

      Object.assign(this.__state, {
        title: title,
        subTitle: subTitle,
        message: message,
        showForgetPwd: showForgetPwd,
        forgetPwdText: forgetPwdText
      });
      return this.__state;
    }
  }]);

  return PwdBox;
}(_index.Component), _class.$$events = ["onPwdInput", "forgetPwd"], _class.$$componentPath = "_components/pwd-box/index", _temp2);


PwdBox.defaultProps = {
  title: '请输入支付密码',
  subTitle: '',
  message: '',
  showForgetPwd: false,
  forgetPwdLink: '',
  forgetPwdText: '忘记密码?',
  onInputFinish: function onInputFinish() {}
};
PwdBox.externalClass = ['v-class'];
exports.default = PwdBox;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(PwdBox));