

import { extend, isPlainObject, isFunction, set, promisify, get, getQueryString, isObject, } from 'para-utils';
import { wxPromisify } from '../_utils/wxPromisify';
import Taro from '@tarojs/taro';
import { Request } from './wxrequest';

const baseDefaultDto = (result) => {
  return result;
};

const AUTH_TOKEN = 'token';
export const AUTH_ERROR_EXCEED_MAX_COUNT = 'AUTH_ERROR_EXCEED_MAX_COUNT';
const AUTH_ERROR_GET_WX_CODE = 'AUTH_ERROR_GET_WX_CODE';
const AUTH_ERROR_API_TOKEN_EXPIRED = '9000';

export class WxApi {
  private $requestService;

  public serviceApi = {
    homeApi: {
      me: 'http://me.ly.com:3000/api',
      inte: 'http://jr.me.ly.com/home/api',
      rc: 'http://jr.t.me.com/home/api',
      prod: 'http://jr.me.com/home/api'
    },
    detailApi: {
      me: 'http://me.ly.com:3000/api',
      inte: 'http://jr.me.ly.com/detail/api',
      rc: 'http://jr.t.me.com/detail/api',
      prod: 'http://jr.me.com/detail/api'
    }
  };

  // 授信置换token次数
  private $authTestCount = 0 as number;

  constructor() {
    this.$requestService = Request;
  }

  public $getReqData(servicename, reqParam) {
    const protocol = this.$getProtocol();
    const finalReqData = extend(true, protocol, {
      param: reqParam
    });
    const customServiceConfig = this.$getYourCustomServiceConfig();
    extend(true, {}, this.serviceApi, customServiceConfig);
    const domainUrl = this.get(`serviceApi.${servicename}`);
    return {
      url: domainUrl,
      data: finalReqData,
    };
  }

  public get(key, envName?) {
    return this.getFromSource(this, key, envName);
  }

  private getFromSource(source, key, envName?) {
    envName = envName || this.getEnvName() || 'prod';
    if (!key) {
      throw new Error('the `key` is required!');
    }
    const keyValues = get(source, `${key}`, undefined);
    if (isObject(keyValues)) {
      return get(keyValues, `${envName}`, undefined) || keyValues;
    }
    return keyValues;
  }

  private getEnvName() {
    try {
      return getQueryString('env') || Taro.getStorageSync('env') || 'prod';
    } catch (e) {
      console.log('core.ApiEnvConfig.getEnvName()', e);
      return 'prod';
    }
  }

  protected $getYourCustomServiceConfig() {
    return {};
  }

  public $getProtocol() {
    return {
      protocol: {
        fromPlatform: this.$getPlatform(),
      },
    };
  }

  public $getPlatform() {
    return 'xm-wx-app';
  }

  public $preRequest(inputData) {
    try {
      const token = Taro.getStorageSync(AUTH_TOKEN) || '';
      if (!token) {
        return this.$wxLogin().then((result: any) => {
          set(inputData, 'data.protocol.code', result.code);
          return inputData;
        }).catch((e) => {
          console.log('wx-web-api->$wxLogin().code: ', e);
        });
      }
      set(inputData, 'data.protocol.token', token);
    } catch (e) {
      console.log('wx-web-api->$preRequest().token: ', e);
    }
    return this.$promiseResult(inputData);
  }

  public $promiseResult(data) {
    return promisify(({ resolve }) => resolve(data))({});
  }

  public $wxLogin() {
    return wxPromisify('login');
  }

  /**
   * @desc 拦截器, 可以在这里写对应的拦截器，当然也可以在子类override掉
   * @param {Object} options {resolve: callback}
   * @param {Result} result 服务器API返回的真实数据
   * @return 必须实现options.fail|success的回调
   */
  public $interceptorDto = ({ resolve, ...options }, result) => {
    const { requestData } = options;
    this.$wxAuthFilter(requestData, result, resolve);
  }

