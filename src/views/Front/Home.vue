<template>
  <div>
    <Banner />
    <Feature />
    <FeaturedProduct />
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import Feature from '@/components/Feature.vue';
import FeaturedProduct from '@/components/FeaturedProduct.vue';

export default {
  components: { Banner, FeaturedProduct, Feature },

  data () {
    return {};
  }
};
</script>
