import { extend } from 'lodash';
import Taro from '@tarojs/taro';

export function request(method?) {
  return (url, data = {}, config?: any) => {
    return new Promise((resolve, reject) => {
      method = method || 'GET';
      Taro.request({
        url, data, method,
        header: extend({
          'Content-Type': 'application/json'
        }, config.header),
        success: (res) => {
          const statusCode = res.statusCode;
          const isSuccess = statusCode >= 200 && statusCode < 300 || statusCode === 304;
          if (isSuccess) {
            resolve(res);
          } else {
            reject({ url, data: res.data, header: res.header, method, config, message: '网路请求错误，请稍后再试~' });
          }
        },
        fail: (err) => {
          reject({ code: 'wx_request_fail', url, data, method, config, message: err.errMsg || '网路请求不符合规范，请检查域名是否符合要求~' });
        },
      });
    });
  };
}

export default function () {
  const GET = request('GET');
  const POST = request('POST');
  const PUT = request('PUT');
  const DELETE = request('DELETE');
  return {
    GET,
    POST,
    PUT,
    DELETE
  }
}