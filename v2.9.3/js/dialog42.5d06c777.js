(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog42"],{"17fd":function(t,e,o){var s=o("4bad");e=s(!1),e.push([t.i,".actions[data-v-072b5e92]{text-align:right}",""]),t.exports=e},"41f6":function(t,e,o){"use strict";o("efa4")},efa4:function(t,e,o){var s=o("17fd");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var r=o("499e").default;r("53eac15a",s,!0,{sourceMap:!1,shadowMode:!1})},f915:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;return e("Card",{staticClass:"prompt-remove",attrs:{"show-highlight-border":!1},scopedSlots:t._u([{key:"actions",fn:function(){return[e("button",{staticClass:"btn role-secondary mr-10",on:{click:t.close}},[t._v("\n      "+t._s(t.t("generic.cancel"))+"\n    ")]),t._v(" "),e("div",{staticClass:"spacer"}),t._v(" "),e("button",{staticClass:"btn bg-error ml-10 btn role-primary",on:{click:t.remove}},[t._v("\n      "+t._s(t.t("generic.confirm"))+"\n    ")])]},proxy:!0}])},[e("h4",{staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"},[t._v("\n    "+t._s(t.t("promptForceRemove.modalTitle"))+"\n  ")]),t._v(" "),e("div",{staticClass:"pl-10 pr-10",attrs:{slot:"body"},slot:"body"},[e("div",[t._v("\n      "+t._s(t.t("promptRemove.attemptingToRemove",{type:t.type}))+" "),e("b",[t._v(t._s(t.machinenName))])]),t._v(" "),e("div",[e("Checkbox",{staticClass:"mt-10",attrs:{label:t.t("promptRemove.promptConfirmation")},on:{input:function(e){return t.update()}},model:{value:t.promptConfirmation,callback:function(e){t.promptConfirmation=e},expression:"promptConfirmation"}})],1),t._v(" "),e("div",{staticClass:"text-info mt-20"},[t._v("\n      "+t._s(t.protip)+"\n    ")])])])},r=[],i=o("d4bf"),n=o("1227"),a=o("4de2"),c=o("e528"),p={components:{Card:i["a"],Checkbox:a["a"]},props:{resources:{type:Array,required:!0}},data:function(){var t=Array.isArray(this.resources)?this.resources:[this.resources];return{allToDelete:t,type:this.$store.getters["type-map/labelFor"](t[0].schema,t.length),promptConfirmation:!0}},computed:{machinenName:function(){var t=this.resources.length>0?this.resources[0].id.split("/")[1]:"";return t},protip:function(){return this.t("promptRemove.protip",{alternateLabel:n["b"]})}},created:function(){var t=this.$store.getters["prefs/get"](c["SCALE_POOL_PROMPT"]);null===t?(this.promptConfirmation=!0,this.$store.dispatch("prefs/set",{key:c["SCALE_POOL_PROMPT"],value:!0})):this.promptConfirmation=t},methods:{close:function(){this.$emit("close")},update:function(){this.$store.dispatch("prefs/set",{key:c["SCALE_POOL_PROMPT"],value:!!this.promptConfirmation})},remove:function(){this.resources.length>0&&this.resources[0].scalePool(-1),this.close()}}},l=p,u=(o("41f6"),o("0c7c")),m=Object(u["a"])(l,s,r,!1,null,"072b5e92",null);e["default"]=m.exports}}]);
//# sourceMappingURL=dialog42.5d06c777.js.map