(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/auth/config/index"],{cebb:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e._self._c;return n("div",[n("h1",{staticClass:"m-0"},[e._v("\n    "+e._s(e.displayName)+"\n  ")]),e._v(" "),e.enabled.length?e._e():n("Banner",{attrs:{label:e.t("authConfig.noneEnabled"),color:"info"}},[n("div",[e._v("\n      "+e._s(e.t("authConfig.localEnabled"))+"\n      "),n("nuxt-link",{attrs:{to:e.localUsersRoute}},[e._v("\n        "+e._s(e.t("authConfig.manageLocal"))+"\n      ")]),e._v(" "),n("br"),e._v("\n      "+e._s(e.t("authConfig.noneEnabled"))+"\n    ")],1)]),e._v(" "),n("SelectIconGrid",{attrs:{rows:e.rows,"color-for":e.colorFor,"name-field":"provider"},on:{clicked:function(n){return e.goTo(n.id)}}})],1)},o=[],r=t("ade3"),c=t("1da1"),s=t("a34a"),u=t.n(s),i=(t("96cf"),t("a788")),l=t("c4a1"),d=t("b25d"),p=t("fa3b"),h=t("c47f"),f=t("bec1"),b={components:{SelectIconGrid:l["a"],Banner:f["a"]},asyncData:function(e){return Object(c["a"])(u.a.mark((function n(){var t,a,o;return u.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.store,a=e.redirect,n.next=3,Object(h["a"])(t);case 3:return o=n.sent,o.enabledLocation&&a(o.enabledLocation),n.abrupt("return",{nonLocal:o.nonLocal,enabled:o.enabled});case 6:case"end":return n.stop()}}),n)})))()},data:function(){var e=i["B"].AUTH_CONFIG,n=this.$store.getters,t=n["currentStore"](e),a=n["type-map/hasCustomList"](e),o=n["type-map/hasCustomEdit"](e),r=n["".concat(t,"/schemaFor")](e);return{resource:e,schema:r,hasListComponent:a,hasEditComponent:o,nonLocal:null}},computed:{rows:function(){return Object(d["b"])(this.nonLocal,["sideLabel","nameDisplay"])},displayName:function(){return this.$store.getters["type-map/labelFor"](this.schema,2)},localUsersRoute:function(){return{name:"c-cluster-product-resource",params:{cluster:this.$route.params.cluster,product:"auth",resource:i["B"].USER}}}},methods:{colorFor:function(e){var n=["ldap","oauth","saml","oidc"],t=n.indexOf(e.configType);return-1===t?"color8":"color".concat(t+1)},goTo:function(e){this.$router.push({name:"c-cluster-auth-config-id",params:{id:e},query:Object(r["a"])({},p["t"],p["M"])})}}},m=b,v=t("0c7c"),_=Object(v["a"])(m,a,o,!1,null,null,null);n["default"]=_.exports}}]);
//# sourceMappingURL=index.216db233.js.map