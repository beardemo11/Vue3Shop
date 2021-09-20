<template>
  <div class="container-fluid bg-light py-5">
    <div class="col-md-6 m-auto text-center">
      <div class="row row-pb-lg">
        <div class="col-md-10 offset-md-1">
          <div class="process-wrap">
            <div class="process text-center active">
              <p><span>01</span></p>
              <h3>購物車</h3>
            </div>
            <div class="process text-center">
              <p><span>02</span></p>
              <h3>訂購資訊</h3>
            </div>
            <div class="process text-center">
              <p><span>03</span></p>
              <h3>訂單完成</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row mt-4">
      <div class="col-md-12">
        <div class="text-end">
          <a
            href="#"
            @click.prevent="deleteAllCart"
            v-if="cartLength > 0"
            class="btn btn-danger fw-bold"
          >
            刪除全部
          </a>
        </div>
        <table class="table align-middle text-center">
          <thead>
            <tr>
              <th width="30%">圖示</th>
              <th width="20%">產品名稱</th>
              <th width="20%">數量</th>
              <th width="20%">價格</th>
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
              <td>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  @click.prevent="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5">
                <div class="input-group ms-auto" style="width: 350px">
                  <input
                    type="text"
                    class="form-control fw-bold"
                    placeholder="購物金折扣碼【FlyGO】"
                    aria-label="coupons-btn"
                    aria-describedby="coupons-btn"
                    v-model="coupon_code"
                  /><button
                    type="button"
                    class="btn btn-success text-white fw-bold"
                    @click="addCoupon"
                    :disabled="cartLength < 1"
                  >
                    <i class="bi bi-gift text-white me-2"></i>優惠碼
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td colspan="5" class="text-end fw-bold align-baseline">
                <p class="display-10 fw-bold">
                  小計 : NT ${{ $filters.currency(cart.total) }}
                </p>
                <p class="display-10 fw-bold">
                  折扣 : NT ${{
                    $filters.currency(cart.total - cart.final_total)
                  }}
                </p>

                <del v-if="cart.final_total !== cart.total"
                  >總金額 : NT ${{ $filters.currency(cart.total) }}</del
                >
                <p v-else class="display-10 fw-bold">
                  總金額 : NT ${{ $filters.currency(cart.total) }}
                </p>
              </td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="5" class="text-end text-danger">
                <p class="text-danger mb-2 fw-bold">已套用優惠卷</p>
                <p class="display-10 fw-bold">
                  折扣後總金額 : NT ${{ $filters.currency(cart.final_total) }}
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="3" align="left">
                <a href="#/cart" class="btn btn-success fw-bold"
                  ><i class="bi bi-chevron-left"></i> 繼續購物
                </a>
              </td>

              <td colspan="2" align="right">
                <a
                  href="#/checkout"
                  v-if="cartLength > 0"
                  class="btn btn-success fw-bold"
                >
                  結帳<i class="bi bi-chevron-right"></i>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
        <div class="pb35"></div>
      </div>
    </div>
  </div>
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
      this.$swal({
        title: '刪除成功!',
        icon: 'success',
        confirmButtonColor: '#59ab6e'
      });
    },
    deleteAllCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$swal({
        title: '確定刪除全部購物車?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的, 確定刪除!',
        icon: 'warning'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire({ title: '已經刪除購物車!', icon: 'success' });
          this.$http.delete(url).then((res) => {
            this.getCart();
          });
        }
      });
    },
    addCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code
      };
      if (this.coupon_code !== '') {
        this.$http.post(url, { data: coupon }).then((res) => {
          if (res.data.success) {
            this.getCart();
            this.coupon_code = '';
            this.$swal({
              title: '已套用優惠卷',
              icon: 'success',
              confirmButtonColor: '#59ab6e'
            });
          } else {
            this.$swal({
              title: '找不到優惠卷',
              icon: 'error',
              confirmButtonColor: '#59ab6e'
            });
          }
        });
      } else {
        this.$swal({
          title: '請輸入優惠碼!',
          icon: 'error',
          confirmButtonColor: '#59ab6e'
        });
      }
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
.pb35 {
  padding-bottom: 8rem;
}
</style>
