(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/auth/group.principal/assign-edit"],{5740:function(e,a,t){"use strict";t("f1a7")},"6dc4":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;return a("div",[a("div",[a("div",{staticClass:"masthead"},[a("header",[a("div",{staticClass:"title"},[a("h1",{staticClass:"m-0"},[e._v("\n            "+e._s(e.t("authGroups.assignEdit.assignTitle"))+"\n          ")])])])]),e._v(" "),a("form",{attrs:{onsubmit:"return false;"}},[a("SelectPrincipal",{staticClass:"mb-20",attrs:{"retain-selection":!0,"show-my-group-types":["group"],"search-group-types":"group"},on:{add:e.setPrincipal}}),e._v(" "),a("GlobalRoleBindings",{ref:"grb",attrs:{"group-principal-id":e.principalId,mode:e.mode,"assign-only":!0},on:{canLogIn:function(a){e.canLogIn=a},hasChanges:function(a){e.rolesChanged=a}}}),e._v(" "),a("FooterComponent",{attrs:{mode:e.editMode,errors:e.errors,"disable-save":!e.canSave},on:{save:e.save,done:e.cancel}})],1)])])},r=[],s=t("1da1"),o=(t("ac1f"),t("5319"),t("a34a")),c=t.n(o),i=(t("96cf"),t("43ef")),u=t("6759"),d=t("19ee"),l=t("a788"),p=t("fa3b"),f=t("4579"),v=t("3124"),h=t("0a0d"),g={components:{SelectPrincipal:u["a"],FooterComponent:i["a"],GlobalRoleBindings:d["a"]},data:function(){return{errors:[],principalId:null,canLogIn:!1,rolesChanged:!1,editMode:p["M"]}},computed:{mode:function(){return this.principalId&&this.$route.query.mode||p["T"]},canSave:function(){return this.rolesChanged&&this.canLogIn}},methods:{setPrincipal:function(e){return this.principalId=e,!0},cancel:function(){var e=this;return Object(s["a"])(c.a.mark((function a(){return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.navBack();case 2:case"end":return a.stop()}}),a)})))()},save:function(e){var a=this;return Object(s["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.errors=[],t.prev=1,t.next=4,a.$refs.grb.save();case 4:return t.next=6,a.$store.dispatch("management/findAll",{type:l["H"].SPOOFED.GROUP_PRINCIPAL,opt:{force:!0}},{root:!0});case 6:a.navBack(),e(!0),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](1),a.errors=Object(f["c"])(t.t0),e(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))()},navBack:function(){this.$router.replace({name:"c-cluster-product-resource",params:{cluster:h["a"],product:v["NAME"],resource:l["H"].SPOOFED.GROUP_PRINCIPAL}})}}},m=g,b=(t("5740"),t("0c7c")),x=Object(b["a"])(m,n,r,!1,null,"0e497a86",null);a["default"]=x.exports},f1a7:function(e,a,t){var n=t("f654");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=t("499e").default;r("34eba397",n,!0,{sourceMap:!1,shadowMode:!1})},f654:function(e,a,t){var n=t("4bad");a=n(!1),a.push([e.i,".masthead[data-v-0e497a86]{padding-bottom:10px;border-bottom:1px solid var(--border);margin-bottom:10px}HEADER[data-v-0e497a86]{margin:0}.actions[data-v-0e497a86]{display:flex;justify-content:flex-end;align-items:center}.actions .btn[data-v-0e497a86]{margin-left:10px}",""]),e.exports=a}}]);
//# sourceMappingURL=assign-edit.f186f8c2.js.map