(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dd2d498"],{"23af":function(e,t,c){"use strict";c("48a7")},"48a7":function(e,t,c){},e2a9:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),s=Object(o["withScopeId"])("data-v-3272a5c2");Object(o["pushScopeId"])("data-v-3272a5c2");var r={class:"container-fluid bg-light py-5"},a={class:"col-md-6 m-auto text-center"},d=Object(o["createVNode"])("p",{class:"fs-1 me-3"},[Object(o["createVNode"])("i",{class:"bi bi-check-circle-fill text-success",style:{top:"-10px"}})],-1),l=Object(o["createVNode"])("h1",{class:"h1 fw-bold"},"感謝您！您的訂單已建立完成",-1),b={class:"fw-bold"},i={class:"container"},n={class:"py-4 py-md-6"},p={class:"row gx-lg-5"},O={class:"col-lg-6 order-2 order-lg-1"},j=Object(o["createVNode"])("h3",{class:"fw-bold font-md border-bottom pb-3 mb-3"},"訂單資訊",-1),u={class:"list-group-flush"},f={class:"d-flex mb-2"},m=Object(o["createVNode"])("p",{class:"w-25 me-1 me-lg-0 text-success fw-bold"},"訂購時間",-1),N={class:"w-75 fw-bold"},w=Object(o["createVNode"])("li",{class:"d-flex"},[Object(o["createVNode"])("p",{class:"w-25 me-1 me-lg-0 text-success fw-bold"},"處理狀態"),Object(o["createVNode"])("p",{class:"w-75 fw-bold"},"處理中")],-1),V=Object(o["createVNode"])("h3",{class:"fw-bold font-md border-bottom pb-3 mb-3"},"購買者資訊",-1),g={class:"list-group-flush"},h={class:"d-lg-flex mb-1 mb-md-2"},x=Object(o["createVNode"])("p",{class:"w-25 me-3 me-lg-0 text-success fw-bold"},"姓名",-1),y={class:"w-75 fw-bold"},v={class:"d-lg-flex mb-2"},k=Object(o["createVNode"])("p",{class:"w-25 me-3 me-lg-0 text-success fw-bold"},"運送地址",-1),S={class:"w-75 fw-bold"},B={class:"d-lg-flex mb-2"},D=Object(o["createVNode"])("p",{class:"w-25 me-3 me-lg-0 text-success fw-bold"},"聯絡電話",-1),$={class:"w-75 fw-bold"},I={class:"d-lg-flex"},_=Object(o["createVNode"])("p",{class:"w-25 me-3 me-lg-0 text-success fw-bold"},"聯絡信箱",-1),C={class:"w-75 fw-bold"},F={class:"col-md-5 order-1 order-md-2 mb-4 mb-md-0"},J={class:"border p-2 py-4 p-lg-4"},T=Object(o["createVNode"])("h3",{class:"fw-bold font-md border-bottom pb-3 mb-3"},"購買項目",-1),q={class:"d-flex align-items-center"},L={class:"p-2"},U={class:"font-md-normal fw-bold"},z={class:"\r\n                d-flex\r\n                align-items-center\r\n                justify-content-between\r\n                border-top\r\n                pt-3\r\n              "},A=Object(o["createVNode"])("span",{class:"font-md-md fw-bold"},"總金額：",-1),E={class:"font-md-md fw-bold"},G=Object(o["createVNode"])("div",{class:"py-2 text-end d-none d-lg-block"},null,-1),H={class:"border p-2 py-4 p-lg-4"},K=Object(o["createVNode"])("h3",{class:"fw-bold font-md border-bottom pb-3 mb-3"},"付款狀態",-1),M={class:"list-group-flush"},P=Object(o["createVNode"])("li",{class:"d-flex mb-2"},[Object(o["createVNode"])("p",{class:"w-25 me-1 me-lg-0 text-success fw-bold"},"付款方式"),Object(o["createVNode"])("p",{class:"w-75 fw-bold"},"信用卡")],-1),Q={class:"d-flex"},R=Object(o["createVNode"])("p",{class:"w-25 me-1 me-lg-0 text-success fw-bold"},"付款狀態",-1),W={key:0,class:"bg-success rounded text-white px-2"},X={key:1,class:"bg-danger rounded text-white px-2"},Y={class:"py-4 text-end d-none d-lg-block"};Object(o["popScopeId"])();var Z=s((function(e,t,c,s,Z,ee){return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",a,[d,l,Object(o["createVNode"])("p",b,"訂單編號: "+Object(o["toDisplayString"])(Z.orderId),1)])]),Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("div",O,[j,Object(o["createVNode"])("ul",u,[Object(o["createVNode"])("li",f,[m,Object(o["createVNode"])("p",N,Object(o["toDisplayString"])(e.$filters.date(Z.order.create_at))+" "+Object(o["toDisplayString"])(e.$filters.time(Z.order.create_at)),1)]),w]),V,Object(o["createVNode"])("ul",g,[Object(o["createVNode"])("li",h,[x,Object(o["createVNode"])("p",y,Object(o["toDisplayString"])(Z.order.user.name),1)]),Object(o["createVNode"])("li",v,[k,Object(o["createVNode"])("p",S,Object(o["toDisplayString"])(Z.order.user.address),1)]),Object(o["createVNode"])("li",B,[D,Object(o["createVNode"])("p",$,Object(o["toDisplayString"])(Z.order.user.tel),1)]),Object(o["createVNode"])("li",I,[_,Object(o["createVNode"])("p",C,Object(o["toDisplayString"])(Z.order.user.email),1)])])]),Object(o["createVNode"])("div",F,[Object(o["createVNode"])("div",J,[T,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(Z.order.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"d-flex align-items-center justify-content-between mb-2",key:t.id},[Object(o["createVNode"])("div",q,[Object(o["createVNode"])("img",{class:"order-img",src:t.product.imageUrl,alt:t.product.title},null,8,["src","alt"]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("h4",U,Object(o["toDisplayString"])(t.product.title)+" x "+Object(o["toDisplayString"])(t.qty),1)])]),Object(o["createVNode"])("p",null,"NT$ "+Object(o["toDisplayString"])(e.$filters.currency(t.product.price)),1)])})),128)),Object(o["createVNode"])("div",z,[A,Object(o["createVNode"])("span",E," NT$ "+Object(o["toDisplayString"])(e.$filters.currency(Z.order.total)),1)])]),G,Object(o["createVNode"])("div",H,[K,Object(o["createVNode"])("ul",M,[P,Object(o["createVNode"])("li",Q,[R,Z.order.is_paid?(Object(o["openBlock"])(),Object(o["createBlock"])("p",W," 已付款 ")):(Object(o["openBlock"])(),Object(o["createBlock"])("p",X,"未付款"))])])]),Object(o["createVNode"])("div",Y,[Z.order.is_paid?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,type:"submit",class:"btn btn-success fw-bold",onClick:t[1]||(t[1]=function(e){return ee.pay(Z.order.id)})}," 確認付款 "))])])])])])],64)})),ee=(c("99af"),{data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/order/").concat(this.orderId);this.$http.get(t).then((function(t){t.data.success&&(e.order=t.data.order)}))},pay:function(e){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/pay/").concat(e)).then((function(c){c.data.success?(t.$swal({title:"付款完成!",icon:"success"}),t.getOrder(e)):t.$swal({title:"付款失敗!",icon:"error"})}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}});c("23af");ee.render=Z,ee.__scopeId="data-v-3272a5c2";t["default"]=ee}}]);
//# sourceMappingURL=chunk-0dd2d498.672ba80c.js.map