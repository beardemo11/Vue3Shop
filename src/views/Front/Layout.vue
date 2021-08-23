<template>
  <div>
    <FrontNavbar />
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    FrontNavbar,
    Footer
  },
  data () {
    return {};
  }
};
</script>
