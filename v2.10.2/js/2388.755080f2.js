(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2388],{45959:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var a=t(45522),r=t.n(a),o=t(67643),i=t.n(o),s=i()(r());s.push([e.id,".banner[data-v-23bd8b94]{text-align:center;line-height:2em;width:100%;padding:0 20px}.banner.banner-consent[data-v-23bd8b94]{position:absolute;height:unset;min-height:2em;overflow:hidden}.banner-dialog[data-v-23bd8b94],.banner-dialog-glass[data-v-23bd8b94]{position:absolute;top:0;left:0;width:100vw;height:100vh}.banner-dialog-glass[data-v-23bd8b94]{z-index:5000;background-color:var(--default);opacity:.75}.banner-dialog[data-v-23bd8b94]{z-index:5001;display:flex;align-items:center;justify-content:center}.banner-dialog .banner-dialog-frame[data-v-23bd8b94]{border:2px solid var(--border);display:flex;align-items:center;flex-direction:column;padding:20px;height:-moz-fit-content;height:fit-content;width:-moz-fit-content;width:fit-content;min-width:50%;max-width:80%;max-height:90%}.banner-dialog .banner-dialog-frame .banner[data-v-23bd8b94]{height:auto;overflow-y:auto}.banner-dialog .banner-dialog-frame button[data-v-23bd8b94]{margin-top:10px;max-width:50%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:-moz-fit-content;width:fit-content}",""]);const d=s},23714:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var a=t(45522),r=t.n(a),o=t(67643),i=t.n(o),s=i()(r());s.push([e.id,"main[data-v-6de2d1a8]{height:100vh}",""]);const d=s},15463:(e,n,t)=>{"use strict";t.d(n,{Bf:()=>u,HK:()=>b,zY:()=>h});var a=t(45848),r=t(25783);const o="bannerHeader",i="bannerFooter",s="bannerConsent",d={"ui-banner-header":o,"ui-banner-footer":i,"ui-banner-login-consent":s},l={[o]:"showHeader",[i]:"showFooter",[s]:"showConsent"};function h(e){const n={},t=e.getters["management/all"](a.Mc.SETTING);return t.forEach((e=>{if(e.value&&d[e.id]){const t=d[e.id];n[t]=e}})),n}function b(e,n){Object.keys(n).forEach((t=>{try{const a=JSON.parse(n[t].value),r=l[t];e[t]=a,e[r]="true"}catch{}}))}function c(e,n=14){const t=2*parseInt(e),a=t/n;return`${a}em`}function u(e){const n=e.getters["management/all"](a.Mc.SETTING),t=n?.find((e=>e.id===r.HG.BANNERS)),o=h(e);if(t){const e=JSON.parse(t.value);b(e,o);const{showFooter:n,showHeader:a,bannerFooter:r,bannerHeader:i,banner:s}=e,d=i?.fontSize||s?.fontSize||"14px",l=r?.fontSize||s?.fontSize||"14px";return{headerFont:"true"===a?c(d):"0px",footerFont:"true"===n?c(l):"0px"}}}},23895:(e,n,t)=>{"use strict";t.d(n,{A:()=>S});var a=t(20641),r=t(90033);const o=e=>((0,a.Qi)("data-v-23bd8b94"),e=e(),(0,a.jt)(),e),i=["id"],s={key:0},d={key:1},l={key:1},h=o((()=>(0,a.Lk)("div",{class:"banner-dialog-glass"},null,-1))),b={class:"banner-dialog"},c={key:0},u={key:1};function g(e,n,t,o,g,f){return f.showBanner?((0,a.uX)(),(0,a.CE)("div",{key:0,id:f.id},[f.showAsDialog?g.showDialog?((0,a.uX)(),(0,a.CE)("div",l,[h,(0,a.eW)(),(0,a.Lk)("div",b,[(0,a.Lk)("div",{class:"banner-dialog-frame",style:(0,r.normalizeStyle)(f.dialogStyle)},[(0,a.Lk)("div",{class:"banner",style:(0,r.normalizeStyle)(f.bannerStyle)},[f.isTextAnArray?((0,a.uX)(),(0,a.CE)("div",c,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(g.banner.text,((e,n)=>((0,a.uX)(),(0,a.CE)("p",{key:n},(0,r.toDisplayString)(e),1)))),128))])):((0,a.uX)(),(0,a.CE)("p",u,(0,r.toDisplayString)(g.banner.text),1))],4),(0,a.eW)(),(0,a.Lk)("button",{class:"btn role-primary",onClick:n[0]||(n[0]=e=>f.hideDialog())},(0,r.toDisplayString)(g.banner.button),1)],4)])])):(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",{key:0,class:(0,r.normalizeClass)(["banner",{"banner-consent":t.consent}]),"data-testid":"fixed__banner",style:(0,r.normalizeStyle)(f.bannerStyle)},[f.isTextAnArray?((0,a.uX)(),(0,a.CE)("div",s,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(g.banner.text,((e,n)=>((0,a.uX)(),(0,a.CE)("p",{key:n},(0,r.toDisplayString)(e),1)))),128))])):((0,a.uX)(),(0,a.CE)("p",d,(0,r.toDisplayString)(g.banner.text),1))],6))],8,i)):(0,a.Q3)("",!0)}var f=t(45848),p=t(25783),v=t(62193),y=t.n(v),w=t(15463);const x={props:{header:{type:Boolean,default:!1},consent:{type:Boolean,default:!1},footer:{type:Boolean,default:!1}},data(){return{showDialog:!0,showHeader:!1,showFooter:!1,showConsent:!1,banner:{}}},methods:{hideDialog(){this.showDialog=!1},handleLineBreaksConsentText(e){if(e.text?.length){const n=e.text.split(/\\n/).filter((e=>e));n.length>1&&(n.forEach(((e,t)=>{n[t]=e.trim()})),e.text=n)}return e}},computed:{uiBannerIndividual(){return(0,w.zY)(this.$store)},bannerSetting(){return this.$store.getters["management/all"](f.Mc.SETTING).find((e=>e.id===p.HG.BANNERS))},bannerStyle(){return{color:this.banner.color,"background-color":this.banner.background,"text-align":this.banner.textAlignment,"font-weight":this.banner.fontWeight?"bold":"","font-style":this.banner.fontStyle?"italic":"","font-size":this.banner.fontSize,"text-decoration":this.banner.textDecoration?"underline":""}},dialogStyle(){return{color:this.banner.color,"background-color":this.banner.background}},showBanner(){return!(!this.banner?.text&&!this.banner?.background)&&(this.header?this.showHeader:this.consent?this.showConsent:this.footer?this.showFooter:null)},isTextAnArray(){return Array.isArray(this.banner?.text)},showAsDialog(){return this.consent&&!!this.banner.button},id(){return this.header?"banner-header":this.consent?"banner-consent":this.footer?"banner-footer":"banner"}},watch:{bannerSetting:{deep:!0,handler(e){if(e?.value&&""!==e.value)try{const n=JSON.parse(e.value);(0,w.HK)(n,this.uiBannerIndividual);const{bannerHeader:t,bannerFooter:a,bannerConsent:r,banner:o,showHeader:i,showFooter:s,showConsent:d}=n;let l=n?.banner||{};y()(o)&&(l=i&&this.header?t||{}:d&&this.consent?this.handleLineBreaksConsentText(r)||{}:s&&this.footer&&a||{}),this.showHeader="true"===i,this.showFooter="true"===s,this.showConsent="true"===d,this.banner=l}catch{}},immediate:!0}}};t(74885);var m=t(66262);const k=(0,m.A)(x,[["render",g],["__scopeId","data-v-23bd8b94"]]),S=k},20007:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>c});var a=t(20641);const r={class:"main-layout"},o={class:"dashboard-root"};function i(e,n,t,i,s,d){const l=(0,a.g2)("FixedBanner"),h=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("main",r,[(0,a.Lk)("div",o,[(0,a.bF)(l,{header:!0}),(0,a.eW)(),(0,a.bF)(l,{consent:!0}),(0,a.eW)(),((0,a.uX)(),(0,a.Wv)(h,{key:e.$route.path})),(0,a.eW)(),(0,a.bF)(l,{footer:!0})])])}var s=t(32868),d=t(23895);const l={mixins:[s.A],components:{FixedBanner:d.A}};t(41808);var h=t(66262);const b=(0,h.A)(l,[["render",i],["__scopeId","data-v-6de2d1a8"]]),c=b},74885:(e,n,t)=>{var a=t(45959);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var r=t(99548).A;r("594d76a5",a,!0,{sourceMap:!1,shadowMode:!1})},41808:(e,n,t)=>{var a=t(23714);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var r=t(99548).A;r("a3d680be",a,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=2388.755080f2.js.map