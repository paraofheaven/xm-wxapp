"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _common = require("../../../_utils/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UtilsDemo = (_temp2 = _class = function (_BaseComponent) {
  _inherits(UtilsDemo, _BaseComponent);

  function UtilsDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UtilsDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UtilsDemo.__proto__ || Object.getPrototypeOf(UtilsDemo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__26"], _this.authOrigin = function (force) {
      (0, _common.authorizeUserLocation)(function (res) {
        if (res.status === 'fail') {
          return;
        }
        _index2.default.showModal({
          title: '地理位置信息返回参数',
          content: JSON.stringify(res)
        });
      }, force);
    }, _this.customComponents = ["AtButton", "AtMessage"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UtilsDemo, [{
    key: "_constructor",
    value: function _constructor() {
      _get(UtilsDemo.prototype.__proto__ || Object.getPrototypeOf(UtilsDemo.prototype), "_constructor", this).apply(this, arguments);
      this.state = {};
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.authOrigin(false);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var $compid__26 = (0, _index.genCompid)(__prefix + "$compid__26");
      var $props__26 = {
        "onClick": this.authOrigin.bind(this, true)
      };
      _index.propsManager.set($props__26, $compid__26);
      Object.assign(this.__state, {
        $compid__26: $compid__26
      });
      return this.__state;
    }
  }]);

  return UtilsDemo;
}(_index.Component), _class.$$events = [], _class.$$componentPath = "pages/demo/utils/index", _temp2);
exports.default = UtilsDemo;

Component(require('../../../npm/@tarojs/taro-weapp/index.js').default.createComponent(UtilsDemo, true));