(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2516],{50835:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(45522),s=r.n(a),o=r(67643),c=r.n(o),i=c()(s());i.push([e.id,".header[data-v-35fa13b0]{display:flex}.header H1[data-v-35fa13b0]{flex:1}",""]);const l=i},82516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>E});var a=r(20641),s=r(90033);const o={key:1},c={class:"row header mb-10"},i={class:"row"},l={key:0};function n(e,t,r,n,u,d){const h=(0,a.g2)("Loading"),p=(0,a.g2)("Banner"),b=(0,a.g2)("router-link"),m=(0,a.g2)("ResourceTable"),f=(0,a.g2)("Tab"),g=(0,a.g2)("Tabbed");return e.$fetchState.pending?((0,a.uX)(),(0,a.Wv)(h,{key:0})):((0,a.uX)(),(0,a.CE)("div",o,[(0,a.Lk)("div",c,[(0,a.Lk)("h1",null,(0,s.toDisplayString)(e.t("monitoring.routesAndReceivers")),1),(0,a.eW)(),(0,a.Lk)("div",null,[(0,a.Lk)("button",{class:"btn btn-lg role-primary float right",onClick:t[0]||(t[0]=t=>e.$router.push(d.createRoute))},(0,s.toDisplayString)(e.t("resourceList.head.create")),1)])]),(0,a.eW)(),(0,a.Lk)("div",i,[(0,a.bF)(p,{color:"info",label:e.t("monitoring.alertmanagerConfig.deprecationWarning")},null,8,["label"])]),(0,a.eW)(),(0,a.bF)(g,{ref:"tabs","default-tab":u.initTab},{default:(0,a.k6)((()=>[(0,a.bF)(f,{name:u.routeSchema.id,label:e.$store.getters["type-map/labelFor"](u.routeSchema,2)},{default:(0,a.k6)((()=>[u.secretTo?((0,a.uX)(),(0,a.CE)("div",l,[(0,a.eW)("\n          We don't support the current route format stored in alertmanager.yaml. Click\n          "),(0,a.bF)(b,{to:u.secretTo},{default:(0,a.k6)((()=>[(0,a.eW)("\n            here\n          ")])),_:1},8,["to"]),(0,a.eW)(" to update manually.\n        ")])):((0,a.uX)(),(0,a.Wv)(m,{key:1,schema:u.routeSchema,rows:u.routes},null,8,["schema","rows"]))])),_:1},8,["name","label"]),(0,a.eW)(),(0,a.bF)(f,{name:u.receiverSchema.id,label:e.$store.getters["type-map/labelFor"](u.receiverSchema,2)},{default:(0,a.k6)((()=>[(0,a.bF)(m,{schema:u.receiverSchema,rows:u.receivers},null,8,["schema","rows"])])),_:1},8,["name","label"])])),_:1},8,["default-tab"])]))}var u=r(2803),d=r(45016),h=r(22415),p=r(70546),b=r(17899),m=r(45848),f=r(43565),g=r(77444);const v={name:"ListRoute",components:{Banner:b.l,Loading:d.A,ResourceTable:u.A,Tab:p.A,Tabbed:h.A},async fetch(){this.routeSchema=this.$store.getters["cluster/schemaFor"](m.Rp.SPOOFED.ROUTE),this.receiverSchema=this.$store.getters["cluster/schemaFor"](m.Rp.SPOOFED.RECEIVER);const e=this.$store.dispatch("cluster/findAll",{type:m.Rp.SPOOFED.ROUTE});this.receivers=await this.$store.dispatch("cluster/findAll",{type:m.Rp.SPOOFED.RECEIVER});const t=await(0,f.r6)(this.$store.dispatch),r=(0,f.gb)(t);r?(this.$store.dispatch("type-map/configureType",{match:m.Rp.SPOOFED.ROUTE,isCreatable:!0}),this.routes=await e):(this.$store.dispatch("type-map/configureType",{match:m.Rp.SPOOFED.ROUTE,isCreatable:!1}),this.secretTo={...t.detailLocation},this.secretTo.query={[g.g]:g.G5})},data(){const e=this.$route.query.resource||m.Rp.SPOOFED.RECEIVER;return{routes:[],receivers:[],secretTo:null,routeSchema:null,receiverSchema:null,initTab:e}},computed:{createRoute(){const e=this.$refs?.tabs?.activeTabName||this.routeSchema.id;return{name:"c-cluster-monitoring-route-receiver-create",params:{cluster:this.$route.params.cluster},query:{resource:e}}}}};r(90445);var y=r(66262);const R=(0,y.A)(v,[["render",n],["__scopeId","data-v-35fa13b0"]]),E=R},90445:(e,t,r)=>{var a=r(50835);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var s=r(99548).A;s("448e1deb",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=2516.e03bcdb4.js.map