(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cfdb8cea"],{"3bfd":function(e,a,t){"use strict";t("4227")},4227:function(e,a,t){var i=t("c6bc");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("499e").default;n("3c2bdb94",i,!0,{sourceMap:!1,shadowMode:!1})},8596:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"pipelines"},[a("Tabbed",{ref:"tabs",attrs:{"use-hash":!1,"no-content":!0},on:{changed:e.tabChanged}},[a("Tab",{attrs:{name:"pipelines","label-key":"legacy.pipelines",weight:3}}),e._v(" "),a("Tab",{attrs:{name:"configuration","label-key":"legacy.configuration",weight:2}})],1),e._v(" "),a("div",{staticClass:"embed-pipelines",attrs:{id:"legacy-pipelines"}},[e.pipelinesPage?a("EmberPage",{attrs:{inline:"legacy-pipelines",src:e.pipelinesPage,"force-inline-reuse":!0},on:{"before-nav":e.intercept}}):e._e()],1)],1)},n=[],s=(t("ac1f"),t("5319"),t("99af"),t("b0c0"),t("d513")),c=t("a4d2"),p=t("f38f"),l=t("9bc6"),r={pipelines:"pipeline/pipelines",configuration:"pipeline"},o={components:{EmberPage:s["a"],Tabbed:c["a"],Tab:p["a"]},data:function(){return{activeTab:null}},computed:{pipelinesPage:function(){var e=Object(l["project"])(this.$store.getters);if(e&&this.activeTab){var a=e.id.replace("/",":"),t=r[this.activeTab];return"/p/".concat(a,"/").concat(t)}return""}},methods:{tabChanged:function(e){this.activeTab=e.tab.name},intercept:function(e){"authenticated.project.pipeline.settings"===e&&this.$refs.tabs.select("configuration")}}},b=o,d=(t("3bfd"),t("0c7c")),f=Object(d["a"])(b,i,n,!1,null,"bd3f81b8",null);a["default"]=f.exports},c6bc:function(e,a,t){var i=t("4bad");a=i(!1),a.push([e.i,".pipelines[data-v-bd3f81b8]{display:flex}.pipelines .embed-pipelines[data-v-bd3f81b8]{flex:1}",""]),e.exports=a}}]);
//# sourceMappingURL=chunk-cfdb8cea.c22d9bb6.js.map