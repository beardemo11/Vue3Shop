<template>
  <nav class="navbar navbar-expand-md navbar-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">隨心飛</a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <div class="user">
          <a href="wishlist.html" class="btn wishlist">
            <i class="fa fa-heart"></i>
            <span>({{ favoritesLength }})</span>
          </a>
          <a href="cart.html" class="btn cart">
            <i class="fa fa-shopping-cart"></i>
            <span>({{ cartLength }})</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions('cartModules', ['getCart']),
    ...mapActions('favoriteModules', ['getFavorite'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    },
    ...mapGetters('cartModules', ['cart', 'cartLength']),
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  created () {
    this.getCart();
    this.$store.dispatch('favoriteModules/getFavorite');
  }
};
</script>
