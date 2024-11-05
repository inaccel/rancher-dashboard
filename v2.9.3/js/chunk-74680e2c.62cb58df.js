(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74680e2c"],{"3545e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return e.$fetchState.pending?t("Loading"):t("div",[t("Masthead",{attrs:{schema:e.schema,resource:e.resource,isCreatable:!1,"type-display":e.t("jwt.title")},scopedSlots:e._u([{key:"typeDescription",fn:function(){return[t("TypeDescription",{attrs:{resource:"jwt.authentication"}})]},proxy:!0}])}),e._v(" "),e._l(e.errors,(function(a,r){return t("Banner",{key:r,attrs:{color:"error",label:a,closable:!0},on:{close:function(t){return e.closeError(r)}}})})),e._v(" "),t("ResourceTable",{attrs:{schema:e.schema,headers:e.headers,"key-field":"id",namespaced:!1,rows:e.rows,tableActions:!0,"force-update-live-and-delayed":e.forceUpdateLiveAndDelayed,"use-query-params-for-simple-filtering":e.useQueryParamsForSimpleFiltering,"sort-generation-fn":e.sortGenerationFn,"data-testid":"jwt-authentication-list"},scopedSlots:e._u([{key:"col:state",fn:function(e){var a=e.row;return[t("td",[t("BadgeState",{staticClass:"state-bagde",attrs:{color:a.stateBackground,label:a.stateLabel}})],1)]}}])})],2)},n=[],c=(a("b64b"),a("a4d3"),a("e439"),a("dbb4"),a("ade3")),s=a("1da1"),o=(a("4de4"),a("d3b7"),a("e260"),a("4ec9"),a("3ca3"),a("c206"),a("477f"),a("97fb"),a("d2af"),a("9f9a"),a("43b3"),a("567a"),a("9c87"),a("094c"),a("a9cd"),a("54ec"),a("4e16"),a("f43e"),a("ddb0"),a("159b"),a("e6cf"),a("b0c0"),a("7db0"),a("ac1f"),a("5319"),a("a34a")),i=a.n(o),u=(a("96cf"),a("a788")),l=a("9149"),d=a("15cb"),p=a("b178"),f=a("c778"),b=a("39ce"),m=a("fa98"),v=a("2730"),h=a("4297"),y=a("35f4"),g=a("4579"),w=a("01ba");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(c["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x={name:"ClusterProxyConfig",components:{ResourceTable:p["a"],Loading:f["a"],Masthead:b["a"],BadgeState:h["a"],Banner:w["a"],TypeDescription:y["a"]},mixins:[v["a"]],fetch:function(){var e=this;return Object(s["a"])(i.a.mark((function t(){var a,r;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={mgmtClusters:e.$fetchType(u["F"].CLUSTER),proxyConfig:e.$store.dispatch("management/findAll",{type:u["F"].CLUSTER_PROXY_CONFIG,opt:{omitExcludeFields:["metadata.managedFields"]}})},t.next=3,Object(m["a"])(a);case 3:r=t.sent,e.clusters=r.mgmtClusters,e.proxyConfigs=r.proxyConfig;case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{clusters:[],proxyConfigs:[],resource:u["F"].CLUSTER_PROXY_CONFIG,schema:this.$store.getters["management/schemaFor"](u["F"].CLUSTER_PROXY_CONFIG),useQueryParamsForSimpleFiltering:!1,errors:[],forceUpdateLiveAndDelayed:5}},methods:{closeError:function(e){this.errors=this.errors.filter((function(t,a){return a!==e}))},sortGenerationFn:function(){var e=Object(p["b"])(this.schema,this.$store);return e+this.forceUpdateLiveAndDelayed}},computed:{headers:function(){var e=[j(j({},l["Eb"]),{},{value:"value"}),{name:"clusterName",labelKey:"jwt.headers.clusterName",value:"clusterName",sort:"clusterName",search:["clusterName"],formatter:"LinkDetail"},{name:"updatedOn",labelKey:"jwt.headers.updatedOn",value:"updatedOn",sort:"updatedOn",formatter:"Date"},j(j({},l["b"]),{},{labelKey:"jwt.headers.clusterAge"})];return e},rows:function(){var e=this,t=new Map,a=[],r={action:"activate",allEnabled:!1,anyEnabled:!0,bulkable:!0,enabled:!0,icon:"icon icon-checkmark",label:this.t("jwt.actions.activate"),invoke:function(){var t=Object(s["a"])(i.a.mark((function t(a,r){var n;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.prev=1,r.forEach((function(e){var t=e.enable();n.push(t)})),t.next=5,Promise.all(n);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.errors=Object(g["d"])(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));function a(e,a){return t.apply(this,arguments)}return a}()},n={action:"deactivate",allEnabled:!1,anyEnabled:!0,bulkable:!0,enabled:!0,icon:"icon icon-x",label:this.t("jwt.actions.deactivate"),invoke:function(){var t=Object(s["a"])(i.a.mark((function t(a,r){var n;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],t.prev=1,r.forEach((function(e){var t=e.disable();n.push(t)})),t.next=5,Promise.all(n);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.errors=Object(g["d"])(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));function a(e,a){return t.apply(this,arguments)}return a}()};return this.proxyConfigs.forEach((function(e){var a=e.metadata.namespace;t.set(a,{config:e})})),this.clusters.forEach((function(c){var o=c.id,u=c.spec.displayName;if("local"!==o){var l,p,f,b,m,v=null===(l=t.get(o))||void 0===l?void 0:l.config,h=(null===v||void 0===v?void 0:v.enabled)||"",y=(null===v||void 0===v||null===(p=v.metadata)||void 0===p?void 0:p.name)||"",g="";if(h)g=(null===v||void 0===v||null===(f=v.metadata)||void 0===f||null===(b=f.managedFields)||void 0===b||null===(m=b.find((function(e){return"Update"===e.operation})))||void 0===m?void 0:m.time)||"";var w=h?Object(d["d"])(d["c"].ACTIVE).replace("text","bg"):Object(d["d"])(d["c"].INFO).replace("text","bg"),O=h?e.t("jwt.state.enabled"):e.t("jwt.state.disabled"),j=c.metadata.creationTimestamp,x=h?[n]:[r],k=function(){var t=Object(s["a"])(i.a.mark((function t(){var a;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(y){t.next=7;break}return t.next=3,e.$store.dispatch("management/create",{enabled:!0,metadata:{namespace:o,name:"clusterproxyconfig"}});case 3:return a=t.sent,t.abrupt("return",a.save({url:"v1/management.cattle.io.clusterproxyconfigs",method:"POST"}));case 7:return v.enabled=!0,t.abrupt("return",v.save());case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var e=Object(s["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return v.enabled=!1,e.abrupt("return",v.save());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.push({id:o,clusterName:u,value:h,stateBackground:w,stateLabel:O,creationTimestamp:j,updatedOn:g,availableActions:x,enable:k,disable:C})}})),this.forceUpdateLiveAndDelayed=(new Date).getTime(),a}}},k=x,C=a("0c7c"),E=Object(C["a"])(k,r,n,!1,null,null,null);t["default"]=E.exports}}]);
//# sourceMappingURL=chunk-74680e2c.62cb58df.js.map