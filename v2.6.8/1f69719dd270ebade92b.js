(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{2671:function(e,t,r){"use strict";var n=r(6),c=r(66),o=r(7),l=(r(2),r(3),r(4),r(5),r(26),r(9));t.a=function(e,t,r){var d=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var v=Object(o.a)(regeneratorRuntime.mark((function o(v){var f,k,h,m,j,O;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(k=v.redirect,h=v.store,m=(null===(f=h.getters.currentCluster)||void 0===f?void 0:f.id)||"local",!h.getters["type-map/isProductActive"](e)){o.next=9;break}if(!r){o.next=7;break}if("object"!==Object(c.a)(r)){o.next=6;break}return o.abrupt("return",k(r));case 6:return o.abrupt("return",k({name:"c-cluster-product-resource",params:{cluster:m,product:e,resource:r}}));case 7:o.next=21;break;case 9:if(!d){o.next=20;break}return o.next=12,h.dispatch("catalog/load");case 12:if(!(j=h.getters["catalog/chart"]({chartName:t}))){o.next=17;break}return o.abrupt("return",k({name:"c-cluster-apps-charts-chart",params:{cluster:m},query:(O={},Object(n.a)(O,l.z,j.repoType),Object(n.a)(O,l.y,j.repoName),Object(n.a)(O,l.d,j.chartName),Object(n.a)(O,l.G,j.versions[0].version),O)}));case 17:h.dispatch("loadingError","Chart not found for ".concat(e));case 18:o.next=21;break;case 20:return o.abrupt("return",k({name:"c-cluster-explorer",params:{cluster:m}}));case 21:case"end":return o.stop()}}),o)})));return function(e){return v.apply(this,arguments)}}()}},3187:function(e,t,r){"use strict";r.r(t);r(21),r(22),r(16),r(10),r(35),r(18),r(36);var n=r(6),c=r(7),o=(r(2),r(3),r(4),r(5),r(26),r(31)),l=r(654),d=r(2671),v=r(0);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{},middleware:Object(d.a)(l.NAME,l.CHART_NAME),fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("cluster/find",{type:v.M,id:"istio-system/kiali"});case 3:e.kialiService=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:return t.prev=8,t.next=11,e.$store.dispatch("cluster/find",{type:v.M,id:"istio-system/tracing"});case 11:e.jaegerService=t.sent,t.next=16;break;case 14:t.prev=14,t.t1=t.catch(8);case 16:case"end":return t.stop()}}),t,null,[[0,6],[8,14]])})))()},data:function(){return{kialiService:null,jaegerService:null}},computed:k(k({},Object(o.b)({theme:"prefs/theme",t:"i18n/t"})),{},{kialiLogo:function(){return r(1595)},kialiUrl:function(){return this.kialiService?this.kialiService.proxyUrl("http","20001"):null},jaegerLogo:function(){return r(1594)},jaegerUrl:function(){return this.jaegerService?"".concat(this.jaegerService.proxyUrl("http","16686"),"/jaeger/search"):null},monitoringUrl:function(){return this.$router.resolve({name:"c-cluster-monitoring",params:{cluster:this.$route.params.cluster}}).href},target:function(){return"_blank"},rel:function(){return"noopener noreferrer nofollow"}}),methods:{launchKiali:function(e){var t;"A"!==(null===(t=e.srcElement)||void 0===t?void 0:t.tagName)&&this.$refs.kiali.click()}}},m=r(1),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Overview")]),e._v(" "),r("h4",{domProps:{innerHTML:e._s(e.t("istio.poweredBy",{},!0))}}),e._v(" "),r("div",{staticClass:"links"},[r("div",{staticClass:"box link-container",class:{disabled:!e.kialiUrl}},[r("span",{staticClass:"link-content pull-right",on:{click:e.launchKiali}},[r("div",{staticClass:"link-logo"},[r("img",{attrs:{src:e.kialiLogo}})]),e._v(" "),r("div",{staticClass:"link-content"},[r("a",{ref:"kiali",attrs:{disabled:!e.kialiUrl,href:e.kialiUrl,target:e.target,rel:e.rel},on:{click:function(e){e.stopPropagation()}}},[r("t",{attrs:{k:"istio.links.kiali.label"}}),e._v(" "),r("i",{staticClass:"icon icon-external-link pull-right"})],1),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"description"},[r("span",{domProps:{innerHTML:e._s(e.t("istio.links.kiali.description",{link:e.monitoringUrl},!0))}})])])]),e._v(" "),e.kialiUrl?e._e():r("div",{staticClass:"disabled-msg"},[r("span",{domProps:{innerHTML:e._s(e.t("istio.links.disabled",{app:"Kiali"}))}})])]),e._v(" "),r("div",{staticClass:"box link-container",class:{disabled:!e.jaegerUrl}},[r("span",{staticClass:"link-content pull-right",on:{click:function(t){return e.$refs.jaeger.click()}}},[r("div",{staticClass:"link-logo"},[r("img",{attrs:{src:e.jaegerLogo}})]),e._v(" "),r("div",{staticClass:"link-content"},[r("a",{ref:"jaeger",attrs:{disabled:!e.jaegerUrl,href:e.jaegerUrl,target:e.target,rel:e.rel},on:{click:function(e){e.stopPropagation()}}},[r("t",{attrs:{k:"istio.links.jaeger.label"}}),e._v(" "),r("i",{staticClass:"icon icon-external-link pull-right"})],1),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"description"},[r("span",{domProps:{innerHTML:e._s(e.t("istio.links.jaeger.description",!0))}})])])]),e._v(" "),e.jaegerUrl?e._e():r("div",{staticClass:"disabled-msg"},[r("span",{domProps:{innerHTML:e._s(e.t("istio.links.disabled",{app:"Jaeger"}))}})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=1f69719dd270ebade92b.js.map