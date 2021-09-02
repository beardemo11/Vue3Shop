<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <h1 class="h1 fw-bold">填寫訂單資料</h1>
      <p class="fw-bold">填寫購買人資料</p>
    </div>
  </div>
  <div class="container">
    <div class="py-4 py-md-6">
      <Form v-slot="{ errors }" @submit="createOrder">
        <div class="row gx-lg-5">
          <div class="col-lg-6 order-2 order-lg-1">
            <h3 class="fw-bold font-md border-bottom pb-3 mb-3">購買者資訊</h3>

            <div class="mb-3 mb-lg-4">
              <label for="name" class="form-label fw-bold">姓名</label
              ><Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage
                name="姓名"
                class="invalid-feedback fw-bold"
              ></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="email" class="form-label fw-bold">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
              ></Field>
              <ErrorMessage
                name="email"
                class="invalid-feedback fw-bold"
              ></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="tel" class="form-label fw-bold">收件人電話</label>
              <Field
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                rules="required"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage
                name="電話"
                class="invalid-feedback fw-bold"
              ></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="address" class="form-label fw-bold">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage
                name="地址"
                class="invalid-feedback fw-bold"
              ></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="message" class="form-label fw-bold">留言</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>

            <div class="text-end d-lg-none">
              <button type="submit" class="btn btn-success px-4 text-white">
                購買確認
              </button>
            </div>
          </div>
          <div class="col-md-5 order-1 order-md-2 mb-4 mb-md-0">
            <div class="border p-2 py-4 p-lg-4">
              <h3 class="fw-bold font-md border-bottom pb-3 mb-3">購買項目</h3>
              <div
                class="d-flex align-items-center justify-content-between mb-2"
                v-for="cart in cart.carts"
                :key="cart.id"
              >
                <div class="d-flex align-items-center">
                  <img
                    class="order-img"
                    :src="cart.product.imageUrl"
                    :alt="cart.product.title"
                  />
                  <div class="p-2">
                    <h4 class="font-md-normal fw-bold">
                      {{ cart.product.title }} x {{ cart.qty }}
                    </h4>
                    <!-- <h5 class="font-md-normal d-flex align-items-center">
                      US 8.5 <span class="ms-1"> </span>
                    </h5>
                    <h5 class="font-md-normal">顏色：白色</h5> -->
                  </div>
                </div>
                <p>NT$ {{ $filters.currency(cart.product.price) }}</p>
              </div>
              <p
                class="
                  text-end
                  mb-2
                  d-flex
                  justify-content-between
                  align-items-center
                  mb-2
                  fw-bold
                "
              >
                小計： <span>NT$ {{ $filters.currency(cart.total) }} </span>
              </p>
              <p
                class="
                  text-end
                  mb-2
                  d-flex
                  justify-content-between
                  align-items-center
                  fw-bold
                "
              >
                折扣：
                <span
                  >NT$ {{ $filters.currency(cart.total - cart.final_total) }}
                </span>
              </p>
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
                  NT$ {{ $filters.currency(cart.final_total) }}
                </span>
              </div>
            </div>
            <div class="py-4 text-end d-none d-lg-block">
              <button type="submit" class="btn btn-success">購買確認</button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '' // 對應品項 id
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    };
  },
  methods: {
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        if (res.data.success) {
          const orderId = res.data.orderId;
          this.$swal({
            title: '建立訂單成功',
            icon: 'success'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.push(`/orderForm/${orderId}`);
            }
          });
        } else {
          this.$swal({
            title: '購物車沒有商品',
            icon: 'error'
          });
        }
      });
    },

    ...mapActions('cartModules', ['getCart'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    },
    ...mapGetters('cartModules', ['cart', 'cartLength'])
  },

  created () {
    this.getCart();
  }
};
</script>

<style scoped>
.order-img {
  width: 100px;
  height: 100px;
}
</style>
