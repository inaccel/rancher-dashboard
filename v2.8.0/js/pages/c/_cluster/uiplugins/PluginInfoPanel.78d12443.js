(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/uiplugins/PluginInfoPanel"],{"27ee":function(n,e,i){var t=i("9dae");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var o=i("499e").default;o("1d937753",t,!0,{sourceMap:!1,shadowMode:!1})},"53a6":function(n,e,i){n.exports=i.p+"img/generic-plugin.3cca4b04.svg"},"639d":function(n,e,i){"use strict";i("27ee")},"9dae":function(n,e,i){var t=i("4bad");e=t(!1),e.push([n.i,".plugin-info-panel[data-v-297b3958]{position:fixed;top:0;left:0;z-index:1;--banner-top-offset:0}.plugin-info-panel .glass[data-v-297b3958]{z-index:9;left:0;width:100%;opacity:0}.plugin-info-panel .glass[data-v-297b3958],.plugin-info-panel .slideIn[data-v-297b3958]{position:fixed;top:calc(54px + var(--banner-top-offset));height:calc(100% - 54px - var(--banner-top-offset))}.plugin-info-panel .slideIn[data-v-297b3958]{border-left:var(--header-border-size) solid var(--header-border);right:-35%;background-color:var(--topmenu-bg);width:35%;z-index:10;display:flex;flex-direction:column;padding:10px;transition:right .5s ease}.plugin-info-panel .slideIn__header[data-v-297b3958]{text-transform:capitalize}.plugin-info-panel .slideIn .plugin-info-content[data-v-297b3958]{display:flex;flex-direction:column;overflow:hidden}.plugin-info-panel .slideIn .plugin-info-content .plugin-info-detail[data-v-297b3958]{overflow:auto}.plugin-info-panel .slideIn h3[data-v-297b3958]{font-size:14px;margin:15px 0 10px 0;opacity:.7;text-transform:uppercase}.plugin-info-panel .slideIn .plugin-header[data-v-297b3958]{border-bottom:1px solid var(--border);display:flex;padding-bottom:20px}.plugin-info-panel .slideIn .plugin-header .plugin-title[data-v-297b3958]{flex:1}.plugin-info-panel .slideIn .plugin-icon[data-v-297b3958]{font-size:40px;margin-right:10px;color:#888;width:44px;height:44px}.plugin-info-panel .slideIn .plugin-icon.dark-mode[data-v-297b3958]{border-radius:calc(var(--border-radius)*2);overflow:hidden;background-color:#fff}.plugin-info-panel .slideIn .plugin-icon .plugin-icon-img[data-v-297b3958]{height:40px;width:40px;-o-object-fit:contain;object-fit:contain;position:relative;top:2px;left:2px}.plugin-info-panel .slideIn .plugin-versions[data-v-297b3958]{display:flex;flex-wrap:wrap}.plugin-info-panel .slideIn .plugin-description[data-v-297b3958]{font-size:15px}.plugin-info-panel .slideIn .version-link[data-v-297b3958]{cursor:pointer;border:1px solid var(--link);padding:2px 8px;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:0 5px 5px 0;display:block}.plugin-info-panel .slideIn .version-link.version-active[data-v-297b3958]{color:var(--link-text);background:var(--link)}.plugin-info-panel .slideIn .version-link.disabled[data-v-297b3958]{cursor:not-allowed;color:var(--disabled-text)!important;background-color:var(--disabled-bg)!important;border-color:var(--disabled-bg)!important;text-decoration:none!important}.plugin-info-panel .slideIn .version-link.version-builtin[data-v-297b3958]{display:inline-block}.plugin-info-panel .slideIn__header[data-v-297b3958]{display:flex;align-items:center;justify-content:space-between}.plugin-info-panel .slideIn__header__buttons[data-v-297b3958]{display:flex}.plugin-info-panel .slideIn__header__button[data-v-297b3958]{cursor:pointer;display:flex;align-items:center;justify-content:center;padding:2px}.plugin-info-panel .slideIn__header__button>i[data-v-297b3958]{font-size:20px;opacity:.5}.plugin-info-panel .slideIn__header__button[data-v-297b3958]:hover{background-color:var(--wm-closer-hover-bg)}.plugin-info-panel .slideIn .chart-content__tabs[data-v-297b3958]{display:flex;flex-direction:column;flex:1;height:0;padding-bottom:10px}.plugin-info-panel .slideIn .chart-content__tabs[data-v-297b3958] .chart-readmes{flex:1;overflow:auto}.plugin-info-panel .slideIn__show[data-v-297b3958]{right:0}",""]),n.exports=e},b4b2:function(n,e,i){"use strict";i.r(e);i("a4d3"),i("e01a");var t=function(){var n=this,e=n._self._c;return e("div",{staticClass:"plugin-info-panel",style:"--banner-top-offset: ".concat(n.headerBannerSize,"px")},[n.showSlideIn?e("div",{staticClass:"glass",attrs:{"data-testid":"extension-details-bg"},on:{click:function(e){return n.hide()}}}):n._e(),n._v(" "),e("div",{staticClass:"slideIn",class:{hide:!1,slideIn__show:n.showSlideIn},attrs:{"data-testid":"extension-details"}},[n.info?e("div",{staticClass:"plugin-info-content"},[e("div",{staticClass:"plugin-header"},[e("div",{staticClass:"plugin-icon",class:n.applyDarkModeBg},[n.info.icon?e("LazyImage",{staticClass:"icon plugin-icon-img",attrs:{"initial-src":n.defaultIcon,"error-src":n.defaultIcon,src:n.info.icon}}):e("img",{staticClass:"icon plugin-icon-img",attrs:{src:n.defaultIcon}})],1),n._v(" "),e("div",{staticClass:"plugin-title"},[e("h2",{staticClass:"slideIn__header",attrs:{"data-testid":"extension-details-title"}},[n._v("\n            "+n._s(n.info.label)+"\n          ")]),n._v(" "),e("p",{staticClass:"plugin-description"},[n._v("\n            "+n._s(n.info.description)+"\n          ")])]),n._v(" "),e("div",{staticClass:"plugin-close"},[e("div",{staticClass:"slideIn__header__buttons"},[e("div",{staticClass:"slideIn__header__button",attrs:{"data-testid":"extension-details-close"},on:{click:function(e){n.showSlideIn=!1}}},[e("i",{staticClass:"icon icon-close"})])])])]),n._v(" "),e("div",[n.info.error?e("Banner",{staticClass:"mt-10",attrs:{color:"error",label:n.info.error}}):n._e(),n._v(" "),n.info.builtin?e("Banner",{staticClass:"mt-10",attrs:{color:"warning",label:n.t("plugins.descriptions.built-in")}}):[n.info.certified?n._e():e("Banner",{staticClass:"mt-10",attrs:{color:"warning",label:n.t("plugins.descriptions.third-party")}}),n._v(" "),n.info.experimental?e("Banner",{staticClass:"mt-10",attrs:{color:"warning",label:n.t("plugins.descriptions.experimental")}}):n._e()]],2),n._v(" "),n.info.versions.length?e("h3",[n._v("\n        "+n._s(n.t("plugins.info.versions"))+"\n      ")]):n._e(),n._v(" "),e("div",{staticClass:"plugin-versions mb-10"},n._l(n.info.versions,(function(i){return e("div",{key:i.version},[e("a",{directives:[{name:"clean-tooltip",rawName:"v-clean-tooltip",value:n.handleVersionBtnTooltip(i),expression:"handleVersionBtnTooltip(v)"}],staticClass:"version-link",class:n.handleVersionBtnClass(i),on:{click:function(e){return n.loadPluginVersionInfo(i.version)}}},[n._v("\n            "+n._s(i.version)+"\n          ")])])})),0),n._v(" "),n.versionError?e("div",[n._v("\n        "+n._s(n.t("plugins.info.versionError"))+"\n      ")]):n._e(),n._v(" "),n.versionInfo?e("h3",[n._v("\n        "+n._s(n.t("plugins.info.detail"))+"\n      ")]):n._e(),n._v(" "),n.versionInfo?e("div",{staticClass:"plugin-info-detail"},[n.versionInfo?e("ChartReadme",{attrs:{"version-info":n.versionInfo}}):n._e()],1):n._e(),n._v(" "),n.info.versions.length?n._e():e("div",[e("h3",[n._v("\n          "+n._s(n.t("plugins.info.versions"))+"\n        ")]),n._v(" "),e("div",{staticClass:"version-link version-active version-builtin"},[n._v("\n          "+n._s(n.info.displayVersion)+"\n        ")])])]):n._e()])])},o=[],a=(i("b64b"),i("4de4"),i("e439"),i("159b"),i("dbb4"),i("ade3")),r=i("1da1"),s=i("a34a"),l=i.n(s),d=(i("96cf"),i("a9e3"),i("7db0"),i("d3b7"),i("2f62")),p=i("5fc0"),c=i("bec1"),u=i("bc1c"),f=i("a788"),v=i("c5b9");function b(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function g(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){Object(a["a"])(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}var h={fetch:function(){var n=this;return Object(r["a"])(l.a.mark((function e(){var i,t,o,a,r,s,d;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$store.getters["management/byId"](f["B"].SETTING,v["c"].BANNERS);case 2:i=e.sent,t=JSON.parse(i.value),o=t.showHeader,a=t.bannerHeader,"true"===o&&(d=Number(null!==(r=null===a||void 0===a||null===(s=a.fontSize)||void 0===s?void 0:s.split("px")[0])&&void 0!==r?r:0),n.headerBannerSize=2*d);case 5:case"end":return e.stop()}}),e)})))()},components:{Banner:c["a"],ChartReadme:p["a"],LazyImage:u["a"]},data:function(){return{showSlideIn:!1,info:void 0,infoVersion:void 0,versionInfo:void 0,versionError:void 0,defaultIcon:i("53a6"),headerBannerSize:0}},computed:g(g({},Object(d["b"])({theme:"prefs/theme"})),{},{applyDarkModeBg:function(){return"dark"===this.theme?{"dark-mode":!0}:{}}}),methods:{show:function(n){this.info=n,this.showSlideIn=!0,this.version=null,this.versionInfo=null,this.versionError=null,this.loadPluginVersionInfo()},hide:function(){this.showSlideIn=!1},loadPluginVersionInfo:function(n){var e=this;return Object(r["a"])(l.a.mark((function i(){var t,o,a,r,s;return l.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=n||e.info.displayVersion,r=null===(t=e.info.versions)||void 0===t?void 0:t.find((function(n){return n.version===a&&!n.isCompatibleWithUi})),s=null===(o=e.info.versions)||void 0===o?void 0:o.find((function(n){return n.version===a&&!n.isCompatibleWithKubeVersion})),e.info.chart&&!r&&!s){i.next=5;break}return i.abrupt("return");case 5:return e.infoVersion=a,e.versionError=!1,e.versionInfo=void 0,i.prev=8,i.next=11,e.$store.dispatch("catalog/getVersionInfo",{repoType:e.info.chart.repoType,repoName:e.info.chart.repoName,chartName:e.info.chart.chartName,versionName:a});case 11:e.versionInfo=i.sent,i.next=18;break;case 14:i.prev=14,i.t0=i["catch"](8),e.versionError=!0,console.error("Unable to fetch VersionInfo: ",i.t0);case 18:case"end":return i.stop()}}),i,null,[[8,14]])})))()},handleVersionBtnTooltip:function(n){return n.requiredUiVersion?this.t("plugins.info.requiresRancherVersion",{version:n.requiredUiVersion}):n.requiredKubeVersion?this.t("plugins.info.requiresKubeVersion",{version:n.requiredKubeVersion}):""},handleVersionBtnClass:function(n){return{"version-active":n.version===this.infoVersion,disabled:!n.isCompatibleWithUi||!n.isCompatibleWithKubeVersion}}}},_=h,x=(i("639d"),i("0c7c")),m=Object(x["a"])(_,t,o,!1,null,"297b3958",null);e["default"]=m.exports}}]);
//# sourceMappingURL=PluginInfoPanel.78d12443.js.map