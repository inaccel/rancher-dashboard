(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/auth/verify"],{3682:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e._self._c;return r("main",{staticClass:"main-layout"},[r("h1",{staticClass:"text-center mt-50"},[e.testing?r("span",[e._v("\n      Testing Configuration…\n    ")]):r("span",[e._v("\n      Logging In…\n    ")])])])},a=[],o=t("1da1"),c=t("a34a"),i=t.n(c),s=(t("96cf"),t("ac1f"),t("caad"),t("fa3b")),u=t("de78"),l=t("72f8"),p=t("6fc2"),d=["ping","adfs","keycloak","okta","shibboleth"];function h(e,r){try{window.opener.window.onAuthTest(e,r),setTimeout((function(){window.close()}),250)}catch(t){window.close()}}var f={layout:"unauthenticated",fetch:function(e){return Object(o["a"])(i.a.mark((function r(){var t,n,a,o,c,u,d,h,f,w,g,b,v,y,k,x,O,m,q;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=e.store,n=e.route,a=e.redirect,o=n.query[s["l"]],c=n.query[s["m"]],u=n.query,d=u.error,h=u.error_description,f=u.errorCode,w=u.errorMsg,!(d||h||f||w)){r.next=9;break}return g=h||d||f,w&&(g=t.getters["i18n/withFallback"]("login.serverError.".concat(w),null,w)),a("/auth/login?err=".concat(escape(g))),r.abrupt("return");case 9:r.prev=9,b=JSON.parse(Object(l["a"])(c)),r.next=19;break;case 13:return r.prev=13,r.t0=r["catch"](9),v=t.getters["i18n/t"]("login.error"),console.error("Failed to parse nonce"),a("/auth/login?err=".concat(escape(v))),r.abrupt("return");case 19:if(y=b,k=y.test,x=y.provider,O=y.nonce,!k){r.next=22;break}return r.abrupt("return");case 22:return r.prev=22,r.next=25,t.dispatch("auth/verifyOAuth",{code:o,nonce:O,provider:x});case 25:if(m=r.sent,200!==m._status){r.next=33;break}return q=n.query[s["b"]]||"/",r.next=30,Object(p["a"])({app:t.app,store:t,$plugin:t.$plugin});case 30:a(q),r.next=34;break;case 33:a("/auth/login?err=".concat(escape(m)));case 34:r.next=39;break;case 36:r.prev=36,r.t1=r["catch"](22),a("/auth/login?err=".concat(escape(r.t1)));case 39:case"end":return r.stop()}}),r,null,[[9,13],[22,36]])})))()},data:function(){var e=this.$route.query[s["m"]]||"",r={};try{r=JSON.parse(Object(l["a"])(e))}catch(a){}var t=r,n=t.test;return{testing:n}},mounted:function(){if(this.testing)try{var e=this.$route.query,r=e.error,t=e.error_description,n=e[s["l"]],a=e.errorMsg,o=t||r||(n?null:"No code supplied by auth provider");a&&(o=this.$store.getters["i18n/withFallback"]("login.serverError.".concat(a),null,a)),h(o,n)}catch(l){window.close()}else{var c=this.$route.query;if(window.opener){var i=Object(u["get"])(c,"config");d.includes(i)&&(window.opener.window.onAuthTest?h(null,null):h({err:"failure"}))}}}},w=f,g=t("0c7c"),b=Object(g["a"])(w,n,a,!1,null,null,null);r["default"]=b.exports}}]);
//# sourceMappingURL=verify.88e5daf3.js.map