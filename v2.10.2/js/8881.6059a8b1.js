(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[8881],{62822:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});var t=a(45522),o=a.n(t),l=a(67643),r=a.n(l),i=r()(o());i.push([e.id,".banner-input-footnote[data-v-2d8f6614]{font-size:12px;opacity:.8}.banner-decoration-checkbox[data-v-2d8f6614]{position:relative;display:inline-flex;align-items:flex-start;margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--border-radius);padding-bottom:5px;height:24px}",""]);const s=i},86183:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});var t=a(45522),o=a.n(t),l=a(67643),r=a.n(l),i=r()(o());i.push([e.id,".color-input[data-v-27e90267]{border:1px solid var(--border);border-radius:var(--border-radius);padding:10px}.color-input.disabled[data-v-27e90267],.color-input.disabled .selected[data-v-27e90267],.color-input[disabled][data-v-27e90267],.color-input[disabled][data-v-27e90267]:hover{color:var(--input-disabled-text);background-color:var(--input-disabled-bg);outline-width:0;border-color:var(--input-disabled-border);cursor:not-allowed}.color-input.disabled .selected div[data-v-27e90267],.color-input.disabled .selected input[data-v-27e90267],.color-input.disabled .selected label[data-v-27e90267],.color-input.disabled .selected span[data-v-27e90267],.color-input.disabled div[data-v-27e90267],.color-input.disabled input[data-v-27e90267],.color-input.disabled label[data-v-27e90267],.color-input.disabled span[data-v-27e90267],.color-input[disabled] div[data-v-27e90267],.color-input[disabled] input[data-v-27e90267],.color-input[disabled] label[data-v-27e90267],.color-input[disabled] span[data-v-27e90267],.color-input[disabled]:hover div[data-v-27e90267],.color-input[disabled]:hover input[data-v-27e90267],.color-input[disabled]:hover label[data-v-27e90267],.color-input[disabled]:hover span[data-v-27e90267]{cursor:not-allowed!important}.color-input.disabled .selected label[data-v-27e90267],.color-input.disabled label[data-v-27e90267],.color-input[disabled] label[data-v-27e90267],.color-input[disabled]:hover label[data-v-27e90267]{color:var(--input-disabled-label);display:inline-block;z-index:1}.color-input.disabled .selected[data-v-27e90267]::-moz-placeholder,.color-input.disabled[data-v-27e90267]::-moz-placeholder,.color-input[disabled][data-v-27e90267]::-moz-placeholder,.color-input[disabled][data-v-27e90267]:hover::-moz-placeholder{color:var(--input-disabled-placeholder)}.color-input.disabled .selected[data-v-27e90267]::placeholder,.color-input.disabled[data-v-27e90267]::placeholder,.color-input[disabled][data-v-27e90267]::placeholder,.color-input[disabled][data-v-27e90267]:hover::placeholder{color:var(--input-disabled-placeholder)}.color-input LABEL[data-v-27e90267]{display:block}.color-input .preview-container[data-v-27e90267]:hover{cursor:pointer}.color-input .preview-container .color-value[data-v-27e90267]{margin-left:4px}.color-input .color-display[data-v-27e90267]{border:1px solid var(--border)}.color-input .color-display[data-v-27e90267]:focus{outline:none;box-shadow:0 0 0 var(--outline-width) var(--outline);background:var(--input-focus-bg)}.color-input INPUT[data-v-27e90267]{border:none;padding:0;width:23px;height:23px;-webkit-appearance:none;opacity:0}.color-input INPUT[data-v-27e90267]:hover{cursor:pointer}",""]);const s=i},40705:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});var t=a(45522),o=a.n(t),l=a(67643),r=a.n(l),i=r()(o());i.push([e.id,".banner-decoration-checkbox[data-v-073d583a]{position:relative;display:inline-flex;align-items:flex-start;margin:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-radius:var(--border-radius);padding-bottom:5px;height:24px}",""]);const s=i},55583:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>s});var t=a(45522),o=a.n(t),l=a(67643),r=a.n(l),i=r()(o());i.push([e.id,".overlay[data-v-4b91ab5a]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--overlay-bg);z-index:1}h2.setting-title[data-v-4b91ab5a]{align-items:center;display:flex}h2.setting-title>i[data-v-4b91ab5a]{padding-left:5px}",""]);const s=i},15463:(e,n,a)=>{"use strict";a.d(n,{Bf:()=>p,HK:()=>b,zY:()=>u});var t=a(45848),o=a(25783);const l="bannerHeader",r="bannerFooter",i="bannerConsent",s={"ui-banner-header":l,"ui-banner-footer":r,"ui-banner-login-consent":i},d={[l]:"showHeader",[r]:"showFooter",[i]:"showConsent"};function u(e){const n={},a=e.getters["management/all"](t.Mc.SETTING);return a.forEach((e=>{if(e.value&&s[e.id]){const a=s[e.id];n[a]=e}})),n}function b(e,n){Object.keys(n).forEach((a=>{try{const t=JSON.parse(n[a].value),o=d[a];e[a]=t,e[o]="true"}catch{}}))}function c(e,n=14){const a=2*parseInt(e),t=a/n;return`${t}em`}function p(e){const n=e.getters["management/all"](t.Mc.SETTING),a=n?.find((e=>e.id===o.HG.BANNERS)),l=u(e);if(a){const e=JSON.parse(a.value);b(e,l);const{showFooter:n,showHeader:t,bannerFooter:o,bannerHeader:r,banner:i}=e,s=r?.fontSize||i?.fontSize||"14px",d=o?.fontSize||i?.fontSize||"14px";return{headerFont:"true"===t?c(s):"0px",footerFont:"true"===n?c(d):"0px"}}}},68408:(e,n,a)=>{"use strict";a.d(n,{A:()=>g});var t=a(20641),o=a(90033),l=a(53751);const r=["data-testid"],i={class:"text-label"},s=["data-testid"],d=["disabled","value"],u={class:"text-muted color-value"};function b(e,n,a,b,c,p){const v=(0,t.g2)("t");return(0,t.uX)(),(0,t.CE)("div",{class:(0,o.normalizeClass)(["color-input",{[a.mode]:a.mode,disabled:p.isDisabled}]),"data-testid":a.componentTestid+"-color-input"},[(0,t.Lk)("label",i,[a.labelKey?((0,t.uX)(),(0,t.Wv)(v,{key:0,k:a.labelKey,raw:!0},null,8,["k"])):(0,t.Q3)("",!0),(0,t.eW)((0,o.toDisplayString)(a.label),1)]),(0,t.eW)(),(0,t.Lk)("div",{"data-testid":a.componentTestid+"-color-input_preview-container",class:"preview-container",onClick:n[1]||(n[1]=(0,l.withModifiers)((n=>e.$refs.input.click(n)),["stop"]))},[(0,t.Lk)("span",{style:(0,o.normalizeStyle)({"background-color":p.inputValue}),class:"color-display"},[(0,t.Lk)("input",{ref:"input",type:"color",disabled:p.isDisabled,value:p.inputValue,onInput:n[0]||(n[0]=n=>e.$emit("update:value",n.target.value))},null,40,d)],4),(0,t.eW)(),(0,t.Lk)("span",u,(0,o.toDisplayString)(p.inputValue),1)],8,s)],10,r)}var c=a(77444);const p={emits:["update:value"],props:{value:{type:String,default:""},defaultValue:{type:String,default:""},label:{type:String,default:null},labelKey:{type:String,default:null},mode:{type:String,validator(e){return[c.G5,c.nW].includes(e)},default:c.G5},componentTestid:{type:String,default:"color-input"},disabled:{type:Boolean,default:!1}},data(){return{viewMode:c.nW,editMode:c.G5}},computed:{inputValue(){return this.value?this.value:this.defaultValue},isDisabled(){const e=this.disabled;return this.mode!==this.editMode||e}},mounted(){this.$emit("update:value",this.inputValue)}};a(72745);var v=a(66262);const h=(0,v.A)(p,[["render",b],["__scopeId","data-v-27e90267"]]),g=h},38881:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>ye});var t=a(20641),o=a(90033);const l={key:1},r={class:"mb-20"},i={class:"text-label"},s={class:"mt-40 mb-10 setting-title"},d={key:0,class:"icon icon-lock"},u={key:0,class:"row mb-10"},b={class:"row mb-20"},c={class:"col span-6"},p={class:"mt-40 mb-10 setting-title"},v={key:0,class:"icon icon-lock"},h={key:1,class:"row mb-10"},g={class:"row mb-20"},m={class:"col span-6"},f={class:"mt-40 mb-10 setting-title"},y={key:0,class:"icon icon-lock"},k={key:2,class:"row mb-10"},x={class:"row mb-20"},w={class:"col span-6"},S={class:"mt-40 mb-40"},C={key:0};function W(e,n,a,W,F,L){const B=(0,t.g2)("Loading"),T=(0,t.g2)("Banner"),E=(0,t.g2)("Checkbox"),I=(0,t.g2)("BannerSettings"),D=(0,t.g2)("NotificationSettings"),A=(0,t.g2)("AsyncButton");return e.$fetchState.pending?((0,t.uX)(),(0,t.Wv)(B,{key:0})):((0,t.uX)(),(0,t.CE)("div",l,[(0,t.Lk)("h1",r,(0,o.toDisplayString)(e.t("banner.label")),1),(0,t.eW)(),(0,t.Lk)("div",null,[(0,t.Lk)("label",i,(0,o.toDisplayString)(e.t("advancedSettings.descriptions.ui-banners",{},!0)),1),(0,t.eW)(),(0,t.Lk)("h2",s,[(0,t.eW)((0,o.toDisplayString)(e.t("banner.headerBanner"))+" ",1),F.uiBannerIndividual.bannerHeader?((0,t.uX)(),(0,t.CE)("i",d)):(0,t.Q3)("",!0)]),(0,t.eW)(),F.uiBannerIndividual.bannerHeader?((0,t.uX)(),(0,t.CE)("div",u,[(0,t.bF)(T,{color:"warning",class:"mt-0",label:e.t("banner.individualSetting",{name:"ui-banner-header"},!0)},null,8,["label"])])):(0,t.Q3)("",!0),(0,t.eW)(),(0,t.Lk)("div",b,[(0,t.Lk)("div",c,[(0,t.bF)(E,{disabled:!!F.uiBannerIndividual.bannerHeader,value:"true"===F.bannerVal.showHeader,label:e.t("banner.showHeader"),mode:L.mode,"onUpdate:value":n[0]||(n[0]=e=>F.bannerVal.showHeader=e.toString())},null,8,["disabled","value","label","mode"])])]),(0,t.eW)(),(0,t.bF)(I,{value:F.bannerVal,"onUpdate:value":n[1]||(n[1]=e=>F.bannerVal=e),"banner-type":"bannerHeader",mode:L.headerMode},null,8,["value","mode"]),(0,t.eW)(),(0,t.Lk)("h2",p,[(0,t.eW)((0,o.toDisplayString)(e.t("banner.footerBanner"))+" ",1),F.uiBannerIndividual.bannerFooter?((0,t.uX)(),(0,t.CE)("i",v)):(0,t.Q3)("",!0)]),(0,t.eW)(),F.uiBannerIndividual.bannerFooter?((0,t.uX)(),(0,t.CE)("div",h,[(0,t.bF)(T,{color:"warning",class:"mt-0",label:e.t("banner.individualSetting",{name:"ui-banner-footer"},!0)},null,8,["label"])])):(0,t.Q3)("",!0),(0,t.eW)(),(0,t.Lk)("div",g,[(0,t.Lk)("div",m,[(0,t.bF)(E,{disabled:!!F.uiBannerIndividual.bannerFooter,value:"true"===F.bannerVal.showFooter,label:e.t("banner.showFooter"),mode:L.mode,"onUpdate:value":n[2]||(n[2]=e=>F.bannerVal.showFooter=e.toString())},null,8,["disabled","value","label","mode"])])]),(0,t.eW)(),(0,t.bF)(I,{value:F.bannerVal,"onUpdate:value":n[3]||(n[3]=e=>F.bannerVal=e),"banner-type":"bannerFooter",mode:L.footerMode},null,8,["value","mode"]),(0,t.eW)(),(0,t.Lk)("h2",f,[(0,t.eW)((0,o.toDisplayString)(e.t("banner.loginScreenBanner"))+" ",1),F.uiBannerIndividual.bannerConsent?((0,t.uX)(),(0,t.CE)("i",y)):(0,t.Q3)("",!0)]),(0,t.eW)(),F.uiBannerIndividual.bannerConsent?((0,t.uX)(),(0,t.CE)("div",k,[(0,t.bF)(T,{color:"warning",class:"mt-0",label:e.t("banner.individualSetting",{name:"ui-banner-login-consent"},!0)},null,8,["label"])])):(0,t.Q3)("",!0),(0,t.eW)(),(0,t.Lk)("div",x,[(0,t.Lk)("div",w,[(0,t.bF)(E,{disabled:!!F.uiBannerIndividual.bannerConsent,value:"true"===F.bannerVal.showConsent,label:e.t("banner.showConsent"),mode:L.mode,"onUpdate:value":n[4]||(n[4]=e=>F.bannerVal.showConsent=e.toString())},null,8,["disabled","value","label","mode"])])]),(0,t.eW)(),(0,t.bF)(I,{value:F.bannerVal,"onUpdate:value":n[5]||(n[5]=e=>F.bannerVal=e),"banner-type":"bannerConsent",mode:L.consentMode},null,8,["value","mode"]),(0,t.eW)(),(0,t.Lk)("h2",S,(0,o.toDisplayString)(e.t("notifications.loginError.header")),1),(0,t.eW)(),(0,t.bF)(D,{value:F.bannerVal.loginError,"onUpdate:value":n[6]||(n[6]=e=>F.bannerVal.loginError=e),mode:L.mode,label:e.t("notifications.loginError.messageLabel")},null,8,["value","mode","label"])]),(0,t.eW)(),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(F.errors,((e,n)=>((0,t.uX)(),(0,t.Wv)(T,{key:n,color:"error",label:e},null,8,["label"])))),128)),(0,t.eW)(),"edit"===L.mode?((0,t.uX)(),(0,t.CE)("div",C,[(0,t.bF)(A,{class:"pull-right mt-20",mode:"apply",onClick:L.save},null,8,["onClick"])])):(0,t.Q3)("",!0)]))}var F=a(62193),L=a.n(F),B=a(73317),T=a(45016),E=a(17793),I=a(17899);const D={class:"row mb-20"},A={class:"col span-12"},V={class:"row"},M={class:"col span-6"},U={key:0,class:"banner-input-footnote mt-5 mb-20"},z={key:1,class:"mt-10"},_={class:"col span-2"},H={class:"col span-2"},O={class:"col span-2"},G={class:"row mt-10"},X={class:"col span-6"},N={class:"col span-6"};function $(e,n,a,l,r,i){const s=(0,t.g2)("LabeledInput"),d=(0,t.g2)("Checkbox"),u=(0,t.g2)("RadioGroup"),b=(0,t.g2)("LabeledSelect"),c=(0,t.g2)("ColorInput");return(0,t.uX)(),(0,t.CE)("div",D,[(0,t.Lk)("div",A,[(0,t.Lk)("div",V,[(0,t.Lk)("div",M,[(0,t.bF)(s,{value:a.value[a.bannerType].text,"onUpdate:value":n[0]||(n[0]=e=>a.value[a.bannerType].text=e),disabled:i.isUiDisabled,label:e.t("banner.text"),type:"multiline"},null,8,["value","disabled","label"]),(0,t.eW)(),i.isConsentBanner?((0,t.uX)(),(0,t.CE)("p",U,(0,o.toDisplayString)(e.t("banner.consentFootnote")),1)):(0,t.Q3)("",!0),(0,t.eW)(),i.isConsentBanner?((0,t.uX)(),(0,t.CE)("div",z,[(0,t.bF)(d,{value:r.showAsDialog,"onUpdate:value":n[1]||(n[1]=e=>r.showAsDialog=e),name:"bannerDecoration",class:"banner-decoration-checkbox",mode:a.mode,label:e.t("banner.showAsDialog.label"),tooltip:e.t("banner.showAsDialog.tooltip")},null,8,["value","mode","label","tooltip"]),(0,t.eW)(),(0,t.bF)(s,{value:r.buttonText,"onUpdate:value":n[2]||(n[2]=e=>r.buttonText=e),disabled:!r.showAsDialog||i.isUiDisabled,label:e.t("banner.buttonText")},null,8,["value","disabled","label"])])):(0,t.Q3)("",!0)]),(0,t.eW)(),(0,t.Lk)("div",_,[(0,t.bF)(u,{value:a.value[a.bannerType].textAlignment,"onUpdate:value":n[3]||(n[3]=e=>a.value[a.bannerType].textAlignment=e),name:"bannerAlignment","data-testid":`banner_alignment_radio_options${a.bannerType}`,label:e.t("banner.bannerAlignment.label"),options:i.radioOptions.options,labels:i.radioOptions.labels,mode:a.mode},null,8,["value","data-testid","label","options","labels","mode"])]),(0,t.eW)(),(0,t.Lk)("div",H,[(0,t.Lk)("h3",null,(0,o.toDisplayString)(e.t("banner.bannerDecoration.label")),1),(0,t.eW)(),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(i.textDecorationOptions,((e,n)=>((0,t.uX)(),(0,t.CE)("div",{key:n},[(0,t.bF)(d,{value:a.value[a.bannerType][e.style],"onUpdate:value":n=>a.value[a.bannerType][e.style]=n,name:"bannerDecoration","data-testid":`banner_decoration_checkbox${a.bannerType}${e.label}`,class:"banner-decoration-checkbox",mode:a.mode,label:e.label},null,8,["value","onUpdate:value","data-testid","mode","label"])])))),128))]),(0,t.eW)(),(0,t.Lk)("div",O,[(0,t.bF)(b,{value:a.value[a.bannerType].fontSize,"onUpdate:value":n[4]||(n[4]=e=>a.value[a.bannerType].fontSize=e),"data-testid":`banner_font_size_options${a.bannerType}`,disabled:i.isUiDisabled,label:e.t("banner.bannerFontSize.label"),options:r.uiBannerFontSizeOptions},null,8,["value","data-testid","disabled","label","options"])])]),(0,t.eW)(),(0,t.Lk)("div",G,[(0,t.Lk)("div",X,[(0,t.bF)(c,{value:a.value[a.bannerType].color,"onUpdate:value":n[5]||(n[5]=e=>a.value[a.bannerType].color=e),"default-value":r.themeVars.bannerTextColor,label:e.t("banner.textColor"),mode:a.mode},null,8,["value","default-value","label","mode"])]),(0,t.eW)(),(0,t.Lk)("div",N,[(0,t.bF)(c,{value:a.value[a.bannerType].background,"onUpdate:value":n[6]||(n[6]=e=>a.value[a.bannerType].background=e),"default-value":r.themeVars.bannerBgColor,label:e.t("banner.background"),mode:a.mode},null,8,["value","default-value","label","mode"])])])])])}var Q=a(68408),K=a(76773),P=a(66070),R=a(4207),j=a(77444);const J={name:"BannerSettings",props:{value:{type:Object,default:()=>{}},mode:{type:String,validator(e){return[j.G5,j.nW].includes(e)},default:j.G5},bannerType:{type:String,required:!0}},components:{Checkbox:B.S,ColorInput:Q.A,LabeledInput:K.o,LabeledSelect:P.A,RadioGroup:R.z},data(){const e=!!this.value[this.bannerType]?.button||!1,n=this.value[this.bannerType]?.button||this.t("banner.showAsDialog.defaultButtonText");return{showAsDialog:e,buttonText:n,uiBannerFontSizeOptions:["10px","12px","14px","16px","18px","20px"],themeVars:{bannerBgColor:getComputedStyle(document.body).getPropertyValue("--default"),bannerTextColor:getComputedStyle(document.body).getPropertyValue("--banner-text-color")}}},watch:{showAsDialog(e,n){this.value[this.bannerType].button=e===n||e?this.buttonText:""},buttonText(e,n){e!==n&&(this.value[this.bannerType].button=e)}},computed:{radioOptions(){const e=["left","center","right"],n=[this.t("banner.bannerAlignment.leftOption"),this.t("banner.bannerAlignment.centerOption"),this.t("banner.bannerAlignment.rightOption")];return{options:e,labels:n}},isUiDisabled(){return this.mode===j.nW},textDecorationOptions(){const e=[{style:"fontWeight",label:this.t("banner.bannerDecoration.bannerBold")},{style:"fontStyle",label:this.t("banner.bannerDecoration.bannerItalic")},{style:"textDecoration",label:this.t("banner.bannerDecoration.bannerUnderline")}];return e},isConsentBanner(){return"bannerConsent"===this.bannerType}}};a(60592);var Y=a(66262);const q=(0,Y.A)(J,[["render",$],["__scopeId","data-v-2d8f6614"]]),Z=q;var ee=a(57735),ne=a(45848),ae=a(93133),te=a(25783),oe=a(13097);const le={class:"row mb-20"},re={class:"col span-6"},ie={class:"row mb-20"},se={class:"col span-6"},de={class:"row"},ue={class:"col span-12"};function be(e,n,a,o,l,r){const i=(0,t.g2)("Checkbox"),s=(0,t.g2)("LabeledInput");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",le,[(0,t.Lk)("div",re,[(0,t.bF)(i,{mode:a.mode,value:"true"===a.value.showMessage,label:e.t("notifications.loginError.showCheckboxLabel"),"onUpdate:value":n[0]||(n[0]=e=>a.value.showMessage=e.toString())},null,8,["mode","value","label"])])]),(0,t.eW)(),(0,t.Lk)("div",ie,[(0,t.Lk)("div",se,[(0,t.Lk)("div",de,[(0,t.Lk)("div",ue,[(0,t.bF)(s,{value:a.value.message,"onUpdate:value":n[1]||(n[1]=e=>a.value.message=e),mode:a.mode,disabled:"false"===a.value.showMessage,label:e.t("notifications.loginError.messageLabel")},null,8,["value","mode","disabled","label"])])])])])])}const ce={name:"NotificationSettings",components:{LabeledInput:K.o,Checkbox:B.S},props:{value:{type:Object,default:()=>{}},mode:{type:String,validator(e){return[j.G5,j.nW].includes(e)},default:j.G5}}};a(77215);const pe=(0,Y.A)(ce,[["render",be],["__scopeId","data-v-073d583a"]]),ve=pe;var he=a(15463);const ge={loginError:{message:"",showMessage:"false"},bannerHeader:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null},bannerFooter:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null},bannerConsent:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null,button:null},showHeader:"false",showFooter:"false",showConsent:"false"},me={components:{Checkbox:B.S,Loading:T.A,AsyncButton:E.A,Banner:I.l,BannerSettings:Z,NotificationSettings:ve},async fetch(){const e=await(0,ee.kR)({uiBannerSetting:this.$store.dispatch("management/find",{type:ne.Mc.SETTING,id:te.HG.BANNERS})});Object.assign(this,e),this.uiBannerIndividual=(0,he.zY)(this.$store)},data(){return{vendor:(0,ae.f7)(),uiBannerSetting:null,uiBannerIndividual:{},bannerVal:{},errors:[]}},computed:{mode(){const e=this.$store.getters["management/schemaFor"](ne.Mc.SETTING);return e?.resourceMethods?.includes("PUT")?j.G5:j.nW},headerMode(){return this.uiBannerIndividual.bannerHeader?j.nW:"true"===this.bannerVal?.showHeader?j.G5:j.nW},footerMode(){return this.uiBannerIndividual.bannerFooter?j.nW:"true"===this.bannerVal?.showFooter?j.G5:j.nW},consentMode(){return this.uiBannerIndividual.bannerConsent?j.nW:"true"===this.bannerVal?.showConsent?j.G5:j.nW}},watch:{uiBannerSetting(e){if(e?.value&&""!==e.value)try{const n=JSON.parse(e.value);this.bannerVal=this.checkOrUpdateLegacyUIBannerSetting(n),(0,he.HK)(this.bannerVal,this.uiBannerIndividual)}catch{}}},methods:{checkOrUpdateLegacyUIBannerSetting(e){const{bannerHeader:n,bannerFooter:a,bannerConsent:t,banner:o,loginError:l}=e;if(L()(n)&&L()(a)&&L()(t)){let n=ge;if(!L()(o)){const a=(0,oe.clone)(o??{});a?.textColor&&(a["color"]=a.textColor,delete a.textColor),n={bannerHeader:{...a},bannerFooter:{...a},loginError:{...ge.loginError,loginError:"false"===l?.showMessage?"false":"true"},bannerConsent:{...ge.bannerConsent},showHeader:"true"===e?.showHeader?"true":"false",showFooter:"true"===e?.showFooter?"true":"false",showConsent:"true"===e?.showConsent?"true":"false"}}return n}return L()(t)&&(e.bannerConsent={...ge.bannerConsent}),L()(l)&&(e.loginError={...ge.loginError}),e},async save(e){this.uiBannerSetting.value=JSON.stringify(this.bannerVal),this.errors=[];try{await Promise.all([this.uiBannerSetting.save()]),e(!0)}catch(n){this.errors.push(n),e(!1)}}}};a(19657);const fe=(0,Y.A)(me,[["render",W],["__scopeId","data-v-4b91ab5a"]]),ye=fe},60592:(e,n,a)=>{var t=a(62822);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=a(99548).A;o("121f01c0",t,!0,{sourceMap:!1,shadowMode:!1})},72745:(e,n,a)=>{var t=a(86183);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=a(99548).A;o("fcb61f92",t,!0,{sourceMap:!1,shadowMode:!1})},77215:(e,n,a)=>{var t=a(40705);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=a(99548).A;o("a60dfcd0",t,!0,{sourceMap:!1,shadowMode:!1})},19657:(e,n,a)=>{var t=a(55583);t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.id,t,""]]),t.locals&&(e.exports=t.locals);var o=a(99548).A;o("2aa72971",t,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=8881.6059a8b1.js.map