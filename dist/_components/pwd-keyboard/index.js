"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,o,n)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var PwdKeyBoard=(_temp2=_class=function(){function a(){var e,t,r;_classCallCheck(this,a);for(var o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];return(t=r=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(n)))).$usedState=["$compid__30","$compid__31","$compid__32","$compid__33","animation1","withConfirm","animation2","message","pwdboxValue","confirm","isOpen","closeOnClickOverlay","pwdbox1Config","pwdbox2Config","confirmErrorMsg"],r.onKeyboradNumber=function(e){var t=r.state,o=t.pwdboxValue,n=t.confirm;o.length<6&&(o+=e,r.setState({pwdboxValue:o}),n?r.pwdboxRef2.setInputState(o):r.pwdboxRef1.setInputState(o))},r.onKeyboradDelete=function(){var e=r.state,t=e.pwdboxValue,o=e.confirm;0<t.length&&(t=t.substring(0,t.length-1),r.setState({pwdboxValue:t}),o?r.pwdboxRef2.setInputState(t):r.pwdboxRef1.setInputState(t))},r.onBottomUpClose=function(){r.setState({confirm:!1,pwdboxValue:""}),r.props.onClose(),r.pwdboxRef1.clearInputState(),r.props.withConfirm&&(r.pwdboxRef2.clearInputState(),r.resetBoxAnimation())},r.onInputFinish=function(e){if(!r.props.withConfirm)return r.onBottomUpClose(),void r.props.onInputFinish(e);r.code1=e,r.setState({confirm:!0},function(){r.createAnimation()})},r.onInputFinishConfirm=function(e){if(r.code1!==e)return r.setState({message:r.props.confirmErrorMsg}),void setTimeout(function(){r.setState({message:""}),r.resetBoxAnimation()},1500);r.onBottomUpClose(),r.props.onInputFinish(r.code1)},r.resetBoxAnimation=function(){r.setState({confirm:!1}),r.createAnimation(!0)},r.createAnimation=function(e){var t=-r.screenWidth,o={duration:500,timingFunction:"ease",delay:0},n=_index2.default.createAnimation(o),i=_index2.default.createAnimation(o);n.translate(e?0:t).step(),i.translate(e?0:t).step(),r.setState({animation1:n.export(),animation2:i.export()}),r.pwdboxRef1.clearInputState(),r.pwdboxRef2.clearInputState(),r.setState({pwdboxValue:""})},r.customComponents=["BottomUp","PwdBox","KeyBoard"],_possibleConstructorReturn(r,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(){var t=this;_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.state={animation1:void 0,animation2:void 0,pwdboxValue:"",confirm:!1,message:""},this.$$refs=[{type:"component",id:"SjfFA",refName:"",fn:function(e){t.bottomupRef=e}},{type:"component",id:"REjlW",refName:"",fn:function(e){t.pwdboxRef1=e}},{type:"component",id:"ipLSd",refName:"",fn:function(e){t.pwdboxRef2=e}}]}},{key:"componentDidMount",value:function(){try{var e=_index2.default.getSystemInfoSync();this.screenWidth=e.screenWidth||375}catch(e){_index2.default.showToast({title:e.message||"获取系统信息失败",icon:"failed"})}}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,i=(0,_index.genCompid)(n+"$compid__30"),r=(0,_index.genCompid)(n+"$compid__31"),a=(0,_index.genCompid)(n+"$compid__32"),s=(0,_index.genCompid)(n+"$compid__33"),p=this.__props,c=p.isOpen,u=(p.onClose,p.withConfirm),d=p.closeOnClickOverlay,l=p.pwdbox1Config,f=p.pwdbox2Config,_=this.__state,m=(_.animation1,_.animation2,_.message,{isOpen:c,closeOnClickOverlay:d,onClose:this.__props.onClose}),h=_extends({},l,{onInputFinish:this.onInputFinish}),b=_extends({},f,{onInputFinish:this.onInputFinishConfirm}),x={hideFinishBtn:!0,onKeyboradNumber:this.onKeyboradNumber,onKeyboradDelete:this.onKeyboradDelete};return _index.propsManager.set(m,i),_index.propsManager.set(h,r),u&&_index.propsManager.set(b,a),_index.propsManager.set(x,s),Object.assign(this.__state,{$compid__30:i,$compid__31:r,$compid__32:a,$compid__33:s,withConfirm:u}),this.__state}}]),a}(),_class.$$events=[],_class.$$componentPath="_components/pwd-keyboard/index",_temp2);PwdKeyBoard.defaultProps={isOpen:!1,closeOnClickOverlay:!1,withConfirm:!1,confirmErrorMsg:"两次输入不一致，请重新输入！",pwdbox1Config:{title:"请输入支付密码",subTitle:"",showForgetPwd:!0},pwdbox2Config:{title:"再次确认",subTitle:"",showForgetPwd:!1},onClose:function(){},onInputFinish:function(){}},PwdKeyBoard.externalClass=["v-class"],exports.default=PwdKeyBoard,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(PwdKeyBoard));