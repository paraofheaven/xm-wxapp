!function(e,t,I,i){"use strict";I.defineProperty(e,"__esModule",{value:!0});var P=function(e,t){if(i.isArray(e))return e;if(Symbol.iterator in I(e))return function(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e};function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),I.defineProperty(e,n.key,n)}}var r,a,s,k=t("../../npm/@tarojs/taro-weapp/index.js"),l=(s=k)&&s.__esModule?s:{default:s};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["","","","","",""],c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=I.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(I.setPrototypeOf?I.setPrototypeOf(e,t):e.__proto__=t)}(d,k.Component),o(d,[{key:"_constructor",value:function(){(function e(t,o,n){null===t&&(t=Function.prototype);var r=I.getOwnPropertyDescriptor(t,o);if(void 0===r){var a=I.getPrototypeOf(t);return null===a?void 0:e(a,o,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(d.prototype.__proto__||I.getPrototypeOf(d.prototype),"_constructor",this).apply(this,arguments),this.state={codeNumbers:u,codeValue:"",btnDisabled:!0,btnLoading:!1},this.$$refs=new l.default.RefsArray}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,r=(0,k.genCompid)(n+"$compid__31"),a=P(r,2),i=a[0],s=a[1],l=(0,k.genCompid)(n+"$compid__32"),p=P(l,2),u=p[0],c=p[1],d=(0,k.genCompid)(n+"$compid__33"),_=P(d,2),f=_[0],y=_[1],m=this.__props,h=m.isOpen,v=m.closeOnClickOverlay,b=(m.onClose,m.title),g=m.desc,S=m.color,$=(m.onSendRequest,this.__state),C=$.codeNumbers,O=($.codeValue,$.btnDisabled,$.btnLoading,(0,k.internal_inline_style)({color:S})),w=C.map(function(e,t){return e={$original:(0,k.internal_get_original)(e)},{$loopState__temp2:(0,k.internal_inline_style)({color:S}),$original:e.$original}});return k.propsManager.set({isOpen:h,closeOnClickOverlay:v},s,i),k.propsManager.set({value:"close",size:22,color:"#999",onClick:this.__props.onClose},c,u),k.propsManager.set({autoStart:!0,onSendRequest:this.__props.onSendRequest},y,f),I.assign(this.__state,{anonymousState__temp3:O,loopArray3:w,$compid__31:s,$compid__32:c,$compid__33:y,title:b,desc:g}),this.__state}}]),a=r=d,r.$$events=["handleInput","submit"],r.$$componentPath="_components/otp-modal/index",a);function d(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d);for(var n=arguments.length,r=i(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=p(this,(e=d.__proto__||I.getPrototypeOf(d)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp3","loopArray3","$compid__31","$compid__32","$compid__33","codeNumbers","codeValue","btnDisabled","btnLoading","title","desc","isOpen","closeOnClickOverlay","color","onSendRequest","__fn_call"],o.clearInputState=function(){o.setState({codeNumbers:u,codeValue:""})},o.handleInput=function(e){var t=e.detail.value;o.setInputState(t)},o.setInputState=function(e){var t=I.assign({length:6},u,e.split(""));t=i.prototype.slice.call(t),o.setState({codeNumbers:t,codeValue:e}),6<=e.length?o.setState({btnDisabled:!1}):o.setState({btnDisabled:!0})},o.submit=function(){var e=o.state.codeValue;e&&6===e.length&&(o.props.onInputFinish(e),o.clearInputState(),o.props.onClose())},o.customComponents=["Modal","MyIcon","Otp"],p(o,t)}c.defaultProps={title:"请输入短信验证码",desc:"请输入发送到您手机的验证码",color:"#1FC756",closeOnClickOverlay:!1,onClose:function(){},onInputFinish:function(){},beforeSendRequest:function(){return!0},onSendRequest:function(){}},c.externalClass=["v-class"],e.default=c,Component(t("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c))}(exports,require,Object,Array);