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
              <!-- <p class="py-2">
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-warning"></i>
                <i class="fa fa-star text-secondary"></i>
                <span class="list-inline-item text-dark"
                  >Rating 4.8 | 36 Comments</span
                >
              </p> -->
              <!-- <ul class="list-inline">
                <li class="list-inline-item">
                  <h6>Brand:</h6>
                </li>
                <li class="list-inline-item">
                  <p class="text-muted"><strong>Easy Wear</strong></p>
                </li>
              </ul> -->

              <h6 class="fw-bold">說明:</h6>
              <p class="fw-bold">
                {{ product.description }}
              </p>
              <!-- <ul class="list-inline">
                <li class="list-inline-item">
                  <h6>Avaliable Color :</h6>
                </li>
                <li class="list-inline-item">
                  <p class="text-muted"><strong>White / Black</strong></p>
                </li>
              </ul> -->

              <input type="hidden" name="product-title" value="Activewear" />
              <div class="row">
                <div class="col-auto">
                  <ul class="list-inline pb-3">
                    <li class="list-inline-item text-right fw-bold">
                      數量
                      <input
                        v-model="cartSelect"
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
                        cartSelect
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
                    @click.prevent="addCart(id, cartSelect)"
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
      cartSelect: 1
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
      this.cartSelect++;
    },
    minusQty () {
      if (this.cartSelect <= 1) {
        this.$swal({ title: '數量需大於1', icon: 'error' });
        this.cartSelect = 1;
      } else {
        this.cartSelect--;
      }
    },
    toggleFavorite (product) {
      const storageKey = 'favoriteData';
      const favoriteProducts =
        JSON.parse(localStorage.getItem('favoriteData')) || [];
      if (favoriteProducts) {
        const idx = favoriteProducts.findIndex(
          (item) => item.id === product.id
        );
        if (idx === -1) {
          localStorage.setItem(
            storageKey,
            JSON.stringify([...favoriteProducts, product])
          );
          this.isFavorite = true;
        } else {
          favoriteProducts.splice(idx, 1);
          localStorage.setItem(storageKey, JSON.stringify(favoriteProducts));
          this.isFavorite = false;
        }
      } else {
        this.setFavoriteProduct(storageKey, JSON.stringify([product]));
        this.isFavorite = true;
      }
      this.getFavorite();
      this.$swal({
        title: `${this.isFavorite ? '加入' : '移除'}我的最愛`,
        icon: 'success'
      });
    },

    changeRoute (router) {
      this.$router.push(router);
    },

    ...mapActions('productsModules', ['getProducts']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  computed: {
    ...mapGetters('productsModules', ['products'])
  },
  created () {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getProducts();
  }
};
</script>
