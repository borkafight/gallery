import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: null,
    collectionTerm: null
  },
  getters: {
    getSearchQuery: state => state.searchQuery,
    getCollectionTerm: state => state.collectionTerm
  },
  mutations: {
    setSearchQuery: (state, payload) => {
      state.searchQuery = payload;
    },
    setCollectionTerm: (state, payload) => {
      state.collectionTerm = payload;
    }
  },
  actions: {},
  modules: {}
});
