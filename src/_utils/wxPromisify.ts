import Taro from '@tarojs/taro';
import { extend } from 'lodash';
import { promisify } from './promisify';

export const wxPromisify = (wxApi, options?) => {
  return promisify(({ resolve, reject }) => {
    Taro[wxApi](extend(true, {}, options, {
      success: resolve,
      fail: reject
    }));
  })();
};