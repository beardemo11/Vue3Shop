<template>
  <!-- Start Top Nav -->
  <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block">
    <div class="container text-light">
      <div class="w-100 d-flex justify-content-center">
        <div class="text-light fw-bold">
          <i class="fas fa-gift"></i>
          現在購物馬上享有7折優惠，購物金折扣碼【FlyGO】
        </div>
      </div>
    </div>
  </nav>
  <!-- Close Top Nav -->

  <!-- Header -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container d-flex justify-content-between align-items-center">
      <a class="navbar-brand text-success logo align-self-center" href="#">
        隨心飛
      </a>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#templatemo_main_nav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="
          align-self-center
          collapse
          navbar-collapse
          flex-fill
          d-lg-flex
          justify-content-lg-between
        "
        id="templatemo_main_nav"
      >
        <div class="flex-fill">
          <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#/about">關於我們 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold" href="#/product_list">商品列表</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link fw-bold"
                data-bs-toggle="offcanvas"
                data-bs-target="#OrderFormOffcanvas"
                aria-controls="OrderFormOffcanvas"
                href="OrderForm"
                >訂單查詢</a
              >
            </li>
          </ul>
        </div>
        <div class="navbar align-self-center d-flex">
          <a
            class="nav-icon position-relative text-decoration-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            href="cart"
          >
            <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
            <span
              class="
                position-absolute
                top-0
                left-100
                translate-middle
                badge
                rounded-pill
                bg-danger
                text-white
              "
              >{{ cartLength }}
            </span>
          </a>

          <a
            class="nav-icon position-relative text-decoration-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#FavoriteOffcanvas"
            aria-controls="FavoriteOffcanvas"
            href="Favorite"
          >
            <i class="fas fa-heart text-dark"></i>
            <span
              class="
                position-absolute
                top-0
                left-100
                translate-middle
                badge
                rounded-pill
                bg-danger
                text-white
              "
              >{{ favoritesLength }}
            </span>
          </a>
          <CartOffcanvas />
          <FavoriteOffcanvas />
          <OrderSearchOffcanvas />
        </div>
      </div>
    </div>
  </nav>
  <!-- Close Header -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartOffcanvas from '@/components/Front/CartOffcanvas.vue';
import FavoriteOffcanvas from '@/components/Front/FavoriteOffcanvas.vue';
import OrderSearchOffcanvas from '@/components/Front/OrderSearchOffcanvas.vue';

export default {
  components: { CartOffcanvas, FavoriteOffcanvas, OrderSearchOffcanvas },

  methods: {
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
