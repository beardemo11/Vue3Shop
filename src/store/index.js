import { createStore } from 'vuex';
import productsModules from './products';
import cartModules from './cart';
import favoriteModules from './favorite';

export default createStore({
  state: {
    isLoading: false
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status);
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status;
    }
  },
  getters: {},
  modules: {
    productsModules,
    cartModules,
    favoriteModules
  }
});
