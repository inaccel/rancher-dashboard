(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/explorer/ConfigBadge"],{a476:function(a,e,t){"use strict";t("d9da")},d9da:function(a,e,t){var s=t("fb8e");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);var d=t("499e").default;d("35e32e41",s,!0,{sourceMap:!1,shadowMode:!1})},e034:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a._self._c;return e("div",{staticClass:"config-badge"},[e("div",[e("a",{staticClass:"badge-install",attrs:{"data-testid":"add-custom-cluster-badge"},on:{click:a.customBadgeDialog}},[e("i",{staticClass:"icon icon-cluster"}),a._v(" "),a.hasBadge?e("span",[a._v(a._s(a.t("clusterBadge.editLabel")))]):e("span",[a._v(a._s(a.t("clusterBadge.addLabel")))])])])])},d=[],i={props:{cluster:{type:Object,required:!0}},name:"ConfigBadge",computed:{hasBadge:function(){var a;return!(null===(a=this.cluster)||void 0===a||!a.badge)}},methods:{customBadgeDialog:function(){this.$store.dispatch("cluster/promptModal",{component:"AddCustomBadgeDialog"})}}},l=i,o=(t("a476"),t("0c7c")),n=Object(o["a"])(l,s,d,!1,null,"7d7aa798",null);e["default"]=n.exports},fb8e:function(a,e,t){var s=t("4bad");e=s(!1),e.push([a.i,".badge-install[data-v-7d7aa798]:hover{cursor:pointer}.badge-install[data-v-7d7aa798]{display:flex;margin-left:10px}.badge-install>I[data-v-7d7aa798]{line-height:inherit;margin-right:4px}.badge-install[data-v-7d7aa798]:focus{outline:0}",""]),a.exports=e}}]);
//# sourceMappingURL=ConfigBadge.94addc19.js.map