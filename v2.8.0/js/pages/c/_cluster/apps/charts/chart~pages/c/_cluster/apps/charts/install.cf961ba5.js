(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/apps/charts/chart~pages/c/_cluster/apps/charts/install","pages/c/_cluster/gatekeeper/index"],{2467:function(e,r,t){"use strict";t("b64b"),t("a4d3"),t("e439"),t("dbb4"),t("a630"),t("3ca3"),t("e01a"),t("d28b");var n=t("1da1"),a=t("ade3"),o=t("a34a"),s=t.n(o),i=(t("96cf"),t("d3b7"),t("159b"),t("fb6a"),t("7db0"),t("4de4"),t("ac1f"),t("1276"),t("b0c0"),t("99af"),t("e260"),t("ddb0"),t("2f62")),c=t("fa3b"),u=t("7388"),l=t("e528"),p=t("98bd"),d=t("5bbf"),h=t("a27c"),v=t("04e8"),f=t("a788"),m=t("55a3"),b=t("ceac"),g=t.n(b),y=t("5ce5"),N=t("de78"),x=t("2ef0");function O(e,r){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=k(e))||r&&e&&"number"===typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,i=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(i)throw o}}}}function k(e,r){if(e){if("string"===typeof e)return w(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?w(e,r):void 0}}function w(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){Object(a["a"])(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r["a"]={data:function(){return{version:null,versionInfo:null,existing:null,ignoreWarning:!1}},computed:q(q({},Object(i["b"])(["currentCluster","isRancher"])),{},{showPreRelease:Object(l["mapPref"])(l["SHOW_PRE_RELEASE"]),chart:function(){return this.repo&&this.query.chartName?this.$store.getters["catalog/chart"]({repoType:this.query.repoType,repoName:this.query.repoName,chartName:this.query.chartName,includeHidden:!0}):null},repo:function(){return this.$store.getters["catalog/repo"]({repoType:this.query.repoType,repoName:this.query.repoName})},showReadme:function(){var e;return!(null===(e=this.versionInfo)||void 0===e||!e.readme)},hasReadme:function(){var e,r;return!(null===(e=this.versionInfo)||void 0===e||!e.appReadme)||!(null===(r=this.versionInfo)||void 0===r||!r.readme)},mappedVersions:function(){var e,r,t=this,n=(null===(e=this.chart)||void 0===e?void 0:e.versions)||[],a=this.targetVersion,o=null===(r=this.currentCluster)||void 0===r?void 0:r.workerOSs,s=[];n.forEach((function(e){var r,n={label:e.version,version:e.version,originalVersion:e.version,shortLabel:e.version.length>16?"".concat(e.version.slice(0,15),"..."):e.version,id:e.version,created:e.created,disabled:!1,keywords:e.keywords},a=((null===e||void 0===e||null===(r=e.annotations)||void 0===r?void 0:r[u["e"].PERMITTED_OS])||y["LINUX"]).split(",");a.length>0&&g()(o,a).length>0&&(n.disabled=!0),1===a.length&&(n.label=t.t("catalog.install.versions.".concat(a[0]),{ver:e.version})),!t.showPreRelease&&Object(m["d"])(e.version)||s.push(n)}));var i=s.find((function(e){return e.id===a}));i||s.unshift({label:a,originalVersion:a,shortLabel:a.length>16?"".concat(a.slice(0,15),"..."):a,id:a,created:null,disabled:!1,keywords:[]});var c=s.find((function(e){return e.originalVersion===t.currentVersion}));return c&&(c.label=this.t("catalog.install.versions.current",{ver:this.currentVersion})),s},filteredVersions:function(){return this.showPreRelease?this.mappedVersions:this.mappedVersions.filter((function(e){return!e.isPre}))},query:function(){var e=this.$route.query;return{repoType:e[c["A"]],repoName:e[c["z"]],chartName:e[c["d"]],versionName:e[c["H"]],appNamespace:e[c["v"]]||"",appName:e[c["u"]]||"",description:e[c["g"]]}},showDeprecated:function(){return this.$route.query[c["f"]]===c["N"]},showHidden:function(){return this.$route.query[c["p"]]===c["N"]},warnings:function(){var e,r=[];if(this.existing);else{var t,n,a,o,s,i,c=Object(v["g"])((null===(t=this.version)||void 0===t||null===(n=t.annotations)||void 0===n?void 0:n[u["e"].REQUESTS_CPU])||"0"),l=Object(v["g"])((null===(a=this.version)||void 0===a||null===(o=a.annotations)||void 0===o?void 0:o[u["e"].REQUESTS_MEMORY])||"0"),p=null===(s=this.currentCluster)||void 0===s?void 0:s.availableCpu,d=null===(i=this.currentCluster)||void 0===i?void 0:i.availableMemory;null!==p&&p<c&&r.push(this.t("catalog.install.error.insufficientCpu",{need:Math.round(100*c)/100,have:Math.round(100*p)/100})),null!==d&&d<l&&r.push(this.t("catalog.install.error.insufficientMemory",{need:Object(v["f"])(l,{increment:1024,suffix:"iB",firstSuffix:"B"}),have:Object(v["f"])(d,{increment:1024,suffix:"iB",firstSuffix:"B"})}))}return(null===(e=this.chart)||void 0===e?void 0:e.id)===h["OPA_GATE_KEEPER_ID"]&&r.unshift(this.t("gatekeeperIndex.deprecated",{},!0)),r},requires:function(){var e,r,t=[],n=((null===(e=this.version)||void 0===e||null===(r=e.annotations)||void 0===r?void 0:r[u["e"].REQUIRES_GVK])||"").split(/\s*,\s*/).filter((function(e){return!!e})).reverse();if(n.length){var a,o=O(n);try{for(o.s();!(a=o.n()).done;){var s=a.value;if(!this.$store.getters["catalog/isInstalled"]({gvr:s})){var i=this.provider(s);if(i){var c=this.$router.resolve(this.chartLocation(!0,i)).href;t.push(this.t("catalog.install.error.requiresFound",{url:c,name:i.name},!0))}else t.push(this.t("catalog.install.error.requiresMissing",{name:s}))}}}catch(l){o.e(l)}finally{o.f()}}return t},currentVersion:function(){var e;return null===(e=this.existing)||void 0===e?void 0:e.spec.chart.metadata.version},targetVersion:function(){return this.version?this.version.version:this.query.versionName},action:function(){return this.existing?this.currentVersion===this.targetVersion?"update":"upgrade":"install"},isChartTargeted:function(){var e,r;return(null===(e=this.chart)||void 0===e?void 0:e.targetNamespace)&&(null===(r=this.chart)||void 0===r?void 0:r.targetName)},hasQuestions:function(){return this.versionInfo&&!!this.versionInfo.questions}}),methods:{fetchChart:function(){var e=this;return Object(n["a"])(s.a.mark((function r(){var t,n,a,o;return s.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("catalog/load",{force:!0,reset:!0});case 2:if(!e.query.appNamespace||!e.query.appName){r.next=16;break}return r.prev=3,r.next=6,e.$store.dispatch("cluster/find",{type:f["f"].APP,id:"".concat(e.query.appNamespace,"/").concat(e.query.appName)});case 6:e.existing=r.sent,e.mode=c["M"],r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](3),e.mode=c["K"],e.existing=null;case 14:r.next=31;break;case 16:if(null===(t=e.chart)||void 0===t||!t.targetNamespace||null===(n=e.chart)||void 0===n||!n.targetName){r.next=30;break}return r.prev=17,r.next=20,e.$store.dispatch("cluster/find",{type:f["f"].APP,id:"".concat(e.chart.targetNamespace,"/").concat(e.chart.targetName)});case 20:e.existing=r.sent,e.mode=c["M"],r.next=28;break;case 24:r.prev=24,r.t1=r["catch"](17),e.mode=c["K"],e.existing=null;case 28:r.next=31;break;case 30:e.mode=c["K"];case 31:if(e.chart){r.next=33;break}return r.abrupt("return");case 33:if(!e.query.versionName&&null!==(a=e.chart.versions)&&void 0!==a&&a.length&&(e.showPreRelease?e.query.versionName=e.chart.versions[0].version:(o=e.chart.versions.find((function(e){return!Object(m["d"])(e.version)})),e.query.versionName=(null===o||void 0===o?void 0:o.version)||e.chart.versions[0].version)),e.query.versionName){r.next=36;break}return r.abrupt("return");case 36:try{e.version=e.$store.getters["catalog/version"]({repoType:e.query.repoType,repoName:e.query.repoName,chartName:e.query.chartName,versionName:e.query.versionName})}catch(s){console.error("Unable to fetch Version: ",s)}return e.version||console.warn("No version found: ",e.query.repoType,e.query.repoName,e.query.chartName,e.query.versionName),r.prev=38,r.next=41,e.$store.dispatch("catalog/getVersionInfo",{repoType:e.query.repoType,repoName:e.query.repoName,chartName:e.query.chartName,versionName:e.query.versionName});case 41:e.versionInfo=r.sent,r.next=47;break;case 44:r.prev=44,r.t2=r["catch"](38),console.error("Unable to fetch VersionInfo: ",r.t2);case 47:case"end":return r.stop()}}),r,null,[[3,10],[17,24],[38,44]])})))()},fetchAutoInstallInfo:function(){var e=this;return Object(n["a"])(s.a.mark((function r(){var t,n,a,o,i,l,p,d,h,v,m,b,g,y,k,w,j,q,E,T,A;return s.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=[],o=((null===(t=e.version)||void 0===t||null===(n=t.annotations)||void 0===n?void 0:n[u["e"].AUTO_INSTALL])||"").split(/\s*,\s*/).filter((function(e){return!!e})).reverse(),i=O(o),r.prev=3,i.s();case 5:if((l=i.n()).done){r.next=33;break}if(p=l.value,d=e.$store.getters["catalog/versionSatisfying"]({constraint:p,repoName:e.chart.repoName,repoType:e.chart.repoType,chartVersion:e.version.version}),!d){r.next=30;break}return r.prev=9,r.next=12,e.$store.dispatch("catalog/getVersionInfo",{repoType:d.repoType,repoName:d.repoName,chartName:d.name,versionName:d.version});case 12:if(h=r.sent,v=void 0,e.mode!==c["M"]){r.next=21;break}if(k=null===h||void 0===h||null===(m=h.chart)||void 0===m||null===(b=m.annotations)||void 0===b?void 0:b[u["e"].NAMESPACE],w=null===h||void 0===h||null===(g=h.chart)||void 0===g||null===(y=g.annotations)||void 0===y?void 0:y[u["e"].RELEASE_NAME],!w||!k){r.next=21;break}return r.next=20,e.$store.dispatch("cluster/find",{type:f["f"].APP,id:"".concat(k,"/").concat(w)});case 20:v=r.sent;case 21:v?(T=Object(N["clone"])((null===(j=v.spec)||void 0===j?void 0:j.values)||{}),A=Object(N["clone"])((null===(q=v.spec)||void 0===q||null===(E=q.chart)||void 0===E?void 0:E.values)||{}),h.existingValues=T,h.allValues=Object(x["merge"])(A,T)):h.allValues=Object(N["clone"])(h.values),a.push(h),r.next=28;break;case 25:r.prev=25,r.t0=r["catch"](9),console.error("Unable to fetch VersionInfo: ",r.t0);case 28:r.next=31;break;case 30:e.errors.push("This chart requires ".concat(p," but no matching chart was found"));case 31:r.next=5;break;case 33:r.next=38;break;case 35:r.prev=35,r.t1=r["catch"](3),i.e(r.t1);case 38:return r.prev=38,i.f(),r.finish(38);case 41:e.$set(e,"autoInstallInfo",a);case 42:case"end":return r.stop()}}),r,null,[[3,35,38,41],[9,25]])})))()},selectVersion:function(e){var r=e.id;this.$router.applyQuery(Object(a["a"])({},c["H"],r))},provider:function(e){return this.$store.getters["catalog/versionProviding"]({gvr:e,repoName:this.chart.repoName,repoType:this.chart.repoType})},chartLocation:function(){var e,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t||{repoType:this.chart.repoType,repoName:this.chart.repoName,name:this.chart.chartName,version:this.query.versionName};return{name:r?"c-cluster-apps-charts-install":"c-cluster-apps-charts-chart",params:{cluster:this.$route.params.cluster,product:this.$store.getters["productId"]},query:(e={},Object(a["a"])(e,c["A"],n.repoType),Object(a["a"])(e,c["z"],n.repoName),Object(a["a"])(e,c["d"],n.name),Object(a["a"])(e,c["H"],n.version),e)}},appLocation:function(){var e;return(null===(e=this.existing)||void 0===e?void 0:e.detailLocation)||{name:"c-cluster-product-resource",params:{product:this.$store.getters["productId"],cluster:this.$store.getters["clusterId"],resource:f["f"].APP}}},clusterToolsLocation:function(){return{name:"c-cluster-explorer-tools",params:{product:p["NAME"],cluster:this.$store.getters["clusterId"],resource:f["f"].APP}}},clustersLocation:function(){return{name:"c-cluster-product-resource",params:{cluster:this.$route.params.cluster,product:d["NAME"],resource:f["e"].RANCHER_CLUSTER}}}}}},8495:function(e,r,t){"use strict";var n=t("ade3"),a=t("53ca"),o=t("1da1"),s=t("a34a"),i=t.n(s),c=(t("96cf"),t("fa3b"));r["a"]=function(e,r,t){var s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var u=Object(o["a"])(i.a.mark((function o(u){var l,p,d,h,v,f;return i.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(p=u.redirect,d=u.store,h=(null===(l=d.getters["currentCluster"])||void 0===l?void 0:l.id)||"local",!d.getters["type-map/isProductActive"](e)){o.next=9;break}if(!t){o.next=7;break}if("object"!==Object(a["a"])(t)){o.next=6;break}return o.abrupt("return",p(t));case 6:return o.abrupt("return",p({name:"c-cluster-product-resource",params:{cluster:h,product:e,resource:t}}));case 7:o.next=21;break;case 9:if(!s){o.next=20;break}return o.next=12,d.dispatch("catalog/load",{force:!0});case 12:if(v=d.getters["catalog/chart"]({chartName:r}),!v){o.next=17;break}return o.abrupt("return",p({name:"c-cluster-apps-charts-chart",params:{cluster:h},query:(f={},Object(n["a"])(f,c["A"],v.repoType),Object(n["a"])(f,c["z"],v.repoName),Object(n["a"])(f,c["d"],v.chartName),Object(n["a"])(f,c["H"],v.versions[0].version),f)}));case 17:d.dispatch("loadingError","Chart not found for ".concat(e));case 18:o.next=21;break;case 20:return o.abrupt("return",p({name:"c-cluster-explorer",params:{cluster:h}}));case 21:case"end":return o.stop()}}),o)})));function l(e){return u.apply(this,arguments)}return l}()}},a27c:function(e,r,t){"use strict";t.r(r),t.d(r,"OPA_GATE_KEEPER_ID",(function(){return f}));var n=function(){var e=this,r=e._self._c;return r("div",[r("ChartHeading",{attrs:{label:e.t("gatekeeperIndex.poweredBy"),url:"https://github.com/open-policy-agent/gatekeeper"}}),e._v(" "),r("Banner",{attrs:{color:"warning"}},[r("span",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("gatekeeperIndex.deprecated",{},!0),expression:"t('gatekeeperIndex.deprecated', {}, true)"}]})]),e._v(" "),r("div",{staticClass:"spacer"}),e._v(" "),r("div",{staticClass:"mb-10"},[r("h2",[r("t",{attrs:{k:"gatekeeperIndex.violations"}})],1)]),e._v(" "),r("div",[r("SortableTable",{attrs:{headers:e.headers,rows:e.violations,search:!1,"table-actions":!1,"row-actions":!1,paging:!0,"rows-per-page":10,"key-field":"id","group-by":"templateLink.text"}})],1)],1)},a=[],o=t("1da1"),s=t("a34a"),i=t.n(s),c=(t("96cf"),t("d81d"),t("8558")),u=t("8495"),l=t("fb27"),p=t("40d2"),d=t("bec1"),h=t("9149"),v=t("a788"),f="cluster/rancher-charts/rancher-gatekeeper",m={components:{ChartHeading:l["a"],SortableTable:p["c"],Banner:d["a"]},middleware:Object(u["a"])(c["NAME"],c["CHART_NAME"]),fetch:function(){var e=this;return Object(o["a"])(i.a.mark((function r(){var t;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!e.constraint){r.next=4;break}r.t0=[e.constraint],r.next=7;break;case 4:return r.next=6,e.$store.dispatch("cluster/findAll",{type:v["o"].SPOOFED.CONSTRAINT});case 6:r.t0=r.sent;case 7:t=r.t0,e.violations=t.map((function(e,r){return{id:r,constraintLink:{text:e.nameDisplay,to:e.detailLocation},templateLink:{text:e.kind,to:{name:"c-cluster-product-resource-id",params:{resource:"templates.gatekeeper.sh.constrainttemplate",id:e.kind.toLowerCase(),product:"gatekeeper"}}},count:e.totalViolations}}));case 9:case"end":return r.stop()}}),r)})))()},data:function(e){return{headers:[h["j"],h["o"],h["k"]],violations:[]}}},b=m,g=t("0c7c"),y=Object(g["a"])(b,n,a,!1,null,null,null);r["default"]=y.exports},fb27:function(e,r,t){"use strict";var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"chart-heading"},[r("h1",[e._v(e._s(e.t("chartHeading.overview")))]),e._v("\n  "+e._s(e.t("chartHeading.poweredBy"))+" "),r("a",{attrs:{href:e.url,rel:"nofollow noopener noreferrer",target:"_blank"}},[e._v(e._s(e.label))])])},a=[],o={props:{label:{type:String,required:!0},url:{type:String,required:!0}}},s=o,i=t("0c7c"),c=Object(i["a"])(s,n,a,!1,null,null,null);r["a"]=c.exports}}]);
//# sourceMappingURL=install.cf961ba5.js.map