(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/auth/login"],{"1a17":function(e,t,a){"use strict";a("b784")},5290:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".login[data-v-7ee29d9b]{overflow:hidden}.login .row[data-v-7ee29d9b]{align-items:center}.login .landscape[data-v-7ee29d9b]{height:100vh;margin:0;-o-object-fit:cover;object-fit:cover}.login .login-welcome[data-v-7ee29d9b]{margin:0}.login .login-messages[data-v-7ee29d9b]{display:flex;justify-content:center;align-items:center}.login .login-messages .banner[data-v-7ee29d9b]{margin:5px}.login .login-messages h4[data-v-7ee29d9b]{margin:0}.login .login-messages--hasContent[data-v-7ee29d9b]{min-height:70px}.login .login-messages .banner[data-v-7ee29d9b],.login .login-messages .text-error[data-v-7ee29d9b]{max-width:80%}.login .first-login-message .banner[data-v-7ee29d9b]{margin-bottom:0;border-left:0}.login .first-login-message .banner[data-v-7ee29d9b] code{font-size:12px;padding:0}.gutless[data-v-7ee29d9b]{height:100vh}.gutless>.span-6[data-v-7ee29d9b]{overflow-y:auto;display:flex;flex-direction:column;height:100%;place-content:center}.locale-elector[data-v-7ee29d9b]{position:absolute;bottom:30px}",""]),e.exports=t},9232:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",["login"===e.mode?t("div",[e.showLocale?t("div",[t("v-popover",{attrs:{"popover-class":"localeSelector",placement:"top",trigger:"click"}},[t("a",{staticClass:"locale-chooser",attrs:{"data-testid":"locale-selector"}},[e._v("\n          "+e._s(e.selectedLocaleLabel)+"\n          "),t("i",{staticClass:"icon icon-fw icon-sort-down"})]),e._v(" "),t("template",{slot:"popover"},[t("ul",{staticClass:"list-unstyled dropdown",staticStyle:{margin:"-1px"}},[e.showNone?t("li",{directives:[{name:"t",rawName:"v-t",value:"locale.none",expression:"'locale.none'"}],staticClass:"hand",on:{click:function(t){return e.switchLocale("none")}}}):e._e(),e._v(" "),e._l(e.availableLocales,(function(a,s){return t("li",{key:s,staticClass:"hand",on:{click:function(t){return e.switchLocale(s)}}},[e._v("\n              "+e._s(a)+"\n            ")])}))],2)])],2)],1):e._e()]):t("div",[t("Select",{attrs:{value:e.selectedOption,options:e.localesOptions},on:{input:function(t){return e.switchLocale(t)}}})],1)])},o=[],r=(a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4"),a("ade3")),n=(a("d81d"),a("b64b"),a("07ac"),a("2f62")),i=a("c989");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={name:"LocalSelector",components:{Select:i["a"]},props:{mode:{type:String,default:""}},computed:l(l({},Object(n["b"])("i18n",["selectedLocaleLabel","availableLocales"])),{},{localesOptions:function(){var e=this;return Object.keys(this.availableLocales).map((function(t){return{label:e.t("locale.".concat(t)),value:t}}))},selectedOption:function(){return Object.keys(this.availableLocales)[Object.values(this.availableLocales).indexOf(this.selectedLocaleLabel)]},showLocale:function(){return this.availableLocales&&Object.keys(this.availableLocales).length>1||this.dev},showNone:function(){return!1}}),methods:{switchLocale:function(e){this.$store.dispatch("i18n/switchTo",e)}}},u=d,p=(a("9c8a"),a("0c7c")),g=Object(p["a"])(u,s,o,!1,null,"1d201bdb",null);t["a"]=g.exports},"9c8a":function(e,t,a){"use strict";a("a478")},a478:function(e,t,a){var s=a("df13");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var o=a("499e").default;o("723a9a8e",s,!0,{sourceMap:!1,shadowMode:!1})},b784:function(e,t,a){var s=a("5290");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var o=a("499e").default;o("50a7114f",s,!0,{sourceMap:!1,shadowMode:!1})},d8eb:function(e,t,a){"use strict";a.r(t);a("498a");var s=function(){var e=this,t=e._self._c;return t("main",{staticClass:"main-layout login"},[t("div",{staticClass:"row gutless mb-20"},[t("div",{staticClass:"col span-6 p-20"},[t("p",{staticClass:"text-center"},[e._v("\n        "+e._s(e.t("login.howdy"))+"\n      ")]),e._v(" "),t("h1",{staticClass:"text-center login-welcome"},[e._v("\n        "+e._s(e.t("login.welcome",{vendor:e.vendor}))+"\n      ")]),e._v(" "),t("div",{staticClass:"login-messages",class:{"login-messages--hasContent":e.hasLoginMessage},attrs:{"data-testid":"login__messages"}},[e.errorToDisplay?t("Banner",{attrs:{label:e.errorToDisplay,color:"error"}}):e.loggedOut?t("h4",{staticClass:"text-success text-center"},[e._v("\n          "+e._s(e.t("login.loggedOut"))+"\n        ")]):e.timedOut?t("h4",{staticClass:"text-error text-center"},[e._v("\n          "+e._s(e.t("login.loginAgain"))+"\n        ")]):e._e()],1),e._v(" "),e.firstLogin?t("div",{staticClass:"first-login-message pl-10 pr-10",class:{"mt-30":!e.hasLoginMessage},attrs:{"data-testid":"first-login-message"}},[t("t",{attrs:{k:"setup.defaultPassword.intro",raw:!0}}),e._v(" "),t("div",[t("t",{attrs:{k:"setup.defaultPassword.dockerPrefix",raw:!0}})],1),e._v(" "),t("ul",[t("li",[t("t",{attrs:{k:"setup.defaultPassword.dockerPs",raw:!0}})],1),e._v(" "),t("li",[t("CopyCode",[e._v("\n              docker logs "),t("u",[e._v("container-id")]),e._v(' 2>&1 | grep "Bootstrap Password:"\n            ')])],1)]),e._v(" "),t("div",[t("t",{attrs:{k:"setup.defaultPassword.dockerSuffix",raw:!0}})],1),e._v(" "),t("br"),e._v(" "),t("div",[t("t",{attrs:{k:"setup.defaultPassword.helmPrefix",raw:!0}})],1),e._v(" "),t("br"),e._v(" "),t("CopyCode",[e._v("\n          "+e._s(e.kubectlCmd)+"\n        ")]),e._v(" "),t("br"),e._v(" "),t("div",[t("t",{attrs:{k:"setup.defaultPassword.helmSuffix",raw:!0}})],1)],1):e._e(),e._v(" "),(!e.hasLocal||e.hasLocal&&!e.showLocal)&&e.providers.length?t("div",{class:{"mt-30":!e.hasLoginMessage}},e._l(e.providers,(function(a,s){return t(e.providerComponents[s],{key:a,tag:"component",staticClass:"mb-10",attrs:{"focus-on-mount":0===s&&!e.showLocal,name:a,open:!e.showLocal},on:{showInputs:function(t){e.showLocal=!1},error:e.handleProviderError}})})),1):e._e(),e._v(" "),e.hasLocal?[e.showLocal?t("form",{class:{"mt-30":!e.hasLoginMessage}},[t("div",{staticClass:"span-6 offset-3"},[t("div",{staticClass:"mb-20"},[e.firstLogin?e._e():t("LabeledInput",{ref:"username",attrs:{id:"username","data-testid":"local-login-username",label:e.t("login.username"),autocomplete:"username"},model:{value:e.username,callback:function(t){e.username="string"===typeof t?t.trim():t},expression:"username"}})],1),e._v(" "),t("div",{},[t("Password",{ref:"password",attrs:{id:"password","data-testid":"local-login-password",label:e.t("login.password"),autocomplete:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),e._v(" "),t("div",{staticClass:"mt-20"},[t("div",{staticClass:"col span-12 text-center"},[t("AsyncButton",{attrs:{id:"submit","data-testid":"login-submit",type:"submit","action-label":e.t("login.loginWithLocal"),"waiting-label":e.t("login.loggingIn"),"success-label":e.t("login.loggedIn"),"error-label":e.t("asyncButton.default.error")},on:{click:e.loginLocal}}),e._v(" "),e.firstLogin?e._e():t("div",{staticClass:"mt-20"},[t("Checkbox",{attrs:{label:e.t("login.remember.label"),type:"checkbox"},model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}})],1)],1)])]):e._e(),e._v(" "),e.hasLocal&&!e.showLocal?t("div",{staticClass:"mt-20 text-center"},[t("a",{attrs:{id:"login-useLocal","data-testid":"login-useLocal",role:"button"},on:{click:e.toggleLocal}},[e._v("\n            "+e._s(e.t("login.useLocal"))+"\n          ")])]):e._e(),e._v(" "),e.hasLocal&&e.showLocal&&e.providers.length?t("div",{staticClass:"mt-20 text-center"},[t("a",{attrs:{role:"button"},on:{click:e.toggleLocal}},[e._v("\n            "+e._s(e.nonLocalPrompt)+"\n          ")])]):e._e()]:e._e(),e._v(" "),e.showLocaleSelector?t("div",{staticClass:"locale-elector"},[t("LocaleSelector",{attrs:{mode:"login"}})],1):e._e()],2),e._v(" "),t("BrandImage",{staticClass:"col span-6 landscape",attrs:{"file-name":"login-landscape.svg"}})],1)])},o=[],r=(a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4"),a("ade3")),n=a("1da1"),i=a("a34a"),c=a.n(i),l=(a("96cf"),a("d81d"),a("caad"),a("2532"),a("7db0"),a("d3b7"),a("99af"),a("ac1f"),a("5319"),a("f303")),d=a("a20e"),u=a("84d3"),p=a("67c9"),g=a("9232"),v=a("a4ed"),h=a("08ed"),b=a("18fe"),f=a("bec1"),m=a("fa3b"),w=a("4de2"),L=a("f441"),O=a("b25d"),_=a("bb49"),y=a("2f62"),x=a("c3e3"),j=a("a788"),k=a("c5b9"),C=a("3589"),P=a("58ec"),S=a("6fc2");function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I={name:"Login",layout:"unauthenticated",components:{LabeledInput:u["a"],AsyncButton:p["b"],Checkbox:w["a"],BrandImage:v["a"],Banner:f["a"],InfoBox:h["a"],CopyCode:b["a"],Password:L["a"],LocaleSelector:g["a"]},asyncData:function(e){return Object(n["a"])(c.a.mark((function t(){var a,s,o,r,n,i,d,u,p,g,v,h,b,f;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.route,e.redirect,i=e.store,t.next=3,i.dispatch("auth/getAuthProviders");case 3:return d=t.sent,u=Object(O["b"])(d.map((function(e){return e.id})),["id"]),p=u.includes("local"),g=p&&!!u.find((function(e){return"local"!==e})),p&&Object(l["j"])(u,"local"),t.prev=8,t.next=11,i.dispatch("management/findAll",{type:j["B"].SETTING,opt:{load:x["a"],url:"/v1/".concat(j["B"].SETTING),redirectUnauthorized:!1}});case 11:v=i.getters["management/byId"](j["B"].SETTING,k["c"].FIRST_LOGIN),h=i.getters["management/byId"](j["B"].SETTING,k["c"].PL),b=i.getters["management/byId"](j["B"].SETTING,k["c"].BRAND),t.next=27;break;case 16:return t.prev=16,t.t0=t["catch"](8),t.next=20,i.dispatch("rancher/find",{type:"setting",id:k["c"].FIRST_LOGIN,opt:{url:"/v3/settings/".concat(k["c"].FIRST_LOGIN)}});case 20:return v=t.sent,t.next=23,i.dispatch("rancher/find",{type:"setting",id:k["c"].PL,opt:{url:"/v3/settings/".concat(k["c"].PL)}});case 23:return h=t.sent,t.next=26,i.dispatch("rancher/find",{type:"setting",id:k["c"].BRAND,opt:{url:"/v3/settings/".concat(k["c"].BRAND)}});case 26:b=t.sent;case 27:return null!==(a=h.value)&&void 0!==a&&a.length&&h.value!==Object(P["d"])()&&Object(P["f"])(h.value),null!==(s=b)&&void 0!==s&&null!==(o=s.value)&&void 0!==o&&o.length&&b.value!==Object(P["b"])()&&Object(P["e"])(b.value),1===u.length&&(f=u[0]),t.abrupt("return",{vendor:Object(P["d"])(),providers:u,hasOthers:g,hasLocal:p,showLocal:!g||n.query[m["r"]]===m["N"],firstLogin:"true"===(null===(r=v)||void 0===r?void 0:r.value),singleProvider:f,showLocaleSelector:!0});case 31:case"end":return t.stop()}}),t,null,[[8,16]])})))()},data:function(e){var t=e.$cookies,a=t.get(d["c"],{parseJSON:!1})||"";return{product:Object(P["c"])(),username:a,remember:!!a,password:"",timedOut:this.$route.query[m["F"]]===m["N"],loggedOut:this.$route.query[m["s"]]===m["N"],err:this.$route.query.err,providers:[],providerComponents:[],customLoginError:{}}},computed:E(E({},Object(y["b"])({t:"i18n/t"})),{},{nonLocalPrompt:function(){if(this.singleProvider){var e=this.displayName(this.singleProvider);return this.t("login.useProvider",{provider:e})}return this.t("login.useNonLocal")},errorMessage:function(){var e;return this.err===C["LOGIN_ERRORS"].CLIENT_UNAUTHORIZED?this.t("login.clientError"):this.err===C["LOGIN_ERRORS"].CLIENT||this.err===C["LOGIN_ERRORS"].SERVER?this.t("login.error"):null!==(e=this.err)&&void 0!==e&&e.length?this.t("login.specificError",{msg:this.err}):""},errorToDisplay:function(){var e,t;return"true"===(null===(e=this.customLoginError)||void 0===e?void 0:e.showMessage)&&null!==(t=this.customLoginError)&&void 0!==t&&t.message&&this.errorMessage?"".concat(this.customLoginError.message," \n ").concat(this.errorMessage):this.errorMessage?this.errorMessage:""},kubectlCmd:function(){return"kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{.data.bootstrapPassword|base64decode}}{{\"\\n\"}}'"},hasLoginMessage:function(){return this.errorToDisplay||this.loggedOut||this.timedOut}}),created:function(){var e=this;this.providerComponents=this.providers.map((function(t){return e.$store.getters["type-map/importLogin"](_["configType"][t]||t)}))},fetch:function(){var e=this;return Object(n["a"])(c.a.mark((function t(){var a,s;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("management/find",{type:j["B"].SETTING,id:k["c"].BANNERS});case 2:a=t.sent,s=a.value,e.customLoginError=JSON.parse(s).loginError;case 5:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;this.username=this.firstLogin?"admin":this.username,this.$nextTick((function(){e.focusSomething()}))},methods:{displayName:function(e){return this.t("model.authConfig.provider.".concat(e))},toggleLocal:function(){var e=this;this.showLocal=!this.showLocal,this.$router.applyQuery(Object(r["a"])({},m["r"],m["N"])),this.$nextTick((function(){e.focusSomething()}))},focusSomething:function(){var e,t;this.showLocal&&(t=this.username?this.$refs.password:this.$refs.username,null!==(e=t)&&void 0!==e&&e.focus&&(t.focus(),t.select&&t.select()))},handleProviderError:function(e){this.err=e},loginLocal:function(e){var t=this;return Object(n["a"])(c.a.mark((function a(){var s,o;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$store.dispatch("auth/login",{provider:"local",body:{username:t.username,password:t.password}});case 3:return a.next=5,t.$store.dispatch("rancher/findAll",{type:j["H"].USER,opt:{url:"/v3/users?me=true",load:x["b"]}});case 5:return o=a.sent,null!==o&&void 0!==o&&o[0]&&t.$store.dispatch("auth/gotUser",o[0]),t.remember?t.$cookies.set(d["c"],t.username,{encode:function(e){return e},maxAge:31536e3,path:"/",sameSite:!0,secure:!0}):t.$cookies.remove(d["c"]),a.next=10,Object(S["a"])({app:t.$store.app,store:t.$store,$plugin:t.$store.$plugin});case 10:t.firstLogin||null!==(s=o[0])&&void 0!==s&&s.mustChangePassword?(t.$store.dispatch("auth/setInitialPass",t.password),t.$router.push({name:"auth-setup"})):t.$router.replace("/"),a.next=19;break;case 13:a.prev=13,a.t0=a["catch"](0),t.err=a.t0,t.timedOut=null,t.loggedOut=null,e(!1);case 19:case"end":return a.stop()}}),a,null,[[0,13]])})))()}}},T=I,$=(a("1a17"),a("0c7c")),R=Object($["a"])(T,s,o,!1,null,"7ee29d9b",null);t["default"]=R.exports},df13:function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".advanced[data-v-1d201bdb]{-webkit-user-select:none;-moz-user-select:none;user-select:none;padding:0 5px;line-height:40px;font-size:15px;font-weight:500}.content[data-v-1d201bdb]{background:var(--nav-active);padding:10px;margin-top:6px;border-radius:4px}.locale-chooser[data-v-1d201bdb]{cursor:pointer}.locale-chooser[data-v-1d201bdb]:hover{text-decoration:none}",""]),e.exports=t}}]);
//# sourceMappingURL=login.d0d758bf.js.map