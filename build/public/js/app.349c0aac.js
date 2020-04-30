(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1:function(t,e){},"1cf3":function(t,e,n){},3226:function(t,e,n){"use strict";var r=n("abd6"),a=n.n(r);a.a},"5a85":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(t,e,n){},"9fff":function(t,e,n){"use strict";var r=n("1cf3"),a=n.n(r);a.a},a144:function(t,e,n){},abd6:function(t,e,n){},b27a:function(t,e,n){"use strict";var r=n("5a85"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("img",{staticClass:"app__logo",attrs:{alt:"Valiu logo",src:n("f3c4")}}),r("Tags",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},o=[],c=n("d4ec"),i=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},[n("h3",{staticClass:"tags__title"},[t._v("Etiquetas")]),n("Create",{attrs:{placeholder:"Añadir etiqueta"}}),n("List")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create"},[n("div",{staticClass:"create__input--wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"create__input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTag(e)},input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("button",{staticClass:"create__action",on:{click:t.createTag}},[t._v("Guardar")])]),n("span",{staticClass:"error_msg"},[t._v(t._s(t.errors[0]))])])},b=[],h=(n("99af"),n("2909")),v=n("bee2"),g=n("2fe1"),m=n("4bb5"),O=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.title="",t.errors=[],t}return Object(v["a"])(n,[{key:"mounted",value:function(){this.actionGetTags()}},{key:"randomColor",value:function(){return this.availableColors[Math.floor(Math.random()*this.availableColors.length)]}},{key:"handleError",value:function(t){var e=this;this.errors=[t].concat(Object(h["a"])(this.errors)),setTimeout((function(){e.errors.pop()}),3e3)}},{key:"createTag",value:function(){this.title?(this.actionCreateTag({title:this.title,color:this.randomColor()}),this.title=""):this.handleError("El campo no puede estar vacío")}}]),n}(r["a"]);Object(u["a"])([Object(l["c"])()],O.prototype,"placeholder",void 0),Object(u["a"])([m["b"]],O.prototype,"availableColors",void 0),Object(u["a"])([Object(m["a"])("CREATE_TAG")],O.prototype,"actionCreateTag",void 0),Object(u["a"])([Object(m["a"])("GET_TAGS")],O.prototype,"actionGetTags",void 0),O=Object(u["a"])([g["b"]],O);var _=O,j=_,T=(n("d087"),n("2877")),w=Object(T["a"])(j,f,b,!1,null,"f04a70f0",null),y=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags?n("ul",t._l(t.tags,(function(t){return n("Item",{key:t._id,attrs:{data:t}})})),1):n("div",[t._m(0)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("No tienes "),n("strong",[t._v("etiquetas")]),t._v(" creadas")])}],k=n("5530"),x=n("2f62"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item"},[n("span",{staticClass:"item__color",style:t.setDotColor}),"show"===t.mode?[n("p",{staticClass:"item__title"},[t._v(t._s(t.data.title))]),n("Actions",{attrs:{"actions-labels":["Editar","Borrar"]},on:{"on-first":function(e){return t.changeMode("edit")},"on-second":function(e){return t.changeMode("delete")}}})]:t._e(),"edit"===t.mode?[n("div",{staticClass:"item__edit--wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTitle,expression:"newTitle"}],attrs:{type:"text"},domProps:{value:t.newTitle},on:{input:function(e){e.target.composing||(t.newTitle=e.target.value)}}}),n("span",{staticClass:"error_msg"},[t._v(t._s(t.errors[0]))])]),n("Actions",{attrs:{"actions-labels":["Guardar","Cancelar"]},on:{"on-first":t.updateTag,"on-second":function(e){return t.changeMode("show")}}})]:t._e(),"delete"===t.mode?[n("p",{staticClass:"item__title"},[t._v("⚠️ ¿Quieres eliminar la etiqueta "),n("strong",[t._v(t._s(t.data.title))]),t._v("?")]),n("Actions",{attrs:{"actions-labels":["¡Si, seguro!","Cancelar"]},on:{"on-first":t.deleteTag,"on-second":function(e){return t.changeMode("show")}}})]:t._e()],2)},S=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"actions"},[n("button",{on:{click:t.onFirst}},[t._v(t._s(t.actionsLabels[0]))]),n("button",{on:{click:t.onSecond}},[t._v(t._s(t.actionsLabels[1]))])])},G=[],M=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(v["a"])(n,[{key:"onFirst",value:function(){return null}},{key:"onSecond",value:function(){return null}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],M.prototype,"actions-labels",void 0),Object(u["a"])([Object(l["b"])()],M.prototype,"onFirst",null),Object(u["a"])([Object(l["b"])()],M.prototype,"onSecond",null),M=Object(u["a"])([l["a"]],M);var D=M,P=D,L=(n("b27a"),Object(T["a"])(P,R,G,!1,null,"55665694",null)),N=L.exports,$=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.mode="show",t.errors=[],t}return Object(v["a"])(n,[{key:"changeMode",value:function(t){this.mode=t}},{key:"handleError",value:function(t){var e=this;this.errors=[t].concat(Object(h["a"])(this.errors)),setTimeout((function(){e.errors.pop()}),3e3)}},{key:"updateTag",value:function(){this.title?(this.actionUpdateTag({id:this.data._id,title:this.title}),this.changeMode("show")):(this.title=this.data.title,this.handleError("El campo no puede estar vacío"))}},{key:"deleteTag",value:function(){this.actionDeleteTag(this.data._id)}},{key:"newTitle",get:function(){return this.data.title},set:function(t){this.title=t}},{key:"setDotColor",get:function(){return{backgroundColor:this.data.color}}}]),n}(l["d"]);Object(u["a"])([Object(l["c"])()],$.prototype,"data",void 0),Object(u["a"])([Object(m["a"])("UPDATE_TAG")],$.prototype,"actionUpdateTag",void 0),Object(u["a"])([Object(m["a"])("DELETE_TAG")],$.prototype,"actionDeleteTag",void 0),$=Object(u["a"])([Object(l["a"])({components:{Actions:N}})],$);var U=$,F=U,V=(n("3226"),Object(T["a"])(F,A,S,!1,null,"7af01b12",null)),q=V.exports,I=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);I=Object(u["a"])([Object(l["a"])({components:{Item:q},computed:Object(k["a"])({},Object(x["e"])(["tags"]))})],I);var K=I,B=K,J=Object(T["a"])(B,E,C,!1,null,null,null),Y=J.exports,Q=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);Q=Object(u["a"])([Object(l["a"])({components:{Create:y,List:Y}})],Q);var W=Q,z=W,H=(n("9fff"),Object(T["a"])(z,p,d,!1,null,"15ebe761",null)),X=H.exports,Z=function(t){Object(i["a"])(n,t);var e=Object(s["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);Z=Object(u["a"])([Object(l["a"])({components:{Tags:X}})],Z);var tt=Z,et=tt,nt=(n("5c0b"),Object(T["a"])(et,a,o,!1,null,null,null)),rt=nt.exports,at=n("9483");Object(at["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("c740"),n("d81d"),n("a434"),n("96cf");var ot=n("1da1"),ct=n("bc3a"),it=n.n(ct),st={getTags:function(){return Object(ot["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,it()({method:"GET",url:"http://localhost:3000/api/tags"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},createTag:function(t){return Object(ot["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it()({method:"POST",url:"http://localhost:3000/api/tags",data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},updateTag:function(t){return Object(ot["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,r=t.title,e.next=3,it()({method:"PUT",url:"http://localhost:3000/api/tags/".concat(n),data:{title:r}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},deleteTag:function(t){return Object(ot["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,it()({method:"DELETE",url:"http://localhost:3000/api/tags/".concat(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()}};r["a"].use(x["a"]);var ut={tags:[],availableColors:["#721cb5","#4eb9bc","#afc0dd","#f0b345","#4455d4","#4895eb"]},lt=new x["a"].Store({state:ut,mutations:{SET_TAGS:function(t,e){t.tags=e},SOCKET_ADD_TAG:function(t,e){t.tags=[e].concat(Object(h["a"])(t.tags))},SOCKET_MODIFY_TAG:function(t,e){t.tags=t.tags.map((function(t){return e._id===t._id?e:t}))},SOCKET_REMOVE_TAG:function(t,e){var n=t.tags.findIndex((function(t){return t._id==e}));t.tags.splice(n,1)}},actions:{GET_TAGS:function(t){return Object(ot["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,st.getTags();case 3:r=e.sent,a=r.data,n("SET_TAGS",a.data);case 6:case"end":return e.stop()}}),e)})))()},CREATE_TAG:function(t,e){return Object(ot["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:st.createTag(e);case 1:case"end":return t.stop()}}),t)})))()},UPDATE_TAG:function(t,e){return Object(ot["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.id,r=e.title,st.updateTag({id:n,title:r});case 2:case"end":return t.stop()}}),t)})))()},DELETE_TAG:function(t,e){return Object(ot["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:st.deleteTag(e);case 1:case"end":return t.stop()}}),t)})))()}}}),pt=n("f87c"),dt=n("8055"),ft=n.n(dt),bt=function(t){var e=ft()(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_SOCKET_SERVER||"http://localhost:3000");r["a"].use(pt["a"],e,{store:t})};bt(lt),r["a"].config.productionTip=!1,new r["a"]({store:lt,render:function(t){return t(rt)}}).$mount("#app")},d087:function(t,e,n){"use strict";var r=n("a144"),a=n.n(r);a.a},f3c4:function(t,e,n){t.exports=n.p+"img/valiu-logo.707d9b53.png"}});
//# sourceMappingURL=app.349c0aac.js.map