import Taro from '@tarojs/taro';
import { promisify, extend } from 'para-utils';

export const wxPromisify = (wxApi, options?) => {
  return promisify(({ resolve, reject }) => {
    Taro[wxApi](extend(true, {}, options, {
      success: resolve,
      fail: reject
    }));
  })();
};