(function(t){function e(e){for(var c,o,i=e[0],u=e[1],d=e[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);h&&h(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var c={},o={app:0},a={app:0},r=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-02f26862":"ebdb5d74","chunk-0aed55e6":"4728f339","chunk-2d0c157b":"59772ea4","chunk-2d0c7b31":"aa44ce42","chunk-2d21a3f8":"4749cf5c","chunk-2d224580":"be407ace","chunk-4c0ebd0f":"bc2341c6","chunk-2d0c4a08":"b97f4134","chunk-4c9707d8":"c154c2f1","chunk-4c436342":"c885e42a","chunk-2d0c1767":"95ba9e72","chunk-2d208e27":"61e7dd5d","chunk-50214274":"bc252e6d","chunk-7603dbca":"70672b0e","chunk-96ed90f0":"b61179a2","chunk-a27c3b46":"892bd89f","chunk-05c50ea7":"5afa926c","chunk-43c0cb5a":"03c2486e","chunk-7e838096":"78efbbb2"}[t]+".js"}function u(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0aed55e6":1,"chunk-4c0ebd0f":1,"chunk-4c9707d8":1,"chunk-50214274":1,"chunk-7603dbca":1,"chunk-96ed90f0":1,"chunk-05c50ea7":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var c="css/"+({}[t]||t)+"."+{"chunk-02f26862":"31d6cfe0","chunk-0aed55e6":"89f9a577","chunk-2d0c157b":"31d6cfe0","chunk-2d0c7b31":"31d6cfe0","chunk-2d21a3f8":"31d6cfe0","chunk-2d224580":"31d6cfe0","chunk-4c0ebd0f":"6680f48e","chunk-2d0c4a08":"31d6cfe0","chunk-4c9707d8":"719ee674","chunk-4c436342":"31d6cfe0","chunk-2d0c1767":"31d6cfe0","chunk-2d208e27":"31d6cfe0","chunk-50214274":"ddbae743","chunk-7603dbca":"f9cd0a3d","chunk-96ed90f0":"2ce25f1c","chunk-a27c3b46":"31d6cfe0","chunk-05c50ea7":"b2461ce0","chunk-43c0cb5a":"31d6cfe0","chunk-7e838096":"31d6cfe0"}[t]+".css",a=u.p+c,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var d=r[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===c||s===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){d=f[i],s=d.getAttribute("data-href");if(s===c||s===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var c=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[t],h.parentNode.removeChild(h),n(r)},h.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){o[t]=0})));var c=a[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,n){c=a[t]=[e,n]}));e.push(c[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(t);var f=new Error;d=function(e){s.onerror=s.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,n[1](f)}a[t]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},u.m=t,u.c=c,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)u.d(n,c,function(e){return t[e]}.bind(null,c));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vue3Shop/",u.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var h=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("7bb1"),a=n("3aa8"),r=n("cbdf"),i=n("9457");function u(t,e){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(n)}n("9175");const d={};d.render=u;var s=d,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h=[{path:"/login",component:function(){return n.e("chunk-2d224580").then(n.bind(null,"e076"))}},{path:"/",name:"Layout",component:function(){return n.e("chunk-96ed90f0").then(n.bind(null,"535a"))},children:[{path:"",name:"Home",component:function(){return Promise.all([n.e("chunk-4c0ebd0f"),n.e("chunk-4c9707d8")]).then(n.bind(null,"a685"))}},{path:"product_list",name:"ProductList",component:function(){return n.e("chunk-02f26862").then(n.bind(null,"6654"))}},{path:"product/:productId",component:function(){return Promise.all([n.e("chunk-4c0ebd0f"),n.e("chunk-2d0c4a08")]).then(n.bind(null,"3c46"))}},{path:"cartList",component:function(){return n.e("chunk-7603dbca").then(n.bind(null,"ed28"))}},{path:"orderForm/:orderId",component:function(){return n.e("chunk-50214274").then(n.bind(null,"e2a9"))}},{path:"checkout",component:function(){return n.e("chunk-0aed55e6").then(n.bind(null,"5895"))}}]},{path:"/admin",component:function(){return Promise.all([n.e("chunk-4c436342"),n.e("chunk-2d208e27")]).then(n.bind(null,"a761"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-a27c3b46"),n.e("chunk-7e838096")]).then(n.bind(null,"dc0d"))}},{path:"orders",component:function(){return Promise.all([n.e("chunk-a27c3b46"),n.e("chunk-05c50ea7")]).then(n.bind(null,"0c78"))}},{path:"coupons",component:function(){return Promise.all([n.e("chunk-a27c3b46"),n.e("chunk-43c0cb5a")]).then(n.bind(null,"c5fc"))}}]},{path:"/user",component:function(){return Promise.all([n.e("chunk-4c436342"),n.e("chunk-2d0c1767")]).then(n.bind(null,"45c3"))},children:[{path:"cart",component:function(){return n.e("chunk-2d0c7b31").then(n.bind(null,"5275"))}},{path:"product/:productId",component:function(){return n.e("chunk-2d21a3f8").then(n.bind(null,"bb68"))}},{path:"checkout/:orderId",component:function(){return n.e("chunk-2d0c157b").then(n.bind(null,"4647"))}}]}],l=Object(f["a"])({history:Object(f["b"])(),routes:h}),p=l,m=n("bc3a"),g=n.n(m),b=n("2106"),v=n.n(b),k=n("9062"),O=n.n(k);n("e40d"),n("ac1f"),n("5319"),n("b680");function y(t){var e=parseInt(t,10);return"".concat(e.toFixed(0).replace(/./g,(function(t,e,n){return e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t})))}function A(t){var e=new Date(1e3*t);return e.toLocaleDateString()}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zh-TW",n=new Date(1e3*t);return n.toLocaleTimeString(e)}n("a15b");var T=n("cfb9"),S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(t.data.success)T["a"].emit("push-message",{style:"success",title:"".concat(e,"成功")});else{var n="string"===typeof t.data.message?[t.data.message]:t.data.message;T["a"].emit("push-message",{style:"danger",title:"".concat(e,"失敗"),content:n.join("、")})}},L=(n("cd74"),n("7b17"),n("5502")),P=(n("99af"),n("6062"),n("159b"),n("a630"),{namespaced:!0,state:{products:[],allProducts:[],categories:[],pagination:{}},actions:{getProducts:function(t){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/products/all");t.commit("LOADING",!0,{root:!0}),g.a.get(e).then((function(e){t.commit("PRODUCTS",e.data.products),t.commit("CATEGORIES",e.data.products),t.commit("LOADING",!1,{root:!0})}))},getAllProducts:function(t,e){var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/products/?page=").concat(e);t.commit("LOADING",!0,{root:!0}),g.a.get(n).then((function(e){t.commit("ALLPRODUCTS",e.data.products),t.commit("PAGINATION",e.data.pagination),t.commit("LOADING",!1,{root:!0})}))}},mutations:{PRODUCTS:function(t,e){t.products=e},ALLPRODUCTS:function(t,e){t.allProducts=e},CATEGORIES:function(t,e){var n=new Set;e.forEach((function(t){n.add(t.category)})),t.categories=Array.from(n)},PAGINATION:function(t,e){t.pagination=e}},getters:{products:function(t){return t.products},allProducts:function(t){return t.allProducts},categories:function(t){return t.categories},pagination:function(t){return t.pagination}}}),E={namespaced:!0,state:{cart:{},cartLength:0},actions:{getCart:function(t){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart");t.commit("LOADING",!0,{root:!0}),g.a.get(e).then((function(e){t.commit("CART",e.data.data),t.commit("CART_LENGTH",e.data.data.carts.length),t.commit("LOADING",!1,{root:!0})}))},removeCartItem:function(t,e){var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e);t.commit("LOADING",!0,{root:!0}),g.a.delete(n).then((function(e){t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart")}))},addCart:function(t,e){var n=e.id,c=e.qty,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart");t.commit("LOADING",!0,{root:!0});var a={product_id:n,qty:c};g.a.post(o,{data:a}).then((function(e){t.dispatch("getCart"),t.commit("LOADING",!1,{root:!0})}))},minusCartQty:function(t,e){t.state.cart.carts.forEach((function(n){e.product_id===n.product_id&&n.qty>1&&t.commit("MINUSCARTQTY",n)}));var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e.id),c={product_id:e.product_id,qty:e.qty};g.a.put(n,{data:c}).then((function(e){t.dispatch("getCart")}))},addCartQty:function(t,e){t.state.cart.carts.forEach((function(n){e.product_id===n.product_id&&t.commit("ADDCARTQTY",n)}));var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e.id),c={product_id:e.product_id,qty:e.qty};g.a.put(n,{data:c}).then((function(e){t.dispatch("getCart")}))}},mutations:{CART:function(t,e){t.cart=e},CART_LENGTH:function(t,e){t.cartLength=e},MINUSCARTQTY:function(t,e){e.qty-=1},ADDCARTQTY:function(t,e){e.qty+=1}},getters:{cart:function(t){return t.cart},cartLength:function(t){return t.cartLength}}},N=n("2909"),C=(n("c740"),n("a434"),{namespaced:!0,state:{favorites:{},favoritesLength:0,isFavorite:!1},actions:{setFavoriteProduct:function(t,e){localStorage.setItem(t,e)},toggleFavorite:function(t,e){var n="favoriteData",c=JSON.parse(localStorage.getItem("favoriteData"))||[];if(c){var o=c.findIndex((function(t){return t.id===e.id}));-1===o?(localStorage.setItem(n,JSON.stringify([].concat(Object(N["a"])(c),[e]))),this.isFavorite=!0):(c.splice(o,1),localStorage.setItem(n,JSON.stringify(c)),this.isFavorite=!1)}else this.setFavoriteProduct(n,JSON.stringify([e])),this.isFavorite=!0;t.dispatch("getFavorite")},getFavorite:function(t){var e=JSON.parse(localStorage.getItem("favoriteData"))||[];t.commit("FAVORITES",e),t.commit("FAVORITES_LENGTH",e.length),t.dispatch("productsModules/getProducts",{isPagination:!1},{root:!0})},addToFavorite:function(t,e){var n={id:e.id,title:e.title,imageUrl:e.imageUrl,price:e.price};t.commit("PUSH_FAVORITE",n),localStorage.setItem("favoriteData",JSON.stringify(t.state.favorites)),t.dispatch("getFavorite")},removeFavorite:function(t,e){var n=e.favoriteItem,c=e.delall;c?localStorage.removeItem("favoriteData"):(t.commit("REMOVE_FAVORITE",n),localStorage.setItem("favoriteData",JSON.stringify(t.state.favorites))),t.dispatch("getFavorite")}},mutations:{FAVORITES:function(t,e){t.favorites=e},FAVORITES_LENGTH:function(t,e){t.favoritesLength=e},PUSH_FAVORITE:function(t,e){t.favorites.push(e)},REMOVE_FAVORITE:function(t,e){t.favorites.forEach((function(n,c){n.id===e.id&&t.favorites.splice(c,1)}))}},getters:{favorites:function(t){return t.favorites},favoritesLength:function(t){return t.favoritesLength}}}),D=Object(L["a"])({state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{},modules:{productsModules:P,cartModules:E,favoriteModules:C}}),_=n("f9d5"),j=n.n(_);n("4413");Object(o["e"])("required",a["c"]),Object(o["e"])("email",a["a"]),Object(o["e"])("min",a["b"]),Object(o["d"])({generateMessage:Object(r["a"])({zh_TW:i}),validateOnInput:!0}),Object(r["b"])("zh_TW");var F=Object(c["createApp"])(s).use(D).use(p);F.config.globalProperties.$filters={currency:y,date:A,time:I},F.config.globalProperties.$httpMsgState=S,F.component("Form",o["c"]),F.component("Field",o["b"]),F.component("ErrorMessage",o["a"]),F.component("Loading",O.a),F.use(v.a,g.a),F.use(j.a),F.mount("#app")},9175:function(t,e,n){"use strict";n("c870")},c870:function(t,e,n){},cfb9:function(t,e,n){"use strict";var c=n("14b7"),o=Object(c["a"])();e["a"]=o}});
//# sourceMappingURL=app.8621d921.js.map