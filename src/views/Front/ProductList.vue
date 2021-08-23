<template>
  <div>
    <Banner />

    <!-- Product List Start -->
    <div class="product-view">
      <div class="container-fluid">
        <div class="row">
          <!-- Side Bar Start -->
          <div class="col-lg-4 sidebar">
            <div class="sticky-top">
              <ul class="list-group mb-3 category">
                <li
                  class="list-group-item list-group-item-action"
                  @click="filterText = ''"
                  :class="{ active: filterText === '' }"
                >
                  全部商品
                </li>

                <li
                  class="list-group-item list-group-item-action"
                  v-for="item in categories"
                  :key="item"
                  :class="{ active: item == filterText }"
                  @click="filterText = item"
                  v-show="item != 'Banner'"
                >
                  <i></i>
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <!-- Side Bar End -->
          <div class="col-lg-8">
            <div class="row">
              <div
                class="col-md-4"
                v-for="item in filterProducts"
                :key="item.id"
              >
                <div class="product-item">
                  <div class="product-title">
                    <a href="#">{{ item.title }}</a>
                    <div class="ratting">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                  <div class="product-image">
                    <a href="product-detail.html">
                      <img :src="item.imageUrl" :alt="item.title" />
                    </a>
                    <div class="product-action">
                      <a href="#" @click.prevent="addCart(item.id)"
                        ><i class="fa fa-cart-plus"></i
                      ></a>
                      <a href="#" @click.prevent="addFavorite(item)"
                        ><i class="fa fa-heart"></i
                      ></a>
                      <a href="#"><i class="fa fa-search"></i></a>
                    </div>
                  </div>
                  <div class="product-price">
                    <h3><span>$</span>{{ item.price }}</h3>
                    <a class="btn" href=""
                      ><i class="fa fa-shopping-cart"></i>Buy Now</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              :pages="pagination"
              @emit-page="getAllProducts"
              v-if="filterText === ''"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Product List End -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';
import Banner from '@/components/Banner.vue';

export default {
  data () {
    return { product: {}, filterText: '' };
  },
  components: { Banner, Pagination },

  methods: {
    getAllProducts (page = 1) {
      this.$store.dispatch('productsModules/getAllProducts', page);
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`);
    },
    addCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty });
      this.$swal({ title: '加入購物車成功', icon: 'success' });
    },
    addFavorite (product) {
      this.$store.dispatch('favoriteModules/addToFavorite', product);
      this.$swal({ title: '已加入我的最愛', icon: 'success' });
    },
    removeCartItem (id) {
      this.$store.dispatch('cartModules/removeCartItem', id);
    },

    ...mapActions('productsModules', ['getProducts']),
    ...mapActions('cartModules', ['getCart']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  computed: {
    filterProducts () {
      if (this.filterText === '') {
        return this.allProducts.filter((item) => item.category !== 'Banner');
      }
      return this.products.filter((item) => item.category === this.filterText);
    },
    ...mapGetters('productsModules', [
      'products',
      'categories',
      'allProducts',
      'pagination'
    ])
    // ...mapGetters('cartModules', ['cart'])
  },
  created () {
    this.getProducts();
    this.getAllProducts();
    this.getCart();
  }
};
</script>

<style scoped>
.product-image {
  height: 250px;
  object-fit: contain;
}
.col-lg-4 {
  flex: 0 0 auto;
  width: 20.33333%;
}
.product-view .product-view-top {
  margin-bottom: 30px;
}
.no-bullet {
  list-style-type: none;
}
</style>
