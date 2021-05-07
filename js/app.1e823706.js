(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({documents:"documents",notFound:"notFound"}[e]||e)+"."+{documents:"461604ff",notFound:"67936ac8"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={documents:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({documents:"documents",notFound:"notFound"}[e]||e)+"."+{documents:"3fa04f52",notFound:"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/fetch-documents/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0117":function(e,t,n){"use strict";n("6cac")},"482f":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="https://frontend.apply.crosslend.dev/documents.json",a="https://frontend.apply.crosslend.dev/user/info.json"},5936:function(e,t,n){},"6cac":function(e,t,n){},7312:function(e,t,n){},b285:function(e,t,n){"use strict";n("5936")},b334:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));n("4de4"),n("b0c0");var r=function(e){var t=/\.pdf$|\.docx$/,n=e.documents,r=n.filter((function(e){return t.test(e.name)}));return r},a=function(e,t){return"asc"===e?t&&t.sort((function(e,t){return new Date(t.date).valueOf()-new Date(e.date).valueOf()})):t&&t.sort((function(e,t){return new Date(e.date).valueOf()-new Date(t.date).valueOf()})),t},o=function(e,t){return"asc"===e?t&&t.sort((function(e,t){return e.name.localeCompare(t.name)})):t&&t.sort((function(e,t){return t.name.localeCompare(e.name)})),t},c=function(e,t){var n=e.value,r=t.value;return new Date(n).getTime()>new Date(r).getTime()},u=function(e,t,n){var r=e.filter((function(e){var r=new Date(e.date).getTime();return r>=new Date(t).getTime()&&r<=new Date(n).getTime()}));return r}},b850:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n("2909"),a=(n("a4d3"),n("e01a"),n("d3b7"),n("7a23")),o=n("b334"),c=Object(a["x"])({documents:[],filteredDocuments:[],pagination:{currentPage:1,total:0,itemsPerPage:6},sortNameType:"",sortDateType:"asc"}),u={saveDocuments:function(e){c.documents=e,c.filteredDocuments=Object(r["a"])(c.documents)},setTotalOfPages:function(e){var t=e/c.pagination.itemsPerPage;e%c.pagination.itemsPerPage===0?c.pagination.total=~~t:c.pagination.total=1+~~t},goToFirstPage:function(){c.pagination.currentPage=1},goToPreviousPage:function(){1!==c.pagination.currentPage&&c.pagination.currentPage>=1&&(c.pagination.currentPage=c.pagination.currentPage-1)},goToNextPage:function(){c.pagination.currentPage<~~c.pagination.total&&(c.pagination.currentPage=c.pagination.currentPage+1)},goToLastPage:function(){c.pagination.currentPage=c.pagination.total},setSortDateType:function(e){c.sortDateType=e},sortByDate:function(e){c.documents="asc"===e?Object(o["d"])("asc",c.documents):Object(o["d"])("desc",c.documents)},setSortNameType:function(e){c.sortNameType=e},sortByName:function(e){c.documents="asc"===e?Object(o["e"])("asc",c.documents):Object(o["e"])("desc",c.documents)},filterByDate:function(e,t){var n=Object(o["c"])(c.filteredDocuments,e,t);void 0===n||0==n.length?(c.pagination.total=0,c.pagination.currentPage=0):c.pagination.currentPage=1,c.documents=Object(o["d"])("asc",n)},resetFilter:function(){c.documents=Object(r["a"])(c.filteredDocuments),this.sortByDate("asc"),c.pagination.currentPage=1}},i={pagination:function(){return c.pagination},totalPagintion:function(){return c.pagination.total},sortDateType:function(){return c.sortDateType},sortNameType:function(){return c.sortNameType},data:function(){return c.documents}},s=Symbol("Character Store"),l=Object(a["y"])({state:c,methods:u,getters:i});function f(){Object(a["v"])(s,l)}function d(){var e=Object(a["n"])(s);return e}},bc28:function(e,t,n){e.exports=n.p+"img/avatar.3eee137b.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["i"])(" Header Loading ... "),o={class:"main"},c=Object(r["j"])("span",{class:"loader"},null,-1);function u(e,t,n,u,i,s){var l=Object(r["C"])("Header"),f=Object(r["C"])("router-view"),d=Object(r["C"])("Footer");return Object(r["t"])(),Object(r["f"])(r["a"],null,[(Object(r["t"])(),Object(r["f"])(r["b"],null,{default:Object(r["J"])((function(){return[Object(r["j"])(l)]})),fallback:Object(r["J"])((function(){return[a]})),_:1})),Object(r["j"])("section",o,[Object(r["j"])(f,null,{default:Object(r["J"])((function(e){var t=e.Component;return[(Object(r["t"])(),Object(r["f"])(r["b"],{timeout:"0"},{default:Object(r["J"])((function(){return[(Object(r["t"])(),Object(r["f"])(Object(r["D"])(t)))]})),fallback:Object(r["J"])((function(){return[c]})),_:2},1024))]})),_:1})]),Object(r["j"])(d)],64)}var i=n("b850"),s=n("eb7e"),l=n.n(s),f=n("bc28"),d=n.n(f),b=Object(r["L"])("data-v-0bb4ae7e");Object(r["w"])("data-v-0bb4ae7e");var p={class:"header"},m={class:"header__inner"},j=Object(r["j"])("img",{alt:"Company logo",src:l.a,class:"header__logo"},null,-1),v=Object(r["i"])("Home"),g=Object(r["i"])("Documents"),O=Object(r["i"])("Contacts"),h={class:"header__links--user"},y=Object(r["j"])("img",{src:d.a,alt:"avatar"},null,-1),_={class:"user-info"},w=Object(r["j"])("span",{class:"navbar-toggler-icon"},null,-1);Object(r["u"])();var P=b((function(e,t,n,a,o,c){var u=Object(r["C"])("router-link");return Object(r["t"])(),Object(r["f"])("header",p,[Object(r["j"])("div",m,[Object(r["j"])(u,{to:"/"},{default:b((function(){return[j]})),_:1}),Object(r["j"])("div",{class:["header__links",{opened:e.mobileMenuOpen}]},[Object(r["j"])("nav",null,[Object(r["j"])("ul",null,[Object(r["j"])("li",null,[Object(r["j"])(u,{to:"/"},{default:b((function(){return[v]})),_:1})]),Object(r["j"])("li",null,[Object(r["j"])(u,{to:"/documents"},{default:b((function(){return[g]})),_:1})]),Object(r["j"])("li",null,[Object(r["j"])(u,{to:"/"},{default:b((function(){return[O]})),_:1})])])]),Object(r["j"])("div",h,[y,Object(r["j"])("div",_,[Object(r["j"])("div",null,Object(r["F"])(e.userFirstName),1),Object(r["j"])("div",null,Object(r["F"])(e.userLastName),1)])])],2),Object(r["j"])("button",{type:"button",class:"navbar-toggler",onClick:t[1]||(t[1]=function(){return e.showMobileMenu&&e.showMobileMenu.apply(e,arguments)})},[w])])])})),T=n("1da1"),D=(n("96cf"),n("d994")),k=n("482f");function N(){return x.apply(this,arguments)}function x(){return x=Object(T["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,c,u,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=Object(D["a"])(k["b"]),n=t.response,a=t.request,o=t.error,c=Object(r["z"])(""),u=Object(r["z"])(""),i=Object(r["z"])(!1),!1!==i.value){e.next=11;break}return e.next=7,a();case 7:s=n.value,c.value=null===s||void 0===s?void 0:s.body.User.profile.firstName,u.value=null===s||void 0===s?void 0:s.body.User.profile.lastName,i.value=!0;case 11:return e.abrupt("return",{userFirstName:c,userLastName:u,userInfo:n,error:o});case 12:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var C=Object(r["k"])({name:"Header",setup:function(){return Object(T["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,n=t.userFirstName,a=t.userLastName,o=Object(r["z"])(!1),c=function(){o.value=!o.value},e.abrupt("return",{showMobileMenu:c,mobileMenuOpen:o,userFirstName:n,userLastName:a});case 8:case"end":return e.stop()}}),e)})))()}});n("0117");C.render=P,C.__scopeId="data-v-0bb4ae7e";var F=C,S={class:"footer"},L=Object(r["h"])('<div class="footer__inner"><ul class="footer__inner--nav"><li class="footer__inner--nav-item">© Copyrights</li><li class="footer__inner--nav-item">All rights reserved</li></ul><ul class="footer__inner--nav"><li class="footer__inner--nav-item">Imprint</li><li class="footer__inner--nav-item">Terms of use</li><li class="footer__inner--nav-item">Privacy policy</li></ul></div>',1);function M(e,t,n,a,o,c){return Object(r["t"])(),Object(r["f"])("footer",S,[L])}var A=Object(r["k"])({name:"Footer"});n("ddc8");A.render=M;var E=A,B=Object(r["k"])({name:"App",components:{Header:F,Footer:E},setup:function(){Object(i["a"])()}});n("b285");B.render=u;var J=B,z=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),H=[{path:"/",redirect:"/documents"},{path:"/documents",name:"Documents",component:function(){return n.e("documents").then(n.bind(null,"fb2d"))}},{path:"/:catchAll(.*)",component:function(){return n.e("notFound").then(n.bind(null,"9703"))}}],R=Object(z["a"])({history:Object(z["b"])(),routes:H}),q=R,I=n("7b37");Object(r["e"])(J).use(q).use(I["a"],{}).mount("#app")},d994:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1da1"),a=(n("96cf"),n("d3b7"),n("7a23"));function o(e,t){var n=Object(a["z"])(),o=Object(a["z"])(!1),c=function(){var a=Object(r["a"])(regeneratorRuntime.mark((function r(){var a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch(e,t);case 2:return a=r.sent,a.ok||(o.value=a),r.next=6,a.json();case 6:c=r.sent,n.value=c;case 8:case"end":return r.stop()}}),r)})));return function(){return a.apply(this,arguments)}}();return{response:n,request:c,error:o}}},ddc8:function(e,t,n){"use strict";n("7312")},eb7e:function(e,t,n){e.exports=n.p+"img/company.1d5d2001.svg"}});
//# sourceMappingURL=app.1e823706.js.map