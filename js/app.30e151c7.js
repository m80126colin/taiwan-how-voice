(function(t){function e(e){for(var a,s,u=e[0],c=e[1],o=e[2],d=0,f=[];d<u.length;d++)s=u[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/howcaloid/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var o=0;o<u.length;o++)e(u[o]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),i=n.n(a);i.a},1860:function(t,e,n){"use strict";var a=n("be36"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui container",attrs:{id:"app"}},[n("div",{staticClass:"ui center aligned basic segment"},[n("Paginator",{attrs:{countPage:t.countPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("div",{staticClass:"ui doubling stackable four column grid"},t._l(t.paging,(function(t){return n("div",{key:t.id,staticClass:"ui column"},[n("Card",{attrs:{item:t}})],1)})),0),n("div",{staticClass:"ui center aligned basic segment"},[n("Paginator",{attrs:{countPage:t.countPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},r=[],s=(n("d81d"),n("fb6a"),n("96cf"),n("1da1")),u=n("2ef0"),c=n.n(u),o=n("bc3a"),l=n.n(o),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui segments"},[n("div",{staticClass:"ui clearing cardtitle segment"},[n("h3",{staticClass:"ui right floated header"},[n("span",{staticClass:"sub header"},[t._v(t._s(t.item.date))])]),n("h3",{staticClass:"ui left floated header"},[t._v(t._s(t.item.song))])]),n("div",{staticClass:"ui embed",attrs:{id:t.item.id}}),n("div",{staticClass:"ui segment"},[n("span",{staticClass:"mini sub header"},[t._v(t._s(t.item.title))]),n("div",t._l(t.item.credit,(function(e){return n("span",{key:e},[n("i",{staticClass:"user icon"}),t._v(t._s(e)+" ")])})),0),t._l(t.item.tag,(function(e){return n("span",{key:e,staticClass:"ui blue"},[t._v("#"+t._s(e))])}))],2),n("div",{staticClass:"ui clearing segment"},[t._m(0),n("a",{staticClass:"ui right floated red circular icon button",attrs:{target:"_blank",href:"https://www.youtube.com/watch?v="+t.item.id}},[n("i",{staticClass:"youtube icon"})])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui views left floated basic segment"},[n("i",{staticClass:"eye icon"}),t._v(" -- "),n("i",{staticClass:"like icon"}),t._v(" -- ")])}],p={name:"card",props:["item"],mounted:function(){this.updateEmbed()},methods:{updateEmbed:function(){var t=this;$("#".concat(t.item.id,".ui.embed")).embed({id:t.item.id,source:"youtube"})}}},v=p,g=(n("1860"),n("2877")),m=Object(g["a"])(v,d,f,!1,null,"5adac398",null),b=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui basic buttons"},[t.value-2>0?t._l(Math.min(2,t.value-2),(function(e){return n("div",{key:e,staticClass:"ui button",on:{click:function(n){return t.toPage(e)}}},[t._v(t._s(e))])})):t._e(),t.value-4>0?n("div",{staticClass:"ui disabled icon button"},[n("i",{staticClass:"ellipsis horizontal icon"})]):t._e(),t.value-1>0?n("div",{key:t.value-1,staticClass:"ui button",on:{click:function(e){return t.toPage(t.value-1)}}},[t._v(t._s(t.value-1))]):t._e(),n("div",{staticClass:"ui disabled button"},[t._v(t._s(t.value))]),t.value+1<=t.countPage?n("div",{key:t.value+1,staticClass:"ui button",on:{click:function(e){return t.toPage(t.value+1)}}},[t._v(t._s(t.value+1))]):t._e(),t.countPage-t.value-3>0?n("div",{staticClass:"ui disabled icon button"},[n("i",{staticClass:"ellipsis horizontal icon"})]):t._e(),t.countPage-t.value-1>0?t._l(t.tailPage,(function(e){return n("div",{key:e,staticClass:"ui button",on:{click:function(n){return t.toPage(e)}}},[t._v(t._s(e))])})):t._e()],2)},P=[],C={name:"pagingator",props:["countPage","value"],computed:{tailPage:function(){var t=this;if(t.countPage-t.value-1<=0)return[];var e=Math.min(2,t.countPage-t.value-1);return _.map(_.range(e),(function(n){return t.countPage+n+1-e}))}},methods:{toPage:function(t){this.$emit("input",t)}}},y=C,w=Object(g["a"])(y,h,P,!1,null,null,null),k=w.exports,x={name:"App",components:{Card:b,Paginator:k},data:function(){return{pageIndex:0,perPage:12,list:[]}},computed:{countPage:function(){var t=this;return Math.ceil(t.list.length/t.perPage)},currentPage:{get:function(){return this.pageIndex+1},set:function(t){this.pageIndex=t-1}},paging:function(){var t=this,e=t.pageIndex*t.perPage;return t.list.slice(e,e+t.perPage)}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,l.a.get("videos.json");case 3:i=e.sent,r=i.data,s=c.a.chain(r).map((function(t){return c.a.merge(t,{timestamp:new Date("".concat(t.date," 00:00:00")).getTime()})})).sort((function(t,e){return t.timestamp!==e.timestamp?e.timestamp-t.timestamp:t.song<e.song?-1:t.song>e.song?1:0})).value(),a["a"].set(n,"list",s);case 7:case"end":return e.stop()}}),e)})))()}},O=x,j=(n("034f"),Object(g["a"])(O,i,r,!1,null,null,null)),M=j.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,n){},be36:function(t,e,n){}});
//# sourceMappingURL=app.30e151c7.js.map