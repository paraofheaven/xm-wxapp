!function(e,t,n,h,s){"use strict";h.defineProperty(t,"__esModule",{value:!0});var _=function(e,t){if(s.isArray(e))return e;if(Symbol.iterator in h(e))return function(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(o=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e};function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),h.defineProperty(e,o.key,o)}}var a,i,y=n("../../../../../@tarojs/taro-weapp/index.js"),l=u(y),p=u(n("../../../../../prop-types/index.js")),v=u(n("../../../../../classnames/index.js")),c=u(n("../../../../../lodash/isFunction.js"));function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=h.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(h.setPrototypeOf?h.setPrototypeOf(e,t):e.__proto__=t)}(m,u(n("../../common/component.js")).default),o(m,[{key:"_constructor",value:function(e){(function e(t,n,o){null===t&&(t=Function.prototype);var r=h.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=h.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0})(m.prototype.__proto__||h.getPrototypeOf(m.prototype),"_constructor",this).apply(this,arguments);var t=e.isOpened;this.state={_isOpened:t},this.$$refs=new l.default.RefsArray}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpened;t!==this.state._isOpened&&(this.setState({_isOpened:t}),t||this.handleClose())}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,y.genCompid)(o+"$compid__28"),a=_(r,2),s=a[0],i=a[1],l=this.__props,p=l.title,c=l.cancelText,u=l.className,f=this.__state._isOpened,d=(0,v.default)("at-action-sheet",{"at-action-sheet--active":f},u);return c&&y.propsManager.set({onClick:this.handleCancel},i,s),h.assign(this.__state,{$compid__28:i,rootClass:d,title:p,cancelText:c}),this.__state}}]),i=a=m,a.$$events=["handleTouchMove","close"],a.$$componentPath="Users/luyong/Documents/GT_Workspace/xm-wxapp/node_modules/taro-ui/dist/weapp/components/action-sheet/index",i);function m(){var e,t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m);for(var o=arguments.length,r=s(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=f(this,(e=m.__proto__||h.getPrototypeOf(m)).call.apply(e,[this].concat(r)))).$usedState=["$compid__28","rootClass","title","cancelText","_isOpened","className","isOpened","children"],n.handleClose=function(){(0,c.default)(n.props.onClose)&&n.props.onClose()},n.handleCancel=function(){if((0,c.default)(n.props.onCancel))return n.props.onCancel();n.close()},n.close=function(){n.setState({_isOpened:!1},n.handleClose)},n.handleTouchMove=function(e){e.stopPropagation(),e.preventDefault()},n.customComponents=["AtActionSheetHeader","AtActionSheetBody","AtActionSheetFooter"],f(n,t)}d.defaultProps={title:"",cancelText:"",isOpened:!1},d.propTypes={title:p.default.string,onClose:p.default.func,onCancel:p.default.func,isOpened:p.default.bool,cancelText:p.default.string},t.default=d,Component(n("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(d))}(module,exports,require,Object,Array);