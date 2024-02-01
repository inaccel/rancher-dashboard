(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dialog24"],{2836:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;return t("Card",{staticClass:"prompt-rollback",attrs:{"show-highlight-border":!1}},[t("h4",{staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"},[e._v("\n    "+e._s(e.t("promptRollback.modalTitle",{workloadName:e.workloadName},!0))+"\n  ")]),e._v(" "),t("div",{staticClass:"pl-10 pr-10",attrs:{slot:"body"},slot:"body"},[1===e.revisions.length?t("Banner",{attrs:{color:"info",label:e.t("promptRollback.singleRevisionBanner")}}):e._e(),e._v(" "),t("form",[t("LabeledSelect",{staticClass:"provider",attrs:{label:e.t("promptRollback.dropdownTitle"),placeholder:e.t("promptRollback.placeholder"),options:e.revisions,"get-option-label":e.getOptionLabel},model:{value:e.selectedRevision,callback:function(t){e.selectedRevision=t},expression:"selectedRevision"}})],1),e._v(" "),e._l(e.errors,(function(e,o){return t("Banner",{key:o,attrs:{color:"error",label:e}})})),e._v(" "),e.selectedRevision&&e.showDiff?t("YamlEditor",{key:e.selectedRevisionId,staticClass:"mt-10",attrs:{"initial-yaml-values":e.sanitizeYaml(e.currentRevision),"editor-mode":e.editorMode,"as-object":!0},model:{value:e.sanitizedSelectedRevision,callback:function(t){e.sanitizedSelectedRevision=t},expression:"sanitizedSelectedRevision"}}):e._e()],2),e._v(" "),t("div",{staticClass:"buttons",attrs:{slot:"actions"},slot:"actions"},[t("div",{staticClass:"left"},[t("button",{staticClass:"btn role-secondary diff",attrs:{disabled:!e.selectedRevision},on:{click:function(t){e.showDiff=!e.showDiff,e.sizeDialog()}}},[e._v("\n        "+e._s(e.showDiff?e.t("resourceYaml.buttons.hideDiff"):e.t("resourceYaml.buttons.diff"))+"\n      ")])]),e._v(" "),t("div",{staticClass:"right"},[t("button",{staticClass:"btn role-secondary mr-10",on:{click:e.close}},[e._v("\n        "+e._s(e.t("generic.cancel"))+"\n      ")]),e._v(" "),t("AsyncButton",{attrs:{"action-label":e.t("asyncButton.rollback.action"),disabled:!e.selectedRevision,"get-option-label":"getOptionLabel","right-align":!0},on:{click:e.save}})],1)])])},a=[],i=(o("a4d3"),o("e439"),o("dbb4"),o("53ca")),n=o("1da1"),s=o("ade3"),c=o("2909"),l=o("a34a"),d=o.n(l),u=(o("96cf"),o("99af"),o("d3b7"),o("b0c0"),o("4de4"),o("4e82"),o("d81d"),o("159b"),o("b64b"),o("67c9")),b=o("5a0c"),p=o.n(b),f=o("d4bf"),v=o("4579"),m=o("a95f"),h=o("bec1"),w=o("8366"),k=o("a788"),O=o("76d1"),y=o("2f62"),g=o("f29a"),R=o("e528"),j=o("2c94");function _(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function C(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?_(Object(o),!0).forEach((function(t){Object(s["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var x=["metadata.labels.pod-template-hash","spec.selector.matchLabels.pod-template-hash","spec.template.metadata.labels.pod-template-hash","metadata.fields"],D=[].concat(Object(c["a"])(g["a"]),Object(c["a"])(g["b"]),x),N=D.reduce((function(e,t){return e[t]=!0,e}),{}),T={components:{Card:f["a"],AsyncButton:u["b"],LabeledSelect:m["a"],Banner:h["a"],YamlEditor:w["b"]},props:{workload:{type:Object,required:!0}},data:function(){return{errors:[],selectedRevision:null,currentRevision:null,revisions:[],editorMode:w["a"].DIFF_CODE,showDiff:!1}},computed:C(C(C({},Object(y["b"])({t:"i18n/t"})),Object(y["b"])(["currentCluster"])),{},{workloadName:function(){return this.workload.metadata.name},workloadNamespace:function(){return this.workload.metadata.namespace},workloadType:function(){return this.workload.kind.toLowerCase()},revisionsType:function(){return"deployment"===this.workloadType?k["eb"].REPLICA_SET:"apps.controllerrevision"},selectedRevisionId:function(){return this.selectedRevision.id},sanitizedSelectedRevision:function(){return this.sanitizeYaml(this.selectedRevision)},timeFormatStr:function(){var e=Object(j["h"])(this.$store.getters["prefs/get"](R["DATE_FORMAT"])),t=Object(j["h"])(this.$store.getters["prefs/get"](R["TIME_FORMAT"]));return"".concat(e,", ").concat(t)}}),fetch:function(){var e=this;this.$store.dispatch("cluster/findAll",{type:this.revisionsType}).then((function(t){var o=t,r=function(t){var o=t.metadata.relationships,r=o.filter((function(t){var o=t.fromId&&t.fromId==="".concat(e.workloadNamespace,"/").concat(e.workloadName);return o}));return r.length>0},a=o.filter((function(e){return r(e)})),i=a.map((function(t){return e.isCurrentRevision(t)&&(e.currentRevision=t),e.buildRevisionOption(t)})).sort((function(e,t){return t.revisionNumber-e.revisionNumber}));e.revisions=i})).catch((function(t){e.errors=Object(v["c"])(t)}))},methods:{close:function(){this.$emit("close")},save:function(){var e=this;return Object(n["a"])(d.a.mark((function t(){return d.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.workload.rollBack(e.currentCluster,e.workload,e.selectedRevision);case 3:e.close(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.errors=Object(v["c"])(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},isCurrentRevision:function(e){return e.revisionNumber===this.workload.currentRevisionNumber},buildRevisionOption:function(e){var t=e.revisionNumber,o=this.isCurrentRevision(e),r=p()(),a=p()(e.metadata.creationTimestamp),i=a.format(this.timeFormatStr),n=Object(O["a"])(a,r,this.t),s="".concat(i,", ").concat(n.label),c=this.t(n.unitsKey,{count:n.label}),l=this.t("promptRollback.currentLabel"),d=this.t("promptRollback.revisionOption",{revisionNumber:t,revisionAge:s,units:c,currentLabel:o?l:""});return{label:d,value:e,disabled:o,revisionNumber:t}},getOptionLabel:function(e){return e.label},sizeDialog:function(){var e=document.getElementsByClassName("v--modal"),t=this.showDiff?"85%":"600px";1===e.length&&e[0].style.setProperty("--prompt-modal-width",t)},sanitizeYaml:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r={};return e?(Object.keys(e).forEach((function(a){var n=o?"".concat(o,".").concat(a):a;N[n]||(r[a]=e[a],"object"!==Object(i["a"])(e[a])||Array.isArray(e[a])||(r[a]=t.sanitizeYaml(e[a],n)))})),r):e}}},E=T,S=(o("4a7f"),o("0c7c")),z=Object(S["a"])(E,r,a,!1,null,"7c4b6c01",null);t["default"]=z.exports},"4a7f":function(e,t,o){"use strict";o("ea5c")},be2b:function(e,t,o){var r=o("4bad");t=r(!1),t.push([e.i,".prompt-rollback[data-v-7c4b6c01]{margin:0}.prompt-rollback[data-v-7c4b6c01] .card-actions{display:grid}.yaml-editor[data-v-7c4b6c01]{max-height:70vh}.yaml-editor[data-v-7c4b6c01].root{max-height:65vh}.diff[data-v-7c4b6c01]:disabled{border:none}.diff[data-v-7c4b6c01]:focus{background:transparent;box-shadow:none}[data-v-7c4b6c01] .card-body{max-height:calc(95vh - 135px);overflow:hidden}",""]),e.exports=t},ea5c:function(e,t,o){var r=o("be2b");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=o("499e").default;a("6feb06e4",r,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=dialog24.c2e54510.js.map