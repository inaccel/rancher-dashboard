(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login3"],{"20c9":function(t,e,n){"use strict";n("b0c0");e["a"]={props:{focusOnMount:{type:Boolean,required:!0},name:{type:String,required:!0}},computed:{displayName:function(){return this.t("model.authConfig.provider.".concat(this.name))}},mounted:function(){this.focusOnMount&&this.focus()},methods:{focus:function(){this.$refs.btn.focus()}}}},b573:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t._self._c;return e("form",[t.open?[e("div",{staticClass:"span-6 offset-3"},[e("div",{staticClass:"mb-20"},[e("LabeledInput",{attrs:{label:t.t("login.username"),autocomplete:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),e("div",{staticClass:"mb-20"},[e("LabeledInput",{attrs:{type:"password",label:t.t("login.password"),autocomplete:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col span-12 text-center"},[e("AsyncButton",{ref:"btn",staticClass:"btn bg-primary",staticStyle:{"font-size":"18px"},attrs:{type:"submit","action-label":t.t("login.loginWithProvider",{provider:t.displayName}),"waiting-label":t.t("login.loggingIn"),"success-label":t.t("login.loggedIn"),"error-label":t.t("asyncButton.default.error")},on:{click:t.login}})],1)])]:e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn bg-primary",staticStyle:{"font-size":"18px"},attrs:{type:"button"},on:{click:function(e){return t.$emit("showInputs")}}},[t._v("\n      "+t._s(t.t("login.loginWithProvider",{provider:t.displayName}))+"\n    ")])])],2)},a=[],o=n("1da1"),r=n("a34a"),i=n.n(r),c=(n("96cf"),n("b0c0"),n("ac1f"),n("5319"),n("84d3")),l=n("67c9"),u=n("20c9"),p={components:{LabeledInput:c["a"],AsyncButton:l["b"]},mixins:[u["a"]],props:{open:{type:Boolean,default:!1}},data:function(){return{username:"",password:""}},methods:{login:function(t){var e=this;return Object(o["a"])(i.a.mark((function n(){return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.err=null,n.next=4,e.$store.dispatch("auth/login",{provider:e.name,body:{username:e.username,password:e.password}});case 4:t(!0),e.$router.replace("/"),n.next=13;break;case 8:n.prev=8,n.t0=n["catch"](0),e.err=n.t0,e.$emit("error",n.t0),t(!1);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},d=p,m=n("0c7c"),b=Object(m["a"])(d,s,a,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=login3.0737d5f3.js.map