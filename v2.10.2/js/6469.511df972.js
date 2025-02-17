"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[6469],{86469:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var s=a(20641),r=a(90033);const l={key:1},c={class:"title"},o={class:"m-0"},n={class:"actions-container"},h={class:"actions"};function i(e,t,a,i,u,b){const L=(0,s.g2)("Loading"),d=(0,s.g2)("router-link"),E=(0,s.g2)("Banner"),m=(0,s.g2)("ResourceTable"),T=(0,s.g2)("Tab"),R=(0,s.g2)("Tabbed"),y=(0,s.gN)("clean-html");return e.$fetchState.pending?((0,s.uX)(),(0,s.Wv)(L,{key:0})):((0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("header",null,[(0,s.Lk)("div",c,[(0,s.Lk)("h1",o,(0,r.toDisplayString)(e.t("auth.roleTemplate")),1)]),(0,s.eW)(),(0,s.Lk)("div",n,[(0,s.Lk)("div",h,[b.canCreate?((0,s.uX)(),(0,s.Wv)(d,{key:0,to:b.createLocation,class:"btn role-primary"},{default:(0,s.k6)((()=>[(0,s.eW)((0,r.toDisplayString)(b.createLabel),1)])),_:1},8,["to"])):(0,s.Q3)("",!0)])])]),(0,s.eW)(),(0,s.bF)(R,null,{default:(0,s.k6)((()=>[u.tabs[u.GLOBAL].canFetch?((0,s.uX)(),(0,s.Wv)(T,{key:0,name:u.GLOBAL,weight:u.tabs[u.GLOBAL].weight,"label-key":u.tabs[u.GLOBAL].labelKey},{default:(0,s.k6)((()=>[(0,s.bF)(E,{color:"warning",class:"mb-20"},{default:(0,s.k6)((()=>[(0,s.bo)((0,s.Lk)("span",null,null,512),[[y,e.t("rbac.globalRoles.role.restricted-admin.deprecation",{releaseNotesUrl:e.releaseNotesUrl},!0)]])])),_:1}),(0,s.eW)(),(0,s.bF)(m,{schema:u.tabs[u.GLOBAL].schema,rows:b.globalResources},null,8,["schema","rows"])])),_:1},8,["name","weight","label-key"])):(0,s.Q3)("",!0),(0,s.eW)(),u.tabs[u.CLUSTER].canFetch?((0,s.uX)(),(0,s.Wv)(T,{key:1,name:u.CLUSTER,weight:u.tabs[u.CLUSTER].weight,"label-key":u.tabs[u.CLUSTER].labelKey},{default:(0,s.k6)((()=>[(0,s.bF)(m,{schema:u.tabs[u.CLUSTER].schema,headers:u.tabs[u.CLUSTER].headers,rows:b.clusterResources},null,8,["schema","headers","rows"])])),_:1},8,["name","weight","label-key"])):(0,s.Q3)("",!0),(0,s.eW)(),u.tabs[u.PROJECT].canFetch?((0,s.uX)(),(0,s.Wv)(T,{key:2,name:u.PROJECT,weight:u.tabs[u.PROJECT].weight,"label-key":u.tabs[u.PROJECT].labelKey},{default:(0,s.k6)((()=>[(0,s.bF)(m,{schema:u.tabs[u.PROJECT].schema,headers:u.tabs[u.PROJECT].headers,rows:b.namespaceResources},null,8,["schema","headers","rows"])])),_:1},8,["name","weight","label-key"])):(0,s.Q3)("",!0)])),_:1})]))}var u=a(66278),b=a(70546),L=a(22415),d=a(45848),E=a(2803),m=a(45016),T=a(94999),R=a(57375),y=a(57949),g=a(17899);const A=T.SUBTYPE_MAPPING.GLOBAL.key,p=T.SUBTYPE_MAPPING.CLUSTER.key,P=T.SUBTYPE_MAPPING.NAMESPACE.key,C={name:`c-cluster-${R.NAME}-roles-resource-create`,params:{cluster:y.w,resource:d.Mc.GLOBAL_ROLE}},k={name:`c-cluster-${R.NAME}-roles-resource-create`,params:{cluster:y.w,resource:d.Mc.ROLE_TEMPLATE}},M={name:"Roles",components:{Tab:b.A,Tabbed:L.A,ResourceTable:E.A,Loading:m.A,Banner:g.l},async fetch(){const e=this.$store.getters["management/schemaFor"](d.Mc.GLOBAL_ROLE),t=this.$store.getters["management/schemaFor"](d.Mc.ROLE_TEMPLATE);this["globalRoles"]=e?await this.$store.dispatch("management/findAll",{type:d.Mc.GLOBAL_ROLE}):[],this["roleTemplates"]=t?await this.$store.dispatch("management/findAll",{type:d.Mc.ROLE_TEMPLATE}):[]},data(){const e=this.$store.getters["management/schemaFor"](d.Mc.GLOBAL_ROLE),t=this.$store.getters["management/schemaFor"](d.Mc.ROLE_TEMPLATE),a=this.$store.getters["type-map/headersFor"](t),s=a.findIndex((e=>"default"===e.name));return{tabs:{[A]:{canFetch:e?.collectionMethods.find((e=>"GET"===e)),canCreate:e?.resourceMethods.find((e=>T.CREATE_VERBS.has(e))),weight:3,labelKey:T.SUBTYPE_MAPPING.GLOBAL.labelKey,schema:e,createLocation:{...C,query:{roleContext:A}}},[p]:{canFetch:t?.collectionMethods.find((e=>"GET"===e)),canCreate:t?.resourceMethods.find((e=>T.CREATE_VERBS.has(e))),labelKey:T.SUBTYPE_MAPPING.CLUSTER.labelKey,weight:2,schema:t,headers:this.applyDefaultHeaderLabel(a,s,"tableHeaders.authRoles.clusterDefault"),createLocation:{...k,query:{roleContext:p}}},[P]:{canFetch:t?.collectionMethods.find((e=>"GET"===e)),canCreate:t?.resourceMethods.find((e=>T.CREATE_VERBS.has(e))),labelKey:T.SUBTYPE_MAPPING.NAMESPACE.labelKey,weight:1,schema:t,headers:this.applyDefaultHeaderLabel(a,s,"tableHeaders.authRoles.projectDefault"),createLocation:{...k,query:{roleContext:P}}}},GLOBAL:A,CLUSTER:p,PROJECT:P,globalRoles:null,roleTemplates:null}},computed:{...(0,u.L8)(["releaseNotesUrl"]),globalResources(){return this.globalRoles},clusterResources(){return this.roleTemplates.filter((e=>e.context===T.SUBTYPE_MAPPING.CLUSTER.context))},namespaceResources(){return this.roleTemplates.filter((e=>e.context===T.SUBTYPE_MAPPING.NAMESPACE.context))},type(){return this.$route.hash.endsWith(P)?P:this.$route.hash.endsWith(p)?p:A},canCreate(){return this.tabs[this.type].canCreate},createLabel(){return this.t(`rbac.roletemplate.subtypes.${this.type}.createButton`)},createLocation(){return this.tabs[this.type].createLocation}},methods:{applyDefaultHeaderLabel(e,t,a){const s=[...e];return s[t]={...e[t],labelKey:a},s}}};var f=a(66262);const O=(0,f.A)(M,[["render",i]]),S=O}}]);
//# sourceMappingURL=6469.511df972.js.map