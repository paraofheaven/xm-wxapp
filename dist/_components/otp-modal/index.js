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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OtpModal.__proto__ || Object.getPrototypeOf(OtpModal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp3", "loopArray26", "$compid__137", "$compid__138", "$compid__139", "codeNumbers", "codeValue", "btnDisabled", "btnLoading", "title", "desc", "isOpen", "closeOnClickOverlay", "color", "onSendRequest", "__fn_call"], _this.clearInputState = function () {
      _this.setState({
        codeNumbers: defaultNumbers,
        codeValue: ''
      });
    }, _this.handleInput = function (e) {
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
    }, _this.submit = function () {
      var value = _this.state.codeValue;
      if (!value || value.length !== 6) {
        return;
      }
      _this.props.onInputFinish(value);
      _this.clearInputState();
      _this.props.onClose();
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
      var $compid__137 = (0, _index.genCompid)(__prefix + "$compid__137");
      var $compid__138 = (0, _index.genCompid)(__prefix + "$compid__138");
      var $compid__139 = (0, _index.genCompid)(__prefix + "$compid__139");

      var _props = this.__props,
          isOpen = _props.isOpen,
          closeOnClickOverlay = _props.closeOnClickOverlay,
          onClose = _props.onClose,
          title = _props.title,
          desc = _props.desc,
          color = _props.color,
          onSendRequest = _props.onSendRequest;
      var _state = this.__state,
          codeNumbers = _state.codeNumbers,
          codeValue = _state.codeValue,
          btnDisabled = _state.btnDisabled,
          btnLoading = _state.btnLoading;

      var anonymousState__temp3 = (0, _index.internal_inline_style)({ color: color });
      var $props__137 = {
        "isOpen": isOpen,
        "closeOnClickOverlay": closeOnClickOverlay
      };
      var $props__138 = {
        "value": "close",
        "size": 22,
        "color": "#999",
        "onClick": this.__props.onClose
      };
      var $props__139 = {
        "autoStart": true,
        "onSendRequest": this.__props.onSendRequest
      };
      var loopArray26 = codeNumbers.map(function (item, _anonIdx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = (0, _index.internal_inline_style)({ color: color });
        return {
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      _index.propsManager.set($props__137, $compid__137);
      _index.propsManager.set($props__138, $compid__138);
      _index.propsManager.set($props__139, $compid__139);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        loopArray26: loopArray26,
        $compid__137: $compid__137,
        $compid__138: $compid__138,
        $compid__139: $compid__139,
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
  color: '#1FC756',
  closeOnClickOverlay: false,
  onClose: function onClose() {},
  onInputFinish: function onInputFinish() {},
  beforeSendRequest: function beforeSendRequest() {
    return true;
  },
  onSendRequest: function onSendRequest() {}
};
OtpModal.externalClass = ['v-class'];
exports.default = OtpModal;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(OtpModal));