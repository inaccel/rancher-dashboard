(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/auth/setup"],{3462:function(e,t,a){"use strict";a.r(t);a("498a");var s=function(){var e=this,t=e._self._c;return t("form",{staticClass:"setup"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col span-6 form-col"},[t("div",[e._v("\n         \n      ")]),e._v(" "),t("div",[t("h1",{staticClass:"text-center"},[e._v("\n          "+e._s(e.t("setup.welcome",{product:e.product}))+"\n        ")]),e._v(" "),e.mustChangePassword?[t("p",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t(e.isFirstLogin?"setup.setPassword":"setup.newUserSetPassword",{username:e.username},!0),expression:"t(isFirstLogin ? 'setup.setPassword' : 'setup.newUserSetPassword', { username }, true)"}],staticClass:"text-center mb-20 mt-20 setup-title"}),e._v(" "),e.haveCurrent?e._e():t("Password",{staticClass:"mb-20",attrs:{autocomplete:"current-password",type:"password",label:e.t("setup.currentPassword"),required:!0},model:{value:e.current,callback:function(t){e.current="string"===typeof t?t.trim():t},expression:"current"}}),e._v(" "),t("input",{attrs:{type:"hidden",name:"username",autocomplete:"username"},domProps:{value:e.username}}),e._v(" "),t("div",{staticClass:"mb-20"},[t("RadioGroup",{attrs:{"data-testid":"setup-password-mode",name:"password-mode",options:e.passwordOptions},model:{value:e.useRandom,callback:function(t){e.useRandom=t},expression:"useRandom"}})],1),e._v(" "),t("div",{staticClass:"mb-20"},[e.useRandom?t("LabeledInput",{ref:"password",attrs:{type:e.useRandom?"text":"password",disabled:e.useRandom,"data-testid":"setup-password-random","label-key":"setup.newPassword"},scopedSlots:e._u([e.useRandom?{key:"suffix",fn:function(){return[t("div",{staticClass:"addon",staticStyle:{padding:"0 0 0 12px"}},[t("CopyToClipboard",{staticClass:"btn-sm",attrs:{text:e.password}})],1)]},proxy:!0}:null],null,!0),model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}}):t("Password",{ref:"password",attrs:{label:e.t("setup.newPassword"),"data-testid":"setup-password",required:!0},model:{value:e.password,callback:function(t){e.password="string"===typeof t?t.trim():t},expression:"password"}})],1),e._v(" "),t("Password",{directives:[{name:"show",rawName:"v-show",value:!e.useRandom,expression:"!useRandom"}],attrs:{autocomplete:"new-password","data-testid":"setup-password-confirm",label:e.t("setup.confirmPassword"),required:!0},model:{value:e.confirm,callback:function(t){e.confirm="string"===typeof t?t.trim():t},expression:"confirm"}})]:e._e(),e._v(" "),e.isFirstLogin?[e.mcmEnabled?[e.mustChangePassword?t("hr",{staticClass:"mt-20 mb-20"}):e._e(),e._v(" "),t("p",[t("t",{attrs:{k:"setup.serverUrl.tip",raw:!0}})],1),e._v(" "),t("div",{staticClass:"mt-20"},[t("LabeledInput",{attrs:{label:e.t("setup.serverUrl.label"),"data-testid":"setup-server-url"},model:{value:e.serverUrl,callback:function(t){e.serverUrl=t},expression:"serverUrl"}})],1)]:e._e(),e._v(" "),t("div",{staticClass:"checkbox mt-40"},[t("Checkbox",{attrs:{id:"checkbox-telemetry"},scopedSlots:e._u([{key:"label",fn:function(){return[t("t",{attrs:{k:"setup.telemetry",raw:!0,name:e.productName}})]},proxy:!0}],null,!1,1048729250),model:{value:e.telemetry,callback:function(t){e.telemetry=t},expression:"telemetry"}})],1),e._v(" "),t("div",{staticClass:"checkbox pt-10 eula"},[t("Checkbox",{attrs:{id:"checkbox-eula","data-testid":"setup-agreement"},scopedSlots:e._u([{key:"label",fn:function(){return[t("t",{attrs:{k:"setup.eula",raw:!0,name:e.productName}})]},proxy:!0}],null,!1,3395104304),model:{value:e.eula,callback:function(t){e.eula=t},expression:"eula"}})],1)]:e._e(),e._v(" "),t("div",{staticClass:"text-center mt-20",attrs:{id:"submit"}},[t("AsyncButton",{key:"passwordSubmit",attrs:{type:"submit",mode:"continue",disabled:!e.saveEnabled,"data-testid":"setup-submit"},on:{click:e.save}})],1),e._v(" "),t("div",{staticClass:"setup-errors mt-20"},e._l(e.errors,(function(a){return t("h4",{key:a,staticClass:"text-error text-center"},[e._v("\n            "+e._s(a)+"\n          ")])})),0)],2)]),e._v(" "),t("BrandImage",{staticClass:"col span-6 landscape",attrs:{"file-name":"login-landscape.svg"}})],1)])},r=[],n=a("b36b"),o=n["a"],u=(a("78b8"),a("0c7c")),i=Object(u["a"])(o,s,r,!1,null,"1137e686",null);t["default"]=i.exports},"6c25":function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".principal[data-v-1137e686]{display:block;background:var(--box-bg);border:1px solid var(--border);border-radius:3px;margin:10px 0;padding:10px;line-height:40px}.principal img[data-v-1137e686]{vertical-align:middle;margin:0 10px}.setup[data-v-1137e686]{overflow:hidden}.setup .row .checkbox[data-v-1137e686]{margin:auto}.setup .row .span-6[data-v-1137e686]{padding:0 60px}.setup .row .landscape[data-v-1137e686]{height:100vh;margin:0;-o-object-fit:cover;object-fit:cover;padding:0}.setup .form-col[data-v-1137e686]{display:flex;flex-direction:column;overflow-y:auto;position:relative;height:100vh}.setup .form-col>div[data-v-1137e686]:first-of-type{flex:3}.setup .form-col>div[data-v-1137e686]:nth-of-type(2){flex:9}.setup .setup-title[data-v-1137e686] code{font-size:12px;padding:0}.setup .setup-errors[data-v-1137e686]{min-height:50px}.setup p[data-v-1137e686]{line-height:20px}",""]),e.exports=t},"78b8":function(e,t,a){"use strict";a("dcb2")},b36b:function(e,t,a){"use strict";(function(e){var s=a("1da1"),r=(a("e260"),a("d3b7"),a("e6cf"),a("3ca3"),a("ddb0"),a("ac1f"),a("5319"),a("a34a")),n=a.n(r),o=(a("96cf"),a("2c94")),u=a("84d3"),i=a("091e"),c=a("67c9"),d=a("fa3b"),l=a("a788"),p=a("f303"),v=a("4de2"),m=a("58ec"),b=a("fa35"),f=a("2f40"),h=a("c5b9"),w=a("c3e3"),x=a("55a3"),g=a("4579"),y=a("f441"),k=a("9bc6"),_=a("a4ed"),C=a("2c2d"),E=function(e){var t=e.getters["management/byId"](l["B"].SETTING,h["c"].FIRST_LOGIN);return"true"===(null===t||void 0===t?void 0:t.value)},R=function(){var e=Object(s["a"])(n.a.mark((function e(t){var a,s;return n.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch("auth/getUser");case 2:return s=null===(a=t.getters["auth/v3User"])||void 0===a?void 0:a.mustChangePassword,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t["a"]={layout:"unauthenticated",data:function(){return{passwordOptions:[{label:this.t("setup.useRandom"),value:!0},{label:this.t("setup.useManual"),value:!1}]}},middleware:function(e){return Object(s["a"])(n.a.mark((function t(){var a,s,r,o;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.store,s=e.redirect,e.route,t.prev=1,t.next=4,a.dispatch("management/findAll",{type:l["B"].SETTING,opt:{load:w["a"],url:"/v1/".concat(l["B"].SETTING),redirectUnauthorized:!1}});case 4:t.next=8;break;case 6:t.prev=6,t.t0=t["catch"](1);case 8:return t.next=10,E(a);case 10:return r=t.sent,t.next=13,R(a);case 13:if(o=t.sent,!r){t.next=18;break}return t.abrupt("return");case 18:if(!o){t.next=24;break}if(!a.getters["auth/initialPass"]){t.next=21;break}return t.abrupt("return");case 21:return t.next=23,a.dispatch("auth/logout",null,{root:!0});case 23:return t.abrupt("return",s(302,"/auth/login?".concat(d["s"])));case 24:return t.abrupt("return",s("/"));case 25:case"end":return t.stop()}}),t,null,[[1,6]])})))()},components:{AsyncButton:c["b"],LabeledInput:u["a"],CopyToClipboard:i["a"],Checkbox:v["a"],RadioGroup:b["b"],Password:y["a"],BrandImage:_["a"]},asyncData:function(t){return Object(s["a"])(n.a.mark((function a(){var s,r,u,i,c,v,b,f,g,y,k,_,C,P,T,I,O,j,S,U,L,N;return n.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return c=t.route,v=t.req,b=t.store,f=b.getters["management/byId"](l["B"].SETTING,h["c"].TELEMETRY),g=b.getters["management/byId"](l["B"].SETTING,h["c"].SERVER_URL),y=b.getters["management/byId"](l["B"].SETTING,h["c"].VERSION_RANCHER),k=!0,null!==f&&void 0!==f&&f.value&&"prompt"!==f.value?k="out"!==f.value:null!==y&&void 0!==y&&y.value&&!Object(x["c"])(null===y||void 0===y?void 0:y.value)||(k=!1),a.prev=6,a.next=9,b.dispatch("management/findAll",{type:l["B"].SETTING,opt:{load:w["a"],url:"/v1/".concat(l["B"].SETTING),redirectUnauthorized:!1}});case 9:_=b.getters["management/byId"](l["B"].SETTING,h["c"].PL),a.next=17;break;case 12:return a.prev=12,a.t0=a["catch"](6),a.next=16,b.dispatch("rancher/find",{type:"setting",id:h["c"].PL,opt:{url:"/v3/settings/".concat(h["c"].PL)}});case 16:_=a.sent;case 17:return null!==(s=_.value)&&void 0!==s&&s.length&&_.value!==Object(m["d"])()&&Object(m["f"])(_.value),C=_.default,a.next=21,b.dispatch("rancher/findAll",{type:l["H"].PRINCIPAL,opt:{url:"/v3/principals"}});case 21:return P=a.sent,T=Object(p["e"])(P,"me",!0),I=c.query[d["C"]]||b.getters["auth/initialPass"],O=null!==(r=b.getters["auth/v3User"])&&void 0!==r?r:{},a.next=27,b.dispatch("management/find",{type:l["B"].FEATURE,id:"multi-cluster-management",opt:{url:"/v1/".concat(l["B"].FEATURE,"/multi-cluster-management")}});case 27:return j=a.sent,S=(null===j||void 0===j||null===(u=j.spec)||void 0===u?void 0:u.value)||(null===j||void 0===j||null===(i=j.status)||void 0===i?void 0:i.default),U=null!==g&&void 0!==g&&g.value?g.value:e.server?v.headers.host:window.location.origin,a.next=32,E(b);case 32:return L=a.sent,a.next=35,R(b);case 35:return N=a.sent,a.abrupt("return",{productName:C,vendor:Object(m["d"])(),product:Object(m["c"])(),step:parseInt(c.query.step,10)||1,useRandom:!0,haveCurrent:!!I,username:(null===T||void 0===T?void 0:T.loginName)||"admin",isFirstLogin:L,mustChangePassword:N,current:I,password:Object(o["r"])(),confirm:"",v3User:O,serverUrl:U,mcmEnabled:S,telemetry:k,eula:!1,principals:P,errors:[]});case 37:case"end":return a.stop()}}),a,null,[[6,12]])})))()},computed:{saveEnabled:function(){if(!this.eula&&this.isFirstLogin)return!1;if(this.mustChangePassword){if(!this.current)return!1;if(!this.useRandom&&(!this.password||this.password!==this.confirm))return!1}return!0},me:function(){var e=Object(p["e"])(this.principals,"me",!0);return e}},watch:{useRandom:function(e){var t=this;e?this.password=Object(o["r"])():(this.password="",this.$nextTick((function(){t.$refs.password.focus()})))}},methods:{save:function(e){var t=this;return Object(s["a"])(n.a.mark((function a(){var s,r;return n.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=[],a.prev=1,a.next=4,Object(k["applyProducts"])(t.$store,t.$plugin);case 4:return a.next=6,t.$store.dispatch("loadManagement");case 6:if(!t.mustChangePassword){a.next=11;break}return a.next=9,t.$store.dispatch("rancher/request",{url:"/v3/users?action=changepassword",method:"post",data:{currentPassword:t.current,newPassword:t.password}});case 9:a.next=12;break;case 11:s.push(Object(f["d"])(t.$store,h["c"].FIRST_LOGIN,"false"));case 12:return r=t.v3User,r.mustChangePassword=!1,t.$store.dispatch("auth/gotUser",r),t.isFirstLogin&&(s.push(Object(f["d"])(t.$store,h["c"].EULA_AGREED,(new Date).toISOString())),s.push(Object(f["d"])(t.$store,h["c"].TELEMETRY,t.telemetry?"in":"out")),t.mcmEnabled&&t.serverUrl&&s.push(Object(f["d"])(t.$store,h["c"].SERVER_URL,t.serverUrl))),a.next=18,Promise.all(s);case 18:return a.next=20,Object(C["a"])((function(){return!E(t.$store)}),"first login to be completed",1e4,1e3,!0);case 20:e(!0),t.done(),a.next=29;break;case 24:a.prev=24,a.t0=a["catch"](1),console.error(a.t0),e(!1),t.errors=Object(g["c"])(a.t0);case 29:case"end":return a.stop()}}),a,null,[[1,24]])})))()},done:function(){this.$router.replace("/")}}}}).call(this,a("4362"))},dcb2:function(e,t,a){var s=a("6c25");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("499e").default;r("03727a93",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=setup.9327cdef.js.map