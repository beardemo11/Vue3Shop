<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <h1 class="h1 fw-bold">購物明細</h1>
      <p>測試</p>
    </div>
  </div>
  <div class="container">
    <div class="pb-5">
      <Form v-slot="{ errors }" @submit="createOrder">
        <div class="row gx-lg-5">
          <div class="col-lg-6 order-2 order-lg-1">
            <h3 class="h5 mb-md-4 py-3 fw-bold">購買者資訊</h3>

            <div class="mb-3 mb-lg-4">
              <label for="name" class="form-label">姓名</label
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
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="email" class="form-label">Email</label>
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
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="tel" class="form-label">收件人電話</label>
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
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="address" class="form-label">收件人地址</label>
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
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-3 mb-lg-4">
              <label for="message" class="form-label">留言</label>
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
              <button type="submit" class="btn btn-primary px-4 text-white">
                購買確認</button
              ><!---->
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <h3 class="h5 mb-md-4 py-3 fw-bold">購買項目</h3>
            <ul
              class="
                bg-light
                list-group list-group-flush
                p-2 p-lg-5
                mb-3 mb-lg-4
              "
            >
              <li class="list-group-item d-flex justify-content-md-between">
                <p class="fw-bold">名稱 <span class="d-md-none">/</span></p>
                <p class="fw-bold">金額</p>
              </li>
              <li
                class="list-group-item"
                v-for="cart in cart.carts"
                :key="cart.id"
              >
                <div class="d-md-flex justify-content-between mb-md-2">
                  <p>{{ cart.product.title }} x {{ cart.qty }}</p>
                  <p>{{ $filters.currency(cart.product.price) }}</p>
                </div>
              </li>

              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">小計</p>
                <p class="fw-bold">NT$ {{ $filters.currency(cart.total) }}</p>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">折扣</p>
                <p class="fw-bold">
                  NT$ {{ $filters.currency(cart.total - cart.final_total) }}
                </p>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <p class="fw-bold">總計</p>
                <p class="fw-bold">
                  NT$ {{ $filters.currency(cart.final_total) }}
                </p>
              </li>
            </ul>
            <div class="text-end d-none d-lg-block">
              <button type="submit" class="btn btn-success">購買確認</button
              ><!---->
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
