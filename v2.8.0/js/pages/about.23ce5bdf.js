(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/about"],{"2baf":function(t,e,n){var a=n("4438");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("2e5279ac",a,!0,{sourceMap:!1,shadowMode:!1})},3760:function(t,e,n){var a=n("647e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("499e").default;r("7596795a",a,!0,{sourceMap:!1,shadowMode:!1})},4438:function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".back-link[data-v-64883ba2]{align-items:center;display:flex;font-size:16px;margin-bottom:10px;outline:0;padding:10px 0;width:-moz-fit-content;width:fit-content}",""]),t.exports=e},6283:function(t,e,n){"use strict";n("2baf")},"647e":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".about .title-block[data-v-76108c39]{display:flex;align-items:center;justify-content:space-between}.about table[data-v-76108c39]{border-collapse:collapse;overflow:hidden;border-radius:var(--border-radius)}.about table tr>td[data-v-76108c39]:first-of-type{width:20%}.about table td[data-v-76108c39],.about table th[data-v-76108c39]{border:1px solid var(--border);padding:8px 5px;min-width:150px;text-align:left}.about table th[data-v-76108c39]{background-color:var(--sortable-table-top-divider);border-bottom:1px solid var(--sortable-table-top-divider)}.about table a[data-v-76108c39]{cursor:pointer}.about table .os[data-v-76108c39]{display:flex;align-items:center}",""]),t.exports=e},8309:function(t,e,n){"use strict";n("b64b"),n("b0c0");e["a"]={data:function(){return{backLink:null}},beforeRouteEnter:function(t,e,n){n((function(t){(Object.keys(e.params).length||"home"===e.name)&&(t.backLink=e)}))}}},"8f25":function(t,e,n){"use strict";n("3760")},c634:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return t.settings?e("div",{staticClass:"about"},[e("BackLink",{attrs:{link:t.backLink}}),t._v(" "),e("div",{staticClass:"title-block mt-20 mb-40"},[e("h1",{directives:[{name:"t",rawName:"v-t",value:"about.title",expression:"'about.title'"}]}),t._v(" "),e("n-link",{staticClass:"btn role-primary",attrs:{to:{name:"diagnostic"},"data-testid":"about__diagnostics_button"}},[t._v("\n      "+t._s(t.t("about.diagnostic.title"))+"\n    ")])],1),t._v(" "),e("h3",[t._v(t._s(t.t("about.versions.title")))]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v(t._s(t.t("about.versions.component")))]),t._v(" "),e("th",[t._v(t._s(t.t("about.versions.version")))])])]),t._v(" "),t.rancherVersion?e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/rancher/rancher",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n          "+t._s(t.t("about.versions.rancher"))+"\n        ")])]),e("td",[t._v(t._s(t.rancherVersion.value))])]):t._e(),t._v(" "),t.dashboardVersion?e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/rancher/dashboard",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n          "+t._s(t.t("generic.dashboard"))+"\n        ")])]),e("td",[t._v(t._s(t.dashboardVersion))])]):t._e(),t._v(" "),t.cliVersion?e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/rancher/cli",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n          "+t._s(t.appName)+" "+t._s(t.t("about.versions.cli"))+"\n        ")])]),e("td",[t._v(t._s(t.cliVersion.value))])]):t._e(),t._v(" "),t.helmVersion?e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/rancher/helm",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n          "+t._s(t.t("about.versions.helm"))+"\n        ")])]),e("td",[t._v(t._s(t.helmVersion.value))])]):t._e(),t._v(" "),t.dockerMachineVersion?e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/rancher/machine",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n          "+t._s(t.t("about.versions.machine"))+"\n        ")])]),e("td",[t._v(t._s(t.dockerMachineVersion.value))])]):t._e()]),t._v(" "),e("p",{staticClass:"pt-20"},[e("a",{attrs:{href:t.releaseNotesUrl,target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("\n      "+t._s(t.t("about.versions.releaseNotes"))+"\n    ")])]),t._v(" "),t.downloadImageList.length?[e("h3",{staticClass:"pt-40"},[t._v("\n      "+t._s(t.t("about.downloadImageList.title"))+"\n    ")]),t._v(" "),e("table",t._l(t.downloadImageList,(function(n){return e("tr",{key:n.icon},[e("td",[e("div",{staticClass:"os"},[e("i",{class:"icon ".concat(n.icon," mr-5")}),t._v(" "+t._s(t.t(n.label))+"\n          ")])]),t._v(" "),e("td",[n.imageList?e("a",{attrs:{"data-testid":"image_list_download_link__".concat(n.label)},on:{click:n.imageList}},[t._v("\n            "+t._s(t.t("asyncButton.download.action"))+"\n          ")]):t._e()])])})),0)]:t._e(),t._v(" "),t.downloadCli.length?[e("h3",{staticClass:"pt-40"},[t._v("\n      "+t._s(t.t("about.downloadCLI.title"))+"\n    ")]),t._v(" "),e("table",t._l(t.downloadCli,(function(n){return e("tr",{key:n.icon,staticClass:"link"},[e("td",[e("div",{staticClass:"os"},[e("i",{class:"icon ".concat(n.icon," mr-5")}),t._v(" "+t._s(t.t(n.label))+"\n          ")])]),t._v(" "),e("td",[n.cliLink?e("a",{attrs:{href:n.cliLink}},[t._v(t._s(n.cliFile))]):t._e()])])})),0)]:t._e()],2):e("Loading")},r=[],o=(n("b64b"),n("a4d3"),n("e439"),n("159b"),n("dbb4"),n("ade3")),i=n("1da1"),s=(n("7db0"),n("d3b7"),n("4de4"),n("a34a")),c=n.n(s),l=(n("96cf"),n("c778")),d=n("f7d8"),u=n("8309"),b=n("a788"),v=n("c5b9"),f=n("58ec"),h=n("576a"),p=n("2f62");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={layout:"plain",components:{BackLink:d["a"],Loading:l["a"]},mixins:[u["a"]],fetch:function(){var t=this;return Object(i["a"])(c.a.mark((function e(){return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("management/findAll",{type:b["B"].SETTING});case 2:t.settings=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{dashboardVersion:this.$config.dashboardVersion,settings:null,SETTING:v["c"]}},computed:g(g({},Object(p["b"])(["releaseNotesUrl"])),{},{rancherVersion:function(){return this.settings.find((function(t){return t.id===v["c"].VERSION_RANCHER}))},appName:function(){return Object(f["d"])()},cliVersion:function(){return this.settings.find((function(t){return t.id===v["c"].VERSION_CLI}))},helmVersion:function(){return this.settings.find((function(t){return t.id===v["c"].VERSION_HELM}))},dockerMachineVersion:function(){return this.settings.find((function(t){return t.id===v["c"].VERSION_MACHINE}))},downloads:function(){var t,e,n,a,r,o;return[this.createOSOption("about.os.mac","icon-apple",null===(t=this.settings)||void 0===t||null===(e=t.find((function(t){return t.id===v["c"].CLI_URL.DARWIN})))||void 0===e?void 0:e.value,null),this.createOSOption("about.os.linux","icon-linux",null===(n=this.settings)||void 0===n||null===(a=n.find((function(t){return t.id===v["c"].CLI_URL.LINUX})))||void 0===a?void 0:a.value,this.downloadLinuxImages),this.createOSOption("about.os.windows","icon-windows",null===(r=this.settings)||void 0===r||null===(o=r.find((function(t){return t.id===v["c"].CLI_URL.WINDOWS})))||void 0===o?void 0:o.value,this.downloadWindowsImages)]},downloadImageList:function(){return this.downloads.filter((function(t){return!!t.imageList}))},downloadCli:function(){return this.downloads.filter((function(t){return!!t.cliLink}))}}),methods:{createOSOption:function(t,e,n,a){var r=null===n||void 0===n?void 0:n.lastIndexOf("/");return{label:t,icon:e,imageList:a,cliLink:n,cliFile:r>=0?n.substr(r+1,n.length-1):n}},downloadLinuxImages:function(){var t=this;return Object(i["a"])(c.a.mark((function e(){var n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("management/request",{url:"/v3/kontainerdrivers/rancher-images"});case 2:return n=e.sent,e.prev=3,e.next=6,Object(h["a"])(".rancher-linux-images.txt",n.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),t.$store.dispatch("growl/fromError",{title:"Error downloading Linux image list",err:e.t0},{root:!0});case 11:case"end":return e.stop()}}),e,null,[[3,8]])})))()},downloadWindowsImages:function(){var t=this;return Object(i["a"])(c.a.mark((function e(){var n;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("management/request",{url:"/v3/kontainerdrivers/rancher-windows-images"});case 2:return n=e.sent,e.prev=3,e.next=6,Object(h["a"])(".rancher-windows-images.txt",n.data);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](3),t.$store.dispatch("growl/fromError",{title:"Error downloading Windows image list",err:e.t0},{root:!0});case 11:case"end":return e.stop()}}),e,null,[[3,8]])})))()}}},w=m,k=(n("8f25"),n("0c7c")),O=Object(k["a"])(w,a,r,!1,null,"76108c39",null);e["default"]=O.exports},f7d8:function(t,e,n){"use strict";n("9911"),n("b0c0");var a=function(){var t=this,e=t._self._c;return t.link&&t.link.name?e("nuxt-link",{staticClass:"back-link",attrs:{to:t.link}},[e("i",{staticClass:"icon icon-chevron-left"}),t._v(" "+t._s(t.t("generic.back"))+"\n")]):e("nuxt-link",{staticClass:"back-link",attrs:{to:"/"}},[e("i",{staticClass:"icon icon-chevron-left"}),t._v(" "+t._s(t.t("nav.home"))+"\n")])},r=[],o={props:{link:{type:Object,default:null}}},i=o,s=(n("6283"),n("0c7c")),c=Object(s["a"])(i,a,r,!1,null,"64883ba2",null);e["a"]=c.exports}}]);
//# sourceMappingURL=about.23ce5bdf.js.map