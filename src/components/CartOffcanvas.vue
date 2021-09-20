<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header border-bottom">
      <h5 id="offcanvasRightLabel" class="fw-bold">購物車</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body pt-0 bg-white">
      <ul v-if="cart.final_total > 0">
        <li
          class="d-flex align-items-center py-4 px-3"
          :class="{ 'border-bottom': item !== 10 }"
          v-for="item in cart.carts"
          :key="`${item}item`"
        >
          <div class="w-25">
            <img
              :src="item.product.imageUrl"
              alt="imageUrl"
              width="80"
              height="80"
              class="img-fluid me-3 obj-fit-contain"
            />
          </div>
          <div class="w-75 ms-3">
            <h3 class="h3 mb-1 fw-bold">{{ item.product.title }}</h3>
            <p class="fw-bold text-success p1">
              NT ${{ $filters.currency(item.product.price) }}
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <div class="fw-bold">
                <a href="#" class="pe-2" @click.prevent="minusCartQty(item)">
                  <i class="bi bi-dash fs-6"></i>
                </a>
                <span class="fs-6">{{ item.qty }}</span>
                <a href="#" class="ps-2" @click.prevent="addCartQty(item)">
                  <i class="bi bi-plus fs-6"></i>
                </a>
              </div>
              <button
                type="button"
                class="btn btn-outline-success"
                @click.prevent="removeCartItem(item.id)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div v-else>
        <p class="py-5 fw-bold">目前無產品</p>
        <div class="p-3">
          <button
            @click.prevent="changeRoute('/product_list')"
            type="button"
            class="btn btn-outline-success btn-lg w-100 mb-3 fw-bold"
          >
            前往產品列表
          </button>
        </div>
      </div>

      <div v-if="cart.final_total > 0">
        <div class="offcanvas-footer border">
          <div class="p-3">
            <p class="fw-bold">
              購買<span class="text-secondary px-2">{{ cartLength }}</span
              >項產品
            </p>
            <h4 class="py-3 fw-bold">
              總共：NT ${{ $filters.currency(cart.final_total) }}
            </h4>
            <template v-if="cart.final_total !== 0">
              <button
                @click.prevent="changeRoute('/cartList')"
                type="button"
                class="btn btn-outline-success btn-lg w-100 mb-3 fw-bold"
              >
                購物車
              </button>
              <a
                href="#"
                @click.prevent="changeRoute('/checkout')"
                class="btn btn-success btn-lg w-100 text-white fw-bold"
                >直接購買</a
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
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
    changeRoute (router) {
      this.$router.push(router);
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
.p1 {
  margin-bottom: -1rem;
}
</style>
