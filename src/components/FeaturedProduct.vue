<template>
  <!-- Featured Product Start -->
  <div class="featured-product product">
    <div class="container-fluid">
      <div class="section-header">
        <h1>熱門景點</h1>
      </div>
      <div
        class="
          row
          align-items-center
          product-slider product-slider-4
          slick-initialized slick-slider
        "
      >
        <swiper
          :slidesPerView="4"
          :loop="true"
          :autoplay="options.autoplay"
          :speed="300"
          :breakpoints="options.breakpoints"
        >
          <swiper-slide v-for="item in hotProducts" :key="item.id">
            <div class="product-item">
              <div class="product-title">
                <a href="#">{{ item.title }} </a>
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
                  <a href="#"><i class="fa fa-cart-plus"></i></a>
                  <a href="#"><i class="fa fa-heart"></i></a>
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
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- Featured Product End -->
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
    buyNow (id, qty = 1) {
      this.$store.dispatch('cartModules/addCart', { id, qty });
      this.$swal({
        title: '加入購物車成功',
        icon: 'success'
      });
    },
    ...mapActions('productsModules', ['getProducts'])
  },

  created () {
    this.getProducts();
  }
};
</script>

<style scoped>
.swiper-slide img {
  display: block;
  width: 433.75px;
  height: 433.75px;
  object-fit: cover;
}
@media (max-width: 768px) {
  .swiper-slide img {
    min-height: 414px;
  }
}
</style>
