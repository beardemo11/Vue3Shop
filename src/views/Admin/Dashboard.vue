<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <ToastMessages />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Admin/Navbar.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/Admin/ToastMessages.vue';

export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return { emitter };
  },

  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;

    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  }
};
</script>

<style lang="scss" scoped></style>
