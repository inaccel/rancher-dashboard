(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f00f8c8"],{"0823":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".modal{border-radius:var(--border-radius);max-height:100vh}.modal.card-container{box-shadow:none}",""]),t.exports=e},"318b":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.awsNotification?e("div",{staticClass:"aws-compliance"},[t._v("\n  "+t._s(t.awsNotification.message)+"\n")]):t._e()},i=[],r=n("1da1"),o=(n("7db0"),n("d3b7"),n("a34a")),s=n.n(o),c=(n("96cf"),n("a788")),u={fetch:function(){var t=this;return Object(r["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.getters["management/schemaFor"](c["F"].USER_NOTIFICATION)){e.next=4;break}return e.next=3,t.$store.dispatch("management/findAll",{type:c["F"].USER_NOTIFICATION});case 3:t.notifications=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{notifications:[]}},computed:{awsNotification:function(){return this.notifications.find((function(t){return"csp-adapter"===t.componentName}))}}},l=u,d=(n("5e40"),n("0c7c")),f=Object(d["a"])(l,a,i,!1,null,"d5d708ce",null);e["a"]=f.exports},"3ee9":function(t,e,n){var a=n("5387");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("38962c62",a,!0,{sourceMap:!1,shadowMode:!1})},"4ecd":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".footer[data-v-39359c62]{width:100%;display:flex;justify-content:center}.banner[data-v-39359c62]{margin-bottom:0}",""]),t.exports=e},5387:function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".aws-compliance[data-v-d5d708ce]{background-color:var(--error);color:var(--error-text);line-height:2em;width:100%}.aws-compliance[data-v-d5d708ce],.aws-compliance>p[data-v-d5d708ce]{text-align:center}",""]),t.exports=e},"54fd":function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return t.showWarning?e("div",{staticClass:"banner",attrs:{id:"azure-warn"}},[e("p",[t._v("\n    "+t._s(t.t("authConfig.azuread.updateEndpoint.banner.message"))+"\n    "),e("router-link",{attrs:{to:t.authConfigRoute}},[t._v("\n      "+t._s(t.t("authConfig.azuread.updateEndpoint.banner.linkText"))+"\n    ")])],1)]):t._e()},i=[],r=n("1da1"),o=n("a34a"),s=n.n(o),c=(n("96cf"),n("a788")),u=n("de78"),l=n("7388"),d=n("0a0d"),f={fetch:function(){var t=this;return Object(r["a"])(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.$store.getters["isRancher"]||!t.$store.getters["management/schemaFor"](c["F"].AUTH_CONFIG)){e.next=4;break}return e.next=3,t.$store.dispatch("rancher/find",{type:c["L"].AUTH_CONFIG,id:"azuread",opt:{url:"/v3/".concat(c["L"].AUTH_CONFIG,"/azuread")}});case 3:t.authConfig=e.sent;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{authConfig:null,authConfigRoute:{name:"c-cluster-auth-config-id",params:{cluster:this.$route.params.cluster||d["a"],id:"azuread"}}}},computed:{showWarning:function(){return!!this.authConfig&&("true"!==Object(u["get"])(this.authConfig,'annotations."'.concat(l["c"],'"'))&&this.authConfig.enabled)}}},v=f,h=(n("9e15"),n("0c7c")),p=Object(h["a"])(v,a,i,!1,null,"06a043b9",null);e["a"]=p.exports},"5e40":function(t,e,n){"use strict";n("3ee9")},"629c":function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,"#azure-warn[data-v-06a043b9]{background-color:var(--warning);color:var(--warning-text);line-height:2em;width:100%}#azure-warn>p[data-v-06a043b9]{text-align:center}",""]),t.exports=e},"66a4":function(t,e,n){var a=n("4ecd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("727a2bc0",a,!0,{sourceMap:!1,shadowMode:!1})},"6c41":function(t,e,n){var a=n("629c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("49e6801e",a,!0,{sourceMap:!1,shadowMode:!1})},"7f63":function(t,e,n){var a=n("0823");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("21d9d12a",a,!0,{sourceMap:!1,shadowMode:!1})},"85d2":function(t,e,n){"use strict";n("a8af")},"9e15":function(t,e,n){"use strict";n("6c41")},a8af:function(t,e,n){var a=n("c034");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("499e").default;i("7eafc7df",a,!0,{sourceMap:!1,shadowMode:!1})},aef8:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t._self._c;return t.isOpen?e("ModalWithCard",{ref:"inactivityModal",attrs:{name:"inactivityModal","save-text":"Continue"},on:{finish:t.resume},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n    "+t._s(t.isInactiveTexts.title)+"\n  ")]},proxy:!0},{key:"content",fn:function(){return[e("Banner",{attrs:{color:"info"}},[t._v("\n      "+t._s(t.isInactiveTexts.banner)+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.isInactiveTexts.content)+"\n    ")]),t._v(" "),t.isInactive?t._e():e("PercentageBar",{staticClass:"mt-20",attrs:{value:t.timerPercentageLeft,"color-stops":t.colorStops}})]},proxy:!0},{key:"footer",fn:function(){return[e("div",{staticClass:"card-actions"},[t.isInactive?t._e():e("button",{staticClass:"btn role-tertiary bg-primary",on:{click:function(e){return e.preventDefault(),t.resume.apply(null,arguments)}}},[e("t",{attrs:{k:"inactivity.cta"}})],1),t._v(" "),t.isInactive?e("button",{staticClass:"btn role-tertiary bg-primary",on:{click:function(e){return e.preventDefault(),t.refresh.apply(null,arguments)}}},[e("t",{attrs:{k:"inactivity.ctaExpired"}})],1):t._e()])]},proxy:!0}],null,!1,1654444506)},[t._v(" "),e("span",[t._v(t._s(t.courtesyCountdown))])]):t._e()},r=[],o=n("1da1"),s=n("a34a"),c=n.n(s),u=(n("96cf"),n("99af"),n("b0c0"),function(){var t=this,e=t._self._c;return e("app-modal",t._b({staticClass:"modal",attrs:{name:t.name,width:t.width,"click-to-close":!1,height:t.height,"data-testid":"mvc__card"},on:{close:function(e){return t.$emit("finish",e)}}},"app-modal",t.$attrs,!1),[e("Card",{staticClass:"modal",attrs:{"show-highlight-border":!1},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"text-default-text",attrs:{slot:"title"},slot:"title"},[t._t("title")],2)]},proxy:!0},{key:"body",fn:function(){return[t._t("content"),t._v(" "),t._l(t.errors,(function(t,n){return e("div",{key:n},[e("Banner",{staticClass:"banner",attrs:{color:"error",label:t}})],1)}))]},proxy:!0},{key:"actions",fn:function(){return[t._t("footer",(function(){return[e("div",{staticClass:"footer"},[e("button",{staticClass:"btn role-secondary mr-20",on:{click:function(e){return e.preventDefault(),t.hide.apply(null,arguments)}}},[t._v("\n            "+t._s(t.closeText)+"\n          ")]),t._v(" "),e("AsyncButton",{attrs:{mode:t.saveText},on:{click:function(e){return t.$emit("finish",e)}}})],1)]}))]},proxy:!0}],null,!0)})],1)}),l=[],d=(n("a9e3"),n("d4bf")),f=n("bec1"),v=n("67c9"),h=n("8dbe"),p={name:"ModalWithCard",components:{Card:d["a"],Banner:f["a"],AsyncButton:v["b"],AppModal:h["a"]},props:{name:{type:String,required:!0},closeText:{type:String,default:"Close"},saveText:{type:String,default:"create"},width:{type:[String,Number],default:"50%"},height:{type:[String,Number],default:"auto"},errors:{type:Array,default:function(){return[]}}},methods:{hide:function(){this.$emit("close")}}},m=p,y=(n("e87a"),n("e2f6"),n("0c7c")),b=Object(y["a"])(m,u,l,!1,null,"39359c62",null),w=b.exports,_=n("7269"),g=n("0f32"),x=n.n(g),I=n("a788"),k=n("c5b9"),C={name:"Inactivity",components:{ModalWithCard:w,Banner:f["a"],PercentageBar:_["a"]},data:function(){return{enabled:null,isOpen:!1,isInactive:!1,showModalAfter:null,inactivityTimeoutId:null,courtesyTimer:null,courtesyTimerId:null,courtesyCountdown:null,trackInactivity:x()(this._trackInactivity,1e3),id:null}},mounted:function(){var t=this;return Object(o["a"])(c.a.mark((function e(){var n,a,i,r,o,s,u,l,d,f;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("management/find",{type:I["F"].SETTING,id:k["c"].UI_PERFORMANCE});case 3:d=e.sent,l=null!==d&&void 0!==d&&d.value?JSON.parse(d.value):k["b"],e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:if(l&&null!==(n=l)&&void 0!==n&&n.inactivity&&null!==(a=l)&&void 0!==a&&a.inactivity.enabled){e.next=11;break}return e.abrupt("return");case 11:t.enabled=(null===(i=l)||void 0===i||null===(r=i.inactivity)||void 0===r?void 0:r.enabled)||!1,f=60*(null===(o=l)||void 0===o||null===(s=o.inactivity)||void 0===s?void 0:s.threshold),t.courtesyTimer=Math.floor(.1*f),t.courtesyTimer=Math.min(t.courtesyTimer,300),t.showModalAfter=f-t.courtesyTimer,console.debug("Inactivity modal will show after ".concat(t.showModalAfter/60,"(m) and be shown for ").concat(t.courtesyTimer/60,"(m)")),t.courtesyCountdown=t.courtesyTimer,null!==(u=l)&&void 0!==u&&u.inactivity.enabled&&(t.trackInactivity(),t.addIdleListeners());case 19:case"end":return e.stop()}}),e,null,[[0,7]])})))()},beforeDestroy:function(){this.removeEventListener(),this.clearAllTimeouts()},methods:{_trackInactivity:function(){var t=this;if(!this.isInactive&&!this.isOpen&&this.showModalAfter){this.clearAllTimeouts();var e=Date.now()+1e3*this.showModalAfter;this.id=e,a=e;var n=function n(){var i=Date.now();t.id===a&&(i>=e?(t.isOpen=!0,t.startCountdown()):t.inactivityTimeoutId=setTimeout(n,1e3))};n()}},startCountdown:function(){var t=this,e=Date.now()+1e3*this.courtesyCountdown,n=function n(){var a=Date.now();a>=e?(t.isInactive=!0,t.unsubscribe(),t.clearAllTimeouts()):(t.courtesyCountdown=Math.floor((e-a)/1e3),t.courtesyTimerId=setTimeout(n,1e3))};n()},addIdleListeners:function(){document.addEventListener("mousemove",this.trackInactivity),document.addEventListener("mousedown",this.trackInactivity),document.addEventListener("keypress",this.trackInactivity),document.addEventListener("touchmove",this.trackInactivity),document.addEventListener("visibilitychange",this.trackInactivity)},removeEventListener:function(){document.removeEventListener("mousemove",this.trackInactivity),document.removeEventListener("mousedown",this.trackInactivity),document.removeEventListener("keypress",this.trackInactivity),document.removeEventListener("touchmove",this.trackInactivity),document.removeEventListener("visibilitychange",this.trackInactivity)},resume:function(){this.isInactive=!1,this.isOpen=!1,this.courtesyCountdown=this.courtesyTimer,this.clearAllTimeouts()},refresh:function(){window.location.reload()},unsubscribe:function(){console.debug("Unsubscribing from all websocket events"),this.$store.dispatch("unsubscribe")},clearAllTimeouts:function(){clearTimeout(this.inactivityTimeoutId),clearTimeout(this.courtesyTimerId)}},computed:{isInactiveTexts:function(){return this.isInactive?{title:this.t("inactivity.titleExpired"),banner:this.t("inactivity.bannerExpired"),content:this.t("inactivity.contentExpired")}:{title:this.t("inactivity.title"),banner:this.t("inactivity.banner"),content:this.t("inactivity.content")}},timerPercentageLeft:function(){return Math.floor(this.courtesyCountdown/this.courtesyTimer*100)},colorStops:function(){return{0:"--info",30:"--info",70:"--info"}}}},T=C,M=(n("85d2"),Object(y["a"])(T,i,r,!1,null,"65f382f1",null));e["a"]=M.exports},c034:function(t,e,n){var a=n("4bad");e=a(!1),e.push([t.i,".card-actions[data-v-65f382f1]{display:flex;width:100%;justify-content:flex-end}",""]),t.exports=e},e2f6:function(t,e,n){"use strict";n("7f63")},e87a:function(t,e,n){"use strict";n("66a4")}}]);
//# sourceMappingURL=chunk-7f00f8c8.0ce56c8a.js.map