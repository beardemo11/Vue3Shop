<template>
  <!-- Start Article -->
  <section class="py-5">
    <div class="container">
      <div class="row text-left p-2 pb-3">
        <h4 class="fw-bold">熱門景點</h4>
      </div>

      <!--Start Carousel Wrapper-->
      <div id="carousel-related-product">
        <swiper
          :slidesPerView="4"
          :loop="true"
          :autoplay="options.autoplay"
          :speed="300"
          :breakpoints="options.breakpoints"
        >
          <swiper-slide v-for="item in hotProducts" :key="item.id">
            <div class="p-2 pb-3">
              <div class="product-wap card rounded-0">
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
                          ><i class="far fa-heart"></i
                        ></a>
                      </li>
                      <li>
                        <a
                          class="btn btn-success text-white mt-2"
                          href=""
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
                    class="h3 text-decoration-none fw-bold"
                    @click.prevent="goToProduct(item.id)"
                    >{{ item.title }}</a
                  >
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
                      <i class="text-warning fa fa-star"></i>
                      <i class="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p class="text-center mb-0 fw-bold">NT ${{ item.price }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <!-- End Article -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
SwiperCore.use([Autoplay, Pagination]);

export default {
  components: { Swiper, SwiperSlide },
  data () {
    return {
      options: {
        autoplay: { delay: 2000, disableOnInteraction: false },
        pagination: { clickable: true },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 16 },
          767: {
            slidesPerView: 3,
            spaceBetween: 18
          },
          1024: { slidesPerView: 4, spaceBetween: 24 }
        }
      }
    };
  },
  computed: {
    hotProducts () {
      return this.products.filter((item) => item.content === '熱門景點');
    },
    ...mapGetters('productsModules', ['products', 'categories'])
  },
  methods: {
    goToProduct (id) {
      this.$router.push(`/product/${id}`);
    },
    addCart (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty });
      this.$swal({ title: '加入購物車成功', icon: 'success' });
    },
    addFavorite (product) {
      this.$store.dispatch('favoriteModules/addToFavorite', product);
      this.$swal({
        title: '已加入我的最愛',
        icon: 'success'
      });
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

    ...mapActions('productsModules', ['getProducts']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  watch: {
    $route (to, from) {
      this.$router.go(0);
    }
  },

  created () {
    this.getProducts();
  }
};
</script>
