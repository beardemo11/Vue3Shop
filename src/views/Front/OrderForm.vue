<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <div class="row row-pb-lg">
        <div class="col-md-10 offset-md-1">
          <div class="process-wrap">
            <div class="process text-center">
              <p><span>01</span></p>
              <h3>購物車</h3>
            </div>
            <div class="process text-center">
              <p><span>02</span></p>
              <h3>訂購資訊</h3>
            </div>
            <div class="process text-center active">
              <p><span>03</span></p>
              <h3>訂單完成</h3>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p class="fw-bold">訂單編號: {{ orderId }}</p>
    </div>
  </div>
  <div class="container">
    <div class="py-4 py-md-6">
      <div class="row gx-lg-5">
        <div class="text-center fw-bold pb-3 mb-3">
          <h2>付款成功</h2>
          <span>您好，以下是您的交易資訊</span>
          <div class="text-center">
            <a href="#/product_list" class="btn btn-success fw-bold">
              繼續購物
            </a>
          </div>
        </div>
        <div class="col-lg-6 order-2 order-lg-1">
          <h3 class="fw-bold font-md border-bottom pb-3 mb-3">訂單資訊</h3>
          <ul class="list-group-flush">
            <li class="d-flex mb-2">
              <p class="w-25 me-1 me-lg-0 text-success fw-bold">訂購時間</p>
              <p class="w-75 fw-bold">
                {{ $filters.date(order.create_at) }}
                {{ $filters.time(order.create_at) }}
              </p>
            </li>
            <li class="d-flex">
              <p class="w-25 me-1 me-lg-0 text-success fw-bold">處理狀態</p>
              <p class="w-75 fw-bold">處理中</p>
            </li>
          </ul>
          <h3 class="fw-bold font-md border-bottom pb-3 mb-3">購買者資訊</h3>
          <ul class="list-group-flush">
            <li class="d-lg-flex mb-1 mb-md-2">
              <p class="w-25 me-3 me-lg-0 text-success fw-bold">姓名</p>
              <p class="w-75 fw-bold">{{ order.user.name }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-success fw-bold">運送地址</p>
              <p class="w-75 fw-bold">{{ order.user.address }}</p>
            </li>
            <li class="d-lg-flex mb-2">
              <p class="w-25 me-3 me-lg-0 text-success fw-bold">聯絡電話</p>
              <p class="w-75 fw-bold">{{ order.user.tel }}</p>
            </li>
            <li class="d-lg-flex">
              <p class="w-25 me-3 me-lg-0 text-success fw-bold">聯絡信箱</p>
              <p class="w-75 fw-bold">{{ order.user.email }}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-5 order-1 order-md-2 mb-4 mb-md-0">
          <div class="border p-2 py-4 p-lg-4">
            <h3 class="fw-bold font-md border-bottom pb-3 mb-3">購買項目</h3>
            <div
              class="d-flex align-items-center justify-content-between mb-2"
              v-for="item in order.products"
              :key="item.id"
            >
              <div class="d-flex align-items-center">
                <img
                  class="order-img"
                  :src="item.product.imageUrl"
                  :alt="item.product.title"
                />
                <div class="p-2">
                  <h4 class="font-md-normal fw-bold">
                    {{ item.product.title }} x {{ item.qty }}
                  </h4>
                </div>
              </div>
              <p>NT$ {{ $filters.currency(item.product.price) }}</p>
            </div>
            <div
              class="
                d-flex
                align-items-center
                justify-content-between
                border-top
                pt-3
              "
            >
              <span class="font-md-md fw-bold">總金額：</span
              ><span class="font-md-md fw-bold">
                NT$ {{ $filters.currency(order.total) }}
              </span>
            </div>
          </div>
          <div class="py-2 text-end d-none d-lg-block"></div>
          <div class="border p-2 py-4 p-lg-4">
            <h3 class="fw-bold font-md border-bottom pb-3 mb-3">付款狀態</h3>
            <ul class="list-group-flush">
              <li class="d-flex mb-2">
                <p class="w-25 me-1 me-lg-0 text-success fw-bold">付款方式</p>
                <p class="w-75 fw-bold">信用卡</p>
              </li>
              <li class="d-flex">
                <p class="w-25 me-1 me-lg-0 text-success fw-bold">付款狀態</p>
                <p
                  class="bg-success rounded text-white px-2"
                  v-if="order.is_paid"
                >
                  已付款
                </p>
                <p class="bg-danger rounded text-white px-2" v-else>未付款</p>
              </li>
              <div v-if="!order.is_paid" class="text-end">
                <button
                  type="submit"
                  class="btn btn-success fw-bold"
                  @click="pay(order.id)"
                  v-if="!order.is_paid"
                >
                  確認付款
                </button>
              </div>
            </ul>
          </div>
        </div>
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
          this.order = res.data.order;
        }
      });
    },
    pay (id) {
      this.$http
        .post(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`
        )
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              title: '付款完成!',
              icon: 'success',
              confirmButtonColor: '#59ab6e'
            });
            this.getOrder(id);
          } else {
            this.$swal({
              title: '付款失敗!',
              icon: 'error',
              confirmButtonColor: '#59ab6e'
            });
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

<style scoped>
.order-img {
  width: 100px;
  height: 100px;
}
</style>
