<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">作品集 </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
              >商品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link"
              >訂單列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link"
              >優惠券
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/cart" class="nav-link">訂單範例</router-link>
          </li>

          <li class="nav-item"></li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
        <span class="navbar-text"> 豪 </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`;
      console.log(api);
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          console.log(res.data);
          this.$router.push('/login');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
