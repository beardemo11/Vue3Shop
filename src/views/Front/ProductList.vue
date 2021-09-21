<template>
  <!-- Start Content -->
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <h1 class="h2 pb-4 fw-bold">韓國旅遊景點</h1>
        <ul class="list-unstyled templatemo-accordion">
          <li class="pb-3">
            <a
              href="#"
              @click.prevent="changeCategories('')"
              class="
                collapsed
                d-flex
                justify-content-between
                h3
                text-decoration-none
                fw-bold
              "
              :class="{
                'text-success': filterText === '' || filterText === undefined
              }"
              >全部景點
            </a>
          </li>
          <li
            class="pb-3"
            v-for="item in categories"
            :key="item"
            v-show="item != 'Banner'"
          >
            <a
              href="#"
              @click.prevent="changeCategories(item)"
              class="
                collapsed
                d-flex
                justify-content-between
                h3
                text-decoration-none
                fw-bold
              "
              :class="{ 'text-success': filterText === item }"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6 pb-4">
            <div class="d-flex">
              <form class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                  <input
                    type="search"
                    class="form-control fw-bold"
                    placeholder="搜尋景點"
                    v-model="searchText"
                    @keyup.enter="searchProducts(searchText)"
                  />
                  <button
                    type="submit"
                    class="input-group-text bg-success text-light"
                    @click.prevent="searchProducts(searchText)"
                  >
                    <i class="fa fa-fw fa-search text-white"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="item in renderProducts" :key="item.id">
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
                        @click.prevent="toggleFavorite(item)"
                        ><i
                          class="far fa-heart"
                          :class="[
                            this.favoriteList.includes(item.id)
                              ? 'bi-heart-fill'
                              : 'bi-heart'
                          ]"
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        class="btn btn-success text-white mt-2"
                        href="#"
                        @click.prevent="goToProduct(item.id)"
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
                <a
                  href="#"
                  @click.prevent="goToProduct(item.id)"
                  class="h3 text-decoration-none fw-bold"
                  >{{ item.title }}
                  <ul class="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <div
                    class="d-flex justify-content-center"
                    v-if="item.price === item.origin_price"
                  >
                    <p class="text-center mb-0 fw-bold">
                      NT$ {{ $filters.currency(item.price) }}
                    </p>
                  </div>

                  <div class="d-flex justify-content-between" v-else>
                    <del class="text-muted fs-9"
                      >NT$ {{ $filters.currency(item.origin_price) }}
                    </del>
                    <p class="text-start mb-0 fw-bold">
                      NT$ {{ $filters.currency(item.price) }}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            v-if="
              (searchText || renderProducts.length) &&
              renderProducts.length == 0
            "
          >
            <div class="col-12 mb-4">
              <div class="no-results bg-grayf8">
                <p>找不到有關 '{{ searchText }}'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination :paginationData="paginationData" @getData="getRenderProducts" />
  </div>

  <!-- End Content -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Pagination from '@/components/Front/Pagination.vue';

export default {
  data () {
    return {
      resultProduct: [],
      filterText: '',
      searchText: '',
      paginationData: {},
      renderProducts: [],
      isFavorite: false,
      favoriteList: []
    };
  },
  components: { Pagination },

  methods: {
    goToProduct (id) {
      this.$router.push(`/product/${id}`);
    },
    addCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty });
      this.$swal({
        title: '加入購物車成功',
        icon: 'success',
        confirmButtonColor: '#59ab6e'
      });
    },
    toggleFavorite (product) {
      this.$store
        .dispatch('favoriteModules/toggleFavorite', product)
        .then((response) => {
          this.getFavorites();
          this.isFavorite = response;
          this.$swal({
            title: `${this.isFavorite ? '加入' : '移除'}我的最愛`,
            icon: 'success',
            confirmButtonColor: '#59ab6e'
          });
        });
    },
    getAllProductsData () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.resultProduct = res.data.products.filter(
            (item) => item.category !== 'Banner'
          );

          this.getPaginationData();
          this.getRenderProducts();
          this.changeCategories(this.$route.query.productCategory);
          this.getFavorites();
        }
      });
    },
    getRenderProducts (page = 1) {
      this.getPaginationData(page);
      this.renderProducts = [];
      const minNum = (page - 1) * 10;
      const maxNum = page * 10 - 1;
      this.resultProduct.forEach((item, index) => {
        if (minNum <= index && index <= maxNum) {
          this.renderProducts.push(item);
        }
      });
    },
    getPaginationData (page = 1, results = this.resultProduct) {
      const pageData = {};
      pageData.total_pages = Math.ceil(results.length / 10);
      pageData.current_page = page;
      if (pageData.current_page + 1 > pageData.total_pages) {
        pageData.has_next = false;
      } else {
        pageData.has_next = true;
      }
      if (pageData.current_page === 1) {
        pageData.has_pre = false;
      } else {
        pageData.has_pre = true;
      }
      this.paginationData = pageData;
    },
    changeCategories (cate) {
      this.filterText = cate;
      this.renderProducts = [];
      this.resultProduct.forEach((item) => {
        if (cate === item.category) {
          this.renderProducts.push(item);
          this.getPaginationData(1, this.renderProducts);
        } else if (!cate) {
          this.getRenderProducts();
        }
      });
    },
    getFavorites () {
      this.favoriteList = [];
      this.favorites.forEach((item) => {
        this.favoriteList.push(item.id);
      });
    },
    searchProducts (searchText) {
      if (searchText.length > 0) {
        this.renderProducts = this.resultProduct.filter((item) =>
          item.title.match(this.searchText.trim())
        );
        this.getPaginationData(1, this.renderProducts);
      } else {
        this.getAllProductsData();
      }
    },

    ...mapActions('favoriteModules', ['getFavorite'])
  },

  computed: {
    ...mapGetters('productsModules', [
      'products',
      'categories',
      'allProducts',
      'pagination'
    ]),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  created () {
    this.getAllProductsData();
    this.getRenderProducts();
  }
};
</script>
