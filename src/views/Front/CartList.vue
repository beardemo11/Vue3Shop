<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <h1 class="h1 fw-bold">購物明細</h1>
      <p>測試</p>
    </div>
  </div>
  <section class="">
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-12">
          <table class="table align-middle text-center">
            <thead>
              <tr>
                <th width="30%">圖示</th>
                <th width="20%">產品名稱</th>
                <th width="20%">數量</th>
                <th width="20%">價格</th>
                <!-- <th width="15%">小計</th> -->
                <th width="10%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="cartLength < 1">
                <td colspan="5" class="text-center py-6 fw-bold">無商品明細</td>
              </tr>

              <tr v-for="item in cart.carts" :key="`${item}item`">
                <td>
                  <div
                    style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{
                      backgroundImage: `url(${item.product.imageUrl})`
                    }"
                  ></div>
                </td>
                <td>
                  <p class="fw-bold">{{ item.product.title }}</p>
                </td>
                <td>
                  <div class="fw-bold">
                    <span
                      class="btn btn-success"
                      id="btn-minus"
                      @click.prevent="minusCartQty(item)"
                      >-</span
                    >
                    <span class="px-3" id="var-value">{{ item.qty }} </span>
                    <span
                      class="btn btn-success"
                      id="btn-plus"
                      @click.prevent="addCartQty(item)"
                      >+</span
                    >
                  </div>
                </td>
                <td class="fw-bold" data-title="單價">
                  NT $
                  {{ $filters.currency(item.product.price) }}
                </td>
                <!-- <td class="fw-bold" data-title="小計">
                NT ${{ $filters.currency(item.product.price * item.qty) }}
              </td> -->
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-info"
                    @click.prevent="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="輸入優惠碼"
                      aria-label="coupons-btn"
                      aria-describedby="coupons-btn"
                      v-model="coupon_code"
                    /><button
                      type="button"
                      class="btn btn-secondary text-white coupon"
                      @click="addCoupon"
                    >
                      <i class="bi bi-gift text-white me-2"></i>優惠碼
                    </button>
                  </div>
                </td>

                <td colspan="2" class="text-end fw-bold">
                  <del v-if="cart.final_total !== cart.total"
                    >總金額 NT ${{ $filters.currency(cart.total) }}</del
                  >
                  <p v-else class="display-10 fw-bold">
                    總金額 NT ${{ $filters.currency(cart.total) }}
                  </p>
                </td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="5" class="text-end text-danger">
                  <p class="text-danger mb-2 fw-bold">已套用優惠卷</p>
                  <p class="display-10 fw-bold">
                    折扣後總金額 NT ${{ $filters.currency(cart.final_total) }}
                  </p>
                </td>
              </tr>
              <tr>
                <td colspan="3" align="left">
                  <a href="#/cart" class="btn btn-success"
                    ><i class="bi bi-chevron-left"></i> 繼續購物
                  </a>
                </td>
                <td colspan="2" align="right">
                  <a
                    href="#/orderForm"
                    v-if="cartLength > 0"
                    class="btn btn-success"
                  >
                    結帳<i class="bi bi-chevron-right"></i>
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return { coupon_code: '' };
  },
  methods: {
    addCartQty (item) {
      this.$store.dispatch('cartModules/addCartQty', item);
    },
    minusCartQty (item) {
      this.$store.dispatch('cartModules/minusCartQty', item);
    },
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },
    addCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code
      };
      this.$http.post(url, { data: coupon }).then((res) => {
        if (res.data.success) {
          this.getCart();
          this.coupon_code = '';
          this.$swal({
            title: '已套用優惠卷',
            icon: 'success'
          });
        } else {
          this.$swal({
            title: '找不到優惠卷',
            icon: 'error'
          });
        }
      });
    },

    ...mapActions('cartModules', ['getCart']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    },
    ...mapGetters('cartModules', ['cart', 'cartLength']),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  created () {
    this.getCart();
    this.$store.dispatch('favoriteModules/getFavorite');
  }
};
</script>

<style scoped>
.coupon {
  background-color: #59ab6e;
}
</style>
