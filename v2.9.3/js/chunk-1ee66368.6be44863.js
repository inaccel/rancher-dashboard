(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ee66368"],{"01a1":function(e,t,a){var s=a("2855");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("074c4806",s,!0,{sourceMap:!1,shadowMode:!1})},"24a4":function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".single-cluster-header[data-v-9d8867fa]{align-items:center;display:flex}.single-cluster-header .rancher-icon[data-v-9d8867fa]{margin-right:10px}.single-cluster-header h1[data-v-9d8867fa]{font-size:20px;margin:0}.single-cluster-info[data-v-9d8867fa]{margin-top:20px}.single-cluster-info .section[data-v-9d8867fa]{margin:15px 0 5px 0;font-weight:700}.single-cluster-info .cluster-counts[data-v-9d8867fa]{display:flex;margin:10px 0}.single-cluster-info .cluster-counts>*[data-v-9d8867fa]{flex:1}.single-cluster-info .cluster-counts[data-v-9d8867fa]>:not(:last-child){margin-right:20px}.single-cluster-info .glance-item[data-v-9d8867fa]{font-size:14px;padding:5px 0}.single-cluster-info .glance-item .cluster-link[data-v-9d8867fa]{font-size:14px}",""]),e.exports=t},2855:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".rancher-icon-fill[data-v-55f40d08]{fill:var(--primary)}.cluster-icon[data-v-55f40d08]{align-items:center;display:flex;height:32px;justify-content:center;width:42px}.cluster-icon-border[data-v-55f40d08]{border:1px solid var(--border);border-radius:5px;color:var(--body-text)!important}.cluster-icon-small[data-v-55f40d08],.cluster-icon-small .cluster-badge-logo[data-v-55f40d08],.cluster-icon-small .cluster-os-logo[data-v-55f40d08]{height:25px;width:25px}.cluster-os-logo[data-v-55f40d08]{width:32px;height:32px}.cluster-local-logo[data-v-55f40d08]{display:flex;width:25px}.cluster-badge-logo[data-v-55f40d08]{min-width:42px;height:32px;padding:0 5px;display:flex;align-items:center;justify-content:center;border-radius:5px;font-weight:700}",""]),e.exports=t},"3dca":function(e,t,a){var s=a("ed5b");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("4da22432",s,!0,{sourceMap:!1,shadowMode:!1})},5735:function(e,t,a){"use strict";a("01a1")},6158:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".home-page .search{align-items:center;display:flex}.home-page .search>INPUT{background-color:transparent;height:30px;padding:8px}.home-page h2{font-size:16px}",""]),e.exports=t},"73b5":function(e,t,a){"use strict";a("9def")},8414:function(e,t,a){"use strict";var s="pageActions";t["a"]={created:function(){var e=this;this.updatePageActions();var t=function(t){e.handlePageAction&&e.handlePageAction(t)};this.$store.commit("pageActionHandler",t)},unmounted:function(){this.pageActions&&this.$store.commit(s,[]),this.$store.commit("clearPageActionHandler")},methods:{updatePageActions:function(){this.pageActions&&this.$store.commit(s,this.pageActions)}},watch:{pageActions:function(e,t){this.updatePageActions()}}}},"9def":function(e,t,a){var s=a("24a4");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("f07fd2fe",s,!0,{sourceMap:!1,shadowMode:!1})},b6a4:function(e,t,a){"use strict";a("c7a6")},c7a6:function(e,t,a){var s=a("6158");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("e0848088",s,!0,{sourceMap:!1,shadowMode:!1})},d71f:function(e,t,a){"use strict";a.r(t);a("d3b7"),a("25f0"),a("a4d3"),a("e01a"),a("99af"),a("ac1f"),a("466d");var s=function(){var e=this,t=e._self._c;return e.managementReady?t("div",{staticClass:"home-page"},[t("TabTitle",{attrs:{"show-child":!1,breadcrumb:!1}},[e._v("\n    "+e._s(e.vendor)+"\n  ")]),e._v(" "),t("BannerGraphic",{attrs:{small:!0,title:e.t("landing.welcomeToRancher",{vendor:e.vendor}),pref:e.HIDE_HOME_PAGE_CARDS,"pref-key":"welcomeBanner","data-testid":"home-banner-graphic"}}),e._v(" "),t("IndentedPanel",{staticClass:"mt-20 mb-20"},[e.readWhatsNewAlready?e._e():t("div",{staticClass:"row"},[t("div",{staticClass:"col span-12"},[t("Banner",{attrs:{"data-testid":"changelog-banner",color:"info whats-new"}},[t("div",[e._v("\n            "+e._s(e.t("landing.seeWhatsNew"))+"\n          ")]),e._v(" "),t("a",{staticClass:"hand",attrs:{href:e.releaseNotesUrl,target:"_blank",rel:"noopener noreferrer nofollow"},on:{click:function(t){return t.stopPropagation(),e.showWhatsNew.apply(null,arguments)}}},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("landing.whatsNewLink"),expression:"t('landing.whatsNewLink')"}]})])])],1)]),e._v(" "),t("div",{staticClass:"row home-panels"},[t("div",{staticClass:"col main-panel"},[e.showSetLoginBanner?e._e():t("div",{staticClass:"mb-10 row"},[t("div",{staticClass:"col span-12"},[t("Banner",{attrs:{color:"set-login-page mt-0","data-testid":"set-login-page-banner",closable:!0},on:{close:function(t){return e.closeSetLoginBanner()}}},[t("div",[e._v("\n                "+e._s(e.t("landing.landingPrefs.title"))+"\n              ")]),e._v(" "),t("a",{staticClass:"hand mr-20",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showUserPrefs.apply(null,arguments)}}},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("landing.landingPrefs.userPrefs"),expression:"t('landing.landingPrefs.userPrefs')"}]})])])],1)]),e._v(" "),t("div",{staticClass:"row panel"},[e.mcm?t("div",{staticClass:"col span-12"},[t("SortableTable",{attrs:{"table-actions":!1,"row-actions":!1,"key-field":"id",rows:e.kubeClusters,headers:e.clusterHeaders,loading:!e.kubeClusters,paging:!0},scopedSlots:e._u([{key:"header-left",fn:function(){return[t("div",{staticClass:"row table-heading"},[t("h2",{staticClass:"mb-0"},[e._v("\n                    "+e._s(e.t("landing.clusters.title"))+"\n                  ")]),e._v(" "),e.kubeClusters?t("BadgeState",{attrs:{label:e.kubeClusters.length.toString(),color:"role-tertiary ml-20 mr-20"}}):e._e()],1)]},proxy:!0},e.canCreateCluster||e.canManageClusters?{key:"header-middle",fn:function(){return[t("div",{staticClass:"table-heading"},[e.canManageClusters?t("router-link",{staticClass:"btn btn-sm role-secondary",attrs:{to:e.manageLocation,"data-testid":"cluster-management-manage-button"}},[e._v("\n                    "+e._s(e.t("cluster.manageAction"))+"\n                  ")]):e._e(),e._v(" "),e.canCreateCluster?t("router-link",{staticClass:"btn btn-sm role-primary",attrs:{to:e.importLocation,"data-testid":"cluster-create-import-button"}},[e._v("\n                    "+e._s(e.t("cluster.importAction"))+"\n                  ")]):e._e(),e._v(" "),e.canCreateCluster?t("router-link",{staticClass:"btn btn-sm role-primary",attrs:{to:e.createLocation,"data-testid":"cluster-create-button"}},[e._v("\n                    "+e._s(e.t("generic.create"))+"\n                  ")]):e._e()],1)]},proxy:!0}:null,{key:"col:name",fn:function(a){var s=a.row;return[t("td",{staticClass:"col-name"},[t("div",{staticClass:"list-cluster-name"},[s.mgmt?t("p",{staticClass:"cluster-name"},[s.mgmt.isReady&&!s.hasError?t("router-link",{attrs:{to:{name:"c-cluster-explorer",params:{cluster:s.mgmt.id}}}},[e._v("\n                        "+e._s(s.nameDisplay)+"\n                      ")]):t("span",[e._v(e._s(s.nameDisplay))]),e._v(" "),s.unavailableMachines?t("i",{directives:[{name:"clean-tooltip",rawName:"v-clean-tooltip",value:s.unavailableMachines,expression:"row.unavailableMachines"}],staticClass:"conditions-alert-icon icon-alert icon"}):e._e()],1):e._e(),e._v(" "),s.description?t("p",{staticClass:"cluster-description"},[e._v("\n                      "+e._s(s.description)+"\n                    ")]):e._e()])])]}},{key:"col:kubernetesVersion",fn:function(a){var s=a.row;return[t("td",{staticClass:"col-name"},[t("span",[e._v("\n                    "+e._s(s.kubernetesVersion)+"\n                  ")]),e._v(" "),t("div",{directives:[{name:"clean-tooltip",rawName:"v-clean-tooltip",value:{content:s.architecture.tooltip,placement:"left"},expression:"{content: row.architecture.tooltip, placement: 'left'}"}],staticClass:"text-muted"},[e._v("\n                    "+e._s(s.architecture.label)+"\n                  ")])])]}},{key:"col:cpu",fn:function(a){var s=a.row;return[s.mgmt&&e.cpuAllocatable(s.mgmt)?t("td",[e._v("\n                  "+e._s("".concat(e.cpuAllocatable(s.mgmt)," ").concat(e.t("landing.clusters.cores",{count:e.cpuAllocatable(s.mgmt)})))+"\n                ")]):t("td",[e._v("\n                  —\n                ")])]}},{key:"col:memory",fn:function(a){var s=a.row;return[s.mgmt&&e.memoryAllocatable(s.mgmt)&&!e.memoryAllocatable(s.mgmt).match(/^0 [a-zA-z]/)?t("td",[e._v("\n                  "+e._s(e.memoryAllocatable(s.mgmt))+"\n                ")]):t("td",[e._v("\n                  —\n                ")])]}}],null,!0)})],1):t("div",{staticClass:"col span-12"},[t("SingleClusterInfo")],1)])]),e._v(" "),t("CommunityLinks",{staticClass:"col span-3 side-panel"})],1)])],1):e._e()},n=[],r=(a("b64b"),a("4de4"),a("e439"),a("159b"),a("dbb4"),a("1da1")),l=a("ade3"),o=a("a34a"),i=a.n(o),c=(a("96cf"),a("7db0"),a("e528")),u=a("bec1"),d=a("ea35"),p=a("a707"),m=a("40d2"),f=a("4297"),v=a("7e6f"),g=function(){var e=this,t=e._self._c;return e.clusterDetail?t("div",[t("div",{staticClass:"single-cluster-header"},[t("ClusterProviderIcon",{staticClass:"rancher-icon",attrs:{cluster:e.clusterDetail,width:"32"}}),e._v(" "),t("h1",[e._v(e._s(e.t("glance.clusterInfo")))])],1),e._v(" "),t("div",{staticClass:"single-cluster-info"},[t("div",{staticClass:"cluster-counts"},[t("ResourceSummary",{attrs:{"spoofed-counts":e.totalCountGaugeInput}}),e._v(" "),e.canAccessNodes?t("ResourceSummary",{attrs:{cluster:e.clusterDetail.id,resource:"node"}}):e._e(),e._v(" "),e.canAccessNamespaces?t("ResourceSummary",{attrs:{cluster:e.clusterDetail.id,resource:"namespace"}}):e._e()],1),e._v(" "),t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.provider"))+": ")]),e._v(" "),t("span",[e._v(e._s(e.t("cluster.provider.".concat(e.clusterDetail.status.provider||"other"))))])]),e._v(" "),e.clusterDetail.kubernetesVersionRaw?t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.version"))+": ")]),e._v(" "),t("span",[e._v(e._s(e.clusterDetail.kubernetesVersionBase))]),e._v(" "),e.clusterDetail.kubernetesVersionExtension?t("span",{staticStyle:{"font-size":"0.75em"}},[e._v(e._s(e.clusterDetail.kubernetesVersionExtension))]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.created"))+": ")]),e._v(" "),t("span",[t("LiveDate",{attrs:{value:e.clusterDetail.metadata.creationTimestamp,"add-suffix":!0,"show-tooltip":!0}})],1)]),e._v(" "),t("div",{staticClass:"section"},[e._v("\n      "+e._s(e.t("generic.links"))+"\n    ")]),e._v(" "),t("div",{staticClass:"glance-item"},[t("router-link",{staticClass:"cluster-link",attrs:{to:e.exploreLink}},[e._v("\n        "+e._s(e.t("nav.categories.explore"))+"\n      ")])],1),e._v(" "),e.showClusterTools?t("div",{staticClass:"glance-item"},[t("router-link",{staticClass:"cluster-link",attrs:{to:e.clusterToolsLink}},[e._v("\n        "+e._s(e.t("nav.clusterTools"))+"\n      ")])],1):e._e()])]):e._e()},h=[],b=(a("4fad"),a("e3303")),_=a("c859"),C=a("a788"),w=a("1acf"),x={components:{ClusterProviderIcon:b["a"],ResourceSummary:_["a"]},fetch:function(){var e=this;return Object(r["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("management/findAll",{type:C["F"].CLUSTER});case 2:e.clusters=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{clusters:[],clusterDetail:null,clusterCounts:{}}},computed:{exploreLink:function(){return{name:"c-cluster",params:{cluster:this.clusterDetail.id}}},clusterToolsLink:function(){return{name:"c-cluster-explorer-tools",params:{cluster:this.clusterDetail.id}}},accessibleResources:function(){var e=this;return w["RESOURCES"].filter((function(t){return e.$store.getters["cluster/schemaFor"](t)}))},totalCountGaugeInput:function(){var e=this,t={name:this.t("clusterIndexPage.resourceGauge.totalResources"),total:0,useful:0,warningCount:0,errorCount:0};return this.accessibleResources.forEach((function(a){var s=Object(_["b"])(e.$store,a);Object.entries(s).forEach((function(e){t[e[0]]+=e[1]}))})),t},canAccessNodes:function(){var e,t,a;return!(null===(e=this.clusterCounts)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.counts)||void 0===a||!a[C["K"]])},canAccessNamespaces:function(){var e,t,a;return!(null===(e=this.clusterCounts)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.counts)||void 0===a||!a[C["I"]])},showClusterTools:function(){return this.$store.getters["cluster/canList"](C["f"].CLUSTER_REPO)&&this.$store.getters["cluster/canList"](C["f"].APP)}},watch:{clusters:function(e){var t=this;return Object(r["a"])(i.a.mark((function a(){return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.clusterDetail=e[0],a.next=3,t.$store.dispatch("loadCluster",{id:t.clusterDetail.id});case 3:t.clusterCounts=t.$store.getters["cluster/all"](C["j"]);case 4:case"end":return a.stop()}}),a)})))()}}},y=x,E=(a("73b5"),a("0c7c")),O=Object(E["a"])(y,g,h,!1,null,"9d8867fa",null),A=O.exports,k=a("2f62"),L=a("5bbf"),R=a("9149"),P=a("fa3b"),D=a("04e8"),S=a("55a3"),j=a("8414"),N=a("58ec"),T=a("c2de"),$=a("0a0d"),H=a("2ade"),M=a("ead0"),I="reset-homepage-cards",U="set-as-login";function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(l["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V={name:"Home",layout:"home",components:{Banner:u["a"],BannerGraphic:d["a"],IndentedPanel:p["a"],SortableTable:m["b"],BadgeState:f["a"],CommunityLinks:v["a"],SingleClusterInfo:A,TabTitle:M["a"]},mixins:[j["a"]],fetch:function(){this.$store.getters["management/schemaFor"](C["e"].RANCHER_CLUSTER)&&this.$store.dispatch("management/findAll",{type:C["e"].RANCHER_CLUSTER}),this.$store.getters["management/schemaFor"](C["F"].CLUSTER)&&this.$store.dispatch("management/findAll",{type:C["F"].CLUSTER}),this.$store.getters["management/canList"](C["e"].MACHINE)&&this.$store.dispatch("management/findAll",{type:C["e"].MACHINE}),this.$store.getters["management/canList"](C["F"].NODE)&&this.$store.dispatch("management/findAll",{type:C["F"].NODE}),this.$store.getters["management/canList"](C["F"].NODE_POOL)&&this.$store.dispatch("management/findAll",{type:C["F"].NODE_POOL}),this.$store.getters["management/canList"](C["F"].NODE_TEMPLATE)&&this.$store.dispatch("management/findAll",{type:C["F"].NODE_TEMPLATE})},data:function(){var e=Object(S["b"])(this.$store).fullVersion,t=[{labelKey:"nav.header.setLoginPage",action:U},{separator:!0},{labelKey:"nav.header.restoreCards",action:I}];return{HIDE_HOME_PAGE_CARDS:c["HIDE_HOME_PAGE_CARDS"],fullVersion:e,pageActions:t,vendor:Object(N["d"])()}},computed:B(B(B({},Object(k["d"])(["managementReady"])),Object(k["c"])(["currentCluster","defaultClusterId","releaseNotesUrl"])),{},{mcm:Object(T["mapFeature"])(T["MULTI_CLUSTER"]),provClusters:function(){return this.$store.getters["management/all"](C["e"].RANCHER_CLUSTER)},canManageClusters:function(){var e=this.$store.getters["management/schemaFor"](C["e"].RANCHER_CLUSTER);return!!e},canCreateCluster:function(){var e=this.$store.getters["management/schemaFor"](C["e"].RANCHER_CLUSTER);return!(null===e||void 0===e||!e.collectionMethods.find((function(e){return"post"===e.toLowerCase()})))},manageLocation:function(){return{name:"c-cluster-product-resource",params:{product:L["NAME"],cluster:$["a"],resource:C["e"].RANCHER_CLUSTER}}},createLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:L["NAME"],cluster:$["a"],resource:C["e"].RANCHER_CLUSTER}}},importLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:L["NAME"],cluster:$["a"],resource:C["e"].RANCHER_CLUSTER},query:Object(l["a"])({},P["u"],P["R"])}},afterLoginRoute:Object(c["mapPref"])(c["AFTER_LOGIN_ROUTE"]),homePageCards:Object(c["mapPref"])(c["HIDE_HOME_PAGE_CARDS"]),readWhatsNewAlready:function(){return Object(S["g"])(this.$store)},showSetLoginBanner:function(){var e;return null===(e=this.homePageCards)||void 0===e?void 0:e.setLoginPage},clusterHeaders:function(){return[R["Eb"],{name:"name",labelKey:"tableHeaders.name",value:"nameDisplay",sort:["nameSort"],canBeVariable:!0,getValue:function(e){var t;return null===(t=e.mgmt)||void 0===t?void 0:t.nameDisplay}},{label:this.t("landing.clusters.provider"),subLabel:this.t("landing.clusters.distro"),value:"mgmt.status.provider",name:"Provider",sort:["mgmt.status.provider"],formatter:"ClusterProvider"},{label:this.t("landing.clusters.kubernetesVersion"),subLabel:this.t("landing.clusters.architecture"),name:"kubernetesVersion"},{label:this.t("tableHeaders.cpu"),value:"",name:"cpu",sort:["status.allocatable.cpu","status.available.cpu"]},{label:this.t("tableHeaders.fpga"),name:"fpga",value:"",sort:["status.allocatable.fpga","status.available.fpga"],formatter:"FpgaUsage",delayLoading:!0},{label:this.t("tableHeaders.memory"),value:"",name:"memory",sort:["status.allocatable.memory","status.available.memory"]},{label:this.t("tableHeaders.pods"),name:"pods",value:"",sort:["status.allocatable.pods","status.requested.pods"],formatter:"PodsUsage",delayLoading:!0}]},kubeClusters:function(){return Object(H["b"])(Object(H["c"])(this.provClusters||[],this.$store),this.$store)}}),created:function(){var e=this;return Object(r["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("prefs/setLastVisited",{name:"home"});case 2:Object(S["f"])(e.$store);case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.$store.dispatch("management/forgetType",C["e"].MACHINE),this.$store.dispatch("management/forgetType",C["F"].NODE),this.$store.dispatch("management/forgetType",C["F"].NODE_POOL),this.$store.dispatch("management/forgetType",C["F"].NODE_TEMPLATE)},methods:{handlePageAction:function(e){switch(e.action){case I:this.resetCards();break;case U:this.afterLoginRoute="home";break}},cpuUsed:function(e){var t;return Object(D["g"])(null===(t=e.status.requested)||void 0===t?void 0:t.cpu)},cpuAllocatable:function(e){var t;return Object(D["g"])(null===(t=e.status.allocatable)||void 0===t?void 0:t.cpu)},memoryAllocatable:function(e){var t,a=(Object(D["g"])(null===(t=e.status.allocatable)||void 0===t?void 0:t.memory)||0).toString(),s=Object(D["c"])(a);return Object(D["f"])(a,s)},memoryReserved:function(e){var t,a,s,n,r=Object(D["d"])(null===e||void 0===e||null===(t=e.status)||void 0===t||null===(a=t.allocatable)||void 0===a?void 0:a.memory,null===e||void 0===e||null===(s=e.status)||void 0===s||null===(n=s.requested)||void 0===n?void 0:n.memory);return"".concat(r.useful,"/").concat(r.total," ").concat(r.units)},showWhatsNew:function(){Object(S["e"])(this.$store)},showUserPrefs:function(){this.$router.push({name:"prefs"})},resetCards:function(){var e=this;return Object(r["a"])(i.a.mark((function t(){return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("prefs/set",{key:c["HIDE_HOME_PAGE_CARDS"],value:{}});case 2:return t.next=4,e.$store.dispatch("prefs/set",{key:c["READ_WHATS_NEW"],value:""});case 4:case"end":return t.stop()}}),t)})))()},closeSetLoginBanner:function(){var e=arguments,t=this;return Object(r["a"])(i.a.mark((function a(){var s,n,r;return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:0,n=t.$store.getters["prefs/get"](c["HIDE_HOME_PAGE_CARDS"]),(!0===n||!1===n||n.length>0)&&(n={}),n.setLoginPage=!0,a.next=6,t.$store.dispatch("prefs/set",{key:c["HIDE_HOME_PAGE_CARDS"],value:n});case 6:if(r=a.sent,0!==s||"error"!==(null===r||void 0===r?void 0:r.type)||500!==(null===r||void 0===r?void 0:r.status)){a.next=10;break}return a.next=10,t.closeSetLoginBanner(s+1);case 10:case"end":return a.stop()}}),a)})))()}}},G=V,z=(a("ea8e"),a("b6a4"),Object(E["a"])(G,s,n,!1,null,"60e8b7f6",null));t["default"]=z.exports},e3303:function(e,t,a){"use strict";a("c96a");var s=function(){var e=this,t=e._self._c;return e.cluster?t("div",{staticClass:"cluster-icon",class:{"cluster-icon-small":e.small}},[e.useForIcon?t("div",{staticClass:"cluster-badge-logo",class:{"cluster-icon-border":e.showBorders},style:{backgroundColor:e.cluster.badge.color,color:e.cluster.badge.textColor}},[e._v("\n    "+e._s(e.cluster.badge.iconText)+"\n  ")]):e.cluster.isLocal&&!e.cluster.isHarvester?t("svg",{staticClass:"cluster-local-logo",staticStyle:{"enable-background":"new 0 0 100 100"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","xml:space":"preserve"}},[t("g",[t("g",[t("path",{staticClass:"rancher-icon-fill",attrs:{d:"M26.0862026,44.4953918H8.6165142c-5.5818157,0-9.3979139-4.6252708-8.4802637-10.1311035l2.858391-17.210701\n          C3.912292,11.6477556,6.1382647,7.1128125,7.8419709,7.1128125s3.1788611,4.5368752,3.1788611,10.1186218v4.4837742\n          c0,5.5817471,4.4044495,9.5409164,9.9862652,9.5409164h5.0791054V44.4953918z"}})]),e._v(" "),t("path",{staticClass:"rancher-icon-fill",attrs:{d:"M63.0214729,92.8871841H37.0862045c-6.0751343,0-11.0000019-4.9248657-11.0000019-11V30.3864384\n        c0-6.0751324,4.9248676-11,11.0000019-11h25.9352684c6.0751305,0,11.0000038,4.9248676,11.0000038,11v51.5007477\n        C74.0214767,87.9623184,69.0966034,92.8871841,63.0214729,92.8871841z"}}),e._v(" "),t("g",[t("path",{staticClass:"rancher-icon-fill",attrs:{d:"M73.9137955,44.4953918h17.4696884c5.5818176,0,9.3979187-4.6252708,8.4802628-10.1311035\n          l-2.8583908-17.210701c-0.9176483-5.5058317-3.1436234-10.0407753-4.8473282-10.0407753\n          s-3.1788635,4.5368752-3.1788635,10.1186218v4.4837742c0,5.5817471-4.4044418,9.5409164-9.9862595,9.5409164h-5.0791092\n          V44.4953918z"}})])])]):e.cluster.providerNavLogo?t("img",{staticClass:"cluster-os-logo",attrs:{src:e.cluster.providerNavLogo}}):e._e()]):e._e()},n=[],r={props:{cluster:{type:Object,required:!0},small:{type:Boolean,default:!1}},computed:{useForIcon:function(){var e,t;return!(null===(e=this.cluster)||void 0===e||null===(t=e.badge)||void 0===t||!t.iconText)},showBorders:function(){var e,t;return"transparent"===(null===(e=this.cluster)||void 0===e||null===(t=e.badge)||void 0===t?void 0:t.color)}}},l=r,o=(a("5735"),a("0c7c")),i=Object(o["a"])(l,s,n,!1,null,"55f40d08",null);t["a"]=i.exports},ea8e:function(e,t,a){"use strict";a("3dca")},ed5b:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".home-panels[data-v-60e8b7f6]{display:flex;align-items:stretch}.home-panels .col[data-v-60e8b7f6]{margin:0}.home-panels .main-panel[data-v-60e8b7f6]{flex:auto}.home-panels .side-panel[data-v-60e8b7f6]{margin-left:1.75%}.set-login-page[data-v-60e8b7f6]> .banner__content,.whats-new[data-v-60e8b7f6]> .banner__content{display:flex}.set-login-page[data-v-60e8b7f6]> .banner__content>div,.whats-new[data-v-60e8b7f6]> .banner__content>div{flex:1}.set-login-page[data-v-60e8b7f6]> .banner__content>a,.whats-new[data-v-60e8b7f6]> .banner__content>a{align-self:flex-end}.banner.set-login-page[data-v-60e8b7f6]{border:1px solid var(--border)}.table-heading[data-v-60e8b7f6]{align-items:center;display:flex;height:39px}.table-heading>a[data-v-60e8b7f6]{margin-left:10px}.panel[data-v-60e8b7f6]:not(:first-child){margin-top:20px}.getting-started[data-v-60e8b7f6]{align-items:flex-end;display:flex}.getting-started>span[data-v-60e8b7f6]{flex:1;margin-right:20px}.getting-started-btn[data-v-60e8b7f6]{display:contents;white-space:nowrap}.col-name[data-v-60e8b7f6]{max-width:280px}.list-cluster-name .cluster-name[data-v-60e8b7f6]{display:flex;align-items:center}.list-cluster-name .cluster-description[data-v-60e8b7f6]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--muted)}.list-cluster-name .conditions-alert-icon[data-v-60e8b7f6]{color:var(--error);margin-left:4px}@media screen and (max-width:996px){.side-panel[data-v-60e8b7f6]{display:none}}",""]),e.exports=t}}]);
//# sourceMappingURL=chunk-1ee66368.6be44863.js.map