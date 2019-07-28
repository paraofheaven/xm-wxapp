"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function getInputProps(e){var t={type:e.type,maxLength:e.maxLength,disabled:e.disabled,password:!1};switch(t.type){case"phone":t.type="number",t.maxLength=11;break;case"password":t.password=!0}return e.disabled||e.editable||(t.disabled=!0),t}var AtInput=(_temp2=_class=function(){function i(){var e,t,n;_classCallCheck(this,i);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","rootCls","containerCls","overlayCls","title","name","type","password","placeholderStyle","placeholderCls","placeholder","cursorSpacing","maxLength","autoFocus","focus","value","confirmType","cursor","selectionStart","selectionEnd","adjustPosition","clear","error","editable","className","customStyle","border","placeholderClass","children"],n.onInput=function(e){return n.props.onChange(e.target.value,e)},n.onFocus=function(e){return n.props.onFocus(e.target.value,e)},n.onBlur=function(e){n.props.onBlur(e.target.value,e),n.props.onChange(e.target.value,e)},n.onConfirm=function(e){return n.props.onConfirm(e.target.value,e)},n.onClick=function(){return!n.props.editable&&n.props.onClick()},n.clearValue=function(){return n.props.onChange("")},n.onErrorClick=function(){return n.props.onErrorClick()},n.customComponents=[],_possibleConstructorReturn(n,t)}return _inherits(i,_component2.default),_createClass(i,[{key:"_constructor",value:function(e){_get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"_constructor",this).call(this,e),this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};this.$prefix;var o=this.__props,r=o.className,a=o.customStyle,i=o.name,l=o.cursorSpacing,u=o.confirmType,s=o.cursor,d=o.selectionStart,c=o.selectionEnd,p=o.adjustPosition,f=o.border,_=o.title,x=o.error,y=o.clear,m=o.placeholder,h=o.placeholderStyle,b=o.placeholderClass,g=o.autoFocus,C=o.focus,v=o.value,j=getInputProps(this.__props),O=j.type,S=j.maxLength,w=j.disabled,k=j.password,P=(0,_index6.default)("at-input",{"at-input--without-border":!f},r),T=(0,_index6.default)("at-input__container",{"at-input--error":x,"at-input--disabled":w}),E=(0,_index6.default)("at-input__overlay",{"at-input__overlay--hidden":!w}),F=(0,_index6.default)("placeholder",b),q=(0,_index.internal_inline_style)(a);return Object.assign(this.__state,{anonymousState__temp:q,rootCls:P,containerCls:T,overlayCls:E,title:_,name:i,type:O,password:k,placeholderStyle:h,placeholderCls:F,placeholder:m,cursorSpacing:l,maxLength:S,autoFocus:g,focus:C,value:v,confirmType:u,cursor:s,selectionStart:d,selectionEnd:c,adjustPosition:p,clear:y,error:x}),this.__state}}]),i}(),_class.$$events=["onClick","onInput","onFocus","onBlur","onConfirm","clearValue","onErrorClick"],_class.$$componentPath="Users/ly/Documents/GT_workspace/xmWeb/node_modules/taro-ui/dist/weapp/components/input/index",_temp2);AtInput.defaultProps={className:"",customStyle:"",value:"",name:"",placeholder:"",placeholderStyle:"",placeholderClass:"",title:"",cursorSpacing:50,confirmType:"完成",cursor:0,selectionStart:-1,selectionEnd:-1,adjustPosition:!0,maxLength:140,type:"text",disabled:!1,border:!0,editable:!0,error:!1,clear:!1,autoFocus:!1,focus:!1,onChange:function(){},onFocus:function(){},onBlur:function(){},onConfirm:function(){},onErrorClick:function(){},onClick:function(){}},AtInput.propTypes={className:_index4.default.oneOfType([_index4.default.string,_index4.default.array]),customStyle:_index4.default.oneOfType([_index4.default.string,_index4.default.object]),value:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),name:_index4.default.string,placeholder:_index4.default.string,placeholderStyle:_index4.default.string,placeholderClass:_index4.default.string,title:_index4.default.string,confirmType:_index4.default.string,cursor:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),selectionStart:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),selectionEnd:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),adjustPosition:_index4.default.bool,cursorSpacing:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),maxLength:_index4.default.oneOfType([_index4.default.string,_index4.default.number]),type:_index4.default.string,disabled:_index4.default.bool,border:_index4.default.bool,editable:_index4.default.bool,error:_index4.default.bool,clear:_index4.default.bool,backgroundColor:_index4.default.string,autoFocus:_index4.default.bool,focus:_index4.default.bool,onChange:_index4.default.func,onFocus:_index4.default.func,onBlur:_index4.default.func,onConfirm:_index4.default.func,onErrorClick:_index4.default.func,onClick:_index4.default.func},exports.default=AtInput,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtInput));