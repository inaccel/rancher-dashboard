(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/monitoring/index"],{"149d":function(e,t,r){"use strict";r("66003")},"295b":function(e,t,r){"use strict";r.r(t);r("9911"),r("a4d3"),r("e01a");var a=function(){var e=this,t=e._self._c;return t("section",[t("header",{staticClass:"row"},[t("div",{staticClass:"col span-12"},[t("h1",[t("t",{attrs:{k:"monitoring.overview.title"}})],1),e._v(" "),t("div",[t("t",{attrs:{k:"monitoring.overview.subtitle",raw:!0}})],1)])]),e._v(" "),t("div",[e.v1Installed?t("Banner",{attrs:{color:"warning"},scopedSlots:e._u([{key:"default",fn:function(){return[t("t",{attrs:{k:"monitoring.v1Warning",raw:!0}})]},proxy:!0}],null,!1,1527155515)}):e._e(),e._v(" "),t("div",{staticClass:"create-resource-container"},[t("div",{staticClass:"subtypes-container"},e._l(e.externalLinks,(function(r){return t("a",{directives:[{name:"clean-tooltip",rawName:"v-clean-tooltip",value:r.enabled?void 0:e.t("monitoring.overview.linkedList.na"),expression:"\n            !fel.enabled ? t('monitoring.overview.linkedList.na') : undefined\n          "}],key:r.label,class:{"subtype-banner":!0,disabled:!r.enabled},attrs:{href:r.enabled?r.link:void 0,disabled:!r.enabled,target:"_blank",rel:"noopener noreferrer"}},[t("div",{staticClass:"subtype-content"},[t("div",{staticClass:"title"},[t("div",{staticClass:"subtype-logo round-image"},[t("LazyImage",{attrs:{src:r.iconSrc}})],1),e._v(" "),t("h5",[t("span",[t("t",{attrs:{k:r.label}})],1)]),e._v(" "),e._m(0,!0)]),e._v(" "),t("hr"),e._v(" "),t("div",{staticClass:"description"},[t("span",[t("t",{attrs:{k:r.description}})],1)])])])})),0)])],1),e._v(" "),t("div",[t("SimpleBox",{staticClass:"mt-30",attrs:{title:e.t("monitoring.overview.alertsList.label")}},[t("AlertTable")],1)],1)])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex-right"},[t("i",{staticClass:"icon icon-external-link"})])}],i=r("1da1"),s=(r("4de4"),r("d3b7"),r("159b"),r("a34a")),o=r.n(s),c=(r("96cf"),r("13ea")),l=r.n(c),u=r("8495"),p=r("d458"),d=r("fe7f"),v=r("a788"),m=r("fa98"),b=r("f303"),g=r("680c"),f=r("bec1"),h=r("bc1c"),k=r("8af7"),x=r("ec09"),w={components:{Banner:f["a"],LazyImage:h["a"],SimpleBox:k["a"],AlertTable:p["a"]},middleware:Object(u["a"])(d["NAME"],d["CHART_NAME"]),fetch:function(){var e=this;return Object(i["a"])(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchDeps();case 2:case"end":return t.stop()}}),t)})))()},data:function(){var e=r("5d49"),t=r("d703"),a=this.$store.getters["currentCluster"];return{availableLinks:{alertmanager:!1,grafana:!1,prometheus:!1},resources:[v["D"].ALERTMANAGER,v["D"].PROMETHEUS],v1Installed:!1,externalLinks:[{enabled:!1,group:"alertmanager",iconSrc:t,label:"monitoring.overview.linkedList.alertManager.label",description:"monitoring.overview.linkedList.alertManager.description",link:"/k8s/clusters/".concat(a.id,"/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-alertmanager:9093/proxy")},{enabled:!1,group:"grafana",iconSrc:e,label:"monitoring.overview.linkedList.grafana.label",description:"monitoring.overview.linkedList.grafana.description",link:""},{enabled:!1,group:"prometheus",iconSrc:t,label:"monitoring.overview.linkedList.prometheusPromQl.label",description:"monitoring.overview.linkedList.prometheusPromQl.description",link:"/k8s/clusters/".concat(a.id,"/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-prometheus:9090/proxy/graph")},{enabled:!1,group:"prometheus",iconSrc:t,label:"monitoring.overview.linkedList.prometheusRules.label",description:"monitoring.overview.linkedList.prometheusRules.description",link:"/k8s/clusters/".concat(a.id,"/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-prometheus:9090/proxy/rules")},{enabled:!1,group:"prometheus",iconSrc:t,label:"monitoring.overview.linkedList.prometheusTargets.label",description:"monitoring.overview.linkedList.prometheusTargets.description",link:"/k8s/clusters/".concat(a.id,"/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-prometheus:9090/proxy/targets")}]}},methods:{fetchDeps:function(){var e=this;return Object(i["a"])(o.a.mark((function t(){var r,a,n,i,s,c,u,p,d,f,h,k,w;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store,a=e.externalLinks,t.next=3,Object(x["e"])(r);case 3:return e.v1Installed=t.sent,n={},r.getters["cluster/canList"](v["f"].APP)&&(n.apps=r.dispatch("cluster/findAll",{type:v["f"].APP})),t.next=8,Object(m["a"])(n);case 8:return i=t.sent,t.next=11,Object(x["a"])(e.$store);case 11:return s=t.sent,t.next=14,Object(x["b"])(e.$store);case 14:return c=t.sent,t.next=17,Object(x["c"])(e.$store);case 17:u=t.sent,s&&(p=Object(b["e"])(a,"group","alertmanager"),p.enabled=!0),c&&(d=Object(b["e"])(a,"group","grafana"),f=e.$store.getters["currentCluster"],h=l()(i.apps)?"":Object(b["e"])(i.apps,"id","cattle-monitoring-system/rancher-monitoring"),k=Object(g["d"])((null===h||void 0===h?void 0:h.currentVersion)||"",f.id),d.link="".concat(k,"/api/v1/namespaces/cattle-monitoring-system/services/http:rancher-monitoring-grafana:80/proxy/"),d.enabled=!0),u&&(w=a.filter((function(e){return"prometheus"===e.group})),w.forEach((function(e){e.enabled=!0})));case 21:case"end":return t.stop()}}),t)})))()}}},y=w,L=(r("149d"),r("0c7c")),_=Object(L["a"])(y,a,n,!1,null,"1e92eeea",null);t["default"]=_.exports},66003:function(e,t,r){var a=r("bfa8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=r("499e").default;n("4ac72f27",a,!0,{sourceMap:!1,shadowMode:!1})},8495:function(e,t,r){"use strict";var a=r("ade3"),n=r("53ca"),i=r("1da1"),s=r("a34a"),o=r.n(s),c=(r("96cf"),r("fa3b"));t["a"]=function(e,t,r){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var l=Object(i["a"])(o.a.mark((function i(l){var u,p,d,v,m,b;return o.a.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(p=l.redirect,d=l.store,v=(null===(u=d.getters["currentCluster"])||void 0===u?void 0:u.id)||"local",!d.getters["type-map/isProductActive"](e)){i.next=9;break}if(!r){i.next=7;break}if("object"!==Object(n["a"])(r)){i.next=6;break}return i.abrupt("return",p(r));case 6:return i.abrupt("return",p({name:"c-cluster-product-resource",params:{cluster:v,product:e,resource:r}}));case 7:i.next=21;break;case 9:if(!s){i.next=20;break}return i.next=12,d.dispatch("catalog/load",{force:!0});case 12:if(m=d.getters["catalog/chart"]({chartName:t}),!m){i.next=17;break}return i.abrupt("return",p({name:"c-cluster-apps-charts-chart",params:{cluster:v},query:(b={},Object(a["a"])(b,c["A"],m.repoType),Object(a["a"])(b,c["z"],m.repoName),Object(a["a"])(b,c["d"],m.chartName),Object(a["a"])(b,c["H"],m.versions[0].version),b)}));case 17:d.dispatch("loadingError","Chart not found for ".concat(e));case 18:i.next=21;break;case 20:return i.abrupt("return",p({name:"c-cluster-explorer",params:{cluster:v}}));case 21:case"end":return i.stop()}}),i)})));function u(e){return l.apply(this,arguments)}return u}()}},bfa8:function(e,t,r){var a=r("4bad");t=a(!1),t.push([e.i,".create-resource-container .subtype-banner[data-v-1e92eeea]{min-height:80px;padding:10px}",""]),e.exports=t}}]);
//# sourceMappingURL=index.9bace777.js.map