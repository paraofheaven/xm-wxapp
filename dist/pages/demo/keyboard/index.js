"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _class,_temp2,_createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_get=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0},_index=require("../../../npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var KeyboardDemo=(_temp2=_class=function(){function s(){var e,t,n;_classCallCheck(this,s);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(r)))).$usedState=["$compid__13","$compid__14","value1"],n.handleChange=function(e){n.setState({value1:e})},n.handleInputDelete=function(){n.setState({value1:n.state.value1.substring(0,n.state.value1.length-1)})},n.handleInputConfirm=function(){_index2.default.atMessage({message:"当前input值:"+n.state.value1})},n.handleInput=function(e){n.setState({value1:n.state.value1+e})},n.customComponents=["AtForm","AtInput","KeyBoard","AtMessage"],_possibleConstructorReturn(n,t)}return _inherits(s,_index.Component),_createClass(s,[{key:"_constructor",value:function(){_get(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"_constructor",this).apply(this,arguments),this.state={value1:""},this.$$refs=[]}},{key:"_createData",value:function(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,_index.genCompid)(o+"$compid__13"),a=(0,_index.genCompid)(o+"$compid__14"),s={name:"value1",type:"text",disabled:!0,placeholder:"点击键盘输入",value:this.__state.value1,onChange:this.handleChange.bind(this)},i={onKeyboradClear:this.handleInputDelete,onKeyboradFinish:this.handleInputConfirm,onKeyboradNumber:this.handleInput};return _index.propsManager.set(s,r),_index.propsManager.set(i,a),Object.assign(this.__state,{$compid__13:r,$compid__14:a}),this.__state}}]),s}(),_class.$$events=[],_class.$$componentPath="pages/demo/keyboard/index",_temp2);exports.default=KeyboardDemo,Component(require("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(KeyboardDemo,!0));