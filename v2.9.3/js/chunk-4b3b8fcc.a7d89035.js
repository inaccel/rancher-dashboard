(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b3b8fcc"],{11010:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-root"},[t("FixedBanner",{attrs:{header:!0}}),e._v(" "),t("div",{staticClass:"dashboard-content",class:{"dashboard-padding-left":e.showTopLevelMenu}},[e.managementReady?t("Header",{attrs:{simple:!0}}):e._e(),e._v(" "),t("main",{staticClass:"main-layout"},[e.error?t("div",{staticClass:"outlet"},[t("main",{staticClass:"main-layout error"},[t("div",{staticClass:"text-center"},[t("BrandImage",{attrs:{"file-name":"error-desert-landscape.svg",width:"900",height:"300"}}),e._v(" "),e.error.status?t("h1",[e._v("\n              HTTP Error "+e._s(e.error.status)+": "+e._s(e.error.statusText)+"\n            ")]):t("h1",[e._v("\n              Error\n            ")]),e._v(" "),e.error?t("h2",{staticClass:"text-secondary mt-20"},[e._v("\n              "+e._s(e.displayError)+"\n            ")]):e._e(),e._v(" "),t("p",{staticClass:"mt-20"},[t("a",{staticClass:"btn role-primary",attrs:{href:e.home}},[e._v("\n                "+e._s(e.t("nav.home"))+"\n              ")])]),e._v(" "),t("hr",{staticClass:"custom-content",style:e.styles}),e._v(" "),t("p",{staticClass:"mt-20"},[t("a",{staticClass:"btn role-secondary",on:{click:function(t){return e.$router.push(e.previousRoute.fullPath)}}},[e._v("\n                "+e._s(e.t("nav.failWhale.reload"))+"\n              ")])])],1)])]):e._e()])],1),e._v(" "),t("FixedBanner",{attrs:{footer:!0}}),e._v(" "),t("GrowlManager")],1)},o=[],n=r("ade3"),s=(r("ac1f"),r("5319"),r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("a4ed")),i=r("2f62"),d=r("4579"),c=r("3ad0"),l=r("659d"),u=r("2f86"),f=r("f9e3"),v=r("bb5c");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={components:{BrandImage:s["a"],FixedBanner:u["a"],GrowlManager:f["a"],Header:c["a"]},mixins:[l["a"],v["a"]],data:function(){var e=this.$store;return e.state.error||e.state.cameFromError||(e.commit("cameFromError"),this.$router.replace("/")),{previousRoute:"",styles:{"--custom-content":"'".concat(this.t("nav.failWhale.separator"),"'")}}},computed:h(h(h(h(h({},Object(i["d"])(["error"])),Object(i["c"])(["isSingleProduct"])),Object(i["d"])(["managementReady"])),Object(i["c"])(["showTopLevelMenu"])),{},{home:function(){var e;return null!==(e=this.isSingleProduct)&&void 0!==e&&e.afterLoginRoute?this.$router.resolve(this.isSingleProduct.afterLoginRoute).href:this.$router.resolve({name:"home"}).href},displayError:function(){var e;return null!==(e=this.error)&&void 0!==e&&e.data?this.error.data:Object(d["f"])(this.error)}}),beforeRouteEnter:function(e,t,r){r((function(e){e.previousRoute=t}))}},b=m,g=(r("1b96"),r("0c7c")),y=Object(g["a"])(b,a,o,!1,null,"22e8fd70",null);t["default"]=y.exports},"1b96":function(e,t,r){"use strict";r("b986")},aac0:function(e,t,r){var a=r("4bad");t=a(!1),t.push([e.i,'.error[data-v-22e8fd70]{display:flex;flex-direction:column;flex:1;justify-content:center;overflow:hidden}.error .row[data-v-22e8fd70]{align-items:center}.error h1[data-v-22e8fd70]{font-size:5rem}.error .desert-landscape img[data-v-22e8fd70]{max-width:100%}.custom-content[data-v-22e8fd70]{text-align:center;margin-top:18px;margin-bottom:18px;max-width:450px}.custom-content[data-v-22e8fd70]:after{background:var(--body-bg);color:var(--body-text);content:var(--custom-content);padding:0 12px;position:relative;top:-12px}.dashboard-root[data-v-22e8fd70]{display:flex;flex-direction:column;height:100vh}.dashboard-content[data-v-22e8fd70]{display:grid;flex-grow:1;grid-template-areas:"header" "main";grid-template-columns:auto;grid-template-rows:var(--header-height) auto}.dashboard-content>HEADER[data-v-22e8fd70]{grid-area:header}MAIN[data-v-22e8fd70]{grid-area:main;overflow:auto}MAIN .outlet[data-v-22e8fd70]{min-height:100%;padding:0}',""]),e.exports=t},b986:function(e,t,r){var a=r("aac0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=r("499e").default;o("6490e430",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=chunk-4b3b8fcc.a7d89035.js.map