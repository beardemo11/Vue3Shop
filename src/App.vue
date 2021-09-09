<template>
  <router-view v-if="isRouterAlive" />
</template>
<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    };
  },
  data () {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
