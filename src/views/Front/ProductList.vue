<template>
  <!-- Start Content -->
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="h2 pb-4">韓國旅遊景點</h1>
        <ul class="list-unstyled templatemo-accordion">
          <li
            class="pb-3"
            @click="filterText = ''"
            :class="{ active: filterText === '' }"
          >
            <a
              class="
                collapsed
                d-flex
                justify-content-between
                h3
                text-decoration-none
              "
              >全部景點
            </a>
          </li>
          <li
            class="pb-3"
            v-for="item in categories"
            :key="item"
            @click="filterText = item"
            v-show="item != 'Banner'"
          >
            <a
              class="
                collapsed
                d-flex
                justify-content-between
                h3
                text-decoration-none
              "
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-inline shop-top-menu pb-3 pt-1">
              <li class="list-inline-item">
                <a class="h3 text-dark text-decoration-none mr-3" href="#"
                  >首爾
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 pb-4">
            <div class="d-flex">
              <select class="form-control">
                <option>Featured</option>
                <option>A to Z</option>
                <option>Item</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="item in filterProducts" :key="item.id">
            <div class="card mb-4 product-wap rounded-0">
              <div class="card rounded-0">
                <img
                  class="card-img rounded-0 img-fluid"
                  :src="item.imageUrl"
                  :alt="item.title"
                />
                <div
                  class="
                    card-img-overlay
                    rounded-0
                    product-overlay
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="btn btn-success text-white"
                        href="#"
                        @click.prevent="addFavorite(item)"
                        ><i class="far fa-heart"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="btn btn-success text-white mt-2"
                        href="#"
                        @click.prevent="getProduct(item.id)"
                        ><i class="far fa-eye"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="btn btn-success text-white mt-2"
                        href="#"
                        @click.prevent="addCart(item.id)"
                        ><i class="fas fa-cart-plus"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body">
                <a href="#" class="h3 text-decoration-none"
                  >{{ item.title }}
                </a>
                <ul
                  class="
                    w-100
                    list-unstyled
                    d-flex
                    justify-content-between
                    mb-0
                  "
                >
                  <li class="pt-2">
                    <span
                      class="
                        product-color-dot
                        color-dot-red
                        float-left
                        rounded-circle
                        ml-1
                      "
                    ></span>
                    <span
                      class="
                        product-color-dot
                        color-dot-blue
                        float-left
                        rounded-circle
                        ml-1
                      "
                    ></span>
                    <span
                      class="
                        product-color-dot
                        color-dot-black
                        float-left
                        rounded-circle
                        ml-1
                      "
                    ></span>
                    <span
                      class="
                        product-color-dot
                        color-dot-light
                        float-left
                        rounded-circle
                        ml-1
                      "
                    ></span>
                    <span
                      class="
                        product-color-dot
                        color-dot-green
                        float-left
                        rounded-circle
                        ml-1
                      "
                    ></span>
                  </li>
                </ul>
                <ul class="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p class="text-center mb-0">${{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination
    :pages="pagination"
    @emit-page="getAllProducts"
    v-if="filterText === ''"
  />

  <!-- End Content -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Pagination.vue';
// import Banner from '@/components/Banner.vue';

export default {
  data () {
    return { product: {}, filterText: '' };
  },
  components: { Pagination },

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
