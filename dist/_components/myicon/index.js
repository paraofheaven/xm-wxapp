"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/classnames/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var MyIcon=(_temp2=_class=function(){function a(){var e,t,n;_classCallCheck(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","value","size","color"],n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.defaultProps={value:"",size:16,color:"",onClick:function(){}},this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var o=this.__props,r=o.value,i=o.size,a=void 0===i?16:i,s=o.color,u=(0,_index4.default)("v-icon",_defineProperty({},"v-icon-"+r,r),"v-class"),c=(0,_index.internal_inline_style)({fontSize:a+"px",color:s});return Object.assign(this.__state,{anonymousState__temp:u,anonymousState__temp2:c}),this.__state}},{key:"funPrivatePHTGa",value:function(){return this.props.onClick.apply(void 0,Array.prototype.slice.call(arguments,1))}}]),a}(),_class.$$events=["funPrivatePHTGa"],_class.$$componentPath="_components/myicon/index",_temp2);MyIcon.externalClasses=["v-class"],exports.default=MyIcon,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(MyIcon));