"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,n);if(void 0===s){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in s)return s.value;var a=s.get;return void 0!==a?a.call(o):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var SIZE_CLASS={normal:"normal",small:"small"},TYPE_CLASS={primary:"primary",secondary:"secondary"},AtButton=(_temp2=_class=function(){function a(){var e,t,n;_classCallCheck(this,a);for(var o=arguments.length,s=Array(o),r=0;r<o;r++)s[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(s)))).$usedState=["anonymousState__temp","anonymousState__temp2","$compid__20","loading","formType","openType","lang","sessionFrom","sendMessageTitle","sendMessagePath","sendMessageImg","showMessageCard","appParameter","isWEAPP","disabled","isALIPAY","isWEB","size","type","circle","full","customStyle","className","children"],n.customComponents=["AtLoading"],_possibleConstructorReturn(n,t)}return _inherits(a,_component2.default),_createClass(a,[{key:"_constructor",value:function(){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.state={isWEB:_index2.default.getEnv()===_index2.default.ENV_TYPE.WEB,isWEAPP:_index2.default.getEnv()===_index2.default.ENV_TYPE.WEAPP,isALIPAY:_index2.default.getEnv()===_index2.default.ENV_TYPE.ALIPAY},this.$$refs=[]}},{key:"onClick",value:function(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{key:"onGetUserInfo",value:function(){var e;this.props.onGetUserInfo&&(e=this.props).onGetUserInfo.apply(e,arguments)}},{key:"onContact",value:function(){var e;this.props.onContact&&(e=this.props).onContact.apply(e,arguments)}},{key:"onGetPhoneNumber",value:function(){var e;this.props.onGetPhoneNumber&&(e=this.props).onGetPhoneNumber.apply(e,arguments)}},{key:"onError",value:function(){var e;this.props.onError&&(e=this.props).onError.apply(e,arguments)}},{key:"onOpenSetting",value:function(){var e;this.props.onOpenSetting&&(e=this.props).onOpenSetting.apply(e,arguments)}},{key:"onSumit",value:function(e){this.state.isWEAPP&&this.$scope.triggerEvent("submit",e.detail,{bubbles:!0,composed:!0})}},{key:"onReset",value:function(e){this.state.isWEAPP&&this.$scope.triggerEvent("reset",e.detail,{bubbles:!0,composed:!0})}},{key:"_createData",value:function(e,t,n){var o;this.__state=e||this.state||{},this.__props=t||this.props||{};var s=this.$prefix,r=(0,_index.genCompid)(s+"$compid__20"),a=this.__props,i=a.size,l=void 0===i?"normal":i,u=a.type,p=void 0===u?"":u,d=a.circle,c=a.full,f=a.loading,_=a.disabled,m=a.customStyle,y=a.formType,g=a.openType,h=a.lang,b=a.sessionFrom,P=a.sendMessageTitle,x=a.sendMessagePath,v=a.sendMessageImg,C=a.showMessageCard,E=a.appParameter,S=this.__state,A=(S.isWEAPP,S.isALIPAY,["at-button"]),O=(_defineProperty(o={},"at-button--"+SIZE_CLASS[l],SIZE_CLASS[l]),_defineProperty(o,"at-button--disabled",_),_defineProperty(o,"at-button--"+p,TYPE_CLASS[p]),_defineProperty(o,"at-button--circle",d),_defineProperty(o,"at-button--full",c),o);if(f){var T={color:"primary"===p?"#fff":"",size:"small"===l?"30":0};A.push("at-button--icon"),_index.propsManager.set(T,r)}var M=(0,_index6.default)(A,O,this.__props.className),k=(0,_index.internal_inline_style)(m);return Object.assign(this.__state,{anonymousState__temp:M,anonymousState__temp2:k,$compid__20:r,loading:f,formType:y,openType:g,lang:h,sessionFrom:b,sendMessageTitle:P,sendMessagePath:x,sendMessageImg:v,showMessageCard:C,appParameter:E,disabled:_}),this.__state}}]),a}(),_class.$$events=["onGetUserInfo","onGetPhoneNumber","onOpenSetting","onError","onContact","onClick","onSumit","onReset"],_class.$$componentPath="Users/ly/Documents/GT_workspace/xmWeb/node_modules/taro-ui/dist/weapp/components/button/index",_temp2);AtButton.defaultProps={size:"normal",type:"",circle:!1,full:!1,loading:!1,disabled:!1,customStyle:{},onClick:function(){},formType:"",openType:"",lang:"en",sessionFrom:"",sendMessageTitle:"",sendMessagePath:"",sendMessageImg:"",showMessageCard:!1,appParameter:"",onGetUserInfo:function(){},onContact:function(){},onGetPhoneNumber:function(){},onError:function(){},onOpenSetting:function(){}},AtButton.propTypes={size:_index4.default.oneOf(["normal","small"]),type:_index4.default.oneOf(["primary","secondary",""]),circle:_index4.default.bool,full:_index4.default.bool,loading:_index4.default.bool,disabled:_index4.default.bool,onClick:_index4.default.func,customStyle:_index4.default.oneOfType([_index4.default.object,_index4.default.string]),formType:_index4.default.oneOf(["submit","reset",""]),openType:_index4.default.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo",""]),lang:_index4.default.string,sessionFrom:_index4.default.string,sendMessageTitle:_index4.default.string,sendMessagePath:_index4.default.string,sendMessageImg:_index4.default.string,showMessageCard:_index4.default.bool,appParameter:_index4.default.string,onGetUserInfo:_index4.default.func,onContact:_index4.default.func,onGetPhoneNumber:_index4.default.func,onError:_index4.default.func,onOpenSetting:_index4.default.func},exports.default=AtButton,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtButton));