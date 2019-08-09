"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reLaunch = exports.navigateBack = exports.switchTab = exports.redirectTo = exports.navigateTo = exports.getUrlQueryString = exports.getQueryString = exports.getCurrentPageUrlWithArgs = exports.getCurrentPageUrl = exports.getCurrentPage = exports.appendUrlParameter = exports.removeQueryString = exports.modifyQueryString = exports.normalize = exports.getSerializedUrl = exports.toQueryString = exports.parseParamToObj = exports.parseUrlParamToObj = exports.getURLSearchParamStr = exports.isHttpUrl = undefined;

var _wxPromisify = require("./wxPromisify.js");

var _lodash = require("../npm/lodash/lodash.js");

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isHttpUrl = exports.isHttpUrl = function isHttpUrl(url) {
  // match //www.baidu.com pattern
  return url && (url.indexOf('//') === 0 || new RegExp('(https|http|ftp)?://').test(url));
};
var getURLSearchParamStr = exports.getURLSearchParamStr = function getURLSearchParamStr(url) {
  if (!url) {
    return '';
  }
  var search = url.split('?')[1] || '';
  return search ? search.replace(/#\/.*/, '') : '';
};
/**
 * parseUrlParamToObj('http://example.com?a=1&b=2&a=3') ==> {a: '3', b: '2'}
 *
 * @param  {string} str query string
 * @returns {Object} the object mapping to all query string.
 */
var parseUrlParamToObj = exports.parseUrlParamToObj = function parseUrlParamToObj(url) {
  var search = getURLSearchParamStr(url);
  if (!search) {
    return {};
  }
  return search.split("&").reduce(function (params, param) {
    // handle "key=value=string=me";
    var equalIndex = param.indexOf('=');
    var paramsFragments = [];
    if (equalIndex !== -1) {
      paramsFragments = [param.substr(0, equalIndex), param.substr(equalIndex + 1)];
    } else {
      paramsFragments = [param];
    }
    var paramSplit = paramsFragments.map(function (value) {
      return decodeURIComponent(value.replace('+', ' '));
    });
    params[paramSplit[0]] = paramSplit[1];
    return params;
  }, {});
};
/**
 * parseParamToObj('a=1&b=2&a=3') ==> {a: '3', b: '2'}
 *
 * @param  {string} str query string
 * @returns {Object} the object mapping to all query string.
 */
var parseParamToObj = exports.parseParamToObj = function parseParamToObj(paramStr) {
  if (paramStr.indexOf('?') === -1) {
    return parseUrlParamToObj("?" + paramStr);
  }
  return parseUrlParamToObj(paramStr);
};
/**
 * parse objet to query string, if we passed parameter key==='' remove "=" sign
 *
 * @param  {object} obj {name:'ssss', password:''}
 * @returns {String} the string converted from query Object.
 */
var toQueryString = exports.toQueryString = function toQueryString(params) {
  var parts = [];
  for (var p in params) {
    if (params.hasOwnProperty(p)) {
      var paramValue = params[p];
      if (paramValue) {
        parts.push(encodeURIComponent(p) + '=' + encodeURIComponent(paramValue));
      } else {
        parts.push(encodeURIComponent(p) + '=');
      }
    }
  }
  return parts.join('&');
};
var getSerializedUrl = exports.getSerializedUrl = function getSerializedUrl(url, requestData) {
  var serializedParams = toQueryString(requestData);
  return serializedParams ? url.split('?')[0] + '?' + serializedParams : url.split('?')[0];
};
/**
 * normalize your url segments.
 * @param {...[String]} args '/','path/','to/'
 * @return {String} without prefix '/'
 */
var normalize = exports.normalize = function normalize(httpUrl) {
  for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  var search = httpUrl ? httpUrl.split('?')[1] || '' : '';
  var urlBase = httpUrl ? httpUrl.split('?')[0] : '';
  if (isHttpUrl(urlBase)) {
    urlBase = urlBase.replace(/\/*$/, '/');
  } else if (urlBase) {
    paths.unshift(urlBase);
    urlBase = '';
  }
  var result = [];
  paths.forEach(function (path) {
    var newPath = path ? path.replace(/^\/+|\/+$/ig, '') : '';
    if (newPath) {
      result.push(newPath);
    }
  });
  var newUrl = urlBase + result.join('/').replace(/\/{2,}/ig, '/');
  return search ? newUrl + "?" + search : newUrl;
};
var modifyQueryString = exports.modifyQueryString = function modifyQueryString(url, params) {
  url = url || '';
  var existedParams = parseUrlParamToObj(url);
  var existedHash = url.match(/#\/.*/);
  for (var param in params) {
    if (params.hasOwnProperty(param)) {
      existedParams[param] = params[param];
    }
  }
  var rootUrl = url.split('?')[0];
  var querystr = toQueryString(existedParams);
  var newUrl = !querystr ? "" + rootUrl : rootUrl + "?" + toQueryString(existedParams);
  return "" + newUrl + (existedHash ? existedHash[0] : '');
};
var removeQueryString = exports.removeQueryString = function removeQueryString(url, key) {
  url = url || '';
  var existedParams = parseUrlParamToObj(url);
  var existedHash = url.match(/#\/.*/);
  delete existedParams[key];
  var rootUrl = url.split('?')[0];
  var querystr = toQueryString(existedParams);
  var newUrl = !querystr ? "" + rootUrl : rootUrl + "?" + toQueryString(existedParams);
  return "" + newUrl + (existedHash ? existedHash[0] : '');
};
/**
 * add url parameters e.g. http://wwww.domain.com/path/to/you?name=tian&pwd=xxx#/home
 * @param  {String}   key   the param key e.g. `name`
 * @param  {String}   value the param value of key e.g. `tian`, if null will remove this key
 * @param  {String}   url the url you want to modified.
 * @return {String}   new url
 */
var appendUrlParameter = exports.appendUrlParameter = function appendUrlParameter(key, value, url) {
  return modifyQueryString(url, _defineProperty({}, key, value));
};
var getCurrentPage = exports.getCurrentPage = function getCurrentPage() {
  var pages = _index2.default.getCurrentPages();
  //获取当前页面的对象
  return pages.length ? pages[pages.length - 1] : {};
};
var getCurrentPageUrl = exports.getCurrentPageUrl = function getCurrentPageUrl() {
  var _getCurrentPage = getCurrentPage(),
      route = _getCurrentPage.route;
  //当前页面url


  return route;
};
/*获取当前页带参数的url*/
var getCurrentPageUrlWithArgs = exports.getCurrentPageUrlWithArgs = function getCurrentPageUrlWithArgs() {
  var _getCurrentPage2 = getCurrentPage(),
      route = _getCurrentPage2.route,
      options = _getCurrentPage2.options;
  //拼接url的参数


  return getSerializedUrl(route, options);
};
var getQueryString = exports.getQueryString = function getQueryString(name) {
  var _getCurrentPage3 = getCurrentPage(),
      options = _getCurrentPage3.options;

  return options && options[name] ? decodeURIComponent(options[name]) : undefined;
};
var getUrlQueryString = exports.getUrlQueryString = function getUrlQueryString(name, url) {
  var params = parseParamToObj(url);
  return params[name];
};
var wxNativator = function wxNativator(url, params, action) {
  var env = getQueryString('env') || _index2.default.getStorageSync('env') || 'prod';
  var media = getQueryString('media') || 'index';
  params = (0, _lodash.extend)(true, { env: env, media: media }, params);
  Object.keys(params).forEach(function (key) {
    url = appendUrlParameter(key, params[key], url);
  });
  return (0, _wxPromisify.wxPromisify)(action, { url: url });
};
var navigateTo = exports.navigateTo = function navigateTo(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return wxNativator(url, params, 'navigateTo');
};
var redirectTo = exports.redirectTo = function redirectTo(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return wxNativator(url, params, 'redirectTo');
};
var switchTab = exports.switchTab = function switchTab(url) {
  // 由于switchTab 路径后不能带参数，故将env写入缓存中
  var env = getUrlQueryString('env', url);
  if (env) {
    _index2.default.setStorageSync('env', env);
  }
  return wxNativator(url, {}, 'switchTab');
};
var navigateBack = exports.navigateBack = function navigateBack(object) {
  _index2.default.navigateBack(object);
};
var reLaunch = exports.reLaunch = function reLaunch(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return wxNativator(url, params, 'reLaunch');
};