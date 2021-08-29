<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <p class="fs-1 me-3">
        <i class="bi bi-check-circle-fill text-success" style="top: -10px"></i>
      </p>
      <h1 class="h1 fw-bold">感謝您！您的訂單已建立完成</h1>
      <p>訂單編號: {{ orderId }}</p>
    </div>
  </div>
  <div class="container py-lg-4 mb-8 mb-lg-0">
    <div class="d-lg-flex justify-content-center align-items-center mb-5">
      <!-- <div>
        <h5 class="mb-1">感謝您！您的訂單已建立完成</h5>
        <p class="text-info">訂單編號: {{ orderId }}</p>
      </div> -->
    </div>
    <div class="pb-md-5"><p class="border-bottom-custom"></p></div>
    <div class="row">
      <div class="col-lg-6">
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">訂單資訊</h3>
          <ul class="list-group-flush">
            <li class="d-flex mb-2">
              <p class="w-25 me-1 me-lg-0 text-info">訂購時間</p>
              <p class="w-75">
                {{ $filters.date(order.create_at) }}
                {{ $filters.time(order.create_at) }}
              </p>
            </li>
            <li class="d-flex">
              <p class="w-25 me-1 me-lg-0 text-info">處理狀態</p>
              <p class="w-75">處理中</p>
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">聯絡資訊</h3>
          <ul class="list-group-flush">
            <li class="d-lg-flex mb-1 mb-md-2">
              <p class="w-25 me-3 me-lg-0 text-info">姓名</p>
              <p class="w-75">{{ order.user.name }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-info">運送地址</p>
              <p class="w-75">{{ order.user.address }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-info">聯絡電話</p>
              <p class="w-75">{{ order.user.tel }}</p>
            </li>
            <li class="d-lg-flex">
              <p class="w-25 me-3 me-lg-0 text-info">聯絡信箱</p>
              <p class="w-75">{{ order.user.email }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="mb-6">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">購買項目</h3>
          <ul class="list-group list-group-flush">
            <li v-for="item in order.products" :key="item.id">
              <div class="d-md-flex justify-content-between mb-md-2">
                <p>{{ item.product.title }} x {{ item.qty }}</p>
                <p>NT$ {{ $filters.currency(item.product.price) }}</p>
              </div>
            </li>

            <li class="d-flex justify-content-between">
              <p>總計</p>
              <p class="fw-bold">NT$ {{ $filters.currency(order.total) }}</p>
            </li>
          </ul>
        </div>
        <div class="mb-2 mb-lg-4">
          <h3 class="h6 mb-2 mb-md-3 fw-bold">付款狀態</h3>
          <ul class="list-group-flush bg-light py-4">
            <li class="d-flex mb-2">
              <p class="me-2">付款方式/</p>
              <p>信用卡</p>
            </li>
            <li class="d-flex">
              <p class="me-2">付款狀態/</p>
              <p
                class="bg-success rounded text-white px-2"
                v-if="order.is_paid"
              >
                已付款
              </p>
              <p class="bg-danger rounded text-white px-2" v-else>未付款</p>
            </li>
          </ul>
        </div>
        <div class="text-end"><!----></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    };
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res.data);
          this.order = res.data.order;
        }
      });
    }
  },
  created () {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>
