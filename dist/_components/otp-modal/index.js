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

var OtpModal = (_temp2 = _class = function (_BaseComponent) {
  _inherits(OtpModal, _BaseComponent);

  function OtpModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OtpModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OtpModal.__proto__ || Object.getPrototypeOf(OtpModal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__587", "$compid__588", "$compid__589", "codeNumbers", "codeValue", "btnDisabled", "btnLoading", "title", "desc", "isOpen", "onSendRequest", "__fn_call"], _this.handleInput = function (e) {
      var value = e.detail.value;
      _this.setInputState(value);
    }, _this.setInputState = function (value) {
      var codeNumbers = Object.assign({ length: 6 }, defaultNumbers, value.split(''));
      codeNumbers = Array.prototype.slice.call(codeNumbers);
      _this.setState({
        codeNumbers: codeNumbers,
        codeValue: value
      });
      if (value.length >= 6) {
        _this.setState({
          btnDisabled: false
        });
      } else {
        _this.setState({
          btnDisabled: true
        });
      }
    }, _this.submit = function (value) {
      if (value || value.length !== 6) {
        return;
      }
      _this.props.onInputFinish(value);
    }, _this.customComponents = ["Modal", "MyIcon", "Otp"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OtpModal, [{
    key: '_constructor',
    value: function _constructor() {
      _get(OtpModal.prototype.__proto__ || Object.getPrototypeOf(OtpModal.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        codeNumbers: defaultNumbers,
        codeValue: '',
        btnDisabled: true,
        btnLoading: false
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
      var $compid__587 = (0, _index.genCompid)(__prefix + "$compid__587");
      var $compid__588 = (0, _index.genCompid)(__prefix + "$compid__588");
      var $compid__589 = (0, _index.genCompid)(__prefix + "$compid__589");

      var _props = this.__props,
          isOpen = _props.isOpen,
          title = _props.title,
          desc = _props.desc,
          onSendRequest = _props.onSendRequest;
      var _state = this.__state,
          codeNumbers = _state.codeNumbers,
          codeValue = _state.codeValue,
          btnDisabled = _state.btnDisabled,
          btnLoading = _state.btnLoading;

      var $props__587 = {
        "isOpen": isOpen
      };
      var $props__588 = {
        "value": "close",
        "size": 22,
        "color": "#999"
      };
      var $props__589 = {
        "autoStart": true,
        "onSendRequest": this.__props.onSendRequest
      };
      _index.propsManager.set($props__587, $compid__587);
      _index.propsManager.set($props__588, $compid__588);
      _index.propsManager.set($props__589, $compid__589);
      Object.assign(this.__state, {
        $compid__587: $compid__587,
        $compid__588: $compid__588,
        $compid__589: $compid__589,
        title: title,
        desc: desc
      });
      return this.__state;
    }
  }]);

  return OtpModal;
}(_index.Component), _class.$$events = ["handleInput", "submit"], _class.$$componentPath = "_components/otp-modal/index", _temp2);


OtpModal.defaultProps = {
  title: '请输入短信验证码',
  desc: '请输入发送到您手机的验证码',
  closeOnClickOverlay: false,
  onInputFinish: function onInputFinish() {},
  onSendRequest: function onSendRequest() {}
};
OtpModal.externalClass = ['v-class'];
exports.default = OtpModal;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OtpModal));