(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a08"],{"3c46":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a"),c("caad"),c("2532");var a=c("7a23"),i={class:"bg-light"},s={class:"container pb-5"},o={class:"row"},r={class:"col-lg-5 mt-5"},d={class:"card mb-3"},n={class:"col-lg-7 mt-5"},l={class:"card"},u={class:"card-body"},b={class:"h2 fw-bold"},p={class:"h3 py-2 fw-bold"},h=Object(a["createVNode"])("h6",{class:"fw-bold"},"說明:",-1),j={class:"fw-bold"},O=Object(a["createVNode"])("input",{type:"hidden",name:"product-title",value:"Activewear"},null,-1),v={class:"row"},f={class:"col-auto"},g={class:"list-inline pb-3"},N={class:"list-inline-item text-right fw-bold"},V=Object(a["createTextVNode"])(" 數量 "),y={class:"list-inline-item"},m={class:"list-inline-item"},w={class:"badge bg-secondary",id:"var-value"},Q={class:"list-inline-item"},F={class:"row pb-3"},$={class:"col d-grid"},M={class:"col d-grid"},k=Object(a["createTextVNode"])(" 加入我的最愛 ");function C(t,e,c,C,L,P){var x=Object(a["resolveComponent"])("FeaturedProduct");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("section",i,[Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("img",{src:L.product.imageUrl,alt:L.product.title},null,8,["src","alt"])])]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("h1",b,Object(a["toDisplayString"])(L.product.title),1),Object(a["createVNode"])("p",p,"NT $"+Object(a["toDisplayString"])(L.product.price),1),h,Object(a["createVNode"])("p",j,Object(a["toDisplayString"])(L.product.description),1),O,Object(a["createVNode"])("div",v,[Object(a["createVNode"])("div",f,[Object(a["createVNode"])("ul",g,[Object(a["createVNode"])("li",N,[V,Object(a["withDirectives"])(Object(a["createVNode"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return L.cartQty=t}),type:"hidden",name:"product-quanity",id:"product-quanity"},null,512),[[a["vModelText"],L.cartQty]])]),Object(a["createVNode"])("li",y,[Object(a["createVNode"])("span",{class:"btn btn-success",id:"btn-minus",onClick:e[2]||(e[2]=Object(a["withModifiers"])((function(){return P.minusQty&&P.minusQty.apply(P,arguments)}),["prevent"]))},"-")]),Object(a["createVNode"])("li",m,[Object(a["createVNode"])("span",w,Object(a["toDisplayString"])(L.cartQty),1)]),Object(a["createVNode"])("li",Q,[Object(a["createVNode"])("span",{class:"btn btn-success",id:"btn-plus",onClick:e[3]||(e[3]=Object(a["withModifiers"])((function(){return P.addQty&&P.addQty.apply(P,arguments)}),["prevent"]))},"+")])])])]),Object(a["createVNode"])("div",F,[Object(a["createVNode"])("div",$,[Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success btn-lg fw-bold",name:"submit",value:"addtocard",onClick:e[4]||(e[4]=Object(a["withModifiers"])((function(t){return P.addCart(L.id,L.cartQty)}),["prevent"]))}," 加入購物車 ")]),Object(a["createVNode"])("div",M,[Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success btn-lg fw-bold",name:"submit",value:"buy",onClick:e[5]||(e[5]=Object(a["withModifiers"])((function(t){return P.toggleFavorite(L.product)}),["prevent"]))},[Object(a["createVNode"])("i",{class:["far fa-heart",[this.favoriteList.includes(L.id)?"bi-heart-fill":"bi-heart"]]},null,2),k])])])])])])])])]),Object(a["createVNode"])(x)],64)}var L=c("5530"),P=(c("99af"),c("159b"),c("5502")),x=c("ef13"),D={components:{FeaturedProduct:x["a"]},data:function(){return{product:{},id:"",cartQty:1,favoriteList:[]}},methods:Object(L["a"])({getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/product/").concat(this.id);this.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(e){t.$store.dispatch("updateLoading",!1),e.data.success&&(t.product=e.data.product)}))},addCart:function(t,e){this.$store.dispatch("cartModules/addCart",{id:t,qty:e}),this.$swal({title:"加入購物車成功",icon:"success"})},addQty:function(){this.cartQty++},minusQty:function(){this.cartQty<=1?(this.$swal({title:"數量需大於1",icon:"error"}),this.cartQty=1):this.cartQty--},toggleFavorite:function(t){var e=this;this.$store.dispatch("favoriteModules/toggleFavorite",t).then((function(t){e.isFavorite=t,e.getFavorites(),e.$swal({title:"".concat(e.isFavorite?"加入":"移除","我的最愛"),icon:"success"})}))},getFavorites:function(){var t=this;this.favoriteList=[],this.favorites.forEach((function(e){t.favoriteList.push(e.id)}))},changeRoute:function(t){this.$router.push(t)}},Object(P["b"])("productsModules",["getProducts"])),computed:Object(L["a"])(Object(L["a"])({},Object(P["c"])("productsModules",["products"])),Object(P["c"])("favoriteModules",["favorites","favoritesLength"])),created:function(){this.id=this.$route.params.productId,this.getProduct(),this.getProducts(),this.getFavorites()}};D.render=C;e["default"]=D}}]);
//# sourceMappingURL=chunk-2d0c4a08.c1f35516.js.map