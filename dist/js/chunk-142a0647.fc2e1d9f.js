(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-142a0647"],{"3ff4":function(e,t,a){"use strict";a("ceaf")},"4de4":function(e,t,a){"use strict";var c=a("23e7"),r=a("b727").filter,o=a("1dde"),n=o("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"535a":function(e,t,a){"use strict";a.r(t);var c=a("7a23");function r(e,t,a,r,o,n){var s=Object(c["resolveComponent"])("Loading"),i=Object(c["resolveComponent"])("FrontNavbar"),l=Object(c["resolveComponent"])("router-view"),d=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])(s,{active:n.isLoading},null,8,["active"]),Object(c["createVNode"])(i),Object(c["createVNode"])(l),Object(c["createVNode"])(d)])}var o=Object(c["createStaticVNode"])('<nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"><div class="container text-light"><div class="w-100 d-flex justify-content-center"><div class="text-light fw-bold"><i class="fas fa-gift"></i> 現在購物馬上享有7折優惠，購物金折扣碼【FlyGO】 </div></div></div></nav>',1),n={class:"navbar navbar-expand-lg navbar-light shadow"},s={class:"container d-flex justify-content-between align-items-center"},i=Object(c["createVNode"])("a",{class:"navbar-brand text-success logo h1 align-self-center",href:"#"}," 隨心飛 ",-1),l=Object(c["createVNode"])("button",{class:"navbar-toggler border-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#templatemo_main_nav","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"\r\n          align-self-center\r\n          collapse\r\n          navbar-collapse\r\n          flex-fill\r\n          d-lg-flex\r\n          justify-content-lg-between\r\n        ",id:"templatemo_main_nav"},b=Object(c["createStaticVNode"])('<div class="flex-fill"><ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto"><li class="nav-item"><a class="nav-link fw-bold" href="#/about">關於我們 </a></li><li class="nav-item"><a class="nav-link fw-bold" href="#/product_list">商品列表</a></li><li class="nav-item"><a class="nav-link fw-bold" data-bs-toggle="offcanvas" data-bs-target="#OrderFormOffcanvas" aria-controls="OrderFormOffcanvas" href="OrderForm">訂單查詢</a></li></ul></div>',1),f={class:"navbar align-self-center d-flex"},u={class:"nav-icon position-relative text-decoration-none","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight",href:"cart"},v=Object(c["createVNode"])("i",{class:"fa fa-fw fa-cart-arrow-down text-dark mr-1"},null,-1),O={class:"\r\n                position-absolute\r\n                top-0\r\n                left-100\r\n                translate-middle\r\n                badge\r\n                rounded-pill\r\n                bg-danger\r\n                text-white\r\n              "},j={class:"nav-icon position-relative text-decoration-none","data-bs-toggle":"offcanvas","data-bs-target":"#FavoriteOffcanvas","aria-controls":"FavoriteOffcanvas",href:"Favorite"},p=Object(c["createVNode"])("i",{class:"fas fa-heart text-dark"},null,-1),g={class:"\r\n                position-absolute\r\n                top-0\r\n                left-100\r\n                translate-middle\r\n                badge\r\n                rounded-pill\r\n                bg-danger\r\n                text-white\r\n              "};function h(e,t,a,r,h,m){var N=Object(c["resolveComponent"])("CartOffcanvas"),w=Object(c["resolveComponent"])("FavoriteOffcanvas"),V=Object(c["resolveComponent"])("OrderSearchOffcanvas");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[o,Object(c["createVNode"])("nav",n,[Object(c["createVNode"])("div",s,[i,l,Object(c["createVNode"])("div",d,[b,Object(c["createVNode"])("div",f,[Object(c["createVNode"])("a",u,[v,Object(c["createVNode"])("span",O,Object(c["toDisplayString"])(e.cartLength),1)]),Object(c["createVNode"])("a",j,[p,Object(c["createVNode"])("span",g,Object(c["toDisplayString"])(e.favoritesLength),1)]),Object(c["createVNode"])(N),Object(c["createVNode"])(w),Object(c["createVNode"])(V)])])])])],64)}var m=a("5530"),N=a("5502"),w=Object(c["withScopeId"])("data-v-2d1b9ac4");Object(c["pushScopeId"])("data-v-2d1b9ac4");var V={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},y=Object(c["createVNode"])("div",{class:"offcanvas-header border-bottom"},[Object(c["createVNode"])("h5",{id:"offcanvasRightLabel",class:"fw-bold"},"購物車"),Object(c["createVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),k={class:"offcanvas-body pt-0 bg-white"},x={key:0},C={class:"w-25"},B={class:"w-75 ms-3"},S={class:"h3 mb-1 fw-bold"},F={class:"fw-bold text-success p1"},$={class:"d-flex justify-content-between align-items-end"},L={class:"fw-bold"},M=Object(c["createVNode"])("i",{class:"bi bi-dash fs-6"},null,-1),D={class:"fs-6"},P=Object(c["createVNode"])("i",{class:"bi bi-plus fs-6"},null,-1),I=Object(c["createVNode"])("i",{class:"bi bi-trash"},null,-1),R={key:1,class:"py-5 fw-bold"},_={class:"offcanvas-footer border"},T={class:"p-3"},Q={class:"fw-bold"},U=Object(c["createTextVNode"])(" 購買"),E={class:"text-secondary px-2"},J=Object(c["createTextVNode"])("項產品 "),q={class:"py-3 fw-bold"};Object(c["popScopeId"])();var A=w((function(e,t,a,r,o,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",V,[y,Object(c["createVNode"])("div",k,[e.cart.final_total>0?(Object(c["openBlock"])(),Object(c["createBlock"])("ul",x,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.cart.carts,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["d-flex align-items-center py-4 px-3",{"border-bottom":10!==t}],key:"".concat(t,"item")},[Object(c["createVNode"])("div",C,[Object(c["createVNode"])("img",{src:t.product.imageUrl,alt:"imageUrl",width:"80",height:"80",class:"img-fluid me-3 obj-fit-contain"},null,8,["src"])]),Object(c["createVNode"])("div",B,[Object(c["createVNode"])("h3",S,Object(c["toDisplayString"])(t.product.title),1),Object(c["createVNode"])("p",F," NT $"+Object(c["toDisplayString"])(e.$filters.currency(t.product.price)),1),Object(c["createVNode"])("div",$,[Object(c["createVNode"])("div",L,[Object(c["createVNode"])("a",{href:"#",class:"pe-2",onClick:Object(c["withModifiers"])((function(e){return n.minusCartQty(t)}),["prevent"])},[M],8,["onClick"]),Object(c["createVNode"])("span",D,Object(c["toDisplayString"])(t.qty),1),Object(c["createVNode"])("a",{href:"#",class:"ps-2",onClick:Object(c["withModifiers"])((function(e){return n.addCartQty(t)}),["prevent"])},[P],8,["onClick"])]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:Object(c["withModifiers"])((function(e){return n.removeCartItem(t.id)}),["prevent"])},[I],8,["onClick"])])])],2)})),128))])):(Object(c["openBlock"])(),Object(c["createBlock"])("p",R,"目前無產品")),Object(c["createVNode"])("div",null,[Object(c["createVNode"])("div",_,[Object(c["createVNode"])("div",T,[Object(c["createVNode"])("p",Q,[U,Object(c["createVNode"])("span",E,Object(c["toDisplayString"])(e.cartLength),1),J]),Object(c["createVNode"])("h4",q," 總共：NT $"+Object(c["toDisplayString"])(e.$filters.currency(e.cart.final_total)),1),0!==e.cart.final_total?(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],{key:0},[Object(c["createVNode"])("button",{onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return n.changeRoute("/cartList")}),["prevent"])),type:"button",class:"btn btn-outline-success btn-lg w-100 mb-3 fw-bold"}," 購物車 "),Object(c["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return n.changeRoute("/checkout")}),["prevent"])),class:"btn btn-success btn-lg w-100 text-white fw-bold"},"直接購買")],64)):Object(c["createCommentVNode"])("",!0)])])])])])})),G={methods:Object(m["a"])(Object(m["a"])({addCartQty:function(e){this.$store.dispatch("cartModules/addCartQty",e)},minusCartQty:function(e){this.$store.dispatch("cartModules/minusCartQty",e)},removeCartItem:function(e){this.$store.dispatch("cartModules/removeCartItem",e),this.$swal({title:"刪除成功!",icon:"success"})},changeRoute:function(e){this.$router.push(e)}},Object(N["b"])("cartModules",["getCart"])),Object(N["b"])("favoriteModules",["getFavorite"])),computed:Object(m["a"])(Object(m["a"])({isLoading:function(){return this.$store.state.isLoading}},Object(N["c"])("cartModules",["cart","cartLength"])),Object(N["c"])("favoriteModules",["favorites","favoritesLength"])),created:function(){this.getCart(),this.$store.dispatch("favoriteModules/getFavorite")}};a("b73b");G.render=A,G.__scopeId="data-v-2d1b9ac4";var z=G,H=Object(c["withScopeId"])("data-v-d37387d8");Object(c["pushScopeId"])("data-v-d37387d8");var K={class:"offcanvas offcanvas-end",tabindex:"-1",id:"FavoriteOffcanvas","aria-labelledby":"offcanvasRight2Label"},W=Object(c["createVNode"])("div",{class:"offcanvas-header border-bottom"},[Object(c["createVNode"])("h5",{id:"offcanvasRight2Label",class:"fw-bold"},"我的最愛"),Object(c["createVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),X={class:"offcanvas-body pt-0 bg-white"},Y={key:0},Z={class:"w-25"},ee={class:"w-75 ms-3"},te={class:"h3 mb-1 fw-bold"},ae={class:"fw-bold text-success p1"},ce={class:"d-flex justify-content-between align-items-end"},re={class:"fw-bold"},oe=Object(c["createVNode"])("i",{class:"bi bi-trash"},null,-1),ne={key:1,class:"py-5 fw-bold"};Object(c["popScopeId"])();var se=H((function(e,t,a,r,o,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",K,[W,Object(c["createVNode"])("div",X,[e.favorites.length>0?(Object(c["openBlock"])(),Object(c["createBlock"])("ul",Y,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.favorites,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:["d-flex align-items-center py-4 px-3",{"border-bottom":10!==t}],key:"".concat(t,"item")},[Object(c["createVNode"])("div",Z,[Object(c["createVNode"])("img",{src:t.imageUrl,alt:"imageUrl",width:"80",height:"80",class:"img-fluid me-3 obj-fit-contain"},null,8,["src"])]),Object(c["createVNode"])("div",ee,[Object(c["createVNode"])("h3",te,Object(c["toDisplayString"])(t.title),1),Object(c["createVNode"])("p",ae," NT $"+Object(c["toDisplayString"])(e.$filters.currency(t.price)),1),Object(c["createVNode"])("div",ce,[Object(c["createVNode"])("div",re,[Object(c["createVNode"])("a",{href:"#",class:"pe-2 fw-bold",onClick:Object(c["withModifiers"])((function(e){return n.goToProduct(t.id)}),["prevent"])}," 點我前往 ",8,["onClick"])]),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-info",onClick:Object(c["withModifiers"])((function(e){return n.removeFavorite(t,!1)}),["prevent"])},[oe],8,["onClick"])])])],2)})),128))])):(Object(c["openBlock"])(),Object(c["createBlock"])("p",ne,"目前無產品"))])])})),ie={data:function(){return{}},methods:Object(m["a"])({goToProduct:function(e){this.$router.push("/product/".concat(e))},removeFavorite:function(e,t){var a=this;this.$store.dispatch("favoriteModules/removeFavorite",{favoriteItem:e,delall:t}),this.$swal({title:"移除我的最愛",icon:"success"}).then((function(e){e.isConfirmed&&a.$router.go(0)}))}},Object(N["b"])("favoriteModules",["getFavorite"])),computed:Object(m["a"])({},Object(N["c"])("favoriteModules",["favorites","favoritesLength"])),watch:{$route:function(e,t){this.$router.go(0)}}};a("3ff4");ie.render=se,ie.__scopeId="data-v-d37387d8";var le=ie,de={class:"offcanvas offcanvas-end",tabindex:"-1",id:"OrderFormOffcanvas","aria-labelledby":"offcanvasRight3Label"},be=Object(c["createVNode"])("div",{class:"offcanvas-header border-bottom"},[Object(c["createVNode"])("h5",{id:"offcanvasRight3Label",class:"fw-bold"},"查詢訂單"),Object(c["createVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),fe={class:"offcanvas-body pt-0 bg-white"},ue={class:"d-flex align-items-center py-4 px-3"},ve={class:"d-flex"},Oe={class:"input-group mb-3"},je=Object(c["createVNode"])("i",{class:"fa fa-fw fa-search text-white"},null,-1);function pe(e,t,a,r,o,n){return Object(c["openBlock"])(),Object(c["createBlock"])("div",de,[be,Object(c["createVNode"])("div",fe,[Object(c["createVNode"])("ul",null,[Object(c["createVNode"])("li",ue,[Object(c["createVNode"])("div",ve,[Object(c["createVNode"])("div",Oe,[Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control fw-bold",placeholder:"輸入訂單號碼","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.orderSearilNumber=e})},null,512),[[c["vModelText"],o.orderSearilNumber,void 0,{trim:!0}]]),Object(c["createVNode"])("button",{class:"btn btn-success fw-bold",onClick:t[2]||(t[2]=function(){return n.findOrder&&n.findOrder.apply(n,arguments)}),type:"button"},[je])])])])])])])}a("99af");var ge={data:function(){return{order:{},orderSearilNumber:""}},methods:{findOrder:function(){var e=this;this.orderSearilNumber.length>0?this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/order/").concat(this.orderSearilNumber)).then((function(t){if(t.data.success){var a=t.data.order;null!==a?e.$swal({title:"謝謝您的訂購",icon:"success"}).then((function(t){t.isConfirmed&&e.$router.push("/orderForm/".concat(a.id))})):e.$swal({title:"查無訂單",icon:"error"}),e.orderSearilNumber=""}})):this.$swal({title:"請輸入訂單號碼",icon:"error"})}}};ge.render=pe;var he=ge,me={components:{CartOffcanvas:z,FavoriteOffcanvas:le,OrderSearchOffcanvas:he},methods:Object(m["a"])(Object(m["a"])({},Object(N["b"])("cartModules",["getCart"])),Object(N["b"])("favoriteModules",["getFavorite"])),computed:Object(m["a"])(Object(m["a"])({isLoading:function(){return this.$store.state.isLoading}},Object(N["c"])("cartModules",["cart","cartLength"])),Object(N["c"])("favoriteModules",["favorites","favoritesLength"])),created:function(){this.getCart(),this.$store.dispatch("favoriteModules/getFavorite")}};me.render=h;var Ne=me,we={class:"bg-dark",id:"footer"},Ve=Object(c["createStaticVNode"])('<div class="w-100 bg-black py-3"><div class="container"><div class="row pt-2"><div class="col-12"><p class="text-left text-light"> Copyright © 2021 練習使用非商業用途 </p></div></div></div></div>',1);function ye(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("footer",we,[Ve])}const ke={};ke.render=ye;var xe=ke,Ce={components:{FrontNavbar:Ne,Footer:xe},data:function(){return{}},computed:{isLoading:function(){return this.$store.state.isLoading}}};Ce.render=r;t["default"]=Ce},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},"86ba":function(e,t,a){},b64b:function(e,t,a){var c=a("23e7"),r=a("7b0b"),o=a("df75"),n=a("d039"),s=n((function(){o(1)}));c({target:"Object",stat:!0,forced:s},{keys:function(e){return o(r(e))}})},b73b:function(e,t,a){"use strict";a("86ba")},ceaf:function(e,t,a){},dbb4:function(e,t,a){var c=a("23e7"),r=a("83ab"),o=a("56ef"),n=a("fc6a"),s=a("06cf"),i=a("8418");c({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,a,c=n(e),r=s.f,l=o(c),d={},b=0;while(l.length>b)a=r(c,t=l[b++]),void 0!==a&&i(d,t,a);return d}})},e439:function(e,t,a){var c=a("23e7"),r=a("d039"),o=a("fc6a"),n=a("06cf").f,s=a("83ab"),i=r((function(){n(1)})),l=!s||i;c({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(e,t){return n(o(e),t)}})}}]);
//# sourceMappingURL=chunk-142a0647.fc2e1d9f.js.map