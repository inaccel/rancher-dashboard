(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{2426:function(e,t,r){"use strict";var n=r(7),c=r(58),o=r(6),l=(r(2),r(3),r(4),r(5),r(26),r(9));t.a=function(e,t,r){var v=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var d=Object(o.a)(regeneratorRuntime.mark((function o(d){var f,k,O,h,m,j;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(k=d.redirect,O=d.store,h=(null===(f=O.getters.currentCluster)||void 0===f?void 0:f.id)||"local",!O.getters["type-map/isProductActive"](e)){o.next=9;break}if(!r){o.next=7;break}if("object"!==Object(c.a)(r)){o.next=6;break}return o.abrupt("return",k(r));case 6:return o.abrupt("return",k({name:"c-cluster-product-resource",params:{cluster:h,product:e,resource:r}}));case 7:o.next=21;break;case 9:if(!v){o.next=20;break}return o.next=12,O.dispatch("catalog/load");case 12:if(!(m=O.getters["catalog/chart"]({chartName:t}))){o.next=17;break}return o.abrupt("return",k({name:"c-cluster-apps-charts-chart",params:{cluster:h},query:(j={},Object(n.a)(j,l.z,m.repoType),Object(n.a)(j,l.y,m.repoName),Object(n.a)(j,l.d,m.chartName),Object(n.a)(j,l.G,m.versions[0].version),j)}));case 17:O.dispatch("loadingError","Chart not found for ".concat(e));case 18:o.next=21;break;case 20:return o.abrupt("return",k({name:"c-cluster-explorer",params:{cluster:h}}));case 21:case"end":return o.stop()}}),o)})));return function(e){return d.apply(this,arguments)}}()}},2905:function(e,t,r){"use strict";r.r(t);r(18),r(19),r(15),r(10),r(35),r(17),r(36);var n=r(7),c=(r(2),r(3),r(4),r(5),r(39),r(29)),o=r(2426),l=r(350);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d={components:{LazyImage:r(572).a},middleware:Object(o.a)(l.NAME,l.CHART_NAME,void 0,!1),data:function(){return{externalLinks:[],neuvectorImgSrc:r(1449)}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["currentCluster"])),mounted:function(){this.externalLinks=[{enabled:!0,iconSrc:this.neuvectorImgSrc,label:"neuvector.overview.linkedList.neuvector.label",description:"neuvector.overview.linkedList.neuvector.description",link:"/k8s/clusters/".concat(this.currentCluster.id,"/api/v1/namespaces/").concat(l.NEU_VECTOR_NAMESPACE,"/services/https:neuvector-service-webui:8443/proxy")}]}},f=d,k=r(1),component=Object(k.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("header",{staticClass:"row"},[r("div",{staticClass:"col span-12"},[r("h1",[r("t",{attrs:{k:"neuvector.overview.title"}})],1),e._v(" "),r("div",[r("t",{attrs:{k:"neuvector.overview.subtitle",raw:!0}})],1)])]),e._v(" "),r("div",{staticClass:"links"},e._l(e.externalLinks,(function(t){return r("div",{key:t.label,staticClass:"link-container"},[r("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[r("div",{staticClass:"link-logo"},[r("LazyImage",{attrs:{src:t.iconSrc}})],1),e._v(" "),r("div",{staticClass:"link-content"},[r("t",{attrs:{k:t.label}}),e._v(" "),r("i",{staticClass:"icon icon-external-link pull-right"}),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"description"},[r("t",{attrs:{k:t.description}})],1)],1)])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=40048d2b547312c82926.js.map