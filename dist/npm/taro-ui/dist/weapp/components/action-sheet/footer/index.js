"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_initialiseProps,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(n):void 0},_index=require("../../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_isFunction2=require("../../../../../../lodash/isFunction.js"),_isFunction3=_interopRequireDefault(_isFunction2),_component=require("../../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AtActionSheetFooter=(_temp2=_class=function(){function s(){var e,t,o;_classCallCheck(this,s);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r))),_initialiseProps.call(o),_possibleConstructorReturn(o,t)}return _inherits(s,_component2.default),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var n=(0,_index6.default)("at-action-sheet__footer",this.__props.className);return Object.assign(this.__state,{rootClass:n}),this.__state}}]),s}(),_class.$$events=["handleClick"],_class.$$componentPath="Users/ly/Documents/GT_workspace/xmWeb/node_modules/taro-ui/dist/weapp/components/action-sheet/footer/index",_initialiseProps=function(){var t=this;this.$usedState=["rootClass","className","children"],this.handleClick=function(){var e;(0,_isFunction3.default)(t.props.onClick)&&(e=t.props).onClick.apply(e,arguments)},this.customComponents=[]},_temp2);AtActionSheetFooter.propTypes={onClick:_index4.default.func},exports.default=AtActionSheetFooter,Component(require("../../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtActionSheetFooter));