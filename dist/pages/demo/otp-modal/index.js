"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var OtpDemo=(_temp2=_class=function(){function i(){var e,t,n;_classCallCheck(this,i);for(var o=arguments.length,r=Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["$compid__19","$compid__20","isOpen"],n.sendRequest=function(){return new Promise(function(e){setTimeout(function(){e()},2e3)})},n.onInputFinish=function(e){_index2.default.atMessage({message:"输入短信验证码为"+e})},n.openOtpModal=function(){n.setState({isOpen:!0})},n.closeOtpMoal=function(){n.setState({isOpen:!1})},n.customComponents=["AtButton","OtpModal","AtMessage"],_possibleConstructorReturn(n,t)}return _inherits(i,_index.Component),_createClass(i,[{key:"_constructor",value:function(){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).apply(this,arguments),this.state={isOpen:!1},this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,_index.genCompid)(o+"$compid__19"),s=(0,_index.genCompid)(o+"$compid__20"),i=this.__state.isOpen,a={onClick:this.openOtpModal},p={isOpen:i,color:"#000",onSendRequest:this.sendRequest,onInputFinish:this.onInputFinish,onClose:this.closeOtpMoal};return _index.propsManager.set(a,r),_index.propsManager.set(p,s),Object.assign(this.__state,{$compid__19:r,$compid__20:s}),this.__state}}]),i}(),_class.$$events=[],_class.$$componentPath="pages/demo/otp-modal/index",_temp2);exports.default=OtpDemo,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(OtpDemo,!0));