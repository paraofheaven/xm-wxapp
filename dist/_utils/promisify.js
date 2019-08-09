"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promisify = undefined;

var _es6Promise = require("../npm/es6-promise/dist/es6-promise.js");

var _es6Promise2 = _interopRequireDefault(_es6Promise);

var _lodash = require("../npm/lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_es6Promise2.default.polyfill();
var promisify = exports.promisify = function promisify(api) {
  return function (options) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      api.apply(undefined, [(0, _lodash.extend)(true, {}, options, { resolve: resolve, reject: reject })].concat(params));
    });
  };
};