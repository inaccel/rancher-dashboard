(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{2671:function(e,t,r){"use strict";var n=r(6),c=r(66),o=r(7),l=(r(2),r(3),r(4),r(5),r(26),r(9));t.a=function(e,t,r){var d=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return function(){var v=Object(o.a)(regeneratorRuntime.mark((function o(v){var h,f,k,m,O,j;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f=v.redirect,k=v.store,m=(null===(h=k.getters.currentCluster)||void 0===h?void 0:h.id)||"local",!k.getters["type-map/isProductActive"](e)){o.next=9;break}if(!r){o.next=7;break}if("object"!==Object(c.a)(r)){o.next=6;break}return o.abrupt("return",f(r));case 6:return o.abrupt("return",f({name:"c-cluster-product-resource",params:{cluster:m,product:e,resource:r}}));case 7:o.next=21;break;case 9:if(!d){o.next=20;break}return o.next=12,k.dispatch("catalog/load");case 12:if(!(O=k.getters["catalog/chart"]({chartName:t}))){o.next=17;break}return o.abrupt("return",f({name:"c-cluster-apps-charts-chart",params:{cluster:m},query:(j={},Object(n.a)(j,l.z,O.repoType),Object(n.a)(j,l.y,O.repoName),Object(n.a)(j,l.d,O.chartName),Object(n.a)(j,l.G,O.versions[0].version),j)}));case 17:k.dispatch("loadingError","Chart not found for ".concat(e));case 18:o.next=21;break;case 20:return o.abrupt("return",f({name:"c-cluster-explorer",params:{cluster:m}}));case 21:case"end":return o.stop()}}),o)})));return function(e){return v.apply(this,arguments)}}()}},3190:function(e,t,r){"use strict";r.r(t);r(21),r(22),r(16),r(10),r(35),r(18),r(36);var n=r(6),c=(r(2),r(3),r(4),r(5),r(31)),o=r(2671),l=r(656);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={components:{LazyImage:r(645).a},middleware:Object(o.a)(l.NAME,l.CHART_NAME),data:function(){return{externalLinks:[],longhornImgSrc:r(1596)}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)(["currentCluster"])),mounted:function(){this.externalLinks=[{enabled:!0,iconSrc:this.longhornImgSrc,label:"longhorn.overview.linkedList.longhorn.label",description:"longhorn.overview.linkedList.longhorn.description",link:"/k8s/clusters/".concat(this.currentCluster.id,"/api/v1/namespaces/longhorn-system/services/http:longhorn-frontend:80/proxy/")}]},methods:{}},h=v,f=r(1),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("header",{staticClass:"row"},[r("div",{staticClass:"col span-12"},[r("h1",[r("t",{attrs:{k:"longhorn.overview.title"}})],1),e._v(" "),r("div",[r("t",{attrs:{k:"longhorn.overview.subtitle",raw:!0}})],1)])]),e._v(" "),r("div",{staticClass:"links"},e._l(e.externalLinks,(function(t){return r("div",{key:t.label,staticClass:"link-container"},[r("a",{attrs:{href:t.link,target:"_blank",rel:"noopener noreferrer"}},[r("div",{staticClass:"link-logo"},[r("LazyImage",{attrs:{src:t.iconSrc}})],1),e._v(" "),r("div",{staticClass:"link-content"},[r("t",{attrs:{k:t.label}}),e._v(" "),r("i",{staticClass:"icon icon-external-link pull-right"}),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"description"},[r("t",{attrs:{k:t.description}})],1)],1)])])})),0)])}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=79025a9c9d93550baef2.js.map