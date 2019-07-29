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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoticeBar = (_temp2 = _class = function (_BaseComponent) {
  _inherits(NoticeBar, _BaseComponent);

  function NoticeBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NoticeBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NoticeBar.__proto__ || Object.getPrototypeOf(NoticeBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__77", "$compid__78", "visible", "closable", "animation", "duration", "delay", "loop", "children"], _this.initAnimation = function () {
      var animation = _index2.default.createAnimation({
        duration: _this.resetDuration,
        timingFunction: 'linear'
      });
      animation.translateX('-100%').step();
    }, _this.customComponents = ["MyIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NoticeBar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(NoticeBar.prototype.__proto__ || Object.getPrototypeOf(NoticeBar.prototype), "_constructor", this).apply(this, arguments);
      this.defaultProps = {
        closable: true,
        loop: true
      };
      this.state = {
        visible: true,
        animation: null,
        duration: 6000,
        delay: 1000
      };
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var loop = this.props.loop;

      if (loop) {
        _index2.default.createSelectorQuery().in(this).select('.v-noticebar-wrap').boundingClientRect().exec(function (rectWrap) {
          var wrapWidth = rectWrap[0].width;
          _index2.default.createSelectorQuery().in(_this2).select('.v-noticebar-content').boundingClientRect().exec(function (rectContent) {
            var contentWidth = rectContent[0].width;
            _this2.resetDuration = _this2.state.duration * wrapWidth / contentWidth;
            setTimeout(function () {
              _this2.initAnimation();
            }, _this2.state.delay);
          });
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
      var $compid__77 = (0, _index.genCompid)(__prefix + "$compid__77");
      var $compid__78 = (0, _index.genCompid)(__prefix + "$compid__78");

      var visible = this.__state.visible;
      var _props = this.__props,
          loop = _props.loop,
          closable = _props.closable;

      if (!visible) {
        return null;
      }
      var anonymousState__temp = (0, _index4.default)('v-noticebar-content', _defineProperty({}, 'v-noticebar-loop', loop));
      var $props__77 = {
        "value": "horn"
      };
      var $props__78 = {
        "value": "close"
      };
      _index.propsManager.set($props__77, $compid__77);
      closable && _index.propsManager.set($props__78, $compid__78);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__77: $compid__77,
        $compid__78: $compid__78,
        closable: closable
      });
      return this.__state;
    }
  }]);

  return NoticeBar;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "_components/noticebar/index", _temp2);


NoticeBar.externalClasses = ['v-class'];
exports.default = NoticeBar;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(NoticeBar));