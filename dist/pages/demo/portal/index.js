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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__468", "$compid__469", "$compid__470", "$compid__471", "$compid__472", "$compid__473", "$compid__474", "$compid__475", "$compid__476", "$compid__477", "bottomupOpen", "value1"], _this.config = {
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
      var $compid__468 = (0, _index.genCompid)(__prefix + "$compid__468");
      var $compid__469 = (0, _index.genCompid)(__prefix + "$compid__469");
      var $compid__470 = (0, _index.genCompid)(__prefix + "$compid__470");
      var $compid__471 = (0, _index.genCompid)(__prefix + "$compid__471");
      var $compid__472 = (0, _index.genCompid)(__prefix + "$compid__472");
      var $compid__473 = (0, _index.genCompid)(__prefix + "$compid__473");
      var $compid__474 = (0, _index.genCompid)(__prefix + "$compid__474");
      var $compid__475 = (0, _index.genCompid)(__prefix + "$compid__475");
      var $compid__476 = (0, _index.genCompid)(__prefix + "$compid__476");
      var $compid__477 = (0, _index.genCompid)(__prefix + "$compid__477");
      var $props__468 = {
        "value": "right"
      };
      var $props__469 = {
        "value": "right"
      };
      var $props__470 = {
        "value": "right"
      };
      var $props__471 = {
        "value": "right"
      };
      var $props__472 = {
        "value": "right"
      };
      var $props__473 = {
        "value": "right"
      };
      var $props__474 = {
        "value": "right"
      };
      var $props__475 = {
        "value": "right"
      };
      var $props__476 = {
        "value": "right"
      };
      var $props__477 = {
        "value": "right"
      };
      _index.propsManager.set($props__468, $compid__468);
      _index.propsManager.set($props__469, $compid__469);
      _index.propsManager.set($props__470, $compid__470);
      _index.propsManager.set($props__471, $compid__471);
      _index.propsManager.set($props__472, $compid__472);
      _index.propsManager.set($props__473, $compid__473);
      _index.propsManager.set($props__474, $compid__474);
      _index.propsManager.set($props__475, $compid__475);
      _index.propsManager.set($props__476, $compid__476);
      _index.propsManager.set($props__477, $compid__477);
      Object.assign(this.__state, {
        $compid__468: $compid__468,
        $compid__469: $compid__469,
        $compid__470: $compid__470,
        $compid__471: $compid__471,
        $compid__472: $compid__472,
        $compid__473: $compid__473,
        $compid__474: $compid__474,
        $compid__475: $compid__475,
        $compid__476: $compid__476,
        $compid__477: $compid__477
      });
      return this.__state;
    }
  }]);

  return Demo;
}(_index.Component), _class.$$events = ["skipToModule"], _class.$$componentPath = "pages/demo/portal/index", _temp2);
exports.default = Demo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Demo, true));