(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c9707d8"],{"780d":function(e,t,a){"use strict";a("f007")},"78a8":function(e,t,a){"use strict";a("fc23")},a685:function(e,t,a){"use strict";a.r(t);var c=a("7a23");function n(e,t,a,n,o,r){var i=Object(c["resolveComponent"])("Banner"),s=Object(c["resolveComponent"])("Feature"),l=Object(c["resolveComponent"])("FeaturedProduct");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])(i),Object(c["createVNode"])(s),Object(c["createVNode"])(l)])}a("a4d3"),a("e01a");var o=Object(c["withScopeId"])("data-v-230fc1ea");Object(c["pushScopeId"])("data-v-230fc1ea");var r={class:"aa-slider-area"},i={class:"content"},s=Object(c["createVNode"])("p",{class:"fs-1"},null,-1),l={class:"fs-3"},d=Object(c["createVNode"])("a",{href:"#/product_list",class:"btn btn-dark btn-hover rounded-0"},"了解更多",-1);Object(c["popScopeId"])();var p=o((function(e,t,a,n,p,b){var v=Object(c["resolveComponent"])("SwiperSlide"),g=Object(c["resolveComponent"])("Swiper");return Object(c["openBlock"])(),Object(c["createBlock"])("div",r,[Object(c["createVNode"])(g,{spaceBetween:0,centeredSlides:!0,pagination:{clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!1,class:"mySwiper"},{default:o((function(){return[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(b.banner,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])(v,{key:e.id},{default:o((function(){return[Object(c["createVNode"])("div",{class:"img-bg",style:{backgroundImage:"url("+e.imageUrl+")"}},[Object(c["createVNode"])("div",i,[s,Object(c["createVNode"])("p",l,Object(c["toDisplayString"])(e.description),1),d])],4)]})),_:2},1024)})),128))]})),_:1})])})),b=a("5530"),v=(a("4de4"),a("5502")),g=a("90ea"),u=a("a16a"),m=(a("5f67"),a("6d3b")),O=a("d17a"),j=a("5dc8"),h=a("26ad"),f=a("70a4");function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},N.apply(this,arguments)}var C={toggleEl:function(e,t){e[t?"addClass":"removeClass"](this.params.navigation.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=t)},update:function(){var e=this,t=e.params.navigation,a=e.navigation.toggleEl;if(!e.params.loop){var c=e.navigation,n=c.$nextEl,o=c.$prevEl;o&&o.length>0&&(e.isBeginning?a(o,!0):a(o,!1),e.params.watchOverflow&&e.enabled&&o[e.isLocked?"addClass":"removeClass"](t.lockClass)),n&&n.length>0&&(e.isEnd?a(n,!0):a(n,!1),e.params.watchOverflow&&e.enabled&&n[e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){var t=this;e.preventDefault(),t.isBeginning&&!t.params.loop||t.slidePrev()},onNextClick:function(e){var t=this;e.preventDefault(),t.isEnd&&!t.params.loop||t.slideNext()},init:function(){var e,t,a=this,c=a.params.navigation;(a.params.navigation=Object(f["c"])(a.$el,a.params.navigation,a.params.createElements,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),c.nextEl||c.prevEl)&&(c.nextEl&&(e=Object(h["a"])(c.nextEl),a.params.uniqueNavElements&&"string"===typeof c.nextEl&&e.length>1&&1===a.$el.find(c.nextEl).length&&(e=a.$el.find(c.nextEl))),c.prevEl&&(t=Object(h["a"])(c.prevEl),a.params.uniqueNavElements&&"string"===typeof c.prevEl&&t.length>1&&1===a.$el.find(c.prevEl).length&&(t=a.$el.find(c.prevEl))),e&&e.length>0&&e.on("click",a.navigation.onNextClick),t&&t.length>0&&t.on("click",a.navigation.onPrevClick),Object(f["e"])(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}),a.enabled||(e&&e.addClass(c.lockClass),t&&t.addClass(c.lockClass)))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,c=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),c&&c.length&&(c.off("click",e.navigation.onPrevClick),c.removeClass(e.params.navigation.disabledClass))}},V={name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;Object(f["a"])(e,{navigation:N({},C)})},on:{init:function(e){e.navigation.init(),e.navigation.update()},toEdge:function(e){e.navigation.update()},fromEdge:function(e){e.navigation.update()},destroy:function(e){e.navigation.destroy()},"enable disable":function(e){var t=e.navigation,a=t.$nextEl,c=t.$prevEl;a&&a[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),c&&c[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)},click:function(e,t){var a=e.navigation,c=a.$nextEl,n=a.$prevEl,o=t.target;if(e.params.navigation.hideOnClick&&!Object(h["a"])(o).is(n)&&!Object(h["a"])(o).is(c)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;var r;c?r=c.hasClass(e.params.navigation.hiddenClass):n&&(r=n.hasClass(e.params.navigation.hiddenClass)),!0===r?e.emit("navigationShow"):e.emit("navigationHide"),c&&c.toggleClass(e.params.navigation.hiddenClass),n&&n.toggleClass(e.params.navigation.hiddenClass)}}}};m["a"].use([O["a"],j["a"],V]);var k={components:{Swiper:g["a"],SwiperSlide:u["a"]},computed:Object(b["a"])({banner:function(){return this.products.filter((function(e){return"Banner"===e.category}))}},Object(v["c"])("productsModules",["products","categories"])),methods:Object(b["a"])({},Object(v["b"])("productsModules",["getProducts"])),created:function(){this.getProducts()}};a("78a8");k.render=p,k.__scopeId="data-v-230fc1ea";var E=k,w=Object(c["withScopeId"])("data-v-24010e7d");Object(c["pushScopeId"])("data-v-24010e7d");var y={id:"aa-promo"},x={class:"container"},S={class:"row"},B={class:"col-md-12"},P={class:"aa-promo-area"},I={class:"row"},T={class:"col-md-5 no-padding"},$={class:"aa-promo-left"},M={class:"aa-promo-banner"},q=Object(c["createVNode"])("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Xyb3MWE8LxZLE9HkIkruMfah4Z62q1QqUomKnwQWsk4OXeU33koeLvXZy7TmNditWPXswGzrh3dWhWx_8GJQvg",alt:"img"},null,-1),G={class:"aa-prom-content"},_=Object(c["createVNode"])("h1",{class:"h1c"},"首爾",-1),L=Object(c["createVNode"])("h5",{class:"h5c"}," 景點包含現代摩天大樓、古廟、景福宮和首爾塔。 ",-1),F={class:"col-md-7 no-padding"},H={class:"aa-promo-right"},W={class:"aa-single-promo-right"},A={class:"aa-promo-banner"},K=Object(c["createVNode"])("img",{src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRy0EK9ShbOxkTm6Mmk6Xm7d5Gie_RBIoEzo5-xon-TfdsXAGfcaqucJdRecmUKp1gaPbNwFxhOE_IT7KgLPEvjPg\r\n",alt:"img"},null,-1),R={class:"aa-prom-content"},X=Object(c["createVNode"])("h1",{class:"h1c"},"釜山",-1),z=Object(c["createVNode"])("h5",{class:"h5c"}," 以海雲台海灘、梵魚寺和金井山步道聞名。 ",-1),D={class:"aa-single-promo-right"},Q={class:"aa-promo-banner"},U=Object(c["createVNode"])("img",{src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTl1H8o7mr5pL0bDCOGR53nvemcEB-szhFIVQ96C2dUgF5AKYZWhg7yq-SygsPCfa4HMz106s5L2K_xmE7sHcQYWg\r\n",alt:"img"},null,-1),Z={class:"aa-prom-content"},J=Object(c["createVNode"])("h1",{class:"h1c"},"濟州市",-1),Y=Object(c["createVNode"])("h5",{class:"h5c"}," 特色包含民俗博物館、亂打秀劇場和海水三溫暖。 ",-1),ee={class:"aa-single-promo-right"},te={class:"aa-promo-banner"},ae=Object(c["createVNode"])("img",{src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3liBXocMwkztPWiuUNNty3bW0HDSS7ySPjRF8iGyjXV21g-BxNtG_Isqcl2vDtPKKLLWyRoRHqyNzr9lm2IH3fw\r\n",alt:"img"},null,-1),ce={class:"aa-prom-content"},ne=Object(c["createVNode"])("h1",{class:"h1c"},"仁川",-1),oe=Object(c["createVNode"])("h5",{class:"h5c"},"特色包含大型機場和海灘附近的島嶼。",-1),re={class:"aa-single-promo-right"},ie={class:"aa-promo-banner"},se=Object(c["createVNode"])("img",{src:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtb43nr9Bd2awA4brp7O9-91Do8bMFztcEN-KQdLx0MthVuZHjrVdSBlSsRd1l4xHO4TCG0xIDSE7uz6nXT60sRA\r\n",alt:"img"},null,-1),le={class:"aa-prom-content"},de=Object(c["createVNode"])("h1",{class:"h1c"},"慶州市",-1),pe=Object(c["createVNode"])("h5",{class:"h5c"}," 景點包含佛國寺和石窟庵等歷史悠久的新羅王朝遺跡。 ",-1);Object(c["popScopeId"])();var be=w((function(e,t,a,n,o,r){return Object(c["openBlock"])(),Object(c["createBlock"])("section",y,[Object(c["createVNode"])("div",x,[Object(c["createVNode"])("div",S,[Object(c["createVNode"])("div",B,[Object(c["createVNode"])("div",P,[Object(c["createVNode"])("div",I,[Object(c["createVNode"])("div",T,[Object(c["createVNode"])("div",$,[Object(c["createVNode"])("div",M,[q,Object(c["createVNode"])("div",G,[Object(c["createVNode"])("a",{href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(e){return r.goToProduct("首爾")}),["prevent"]))},[_]),L])])])]),Object(c["createVNode"])("div",F,[Object(c["createVNode"])("div",H,[Object(c["createVNode"])("div",W,[Object(c["createVNode"])("div",A,[K,Object(c["createVNode"])("div",R,[Object(c["createVNode"])("a",{href:"#",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return r.goToProduct("釜山")}),["prevent"]))},[X]),z])])]),Object(c["createVNode"])("div",D,[Object(c["createVNode"])("div",Q,[U,Object(c["createVNode"])("div",Z,[Object(c["createVNode"])("a",{href:"#",onClick:t[3]||(t[3]=Object(c["withModifiers"])((function(e){return r.goToProduct("濟州市")}),["prevent"]))},[J]),Y])])]),Object(c["createVNode"])("div",ee,[Object(c["createVNode"])("div",te,[ae,Object(c["createVNode"])("div",ce,[Object(c["createVNode"])("a",{href:"#",onClick:t[4]||(t[4]=Object(c["withModifiers"])((function(e){return r.goToProduct("仁川")}),["prevent"]))},[ne]),oe])])]),Object(c["createVNode"])("div",re,[Object(c["createVNode"])("div",ie,[se,Object(c["createVNode"])("div",le,[Object(c["createVNode"])("a",{href:"#",onClick:t[5]||(t[5]=Object(c["withModifiers"])((function(e){return r.goToProduct("慶州市")}),["prevent"]))},[de]),pe])])])])])])])])])])])})),ve={data:function(){return{}},methods:{goToProduct:function(e){this.$router.push("/product_list?productCategory=".concat(e))}}};a("780d");ve.render=be,ve.__scopeId="data-v-24010e7d";var ge=ve,ue=a("ef13"),me={components:{Banner:E,FeaturedProduct:ue["a"],Feature:ge},data:function(){return{}}};me.render=n;t["default"]=me},f007:function(e,t,a){},fc23:function(e,t,a){}}]);
//# sourceMappingURL=chunk-4c9707d8.c154c2f1.js.map