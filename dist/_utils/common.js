"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorizeUserLocation = undefined;

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _lodash = require("../npm/lodash/lodash.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 提前授权地理位置
var authorizeUserLocation = exports.authorizeUserLocation = function authorizeUserLocation(cb) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  // wx.getSetting 基础库 1.2.0 开始支持, 公众平台已设置最低版本1.2.0
  // wx.authorize 偶遇不回调问题，不调此API提前授权
  if (!_index2.default.getSetting) {
    _index2.default.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
      confirmColor: '#13A4AF',
      showCancel: false
    });
    return false;
  }
  _index2.default.getSetting({
    success: function success(res) {
      var authSetting = res.authSetting || {};
      if (authSetting['scope.userLocation'] && cb && (0, _lodash.isFunction)(cb)) {
        cb({ status: 'success' });
        return false;
      }
      // 不强制授权，也尝试请求授权地理位置
      if (!force) {
        try {
          _index2.default.getLocation({
            type: 'wgs84',
            success: function success() {
              if (cb && (0, _lodash.isFunction)(cb)) {
                cb({ status: 'success' });
              }
            },
            fail: function fail() {
              if (cb && (0, _lodash.isFunction)(cb)) {
                cb({ status: 'fail' });
              }
            }
          });
        } catch (error) {
          console.error(error);
        }
        return false;
      }
      _index2.default.showModal({
        title: '',
        content: '您需要授权地理位置信息，才能\n继续操作哦~',
        confirmColor: '#1FC756',
        success: function success(res) {
          if (res.confirm) {
            _index2.default.openSetting({
              success: function success(res) {
                if (res.authSetting['scope.userLocation'] && cb && (0, _lodash.isFunction)(cb)) {
                  cb({ status: 'success' });
                }
              },
              fail: function fail() {
                _index2.default.showModal({
                  title: '',
                  content: '尝试打开授权设置失败，请\n手动开启：菜单-关于同程分期游戏-菜单-设置-授权地理位置',
                  confirmColor: '#13A4AF',
                  showCancel: false
                });
              }
            });
          }
        },
        fail: function fail() {
          _index2.default.showModal({
            title: '',
            content: '出错了，再试一次吧~',
            confirmColor: '#13A4AF',
            showCancel: false
          });
        }
      });
    },
    fail: function fail() {
      _index2.default.showModal({
        title: '',
        content: '出错了，再试一次吧~',
        confirmColor: '#13A4AF',
        showCancel: false
      });
    }
  });
};