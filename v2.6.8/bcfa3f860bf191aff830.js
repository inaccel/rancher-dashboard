(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1607:function(t,n,e){"use strict";e.r(n);e(2),e(3),e(4),e(5),e(17);var o={mixins:[e(2681).a],methods:{login:function(){this.$store.dispatch("auth/redirectTo",{provider:this.name})}}},r=e(1),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-center"},[e("button",{ref:"btn",staticClass:"btn bg-primary",staticStyle:{"font-size":"18px"},on:{click:t.login}},[t._v("\n    "+t._s(t.t("login.loginWithProvider",{provider:t.displayName}))+"\n  ")])])}),[],!1,null,null,null);n.default=component.exports},2681:function(t,n,e){"use strict";e(2),e(3),e(4),e(5),e(17);n.a={props:{focusOnMount:{type:Boolean,required:!0},name:{type:String,required:!0}},computed:{displayName:function(){return this.t("model.authConfig.provider.".concat(this.name))}},mounted:function(){this.focusOnMount&&this.focus()},methods:{focus:function(){this.$refs.btn.focus()}}}}}]);
//# sourceMappingURL=bcfa3f860bf191aff830.js.map