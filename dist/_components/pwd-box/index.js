!function(t,e,p,a){"use strict";p.defineProperty(t,"__esModule",{value:!0});var o=function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t};function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),p.defineProperty(t,n.key,n)}}var r,i,s,u=e("../../npm/@tarojs/taro-weapp/index.js"),l=(s=u)&&s.__esModule?s:{default:s};function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var d=["","","","","",""],c=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=p.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(p.setPrototypeOf?p.setPrototypeOf(t,e):t.__proto__=e)}(w,u.Component),o(w,[{key:"_constructor",value:function(){(function t(e,o,n){null===e&&(e=Function.prototype);var r=p.getOwnPropertyDescriptor(e,o);if(void 0===r){var i=p.getPrototypeOf(e);return null===i?void 0:t(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(w.prototype.__proto__||p.getPrototypeOf(w.prototype),"_constructor",this).apply(this,arguments),this.state={pwdNumbers:d,pwdValue:""},this.$$refs=new l.default.RefsArray}},{key:"_createData",value:function(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var n=this.__props,r=n.title,i=n.subTitle,a=n.showForgetPwd,s=n.forgetPwdText,u=this.__state;return u.pwdNumbers,u.pwdValue,p.assign(this.__state,{title:r,subTitle:i,showForgetPwd:a,forgetPwdText:s}),this.__state}}]),i=r=w,r.$$events=["onPwdInput","forgetPwd"],r.$$componentPath="_components/pwd-box/index",i);function w(){var t,e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,w);for(var o=arguments.length,r=a(o),i=0;i<o;i++)r[i]=arguments[i];return(e=n=f(this,(t=w.__proto__||p.getPrototypeOf(w)).call.apply(t,[this].concat(r)))).$usedState=["title","subTitle","pwdNumbers","pwdValue","showForgetPwd","forgetPwdText","__fn_call","forgetPwdLink"],n.onPwdInput=function(t){var e=t.detail.value;n.setInputState(e)},n.setInputState=function(t){var e=p.assign({length:6},d,t.split(""));e=a.prototype.slice.call(e),n.setState({pwdNumbers:e,pwdValue:t}),6<=t.length&&n._onInputFinish(t)},n.clearInputState=function(){n.setState({pwdNumbers:d,pwdValue:""})},n._onInputFinish=function(t){6===t.length&&n.props.onInputFinish(t)},n.forgetPwd=function(){var t=n.props,e=t.showForgetPwd,o=t.forgetPwdLink;if(e&&!o)throw new Error("forgetPwdLink is undefined!");l.default.showLoading(),n.clearInputState(),l.default.navigateTo({url:n.props.forgetPwdLink||""}),l.default.hideLoading()},n.customComponents=[],f(n,e)}c.defaultProps={title:"请输入支付密码",subTitle:"",showForgetPwd:!1,forgetPwdLink:"",forgetPwdText:"忘记密码?",onInputFinish:function(){}},c.externalClass=["v-class"],t.default=c,Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c))}(exports,require,Object,Array);