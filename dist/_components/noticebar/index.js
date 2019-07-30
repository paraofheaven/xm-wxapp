"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../npm/classnames/index.js"),_index4=_interopRequireDefault(_index3);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var NoticeBar=(_temp2=_class=function(){function a(){var e,t,n;_classCallCheck(this,a);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(i)))).$usedState=["anonymousState__temp","$compid__8","$compid__9","visible","animationData","closable","duration","delay","loop","children"],n.initAnimation=function(){var e=n.state.duration,t=_index2.default.createAnimation({duration:e,timingFunction:"linear"});t.translateX("-100%").step(),n.setState({animationData:t.export()}),setTimeout(function(){var e=_index2.default.createAnimation({duration:0});e.translateX(n.wrapWidth).step(),n.setState({animationData:e.export()}),setTimeout(function(){var e=_index2.default.createAnimation({duration:n.resetDuration});e.translateX(0).step(),n.setState({animationData:e.export()}),setTimeout(function(){n.initAnimation()},n.resetDuration)},100)},e)},n.closeNoticeBar=function(){n.setState({visible:!1})},n.customComponents=["MyIcon"],_possibleConstructorReturn(n,t)}return _inherits(a,_index.Component),_createClass(a,[{key:"_constructor",value:function(){_get(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"_constructor",this).apply(this,arguments),this.defaultProps={closable:!0,loop:!0},this.state={visible:!0,animationData:void 0,duration:6e3,delay:1e3},this.$$refs=[]}},{key:"componentDidMount",value:function(){var n=this;this.props.loop&&_index2.default.createSelectorQuery().in(this.$scope).select(".v-noticebar-wrap").boundingClientRect().exec(function(e){n.wrapWidth=e[0].width,_index2.default.createSelectorQuery().in(n.$scope).select(".v-noticebar-content").boundingClientRect().exec(function(e){var t=e[0].width;n.resetDuration=n.state.duration*n.wrapWidth/t,setTimeout(function(){n.initAnimation()},n.state.delay)})})}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,i=(0,_index.genCompid)(o+"$compid__8"),r=(0,_index.genCompid)(o+"$compid__9"),a=this.__state,s=a.visible,c=(a.animationData,this.__props),u=c.loop,l=c.closable;if(!s)return null;var p=(0,_index4.default)("v-noticebar-content",_defineProperty({},"v-noticebar-loop",u)),_={value:"close",onClick:this.closeNoticeBar};return _index.propsManager.set({value:"horn"},i),l&&_index.propsManager.set(_,r),Object.assign(this.__state,{anonymousState__temp:p,$compid__8:i,$compid__9:r,closable:l}),this.__state}}]),a}(),_class.$$events=[],_class.$$componentPath="_components/noticebar/index",_temp2);NoticeBar.externalClasses=["v-class","v-noticebar-notice"],exports.default=NoticeBar,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(NoticeBar));