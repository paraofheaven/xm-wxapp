"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(n):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ModalDemo=(_temp2=_class=function(){function s(){var e,t,o;_classCallCheck(this,s);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r)))).$usedState=["$compid__17","$compid__18","isOpen"],o.openModal=function(){o.setState({isOpen:!0})},o.customComponents=["AtButton","Modal"],_possibleConstructorReturn(o,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).apply(this,arguments),this.state={isOpen:!1},this.$$refs=[]}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,r=(0,_index.genCompid)(n+"$compid__17"),i=(0,_index.genCompid)(n+"$compid__18"),s=this.__state.isOpen,a={onClick:this.openModal},p={isOpen:s};return _index.propsManager.set(a,r),_index.propsManager.set(p,i),Object.assign(this.__state,{$compid__17:r,$compid__18:i}),this.__state}}]),s}(),_class.$$events=[],_class.$$componentPath="pages/demo/modal/index",_temp2);exports.default=ModalDemo,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(ModalDemo,!0));