(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/prefs"],{"2baf":function(e,t,a){var s=a("4438");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("2e5279ac",s,!0,{sourceMap:!1,shadowMode:!1})},"2f60":function(e,t,a){var s=a("682b");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("2ec9b611",s,!0,{sourceMap:!1,shadowMode:!1})},4438:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".back-link[data-v-64883ba2]{align-items:center;display:flex;font-size:16px;margin-bottom:10px;outline:0;padding:10px 0;width:-moz-fit-content;width:fit-content}",""]),e.exports=t},"4e9f":function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".custom-page .custom-page-options[data-v-469b1ed2]{margin:5px 0 0 20px;min-width:320px;width:-moz-fit-content;width:fit-content}.set-landing-leadin[data-v-469b1ed2]{padding-bottom:10px}",""]),e.exports=t},5254:function(e,t,a){"use strict";a("2f60")},6283:function(e,t,a){"use strict";a("2baf")},"682b":function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,"hr[data-v-cee3b17e]{margin:20px 0}.wrap-text[data-v-cee3b17e]{overflow-wrap:break-word;max-width:80vw;color:var(--input-label)}",""]),e.exports=t},8309:function(e,t,a){"use strict";a("b64b"),a("b0c0");t["a"]={data:function(){return{backLink:null}},beforeRouteEnter:function(e,t,a){a((function(e){(Object.keys(t.params).length||"home"===t.name)&&(e.backLink=t)}))}}},9232:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",["login"===e.mode?t("div",[e.showLocale?t("div",[t("v-popover",{attrs:{"popover-class":"localeSelector",placement:"top",trigger:"click"}},[t("a",{staticClass:"locale-chooser",attrs:{"data-testid":"locale-selector"}},[e._v("\n          "+e._s(e.selectedLocaleLabel)+"\n          "),t("i",{staticClass:"icon icon-fw icon-sort-down"})]),e._v(" "),t("template",{slot:"popover"},[t("ul",{staticClass:"list-unstyled dropdown",staticStyle:{margin:"-1px"}},[e.showNone?t("li",{directives:[{name:"t",rawName:"v-t",value:"locale.none",expression:"'locale.none'"}],staticClass:"hand",on:{click:function(t){return e.switchLocale("none")}}}):e._e(),e._v(" "),e._l(e.availableLocales,(function(a,s){return t("li",{key:s,staticClass:"hand",on:{click:function(t){return e.switchLocale(s)}}},[e._v("\n              "+e._s(a)+"\n            ")])}))],2)])],2)],1):e._e()]):t("div",[t("Select",{attrs:{value:e.selectedOption,options:e.localesOptions},on:{input:function(t){return e.switchLocale(t)}}})],1)])},n=[],o=(a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4"),a("ade3")),r=(a("d81d"),a("b64b"),a("07ac"),a("2f62")),i=a("c989");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"LocalSelector",components:{Select:i["a"]},props:{mode:{type:String,default:""}},computed:c(c({},Object(r["b"])("i18n",["selectedLocaleLabel","availableLocales"])),{},{localesOptions:function(){var e=this;return Object.keys(this.availableLocales).map((function(t){return{label:e.t("locale.".concat(t)),value:t}}))},selectedOption:function(){return Object.keys(this.availableLocales)[Object.values(this.availableLocales).indexOf(this.selectedLocaleLabel)]},showLocale:function(){return this.availableLocales&&Object.keys(this.availableLocales).length>1||this.dev},showNone:function(){return!1}}),methods:{switchLocale:function(e){this.$store.dispatch("i18n/switchTo",e)}}},u=p,d=(a("9c8a"),a("0c7c")),f=Object(d["a"])(u,s,n,!1,null,"1d201bdb",null);t["a"]=f.exports},"9c8a":function(e,t,a){"use strict";a("a478")},a478:function(e,t,a){var s=a("df13");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("723a9a8e",s,!0,{sourceMap:!1,shadowMode:!1})},c483:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",[t("BackLink",{attrs:{link:e.backLink}}),e._v(" "),t("h1",{directives:[{name:"t",rawName:"v-t",value:"prefs.title",expression:"'prefs.title'"}],staticClass:"mb-20"}),e._v(" "),t("div",{staticClass:"mt-10 mb-10"},[t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.language",expression:"'prefs.language'"}]}),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col span-4"},[t("LocaleSelector",{attrs:{"data-testid":"prefs__languageSelector"}})],1)])]),e._v(" "),t("div",{staticClass:"mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.theme.label",expression:"'prefs.theme.label'"}]}),e._v(" "),t("ButtonGroup",{attrs:{"data-testid":"prefs__themeOptions",options:e.themeOptions},model:{value:e.theme,callback:function(t){e.theme=t},expression:"theme"}}),e._v(" "),t("div",{staticClass:"mt-10"},[t("t",{attrs:{k:"prefs.theme.autoDetail",pm:e.pm,am:e.am}})],1)],1),e._v(" "),e.isSingleProduct?e._e():t("div",{staticClass:"mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.landing.label",expression:"'prefs.landing.label'"}]}),e._v(" "),t("LandingPagePreference",{attrs:{"data-testid":"prefs__landingPagePreference"}})],1),e._v(" "),t("div",{staticClass:"mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.displaySettings.title",expression:"'prefs.displaySettings.title'"}]}),e._v(" "),t("p",{staticClass:"set-landing-leadin"},[e._v("\n      "+e._s(e.t("prefs.displaySettings.detail",{},e.raw=!0))+"\n    ")]),e._v(" "),t("div",{staticClass:"row mt-20"},[t("div",{staticClass:"col span-4"},[t("LabeledSelect",{attrs:{"data-testid":"prefs__displaySetting__dateFormat",label:e.t("prefs.dateFormat.label"),"option-key":"value",options:e.dateOptions},model:{value:e.dateFormat,callback:function(t){e.dateFormat=t},expression:"dateFormat"}})],1),e._v(" "),t("div",{staticClass:"col span-4"},[t("LabeledSelect",{attrs:{"data-testid":"prefs__displaySetting__timeFormat",label:e.t("prefs.timeFormat.label"),options:e.timeOptions},model:{value:e.timeFormat,callback:function(t){e.timeFormat=t},expression:"timeFormat"}})],1)]),e._v(" "),t("div",{staticClass:"row mt-20"},[t("div",{staticClass:"col span-4"},[t("LabeledSelect",{attrs:{"data-testid":"prefs__displaySetting__perPage",label:e.t("prefs.perPage.label"),options:e.perPageOptions,"option-key":"value","option-label":"label",placeholder:"Select a row count"},model:{value:e.perPage,callback:function(t){e.perPage=e._n(t)},expression:"perPage"}})],1)])]),e._v(" "),t("div",{staticClass:"col adv-features mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.confirmationSetting.title",expression:"'prefs.confirmationSetting.title'"}]}),e._v(" "),t("Checkbox",{staticClass:"mt-10",attrs:{"data-testid":"prefs__scalingDownPrompt",label:e.t("prefs.confirmationSetting.scalingDownPrompt")},model:{value:e.scalingDownPrompt,callback:function(t){e.scalingDownPrompt=t},expression:"scalingDownPrompt"}})],1),e._v(" "),t("div",{staticClass:"col adv-features mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.advFeatures.title",expression:"'prefs.advFeatures.title'"}]}),e._v(" "),t("Checkbox",{staticClass:"mt-10",attrs:{"data-testid":"prefs__viewInApi",label:e.t("prefs.advFeatures.viewInApi",{},!0)},model:{value:e.viewInApi,callback:function(t){e.viewInApi=t},expression:"viewInApi"}}),e._v(" "),t("br"),e._v(" "),t("Checkbox",{staticClass:"mt-20",attrs:{"data-testid":"prefs__allNamespaces",label:e.t("prefs.advFeatures.allNamespaces",{},!0)},model:{value:e.allNamespaces,callback:function(t){e.allNamespaces=t},expression:"allNamespaces"}}),e._v(" "),t("br"),e._v(" "),t("Checkbox",{staticClass:"mt-20",attrs:{"data-testid":"prefs__themeShortcut",label:e.t("prefs.advFeatures.themeShortcut",{},!0)},model:{value:e.themeShortcut,callback:function(t){e.themeShortcut=t},expression:"themeShortcut"}}),e._v(" "),t("br"),e._v(" "),e.isSingleProduct?e._e():t("Checkbox",{staticClass:"mt-20",attrs:{"data-testid":"prefs__hideDescriptions",label:e.t("prefs.hideDesc.label")},model:{value:e.hideDescriptions,callback:function(t){e.hideDescriptions=t},expression:"hideDescriptions"}}),e._v(" "),e.admin?[t("br"),e._v(" "),t("Checkbox",{staticClass:"mt-20",attrs:{label:e.t("prefs.advFeatures.pluginDeveloper",{},!0)},model:{value:e.pluginDeveloper,callback:function(t){e.pluginDeveloper=t},expression:"pluginDeveloper"}})]:e._e()],2),e._v(" "),t("div",{staticClass:"col mt-10 mb-10"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.keymap.label",expression:"'prefs.keymap.label'"}]}),e._v(" "),t("ButtonGroup",{attrs:{"data-testid":"prefs__keymapOptions",options:e.keymapOptions},model:{value:e.keymap,callback:function(t){e.keymap=t},expression:"keymap"}})],1),e._v(" "),e.isSingleProduct?e._e():t("div",{staticClass:"col mt-10 mb-40"},[t("hr"),e._v(" "),t("h4",{directives:[{name:"t",rawName:"v-t",value:"prefs.helm.label",expression:"'prefs.helm.label'"}]}),e._v(" "),t("ButtonGroup",{attrs:{"data-testid":"prefs__helmOptions",options:e.helmOptions},model:{value:e.showPreRelease,callback:function(t){e.showPreRelease=t},expression:"showPreRelease"}})],1)],1)},n=[],o=(a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4"),a("ade3")),r=(a("d81d"),a("d3b7"),a("99af"),a("ac1f"),a("5319"),a("caad"),a("2532"),a("fb6a"),a("5a0c")),i=a.n(r),l=a("2f62"),c=a("9bc6"),p=a("f7d8"),u=a("8309"),d=a("5557"),f=a("4de2"),v=function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"set-landing-leadin"},[e._v("\n    "+e._s(e.t("landing.landingPrefs.body"))+"\n  ")]),e._v(" "),t("RadioGroup",{attrs:{id:"login-route",value:e.afterLoginRoute,name:"login-route",options:e.routeRadioOptions},on:{input:e.updateLoginRoute},scopedSlots:e._u([{key:"2",fn:function(a){var s=a.option,n=a.listeners;return[t("div",{staticClass:"custom-page"},[t("RadioButton",e._g({attrs:{label:s.label,val:!1,value:"home"===e.afterLoginRoute||"last-visited"===e.afterLoginRoute}},n)),e._v(" "),t("Select",{staticClass:"custom-page-options",attrs:{searchable:!0,disabled:"home"===e.afterLoginRoute||"last-visited"===e.afterLoginRoute,clearable:!1,options:e.routeDropdownOptions},model:{value:e.routeFromDropdown,callback:function(t){e.routeFromDropdown=t},expression:"routeFromDropdown"}})],1)]}}])})],1)},m=[],b=a("1da1"),h=(a("7db0"),a("b0c0"),a("4e82"),a("a34a")),_=a.n(h),g=(a("96cf"),a("e528")),O=a("c2de"),w=a("fa35"),P=a("c989"),k=a("a788"),x=a("2ade"),y={components:{RadioGroup:w["b"],RadioButton:w["a"],Select:P["a"]},fetch:function(){var e=this;return Object(b["a"])(_.a.mark((function t(){return _.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("management/findAll",{type:k["B"].CLUSTER,opt:{url:k["B"].CLUSTER}});case 2:e.clusters=t.sent;case 3:case"end":return t.stop()}}),t)})))()},data:function(){var e=this.$store.getters["prefs/get"](g["AFTER_LOGIN_ROUTE"]);return{clusters:[],customRoute:e}},computed:{afterLoginRoute:Object(g["mapPref"])(g["AFTER_LOGIN_ROUTE"]),mcm:Object(O["mapFeature"])(O["MULTI_CLUSTER"]),routeFromDropdown:{get:function(){var e=this.customRoute||{},t=this.routeDropdownOptions.find((function(t){var a,s;return t.value.name===e.name&&(null===(a=t.value.params)||void 0===a?void 0:a.cluster)===(null===(s=e.params)||void 0===s?void 0:s.cluster)}));return t||this.routeDropdownOptions[0]},set:function(e){this.customRoute=e,this.afterLoginRoute=e}},routeRadioOptions:function(){var e=[{label:this.t("landing.landingPrefs.options.homePage"),value:"home"},{label:this.t("landing.landingPrefs.options.lastVisited"),value:"last-visited"},{label:this.t("landing.landingPrefs.options.custom"),value:"dropdown"}];return this.mcm||e.pop(),e},routeDropdownOptions:function(){var e=[],t=Object(x["b"])(Object(x["c"])(this.clusters,this.$store),this.$store);return t.forEach((function(t){t.isReady&&e.push({label:t.nameDisplay,value:{name:"c-cluster",params:{cluster:t.id}}})})),e.sort((function(e,t){return e.label>t.label?1:t.label>e.label?-1:0})),e}},methods:{updateLoginRoute:function(e){var t;e?this.afterLoginRoute=e:this.afterLoginRoute=null===(t=this.routeFromDropdown)||void 0===t?void 0:t.value}}},L=y,S=(a("e1ad"),a("0c7c")),j=Object(S["a"])(L,v,m,!1,null,"469b1ed2",null),C=j.exports,R=a("a95f"),E=a("f303"),D=a("9232");function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M={layout:"plain",components:{BackLink:p["a"],ButtonGroup:d["a"],LabeledSelect:R["a"],Checkbox:f["a"],LandingPagePreference:C,LocaleSelector:D["a"]},mixins:[u["a"]],data:function(){return{admin:Object(c["isAdminUser"])(this.$store.getters)}},computed:A(A({keymap:Object(g["mapPref"])(g["KEYMAP"]),viewInApi:Object(g["mapPref"])(g["VIEW_IN_API"]),allNamespaces:Object(g["mapPref"])(g["ALL_NAMESPACES"]),themeShortcut:Object(g["mapPref"])(g["THEME_SHORTCUT"]),dateFormat:Object(g["mapPref"])(g["DATE_FORMAT"]),timeFormat:Object(g["mapPref"])(g["TIME_FORMAT"]),perPage:Object(g["mapPref"])(g["ROWS_PER_PAGE"]),hideDesc:Object(g["mapPref"])(g["HIDE_DESC"]),showPreRelease:Object(g["mapPref"])(g["SHOW_PRE_RELEASE"]),pluginDeveloper:Object(g["mapPref"])(g["PLUGIN_DEVELOPER"]),scalingDownPrompt:Object(g["mapPref"])(g["SCALE_POOL_PROMPT"])},Object(l["b"])(["isSingleProduct"])),{},{theme:{get:function(){return this.$store.getters["prefs/get"](g["THEME"])},set:function(e){this.$store.dispatch("prefs/setTheme",e)}},themeOptions:function(){return this.$store.getters["prefs/options"](g["THEME"]).map((function(e){return{labelKey:"prefs.theme.".concat(e),value:e}}))},keymapOptions:function(){return this.$store.getters["prefs/options"](g["KEYMAP"]).map((function(e){return{labelKey:"prefs.keymap.".concat(e),value:e}}))},dateOptions:function(){var e=i()(),t=this.$store.getters["prefs/options"](g["DATE_FORMAT"]).map((function(t){return e.format(t)})),a=t.some((function(e,a){return t.indexOf(e)!==a}));return this.$store.getters["prefs/options"](g["DATE_FORMAT"]).map((function(t,s){var n="".concat(e.format(t)," (").concat(t,")");return s>1&&a?{label:n,value:t}:{label:e.format(t),value:t}}))},helmOptions:function(){return this.$store.getters["prefs/options"](g["SHOW_PRE_RELEASE"]).map((function(e){return{labelKey:"prefs.helm.".concat(e),value:e}}))},pm:function(){var e=i()().hour(18).minute(0).second(0);return e.format(this.timeFormat.replace(/:ss/,""))},am:function(){var e=i()().hour(6).minute(0).second(0);return e.format(this.timeFormat.replace(/:ss/,""))},timeOptions:function(){var e=i()();return this.$store.getters["prefs/options"](g["TIME_FORMAT"]).map((function(t){return{label:e.format(t),value:t}}))},perPageOptions:function(){var e=this.$store.getters["i18n/t"];return this.$store.getters["prefs/options"](g["ROWS_PER_PAGE"]).map((function(t){return{label:e("prefs.perPage.value",{count:t}),value:t}}))},menuClusterOptions:function(){var e=this.$store.getters["i18n/t"];return this.$store.getters["prefs/options"](g["MENU_MAX_CLUSTERS"]).map((function(t){return{label:e("prefs.clusterToShow.value",{count:t}),value:t}}))},hideDescriptions:{get:function(){return this.hideDesc.includes("ALL")},set:function(e){var t;e?(t=this.hideDesc.slice(),Object(E["a"])(t,"ALL")):t=[],this.hideDesc=t}}})},T=M,N=(a("5254"),Object(S["a"])(T,s,n,!1,null,"cee3b17e",null));t["default"]=N.exports},df13:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".advanced[data-v-1d201bdb]{-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 5px;line-height:40px;font-size:15px;font-weight:500}.content[data-v-1d201bdb]{background:var(--nav-active);padding:10px;margin-top:6px;border-radius:4px}.locale-chooser[data-v-1d201bdb]{cursor:pointer}.locale-chooser[data-v-1d201bdb]:hover{text-decoration:none}",""]),e.exports=t},e0b2:function(e,t,a){var s=a("4e9f");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=a("499e").default;n("327d5046",s,!0,{sourceMap:!1,shadowMode:!1})},e1ad:function(e,t,a){"use strict";a("e0b2")},f7d8:function(e,t,a){"use strict";a("9911"),a("b0c0");var s=function(){var e=this,t=e._self._c;return e.link&&e.link.name?t("nuxt-link",{staticClass:"back-link",attrs:{to:e.link}},[t("i",{staticClass:"icon icon-chevron-left"}),e._v(" "+e._s(e.t("generic.back"))+"\n")]):t("nuxt-link",{staticClass:"back-link",attrs:{to:"/"}},[t("i",{staticClass:"icon icon-chevron-left"}),e._v(" "+e._s(e.t("nav.home"))+"\n")])},n=[],o={props:{link:{type:Object,default:null}}},r=o,i=(a("6283"),a("0c7c")),l=Object(i["a"])(r,s,n,!1,null,"64883ba2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=prefs.846122ad.js.map