(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[6377],{65381:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(45522),n=i.n(s),o=i(67643),a=i.n(o),r=a()(n());r.push([t.id,".card-actions[data-v-009020de]{display:flex;width:100%;justify-content:flex-end}",""]);const c=r},18930:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(45522),n=i.n(s),o=i(67643),a=i.n(o),r=a()(n());r.push([t.id,".footer[data-v-2bfc44cd]{width:100%;display:flex;justify-content:center}.banner[data-v-2bfc44cd]{margin-bottom:0}",""]);const c=r},43692:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=i(45522),n=i.n(s),o=i(67643),a=i.n(o),r=a()(n());r.push([t.id,".modal{border-radius:var(--border-radius);max-height:100vh}.modal.card-container{box-shadow:none}",""]);const c=r},46377:(t,e,i)=>{"use strict";i.d(e,{A:()=>E});var s=i(20641),n=i(90033),o=i(53751);const a={class:"card-actions"};function r(t,e,i,r,c,d){const l=(0,s.g2)("Banner"),u=(0,s.g2)("PercentageBar"),h=(0,s.g2)("t"),v=(0,s.g2)("ModalWithCard");return c.isOpen?((0,s.uX)(),(0,s.Wv)(v,{key:0,ref:"inactivityModal",name:"inactivityModal","save-text":"Continue",onFinish:d.resume},{title:(0,s.k6)((()=>[(0,s.eW)((0,n.toDisplayString)(d.isInactiveTexts.title),1)])),content:(0,s.k6)((()=>[(0,s.bF)(l,{color:"info"},{default:(0,s.k6)((()=>[(0,s.eW)((0,n.toDisplayString)(d.isInactiveTexts.banner),1)])),_:1}),(0,s.eW)(),(0,s.Lk)("p",null,(0,n.toDisplayString)(d.isInactiveTexts.content),1),(0,s.eW)(),c.isInactive?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(u,{key:0,class:"mt-20",modelValue:d.timerPercentageLeft,"color-stops":d.colorStops},null,8,["modelValue","color-stops"]))])),footer:(0,s.k6)((()=>[(0,s.Lk)("div",a,[c.isInactive?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:0,class:"btn role-tertiary bg-primary",onClick:e[0]||(e[0]=(0,o.withModifiers)(((...t)=>d.resume&&d.resume(...t)),["prevent"]))},[(0,s.bF)(h,{k:"inactivity.cta"})])),(0,s.eW)(),c.isInactive?((0,s.uX)(),(0,s.CE)("button",{key:1,class:"btn role-tertiary bg-primary",onClick:e[1]||(e[1]=(0,o.withModifiers)(((...t)=>d.refresh&&d.refresh(...t)),["prevent"]))},[(0,s.bF)(h,{k:"inactivity.ctaExpired"})])):(0,s.Q3)("",!0)])])),default:(0,s.k6)((()=>[(0,s.eW)(),(0,s.Lk)("span",null,(0,n.toDisplayString)(c.courtesyCountdown),1),(0,s.eW)(),(0,s.eW)()])),_:1},8,["onFinish"])):(0,s.Q3)("",!0)}const c={class:"text-default-text"},d={class:"footer"};function l(t,e,i,a,r,l){const u=(0,s.g2)("Banner"),h=(0,s.g2)("AsyncButton"),v=(0,s.g2)("Card"),m=(0,s.g2)("app-modal");return(0,s.uX)(),(0,s.Wv)(m,(0,s.v6)({name:i.name,width:i.width,"click-to-close":!1,height:i.height},t.$attrs,{class:"modal","data-testid":"mvc__card",onClose:e[2]||(e[2]=e=>t.$emit("finish",e))}),{default:(0,s.k6)((()=>[(0,s.bF)(v,{class:"modal","show-highlight-border":!1},{title:(0,s.k6)((()=>[(0,s.Lk)("h4",c,[(0,s.RG)(t.$slots,"title",{},void 0,!0)])])),body:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"content",{},void 0,!0),(0,s.eW)(),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.errors,((t,e)=>((0,s.uX)(),(0,s.CE)("div",{key:e},[(0,s.bF)(u,{class:"banner",color:"error",label:t},null,8,["label"])])))),128))])),actions:(0,s.k6)((()=>[(0,s.RG)(t.$slots,"footer",{},(()=>[(0,s.Lk)("div",d,[(0,s.Lk)("button",{class:"btn role-secondary mr-20",onClick:e[0]||(e[0]=(0,o.withModifiers)(((...t)=>l.hide&&l.hide(...t)),["prevent"]))},(0,n.toDisplayString)(i.closeText),1),(0,s.eW)(),(0,s.bF)(h,{mode:i.saveText,onClick:e[1]||(e[1]=e=>t.$emit("finish",e))},null,8,["mode"])])]),!0)])),_:3})])),_:3},16,["name","width","height"])}var u=i(99910),h=i(17899),v=i(17793),m=i(79922);const y={name:"ModalWithCard",emits:["close","finish"],components:{Card:u.Z,Banner:h.l,AsyncButton:v.A,AppModal:m.A},props:{name:{type:String,required:!0},closeText:{type:String,default:"Close"},saveText:{type:String,default:"create"},width:{type:[String,Number],default:"50%"},height:{type:[String,Number],default:"auto"},errors:{type:Array,default:()=>[]}},methods:{hide(){this.$emit("close")}}};i(92640),i(34086);var f=i(66262);const p=(0,f.A)(y,[["render",l],["__scopeId","data-v-2bfc44cd"]]),b=p;var k=i(56045),w=i(7350),g=i.n(w),I=i(45848),T=i(25783),M=i(96763);let C;const A={name:"Inactivity",components:{ModalWithCard:b,Banner:h.l,PercentageBar:k.A},data(){return{enabled:null,isOpen:!1,isInactive:!1,showModalAfter:null,inactivityTimeoutId:null,courtesyTimer:null,courtesyTimerId:null,courtesyCountdown:null,trackInactivity:g()(this._trackInactivity,1e3),id:null}},async mounted(){let t;try{const e=await this.$store.dispatch("management/find",{type:I.Mc.SETTING,id:T.HG.UI_PERFORMANCE});t=e?.value?JSON.parse(e.value):T.$8}catch{}if(!t||!t?.inactivity||!t?.inactivity.enabled)return;this.enabled=t?.inactivity?.enabled||!1;const e=60*t?.inactivity?.threshold;this.courtesyTimer=Math.floor(.1*e),this.courtesyTimer=Math.min(this.courtesyTimer,300),this.showModalAfter=e-this.courtesyTimer,M.debug(`Inactivity modal will show after ${this.showModalAfter/60}(m) and be shown for ${this.courtesyTimer/60}(m)`),this.courtesyCountdown=this.courtesyTimer,t?.inactivity.enabled&&(this.trackInactivity(),this.addIdleListeners())},beforeUnmount(){this.removeEventListener(),this.clearAllTimeouts()},methods:{_trackInactivity(){if(this.isInactive||this.isOpen||!this.showModalAfter)return;this.clearAllTimeouts();const t=Date.now()+1e3*this.showModalAfter;this.id=t,C=t;const e=()=>{const i=Date.now();this.id===C&&(i>=t?(this.isOpen=!0,this.startCountdown()):this.inactivityTimeoutId=setTimeout(e,1e3))};e()},startCountdown(){const t=Date.now()+1e3*this.courtesyCountdown,e=()=>{const i=Date.now();i>=t?(this.isInactive=!0,this.unsubscribe(),this.clearAllTimeouts()):(this.courtesyCountdown=Math.floor((t-i)/1e3),this.courtesyTimerId=setTimeout(e,1e3))};e()},addIdleListeners(){document.addEventListener("mousemove",this.trackInactivity),document.addEventListener("mousedown",this.trackInactivity),document.addEventListener("keypress",this.trackInactivity),document.addEventListener("touchmove",this.trackInactivity),document.addEventListener("visibilitychange",this.trackInactivity)},removeEventListener(){document.removeEventListener("mousemove",this.trackInactivity),document.removeEventListener("mousedown",this.trackInactivity),document.removeEventListener("keypress",this.trackInactivity),document.removeEventListener("touchmove",this.trackInactivity),document.removeEventListener("visibilitychange",this.trackInactivity)},resume(){this.isInactive=!1,this.isOpen=!1,this.courtesyCountdown=this.courtesyTimer,this.clearAllTimeouts()},refresh(){window.location.reload()},unsubscribe(){M.debug("Unsubscribing from all websocket events"),this.$store.dispatch("unsubscribe")},clearAllTimeouts(){clearTimeout(this.inactivityTimeoutId),clearTimeout(this.courtesyTimerId)}},computed:{isInactiveTexts(){return this.isInactive?{title:this.t("inactivity.titleExpired"),banner:this.t("inactivity.bannerExpired"),content:this.t("inactivity.contentExpired")}:{title:this.t("inactivity.title"),banner:this.t("inactivity.banner"),content:this.t("inactivity.content")}},timerPercentageLeft(){return Math.floor(this.courtesyCountdown/this.courtesyTimer*100)},colorStops(){return{0:"--info",30:"--info",70:"--info"}}}};i(79035);const x=(0,f.A)(A,[["render",r],["__scopeId","data-v-009020de"]]),E=x},79035:(t,e,i)=>{var s=i(65381);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var n=i(99548).A;n("6cd559ef",s,!0,{sourceMap:!1,shadowMode:!1})},92640:(t,e,i)=>{var s=i(18930);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var n=i(99548).A;n("0066bf25",s,!0,{sourceMap:!1,shadowMode:!1})},34086:(t,e,i)=>{var s=i(43692);s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);var n=i(99548).A;n("045522b9",s,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=6377.7edfe080.js.map