(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/account/index"],{"2baf":function(t,e,a){var n=a("4438");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("2e5279ac",n,!0,{sourceMap:!1,shadowMode:!1})},"2d3d":function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,".change-password-modal[data-v-4d41c8b5] .v--modal{display:flex}.change-password-modal[data-v-4d41c8b5] .v--modal .card-wrap{display:flex;flex-direction:column}.change-password-modal[data-v-4d41c8b5] .v--modal .card-wrap .card-body{flex:1;justify-content:start}.change-password-modal[data-v-4d41c8b5] .v--modal .card-wrap .card-body>div{flex:1;display:flex}.change-password-modal[data-v-4d41c8b5] .v--modal .card-wrap .card-actions{display:flex;justify-content:flex-end;width:100%}.prompt-password[data-v-4d41c8b5]{flex:1;display:flex}.prompt-password form[data-v-4d41c8b5]{flex:1}",""]),t.exports=e},"2f46":function(t,e,a){var n=a("2d3d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("9aefa7ba",n,!0,{sourceMap:!1,shadowMode:!1})},4438:function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,".back-link[data-v-64883ba2]{align-items:center;display:flex;font-size:16px;margin-bottom:10px;outline:0;padding:10px 0;width:-moz-fit-content;width:fit-content}",""]),t.exports=e},6283:function(t,e,a){"use strict";a("2baf")},"6c64":function(t,e,a){var n=a("4bad");e=n(!1),e.push([t.i,"hr[data-v-150f91c6]{margin:20px 0}.account[data-v-150f91c6]{justify-content:space-between}.account[data-v-150f91c6],.keys-header[data-v-150f91c6]{display:flex}.keys-header div[data-v-150f91c6]{flex:1}.keys[data-v-150f91c6]{display:flex;flex-direction:column}.keys .add[data-v-150f91c6]{align-self:flex-end}.api-url[data-v-150f91c6]{display:flex}.api-url>span[data-v-150f91c6]{margin-right:6px}",""]),t.exports=e},"7bbd":function(t,e,a){"use strict";a("be6c")},8309:function(t,e,a){"use strict";a("b64b"),a("b0c0");e["a"]={data:function(){return{backLink:null}},beforeRouteEnter:function(t,e,a){a((function(t){(Object.keys(e.params).length||"home"===e.name)&&(t.backLink=e)}))}}},bad9:function(t,e,a){"use strict";a("2f46")},be6c:function(t,e,a){var n=a("6c64");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("5dbba540",n,!0,{sourceMap:!1,shadowMode:!1})},f7d8:function(t,e,a){"use strict";a("9911"),a("b0c0");var n=function(){var t=this,e=t._self._c;return t.link&&t.link.name?e("nuxt-link",{staticClass:"back-link",attrs:{to:t.link}},[e("i",{staticClass:"icon icon-chevron-left"}),t._v(" "+t._s(t.t("generic.back"))+"\n")]):e("nuxt-link",{staticClass:"back-link",attrs:{to:"/"}},[e("i",{staticClass:"icon icon-chevron-left"}),t._v(" "+t._s(t.t("nav.home"))+"\n")])},r=[],s={props:{link:{type:Object,default:null}}},c=s,i=(a("6283"),a("0c7c")),o=Object(i["a"])(c,n,r,!1,null,"64883ba2",null);e["a"]=o.exports},f89b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t._self._c;return t.$fetchState.pending?e("Loading"):e("div",[e("BackLink",{attrs:{link:t.backLink}}),t._v(" "),e("h1",{directives:[{name:"t",rawName:"v-t",value:"accountAndKeys.title",expression:"'accountAndKeys.title'"}]}),t._v(" "),e("h2",{directives:[{name:"t",rawName:"v-t",value:"accountAndKeys.account.title",expression:"'accountAndKeys.account.title'"}]}),t._v(" "),e("div",{staticClass:"account"},[e("Principal",{key:t.principal.id,attrs:{value:t.principal.id,"use-muted":!1,"show-labels":!0}}),t._v(" "),e("div",[t.canChangePassword?e("button",{staticClass:"btn role-primary",attrs:{type:"button","data-testid":"account_change_password"},on:{click:function(e){return t.$refs.promptChangePassword.show(!0)}}},[t._v("\n        "+t._s(t.t("accountAndKeys.account.change"))+"\n      ")]):t._e()])],1),t._v(" "),e("PromptChangePassword",{ref:"promptChangePassword"}),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"keys-header"},[e("div",[e("h2",{directives:[{name:"t",rawName:"v-t",value:"accountAndKeys.apiKeys.title",expression:"'accountAndKeys.apiKeys.title'"}]}),t._v(" "),e("div",{staticClass:"api-url"},[e("span",[t._v(t._s(t.t("accountAndKeys.apiKeys.apiEndpoint")))]),t._v(" "),e("CopyToClipboardText",{attrs:{text:t.apiUrl}})],1)]),t._v(" "),t.apiKeySchema?e("button",{staticClass:"btn role-primary add mb-20",attrs:{"data-testid":"account_create_api_keys"},on:{click:t.addKey}},[t._v("\n      "+t._s(t.t("accountAndKeys.apiKeys.add.label"))+"\n    ")]):t._e()]),t._v(" "),t.apiKeySchema?e("div",{staticClass:"keys"},[e("ResourceTable",{attrs:{schema:t.apiKeySchema,rows:t.apiKeys,headers:t.apiKeyheaders,"key-field":"id","data-testid":"api_keys_list",search:!0,"row-actions":!0,"table-actions":!0}})],1):e("div",[e("Banner",{attrs:{color:"warning",label:t.t("accountAndKeys.apiKeys.notAllowed")}})],1)],1)},r=[],s=(a("b64b"),a("a4d3"),a("e439"),a("159b"),a("dbb4"),a("ade3")),c=a("1da1"),i=a("a34a"),o=a.n(i),d=(a("96cf"),a("7db0"),a("d3b7"),a("99af"),a("ac1f"),a("5319"),a("4de4"),a("f7d8")),l=function(){var t=this,e=t._self._c;return e("modal",{staticClass:"change-password-modal",attrs:{name:"password-modal",width:500,height:465}},[e("Card",{staticClass:"prompt-password",attrs:{"show-highlight-border":!1},scopedSlots:t._u([{key:"actions",fn:function(){return[e("button",{staticClass:"btn role-secondary",attrs:{type:"reset"},on:{click:function(e){return t.show(!1)}}},[t._v("\n        "+t._s(t.t("changePassword.cancel"))+"\n      ")]),t._v(" "),e("AsyncButton",{staticClass:"btn bg-error ml-10",attrs:{type:"submit",mode:"apply",disabled:!t.valid,value:"LOGIN"},on:{click:t.submit}})]},proxy:!0}])},[e("h4",{staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"},[t._v("\n      "+t._s(t.t("changePassword.title"))+"\n    ")]),t._v(" "),e("div",{attrs:{slot:"body"},slot:"body"},[e("form",{on:{submit:function(t){t.preventDefault()}}},[e("ChangePassword",{ref:"changePassword",on:{valid:function(e){t.valid=e}}})],1)])])],1)},u=[],p=a("2f62"),f=a("60ba"),b=a("d4bf"),h=a("67c9");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function y(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var w={components:{Card:b["a"],AsyncButton:h["b"],ChangePassword:f["a"]},data:function(){return{valid:!1,password:""}},computed:y({},Object(p["b"])({t:"i18n/t"})),methods:{show:function(t){t?this.$modal.show("password-modal"):this.$modal.hide("password-modal")},submit:function(t){var e=this;return Object(c["a"])(o.a.mark((function a(){return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.$refs.changePassword.save();case 3:e.show(!1),t(!0),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t(!1);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()}}},m=w,g=(a("bad9"),a("0c7c")),x=Object(g["a"])(m,l,u,!1,null,"4d41c8b5",null),k=x.exports,O=a("a788"),_=a("c5b9"),P=a("c778"),j=a("5a00"),C=a("8309"),K=a("bec1"),S=a("b178"),A=a("4703");function $(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?$(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):$(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var T="/v3",L={layout:"plain",components:{CopyToClipboardText:A["a"],BackLink:d["a"],Banner:K["a"],PromptChangePassword:k,Loading:P["a"],ResourceTable:S["a"],Principal:j["a"]},mixins:[C["a"]],fetch:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){var a,n,r;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.calcCanChangePassword();case 2:if(t.canChangePassword=e.sent,!t.apiKeySchema){e.next=7;break}return e.next=6,t.$store.dispatch("rancher/findAll",{type:O["H"].TOKEN});case 6:t.rows=e.sent;case 7:return e.next=9,t.$store.dispatch("management/findAll",{type:O["B"].SETTING});case 9:a=e.sent,n=a.find((function(t){return t.id===_["c"].API_HOST})),r=a.find((function(t){return t.id===_["c"].SERVER_URL})),t.apiHostSetting=null===n||void 0===n?void 0:n.value,t.serverUrlSetting=null===r||void 0===r?void 0:r.value;case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{apiHostSetting:null,serverUrlSetting:null,rows:null,canChangePassword:!1}},computed:E(E({},Object(p["b"])({t:"i18n/t"})),{},{apiKeyheaders:function(){return this.apiKeySchema?this.$store.getters["type-map/headersFor"](this.apiKeySchema):[]},apiUrlBase:function(){var t=this.apiHostSetting;t&&0!==t.indexOf("http")&&(t="http://".concat(t));var e=t||this.serverUrlSetting;return 0!==e.indexOf("http")&&(e="".concat(window.location.origin,"/").concat(e.replace(/^\/+/,""))),e="".concat(e.replace(/\/+$/,""),"/"),e},apiUrl:function(){var t=this.apiUrlBase,e=T.replace(/^\/+/,"");return"".concat(t).concat(e)},apiKeySchema:function(){try{return this.$store.getters["rancher/schemaFor"](O["H"].TOKEN)}catch(t){}return null},principal:function(){var t=this.$store.getters["auth/principalId"],e=this.$store.getters["rancher/byId"](O["H"].PRINCIPAL,t);return e||console.error("Failed to find principal with id: ",t),e||{}},apiKeys:function(){var t=function(t){var e=t.labels,a=t.expired,n=t.current;return(!a||!e||!e["ui-session"])&&!n};return this.rows?this.rows.filter(t):[]}}),methods:{addKey:function(){this.$router.push({path:"account/create-key"})},calcCanChangePassword:function(){var t=this;return Object(c["a"])(o.a.mark((function e(){var a;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$store.getters["auth/enabled"]){e.next=2;break}return e.abrupt("return",!1);case 2:if("local"!==t.principal.provider){e.next=4;break}return e.abrupt("return",!!t.principal.loginName);case 4:return e.next=6,t.$store.dispatch("rancher/findAll",{type:O["H"].USER,opt:{url:"/v3/users",filter:{me:!0}}});case 6:if(a=e.sent,!a||1!==a.length){e.next=9;break}return e.abrupt("return",!!a[0].username);case 9:return e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))()}}},B=L,D=(a("7bbd"),Object(g["a"])(B,n,r,!1,null,"150f91c6",null));e["default"]=D.exports}}]);
//# sourceMappingURL=index.7511b851.js.map