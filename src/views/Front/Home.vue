<template>
  <div>
    <Banner />
    <Feature />
    <FeaturedProduct />
    <Subscribe />
  </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import Feature from '@/components/Feature.vue';
import FeaturedProduct from '@/components/FeaturedProduct.vue';
import Subscribe from '@/components/Subscribe.vue';

export default {
  components: { Banner, FeaturedProduct, Feature, Subscribe },

  data () {
    return {};
  }
};
</script>
