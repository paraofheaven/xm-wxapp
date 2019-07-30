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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "loopArray0", "$compid__0", "scrollIntoView", "current"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.changeSwiperIndex = function (e) {
      _this.setState({
        current: e.detail.current
      });
    }, _this.callingPhone = function () {
      _index2.default.makePhoneCall({
        phoneNumber: '17301631743'
      });
    }, _this.scrollToElement = function (ele) {
      _this.setState({
        scrollIntoView: ele
      });
    }, _this.customComponents = ["NoticeBar"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        current: 0,
        scrollIntoView: ''
      };
      this.$$refs = [];
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      _index2.default.showLoading({
        title: '正在加载...'
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _index2.default.hideLoading();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__0 = (0, _index.genCompid)(__prefix + "$compid__0");

      var _state = this.__state,
          current = _state.current,
          scrollIntoView = _state.scrollIntoView;

      var scrollStyle = { height: '600px' };
      var anonymousState__temp = (0, _index.internal_inline_style)(scrollStyle);
      var $props__0 = {
        "loop": true
      };
      var loopArray0 = ['', ''].map(function (em, index) {
        em = {
          $original: (0, _index.internal_get_original)(em)
        };
        var $loopState__temp3 = (0, _index4.default)('swiper-dot', { 'swiper-active': index === current });
        var $loopState__temp5 = String(index);
        return {
          $loopState__temp3: $loopState__temp3,
          $loopState__temp5: $loopState__temp5,
          $original: em.$original
        };
      });
      _index.propsManager.set($props__0, $compid__0);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray0: loopArray0,
        $compid__0: $compid__0
      });
      return this.__state;
    }
  }]);

  return Index;
}(_index.Component), _class.$$events = ["changeSwiperIndex", "scrollToElement", "callingPhone"], _class.$$componentPath = "pages/index/index", _temp2);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));