(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/_product/members/index"],{"3852c":function(e,t,r){var n=r("84f9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=r("499e").default;a("457690a7",n,!0,{sourceMap:!1,shadowMode:!1})},"6d00":function(e,t,r){"use strict";r("3852c")},"84f9":function(e,t,r){var n=r("4bad");t=n(!1),t.push([e.i,".role[data-v-2b9882d0]{align-items:center;background-color:rgba(0,0,0,.05);border:1px solid var(--header-border);border-radius:5px;color:var(--tag-text);line-height:20px;padding:2px 5px;white-space:nowrap;display:inline-flex;margin-right:3px}.role-value.text-link-enabled[data-v-2b9882d0]{cursor:pointer}.role-value.text-link-enabled[data-v-2b9882d0]:hover{color:var(--primary)}.role-value+.icon-close[data-v-2b9882d0]{margin-left:3px;cursor:pointer}.role-value+.icon-close[data-v-2b9882d0]:hover{color:var(--primary)}.project-members[data-v-2b9882d0] .group-bar{display:flex;justify-content:space-between}.cluster-add[data-v-2b9882d0]{justify-content:flex-end}",""]),e.exports=t},"8b11":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("ExplorerMembers",e._b({},"ExplorerMembers",e.$attrs,!1))},a=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"project-members"},[t("Masthead",{attrs:{schema:e.schema,resource:e.resource,"favorite-resource":e.VIRTUAL_TYPES.CLUSTER_MEMBERS,"create-location":e.createLocation,"create-button-label":e.t("members.createActionLabel"),"is-creatable":!1,"type-display":e.t("members.clusterAndProject")}}),e._v(" "),e.isLocal?t("Banner",{attrs:{color:"error",label:e.t("members.localClusterWarning")}}):e._e(),e._v(" "),t("Tabbed",[t("Tab",{attrs:{name:"cluster-membership",label:e.t("members.clusterMemebership")}},[e.canEditClusterMembers?t("div",{staticClass:"row mb-10 cluster-add"},[t("n-link",{staticClass:"btn role-primary pull-right",attrs:{to:e.createLocation}},[e._v("\n          "+e._s(e.t("members.createActionLabel"))+"\n        ")])],1):e._e(),e._v(" "),t("ResourceTable",{attrs:{schema:e.schema,headers:e.headers,rows:e.filteredClusterRoleTemplateBindings,groupable:!0,"show-grouping":!0,namespaced:!1,loading:e.$fetchState.pending||!e.currentCluster||e.loadingClusterBindings,"sub-search":"subSearch","sub-fields":["nameDisplay"]}})],1),e._v(" "),e.canManageProjectMembers?t("Tab",{attrs:{name:"project-membership",label:e.t("members.projectMembership")}},[t("SortableTable",{attrs:{"group-by":"projectId",loading:e.$fetchState.pending||!e.currentCluster||e.loadingProjectBindings,rows:e.rowsWithFakeProjects,headers:e.projectRoleTemplateColumns,"table-actions":!1,"row-actions":!1},scopedSlots:e._u([{key:"group-by",fn:function(r){return[t("div",{staticClass:"group-bar"},[t("div",{directives:[{name:"trim-whitespace",rawName:"v-trim-whitespace"}],staticClass:"group-tab"},[t("div",{directives:[{name:"clean-html",rawName:"v-clean-html",value:e.getProjectLabel(r),expression:"getProjectLabel(group)"}],staticClass:"project-name"})]),e._v(" "),t("div",{staticClass:"right"},[e.canEditProjectMembers?t("button",{staticClass:"create-namespace btn btn-sm role-secondary mr-10 right",attrs:{type:"button"},on:{click:function(t){return e.addProjectMember(r)}}},[e._v("\n                "+e._s(e.t("members.createActionLabel"))+"\n              ")]):e._e()])])]}},{key:"cell:role",fn:function(r){var n=r.row;return e._l(n.allRoles,(function(r,a){return t("span",{key:a,ref:"value",refInFor:!0,staticClass:"role",attrs:{"data-testid":"role-value-".concat(a)}},[t("span",{staticClass:"role-value",class:{"text-link-enabled":n.canViewInApi},on:{click:function(t){return e.viewRoleInAPI(n,r)}}},[e._v("\n              "+e._s(r.nameDisplay)+"\n            ")]),e._v(" "),t("i",{staticClass:"icon icon-close",attrs:{"data-testid":"role-values-close-".concat(a)},on:{click:function(t){return e.removeRole(n,r,t)}}})])}))}},e._l(e.projectsWithoutRoles,(function(r){return{key:e.slotName(r),fn:function(){return[t("tr",{key:r.id,staticClass:"main-row"},[t("td",{staticClass:"empty text-center",attrs:{colspan:"100%"}},[e._v("\n              "+e._s(e.t("members.noRolesAssigned"))+"\n            ")])])]},proxy:!0}}))],null,!0)})],1):e._e()],1)],1)},s=[],c=(r("a4d3"),r("e439"),r("159b"),r("dbb4"),r("2909")),i=r("ade3"),l=r("3835"),u=r("1da1"),d=r("a34a"),p=r.n(d),m=(r("96cf"),r("e260"),r("d3b7"),r("e6cf"),r("3ca3"),r("ddb0"),r("d81d"),r("4de4"),r("ac1f"),r("5319"),r("caad"),r("2532"),r("b64b"),r("99af"),r("07ac"),r("7db0"),r("a788")),b=r("b178"),f=r("39ce"),h=r("9149"),v=r("e012"),g=r("01ba"),j=r("a4d2"),T=r("f38f"),P=r("40d2"),R=r("2f62"),_=r("997a"),y=r("fa98");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B={name:"ExplorerMembers",components:{Banner:g["a"],Masthead:f["a"],ResourceTable:b["a"],Tabbed:j["a"],Tab:T["a"],SortableTable:P["c"]},props:{createLocationOverride:{type:Object,default:function(){return{name:"c-cluster-product-resource-create",params:{resource:m["B"].CLUSTER_ROLE_TEMPLATE_BINDING}}}}},fetch:function(){var e=this;return Object(u["a"])(p.a.mark((function t(){var r,n,a;return p.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.getters["rancher/schemaFor"](m["H"].CLUSTER_ROLE_TEMPLATE_BINDING),n=e.$store.getters["rancher/schemaFor"](m["H"].PROJECT_ROLE_TEMPLATE_BINDING),e.$set(e,"normanClusterRTBSchema",r),e.$set(e,"normanProjectRTBSchema",n),r&&Promise.all([e.$store.dispatch("rancher/findAll",{type:m["H"].CLUSTER_ROLE_TEMPLATE_BINDING},{root:!0}),e.$store.dispatch("management/findAll",{type:m["B"].CLUSTER_ROLE_TEMPLATE_BINDING})]).then((function(t){var r=Object(l["a"])(t,1),n=r[0];e.$set(e,"normanClusterRoleTemplateBindings",n),e.loadingClusterBindings=!1})),n&&e.$store.dispatch("rancher/findAll",{type:m["H"].PROJECT_ROLE_TEMPLATE_BINDING},{root:!0}).then((function(t){e.$set(e,"projectRoleTemplateBindings",t),e.loadingProjectBindings=!1})),e.$store.dispatch("management/findAll",{type:m["B"].PROJECT}).then((function(t){return e.$set(e,"projects",t)})),a={normanPrincipals:e.$store.dispatch("rancher/findAll",{type:m["H"].PRINCIPAL}),mgmt:e.$store.dispatch("management/findAll",{type:m["B"].USER}),mgmtRoleTemplates:e.$store.dispatch("management/findAll",{type:m["B"].ROLE_TEMPLATE})},t.next=10,Object(y["a"])(a);case 10:case"end":return t.stop()}}),t)})))()},data:function(){return{schema:this.$store.getters["management/schemaFor"](m["B"].CLUSTER_ROLE_TEMPLATE_BINDING),headers:[h["yb"],h["jb"],h["sb"],h["b"]],createLocation:C(C({},this.createLocationOverride),{},{params:C(C({},this.createLocationOverride.params),{},{cluster:this.$store.getters["currentCluster"].id})}),resource:m["B"].CLUSTER_ROLE_TEMPLATE_BINDING,normanClusterRTBSchema:null,normanProjectRTBSchema:null,normanClusterRoleTemplateBindings:[],projectRoleTemplateBindings:[],projects:[],VIRTUAL_TYPES:m["db"],projectRoleTemplateColumns:[h["yb"],{name:"member",labeKey:"generic.name",value:"principalId",formatter:"Principal"},{name:"role",labelKey:"tableHeaders.role",value:"roleTemplate.nameDisplay"}],loadingProjectBindings:!0,loadingClusterBindings:!0}},computed:C(C({},Object(R["b"])(["currentCluster"])),{},{clusterRoleTemplateBindings:function(){return this.normanClusterRoleTemplateBindings.map((function(e){return e.clusterroletemplatebinding}))},filteredClusterRoleTemplateBindings:function(){var e=this;return this.clusterRoleTemplateBindings.filter((function(t){return(null===t||void 0===t?void 0:t.clusterName)===e.$store.getters["currentCluster"].id}))},filteredProjects:function(){var e=this;return this.projects.reduce((function(t,r){var n;return(null===r||void 0===r||null===(n=r.spec)||void 0===n?void 0:n.clusterName)===e.currentCluster.id&&(t[r.id]=r),t}),{})},filteredProjectRoleTemplateBindings:function(){var e=this,t=this.projectRoleTemplateBindings.filter((function(t){var r=t.projectId.replace(":","/");return!!e.filteredProjects[r]}));return t},projectsWithoutRoles:function(){var e=this,t=this.filteredProjectRoleTemplateBindings.reduce((function(e,t){var r=(t.projectId||"").replace(":","/");return e.includes(r)||e.push(r),e}),[]);return Object.keys(this.filteredProjects).reduce((function(r,n){var a=e.filteredProjects[n];return t.includes(n)||r.push(a),r}),[])},rowsWithFakeProjects:function(){var e=this.projectsWithoutRoles.map((function(e){var t;return{groupByLabel:"resourceTable.groupLabel.notInAProject".concat("-",e.id),isFake:!0,mainRowKey:e.id,nameDisplay:null===(t=e.spec)||void 0===t?void 0:t.displayName,project:e,availableActions:[],projectId:e.id}})),t=[].concat(Object(c["a"])(e),Object(c["a"])(this.filteredProjectRoleTemplateBindings)).reduce((function(e,t){var r=t.userId,n=t.groupPrincipalId,a=t.roleTemplate,o=t.projectId,s=r||n;if(!s)return e;var c=s+o;return e[c]||(e[c]=t,e[c].allRoles=[]),a&&e[c].allRoles.push(t.roleTemplate),e}),{});return Object.values(t)},canManageMembers:function(){return Object(v["a"])(this.$store)},canManageProjectMembers:function(){return Object(_["a"])(this.$store)},isLocal:function(){return this.$store.getters["currentCluster"].isLocal},canEditProjectMembers:function(){var e;return null===(e=this.normanProjectRTBSchema)||void 0===e?void 0:e.collectionMethods.find((function(e){return"post"===e.toLowerCase()}))},canEditClusterMembers:function(){var e;return null===(e=this.normanClusterRTBSchema)||void 0===e?void 0:e.collectionMethods.find((function(e){return"post"===e.toLowerCase()}))}}),methods:{getMgmtProjectId:function(e){return e.group.key.replace(":","/")},getMgmtProject:function(e){return this.$store.getters["management/byId"](m["B"].PROJECT,this.getMgmtProjectId(e))},getProjectLabel:function(e){var t,r;return null===(t=this.getMgmtProject(e))||void 0===t||null===(r=t.spec)||void 0===r?void 0:r.displayName},addProjectMember:function(e){this.$store.dispatch("cluster/promptModal",{component:"AddProjectMemberDialog",componentProps:{projectId:e.group.key.replace("/",":"),saveInModal:!0},modalSticky:!0})},getProjectRoleBinding:function(e,t){var r=e.userId?"userId":"groupPrincipalId";return this.projectRoleTemplateBindings.find((function(n){return n.projectId===e.projectId&&n.roleTemplateId===t.id&&n[r]===e[r]}))},removeRole:function(e,t,r){var n=this;return Object(u["a"])(p.a.mark((function r(){var a;return p.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getProjectRoleBinding(e,t),r.next=3,a.promptRemove();case 3:case"end":return r.stop()}}),r)})))()},viewRoleInAPI:function(e,t){var r=this.getProjectRoleBinding(e,t);null!==r&&void 0!==r&&r.canViewInApi&&r.viewInApi()},slotName:function(e){return"main-row:".concat(e.id)}}},I=B,O=(r("6d00"),r("0c7c")),L=Object(O["a"])(I,o,s,!1,null,"2b9882d0",null),w=L.exports,M={components:{ExplorerMembers:w}},A=M,x=Object(O["a"])(A,n,a,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=index.af70bc5a.js.map