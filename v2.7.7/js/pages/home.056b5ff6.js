(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/home"],{"06b0":function(e,t,a){var n=a("d391");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("20006d88",n,!0,{sourceMap:!1,shadowMode:!1})},"142b":function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".single-cluster-header[data-v-2564ae9c]{align-items:center;display:flex}.single-cluster-header .rancher-icon[data-v-2564ae9c]{margin-right:10px}.single-cluster-header h1[data-v-2564ae9c]{font-size:20px;margin:0}.single-cluster-info[data-v-2564ae9c]{margin-top:20px}.single-cluster-info .section[data-v-2564ae9c]{margin:15px 0 5px 0;font-weight:700}.single-cluster-info .cluster-counts[data-v-2564ae9c]{display:flex;margin:10px 0}.single-cluster-info .cluster-counts>*[data-v-2564ae9c]{flex:1}.single-cluster-info .cluster-counts[data-v-2564ae9c]>:not(:last-child){margin-right:20px}.single-cluster-info .glance-item[data-v-2564ae9c]{font-size:14px;padding:5px 0}.single-cluster-info .glance-item .cluster-link[data-v-2564ae9c]{font-size:14px}",""]),e.exports=t},2557:function(e,t,a){var n=a("f5e6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("34eeda12",n,!0,{sourceMap:!1,shadowMode:!1})},"2d69":function(e,t,a){"use strict";a("530b")},"4f969":function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return g}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("dbb4");var n=a("ade3"),s=a("1da1"),r=a("a34a"),i=a.n(r),o=(a("96cf"),a("7db0"),a("d3b7"),a("d81d"),a("159b"),a("99af"),a("58ec")),l=a("a788"),c=a("c5b9"),u=a("fa98");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=[{key:"docs",value:o["a"],enabled:!0},{key:"forums",value:"https://forums.rancher.com/",enabled:!0},{key:"slack",value:"https://slack.rancher.io/",enabled:!0},{key:"issues",value:"https://github.com/rancher/dashboard/issues/new/choose",enabled:!0},{key:"getStarted",value:"/docs/getting-started",enabled:!0}],m={key:"commercialSupport",value:"/support",enabled:!0,readonly:!0},v={key:"cnforums",value:"https://forums.rancher.cn/",enabled:!0},h="v1";function g(e,t,a,n){return b.apply(this,arguments)}function b(){return b=Object(s["a"])(i.a.mark((function e(t,a,n,s){var r,o,d,p,m,v,g,b,y,O;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o={},e.prev=1,e.next=4,t.dispatch("management/find",{type:l["A"].SETTING,id:c["c"].UI_CUSTOM_LINKS});case 4:d=e.sent,d.value&&(o=JSON.parse(d.value)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.warn("Could not parse custom link settings",e.t0);case 11:if((null===(r=o)||void 0===r?void 0:r.version)!==h){e.next=14;break}return o.defaults&&(p=[].concat(f),p.forEach((function(e){var t=o.defaults.find((function(t){return t===e.key}));e.enabled=!!t})),o.defaults=p),e.abrupt("return",_(o,a,n,s,t));case 14:return m={version:h,defaults:[].concat(f),custom:[]},e.prev=15,e.next=18,Object(u["a"])({uiIssuesSetting:t.dispatch("management/find",{type:l["A"].SETTING,id:c["c"].ISSUES}),uiCommunitySetting:t.dispatch("management/find",{type:l["A"].SETTING,id:c["c"].COMMUNITY_LINKS})});case 18:v=e.sent,g=v.uiIssuesSetting,b=v.uiCommunitySetting,"false"===(null===b||void 0===b?void 0:b.value)&&m.defaults.forEach((function(e){return e.enabled=!1})),null!==g&&void 0!==g&&g.value&&(m.custom.push({label:s?s("customLinks.defaults.issues"):"Issues",value:g.value}),O=null===(y=m.defaults)||void 0===y?void 0:y.find((function(e){return"issues"===e.key})),O&&(O.enabled=!1,O.readOnly=!0)),e.next=28;break;case 25:e.prev=25,e.t1=e["catch"](15),console.warn("Could not parse legacy link settings",e.t1);case 28:return e.abrupt("return",_(m,a,n,s,t));case 29:case"end":return e.stop()}}),e,null,[[1,8],[15,25]])}))),b.apply(this,arguments)}function _(e,t,a,n,s){if(!t&&!a){var r,i=null===(r=e.defaults)||void 0===r?void 0:r.find((function(e){return"commercialSupport"===e.key}));i||e.defaults.push(m)}var o=s.getters["i18n/selectedLocaleLabel"];o===n("locale.zh-hans")&&e.defaults.push(v),e.defaults=e.defaults.map((function(e){return p(p({},e),{},{label:n("'customLinks.defaults.".concat(e.key))})}));var l=e.custom.reduce((function(e,t){return e[t.label]=t,e}),{});return e.defaults.forEach((function(e){l[e.label]&&(e.enabled=!1,e.readonly=!0)})),e}},"530b":function(e,t,a){var n=a("bd97");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("35c9e3e2",n,!0,{sourceMap:!1,shadowMode:!1})},"5e2f":function(e,t,a){"use strict";a("06b0")},"7b0a":function(e,t,a){var n=a("142b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("5485d299",n,!0,{sourceMap:!1,shadowMode:!1})},"7e6f":function(e,t,a){"use strict";a("2ca0");var n=function(){var e=this,t=e._self._c;return e.hasOptions?t("div",[t("SimpleBox",{attrs:{pref:e.pref,"pref-key":e.prefKey},scopedSlots:e._u([{key:"title",fn:function(){return[t("h2",[e._v("\n        "+e._s(e.t("customLinks.displayTitle"))+"\n      ")])]},proxy:!0}],null,!1,785378716)},[e._v(" "),e._l(e.options,(function(a){return t("div",{key:a.label,staticClass:"support-link"},[a.value.startsWith("/")?t("n-link",{attrs:{to:a.value}},[e._v("\n        "+e._s(a.label)+"\n      ")]):t("a",{attrs:{href:a.value,rel:"noopener noreferrer nofollow",target:"_blank"}},[e._v(" "+e._s(a.label)+" ")])],1)})),e._v(" "),e._t("default"),e._v(" "),e.selectedLocaleLabel===e.t("locale.zh-hans")?t("div",{staticClass:"support-link"},[t("a",{staticClass:"link",on:{click:e.show}},[e._v("\n        "+e._s(e.t("footer.wechat.title"))+"\n      ")])]):e._e()],2),e._v(" "),t("modal",{attrs:{name:"wechat-modal",height:"auto",width:640}},[t("div",{staticClass:"wechat-modal"},[t("h1",[e._v(e._s(e.t("footer.wechat.modalText")))]),e._v(" "),t("h1",[e._v(e._s(e.t("footer.wechat.modalText2")))]),e._v(" "),t("div",{staticClass:"qr-img"}),e._v(" "),t("div",[t("button",{staticClass:"btn role-primary",on:{click:e.close}},[e._v("\n          "+e._s(e.t("generic.close"))+"\n        ")])])])])],1):e._e()},s=[],r=(a("a4d3"),a("e439"),a("dbb4"),a("2909")),i=a("ade3"),o=a("1da1"),l=(a("b64b"),a("d3b7"),a("159b"),a("4de4"),a("a34a")),c=a.n(l),u=(a("96cf"),a("8af7")),d=a("a48c"),p=a("a788"),f=a("c5b9"),m=a("2f62"),v=a("ac98"),h=a("4f969");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={name:"CommunityLinks",components:{SimpleBox:u["a"]},props:{linkOptions:{type:Object,default:function(){return{}}},isSupportPage:{type:Boolean,default:!1}},mixins:[d["a"]],fetch:function(){var e=this;return Object(o["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["b"])(e.$store,e.hasSupport,e.isSupportPage,(function(t){return e.t(t)}));case 2:e.links=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{links:{}}},computed:b(b({},Object(m["b"])("i18n",["selectedLocaleLabel"])),{},{hasOptions:function(){return!!Object.keys(this.options).length||!!Object.keys(this.$slots).length},hasSupport:function(){var e;return Object(v["b"])()||"true"===(null===(e=this.$store.getters["management/byId"](p["A"].SETTING,f["c"].SUPPORTED))||void 0===e?void 0:e.value)},options:function(){var e=this;if(this.linkOptions&&Object.keys(this.linkOptions).length){var t=[];return Object.keys(this.linkOptions).forEach((function(a){t.push({key:a,label:e.t(a),value:e.linkOptions[a]})})),t}var a=[];return this.links.custom&&a.push.apply(a,Object(r["a"])(this.links.custom)),this.links.defaults&&a.push.apply(a,Object(r["a"])(this.links.defaults.filter((function(e){return e.enabled})))),a}}),methods:{show:function(){this.$modal.show("wechat-modal")},close:function(){this.$modal.hide("wechat-modal")}}},y=_,O=(a("2d69"),a("0c7c")),C=Object(O["a"])(y,n,s,!1,null,"01846109",null);t["a"]=C.exports},9461:function(e,t,a){e.exports=a.p+"img/wechat-qr-code.51a66773.jpg"},a04a:function(e,t,a){"use strict";a("2557")},b3c8:function(e,t,a){"use strict";a("7b0a")},bd97:function(e,t,a){var n=a("4bad"),s=a("ffbf"),r=a("9461");t=n(!1);var i=s(r);t.push([e.i,"h2[data-v-01846109]{display:flex;align-items:center}h2 i[data-v-01846109]{font-size:12px;margin-left:5px}.support-link[data-v-01846109]:not(:last-child){margin-bottom:15px}.wechat-modal[data-v-01846109]{margin:60px;display:flex;flex-direction:column;align-items:center}.link[data-v-01846109]{cursor:pointer}.btn[data-v-01846109]{margin:20px auto 0}.qr-img[data-v-01846109]{background-image:url("+i+");background-repeat:no-repeat;background-size:cover;background-position:50%;height:128px;width:128px;margin:15px auto 10px}",""]),e.exports=t},d391:function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".home-panels[data-v-4d538d46]{display:flex;align-items:stretch}.home-panels .col[data-v-4d538d46]{margin:0}.home-panels .main-panel[data-v-4d538d46]{flex:auto}.home-panels .side-panel[data-v-4d538d46]{margin-left:1.75%}.set-login-page[data-v-4d538d46]> .banner__content,.whats-new[data-v-4d538d46]> .banner__content{display:flex}.set-login-page[data-v-4d538d46]> .banner__content>div,.whats-new[data-v-4d538d46]> .banner__content>div{flex:1}.set-login-page[data-v-4d538d46]> .banner__content>a,.whats-new[data-v-4d538d46]> .banner__content>a{align-self:flex-end}.banner.set-login-page[data-v-4d538d46]{border:1px solid var(--border)}.table-heading[data-v-4d538d46]{align-items:center;display:flex;height:39px}.table-heading>a[data-v-4d538d46]{margin-left:10px}.panel[data-v-4d538d46]:not(:first-child){margin-top:20px}.getting-started[data-v-4d538d46]{align-items:flex-end;display:flex}.getting-started>span[data-v-4d538d46]{flex:1;margin-right:20px}.getting-started-btn[data-v-4d538d46]{display:contents;white-space:nowrap}.list-cluster-name[data-v-4d538d46]{align-items:center;display:flex}.list-cluster-name .conditions-alert-icon[data-v-4d538d46]{color:var(--error);margin-left:4px}@media screen and (max-width:996px){.side-panel[data-v-4d538d46]{display:none}}",""]),e.exports=t},d71f:function(e,t,a){"use strict";a.r(t);a("d3b7"),a("25f0"),a("99af"),a("ac1f"),a("466d");var n=function(){var e=this,t=e._self._c;return e.managementReady?t("div",{staticClass:"home-page"},[t("BannerGraphic",{attrs:{small:!0,title:e.t("landing.welcomeToRancher",{vendor:e.vendor}),pref:e.HIDE_HOME_PAGE_CARDS,"pref-key":"welcomeBanner","data-testid":"home-banner-graphic"}}),e._v(" "),t("IndentedPanel",{staticClass:"mt-20 mb-20"},[e.readWhatsNewAlready?e._e():t("div",{staticClass:"row"},[t("div",{staticClass:"col span-12"},[t("Banner",{attrs:{"data-testid":"changelog-banner",color:"info whats-new"}},[t("div",[e._v("\n            "+e._s(e.t("landing.seeWhatsNew"))+"\n          ")]),e._v(" "),t("a",{staticClass:"hand",attrs:{href:e.releaseNotesUrl,target:"_blank",rel:"noopener noreferrer nofollow"},on:{click:function(t){return t.stopPropagation(),e.showWhatsNew.apply(null,arguments)}}},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("landing.whatsNewLink"),expression:"t('landing.whatsNewLink')"}]})])])],1)]),e._v(" "),t("div",{staticClass:"row home-panels"},[t("div",{staticClass:"col main-panel"},[e.showSetLoginBanner?e._e():t("div",{staticClass:"mb-10 row"},[t("div",{staticClass:"col span-12"},[t("Banner",{attrs:{color:"set-login-page mt-0","data-testid":"set-login-page-banner",closable:!0},on:{close:function(t){return e.closeSetLoginBanner()}}},[t("div",[e._v("\n                "+e._s(e.t("landing.landingPrefs.title"))+"\n              ")]),e._v(" "),t("a",{staticClass:"hand mr-20",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.showUserPrefs.apply(null,arguments)}}},[t("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("landing.landingPrefs.userPrefs"),expression:"t('landing.landingPrefs.userPrefs')"}]})])])],1)]),e._v(" "),t("div",{staticClass:"row panel"},[e.mcm?t("div",{staticClass:"col span-12"},[t("SortableTable",{attrs:{"table-actions":!1,"row-actions":!1,"key-field":"id",rows:e.kubeClusters,headers:e.clusterHeaders,loading:!e.kubeClusters},scopedSlots:e._u([{key:"header-left",fn:function(){return[t("div",{staticClass:"row table-heading"},[t("h2",{staticClass:"mb-0"},[e._v("\n                    "+e._s(e.t("landing.clusters.title"))+"\n                  ")]),e._v(" "),e.kubeClusters?t("BadgeState",{attrs:{label:e.kubeClusters.length.toString(),color:"role-tertiary ml-20 mr-20"}}):e._e()],1)]},proxy:!0},e.canCreateCluster||e.canManageClusters?{key:"header-middle",fn:function(){return[t("div",{staticClass:"table-heading"},[e.canManageClusters?t("n-link",{staticClass:"btn btn-sm role-secondary",attrs:{to:e.manageLocation,"data-testid":"cluster-management-manage-button"}},[e._v("\n                    "+e._s(e.t("cluster.manageAction"))+"\n                  ")]):e._e(),e._v(" "),e.canCreateCluster?t("n-link",{staticClass:"btn btn-sm role-primary",attrs:{to:e.importLocation,"data-testid":"cluster-create-import-button"}},[e._v("\n                    "+e._s(e.t("cluster.importAction"))+"\n                  ")]):e._e(),e._v(" "),e.canCreateCluster?t("n-link",{staticClass:"btn btn-sm role-primary",attrs:{to:e.createLocation,"data-testid":"cluster-create-button"}},[e._v("\n                    "+e._s(e.t("generic.create"))+"\n                  ")]):e._e()],1)]},proxy:!0}:null,{key:"col:name",fn:function(a){var n=a.row;return[t("td",[t("div",{staticClass:"list-cluster-name"},[n.mgmt?t("span",[n.mgmt.isReady&&!n.hasError?t("n-link",{attrs:{to:{name:"c-cluster-explorer",params:{cluster:n.mgmt.id}}}},[e._v("\n                        "+e._s(n.nameDisplay)+"\n                      ")]):t("span",[e._v(e._s(n.nameDisplay))])],1):e._e(),e._v(" "),n.unavailableMachines?t("i",{directives:[{name:"clean-tooltip",rawName:"v-clean-tooltip",value:n.unavailableMachines,expression:"row.unavailableMachines"}],staticClass:"conditions-alert-icon icon-alert icon"}):e._e()])])]}},{key:"col:cpu",fn:function(a){var n=a.row;return[n.mgmt&&e.cpuAllocatable(n.mgmt)?t("td",[e._v("\n                  "+e._s("".concat(e.cpuAllocatable(n.mgmt)," ").concat(e.t("landing.clusters.cores",{count:e.cpuAllocatable(n.mgmt)})))+"\n                ")]):t("td",[e._v("\n                  —\n                ")])]}},{key:"col:memory",fn:function(a){var n=a.row;return[n.mgmt&&e.memoryAllocatable(n.mgmt)&&!e.memoryAllocatable(n.mgmt).match(/^0 [a-zA-z]/)?t("td",[e._v("\n                  "+e._s(e.memoryAllocatable(n.mgmt))+"\n                ")]):t("td",[e._v("\n                  —\n                ")])]}}],null,!0)})],1):t("div",{staticClass:"col span-12"},[t("SingleClusterInfo")],1)])]),e._v(" "),t("CommunityLinks",{staticClass:"col span-3 side-panel"})],1)])],1):e._e()},s=[],r=(a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4"),a("1da1")),i=a("ade3"),o=a("a34a"),l=a.n(o),c=(a("96cf"),a("7db0"),a("e528")),u=a("bec1"),d=a("ea35"),p=a("a707"),f=a("40d2"),m=a("4297"),v=a("7e6f"),h=function(){var e=this,t=e._self._c;return e.clusterDetail?t("div",[t("div",{staticClass:"single-cluster-header"},[t("ClusterProviderIcon",{staticClass:"rancher-icon",attrs:{cluster:e.clusterDetail,width:"32"}}),e._v(" "),t("h1",[e._v(e._s(e.t("glance.clusterInfo")))])],1),e._v(" "),t("div",{staticClass:"single-cluster-info"},[t("div",{staticClass:"cluster-counts"},[t("ResourceSummary",{attrs:{"spoofed-counts":e.totalCountGaugeInput}}),e._v(" "),e.canAccessNodes?t("ResourceSummary",{attrs:{cluster:e.clusterDetail.id,resource:"node"}}):e._e(),e._v(" "),e.canAccessNamespaces?t("ResourceSummary",{attrs:{cluster:e.clusterDetail.id,resource:"namespace"}}):e._e()],1),e._v(" "),t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.provider"))+": ")]),e._v(" "),t("span",[e._v(e._s(e.t("cluster.provider.".concat(e.clusterDetail.status.provider||"other"))))])]),e._v(" "),e.clusterDetail.kubernetesVersionRaw?t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.version"))+": ")]),e._v(" "),t("span",[e._v(e._s(e.clusterDetail.kubernetesVersionBase))]),e._v(" "),e.clusterDetail.kubernetesVersionExtension?t("span",{staticStyle:{"font-size":"0.75em"}},[e._v(e._s(e.clusterDetail.kubernetesVersionExtension))]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"glance-item"},[t("label",[e._v(e._s(e.t("glance.created"))+": ")]),e._v(" "),t("span",[t("LiveDate",{attrs:{value:e.clusterDetail.metadata.creationTimestamp,"add-suffix":!0,"show-tooltip":!0}})],1)]),e._v(" "),t("div",{staticClass:"section"},[e._v("\n      "+e._s(e.t("generic.links"))+"\n    ")]),e._v(" "),t("div",{staticClass:"glance-item"},[t("nuxt-link",{staticClass:"cluster-link",attrs:{to:e.exploreLink}},[e._v("\n        "+e._s(e.t("nav.categories.explore"))+"\n      ")])],1),e._v(" "),e.showClusterTools?t("div",{staticClass:"glance-item"},[t("nuxt-link",{staticClass:"cluster-link",attrs:{to:e.clusterToolsLink}},[e._v("\n        "+e._s(e.t("nav.clusterTools"))+"\n      ")])],1):e._e()])]):e._e()},g=[],b=(a("4fad"),a("e3303")),_=a("c859"),y=a("a788"),O=a("1acf"),C={components:{ClusterProviderIcon:b["a"],ResourceSummary:_["a"]},fetch:function(){var e=this;return Object(r["a"])(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("management/findAll",{type:y["A"].CLUSTER,opt:{url:y["A"].CLUSTER}});case 2:e.clusters=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{clusters:[],clusterDetail:null,clusterCounts:{}}},computed:{exploreLink:function(){return{name:"c-cluster",params:{cluster:this.clusterDetail.id}}},clusterToolsLink:function(){return{name:"c-cluster-explorer-tools",params:{cluster:this.clusterDetail.id}}},accessibleResources:function(){var e=this;return O["RESOURCES"].filter((function(t){return e.$store.getters["cluster/schemaFor"](t)}))},totalCountGaugeInput:function(){var e=this,t={name:this.t("clusterIndexPage.resourceGauge.totalResources"),total:0,useful:0,warningCount:0,errorCount:0};return this.accessibleResources.forEach((function(a){var n=Object(_["b"])(e.$store,a);Object.entries(n).forEach((function(e){t[e[0]]+=e[1]}))})),t},canAccessNodes:function(){var e,t,a;return!(null===(e=this.clusterCounts)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.counts)||void 0===a||!a[y["F"]])},canAccessNamespaces:function(){var e,t,a;return!(null===(e=this.clusterCounts)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.counts)||void 0===a||!a[y["D"]])},showClusterTools:function(){return this.$store.getters["cluster/canList"](y["f"].CLUSTER_REPO)&&this.$store.getters["cluster/canList"](y["f"].APP)}},watch:{clusters:function(e){var t=this;return Object(r["a"])(l.a.mark((function a(){return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.clusterDetail=e[0],a.next=3,t.$store.dispatch("loadCluster",{id:t.clusterDetail.id});case 3:t.clusterCounts=t.$store.getters["cluster/all"](y["i"]);case 4:case"end":return a.stop()}}),a)})))()}}},w=C,x=(a("b3c8"),a("0c7c")),k=Object(x["a"])(w,h,g,!1,null,"2564ae9c",null),E=k.exports,j=a("2f62"),A=a("5bbf"),S=a("9149"),P=a("fa3b"),L=a("04e8"),D=a("55a3"),R=a("8414"),T=a("58ec"),N=a("c2de"),$=a("0a0d"),M=a("2ade"),I="reset-homepage-cards",H="set-as-login";function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var G={name:"Home",layout:"home",components:{Banner:u["a"],BannerGraphic:d["a"],IndentedPanel:p["a"],SortableTable:f["c"],BadgeState:m["a"],CommunityLinks:v["a"],SingleClusterInfo:E},mixins:[R["a"]],fetch:function(){this.$store.getters["management/schemaFor"](y["e"].RANCHER_CLUSTER)&&this.$store.dispatch("management/findAll",{type:y["e"].RANCHER_CLUSTER}),this.$store.getters["management/schemaFor"](y["A"].CLUSTER)&&this.$store.dispatch("management/findAll",{type:y["A"].CLUSTER}),this.$store.getters["management/canList"](y["e"].MACHINE)&&this.$store.dispatch("management/findAll",{type:y["e"].MACHINE}),this.$store.getters["management/canList"](y["A"].NODE)&&this.$store.dispatch("management/findAll",{type:y["A"].NODE}),this.$store.getters["management/canList"](y["A"].NODE_POOL)&&this.$store.dispatch("management/findAll",{type:y["A"].NODE_POOL}),this.$store.getters["management/canList"](y["A"].NODE_TEMPLATE)&&this.$store.dispatch("management/findAll",{type:y["A"].NODE_TEMPLATE})},data:function(){var e=Object(D["c"])(this.$store).fullVersion,t=[{labelKey:"nav.header.setLoginPage",action:H},{separator:!0},{labelKey:"nav.header.restoreCards",action:I}];return{HIDE_HOME_PAGE_CARDS:c["HIDE_HOME_PAGE_CARDS"],fullVersion:e,pageActions:t,vendor:Object(T["d"])()}},computed:B(B(B({},Object(j["c"])(["managementReady"])),Object(j["b"])(["currentCluster","defaultClusterId","releaseNotesUrl"])),{},{mcm:Object(N["mapFeature"])(N["MULTI_CLUSTER"]),provClusters:function(){return this.$store.getters["management/all"](y["e"].RANCHER_CLUSTER)},canManageClusters:function(){var e=this.$store.getters["management/schemaFor"](y["e"].RANCHER_CLUSTER);return!!e},canCreateCluster:function(){var e=this.$store.getters["management/schemaFor"](y["e"].RANCHER_CLUSTER);return!(null===e||void 0===e||!e.collectionMethods.find((function(e){return"post"===e.toLowerCase()})))},manageLocation:function(){return{name:"c-cluster-product-resource",params:{product:A["NAME"],cluster:$["a"],resource:y["e"].RANCHER_CLUSTER}}},createLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:A["NAME"],cluster:$["a"],resource:y["e"].RANCHER_CLUSTER}}},importLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:A["NAME"],cluster:$["a"],resource:y["e"].RANCHER_CLUSTER},query:Object(i["a"])({},P["t"],P["P"])}},afterLoginRoute:Object(c["mapPref"])(c["AFTER_LOGIN_ROUTE"]),homePageCards:Object(c["mapPref"])(c["HIDE_HOME_PAGE_CARDS"]),readWhatsNewAlready:function(){return Object(D["i"])(this.$store)},showSetLoginBanner:function(){var e;return null===(e=this.homePageCards)||void 0===e?void 0:e.setLoginPage},clusterHeaders:function(){return[S["yb"],{name:"name",labelKey:"tableHeaders.name",value:"nameDisplay",sort:["nameSort"],canBeVariable:!0,getValue:function(e){var t;return null===(t=e.mgmt)||void 0===t?void 0:t.nameDisplay}},{label:this.t("landing.clusters.provider"),value:"mgmt.status.provider",name:"Provider",sort:["mgmt.status.provider"],formatter:"ClusterProvider"},{label:this.t("landing.clusters.kubernetesVersion"),value:"kubernetesVersion",name:"Kubernetes Version"},{label:this.t("tableHeaders.cpu"),value:"",name:"cpu",sort:["status.allocatable.cpu","status.available.cpu"]},{label:this.t("tableHeaders.fpga"),name:"fpga",value:"",sort:["status.allocatable.fpga","status.available.fpga"],formatter:"FpgaUsage",delayLoading:!0},{label:this.t("tableHeaders.memory"),value:"",name:"memory",sort:["status.allocatable.memory","status.available.memory"]},{label:this.t("tableHeaders.pods"),name:"pods",value:"",sort:["status.allocatable.pods","status.available.pods"],formatter:"PodsUsage",delayLoading:!0}]},kubeClusters:function(){return Object(M["a"])(Object(M["b"])(this.provClusters||[],this.$store),this.$store)}}),created:function(){var e=this;return Object(r["a"])(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("prefs/setLastVisited",{name:"home"});case 2:Object(D["g"])(e.$store);case 3:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.$store.dispatch("management/forgetType",y["e"].MACHINE),this.$store.dispatch("management/forgetType",y["A"].NODE),this.$store.dispatch("management/forgetType",y["A"].NODE_POOL),this.$store.dispatch("management/forgetType",y["A"].NODE_TEMPLATE)},methods:{handlePageAction:function(e){switch(e.action){case I:this.resetCards();break;case H:this.afterLoginRoute="home";break}},cpuUsed:function(e){var t;return Object(L["g"])(null===(t=e.status.requested)||void 0===t?void 0:t.cpu)},cpuAllocatable:function(e){var t;return Object(L["g"])(null===(t=e.status.allocatable)||void 0===t?void 0:t.cpu)},memoryAllocatable:function(e){var t,a=(Object(L["g"])(null===(t=e.status.allocatable)||void 0===t?void 0:t.memory)||0).toString(),n=Object(L["c"])(a);return Object(L["f"])(a,n)},memoryReserved:function(e){var t,a,n,s,r=Object(L["d"])(null===e||void 0===e||null===(t=e.status)||void 0===t||null===(a=t.allocatable)||void 0===a?void 0:a.memory,null===e||void 0===e||null===(n=e.status)||void 0===n||null===(s=n.requested)||void 0===s?void 0:s.memory);return"".concat(r.useful,"/").concat(r.total," ").concat(r.units)},showWhatsNew:function(){Object(D["f"])(this.$store)},showUserPrefs:function(){this.$router.push({name:"prefs"})},resetCards:function(){var e=this;return Object(r["a"])(l.a.mark((function t(){return l.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("prefs/set",{key:c["HIDE_HOME_PAGE_CARDS"],value:{}});case 2:return t.next=4,e.$store.dispatch("prefs/set",{key:c["READ_WHATS_NEW"],value:""});case 4:case"end":return t.stop()}}),t)})))()},closeSetLoginBanner:function(){var e=arguments,t=this;return Object(r["a"])(l.a.mark((function a(){var n,s,r;return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:0,s=t.$store.getters["prefs/get"](c["HIDE_HOME_PAGE_CARDS"]),(!0===s||!1===s||s.length>0)&&(s={}),s.setLoginPage=!0,a.next=6,t.$store.dispatch("prefs/set",{key:c["HIDE_HOME_PAGE_CARDS"],value:s});case 6:if(r=a.sent,0!==n||"error"!==(null===r||void 0===r?void 0:r.type)||500!==(null===r||void 0===r?void 0:r.status)){a.next=10;break}return a.next=10,t.closeSetLoginBanner(n+1);case 10:case"end":return a.stop()}}),a)})))()}}},z=G,V=(a("5e2f"),a("a04a"),Object(x["a"])(z,n,s,!1,null,"4d538d46",null));t["default"]=V.exports},d9a5:function(e,t,a){"use strict";a("fffc")},daca:function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".banner-graphic{position:relative}.banner-graphic .close-button{position:absolute;visibility:hidden}.banner-graphic:hover .close-button{visibility:visible;position:absolute;right:4px;top:4px;font-size:16px;padding:4px;display:flex;align-items:center;cursor:pointer;opacity:.4}.banner-graphic:hover .close-button:hover{background-color:var(--accent-btn-hover);color:var(--accent-btn-hover-text);opacity:1}.banner-graphic .graphic{display:flex;flex-direction:column;height:240px;overflow:hidden}.banner-graphic .graphic>img.banner{flex:1;-o-object-fit:cover;object-fit:cover}.banner-graphic .title{display:flex;justify-content:center;align-items:center;position:absolute;text-align:center;top:0;height:100%;width:100%;margin-top:-20px}.banner-graphic.small .graphic{height:200px}.banner-graphic.small .graphic img.banner{margin-top:-20px}",""]),e.exports=t},ea35:function(e,t,a){"use strict";a("c96a");var n=function(){var e=this,t=e._self._c;return e.shown?t("div",{staticClass:"banner-graphic",class:{small:e.small}},[t("div",{staticClass:"graphic"},[t("BrandImage",{staticClass:"banner",attrs:{"file-name":"banner.svg",draggable:!1}})],1),e._v(" "),e.titleKey?t("div",{staticClass:"title",attrs:{"data-testid":"banner-title-key"}},[t("t",{attrs:{k:e.titleKey}})],1):e.title?t("h1",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.title,expression:"title"}],staticClass:"title",attrs:{"data-testid":"banner-title"}}):e._e(),e._v(" "),e.pref?t("div",{staticClass:"close-button",attrs:{"data-testid":"graphic-banner-close"},on:{click:function(t){return e.hide()}}},[t("i",{staticClass:"icon icon-close"})]):e._e()]):e._e()},s=[],r=a("a48c"),i=a("a4ed"),o={components:{BrandImage:i["a"]},mixins:[r["a"]],props:{title:{type:String,default:null},titleKey:{type:String,default:null},small:{type:Boolean,default:!1}}},l=o,c=(a("d9a5"),a("0c7c")),u=Object(c["a"])(l,n,s,!1,null,null,null);t["a"]=u.exports},f5e6:function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".home-page .search{align-items:center;display:flex}.home-page .search>INPUT{background-color:transparent;height:30px;padding:8px}.home-page h2{font-size:16px}",""]),e.exports=t},fffc:function(e,t,a){var n=a("daca");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("18080098",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=home.056b5ff6.js.map