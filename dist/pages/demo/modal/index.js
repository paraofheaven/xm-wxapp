!function(t,e,_,a){"use strict";_.defineProperty(t,"__esModule",{value:!0});var d=function(t,e){if(a.isArray(t))return t;if(Symbol.iterator in _(t))return function(t,e){var o=[],r=!0,n=!1,i=void 0;try{for(var a,p=t[Symbol.iterator]();!(r=(a=p.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&p.return&&p.return()}finally{if(n)throw i}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t};function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),_.defineProperty(t,r.key,r)}}var n,i,p,y=e("../../../npm/@tarojs/taro-weapp/index.js"),s=(p=y)&&p.__esModule?p:{default:p};function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=_.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(_.setPrototypeOf?_.setPrototypeOf(t,e):t.__proto__=e)}(c,y.Component),o(c,[{key:"_constructor",value:function(){(function t(e,o,r){null===e&&(e=Function.prototype);var n=_.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=_.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(c.prototype.__proto__||_.getPrototypeOf(c.prototype),"_constructor",this).apply(this,arguments),this.state={isOpen:!1},this.$$refs=new s.default.RefsArray}},{key:"_createData",value:function(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,n=(0,y.genCompid)(r+"$compid__17"),i=d(n,2),a=i[0],p=i[1],s=(0,y.genCompid)(r+"$compid__18"),u=d(s,2),l=u[0],c=u[1],f=this.__state.isOpen;return y.propsManager.set({onClick:this.openModal},p,a),y.propsManager.set({isOpen:f},c,l),_.assign(this.__state,{$compid__17:p,$compid__18:c}),this.__state}}]),i=n=c,n.$$events=[],n.$$componentPath="pages/demo/modal/index",i);function c(){var t,e,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);for(var r=arguments.length,n=a(r),i=0;i<r;i++)n[i]=arguments[i];return(e=o=u(this,(t=c.__proto__||_.getPrototypeOf(c)).call.apply(t,[this].concat(n)))).$usedState=["$compid__17","$compid__18","isOpen"],o.openModal=function(){o.setState({isOpen:!0})},o.customComponents=["AtButton","Modal"],u(o,e)}t.default=l,Component(e("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(l,!0))}(exports,require,Object,Array);