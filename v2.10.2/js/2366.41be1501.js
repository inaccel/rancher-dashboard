(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2366],{14079:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var o=t(45522),r=t.n(o),n=t(67643),s=t.n(n),i=s()(r());i.push([e.id,".aws-compliance[data-v-d5d708ce]{background-color:var(--error);color:var(--error-text);line-height:2em;width:100%}.aws-compliance[data-v-d5d708ce],.aws-compliance>p[data-v-d5d708ce]{text-align:center}",""]);const d=i},7306:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var o=t(45522),r=t.n(o),n=t(67643),s=t.n(n),i=s()(r());i.push([e.id,"#azure-warn[data-v-06a043b9]{background-color:var(--warning);color:var(--warning-text);line-height:2em;width:100%}#azure-warn>p[data-v-06a043b9]{text-align:center}",""]);const d=i},77694:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>d});var o=t(45522),r=t.n(o),n=t(67643),s=t.n(n),i=s()(r());i.push([e.id,'.dashboard-root[data-v-77ec3126]{display:flex;flex-direction:column;height:100vh}.dashboard-content[data-v-77ec3126]{display:grid;flex-grow:1;grid-template-areas:"header" "main";grid-template-columns:auto;grid-template-rows:var(--header-height) auto}.dashboard-content>HEADER[data-v-77ec3126]{grid-area:header}MAIN[data-v-77ec3126]{grid-area:main;overflow:auto}MAIN .outlet[data-v-77ec3126]{min-height:100%;padding:0}',""]);const d=i},97587:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var o=t(20641),r=t(90033);const n={key:0,class:"aws-compliance"};function s(e,a,t,s,i,d){return d.awsNotification?((0,o.uX)(),(0,o.CE)("div",n,(0,r.toDisplayString)(d.awsNotification.message),1)):(0,o.Q3)("",!0)}var i=t(45848);const d={async fetch(){this.$store.getters["management/schemaFor"](i.Mc.USER_NOTIFICATION)&&(this.notifications=await this.$store.dispatch("management/findAll",{type:i.Mc.USER_NOTIFICATION}))},data(){return{notifications:[]}},computed:{awsNotification(){return this.notifications.find((e=>"csp-adapter"===e.componentName))}}};t(56401);var c=t(66262);const u=(0,c.A)(d,[["render",s],["__scopeId","data-v-d5d708ce"]]),l=u},98883:(e,a,t)=>{"use strict";t.d(a,{A:()=>p});var o=t(20641),r=t(90033);const n={key:0,id:"azure-warn",class:"banner"};function s(e,a,t,s,i,d){const c=(0,o.g2)("router-link");return d.showWarning?((0,o.uX)(),(0,o.CE)("div",n,[(0,o.Lk)("p",null,[(0,o.eW)((0,r.toDisplayString)(e.t("authConfig.azuread.updateEndpoint.banner.message"))+" ",1),(0,o.bF)(c,{to:i.authConfigRoute},{default:(0,o.k6)((()=>[(0,o.eW)((0,r.toDisplayString)(e.t("authConfig.azuread.updateEndpoint.banner.linkText")),1)])),_:1},8,["to"])])])):(0,o.Q3)("",!0)}var i=t(45848),d=t(13097),c=t(68497),u=t(57949);const l={async fetch(){this.$store.getters["isRancher"]&&this.$store.getters["management/schemaFor"](i.Mc.AUTH_CONFIG)&&(this.authConfig=await this.$store.dispatch("rancher/find",{type:i.k$.AUTH_CONFIG,id:"azuread",opt:{url:`/v3/${i.k$.AUTH_CONFIG}/azuread`}}))},data(){return{authConfig:null,authConfigRoute:{name:"c-cluster-auth-config-id",params:{cluster:this.$route.params.cluster||u.w,id:"azuread"}}}},computed:{showWarning(){return!!this.authConfig&&("true"!==(0,d.get)(this.authConfig,`annotations."${c.wk}"`)&&this.authConfig.enabled)}}};t(16496);var h=t(66262);const g=(0,h.A)(l,[["render",s],["__scopeId","data-v-06a043b9"]]),p=g},82366:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>C});var o=t(20641),r=t(90033);const n={class:"dashboard-root"},s={class:"main-layout"};function i(e,a,t,i,d,c){const u=(0,o.g2)("FixedBanner"),l=(0,o.g2)("Inactivity"),h=(0,o.g2)("AwsComplianceBanner"),g=(0,o.g2)("AzureWarning"),p=(0,o.g2)("PromptModal"),m=(0,o.g2)("Header"),v=(0,o.g2)("router-view"),f=(0,o.g2)("GrowlManager"),w=(0,o.gN)("shortkey");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(u,{header:!0}),(0,o.eW)(),(0,o.bF)(l),(0,o.eW)(),(0,o.bF)(h),(0,o.eW)(),(0,o.bF)(g),(0,o.eW)(),(0,o.bF)(p),(0,o.eW)(),(0,o.Lk)("div",{class:(0,r.normalizeClass)(["dashboard-content",{"dashboard-padding-left":e.showTopLevelMenu}])},[e.managementReady?((0,o.uX)(),(0,o.Wv)(m,{key:0,simple:!0})):(0,o.Q3)("",!0),(0,o.eW)(),(0,o.Lk)("main",s,[((0,o.uX)(),(0,o.Wv)(v,{key:e.$route.path,class:"outlet"}))])],2),(0,o.eW)(),(0,o.bF)(u,{footer:!0}),(0,o.eW)(),(0,o.bF)(f),(0,o.eW)(),c.themeShortcut?(0,o.bo)(((0,o.uX)(),(0,o.CE)("button",{key:0,class:"hide",onShortkey:a[0]||(a[0]=e=>c.toggleTheme())},null,544)),[[w,["shift","t"],void 0,{once:!0}]]):(0,o.Q3)("",!0),(0,o.eW)(),d.noLocaleShortcut?(0,o.bo)(((0,o.uX)(),(0,o.CE)("button",{key:1,class:"hide",onShortkey:a[1]||(a[1]=e=>c.toggleNoneLocale())},null,544)),[[w,["shift","l"],void 0,{once:!0}]]):(0,o.Q3)("",!0)])}var d=t(29758),c=t(32868),u=t(23895),l=t(87244),h=t(97486),g=t(97587),p=t(98883),m=t(66216),v=t(46377),f=t(66278),w=t(22518);const b={components:{Header:d.A,FixedBanner:u.A,GrowlManager:l.A,AzureWarning:p.A,AwsComplianceBanner:g.A,Inactivity:v.A,PromptModal:w.A},mixins:[c.A,m.A],data(){return{name:this.$route.name,noLocaleShortcut:!1}},computed:{themeShortcut:(0,h.mapPref)(h.THEME_SHORTCUT),...(0,f.aH)(["managementReady"]),...(0,f.L8)(["showTopLevelMenu"])},methods:{toggleTheme(){this.$store.dispatch("prefs/toggleTheme")},toggleNoneLocale(){this.$store.dispatch("i18n/toggleNone")}}};t(54640);var A=t(66262);const y=(0,A.A)(b,[["render",i],["__scopeId","data-v-77ec3126"]]),C=y},56401:(e,a,t)=>{var o=t(14079);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=t(99548).A;r("7af725b2",o,!0,{sourceMap:!1,shadowMode:!1})},16496:(e,a,t)=>{var o=t(7306);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=t(99548).A;r("25abf730",o,!0,{sourceMap:!1,shadowMode:!1})},54640:(e,a,t)=>{var o=t(77694);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=t(99548).A;r("507601e8",o,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=2366.41be1501.js.map