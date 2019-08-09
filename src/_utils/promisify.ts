import es6Promise from 'es6-promise';
import { extend } from 'lodash';

es6Promise.polyfill();

export const promisify = (api) => {
  return (options?, ...params) => {
    return new Promise((resolve, reject) => {
      api(extend(true, {}, options, { resolve, reject }), ...params);
    });
  };
};
