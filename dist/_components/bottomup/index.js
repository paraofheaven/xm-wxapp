"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,o,n)}if("value"in i)return i.value;var r=i.get;return void 0!==r?r.call(n):void 0},_index=require("../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_isFunction2=require("../../npm/lodash/isFunction.js"),_isFunction3=_interopRequireDefault(_isFunction2);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var BottomUp=(_temp2=_class=function(){function r(){var e,t,o;_classCallCheck(this,r);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=o=_possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i)))).$usedState=["$compid__30","visible","bottomClassName","hideMask","title","_isOpen","closeOnClickOverlay","isOpen","children"],o.closeByDocument=function(){o.props.closeOnClickOverlay&&o.handleClose()},o.handleClose=function(){o.state._isOpen&&o.setState({_isOpen:!1},function(){o.bottomupTimer=setTimeout(function(){o.setState({visible:!1}),(0,_isFunction3.default)(o.props.onClose)&&o.props.onClose()},400)})},o.handleTouchMove=function(e){e.stopPropagation()},o.customComponents=["MyIcon"],_possibleConstructorReturn(o,t)}return _inherits(r,_index.Component),_createClass(r,[{key:"_constructor",value:function(e){_get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"_constructor",this).apply(this,arguments),this.state={_isOpen:!1,visible:!1};var t=e.isOpen;this.state={_isOpen:t,visible:t},this.$$refs=[]}},{key:"componentWillReceiveProps",value:function(e){var t=this,o=e.isOpen;o!==this.state._isOpen&&this.setState({_isOpen:o},function(){t.bottomupTimer=setTimeout(function(){t.setState({visible:o})},400)})}},{key:"componentWillUnmount",value:function(){clearTimeout(this.bottomupTimer)}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,i=(0,_index.genCompid)(n+"$compid__30"),s=this.__state,r=s._isOpen,a=s.visible,l=this.__props,p=l.hideMask,u=l.title,c="v-bottomup "+(r?"v-bottomup-open":"v-bottomup-close")+" v-class";if(!a)return null;var _={value:"close",size:22,color:"#999",onClick:this.handleClose};return _index.propsManager.set(_,i),Object.assign(this.__state,{$compid__30:i,bottomClassName:c,hideMask:p,title:u}),this.__state}}]),r}(),_class.$$events=["handleTouchMove","closeByDocument"],_class.$$componentPath="_components/bottomup/index",_temp2);BottomUp.defaultProps={isOpen:!1,hideMask:!1,title:"",closeOnClickOverlay:!0,onClose:function(){}},BottomUp.externalClasses=["v-class"],exports.default=BottomUp,Component(require("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(BottomUp));