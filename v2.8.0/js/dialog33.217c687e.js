(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog33"],{"08c8":function(e,t,a){var s=a("4bad");t=s(!1),t.push([e.i,".prompt-restore[data-v-67f5a913]{margin:0}.buttons[data-v-67f5a913]{display:flex;justify-content:flex-end;width:100%}",""]),e.exports=t},d295:function(e,t,a){"use strict";a.r(t);a("b0c0");var s=function(){var e=this,t=e._self._c;return t("Card",{staticClass:"prompt-restore",attrs:{"show-highlight-border":!1}},[t("h4",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.t("promptSaveAsRKETemplate.title",{cluster:e.cluster.displayName},!0),expression:"t('promptSaveAsRKETemplate.title', { cluster: cluster.displayName }, true)"}],staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"}),e._v(" "),t("div",{staticClass:"pl-10 pr-10",attrs:{slot:"body"},slot:"body"},[t("form",[t("p",{staticClass:"pt-10 pb-10"},[e._v("\n        "+e._s(e.t("promptSaveAsRKETemplate.description"))+"\n      ")]),e._v(" "),t("Banner",{attrs:{color:"warning","label-key":"promptSaveAsRKETemplate.warning"}}),e._v(" "),t("LabeledInput",{ref:"templateName",attrs:{label:e.t("promptSaveAsRKETemplate.name"),required:!0},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)]),e._v(" "),t("div",{staticClass:"buttons",attrs:{slot:"actions"},slot:"actions"},[t("button",{staticClass:"btn role-secondary mr-10",on:{click:e.close}},[e._v("\n      "+e._s(e.t("generic.cancel"))+"\n    ")]),e._v(" "),t("AsyncButton",{attrs:{mode:"create",disabled:e.name.length<=0},on:{click:e.apply}}),e._v(" "),e._l(e.errors,(function(e,a){return t("Banner",{key:a,attrs:{color:"error",label:e}})}))],2)])},r=[],n=a("1da1"),c=a("a34a"),l=a.n(c),o=(a("96cf"),a("ac1f"),a("5319"),a("67c9")),i=a("d4bf"),p=a("bec1"),u=a("84d3"),d=a("4579"),m="v1",f={components:{Card:i["a"],AsyncButton:o["b"],Banner:p["a"],LabeledInput:u["a"]},props:{cluster:{type:Object,default:function(){return{}}}},data:function(){return{errors:[],name:""}},mounted:function(){var e=this;this.$nextTick((function(){e.$refs.templateName.focus()}))},methods:{close:function(){this.$emit("close")},apply:function(e){var t=this;return Object(n["a"])(l.a.mark((function a(){return l.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$store.dispatch("rancher/request",{url:"/v3/clusters/".concat(escape(t.cluster.name),"?action=saveAsTemplate"),method:"post",data:{clusterTemplateName:t.name,clusterTemplateRevisionName:m}});case 3:e(!0),t.close(),t.$router.replace({name:"c-cluster-manager-pages-page",params:{cluster:"local",page:"rke-templates"}}),a.next=12;break;case 8:a.prev=8,a.t0=a["catch"](0),t.errors=Object(d["c"])(a.t0),e(!1);case 12:case"end":return a.stop()}}),a,null,[[0,8]])})))()}}},v=f,b=(a("d401"),a("0c7c")),h=Object(b["a"])(v,s,r,!1,null,"67f5a913",null);t["default"]=h.exports},d401:function(e,t,a){"use strict";a("db5d")},db5d:function(e,t,a){var s=a("08c8");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var r=a("499e").default;r("1c5809ee",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=dialog33.217c687e.js.map