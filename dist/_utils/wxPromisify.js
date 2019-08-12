"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxPromisify = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _lodash = require("../npm/lodash/lodash.js");

var _promisify = require("./promisify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wxPromisify = exports.wxPromisify = function wxPromisify(wxApi, options) {
  return (0, _promisify.promisify)(function (_ref) {
    var resolve = _ref.resolve,
        reject = _ref.reject;

    _index2.default[wxApi]((0, _lodash.extend)(true, {}, options, {
      success: resolve,
      fail: reject
    }));
  })();
};