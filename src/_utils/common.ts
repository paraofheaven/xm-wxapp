import Taro from '@tarojs/taro';
import { isFunction } from 'lodash';

export interface IAuthOriginResult {
  status: 'success' | 'fail';
}

export type IAuthOriginCallback = (data: IAuthOriginResult) => void;

// 提前授权地理位置
export const authorizeUserLocation = (cb?: IAuthOriginCallback, force = false) => {
  // wx.getSetting 基础库 1.2.0 开始支持, 公众平台已设置最低版本1.2.0
  // wx.authorize 偶遇不回调问题，不调此API提前授权
  if (!Taro.getSetting) {
    Taro.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
      confirmColor: '#13A4AF',
      showCancel: false,
    });
    return false;
  }
  Taro.getSetting({ // 基础库 1.2.0 开始支持
    success: res => {

      const authSetting = res.authSetting || {};
      if (authSetting['scope.userLocation'] && cb && isFunction(cb)) {
        cb({ status: 'success' });
        return false;
      }

      // 不强制授权，也尝试请求授权地理位置
      if (!force) {
        try {
          Taro.getLocation({
            type: 'wgs84',
            success: () => {
              if (cb && isFunction(cb)) {
                cb({ status: 'success' });
              }
            },
            fail: () => {
              if (cb && isFunction(cb)) {
                cb({ status: 'fail' });
              }
            },
          })
        } catch (error) { console.error(error) }
        return false;
      }

      Taro.showModal({
        title: '',
        content: '您需要授权地理位置信息，才能\n继续操作哦~',
        confirmColor: '#1FC756',
        success: (res) => {
          if (res.confirm) {
            Taro.openSetting({ // 基础库 1.1.0 开始支持
              success: (res) => {
                if (res.authSetting['scope.userLocation'] && cb && isFunction(cb)) {
                  cb({ status: 'success' });
                }
              },
              fail: () => {
                Taro.showModal({
                  title: '',
                  content: '尝试打开授权设置失败，请\n手动开启：菜单-关于同程分期游戏-菜单-设置-授权地理位置',
                  confirmColor: '#13A4AF',
                  showCancel: false,
                });
              }
            })
          }
        },
        fail: () => {
          Taro.showModal({
            title: '',
            content: '出错了，再试一次吧~',
            confirmColor: '#13A4AF',
            showCancel: false,
          })
        }
      })
    },
    fail: () => {
      Taro.showModal({
        title: '',
        content: '出错了，再试一次吧~',
        confirmColor: '#13A4AF',
        showCancel: false,
      })
    }
  });
}