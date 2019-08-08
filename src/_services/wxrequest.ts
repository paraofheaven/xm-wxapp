import 'es6-promise/auto';
import { extend } from 'para-utils';
import Taro from '@tarojs/taro';

export class Request {
  private $request(method?) {
    return (url, data = {}, config?: any) => {
      return new Promise((resolve, reject) => {
        method = method || 'GET';
        Taro.request({
          url, data, method,
          header: extend(true, {
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

  public get() {
    return this.$request('GET');
  }

  public post() {
    return this.$request('POST');
  }

  public put() {
    return this.$request('PUT');
  }

  public delete() {
    return this.$request('DELETE');
  }
}