!function(e,t,a){"use strict";a.defineProperty(e,"__esModule",{value:!0});var n=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),a.defineProperty(e,o.key,o)}}var r,i=t("./npm/@tarojs/taro-weapp/index.js"),s=(r=i)&&r.__esModule?r:{default:r};var p=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=a.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.setPrototypeOf?a.setPrototypeOf(e,t):e.__proto__=t)}(c,i.Component),n(c,[{key:"componentDidMount",value:function(){s.default.showShareMenu()}},{key:"componentDidShow",value:function(){}},{key:"componentDidHide",value:function(){}},{key:"_createData",value:function(){}}]),c);function c(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(c.__proto__||a.getPrototypeOf(c)).apply(this,arguments));return e.config={pages:["pages/index/index","pages/source/index","pages/contact/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},permission:{"scope.userInfo":{desc:"你的用户信息将用于头像昵称展示"},"scope.userLocation":{desc:"你的位置信息将用于获取地理定位"}},tabBar:{color:"#666",selectedColor:"#22A6FF",borderStyle:"white",backgroundColor:"#fff",list:[{pagePath:"pages/index/index",iconPath:"_assets/home.png",selectedIconPath:"_assets/home-s.png",text:"首页"},{pagePath:"pages/source/index",iconPath:"_assets/star.png",selectedIconPath:"_assets/star-s.png",text:"公司业务"},{pagePath:"pages/contact/index",iconPath:"_assets/phone.png",selectedIconPath:"_assets/phone-s.png",text:"联系我们"}]},subPackages:[{root:"pages/joinus",pages:["index"]},{root:"pages/demo",pages:["portal/index","bottomup/index","keyboard/index","modal/index","otp/index","otp-modal/index","pwd-box/index","pwd-keyboard/index","native/index","request/index"]}]},e}e.default=p,App(t("./npm/@tarojs/taro-weapp/index.js").default.createApp(p)),s.default.initPxTransform({designWidth:750,deviceRatio:{640:1.17,750:1,828:.905}})}(exports,require,Object);