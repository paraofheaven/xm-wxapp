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

var Source = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Source, _BaseComponent);

  function Source() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Source);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Source.__proto__ || Object.getPrototypeOf(Source)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__319", "isActionOpened"], _this.config = {
      navigationBarTitleText: '联系我们'
    }, _this.callingPhone = function () {
      _index2.default.makePhoneCall({
        phoneNumber: '17301631743'
      });
    }, _this.joinus = function () {
      _index2.default.navigateTo({
        url: '/pages/joinus/index'
      });
    }, _this.showActionSheet = function () {
      _this.setState({
        isActionOpened: true
      });
    }, _this.customComponents = ["AtActionSheet", "AtActionSheetItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Source, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Source.prototype.__proto__ || Object.getPrototypeOf(Source.prototype), "_constructor", this).apply(this, arguments);
      /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

      this.state = {
        isActionOpened: false
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
      var $compid__319 = (0, _index.genCompid)(__prefix + "$compid__319");

      var isActionOpened = this.__state.isActionOpened;

      var $props__319 = {
        "className": "contact-action-sheet",
        "isOpened": isActionOpened
      };
      _index.propsManager.set($props__319, $compid__319);
      Object.assign(this.__state, {
        $compid__319: $compid__319
      });
      return this.__state;
    }
  }]);

  return Source;
}(_index.Component), _class.$$events = ["callingPhone", "joinus", "showActionSheet"], _class.$$componentPath = "pages/contact/index", _temp2);
exports.default = Source;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Source, true));