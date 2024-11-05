(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1de9293c"],{8495:function(e,t,r){"use strict";var a=r("ade3"),i=r("53ca"),n=r("1da1"),s=r("a34a"),c=r.n(s),l=(r("96cf"),r("fa3b"));t["a"]=function(e,t,r){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var o=Object(n["a"])(c.a.mark((function n(o){var u,p,d,v,b,k;return c.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(p=o.redirect,d=o.store,v=(null===(u=d.getters["currentCluster"])||void 0===u?void 0:u.id)||"local",!d.getters["type-map/isProductActive"](e)){n.next=9;break}if(!r){n.next=7;break}if("object"!==Object(i["a"])(r)){n.next=6;break}return n.abrupt("return",p(r));case 6:return n.abrupt("return",p({name:"c-cluster-product-resource",params:{cluster:v,product:e,resource:r}}));case 7:n.next=21;break;case 9:if(!s){n.next=20;break}return n.next=12,d.dispatch("catalog/load");case 12:if(b=d.getters["catalog/chart"]({chartName:t}),!b){n.next=17;break}return n.abrupt("return",p({name:"c-cluster-apps-charts-chart",params:{cluster:v},query:(k={},Object(a["a"])(k,l["B"],b.repoType),Object(a["a"])(k,l["A"],b.repoName),Object(a["a"])(k,l["d"],b.chartName),Object(a["a"])(k,l["J"],b.versions[0].version),k)}));case 17:d.dispatch("loadingError","Chart not found for ".concat(e));case 18:n.next=21;break;case 20:return n.abrupt("return",p({name:"c-cluster-explorer",params:{cluster:v}}));case 21:case"end":return n.stop()}}),n)})));function u(e){return o.apply(this,arguments)}return u}()}},e5bcb:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Overview")]),e._v(" "),t("h4",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("istio.poweredBy",{},!0),expression:"t('istio.poweredBy', {}, true)"}]}),e._v(" "),t("div",{staticClass:"links"},[t("div",{staticClass:"box link-container",class:{disabled:!e.kialiUrl}},[t("span",{staticClass:"link-content pull-right",on:{click:e.launchKiali}},[t("div",{staticClass:"link-logo"},[t("img",{attrs:{src:e.kialiLogo}})]),e._v(" "),t("div",{staticClass:"link-content"},[t("a",{ref:"kiali",attrs:{disabled:!e.kialiUrl,href:e.kialiUrl,target:e.target,rel:e.rel},on:{click:function(e){e.stopPropagation()}}},[t("t",{attrs:{k:"istio.links.kiali.label"}}),e._v(" "),t("i",{staticClass:"icon icon-external-link pull-right"})],1),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"description"},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("istio.links.kiali.description",{link:e.monitoringUrl},!0),expression:"t('istio.links.kiali.description', {link: monitoringUrl}, true)"}]})])])]),e._v(" "),e.kialiUrl?e._e():t("div",{staticClass:"disabled-msg"},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("istio.links.disabled",{app:"Kiali"}),expression:"t('istio.links.disabled', {app: 'Kiali'})"}]})])]),e._v(" "),t("div",{staticClass:"box link-container",class:{disabled:!e.jaegerUrl}},[t("span",{staticClass:"link-content pull-right",on:{click:function(t){return e.$refs.jaeger.click()}}},[t("div",{staticClass:"link-logo"},[t("img",{attrs:{src:e.jaegerLogo}})]),e._v(" "),t("div",{staticClass:"link-content"},[t("a",{ref:"jaeger",attrs:{disabled:!e.jaegerUrl,href:e.jaegerUrl,target:e.target,rel:e.rel},on:{click:function(e){e.stopPropagation()}}},[t("t",{attrs:{k:"istio.links.jaeger.label"}}),e._v(" "),t("i",{staticClass:"icon icon-external-link pull-right"})],1),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"description"},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("istio.links.jaeger.description",!0),expression:"t('istio.links.jaeger.description', true)"}]})])])]),e._v(" "),e.jaegerUrl?e._e():t("div",{staticClass:"disabled-msg"},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("istio.links.disabled",{app:"Jaeger"}),expression:"t('istio.links.disabled', {app: 'Jaeger'})"}]})])])])])},i=[],n=(r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("ade3")),s=r("1da1"),c=r("a34a"),l=r.n(c),o=(r("96cf"),r("2f62")),u=r("c729"),p=r("8495"),d=r("a788");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={components:{},middleware:Object(p["a"])(u["NAME"],u["CHART_NAME"]),fetch:function(){var e=this;return Object(s["a"])(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("cluster/find",{type:d["W"],id:"istio-system/kiali"});case 3:e.kialiService=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](0);case 8:return t.prev=8,t.next=11,e.$store.dispatch("cluster/find",{type:d["W"],id:"istio-system/tracing"});case 11:e.jaegerService=t.sent,t.next=16;break;case 14:t.prev=14,t.t1=t["catch"](8);case 16:case"end":return t.stop()}}),t,null,[[0,6],[8,14]])})))()},data:function(){return{kialiService:null,jaegerService:null}},computed:b(b({},Object(o["c"])({theme:"prefs/theme",t:"i18n/t"})),{},{kialiLogo:function(){return r("a27a")},kialiUrl:function(){return this.kialiService?this.kialiService.proxyUrl("http","20001"):null},jaegerLogo:function(){return r("e1e8")},jaegerUrl:function(){return this.jaegerService?"".concat(this.jaegerService.proxyUrl("http","16686"),"/jaeger/search"):null},monitoringUrl:function(){return this.$router.resolve({name:"c-cluster-monitoring",params:{cluster:this.$route.params.cluster}}).href},target:function(){return"_blank"},rel:function(){return"noopener noreferrer nofollow"}}),methods:{launchKiali:function(e){var t;"A"!==(null===(t=e.srcElement)||void 0===t?void 0:t.tagName)&&this.$refs.kiali.click()}}},h=k,f=r("0c7c"),g=Object(f["a"])(h,a,i,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-1de9293c.2f310a27.js.map