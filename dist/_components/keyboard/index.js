"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_get=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var NUMBER_KEYS=["1","2","3","4","5","6","7","8","9","0"],OPERATE_KEYS=["C","F"],KeyBoard=(_temp2=_class=function(){function a(){var e,t,n;_classCallCheck(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o)))).$usedState=["loopArray2","finalKeys","hideFinishBtn"],n.concatFinalKeys=function(e){var t=n.props.hideFinishBtn;return[].concat(_toConsumableArray((e=e||NUMBER_KEYS).slice(0,e.length-1)),[t?OPERATE_KEYS[1]:OPERATE_KEYS[0],e[e.length-1],t?OPERATE_KEYS[0]:OPERATE_KEYS[1]])},n.shffuleBoard=function(){var e=NUMBER_KEYS.sort(function(){return.5<Math.random()?-1:1});n.setState({finalKeys:n.concatFinalKeys(e)})},n.handleKeyboradDelete=function(){n.props.onKeyboradDelete()},n.handleKeyboradFinish=function(){if(!n.props.hideFinishBtn){if(!n.props.onKeyboradFinish)throw new Error("onKeyboradFinish is undefined!");n.props.onKeyboradFinish()}},n.handleKeyboradNumber=function(e){var t=e.target.dataset.item;n.props.onKeyboradNumber(t)},n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.defaultProps={hideFinishBtn:!1,onKeyboradDelete:function(){},onKeyboradFinish:function(){},onKeyboradNumber:function(){}},this.state={finalKeys:[]},this.state={finalKeys:this.concatFinalKeys()},this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var r=this.__state.finalKeys,o=this.__props.hideFinishBtn,i=r.map(function(e,t){return"C"===(e={$original:(0,_index.internal_get_original)(e)}).$original||"F"===e.$original&&o||e.$original,{$original:e.$original}});return Object.assign(this.__state,{loopArray2:i,hideFinishBtn:o}),this.__state}}]),a}(),_class.$$events=["handleKeyboradDelete","handleKeyboradFinish","handleKeyboradNumber","shffuleBoard"],_class.$$componentPath="_components/keyboard/index",_temp2);KeyBoard.externalClasses=["v-class"],exports.default=KeyBoard,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(KeyBoard));