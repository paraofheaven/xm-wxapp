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

var _isFunction2 = require("../../npm/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Modal, _BaseComponent);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "visible", "actionClassName", "hideMask", "_isOpen", "zIndex", "fullScreen", "closeOnClickOverlay", "isOpen", "children"], _this.closeByDocument = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.handleClose();
      }
    }, _this.handleClose = function () {
      if (!_this.state._isOpen) {
        return;
      }
      _this.setState({
        _isOpen: false
      }, function () {
        _this.modalTimer = setTimeout(function () {
          _this.setState({ visible: false });
          if ((0, _isFunction3.default)(_this.props.onClose)) {
            _this.props.onClose();
          }
        }, 400);
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Modal.prototype.__proto__ || Object.getPrototypeOf(Modal.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        visible: false,
        _isOpen: false
      };

      var isOpen = props.isOpen;

      this.state = {
        _isOpen: isOpen,
        visible: isOpen
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var isOpen = nextProps.isOpen;

      if (isOpen !== this.state._isOpen) {
        this.setState({
          _isOpen: isOpen
        }, function () {
          _this2.modalTimer = setTimeout(function () {
            _this2.setState({ visible: isOpen });
          }, 400);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.modalTimer);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          zIndex = _props.zIndex,
          hideMask = _props.hideMask,
          fullScreen = _props.fullScreen;
      var _state = this.__state,
          visible = _state.visible,
          _isOpen = _state._isOpen;

      if (!visible) {
        return null;
      }
      var actionClassName = "v-modal " + (_isOpen ? 'v-modal-open' : 'v-modal-close') + " v-class";
      var anonymousState__temp = (0, _index.internal_inline_style)({ zIndex: zIndex });
      var anonymousState__temp2 = (0, _index4.default)('v-modal-wrap', { 'v-modal-fullScreen': fullScreen });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        actionClassName: actionClassName,
        hideMask: hideMask
      });
      return this.__state;
    }
  }]);

  return Modal;
}(_index.Component), _class.$$events = ["closeByDocument"], _class.$$componentPath = "_components/modal/index", _temp2);


Modal.defaultProps = {
  isOpen: false,
  zIndex: 100,
  hideMask: false,
  fullScreen: false,
  closeOnClickOverlay: true,
  onClose: function onClose() {}
};
Modal.externalClass = ['v-class'];
exports.default = Modal;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Modal));