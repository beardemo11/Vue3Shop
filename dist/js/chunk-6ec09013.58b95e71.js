(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ec09013"],{1799:function(e,t,r){"use strict";var c=r("7a23"),a={"aria-label":"Page navigation example"},n={class:"pagination pagination-lg justify-content-center"},o=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function s(e,t,r,s,l,d){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",a,[Object(c["createVNode"])("ul",n,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!r.paginationData.has_pre}]},[Object(c["createVNode"])("button",{type:"button",class:"page-link",onClick:t[1]||(t[1]=function(e){return d.changePage("pre")})},[o])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(r.paginationData.total_pages,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["page-item",{active:e===r.paginationData.current_page}],key:e},[Object(c["createVNode"])("button",{type:"button",class:"page-link",onClick:function(t){return d.changePage(e)},disabled:e===r.paginationData.current_page},Object(c["toDisplayString"])(e),9,["onClick","disabled"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!r.paginationData.has_next}]},[Object(c["createVNode"])("button",{type:"button",class:"page-link","aria-label":"Next",onClick:t[2]||(t[2]=function(e){return d.changePage("next")})},[i])],2)])])}var l={emits:["getData"],props:["paginationData"],methods:{changePage:function(e){var t=e;"next"===e?t=this.paginationData.current_page+1:"pre"===e&&(t=this.paginationData.current_page-1),this.$emit("getData",t)}}};l.render=s;t["a"]=l},2532:function(e,t,r){"use strict";var c=r("23e7"),a=r("5a34"),n=r("1d80"),o=r("ab13");c({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~String(n(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,r){var c=r("861d"),a=r("c6b6"),n=r("b622"),o=n("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"466d":function(e,t,r){"use strict";var c=r("d784"),a=r("825a"),n=r("50c4"),o=r("1d80"),i=r("8aa5"),s=r("14c3");c("match",(function(e,t,r){return[function(t){var r=o(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,r):new RegExp(t)[e](String(r))},function(e){var c=r(t,this,e);if(c.done)return c.value;var o=a(this),l=String(e);if(!o.global)return s(o,l);var d=o.unicode;o.lastIndex=0;var u,f=[],b=0;while(null!==(u=s(o,l))){var p=String(u[0]);f[b]=p,""===p&&(o.lastIndex=i(l,n(o.lastIndex),d)),b++}return 0===b?null:f}]}))},"498a":function(e,t,r){"use strict";var c=r("23e7"),a=r("58a8").trim,n=r("c8d2");c({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},"4de4":function(e,t,r){"use strict";var c=r("23e7"),a=r("b727").filter,n=r("1dde"),o=n("filter");c({target:"Array",proto:!0,forced:!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var c=r("1d80"),a=r("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),i=RegExp(n+n+"*$"),s=function(e){return function(t){var r=String(c(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:s(1),end:s(2),trim:s(3)}},"5a34":function(e,t,r){var c=r("44e7");e.exports=function(e){if(c(e))throw TypeError("The method doesn't accept regular expressions");return e}},6654:function(e,t,r){"use strict";r.r(t);r("caad"),r("2532");var c=r("7a23"),a={class:"container py-5"},n={class:"row"},o={class:"col-lg-3"},i=Object(c["createVNode"])("h1",{class:"h2 pb-4 fw-bold"},"韓國旅遊景點",-1),s={class:"list-unstyled templatemo-accordion"},l={class:"pb-3"},d={class:"col-lg-9"},u={class:"row"},f=Object(c["createVNode"])("div",{class:"col-md-6"},[Object(c["createVNode"])("ul",{class:"list-inline shop-top-menu pb-3 pt-1"},[Object(c["createVNode"])("li",{class:"list-inline-item"},[Object(c["createVNode"])("a",{class:"h3 text-dark text-decoration-none mr-3 fw-bold",href:"#"})])])],-1),b={class:"col-md-6 pb-4"},p={class:"d-flex"},g={class:"modal-content modal-body border-0 p-0"},h={class:"input-group mb-2"},O=Object(c["createVNode"])("i",{class:"fa fa-fw fa-search text-white"},null,-1),j={class:"row"},v={class:"card mb-4 product-wap rounded-0"},x={class:"card rounded-0"},m={class:"\r\n                    card-img-overlay\r\n                    rounded-0\r\n                    product-overlay\r\n                    d-flex\r\n                    align-items-center\r\n                    justify-content-center\r\n                  "},y={class:"list-unstyled"},N=Object(c["createVNode"])("i",{class:"far fa-eye"},null,-1),V=Object(c["createVNode"])("i",{class:"fas fa-cart-plus"},null,-1),w={class:"card-body"},P=Object(c["createStaticVNode"])('<ul class="list-unstyled d-flex justify-content-center mb-1"><li><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-warning fa fa-star"></i><i class="text-muted fa fa-star"></i><i class="text-muted fa fa-star"></i></li></ul>',1),k={key:0,class:"d-flex justify-content-center"},D={class:"text-center mb-0 fw-bold"},C={key:1,class:"d-flex justify-content-between"},B={class:"text-muted fs-9"},T={class:"text-start mb-0 fw-bold"},S={key:0},_={class:"col-12 mb-4"},$={class:"no-results bg-grayf8"};function F(e,t,r,F,M,E){var R=this,L=Object(c["resolveComponent"])("Pagination");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",o,[i,Object(c["createVNode"])("ul",s,[Object(c["createVNode"])("li",l,[Object(c["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return E.changeCategories("")}),["prevent"])),class:["\r\n                collapsed\r\n                d-flex\r\n                justify-content-between\r\n                h3\r\n                text-decoration-none\r\n                fw-bold\r\n              ",{"text-success":""===M.filterText||void 0===M.filterText}]},"全部景點 ",2)]),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.categories,(function(e){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:"pb-3",key:e},[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(t){return E.changeCategories(e)}),["prevent"]),class:["\r\n                collapsed\r\n                d-flex\r\n                justify-content-between\r\n                h3\r\n                text-decoration-none\r\n                fw-bold\r\n              ",{"text-success":M.filterText===e}]},Object(c["toDisplayString"])(e),11,["onClick"])],512)),[[c["vShow"],"Banner"!=e]])})),128))])]),Object(c["createVNode"])("div",d,[Object(c["createVNode"])("div",u,[f,Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("form",g,[Object(c["createVNode"])("div",h,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"search",class:"form-control fw-bold",placeholder:"搜尋景點","onUpdate:modelValue":t[2]||(t[2]=function(e){return M.searchText=e}),onKeyup:t[3]||(t[3]=Object(c["withKeys"])((function(e){return E.searchProducts(M.searchText)}),["enter"]))},null,544),[[c["vModelText"],M.searchText]]),Object(c["createVNode"])("button",{type:"submit",class:"input-group-text bg-success text-light",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return E.searchProducts(M.searchText)}),["prevent"]))},[O])])])])])]),Object(c["createVNode"])("div",j,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(M.renderProducts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-4",key:t.id},[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("div",x,[Object(c["createVNode"])("img",{class:"card-img rounded-0 img-fluid",src:t.imageUrl,alt:t.title},null,8,["src","alt"]),Object(c["createVNode"])("div",m,[Object(c["createVNode"])("ul",y,[Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{class:"btn btn-success text-white",href:"#",onClick:Object(c["withModifiers"])((function(e){return E.toggleFavorite(t)}),["prevent"])},[Object(c["createVNode"])("i",{class:["far fa-heart",[R.favoriteList.includes(t.id)?"bi-heart-fill":"bi-heart"]]},null,2)],8,["onClick"])]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{class:"btn btn-success text-white mt-2",href:"#",onClick:Object(c["withModifiers"])((function(e){return E.goToProduct(t.id)}),["prevent"])},[N],8,["onClick"])]),Object(c["createVNode"])("li",null,[Object(c["createVNode"])("a",{class:"btn btn-success text-white mt-2",href:"#",onClick:Object(c["withModifiers"])((function(e){return E.addCart(t.id)}),["prevent"])},[V],8,["onClick"])])])])]),Object(c["createVNode"])("div",w,[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(e){return E.goToProduct(t.id)}),["prevent"]),class:"h3 text-decoration-none fw-bold"},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(t.title)+" ",1),P,t.price===t.origin_price?(Object(c["openBlock"])(),Object(c["createBlock"])("div",k,[Object(c["createVNode"])("p",D," NT$ "+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1)])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",C,[Object(c["createVNode"])("del",B,"NT$ "+Object(c["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(c["createVNode"])("p",T," NT$ "+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1)]))],8,["onClick"])])])])})),128)),(M.searchText||M.renderProducts.length)&&0==M.renderProducts.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",S,[Object(c["createVNode"])("div",_,[Object(c["createVNode"])("div",$,[Object(c["createVNode"])("p",null,"找不到有關 '"+Object(c["toDisplayString"])(M.searchText)+"'",1)])])])):Object(c["createCommentVNode"])("",!0)])])])]),Object(c["createVNode"])(L,{paginationData:M.paginationData,onGetData:E.getRenderProducts},null,8,["paginationData","onGetData"])],64)}var M=r("5530"),E=(r("99af"),r("4de4"),r("159b"),r("ac1f"),r("466d"),r("498a"),r("5502")),R=r("1799"),L={data:function(){return{resultProduct:[],filterText:"",searchText:"",paginationData:{},renderProducts:[],isFavorite:!1,favoriteList:[]}},components:{Pagination:R["a"]},methods:Object(M["a"])({goToProduct:function(e){this.$router.push("/product/".concat(e))},addCart:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModules/addCart",{id:e,qty:t}),this.$swal({title:"加入購物車成功",icon:"success"})},toggleFavorite:function(e){var t=this;this.$store.dispatch("favoriteModules/toggleFavorite",e).then((function(e){t.getFavorites(),t.isFavorite=e,t.$swal({title:"".concat(t.isFavorite?"加入":"移除","我的最愛"),icon:"success"})}))},getAllProductsData:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/products/all");this.$http.get(t).then((function(t){t.data.success&&(e.resultProduct=t.data.products.filter((function(e){return"Banner"!==e.category})),e.getPaginationData(),e.getRenderProducts(),e.changeCategories(e.$route.query.productCategory),e.getFavorites())}))},getRenderProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.getPaginationData(t),this.renderProducts=[];var r=10*(t-1),c=10*t-1;this.resultProduct.forEach((function(t,a){r<=a&&a<=c&&e.renderProducts.push(t)}))},getPaginationData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.resultProduct,r={};r.total_pages=Math.ceil(t.length/10),r.current_page=e,r.current_page+1>r.total_pages?r.has_next=!1:r.has_next=!0,1===r.current_page?r.has_pre=!1:r.has_pre=!0,this.paginationData=r},changeCategories:function(e){var t=this;this.filterText=e,this.renderProducts=[],this.resultProduct.forEach((function(r,c){e===r.category?(t.renderProducts.push(r),t.getPaginationData(1,t.renderProducts)):e||t.getRenderProducts()}))},getFavorites:function(){var e=this;this.favoriteList=[],this.favorites.forEach((function(t){e.favoriteList.push(t.id)}))},searchProducts:function(e){var t=this;e.length>0?(this.renderProducts=this.resultProduct.filter((function(e){return e.title.match(t.searchText.trim())})),this.getPaginationData(1,this.renderProducts)):this.getAllProductsData()}},Object(E["b"])("favoriteModules",["getFavorite"])),computed:Object(M["a"])(Object(M["a"])({},Object(E["c"])("productsModules",["products","categories","allProducts","pagination"])),Object(E["c"])("favoriteModules",["favorites","favoritesLength"])),created:function(){this.getAllProductsData(),this.getRenderProducts()}};L.render=F;t["default"]=L},ab13:function(e,t,r){var c=r("b622"),a=c("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(c){}}return!1}},b64b:function(e,t,r){var c=r("23e7"),a=r("7b0b"),n=r("df75"),o=r("d039"),i=o((function(){n(1)}));c({target:"Object",stat:!0,forced:i},{keys:function(e){return n(a(e))}})},c8d2:function(e,t,r){var c=r("d039"),a=r("5899"),n="​᠎";e.exports=function(e){return c((function(){return!!a[e]()||n[e]()!=n||a[e].name!==e}))}},caad:function(e,t,r){"use strict";var c=r("23e7"),a=r("4d64").includes,n=r("44d2");c({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("includes")},dbb4:function(e,t,r){var c=r("23e7"),a=r("83ab"),n=r("56ef"),o=r("fc6a"),i=r("06cf"),s=r("8418");c({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,c=o(e),a=i.f,l=n(c),d={},u=0;while(l.length>u)r=a(c,t=l[u++]),void 0!==r&&s(d,t,r);return d}})},e439:function(e,t,r){var c=r("23e7"),a=r("d039"),n=r("fc6a"),o=r("06cf").f,i=r("83ab"),s=a((function(){o(1)})),l=!i||s;c({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(n(e),t)}})}}]);
//# sourceMappingURL=chunk-6ec09013.58b95e71.js.map