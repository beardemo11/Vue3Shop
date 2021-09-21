<template>
  <div>
    <Banner />
    <Feature />
    <FeaturedProduct />
    <Subscribe />
  </div>
</template>
<script>
import Banner from '@/components/Front/Banner.vue';
import Feature from '@/components/Front/Feature.vue';
import FeaturedProduct from '@/components/Front/FeaturedProduct.vue';
import Subscribe from '@/components/Front/Subscribe.vue';

export default {
  components: { Banner, FeaturedProduct, Feature, Subscribe },

  data () {
    return {};
  }
};
</script>
