(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/monitoring/monitor/index"],{"5ded":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return e.$fetchState.pending?t("Loading"):t("div",[t("div",{staticClass:"row header mb-40"},[t("h1",[e._v("  "+e._s(e.t("monitoring.monitors")))]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-lg role-primary float right",on:{click:function(t){return e.$router.push(e.createRoute)}}},[e._v("\n        "+e._s(e.t("resourceList.head.createFromYaml"))+"\n      ")])])]),e._v(" "),t("Tabbed",{ref:"tabs",attrs:{"default-tab":e.initTab}},[t("Tab",{attrs:{name:e.podMonitorSchema.id,label:e.$store.getters["type-map/labelFor"](e.podMonitorSchema,2)}},[t("TypeDescription",{attrs:{resource:e.podMonitorSchema.id}}),e._v(" "),t("ResourceTable",{attrs:{schema:e.podMonitorSchema,rows:e.podMonitors}})],1),e._v(" "),t("Tab",{attrs:{name:e.serviceMonitorSchema.id,label:e.$store.getters["type-map/labelFor"](e.serviceMonitorSchema,2)}},[t("TypeDescription",{attrs:{resource:e.serviceMonitorSchema.id}}),e._v(" "),t("ResourceTable",{attrs:{schema:e.serviceMonitorSchema,rows:e.serviceMonitors}})],1)],1)],1)},a=[],s=r("1da1"),i=r("a34a"),c=r.n(i),n=(r("96cf"),r("c778")),d=r("a4d2"),u=r("f38f"),l=r("35f4"),p=r("b178"),h=r("a788"),m=r("fa98"),v={components:{Loading:n["a"],Tabbed:d["a"],Tab:u["a"],ResourceTable:p["a"],TypeDescription:l["a"]},fetch:function(){var e=this;return Object(s["a"])(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.podMonitorSchema=e.$store.getters["cluster/schemaFor"](h["C"].PODMONITOR),e.serviceMonitorSchema=e.$store.getters["cluster/schemaFor"](h["C"].SERVICEMONITOR),t.next=4,Object(m["a"])({podMonitors:e.$store.dispatch("cluster/findAll",{type:h["C"].PODMONITOR}),serviceMonitors:e.$store.dispatch("cluster/findAll",{type:h["C"].SERVICEMONITOR})});case 4:r=t.sent,e.podMonitors=r.podMonitors,e.serviceMonitors=r.serviceMonitors;case 7:case"end":return t.stop()}}),t)})))()},data:function(){var e=this.$route.query.resource||h["C"].SPOOFED.PODMONITOR;return{podMonitors:[],serviceMonitors:[],podMonitorSchema:null,serviceMonitorSchema:null,initTab:e}},computed:{createRoute:function(){var e,t,r=(null===(e=this.$refs)||void 0===e||null===(t=e.tabs)||void 0===t?void 0:t.activeTabName)||this.routeSchema.id;return{name:"c-cluster-monitoring-monitor-create",params:{cluster:this.$route.params.cluster},query:{resource:r}}}}},b=v,f=(r("c660"),r("0c7c")),M=Object(f["a"])(b,o,a,!1,null,"ddb6eaec",null);t["default"]=M.exports},"79b8":function(e,t,r){var o=r("f5d4");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=r("499e").default;a("571d3ade",o,!0,{sourceMap:!1,shadowMode:!1})},c660:function(e,t,r){"use strict";r("79b8")},f5d4:function(e,t,r){var o=r("4bad");t=o(!1),t.push([e.i,".header[data-v-ddb6eaec]{display:flex}.header H1[data-v-ddb6eaec]{flex:1}",""]),e.exports=t}}]);
//# sourceMappingURL=index.94bb41b7.js.map