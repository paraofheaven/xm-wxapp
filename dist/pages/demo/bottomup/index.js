!function(t,e,_,p){"use strict";_.defineProperty(t,"__esModule",{value:!0});var m=function(t,e){if(p.isArray(t))return t;if(Symbol.iterator in _(t))return function(t,e){var o=[],r=!0,n=!1,i=void 0;try{for(var p,a=t[Symbol.iterator]();!(r=(p=a.next()).done)&&(o.push(p.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(n)throw i}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t};function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),_.defineProperty(t,r.key,r)}}var n,i,a,y=e("../../../npm/@tarojs/taro-weapp/index.js"),s=(a=y)&&a.__esModule?a:{default:a};function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=_.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(_.setPrototypeOf?_.setPrototypeOf(t,e):t.__proto__=e)}(l,y.Component),o(l,[{key:"_constructor",value:function(){(function t(e,o,r){null===e&&(e=Function.prototype);var n=_.getOwnPropertyDescriptor(e,o);if(void 0===n){var i=_.getPrototypeOf(e);return null===i?void 0:t(i,o,r)}if("value"in n)return n.value;var p=n.get;return void 0!==p?p.call(r):void 0})(l.prototype.__proto__||_.getPrototypeOf(l.prototype),"_constructor",this).apply(this,arguments),this.state={bottomupOpen:!1},this.$$refs=new s.default.RefsArray}},{key:"_createData",value:function(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,n=(0,y.genCompid)(r+"$compid__13"),i=m(n,2),p=i[0],a=i[1],s=(0,y.genCompid)(r+"$compid__14"),u=m(s,2),c=u[0],l=u[1],f=this.__state.bottomupOpen;return y.propsManager.set({onClick:this.openBottomUp},a,p),y.propsManager.set({title:"标题",isOpen:f,onClose:this.closeBottomUp},l,c),_.assign(this.__state,{$compid__13:a,$compid__14:l}),this.__state}}]),i=n=l,n.$$events=[],n.$$componentPath="pages/demo/bottomup/index",i);function l(){var t,e,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l);for(var r=arguments.length,n=p(r),i=0;i<r;i++)n[i]=arguments[i];return(e=o=u(this,(t=l.__proto__||_.getPrototypeOf(l)).call.apply(t,[this].concat(n)))).$usedState=["$compid__13","$compid__14","bottomupOpen"],o.openBottomUp=function(){o.setState({bottomupOpen:!0})},o.closeBottomUp=function(){o.setState({bottomupOpen:!1})},o.customComponents=["AtButton","BottomUp"],u(o,e)}t.default=c,Component(e("../../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c,!0))}(exports,require,Object,Array);