(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[3591],{20043:(t,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>i});var s=a(45522),e=a.n(s),l=a(67643),r=a.n(l),d=r()(e());d.push([t.id,"main>div[data-v-019d20f5]{display:flex;align-items:center;justify-content:center;height:100vh}",""]);const i=d},83591:(t,o,a)=>{"use strict";a.r(o),a.d(o,{default:()=>c});var s=a(20641);const e={class:"main-layout"};function l(t,o,a,l,r,d){const i=(0,s.gN)("t");return(0,s.uX)(),(0,s.CE)("main",e,[(0,s.Lk)("div",null,[(0,s.bo)((0,s.Lk)("h1",null,null,512),[[i,"logout.message"]])])])}var r=a(47293);const d={async fetch(){const t=await this.$store.dispatch("auth/getAuthProviders"),o=t.find((t=>"saml"===r.configType[t.id]));if(o){const{logoutAllSupported:t,logoutAllEnabled:a,logoutAllForced:s}=o;t&&a&&s?await this.$store.dispatch("auth/logout",{force:!0,slo:!0,provider:o},{root:!0}):await this.$store.dispatch("auth/logout",{force:!0},{root:!0})}else await this.$store.dispatch("auth/logout",{force:!0},{root:!0})}};a(34009);var i=a(66262);const u=(0,i.A)(d,[["render",l],["__scopeId","data-v-019d20f5"]]),c=u},34009:(t,o,a)=>{var s=a(20043);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var e=a(99548).A;e("1a92eab2",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=3591.686e0d8e.js.map