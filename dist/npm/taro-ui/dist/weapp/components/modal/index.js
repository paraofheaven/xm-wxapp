"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(o):void 0},_index=require("../../../../../@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index),_index3=require("../../../../../prop-types/index.js"),_index4=_interopRequireDefault(_index3),_index5=require("../../../../../classnames/index.js"),_index6=_interopRequireDefault(_index5),_isFunction2=require("../../../../../lodash/isFunction.js"),_isFunction3=_interopRequireDefault(_isFunction2),_component=require("../../common/component.js"),_component2=_interopRequireDefault(_component),_utils=require("../../common/utils.js");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var AtModal=(_temp2=_class=function(){function s(){var e,t,n;_classCallCheck(this,s);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return(t=n=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(i)))).$usedState=["$compid__27","title","content","_$isRenderAction","cancelText","confirmText","rootClass","_isOpened","isOpened","closeOnClickOverlay","className","children"],n.handleClickOverlay=function(){n.props.closeOnClickOverlay&&n.setState({_isOpened:!1},n.handleClose)},n.handleClose=function(){(0,_isFunction3.default)(n.props.onClose)&&n.props.onClose()},n.handleCancel=function(){(0,_isFunction3.default)(n.props.onCancel)&&n.props.onCancel()},n.handleConfirm=function(){(0,_isFunction3.default)(n.props.onConfirm)&&n.props.onConfirm()},n.handleTouchMove=function(e){e.stopPropagation()},n.customComponents=["AtModalHeader","AtModalContent","AtModalAction"],_possibleConstructorReturn(n,t)}return _inherits(s,_component2.default),_createClass(s,[{key:"_constructor",value:function(e){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).apply(this,arguments);var t=e.isOpened;this.state={_isOpened:t},this.$$refs=[]}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpened;this.props.isOpened!==t&&(0,_utils.handleTouchScroll)(t),t!==this.state._isOpened&&this.setState({_isOpened:t})}},{key:"_createData",value:function(e,t,n){var o;this.__state=e||this.state||{},this.__props=t||this.props||{};var i=this.$prefix,r=(0,_index.genCompid)(i+"$compid__27"),s=this.__state._isOpened,a=this.__props,l=a.title,c=a.content,u=a.cancelText,p=a.confirmText,_=(0,_index6.default)("at-modal",{"at-modal--active":s},this.__props.className);if(l||c){(o=u||p)&&_index.propsManager.set({isSimple:!0},r)}return Object.assign(this.__state,{$compid__27:r,title:l,content:c,_$isRenderAction:o,cancelText:u,confirmText:p,rootClass:_}),this.__state}}]),s}(),_class.$$events=["handleClickOverlay","handleCancel","handleConfirm","handleTouchMove"],_class.$$componentPath="Users/ly/Documents/GT_workspace/xmWeb/node_modules/taro-ui/dist/weapp/components/modal/index",_temp2);AtModal.defaultProps={closeOnClickOverlay:!0},AtModal.propTypes={title:_index4.default.string,isOpened:_index4.default.bool,onCancel:_index4.default.func,onConfirm:_index4.default.func,onClose:_index4.default.func,content:_index4.default.string,closeOnClickOverlay:_index4.default.bool,cancelText:_index4.default.string,confirmText:_index4.default.string},exports.default=AtModal,Component(require("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(AtModal));