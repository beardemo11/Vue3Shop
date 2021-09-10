<template>
  <!-- Open Content -->
  <section class="bg-light">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-5 mt-5">
          <div class="card mb-3">
            <img :src="product.imageUrl" :alt="product.title" />
          </div>
        </div>
        <!-- col end -->
        <div class="col-lg-7 mt-5">
          <div class="card">
            <div class="card-body">
              <h1 class="h2 fw-bold">{{ product.title }}</h1>
              <p class="h3 py-2 fw-bold">NT ${{ product.price }}</p>
              <h6 class="fw-bold">說明:</h6>
              <p class="fw-bold">
                {{ product.description }}
              </p>
              <input type="hidden" name="product-title" value="Activewear" />
              <div class="row">
                <div class="col-auto">
                  <ul class="list-inline pb-3">
                    <li class="list-inline-item text-right fw-bold">
                      數量
                      <input
                        v-model="cartQty"
                        type="hidden"
                        name="product-quanity"
                        id="product-quanity"
                      />
                    </li>
                    <li class="list-inline-item">
                      <span
                        class="btn btn-success"
                        id="btn-minus"
                        @click.prevent="minusQty"
                        >-</span
                      >
                    </li>
                    <li class="list-inline-item">
                      <span class="badge bg-secondary" id="var-value">{{
                        cartQty
                      }}</span>
                    </li>
                    <li class="list-inline-item">
                      <span
                        class="btn btn-success"
                        id="btn-plus"
                        @click.prevent="addQty"
                        >+</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="row pb-3">
                <div class="col d-grid">
                  <button
                    type="submit"
                    class="btn btn-success btn-lg fw-bold"
                    name="submit"
                    value="addtocard"
                    @click.prevent="addCart(id, cartQty)"
                  >
                    加入購物車
                  </button>
                </div>
                <div class="col d-grid">
                  <button
                    type="submit"
                    class="btn btn-success btn-lg fw-bold"
                    name="submit"
                    value="buy"
                    @click.prevent="toggleFavorite(product)"
                  >
                    <i
                      class="far fa-heart"
                      :class="[
                        this.favoriteList.includes(id)
                          ? 'bi-heart-fill'
                          : 'bi-heart'
                      ]"
                    ></i>

                    加入我的最愛
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Close Content -->
  <FeaturedProduct />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FeaturedProduct from '@/components/FeaturedProduct.vue';

export default {
  components: { FeaturedProduct },
  data () {
    return {
      product: {},
      id: '',
      cartQty: 1,
      favoriteList: []
    };
  },
  methods: {
    getProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$store.dispatch('updateLoading', true);
      this.$http.get(url).then((res) => {
        this.$store.dispatch('updateLoading', false);
        if (res.data.success) {
          this.product = res.data.product;
        }
      });
    },
    addCart (id, qty) {
      this.$store.dispatch('cartModules/addCart', { id, qty });
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      });
    },
    addQty () {
      this.cartQty++;
    },
    minusQty () {
      if (this.cartQty <= 1) {
        this.$swal({ title: '數量需大於1', icon: 'error' });
        this.cartQty = 1;
      } else {
        this.cartQty--;
      }
    },
    toggleFavorite (product) {
      this.$store
        .dispatch('favoriteModules/toggleFavorite', product)
        .then((response) => {
          this.isFavorite = response;
          this.getFavorites();
          this.$swal({
            title: `${this.isFavorite ? '加入' : '移除'}我的最愛`,
            icon: 'success'
          });
        });
    },
    getFavorites () {
      this.favoriteList = [];
      this.favorites.forEach((item) => {
        this.favoriteList.push(item.id);
      });
    },

    changeRoute (router) {
      this.$router.push(router);
    },

    ...mapActions('productsModules', ['getProducts'])
  },
  computed: {
    ...mapGetters('productsModules', ['products']),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  created () {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getProducts();
    this.getFavorites();
  }
};
</script>
