!function(e,r,o,t){"use strict";o.defineProperty(e,"__esModule",{value:!0}),e.promisify=void 0;var i,s=r("../npm/es6-promise/dist/es6-promise.js"),n=(i=s)&&i.__esModule?i:{default:i},l=r("../npm/lodash/lodash.js");n.default.polyfill();e.promisify=function(s){return function(o){for(var e=arguments.length,i=t(1<e?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return new Promise(function(e,r){s.apply(void 0,[(0,l.extend)(!0,{},o,{resolve:e,reject:r})].concat(i))})}}}(exports,require,Object,Array);