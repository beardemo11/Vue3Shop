<template>
  <div class="">
    <Swiper
      :spaceBetween="0"
      :centeredSlides="true"
      :pagination="{
        clickable: true
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :navigation="false"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in banner" :key="item.id">
        <div
          class="img-bg"
          :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
        >
          <div class="content">
            <p class="fs-1"></p>
            <p class="fs-3">{{ item.description }}</p>
            <a href="#/products/all" class="btn btn-dark btn-hover rounded-0"
              >了解更多</a
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script scoped>
import { mapGetters, mapActions } from 'vuex';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    banner () {
      return this.products.filter((item) => item.category === 'Banner');
    },
    ...mapGetters('productsModules', ['products', 'categories'])
  },
  methods: {
    ...mapActions('productsModules', ['getProducts'])
  },
  created () {
    this.getProducts();
  }
};
</script>

<style scoped>
.banner {
  margin-top: 60px;
}
.img-bg {
  background-size: cover;
  background-position: center center;
  min-height: 500px;
}
@media (max-width: 768px) {
  .img-bg {
    min-height: 300px;
  }
}
.content {
  color: #fff;
  position: relative;
  top: 150px;
  left: 230px;
}
.content p {
  letter-spacing: 3px;
}
@media (max-width: 768px) {
  .content {
    top: 90px;
    left: 40px;
  }
}
</style>
