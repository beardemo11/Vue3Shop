(function(t){function e(e){for(var c,o,u=e[0],i=e[1],d=e[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);h&&h(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},o={app:0},a={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2b02f0c8":"bfd170f4","chunk-2d224580":"be407ace","chunk-3ac6de8e":"a1f19c14","chunk-4c436342":"c885e42a","chunk-2d0c1767":"95ba9e72","chunk-2d208e27":"61e7dd5d","chunk-54d67b8c":"3206664d","chunk-578de109":"1e25f7da","chunk-607ef4f8":"8600e02a","chunk-70f5b602":"eb5f5720","chunk-74998448":"48e0cdf2","chunk-9bee71e2":"ac896764","chunk-c1a51102":"67cde569","chunk-22e63cbc":"d4ec0196","chunk-7dcdd561":"b7b2c615","chunk-e5e66bf8":"52e48eb8","chunk-f79d6c3e":"e11bac28","chunk-2d0c4a08":"a132b8cf","chunk-4c9707d8":"c154c2f1"}[t]+".js"}function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-3ac6de8e":1,"chunk-54d67b8c":1,"chunk-607ef4f8":1,"chunk-9bee71e2":1,"chunk-7dcdd561":1,"chunk-f79d6c3e":1,"chunk-4c9707d8":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var c="css/"+({}[t]||t)+"."+{"chunk-2b02f0c8":"31d6cfe0","chunk-2d224580":"31d6cfe0","chunk-3ac6de8e":"89f9a577","chunk-4c436342":"31d6cfe0","chunk-2d0c1767":"31d6cfe0","chunk-2d208e27":"31d6cfe0","chunk-54d67b8c":"ddbae743","chunk-578de109":"31d6cfe0","chunk-607ef4f8":"2ce25f1c","chunk-70f5b602":"31d6cfe0","chunk-74998448":"31d6cfe0","chunk-9bee71e2":"35cf1b96","chunk-c1a51102":"31d6cfe0","chunk-22e63cbc":"31d6cfe0","chunk-7dcdd561":"b2461ce0","chunk-e5e66bf8":"31d6cfe0","chunk-f79d6c3e":"6680f48e","chunk-2d0c4a08":"31d6cfe0","chunk-4c9707d8":"719ee674"}[t]+".css",a=i.p+c,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===c||s===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){d=f[u],s=d.getAttribute("data-href");if(s===c||s===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var c=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[t],h.parentNode.removeChild(h),n(r)},h.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(h)})).then((function(){o[t]=0})));var c=a[t];if(0!==c)if(c)e.push(c[2]);else{var r=new Promise((function(e,n){c=a[t]=[e,n]}));e.push(c[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var f=new Error;d=function(e){s.onerror=s.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",f.name="ChunkLoadError",f.type=c,f.request=o,n[1](f)}a[t]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/eric-Vue3Shop/",i.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var f=0;f<d.length;f++)e(d[f]);var h=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o=n("7bb1"),a=n("3aa8"),r=n("cbdf"),u=n("9457");function i(t,e){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(n)}n("9175");const d={};d.render=i;var s=d,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h=[{path:"/login",component:function(){return n.e("chunk-2d224580").then(n.bind(null,"e076"))}},{path:"/",name:"Layout",component:function(){return n.e("chunk-607ef4f8").then(n.bind(null,"535a"))},children:[{path:"",name:"Home",component:function(){return Promise.all([n.e("chunk-f79d6c3e"),n.e("chunk-4c9707d8")]).then(n.bind(null,"a685"))}},{path:"product_list",name:"ProductList",component:function(){return n.e("chunk-2b02f0c8").then(n.bind(null,"6654"))}},{path:"product/:productId",component:function(){return Promise.all([n.e("chunk-f79d6c3e"),n.e("chunk-2d0c4a08")]).then(n.bind(null,"3c46"))}},{path:"cartList",component:function(){return n.e("chunk-9bee71e2").then(n.bind(null,"ed28"))}},{path:"orderForm/:orderId",component:function(){return n.e("chunk-54d67b8c").then(n.bind(null,"e2a9"))}},{path:"checkout",component:function(){return n.e("chunk-3ac6de8e").then(n.bind(null,"5895"))}}]},{path:"/admin",component:function(){return Promise.all([n.e("chunk-4c436342"),n.e("chunk-2d208e27")]).then(n.bind(null,"a761"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-c1a51102"),n.e("chunk-e5e66bf8")]).then(n.bind(null,"dc0d"))}},{path:"orders",component:function(){return Promise.all([n.e("chunk-c1a51102"),n.e("chunk-7dcdd561")]).then(n.bind(null,"0c78"))}},{path:"coupons",component:function(){return Promise.all([n.e("chunk-c1a51102"),n.e("chunk-22e63cbc")]).then(n.bind(null,"c5fc"))}}]},{path:"/user",component:function(){return Promise.all([n.e("chunk-4c436342"),n.e("chunk-2d0c1767")]).then(n.bind(null,"45c3"))},children:[{path:"cart",component:function(){return n.e("chunk-578de109").then(n.bind(null,"5275"))}},{path:"product/:productId",component:function(){return n.e("chunk-74998448").then(n.bind(null,"bb68"))}},{path:"checkout/:orderId",component:function(){return n.e("chunk-70f5b602").then(n.bind(null,"4647"))}}]}],l=Object(f["a"])({history:Object(f["b"])(),routes:h}),p=l,m=n("bc3a"),g=n.n(m),b=n("2106"),v=n.n(b),k=n("9062"),O=n.n(k);n("e40d"),n("ac1f"),n("5319"),n("b680");function y(t){var e=parseInt(t,10);return"".concat(e.toFixed(0).replace(/./g,(function(t,e,n){return e&&"."!==t&&(n.length-e)%3===0?", ".concat(t).replace(/\s/g,""):t})))}function A(t){var e=new Date(1e3*t);return e.toLocaleDateString()}function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zh-TW",n=new Date(1e3*t);return n.toLocaleTimeString(e)}n("a15b");var L=n("cfb9"),I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"更新";if(t.data.success)L["a"].emit("push-message",{style:"success",title:"".concat(e,"成功")});else{var n="string"===typeof t.data.message?[t.data.message]:t.data.message;L["a"].emit("push-message",{style:"danger",title:"".concat(e,"失敗"),content:n.join("、")})}},P=(n("cd74"),n("7b17"),n("5502")),S=(n("99af"),n("6062"),n("159b"),n("a630"),{namespaced:!0,state:{products:[],allProducts:[],categories:[],pagination:{}},actions:{getProducts:function(t){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/products/all");t.commit("LOADING",!0,{root:!0}),g.a.get(e).then((function(e){t.commit("PRODUCTS",e.data.products),t.commit("CATEGORIES",e.data.products),t.commit("LOADING",!1,{root:!0})}))},getAllProducts:function(t,e){var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/products/?page=").concat(e);t.commit("LOADING",!0,{root:!0}),g.a.get(n).then((function(e){t.commit("ALLPRODUCTS",e.data.products),t.commit("PAGINATION",e.data.pagination),t.commit("LOADING",!1,{root:!0})}))}},mutations:{PRODUCTS:function(t,e){t.products=e},ALLPRODUCTS:function(t,e){t.allProducts=e},CATEGORIES:function(t,e){var n=new Set;e.forEach((function(t){n.add(t.category)})),t.categories=Array.from(n)},PAGINATION:function(t,e){t.pagination=e}},getters:{products:function(t){return t.products},allProducts:function(t){return t.allProducts},categories:function(t){return t.categories},pagination:function(t){return t.pagination}}}),E={namespaced:!0,state:{cart:{},cartLength:0},actions:{getCart:function(t){var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart");t.commit("LOADING",!0,{root:!0}),g.a.get(e).then((function(e){t.commit("CART",e.data.data),t.commit("CART_LENGTH",e.data.data.carts.length),t.commit("LOADING",!1,{root:!0})}))},removeCartItem:function(t,e){var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e);t.commit("LOADING",!0,{root:!0}),g.a.delete(n).then((function(e){t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart")}))},addCart:function(t,e){var n=e.id,c=e.qty,o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart");t.commit("LOADING",!0,{root:!0});var a={product_id:n,qty:c};g.a.post(o,{data:a}).then((function(e){t.dispatch("getCart"),t.commit("LOADING",!1,{root:!0})}))},minusCartQty:function(t,e){t.state.cart.carts.forEach((function(n){e.product_id===n.product_id&&n.qty>1&&t.commit("MINUSCARTQTY",n)}));var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e.id),c={product_id:e.product_id,qty:e.qty};g.a.put(n,{data:c}).then((function(e){t.dispatch("getCart")}))},addCartQty:function(t,e){t.state.cart.carts.forEach((function(n){e.product_id===n.product_id&&t.commit("ADDCARTQTY",n)}));var n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/cart/").concat(e.id),c={product_id:e.product_id,qty:e.qty};g.a.put(n,{data:c}).then((function(e){t.dispatch("getCart")}))}},mutations:{CART:function(t,e){t.cart=e},CART_LENGTH:function(t,e){t.cartLength=e},MINUSCARTQTY:function(t,e){e.qty-=1},ADDCARTQTY:function(t,e){e.qty+=1}},getters:{cart:function(t){return t.cart},cartLength:function(t){return t.cartLength}}},C=(n("a434"),{namespaced:!0,state:{favorites:{},favoritesLength:0},actions:{getFavorite:function(t){var e=JSON.parse(localStorage.getItem("favoriteData"))||[];t.commit("FAVORITES",e),t.commit("FAVORITES_LENGTH",e.length),t.dispatch("productsModules/getProducts",{isPagination:!1},{root:!0})},addToFavorite:function(t,e){var n={id:e.id,title:e.title,imageUrl:e.imageUrl,price:e.price};t.commit("PUSH_FAVORITE",n),localStorage.setItem("favoriteData",JSON.stringify(t.state.favorites)),t.dispatch("getFavorite")},removeFavorite:function(t,e){var n=e.favoriteItem,c=e.delall;c?localStorage.removeItem("favoriteData"):(t.commit("REMOVE_FAVORITE",n),localStorage.setItem("favoriteData",JSON.stringify(t.state.favorites))),t.dispatch("getFavorite")}},mutations:{FAVORITES:function(t,e){t.favorites=e},FAVORITES_LENGTH:function(t,e){t.favoritesLength=e},PUSH_FAVORITE:function(t,e){t.favorites.push(e)},REMOVE_FAVORITE:function(t,e){t.favorites.forEach((function(n,c){n.id===e.id&&t.favorites.splice(c,1)}))}},getters:{favorites:function(t){return t.favorites},favoritesLength:function(t){return t.favoritesLength}}}),N=Object(P["a"])({state:{isLoading:!1},actions:{updateLoading:function(t,e){t.commit("LOADING",e)}},mutations:{LOADING:function(t,e){t.isLoading=e}},getters:{},modules:{productsModules:S,cartModules:E,favoriteModules:C}}),D=n("f9d5"),_=n.n(D);n("4413");Object(o["e"])("required",a["c"]),Object(o["e"])("email",a["a"]),Object(o["e"])("min",a["b"]),Object(o["d"])({generateMessage:Object(r["a"])({zh_TW:u}),validateOnInput:!0}),Object(r["b"])("zh_TW");var j=Object(c["createApp"])(s).use(N).use(p);j.config.globalProperties.$filters={currency:y,date:A,time:T},j.config.globalProperties.$httpMsgState=I,j.component("Form",o["c"]),j.component("Field",o["b"]),j.component("ErrorMessage",o["a"]),j.component("Loading",O.a),j.use(v.a,g.a),j.use(_.a),j.mount("#app")},9175:function(t,e,n){"use strict";n("c870")},c870:function(t,e,n){},cfb9:function(t,e,n){"use strict";var c=n("14b7"),o=Object(c["a"])();e["a"]=o}});
//# sourceMappingURL=app.4d5a4960.js.map