  /**
   * 微信小程序登录filter
   * @param request 请求实体
   * @param response 响应实体
   * @param resolve 
   */
  private $wxAuthFilter(request, response, resolve) {
    const payload = request.data;
    const result = response.data;
    if (result.code !== AUTH_ERROR_API_TOKEN_EXPIRED) {
      this.$saveTokenToStorage(result);
      return resolve(result);
    }
    console.log('this.$authTestCount:', this.$authTestCount);
    // 超过最大的置换TOKEN尝试次数
    if (this.$authTestCount >= 2) {
      return resolve({
        code: AUTH_ERROR_EXCEED_MAX_COUNT,
        message: '[code]置换token失败次数过多!',
        data: {}
      });
    }
    this.$authTestCount++;
    this.$wxLogin().then((result: any) => {
      if (!result.code) {
        return resolve({
          code: AUTH_ERROR_GET_WX_CODE,
          message: result.errMsg
        });
      }
      set(payload, 'protocol.code', result.code);
      this.$requestPost(payload).then((nextResult) => {
        if (nextResult.code !== AUTH_ERROR_API_TOKEN_EXPIRED) {
          this.$authTestCount = 0;
        }
        if (nextResult.code === '0000') {
          this.$saveTokenToStorage(nextResult);
          resolve(nextResult);
        } else {
          resolve(nextResult);
        }
      });
    });
  }

  private $saveTokenToStorage(authResult) {
    const token = get(authResult, 'token', '') || get(authResult, 'data.token', '');
    if (token) {
      Taro.setStorageSync(AUTH_TOKEN, token);
      console.log('saveAuthTokenSync: ', token);
    }
  }

  /**
   * POST请求
   * @author tianyingchun
   * @param  {String}   url    可选参数
   * @param  {Object}   data   必选，发送的数据对象
   * @param  {Object|Function}   config 必选如果是函数直接当成dto，否则当成配置对象，对象里面可以包含dto对象，和其他属性
   * @return {Object} 转换之后的参数: {url, data, dto, config}.
   */
  $adjustParameter(url, data = {} as any, config) {
    let dto = baseDefaultDto;

    if (isPlainObject(url)) {
      url = url.url;
      delete url.url;
      data = url;
    }
    if (isFunction(config)) {
      dto = config;
      config = {};
    } else if (isPlainObject(config)) {
      if (isFunction(config.dto)) {
        dto = config.dto;
        delete config.dto;
      }
    } else {
      config = {};
    }
    return { url, data, dto, config };
  }

  /**
   * 请求步骤
   * prerequest: 从wxStorage中取token,如果有,塞到请求protocol.token中
   *             如果没有,调wx.login方法取到code,塞到请求protocol.code中,然后请求后台返回token
   * request: 如果后台返回正常token，则塞token到wxStorage中
   *          如果后台置换token失败，则再调wx.login取到code，塞到请求protocol.code中,然后再请求一次
   */
  public $request(method, url, data = {}, config?: any) {
    const inputRawData = this.$adjustParameter(url, data, config);
    return this.$preRequest(inputRawData).then((inputData: any) => {
      return this.$requestService[method](inputData.url, inputData.data, inputData.config).then((result) => {
        return promisify(this.$interceptorDto)({ requestData: inputData }, result)
          .then((newResult) => {
            return inputData.dto.call(this, newResult);
          });
      });
    }).catch((error) => {
      throw new Error(error);
    });
  }

  /**
   * http request post
   * @param {String|Object} url optional <string> indicates request url, <object> indicates requestData it's parameter migration
   * @param {Object} data required request data
   * @param {Object} config optional
   */
  public $requestPost(url, data = {}, config = {}) {
    return this.$request('POST', url, data, extend(false, {}, config));
  }

  public $requestGet(url, data = {}, config = {}) {
    return this.$request('GET', url, data, extend(false, {}, config));
  }

}