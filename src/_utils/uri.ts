import { wxPromisify } from './wxPromisify';
import { extend } from 'lodash';
import Taro from '@tarojs/taro';

export const isHttpUrl = (url) => {
  // match //www.baidu.com pattern
  return url && (url.indexOf('//') === 0 || new RegExp('(https|http|ftp)?://').test(url));
};

export const getURLSearchParamStr = (url) => {
  if (!url) { return ''; }
  const search = url.split('?')[1] || '';
  return search ? search.replace(/#\/.*/, '') : '';
};
/**
 * parseUrlParamToObj('http://example.com?a=1&b=2&a=3') ==> {a: '3', b: '2'}
 *
 * @param  {string} str query string
 * @returns {Object} the object mapping to all query string.
 */
export const parseUrlParamToObj = (url) => {
  const search = getURLSearchParamStr(url);
  if (!search) { return {}; }
  return search.split(`&`).reduce((params, param) => {
    // handle "key=value=string=me";
    const equalIndex = param.indexOf('=');
    let paramsFragments = [] as any[];
    if (equalIndex !== -1) {
      paramsFragments = [param.substr(0, equalIndex), param.substr(equalIndex + 1)];
    } else {
      paramsFragments = [param];
    }
    const paramSplit = paramsFragments.map((value) => {
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
export const parseParamToObj = (paramStr) => {
  if (paramStr.indexOf('?') === -1) {
    return parseUrlParamToObj(`?${paramStr}`);
  }
  return parseUrlParamToObj(paramStr);
};
/**
 * parse objet to query string, if we passed parameter key==='' remove "=" sign
 *
 * @param  {object} obj {name:'ssss', password:''}
 * @returns {String} the string converted from query Object.
 */
export const toQueryString = (params) => {
  const parts = [] as string[];
  for (const p in params) {
    if (params.hasOwnProperty(p)) {
      const paramValue = params[p];
      if (paramValue) {
        parts.push(encodeURIComponent(p) + '=' + encodeURIComponent(paramValue));
      } else {
        parts.push(encodeURIComponent(p) + '=');
      }
    }
  }
  return parts.join('&');
};

export const getSerializedUrl = (url, requestData) => {
  const serializedParams = toQueryString(requestData);
  return serializedParams ? url.split('?')[0] + '?' + serializedParams : url.split('?')[0];
};

/**
 * normalize your url segments.
 * @param {...[String]} args '/','path/','to/'
 * @return {String} without prefix '/'
 */
export const normalize = (httpUrl, ...paths) => {
  const search = httpUrl ? httpUrl.split('?')[1] || '' : '';
  let urlBase = httpUrl ? httpUrl.split('?')[0] : '';
  if (isHttpUrl(urlBase)) {
    urlBase = urlBase.replace(/\/*$/, '/');
  } else if (urlBase) {
    paths.unshift(urlBase);
    urlBase = '';
  }
  const result = [] as any[];
  paths.forEach((path) => {
    const newPath = path ? path.replace(/^\/+|\/+$/ig, '') : '';
    if (newPath) {
      result.push(newPath);
    }
  });
  const newUrl = urlBase + result.join('/').replace(/\/{2,}/ig, '/');
  return search ? `${newUrl}?${search}` : newUrl;
};

export const modifyQueryString = (url, params) => {
  url = url || '';
  const existedParams = parseUrlParamToObj(url);
  const existedHash = url.match(/#\/.*/);
  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      existedParams[param] = params[param];
    }
  }
  const rootUrl = url.split('?')[0];
  const querystr = toQueryString(existedParams);
  const newUrl = !querystr ? `${rootUrl}` : `${rootUrl}?${toQueryString(existedParams)}`;
  return `${newUrl}${existedHash ? existedHash[0] : ''}`;
};

export const removeQueryString = (url, key) => {
  url = url || '';
  const existedParams = parseUrlParamToObj(url);
  const existedHash = url.match(/#\/.*/);
  delete existedParams[key];
  const rootUrl = url.split('?')[0];
  const querystr = toQueryString(existedParams);
  const newUrl = !querystr ? `${rootUrl}` : `${rootUrl}?${toQueryString(existedParams)}`;
  return `${newUrl}${existedHash ? existedHash[0] : ''}`;
};

/**
 * add url parameters e.g. http://wwww.domain.com/path/to/you?name=tian&pwd=xxx#/home
 * @param  {String}   key   the param key e.g. `name`
 * @param  {String}   value the param value of key e.g. `tian`, if null will remove this key
 * @param  {String}   url the url you want to modified.
 * @return {String}   new url
 */
export const appendUrlParameter = (key, value, url) => {
  return modifyQueryString(url, { [key]: value });
};

export const getCurrentPage = () => {
  const pages = Taro.getCurrentPages();

  //获取当前页面的对象
  return pages.length ? pages[pages.length - 1] : {} as any;
};

export const getCurrentPageUrl = () => {
  const { route } = getCurrentPage();
  //当前页面url
  return route;
};

/*获取当前页带参数的url*/
export const getCurrentPageUrlWithArgs = () => {
  const { route, options } = getCurrentPage();

  //拼接url的参数
  return getSerializedUrl(route, options);
};

export const getQueryString = (name) => {
  const { options } = getCurrentPage();
  return options && options[name] ? decodeURIComponent(options[name]) : undefined;
};

export const getUrlQueryString = (name, url) => {
  const params = parseParamToObj(url);
  return params[name];
};

const wxNativator = (url, params, action) => {
  const env = getQueryString('env') || Taro.getStorageSync('env') || 'prod';
  const media = getQueryString('media') || 'index';
  params = extend(true, { env, media }, params);
  Object.keys(params).forEach((key) => {
    url = appendUrlParameter(key, params[key], url);
  });
  return wxPromisify(action, { url });
};

export const navigateTo = (url, params = {}) => {
  return wxNativator(url, params, 'navigateTo');
};

export const redirectTo = (url, params = {}) => {
  return wxNativator(url, params, 'redirectTo');
};

export const switchTab = (url) => {
  // 由于switchTab 路径后不能带参数，故将env写入缓存中
  const env = getUrlQueryString('env', url);
  if (env) {
    Taro.setStorageSync('env', env);
  }
  return wxNativator(url, {}, 'switchTab');
};

export const navigateBack = (object) => {
  Taro.navigateBack(object);
};

export const reLaunch = (url, params = {}) => {
  return wxNativator(url, params, 'reLaunch');
};



