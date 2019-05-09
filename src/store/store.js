import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
    favorites: state => {}
  },
  mutations: {
    addToFavorites: (state, item) => {},
    removeFromFavorites: (state, id) => {}
  }
})