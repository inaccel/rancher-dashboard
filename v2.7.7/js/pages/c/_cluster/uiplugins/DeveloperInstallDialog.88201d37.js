(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/uiplugins/DeveloperInstallDialog"],{"17b9":function(e,t,a){var n=a("4bad");t=n(!1),t.push([e.i,".plugin-install-dialog[data-v-c8f2eee2]{padding:10px}.plugin-install-dialog h4[data-v-c8f2eee2]{font-weight:700}.plugin-install-dialog .dialog-panel[data-v-c8f2eee2]{display:flex;flex-direction:column;min-height:100px}.plugin-install-dialog .dialog-panel p[data-v-c8f2eee2]{margin-bottom:5px}.plugin-install-dialog .dialog-panel .dialog-info[data-v-c8f2eee2]{flex:1}.plugin-install-dialog .dialog-panel .toggle-advanced[data-v-c8f2eee2]{display:flex;align-items:center;cursor:pointer;margin:10px 0}.plugin-install-dialog .dialog-panel .toggle-advanced[data-v-c8f2eee2]:hover{text-decoration:none;color:var(--link)}.plugin-install-dialog .dialog-panel .version-selector[data-v-c8f2eee2]{margin:0 10px 10px 10px;width:auto}.plugin-install-dialog .dialog-buttons[data-v-c8f2eee2]{display:flex;justify-content:flex-end;margin-top:10px}.plugin-install-dialog .dialog-buttons[data-v-c8f2eee2]>:not(:last-child){margin-right:10px}",""]),e.exports=t},"46cd":function(e,t,a){var n=a("17b9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var l=a("499e").default;l("8fec0bec",n,!0,{sourceMap:!1,shadowMode:!1})},9744:function(e,t,a){"use strict";a.r(t);a("b0c0");var n=function(){var e=this,t=e._self._c;return t("modal",{attrs:{name:"developerInstallPluginDialog",height:"auto",scrollable:!0}},[t("div",{staticClass:"plugin-install-dialog"},[t("h4",[e._v("\n      "+e._s(e.t("plugins.developer.title"))+"\n    ")]),e._v(" "),t("p",[e._v("\n      "+e._s(e.t("plugins.developer.prompt"))+"\n    ")]),e._v(" "),t("div",{staticClass:"custom mt-10"},[t("div",{staticClass:"fields"},[t("LabeledInput",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{"label-key":"plugins.developer.fields.url"},on:{input:e.updateLocation},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}})],1)]),e._v(" "),t("div",{staticClass:"custom mt-10"},[t("div",{staticClass:"fields"},[t("LabeledInput",{attrs:{"label-key":"plugins.developer.fields.name"},on:{input:e.updateName},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t("div",{staticClass:"fields mt-10"},[t("Checkbox",{attrs:{"label-key":"plugins.developer.fields.persist"},model:{value:e.persist,callback:function(t){e.persist=t},expression:"persist"}})],1),e._v(" "),t("div",{staticClass:"dialog-buttons mt-20"},[t("button",{staticClass:"btn role-secondary",attrs:{"data-testid":"dev-install-ext-modal-cancel-btn"},on:{click:function(t){return e.closeDialog()}}},[e._v("\n          "+e._s(e.t("generic.cancel"))+"\n        ")]),e._v(" "),t("AsyncButton",{attrs:{mode:"load","data-testid":"dev-install-ext-modal-install-btn"},on:{click:e.loadPlugin}})],1)])])])},l=[],i=a("53ca"),o=a("1da1"),s=a("a34a"),c=a.n(s),d=(a("96cf"),a("99af"),a("a15b"),a("67c9")),r=a("84d3"),u=a("bd30"),p=a("a788"),g=a("7600"),f={components:{AsyncButton:d["b"],Checkbox:u["a"],LabeledInput:r["a"]},data:function(){return{name:"",location:"",persist:!1,canModifyName:!0,canModifyLocation:!0}},watch:{name:function(e,t){this.canModifyLocation&&(this.location="/pkg/".concat(e,"/").concat(e,".umd.min.js"))},location:function(e,t){if(this.canModifyName){var a=e.split("/"),n=a[a.length-1],l=n.indexOf(".umd.min.js");-1!==l?n=n.substr(0,l):(l=n.indexOf(".umd.js"),-1!==l&&(n=n.substr(0,l))),this.name=n}}},methods:{showDialog:function(){this.$modal.show("developerInstallPluginDialog")},closeDialog:function(e){this.$modal.hide("developerInstallPluginDialog"),this.$emit("closed",e)},updateName:function(e){this.canModifyName=0===e.length},updateLocation:function(e){this.canModifyLocation=0===e.length},loadPlugin:function(e){var t=this;return Object(o["a"])(c.a.mark((function a(){var n,l,o,s,d,r,u,f;return c.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.name,l=t.location,n||(o=l.split("/"),s=o[o.length-1],n=s.split(".")[0]),d="0.0.1",r=n,u=n.split("-"),u.length>=2&&(d=u.pop(),r=u.join("-")),!t.persist){a.next=20;break}return a.next=10,t.$store.dispatch("management/create",{type:p["Z"],metadata:{name:n,namespace:g["k"]},spec:{plugin:{name:r,version:d,endpoint:l,noCache:!0,metadata:{developer:"true",direct:"true"}}}});case 10:return f=a.sent,a.prev=11,a.next=14,f.save({url:"/v1/".concat(p["Z"]),method:"POST"});case 14:a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](11),console.error("Could not create CRD for plugin",a.t0),e(!1);case 20:t.$plugin.loadAsync(n,l).then((function(){t.closeDialog(!0),t.$store.dispatch("growl/success",{title:t.t("plugins.success.title",{name:n}),message:t.t("plugins.success.message"),timeout:3e3},{root:!0}),e(!0)})).catch((function(a){e(!1);var n="object"===Object(i["a"])(a)?t.t("plugins.error.message"):a;t.$store.dispatch("growl/error",{title:t.t("plugins.error.title"),message:n,timeout:5e3},{root:!0})}));case 21:case"end":return a.stop()}}),a,null,[[11,16]])})))()}}},m=f,v=(a("b07c"),a("0c7c")),h=Object(v["a"])(m,n,l,!1,null,"c8f2eee2",null);t["default"]=h.exports},b07c:function(e,t,a){"use strict";a("46cd")}}]);
//# sourceMappingURL=DeveloperInstallDialog.88201d37.js.map