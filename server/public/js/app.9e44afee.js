(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],d=0,f=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"337d":function(t,e,r){t.exports=r.p+"img/arrow-left.0a554ab5.svg"},"3a2b":function(t,e){},"4f37":function(t,e,r){},5402:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("transition",{attrs:{name:"fade"}},[r("router-view")],1)],1)},i=[],n={},c=n,o=(r("034f"),r("2877")),l=Object(o["a"])(c,a,i,!1,null,null,null),u=l.exports,d=r("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home center"},[s("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[s("div",{on:{click:t.goToStart}},[s("img",{staticClass:"main-logo",attrs:{src:r("e347")}})])])],1)},p=[],m={methods:{goToStart(){this.$router.push("/start")}}},v=m,h=(r("cccb"),Object(o["a"])(v,f,p,!1,null,null,null)),g=h.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start center"},[s("div",{staticClass:"small-logo",on:{click:t.toMainPage}},[s("img",{attrs:{src:r("6be8")}})]),s("div",{staticClass:"circle-main circle-layer-3 center"},[s("div",{staticClass:"circle-main circle-layer-2 center"},[s("div",{staticClass:"circle-main circle-layer-1 center shdow",on:{click:t.findUsers}},[s("p",{staticClass:"text"},[t._v("START")])])])])])},_=[],C={methods:{findUsers(){this.$store.dispatch({type:"startUsersSearch"}),this.$router.push("/users")},toMainPage(){this.$router.push("/")}}},b=C,w=Object(o["a"])(b,y,_,!1,null,null,null),x=w.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"users-list"},[t.isLoading?r("div",[r("loading")],1):r("div",{staticClass:"container users-row"},[r("returnArrow"),r("search"),t.users?r("div",{staticClass:"row d-flex justify-content-between"},[r("div",{staticClass:"col-sm-7"},[r("div",{staticClass:"num-of-users align"},[r("p",[t._v(t._s(t.numOfUsers)+" Found")])]),r("transition-group",{attrs:{name:"list"}},t._l(t.users,(function(t){return r("div",{key:t.id},[r("userPreview",{attrs:{user:t}})],1)})),0)],1),r("div",{staticClass:"col-sm-4"},[t._m(0),r("div",[r("filterBar",{attrs:{data:t.criterias}})],1),r("div",{staticClass:"row city-filter"},[r("div",{staticClass:"col-sm-12"},[t._m(1),r("div",[r("filterBar",{attrs:{data:t.cities}})],1)])])])]):t._e()],1)])},$=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"num-of-users align"},[r("p",[t._v("criteria")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"num-of-users align"},[r("p",[t._v("city")])])}],j=r("2f62"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user-preview align"},[r("div",{staticClass:"align user-container"},[r("div",{staticClass:"profile-img"}),r("div",{staticClass:"user-details"},[r("p",{staticClass:"city"},[t._v(t._s(t.user.city))]),r("p",{staticClass:"name"},[t._v(t._s(t.user.name))])])]),r("div",[r("p",{staticClass:"criteria align"},[t._v(t._s(t.user.criteria))])])])},S=[],k={props:{user:Object}},E=k,P=Object(o["a"])(E,L,S,!1,null,null,null),U=P.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading center"},[r("returnArrow"),t._m(0)],1)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"circle-load-layer-3 circle-main center"},[r("div",{staticClass:"circle-load-layer-2 circle-main center"},[r("div",{staticClass:"circle-load-layer-1 circle-main center"})])])}],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scanning-container"},[s("div",{staticClass:"return-arrow center",on:{click:t.goBack}},[s("img",{attrs:{src:r("337d"),alt:""}})]),s("div",[s("p",{staticClass:"arrow-text"},[t._v(t._s(t.isLoading?"scanning...":"results"))])])])},T=[],M={computed:{isLoading(){return this.$store.getters.getIsLoading}},methods:{goBack(){this.$router.push("/start"),this.$store.commit({type:"clearSearchAndCriteria"})}}},F=M,N=Object(o["a"])(F,I,T,!1,null,null,null),K=N.exports,J={components:{returnArrow:K}},D=J,Q=Object(o["a"])(D,A,B,!1,null,null,null),R=Q.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filters"},t._l(t.data,(function(e){return r("div",{key:e},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"checkbox-border"},[r("input",{attrs:{type:"checkbox",id:e},domProps:{value:e},on:{change:function(r){return t.setCriteriaFilter(e)}}})]),r("label",{attrs:{for:e}},[t._v(t._s(e))])])])})),0)},W=[],q={props:{data:Array},methods:{setCriteriaFilter(t){this.$store.commit({type:"setFilterByCriteria",item:t})}}},z=q,G=r("3a2b"),H=r.n(G),X=Object(o["a"])(z,V,W,!1,null,null,null);"function"===typeof H.a&&H()(X);var Y=X.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search"},[r("div",{staticClass:"search-container"},[r("div",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:"search"}})],1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Quick search..."},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.filterUsers]}})])])},tt=[],et={data(){return{search:""}},methods:{filterUsers(){this.$store.commit({type:"setFilterByText",data:this.search})}}},rt=et,st=Object(o["a"])(rt,Z,tt,!1,null,null,null),at=st.exports,it={data(){return{criterias:["Normal","Advanced","Expert"],cities:["Vancouver","Chennai","Quito"]}},computed:{...Object(j["b"])({users:"getUsers",isLoading:"getIsLoading",numOfUsers:"getNumOfUsers"})},created(){this.$store.dispatch({type:"startUsersSearch"})},components:{userPreview:U,loading:R,returnArrow:K,filterBar:Y,search:at}},nt=it,ct=(r("7af6"),Object(o["a"])(nt,O,$,!1,null,null,null)),ot=ct.exports;s["a"].use(d["a"]);const lt=[{path:"/",name:"home",component:g},{path:"/start",name:"start",component:x},{path:"/users",name:"users",component:ot}],ut=new d["a"]({routes:lt});var dt=ut;s["a"].use(j["a"]);var ft=new j["a"].Store({state:{users:null,isLoading:!1,searchKeyword:"",criteria:[]},getters:{getUsers(t){const{searchKeyword:e,criteria:r}=t;return e?t.users.filter(t=>t.name.toLowerCase().includes(e.toLowerCase())||t.city.toLowerCase().includes(e.toLowerCase())):r.length?t.users.filter(t=>r.includes(t.criteria)||r.includes(t.city)):t.users},getIsLoading(t){return t.isLoading},getNumOfUsers(t){return t.users.length}},mutations:{setDataModel(t,{data:e}){t.users=e},setIsLoading(t,{condition:e}){t.isLoading=e},setFilterByText(t,{data:e}){t.searchKeyword=e},setFilterByCriteria(t,{item:e}){if(t.criteria.includes(e)){const r=t.criteria.findIndex(t=>t===e);t.criteria.splice(r,1)}else t.criteria.push(e)},clearSearchAndCriteria(t){t.searchKeyword="",t.criteria=[]}},actions:{startUsersSearch(t){const e=new WebSocket("ws://localhost:3000");t.commit({type:"setIsLoading",condition:!0}),e.onopen=()=>{e.send("start"),e.onmessage=e=>{let r=setInterval(()=>{t.commit({type:"setDataModel",data:JSON.parse(e.data)}),t.commit({type:"setIsLoading",condition:!1}),clearInterval(r)},3e3)}}}},modules:{}}),pt=(r("4f37"),r("5402"),r("5ad5"),r("a334"),r("ecee")),mt=r("c074"),vt=r("ad3d");pt["c"].add(mt["a"]),s["a"].component("font-awesome-icon",vt["a"]),s["a"].config.productionTip=!1,new s["a"]({router:dt,store:ft,render:function(t){return t(u)}}).$mount("#app")},"5ad5":function(t,e,r){},"5ced":function(t,e,r){},"6be8":function(t,e,r){t.exports=r.p+"img/logo-text.365089a5.svg"},"7af6":function(t,e,r){"use strict";r("e9dc")},"85ec":function(t,e,r){},a334:function(t,e,r){},cccb:function(t,e,r){"use strict";r("5ced")},e347:function(t,e,r){t.exports=r.p+"img/logo.3318b717.svg"},e9dc:function(t,e,r){}});
//# sourceMappingURL=app.9e44afee.js.map