(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/monitoring/route-receiver/index"],{"04ba":function(e,t,r){var a=r("a804");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var c=r("499e").default;c("1ff3e7d7",a,!0,{sourceMap:!1,shadowMode:!1})},"35c8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return e.$fetchState.pending?t("Loading"):t("div",[t("div",{staticClass:"row header mb-10"},[t("h1",[e._v("  "+e._s(e.t("monitoring.routesAndReceivers")))]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-lg role-primary float right",on:{click:function(t){return e.$router.push(e.createRoute)}}},[e._v("\n        "+e._s(e.t("resourceList.head.create"))+"\n      ")])])]),e._v(" "),t("div",{staticClass:"row"},[t("Banner",{attrs:{color:"info",label:e.t("monitoring.alertmanagerConfig.deprecationWarning")}})],1),e._v(" "),t("Tabbed",{ref:"tabs",attrs:{"default-tab":e.initTab}},[t("Tab",{attrs:{name:e.routeSchema.id,label:e.$store.getters["type-map/labelFor"](e.routeSchema,2)}},[e.secretTo?t("div",[e._v("\n        We don't support the current route format stored in alertmanager.yaml. Click\n        "),t("nuxt-link",{attrs:{to:e.secretTo}},[e._v("\n          here\n        ")]),e._v(" to update manually.\n      ")],1):t("ResourceTable",{attrs:{schema:e.routeSchema,rows:e.routes}})],1),e._v(" "),t("Tab",{attrs:{name:e.receiverSchema.id,label:e.$store.getters["type-map/labelFor"](e.receiverSchema,2)}},[t("ResourceTable",{attrs:{schema:e.receiverSchema,rows:e.receivers}})],1)],1)],1)},c=[],n=(r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4"),r("ade3")),s=r("1da1"),o=r("a34a"),i=r.n(o),u=(r("96cf"),r("b178")),l=r("c778"),b=r("a4d2"),d=r("f38f"),p=r("bec1"),f=r("a788"),h=r("5455"),v=r("fa3b");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"ListRoute",components:{Banner:p["a"],Loading:l["a"],ResourceTable:u["a"],Tab:d["a"],Tabbed:b["a"]},fetch:function(){var e=this;return Object(s["a"])(i.a.mark((function t(){var r,a,c;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.routeSchema=e.$store.getters["cluster/schemaFor"](f["C"].SPOOFED.ROUTE),e.receiverSchema=e.$store.getters["cluster/schemaFor"](f["C"].SPOOFED.RECEIVER),r=e.$store.dispatch("cluster/findAll",{type:f["C"].SPOOFED.ROUTE}),t.next=5,e.$store.dispatch("cluster/findAll",{type:f["C"].SPOOFED.RECEIVER});case 5:return e.receivers=t.sent,t.next=8,Object(h["f"])(e.$store.dispatch);case 8:if(a=t.sent,c=Object(h["a"])(a),!c){t.next=17;break}return e.$store.dispatch("type-map/configureType",{match:f["C"].SPOOFED.ROUTE,isCreatable:!0}),t.next=14,r;case 14:e.routes=t.sent,t.next=20;break;case 17:e.$store.dispatch("type-map/configureType",{match:f["C"].SPOOFED.ROUTE,isCreatable:!1}),e.secretTo=O({},a.detailLocation),e.secretTo.query=Object(n["a"])({},v["t"],v["M"]);case 20:case"end":return t.stop()}}),t)})))()},data:function(){var e=this.$route.query.resource||f["C"].SPOOFED.RECEIVER;return{routes:[],receivers:[],secretTo:null,routeSchema:null,receiverSchema:null,initTab:e}},computed:{createRoute:function(){var e,t,r=(null===(e=this.$refs)||void 0===e||null===(t=e.tabs)||void 0===t?void 0:t.activeTabName)||this.routeSchema.id;return{name:"c-cluster-monitoring-route-receiver-create",params:{cluster:this.$route.params.cluster},query:{resource:r}}}}},y=g,E=(r("a4a3"),r("0c7c")),T=Object(E["a"])(y,a,c,!1,null,"989e1d20",null);t["default"]=T.exports},a4a3:function(e,t,r){"use strict";r("04ba")},a804:function(e,t,r){var a=r("4bad");t=a(!1),t.push([e.i,".header[data-v-989e1d20]{display:flex}.header H1[data-v-989e1d20]{flex:1}",""]),e.exports=t}}]);
//# sourceMappingURL=index.59957d8b.js.map