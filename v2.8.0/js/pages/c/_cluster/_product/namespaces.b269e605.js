(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/_product/namespaces"],{efd2:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return e.$fetchState.pending?t("Loading"):t("div",[t("Masthead",{attrs:{schema:e.schema,resource:e.NAMESPACE,"favorite-resource":e.VIRTUAL_TYPES.NAMESPACE,"create-location":e.createLocation}}),e._v(" "),t("ResourceTable",e._g(e._b({attrs:{schema:e.schema,headers:e.headers,rows:e.rows,groupable:!1,"group-tooltip":"resourceTable.groupBy.project","key-field":"_key"},scopedSlots:e._u([{key:"cell:project",fn:function(r){var a=r.row;return[a.project?t("span",[e._v(e._s(a.project.nameDisplay))]):t("span",{staticClass:"text-muted"},[e._v("–")])]}}])},"ResourceTable",e.$attrs,!1),e.$listeners))],1)},c=[],s=r("1da1"),o=(r("b0c0"),r("a34a")),n=r.n(o),u=(r("96cf"),r("b178")),p=r("9149"),i=r("a788"),l=r("c778"),d=r("39ce"),h={name:"ListNamespace",components:{Loading:l["a"],Masthead:d["a"],ResourceTable:u["a"]},props:{},fetch:function(){var e=this;return Object(s["a"])(n.a.mark((function t(){var r;return n.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.getters["currentStore"](i["E"]),e.schema=e.$store.getters["".concat(r,"/schemaFor")](i["E"]),t.next=4,e.$store.dispatch("".concat(r,"/findAll"),{type:i["E"]});case 4:e.rows=t.sent;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{rows:[],schema:null,NAMESPACE:i["E"],VIRTUAL_TYPES:i["db"]}},computed:{headers:function(){return[p["yb"],p["Y"],p["b"]]},createLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:this.$store.getters["currentProduct"].name,resource:i["E"]}}}}},f=h,m=r("0c7c"),b=Object(m["a"])(f,a,c,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=namespaces.b269e605.js.map