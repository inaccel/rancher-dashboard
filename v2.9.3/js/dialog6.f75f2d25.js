(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog6"],{"1a88":function(t,e,r){var n=r("989b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("499e").default;a("1888cf9e",n,!0,{sourceMap:!1,shadowMode:!1})},"4b759":function(t,e,r){var n=r("4bad");e=n(!1),e.push([t.i,".prompt-rotate[data-v-1f9f799a]{margin:0}.buttons[data-v-1f9f799a]{display:flex;justify-content:flex-end;width:100%}",""]),t.exports=e},"5d08":function(t,e,r){"use strict";r("1a88")},"989b":function(t,e,r){var n=r("4bad");e=n(!1),e.push([t.i,".card-container{border:1px solid var(--border);box-shadow:none}",""]),t.exports=e},c106f:function(t,e,r){"use strict";r("cbc1")},cbc1:function(t,e,r){var n=r("4b759");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=r("499e").default;a("400434e8",n,!0,{sourceMap:!1,shadowMode:!1})},ee6f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("Card",{staticClass:"prompt-rotate",attrs:{"show-highlight-border":!1,sticky:!0}},[e("h4",{directives:[{name:"clean-html",rawName:"v-clean-html",value:t.t("addProjectMemberDialog.title"),expression:"t('addProjectMemberDialog.title')"}],staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"}),t._v(" "),e("div",{staticClass:"pl-10 pr-10",attrs:{slot:"body"},slot:"body"},[t.error?e("Banner",{attrs:{color:"error"}},[t._v("\n      "+t._s(t.error)+"\n    ")]):t._e(),t._v(" "),e("ProjectMemberEditor",{attrs:{"use-two-columns-for-custom":!0},model:{value:t.member,callback:function(e){t.member=e},expression:"member"}})],1),t._v(" "),e("div",{staticClass:"buttons",attrs:{slot:"actions"},slot:"actions"},[e("button",{staticClass:"btn role-secondary mr-10",on:{click:t.close}},[t._v("\n      "+t._s(t.t("generic.cancel"))+"\n    ")]),t._v(" "),t.saveInModal?e("AsyncButton",{attrs:{mode:"create"},on:{click:function(e){return t.saveBindings(e)}}}):e("button",{staticClass:"btn role-primary",on:{click:t.apply}},[t._v("\n      "+t._s(t.t("generic.add"))+"\n    ")])],1)])},a=[],o=r("ade3"),c=r("1da1"),s=r("a34a"),i=r.n(s),l=(r("96cf"),r("ac1f"),r("5319"),r("d81d"),r("e260"),r("d3b7"),r("e6cf"),r("3ca3"),r("ddb0"),r("d4bf")),u=r("4812"),d=r("67c9"),p=r("01ba"),f=r("a788"),m={components:{Card:l["a"],ProjectMemberEditor:u["a"],AsyncButton:d["b"],Banner:p["a"]},props:{resources:{type:Array,required:!0},onAdd:{type:Function,default:function(){}},projectId:{type:String,default:null},saveInModal:{type:Boolean,default:!1}},data:function(){return{member:{permissionGroup:"member",custom:{},principalId:"",roleTemplateIds:[]},error:null}},computed:{principal:function(){var t=this.member.principalId.replace(/\//g,"%2F");return this.$store.dispatch("rancher/find",{type:f["L"].PRINCIPAL,id:this.member.principalId,opt:{url:"/v3/principals/".concat(t)}},{root:!0})}},methods:{principalProperty:function(){var t=this;return Object(c["a"])(i.a.mark((function e(){var r;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.principal;case 2:return r=e.sent,e.abrupt("return","group"===(null===r||void 0===r?void 0:r.principalType)?"groupPrincipalId":"userPrincipalId");case 4:case"end":return e.stop()}}),e)})))()},close:function(){this.$emit("close")},apply:function(){var t=this;return Object(c["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,t.createBindings();case 3:e.t1=e.sent,e.t0.onAdd.call(e.t0,e.t1),t.close();case 6:case"end":return e.stop()}}),e)})))()},createBindings:function(){var t=this;return Object(c["a"])(i.a.mark((function e(){var r,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.principalProperty();case 2:return r=e.sent,n=t.member.roleTemplateIds.map((function(e){var n;return t.$store.dispatch("rancher/create",(n={type:f["L"].PROJECT_ROLE_TEMPLATE_BINDING,roleTemplateId:e},Object(o["a"])(n,r,t.member.principalId),Object(o["a"])(n,"projectId",t.projectId),n))})),e.abrupt("return",Promise.all(n));case 5:case"end":return e.stop()}}),e)})))()},saveBindings:function(t){var e=this;this.error=null,this.createBindings().then((function(t){return Promise.all(t.map((function(t){return t.save()})))})).then((function(){t(!0),setTimeout(e.close,500)})).catch((function(r){e.error=r,t(!1)}))}}},b=m,v=(r("c106f"),r("5d08"),r("0c7c")),h=Object(v["a"])(b,n,a,!1,null,"1f9f799a",null);e["default"]=h.exports}}]);
//# sourceMappingURL=dialog6.f75f2d25.js.map