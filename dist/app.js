"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),_index=require("./npm/@tarojs/taro-weapp/index.js"),_index2=_interopRequireDefault(_index);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _App=function(){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.config={pages:["pages/index/index","pages/source/index","pages/contact/index","pages/joinus/index","pages/demo/portal/index","pages/demo/bottomup/index","pages/demo/keyboard/index","pages/demo/pwd-box/index","pages/demo/otp/index","pages/demo/pwd-keyboard/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},permission:{"scope.userInfo":{desc:"你的用户信息将用于头像昵称展示"},"scope.userLocation":{desc:"你的位置信息将用于获取地理定位"}},tabBar:{color:"#666",selectedColor:"#22A6FF",borderStyle:"white",backgroundColor:"#fff",list:[{pagePath:"pages/index/index",iconPath:"_assets/home.png",selectedIconPath:"_assets/home-s.png",text:"首页"},{pagePath:"pages/source/index",iconPath:"_assets/star.png",selectedIconPath:"_assets/star-s.png",text:"公司业务"},{pagePath:"pages/contact/index",iconPath:"_assets/phone.png",selectedIconPath:"_assets/phone-s.png",text:"联系我们"}]}},e}return _inherits(t,_index.Component),_createClass(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"_createData",value:function(){}}]),t}();exports.default=_App,App(require("./npm/@tarojs/taro-weapp/index.js").default.createApp(_App)),_index2.default.initPxTransform({designWidth:750,deviceRatio:{640:1.17,750:1,828:.905}});