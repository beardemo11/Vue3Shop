(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4a08"],{"3c46":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var a=c("7a23"),s={class:"bg-light"},i={class:"container pb-5"},d={class:"row"},o={class:"col-lg-5 mt-5"},r={class:"card mb-3"},n={class:"col-lg-7 mt-5"},l={class:"card"},u={class:"card-body"},b={class:"h2 fw-bold"},p={class:"h3 py-2 fw-bold"},j=Object(a["createVNode"])("h6",{class:"fw-bold"},"說明:",-1),O={class:"fw-bold"},h=Object(a["createVNode"])("input",{type:"hidden",name:"product-title",value:"Activewear"},null,-1),V={class:"row"},N={class:"col-auto"},v={class:"list-inline pb-3"},f={class:"list-inline-item text-right fw-bold"},m=Object(a["createTextVNode"])(" 數量 "),g={class:"list-inline-item"},w={class:"list-inline-item"},y={class:"badge bg-secondary",id:"var-value"},S={class:"list-inline-item"},k={class:"row pb-3"},$={class:"col d-grid"},C={class:"col d-grid"};function M(t,e,c,M,P,Q){var D=Object(a["resolveComponent"])("FeaturedProduct");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("section",s,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",d,[Object(a["createVNode"])("div",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("img",{src:P.product.imageUrl,alt:P.product.title},null,8,["src","alt"])])]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",l,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("h1",b,Object(a["toDisplayString"])(P.product.title),1),Object(a["createVNode"])("p",p,"$"+Object(a["toDisplayString"])(P.product.price),1),j,Object(a["createVNode"])("p",O,Object(a["toDisplayString"])(P.product.description),1),h,Object(a["createVNode"])("div",V,[Object(a["createVNode"])("div",N,[Object(a["createVNode"])("ul",v,[Object(a["createVNode"])("li",f,[m,Object(a["withDirectives"])(Object(a["createVNode"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return P.cartSelect=t}),type:"hidden",name:"product-quanity",id:"product-quanity"},null,512),[[a["vModelText"],P.cartSelect]])]),Object(a["createVNode"])("li",g,[Object(a["createVNode"])("span",{class:"btn btn-success",id:"btn-minus",onClick:e[2]||(e[2]=Object(a["withModifiers"])((function(){return Q.minusQty&&Q.minusQty.apply(Q,arguments)}),["prevent"]))},"-")]),Object(a["createVNode"])("li",w,[Object(a["createVNode"])("span",y,Object(a["toDisplayString"])(P.cartSelect),1)]),Object(a["createVNode"])("li",S,[Object(a["createVNode"])("span",{class:"btn btn-success",id:"btn-plus",onClick:e[3]||(e[3]=Object(a["withModifiers"])((function(){return Q.addQty&&Q.addQty.apply(Q,arguments)}),["prevent"]))},"+")])])])]),Object(a["createVNode"])("div",k,[Object(a["createVNode"])("div",$,[Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success btn-lg fw-bold",name:"submit",value:"buy",onClick:e[4]||(e[4]=Object(a["withModifiers"])((function(t){return Q.changeRoute("/cartList")}),["prevent"]))}," 直接購買 ")]),Object(a["createVNode"])("div",C,[Object(a["createVNode"])("button",{type:"submit",class:"btn btn-success btn-lg fw-bold",name:"submit",value:"addtocard",onClick:e[5]||(e[5]=Object(a["withModifiers"])((function(t){return Q.addCart(P.id,P.cartSelect)}),["prevent"]))}," 加入購物車 ")])])])])])])])]),Object(a["createVNode"])(D)],64)}var P=c("5530"),Q=(c("99af"),c("5502")),D=c("ef13"),x={components:{FeaturedProduct:D["a"]},data:function(){return{product:{},id:"",cartSelect:1}},methods:Object(P["a"])({getProduct:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/product/").concat(this.id);this.$store.dispatch("updateLoading",!0),this.$http.get(e).then((function(e){t.$store.dispatch("updateLoading",!1),e.data.success&&(t.product=e.data.product)}))},addCart:function(t,e){this.$store.dispatch("cartModules/addCart",{id:t,qty:e}),this.$swal({title:"加入購物車成功",icon:"success"})},addQty:function(){this.cartSelect++},minusQty:function(){this.cartSelect<=1?(this.$swal({title:"數量需大於1",icon:"error"}),this.cartSelect=1):this.cartSelect--},changeRoute:function(t){this.$router.push(t)}},Object(Q["b"])("productsModules",["getProducts"])),computed:Object(P["a"])({},Object(Q["c"])("productsModules",["products"])),created:function(){this.id=this.$route.params.productId,this.getProduct(),this.getProducts()}};x.render=M;e["default"]=x}}]);
//# sourceMappingURL=chunk-2d0c4a08.a132b8cf.js.map