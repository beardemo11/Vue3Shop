<template>
  <div class="aa-slider-area">
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
    >
      <SwiperSlide v-for="item in banner" :key="item.id">
        <div
          class="img-bg"
          :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
        >
          <div class="content">
            <p class="fs-1"></p>
            <p class="fs-3 fw-bold">{{ item.description }}</p>
            <a
              href="#/product_list"
              class="btn btn-dark btn-hover rounded-0 fw-bold"
              >了解更多</a
            >
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

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

<style lang="scss">
@import '~swiper/swiper.scss';
@import '~swiper/components/pagination/pagination.min.css';
@import '~swiper/components/navigation/navigation.min.css';
</style>

<style scoped>
.aa-slider-area {
  display: inline;
  float: left;
  width: 100%;
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
