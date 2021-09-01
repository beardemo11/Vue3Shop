<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="FavoriteOffcanvas"
    aria-labelledby="offcanvasRight2Label"
  >
    <div class="offcanvas-header border-bottom">
      <h5 id="offcanvasRight2Label" class="fw-bold">我的最愛</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body pt-0 bg-white">
      <ul v-if="favorites.length > 0">
        <li
          class="d-flex align-items-center py-4 px-3"
          :class="{ 'border-bottom': item !== 10 }"
          v-for="item in favorites"
          :key="`${item}item`"
        >
          <div class="w-25">
            <img
              :src="item.imageUrl"
              alt="imageUrl"
              width="80"
              height="80"
              class="img-fluid me-3 obj-fit-contain"
            />
          </div>
          <div class="w-75 ms-3">
            <h3 class="h6 mb-1 fw-bold">{{ item.title }}</h3>
            <p class="fw-bold text-success p1">
              NT ${{ $filters.currency(item.price) }}
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <div class="fw-bold">
                <a
                  href="#"
                  class="pe-2 fw-bold"
                  @click.prevent="goToProduct(item.id)"
                >
                  點我前往
                </a>
              </div>

              <!-- <button
                type="button"
                class="btn btn-outline-info"
                @click.prevent="getProduct(item.id)"
              >
                <i class="far fa-eye"></i>
              </button> -->
              <!-- <button
                type="button"
                class="btn btn-outline-info"
                @click.prevent="addCart(item.id)"
              >
                <i class="fas fa-cart-plus"></i>
              </button> -->

              <button
                type="button"
                class="btn btn-outline-info"
                @click.prevent="removeFavorite(item, false)"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <p class="py-5 fw-bold" v-else>目前無產品</p>
      <!-- <div>
        <div class="offcanvas-footer border">
          <div class="p-3">
            <template v-if="favorites.length > 0">
              <button
                @click.prevent="changeRoute('/product_list')"
                type="button"
                class="btn btn-outline-success btn-lg w-100 mb-3 fw-bold"
              >
                繼續選購
              </button>
              <a
                href="#"
                @click.prevent="changeRoute('/checkout')"
                class="btn btn-success btn-lg w-100 text-white fw-bold"
                >直接購買</a
              >
            </template>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data () {
    return {};
  },
  methods: {
    goToProduct (id) {
      this.$router.push(`/product/${id}`);
    },

    removeFavorite (favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', {
        favoriteItem: favorite,
        delall
      });
    },

    ...mapActions('favoriteModules', ['getFavorite'])
  },
  computed: {
    ...mapGetters('favoriteModules', ['favorites', 'favoritesLength'])
  },
  watch: {
    $route (to, from) {
      this.$router.go(0);
    }
  },

  created () {}
};
</script>

<style scoped>
.p1 {
  margin-bottom: -1rem;
}
</style>
