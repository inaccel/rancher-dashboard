(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/uiplugins/UninstallDialog"],{"39c9":function(t,n,e){"use strict";e("8454")},8454:function(t,n,e){var a=e("b4b9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("499e").default;i("3eb2a8ca",a,!0,{sourceMap:!1,shadowMode:!1})},"94af":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t._self._c;return n("modal",{attrs:{name:"uninstallPluginDialog",height:"auto",scrollable:!0}},[t.plugin?n("div",{staticClass:"plugin-install-dialog"},[n("h4",{staticClass:"mt-10"},[t._v("\n      "+t._s(t.t("plugins.uninstall.title",{name:t.plugin.label}))+"\n    ")]),t._v(" "),n("div",{staticClass:"mt-10 dialog-panel"},[n("div",{staticClass:"dialog-info"},[n("p",[t._v("\n          "+t._s(t.t("plugins.uninstall.prompt"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"dialog-buttons"},[n("button",{staticClass:"btn role-secondary",attrs:{disabled:t.busy,"data-testid":"uninstall-ext-modal-cancel-btn"},on:{click:function(n){return t.closeDialog(!1)}}},[t._v("\n          "+t._s(t.t("generic.cancel"))+"\n        ")]),t._v(" "),n("AsyncButton",{attrs:{mode:"uninstall","data-testid":"uninstall-ext-modal-uninstall-btn"},on:{click:function(n){return t.uninstall()}}})],1)])]):t._e()])},i=[],l=(e("b64b"),e("a4d3"),e("4de4"),e("e439"),e("159b"),e("dbb4"),e("1da1")),s=e("ade3"),o=e("a34a"),r=e.n(o),c=(e("96cf"),e("b0c0"),e("7db0"),e("d3b7"),e("2f62")),u=e("67c9"),d=e("a788"),b=e("7600");function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function g(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){Object(s["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f={components:{AsyncButton:u["b"]},data:function(){return{plugin:void 0,busy:!1}},computed:g({},Object(c["b"])({allCharts:"catalog/charts"})),methods:{showDialog:function(t){this.plugin=t,this.busy=!1,this.$modal.show("uninstallPluginDialog")},closeDialog:function(t){this.$modal.hide("uninstallPluginDialog"),this.$emit("closed",t)},uninstall:function(){var t=this;return Object(l["a"])(r.a.mark((function n(){var e,a,i,l;return r.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.busy=!0,a=t.plugin,t.$emit("update",a.name,"uninstall"),null===(e=a.uiplugin)||void 0===e||!e.isDeveloper){n.next=6;break}return n.next=6,a.uiplugin.remove();case 6:return n.next=8,t.$store.dispatch("management/findAll",{type:d["f"].APP});case 8:if(i=n.sent,l=i.find((function(t){return t.namespace===b["k"]&&t.name===a.name})),!l){n.next=21;break}return n.prev=11,n.next=14,l.remove();case 14:n.next=19;break;case 16:n.prev=16,n.t0=n["catch"](11),t.$store.dispatch("growl/error",{title:t.t("plugins.error.generic"),message:n.t0.message?n.t0.message:n.t0,timeout:1e4},{root:!0});case 19:return n.next=21,t.$store.dispatch("management/findAll",{type:d["f"].OPERATION});case 21:t.closeDialog(a);case 22:case"end":return n.stop()}}),n,null,[[11,16]])})))()}}},m=f,v=(e("39c9"),e("0c7c")),h=Object(v["a"])(m,a,i,!1,null,"bb2b0e6c",null);n["default"]=h.exports},b4b9:function(t,n,e){var a=e("4bad");n=a(!1),n.push([t.i,".plugin-install-dialog[data-v-bb2b0e6c]{padding:10px}.plugin-install-dialog h4[data-v-bb2b0e6c]{font-weight:700}.plugin-install-dialog .dialog-panel[data-v-bb2b0e6c]{display:flex;flex-direction:column;min-height:100px}.plugin-install-dialog .dialog-panel .dialog-info[data-v-bb2b0e6c]{flex:1}.plugin-install-dialog .dialog-buttons[data-v-bb2b0e6c]{display:flex;justify-content:flex-end;margin-top:10px}.plugin-install-dialog .dialog-buttons[data-v-bb2b0e6c]>:not(:last-child){margin-right:10px}",""]),t.exports=n}}]);
//# sourceMappingURL=UninstallDialog.351426d0.js.map