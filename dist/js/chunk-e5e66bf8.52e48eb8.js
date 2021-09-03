(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5e66bf8"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function l(e,t,c,l,d,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.paginationData.has_pre}]},[Object(o["createVNode"])("button",{type:"button",class:"page-link",onClick:t[1]||(t[1]=function(e){return s.changePage("pre")})},[n])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.paginationData.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:e===c.paginationData.current_page}],key:e},[Object(o["createVNode"])("button",{type:"button",class:"page-link",onClick:function(t){return s.changePage(e)},disabled:e===c.paginationData.current_page},Object(o["toDisplayString"])(e),9,["onClick","disabled"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.paginationData.has_next}]},[Object(o["createVNode"])("button",{type:"button",class:"page-link","aria-label":"Next",onClick:t[2]||(t[2]=function(e){return s.changePage("next")})},[i])],2)])])}var d={emits:["getData"],props:["paginationData"],methods:{changePage:function(e){var t=e;"next"===e?t=this.paginationData.current_page+1:"pre"===e&&(t=this.paginationData.current_page-1),this.$emit("getData",t)}}};d.render=l;t["a"]=d},dc0d:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"text-end"},r={class:"table mt-4"},n=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"100"},"是否啟用"),Object(o["createVNode"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},l={class:"text-right"},d={key:0,class:"text-success"},s={key:1,class:"text-muted"},u={class:"btn-group"};function p(e,t,c,p,b,m){var h=Object(o["resolveComponent"])("Pagination"),j=Object(o["resolveComponent"])("ProductModal"),O=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(e){return m.openModal(!0)})}," 增加一個產品 ")]),Object(o["createVNode"])("table",r,[n,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(b.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",i,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createVNode"])("td",l,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",d,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return m.openModal(!1,t)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",onClick:function(e){return m.openDelModal(t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])(h,{paginationData:b.pagination,onGetData:m.getProducts},null,8,["paginationData","onGetData"]),Object(o["createVNode"])(j,{ref:"productModal",product:b.tempProduct,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(o["createVNode"])(O,{ref:"delModal",item:b.tempProduct,onDelItem:m.delProduct},null,8,["item","onDelItem"])],64)}var b=c("5530"),m=(c("99af"),c("a4d3"),c("e01a"),{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),h={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},O=Object(o["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createVNode"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(o["createVNode"])("span",null,"新增產品")]),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},g={class:"row"},v={class:"col-sm-4"},V=Object(o["createVNode"])("div",{class:"mb-3"},[Object(o["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址"),Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),N={class:"mb-3"},y=Object(o["createVNode"])("label",{for:"customFile",class:"form-label"},[Object(o["createTextVNode"])("或 上傳圖片 "),Object(o["createVNode"])("i",{class:"fas fa-spinner fa-spin"})],-1),P=Object(o["createStaticVNode"])('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',1),k={class:"col-sm-8"},x={class:"mb-3"},w=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),M={class:"row gx-2"},D={class:"mb-3 col-md-6"},$=Object(o["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),_={class:"mb-3 col-md-6"},B=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"單位",-1),C={class:"row gx-2"},S={class:"mb-3 col-md-6"},U=Object(o["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),F={class:"mb-3 col-md-6"},L=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),T=Object(o["createVNode"])("hr",null,null,-1),I={class:"mb-3"},G=Object(o["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),J={class:"mb-3"},q=Object(o["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),z={class:"mb-3"},A={class:"form-check"},E=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),H={class:"modal-footer"},K=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Q(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",m,[Object(o["createVNode"])("div",h,[Object(o["createVNode"])("div",j,[O,Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",v,[V,Object(o["createVNode"])("div",N,[y,Object(o["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=function(){return n.uploadFile&&n.uploadFile.apply(n,arguments)})},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",alt:"",src:r.tempProduct.imageUrl},null,8,["src"]),P]),Object(o["createVNode"])("div",k,[Object(o["createVNode"])("div",x,[w,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.tempProduct.title=e})},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",M,[Object(o["createVNode"])("div",D,[$,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.tempProduct.category=e})},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createVNode"])("div",_,[B,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.unit=e})},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",S,[U,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.origin_price=e})},null,512),[[o["vModelText"],r.tempProduct.origin_price]])]),Object(o["createVNode"])("div",F,[L,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.price=e})},null,512),[[o["vModelText"],r.tempProduct.price]])])]),T,Object(o["createVNode"])("div",I,[G,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.description=e})},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",J,[q,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.content=e})},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",z,[Object(o["createVNode"])("div",A,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.is_enabled=e})},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),E])])])])]),Object(o["createVNode"])("div",H,[K,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[10]||(t[10]=function(t){return e.$emit("update-product",r.tempProduct)})}," 確認 ")])])])],512)}var R=c("7c2b"),W=c.n(R),X={props:{product:{type:Object,default:function(){return{}}}},watch:{product:function(){this.tempProduct=this.product}},data:function(){return{modal:{},tempProduct:{}}},methods:{showModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/admin/upload");this.$http.post(o,c).then((function(t){t.data.success&&(console.log(t.data),e.tempProduct.imageUrl=t.data.imageUrl)})),console.dir(t)}},mounted:function(){this.modal=new W.a(this.$refs.modal)}};X.render=Q;var Y=X,Z=c("6ff1"),ee=c("1799"),te={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1}},components:{ProductModal:Y,DelModal:Z["a"],Pagination:ee["a"]},inject:["emitter"],methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/admin/products?page=").concat(t);this.$store.dispatch("updateLoading",!0),this.$http.get(c).then((function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination),e.$store.dispatch("updateLoading",!1)}))},openModal:function(e,t){this.tempProduct=e?{}:Object(b["a"])({},t),this.isNew=e;var c=this.$refs.productModal;c.showModal()},updateProduct:function(e){var t=this;this.tempProduct=e,this.tempProduct.origin_price=parseInt(this.tempProduct.origin_price),this.tempProduct.price=parseInt(this.tempProduct.price);var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/admin/product"),o="post";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/admin/product/").concat(e.id),o="put");var a=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){console.log(e),a.hideModal(),e.data.success?(t.getProducts(),t.$httpMsgState(e,"更新產品")):t.$httpMsgState(e,"更新產品")}))},openDelModal:function(e){this.tempProduct=e;var t=this.$refs.delModal;t.showModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("a22031227","/admin/product/").concat(this.tempProduct.id);this.$store.dispatch("updateLoading",!0),this.$http.delete(t).then((function(t){var c=e.$refs.delModal;c.hideModal(),e.getProducts(),e.$store.dispatch("updateLoading",!1),e.$httpMsgState(t,"刪除產品")}))}},created:function(){this.getProducts()}};te.render=p;t["default"]=te},e01a:function(e,t,c){"use strict";var o=c("23e7"),a=c("83ab"),r=c("da84"),n=c("5135"),i=c("861d"),l=c("9bf2").f,d=c("e893"),s=r.Symbol;if(a&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new s(e):void 0===e?s():s(e);return""===e&&(u[t]=!0),t};d(p,s);var b=p.prototype=s.prototype;b.constructor=p;var m=b.toString,h="Symbol(test)"==String(s("test")),j=/^Symbol\((.*)\)[^)]+$/;l(b,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=m.call(e);if(n(u,e))return"";var c=h?t.slice(7,-1):t.replace(j,"$1");return""===c?void 0:c}}),o({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=chunk-e5e66bf8.52e48eb8.js.map