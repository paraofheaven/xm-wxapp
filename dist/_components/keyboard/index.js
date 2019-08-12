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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NUMBER_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var OPERATE_KEYS = ['C', 'F'];

var KeyBoard = (_temp2 = _class = function (_BaseComponent) {
  _inherits(KeyBoard, _BaseComponent);

  function KeyBoard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, KeyBoard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = KeyBoard.__proto__ || Object.getPrototypeOf(KeyBoard)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray2", "finalKeys", "hideFinishBtn"], _this.concatFinalKeys = function (numberkeys) {
      var hideFinishBtn = _this.props.hideFinishBtn;

      numberkeys = numberkeys || NUMBER_KEYS;
      return [].concat(_toConsumableArray(numberkeys.slice(0, numberkeys.length - 1)), [hideFinishBtn ? OPERATE_KEYS[1] : OPERATE_KEYS[0], numberkeys[numberkeys.length - 1], hideFinishBtn ? OPERATE_KEYS[0] : OPERATE_KEYS[1]]);
    }, _this.shffuleBoard = function () {
      var numberkeys = NUMBER_KEYS.sort(function () {
        return Math.random() > .5 ? -1 : 1;
      });
      _this.setState({
        finalKeys: _this.concatFinalKeys(numberkeys)
      });
    }, _this.handleKeyboradDelete = function () {
      _this.props.onKeyboradDelete();
    }, _this.handleKeyboradFinish = function () {
      if (_this.props.hideFinishBtn) {
        return;
      }
      if (!_this.props.onKeyboradFinish) {
        throw new Error('onKeyboradFinish is undefined!');
      }
      _this.props.onKeyboradFinish();
    }, _this.handleKeyboradNumber = function (e) {
      var innerText = e.target.dataset.item;
      _this.props.onKeyboradNumber(innerText);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(KeyBoard, [{
    key: '_constructor',
    value: function _constructor() {
      _get(KeyBoard.prototype.__proto__ || Object.getPrototypeOf(KeyBoard.prototype), '_constructor', this).apply(this, arguments);
      this.defaultProps = {
        hideFinishBtn: false,
        onKeyboradDelete: function onKeyboradDelete() {},
        onKeyboradFinish: function onKeyboradFinish() {},
        onKeyboradNumber: function onKeyboradNumber() {}
      };
      this.state = {
        finalKeys: []
      };

      this.state = {
        finalKeys: this.concatFinalKeys()
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

      var finalKeys = this.__state.finalKeys;
      var hideFinishBtn = this.__props.hideFinishBtn;

      var loopArray2 = finalKeys.map(function (key, _anonIdx) {
        key = {
          $original: (0, _index.internal_get_original)(key)
        };

        if (key.$original === 'C') {} else if (key.$original === 'F' && hideFinishBtn) {} else if (key.$original === 'F') {}
        return {
          $original: key.$original
        };
      });
      Object.assign(this.__state, {
        loopArray2: loopArray2,
        hideFinishBtn: hideFinishBtn
      });
      return this.__state;
    }
  }]);

  return KeyBoard;
}(_index.Component), _class.$$events = ["handleKeyboradDelete", "handleKeyboradFinish", "handleKeyboradNumber", "shffuleBoard"], _class.$$componentPath = "_components/keyboard/index", _temp2);


KeyBoard.externalClasses = ['v-class'];
exports.default = KeyBoard;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(KeyBoard));