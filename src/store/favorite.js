export default {
  namespaced: true,
  state: {
    favorites: {},
    favoritesLength: 0,
    isFavorite: false
  },

  actions: {
    setFavoriteProduct (key, value) {
      localStorage.setItem(key, value);
    },
    toggleFavorite (context, product) {
      const storageKey = 'favoriteData';

      const favoriteProducts =
        JSON.parse(localStorage.getItem('favoriteData')) || [];
      if (favoriteProducts) {
        const idx = favoriteProducts.findIndex(
          (item) => item.id === product.id
        );
        if (idx === -1) {
          localStorage.setItem(
            storageKey,
            JSON.stringify([...favoriteProducts, product])
          );
          this.isFavorite = true;
        } else {
          favoriteProducts.splice(idx, 1);
          localStorage.setItem(storageKey, JSON.stringify(favoriteProducts));
          this.isFavorite = false;
        }
      } else {
        this.setFavoriteProduct(storageKey, JSON.stringify([product]));
        this.isFavorite = true;
      }

      context.dispatch('getFavorite');
    },
    getFavorite (context) {
      const favoriteData =
        JSON.parse(localStorage.getItem('favoriteData')) || [];
      context.commit('FAVORITES', favoriteData);
      context.commit('FAVORITES_LENGTH', favoriteData.length);
      context.dispatch(
        'productsModules/getProducts',
        { isPagination: false },
        { root: true }
      );
    },
    addToFavorite (context, product) {
      const favoriteData = {
        id: product.id,
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price
      };

      context.commit('PUSH_FAVORITE', favoriteData);
      localStorage.setItem(
        'favoriteData',
        JSON.stringify(context.state.favorites)
      );
      context.dispatch('getFavorite');
    },
    removeFavorite (context, { favoriteItem, delall }) {
      if (delall) {
        localStorage.removeItem('favoriteData');
      } else {
        context.commit('REMOVE_FAVORITE', favoriteItem);
        localStorage.setItem(
          'favoriteData',
          JSON.stringify(context.state.favorites)
        );
      }
      context.dispatch('getFavorite');
    }
  },
  mutations: {
    FAVORITES (state, payload) {
      state.favorites = payload;
    },
    FAVORITES_LENGTH (state, payload) {
      state.favoritesLength = payload;
    },
    PUSH_FAVORITE (state, favorite) {
      state.favorites.push(favorite);
    },
    REMOVE_FAVORITE (state, favorite) {
      state.favorites.forEach((item, index) => {
        if (item.id === favorite.id) {
          state.favorites.splice(index, 1);
        }
      });
    }
  },
  getters: {
    favorites: (state) => state.favorites,
    favoritesLength: (state) => state.favoritesLength
  }
};
