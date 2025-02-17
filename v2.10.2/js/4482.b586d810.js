(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[4482],{14656:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});var a=o(45522),s=o.n(a),n=o(67643),i=o.n(n),r=i()(s());r.push([t.id,".title-block[data-v-416d9624]{display:flex;justify-content:right;align-items:center}.title-block h1[data-v-416d9624]{margin:0!important}.title-block div[data-v-416d9624]{display:flex;align-items:center}table[data-v-416d9624]{border-collapse:collapse;overflow:hidden;border-radius:var(--border-radius)}table.full-width[data-v-416d9624]{border-radius:0!important;min-width:60%}table.full-width thead[data-v-416d9624]{cursor:pointer}table.full-width thead th div[data-v-416d9624]{display:flex;align-items:center;justify-content:space-between}table.full-width tbody[data-v-416d9624]{border-bottom:1px solid var(--sortable-table-top-divider)}table tr>td[data-v-416d9624]:first-of-type{width:20%}table td[data-v-416d9624],table th[data-v-416d9624]{border:1px solid var(--border);padding:8px 5px;min-width:150px;text-align:left}table th[data-v-416d9624]{background-color:var(--sortable-table-top-divider);border-bottom:1px solid var(--sortable-table-header-bg)}table a[data-v-416d9624]{cursor:pointer}table .os[data-v-416d9624]{display:flex;align-items:center}.logs-container[data-v-416d9624]{list-style:none;margin:0;padding:0;background-color:#fff;border:1px solid var(--body-text);height:300px;overflow-x:hidden;overflow-y:auto}.logs-container li[data-v-416d9624]{font-family:Anonymous Pro,monospace;font-size:12px;margin:0;padding:10px 20px;border-bottom:1px solid #ccc}.logs-container li.log[data-v-416d9624]{color:#000}.logs-container li.warn[data-v-416d9624]{background-color:#fafad2;color:#8b4513}.logs-container li.info[data-v-416d9624]{background-color:azure;color:blue}.logs-container li.error[data-v-416d9624]{background-color:#ffe4e1;color:red}.logs-container li[data-v-416d9624]:last-child{border-bottom:none}.logs-container li .log-entry-type[data-v-416d9624]{font-weight:700}.resources-count-container .cluster-row[data-v-416d9624]{display:grid;grid-template-columns:repeat(4,1fr) 20px;grid-template-rows:1fr;align-content:center;font-weight:400}.resources-count-container tbody tr[data-v-416d9624],.resources-count-container tbody tr th[data-v-416d9624]{background-color:var(--sortable-table-header-bg)}.resources-count-container tbody tr th[data-v-416d9624]{border-bottom:1px solid var(--sortable-table-top-divider)}.resources-count-container tbody tr[data-v-416d9624]:hover{background-color:var(--sortable-table-top-divider)}",""]);const l=r},44482:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>M});var a=o(20641),s=o(90033),n=o(53751);const i=t=>((0,a.Qi)("data-v-416d9624"),t=t(),(0,a.jt)(),t),r={class:"title-block mt-20 mb-40"},l={class:"mb-40"},d={class:"mb-20"},c={class:"full-width"},u=i((()=>(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Type"),(0,a.eW)(),(0,a.Lk)("th",null,"Value")])],-1))),m={class:"mb-40"},p={class:"mb-20"},h={class:"resources-count-container"},b=["onClick"],g={colspan:"4"},y={class:"cluster-row"},f=i((()=>(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"\n                Resource\n              "),(0,a.eW)(),(0,a.Lk)("th",null,"\n                Count\n              "),(0,a.eW)(),(0,a.Lk)("th",null,"\n                Resource Timing (ms)\n              ")],-1))),v={scope:"row"};function k(t,e,o,i,k,w){const C=(0,a.g2)("AsyncButton");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",r,[(0,a.Lk)("div",null,[(0,a.bF)(C,{mode:"timing",class:"mr-20","data-testid":"diagnostics-generate-response-times",onClick:w.gatherResponseTimes},null,8,["onClick"]),(0,a.eW)(),(0,a.bF)(C,{mode:"diagnostic","data-testid":"diagnostics-download-diagnostic-package",onClick:w.promptDownload},null,8,["onClick"])])]),(0,a.eW)(),(0,a.Lk)("div",l,[(0,a.Lk)("h2",d,(0,s.toDisplayString)(t.t("about.diagnostic.systemInformation.subtitle")),1),(0,a.eW)(),(0,a.Lk)("table",c,[u,(0,a.eW)(),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.systemInformation,((t,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:e},[t.value.length?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[(0,a.Lk)("td",null,(0,s.toDisplayString)(t.label),1),(0,a.eW)(),(0,a.Lk)("td",null,(0,s.toDisplayString)(t.value),1)],64)):(0,a.Q3)("",!0)])))),128))])])]),(0,a.eW)(),(0,a.Lk)("div",m,[(0,a.Lk)("h2",p,(0,s.toDisplayString)(t.t("about.diagnostic.resourceCounts",{count:w.clusterCount})),1),(0,a.eW)(),(0,a.Lk)("div",h,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.finalCounts,((t,e)=>((0,a.uX)(),(0,a.CE)("table",{key:e,class:"full-width"},[(0,a.Lk)("thead",{onClick:e=>w.toggleTable(t.id)},[(0,a.Lk)("th",g,[(0,a.Lk)("div",y,[(0,a.Lk)("span",null,[(0,a.eW)("Cluster: "),(0,a.Lk)("b",null,(0,s.toDisplayString)(t.name),1)]),(0,a.eW)(),(0,a.Lk)("span",null,[(0,a.eW)("Namespace: "),(0,a.Lk)("b",null,(0,s.toDisplayString)(t.namespace),1)]),(0,a.eW)(),(0,a.Lk)("span",null,[(0,a.eW)("Total Resources: "),(0,a.Lk)("b",null,(0,s.toDisplayString)(w.sumResourceCount(t.counts)),1)]),(0,a.eW)(),(0,a.Lk)("span",null,[(0,a.eW)("Nodes: "),(0,a.Lk)("b",null,(0,s.toDisplayString)(w.nodeCount(t.counts)),1)]),(0,a.eW)(),(0,a.Lk)("i",{class:(0,s.normalizeClass)(["icon",{"icon-chevron-down":!t.isTableVisible,"icon-chevron-up":t.isTableVisible}])},null,2)])])],8,b),(0,a.eW)(),(0,a.bo)((0,a.Lk)("tbody",null,[f,(0,a.eW)(),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(t.counts,((t,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:e},[t.count>0?((0,a.uX)(),(0,a.CE)(a.FK,{key:0},[(0,a.Lk)("td",v,(0,s.toDisplayString)(t.resource),1),(0,a.eW)(),(0,a.Lk)("td",null,(0,s.toDisplayString)(t.count),1),(0,a.eW)(),(0,a.Lk)("td",null,(0,s.toDisplayString)(t.durationMs||"-"),1)],64)):(0,a.Q3)("",!0)])))),128))],512),[[n.vShow,t.isTableVisible]])])))),128))])])])}var w=o(45848),C=o(17793),L=o(32318),S=o(3674),I=o(7958);const T={name:"Diagnostic",components:{AsyncButton:C.A},async fetch(){const t=await this.$store.dispatch("management/findAll",{type:w.qt.RANCHER_CLUSTER}),e=t.filter((t=>t.mgmt?.isReady)),o=(0,S.uY)((0,S.WJ)(e,this.$store),this.$store),a=[],s=[],n=[];o.forEach(((t,e)=>{const n=this.$store.getters["management/byId"](w.Mc.CLUSTER,t.metadata.name);a.push({id:t.id,name:n?.spec?.displayName||t.metadata?.name,namespace:t.metadata?.namespace,capiId:t.mgmt?.id,counts:null,isTableVisible:!(0!==e||1!==o.length)}),s.push(this.$store.dispatch("management/request",{url:`/k8s/clusters/${t.mgmt?.id}/v1/counts`}))}));const i=await Promise.all(s);i.forEach(((t,e)=>{const o=t.data?.[0]?.counts;if(o){const t=[];let s=[];Object.keys(o).forEach((e=>{t[e]=o[e].summary?.count,t.push({resource:e,count:o[e].summary?.count||0})}));const i=(0,I.Ul)(t,"count:desc");s=s.concat(i),s=(0,I.Ul)(s,"count:desc"),s=s.splice(0,15),s.forEach(((t,o)=>{s[o].id=a[e].id,s[o].capiId=a[e].capiId})),n.push(s),a[e].counts=i}})),this.topFifteenForResponseTime=n,this.finalCounts=a},data(){const{userAgent:t,userAgentData:e,language:o,cookieEnabled:a,hardwareConcurrency:s,deviceMemory:n}=window?.navigator,i={browser:{label:this.t("about.diagnostic.systemInformation.browser"),value:this.t("about.diagnostic.systemInformation.browserInfo",{userAgent:t,language:o,cookieEnabled:a})},system:{label:this.t("about.diagnostic.systemInformation.system"),value:this.t("about.diagnostic.systemInformation.hardwareConcurrency",{hardwareConcurrency:s})},jsMemory:{label:this.t("about.diagnostic.systemInformation.jsMemory"),value:""}};return e?.platform&&(i.system.value=i.system.value.concat(", ",this.t("about.diagnostic.systemInformation.os",{platform:e.platform}))),n&&(i.system.value=i.system.value.concat(", ",this.t("about.diagnostic.systemInformation.deviceMemory",{deviceMemory:n}))),window?.performance?.memory?.jsHeapSizeLimit&&(i.jsMemory.value+=this.t("about.diagnostic.systemInformation.memJsHeapLimit",{jsHeapSizeLimit:window?.performance?.memory?.jsHeapSizeLimit})),window?.performance?.memory?.totalJSHeapSize&&(i.jsMemory.value+=`, ${this.t("about.diagnostic.systemInformation.memTotalJsHeapSize",{totalJSHeapSize:window?.performance?.memory?.totalJSHeapSize})}`),window?.performance?.memory?.usedJSHeapSize&&(i.jsMemory.value+=`, ${this.t("about.diagnostic.systemInformation.memUsedJsHeapSize",{usedJSHeapSize:window?.performance?.memory?.usedJSHeapSize})}`),{systemInformation:i,topFifteenForResponseTime:null,responseTimes:null,finalCounts:null,includeResponseTimes:!0,storeMapping:this.$store?._modules?.root?.state}},computed:{clusterCount(){return this.finalCounts?.length}},methods:{generateKey(t){const e=1e4*Math.random();return`key_${e}_${t}`},downloadData(t){const e="rancher-diagnostic-data.json",o={systemInformation:this.systemInformation,storeMapping:this.parseStoreData(this.storeMapping),resourceCounts:this.finalCounts,responseTimes:this.responseTimes};(0,L.PE)(e,JSON.stringify(o),"application/json").then((()=>t(!0))).catch((()=>t(!1)))},setResourceResponseTiming(t){t?.forEach((t=>{if("success"===t.outcome){const e=this.finalCounts.find((e=>e.capiId===t.item.capiId)),o=e?.counts?.findIndex((e=>e.resource===t.item.resource));(o&&-1!==o||0===o)&&(e.counts[o]["durationMs"]=t.durationMs)}}))},sumResourceCount(t){return t.reduce(((t,e)=>t+e.count),0)},nodeCount(t){const e=t.findIndex((t=>"node"===t.resource));return t[e]?.count},toggleTable(t){const e=this.finalCounts.findIndex((e=>e.id===t));this.finalCounts[e].isTableVisible=!this.finalCounts[e].isTableVisible},async gatherResponseTimes(t){const e=this.topFifteenForResponseTime.flatMap((t=>t.map((t=>{const e=Date.now();return this.$store.dispatch("management/request",{url:`/k8s/clusters/${t.capiId}/v1/${t.resource}`}).then((()=>({outcome:"success",item:t,durationMs:Date.now()-e}))).catch((()=>({outcome:"error",item:t,durationMs:Date.now()-e})))}))));return await Promise.all(e).then((e=>{this.responseTimes=e,this.setResourceResponseTiming(e),t(!0)})).catch((()=>t(!1)))},parseStoreData(t){const e=["aws","digitalocean","linode","targetRoute","$router","$route"],o=["management","rancher","cluster","harvester","epinio","elemental"],a={};return Object.entries(t).forEach((([t,s])=>{e.includes(t)||(o.includes(t)&&Object.keys(s.types||{}).length?(a[t]={...s,types:{}},Object.entries(s.types).forEach((([e,o])=>{const{list:s,...n}=o;a[t].types[e]={...n,count:s.length}}))):a[t]=s)})),a},promptDownload(t){this.responseTimes?this.downloadData(t):this.$store.dispatch("management/promptModal",{component:"DiagnosticTimingsDialog",componentProps:{downloadData:this.downloadData,gatherResponseTimes:this.gatherResponseTimes}}).then((()=>t(!0))).catch((()=>t(!1)))}}};o(91466);var D=o(66262);const x=(0,D.A)(T,[["render",k],["__scopeId","data-v-416d9624"]]),M=x},91466:(t,e,o)=>{var a=o(14656);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals);var s=o(99548).A;s("649d4cdf",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=4482.b586d810.js.map