"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _uri = require("../../../_utils/uri.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Demo, _BaseComponent);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__4", "$compid__5", "$compid__6", "$compid__7", "$compid__8", "$compid__9", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "bottomupOpen", "value1"], _this.config = {
      navigationBarTitleText: 'demo'
    }, _this.skipToModule = function (url) {
      (0, _uri.navigateTo)(url);
    }, _this.customComponents = ["MyIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Demo.prototype.__proto__ || Object.getPrototypeOf(Demo.prototype), "_constructor", this).apply(this, arguments);

      this.state = {
        bottomupOpen: false,
        value1: ''
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
      var $compid__4 = (0, _index.genCompid)(__prefix + "$compid__4");
      var $compid__5 = (0, _index.genCompid)(__prefix + "$compid__5");
      var $compid__6 = (0, _index.genCompid)(__prefix + "$compid__6");
      var $compid__7 = (0, _index.genCompid)(__prefix + "$compid__7");
      var $compid__8 = (0, _index.genCompid)(__prefix + "$compid__8");
      var $compid__9 = (0, _index.genCompid)(__prefix + "$compid__9");
      var $compid__10 = (0, _index.genCompid)(__prefix + "$compid__10");
      var $compid__11 = (0, _index.genCompid)(__prefix + "$compid__11");
      var $compid__12 = (0, _index.genCompid)(__prefix + "$compid__12");
      var $compid__13 = (0, _index.genCompid)(__prefix + "$compid__13");
      var $compid__14 = (0, _index.genCompid)(__prefix + "$compid__14");
      var $props__4 = {
        "value": "right"
      };
      var $props__5 = {
        "value": "right"
      };
      var $props__6 = {
        "value": "right"
      };
      var $props__7 = {
        "value": "right"
      };
      var $props__8 = {
        "value": "right"
      };
      var $props__9 = {
        "value": "right"
      };
      var $props__10 = {
        "value": "right"
      };
      var $props__11 = {
        "value": "right"
      };
      var $props__12 = {
        "value": "right"
      };
      var $props__13 = {
        "value": "right"
      };
      var $props__14 = {
        "value": "right"
      };
      _index.propsManager.set($props__4, $compid__4);
      _index.propsManager.set($props__5, $compid__5);
      _index.propsManager.set($props__6, $compid__6);
      _index.propsManager.set($props__7, $compid__7);
      _index.propsManager.set($props__8, $compid__8);
      _index.propsManager.set($props__9, $compid__9);
      _index.propsManager.set($props__10, $compid__10);
      _index.propsManager.set($props__11, $compid__11);
      _index.propsManager.set($props__12, $compid__12);
      _index.propsManager.set($props__13, $compid__13);
      _index.propsManager.set($props__14, $compid__14);
      Object.assign(this.__state, {
        $compid__4: $compid__4,
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        $compid__7: $compid__7,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14
      });
      return this.__state;
    }
  }]);

  return Demo;
}(_index.Component), _class.$$events = ["skipToModule"], _class.$$componentPath = "pages/demo/portal/index", _temp2);
exports.default = Demo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Demo, true));