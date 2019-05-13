import Vue from 'vue'
import Vuex from 'vuex'

import productData from './products'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favorites: [],
    productData
  },
  getters: {
    favorites: state => state.favorites,
    productData: state => state.productData
  },
  mutations: {
    updateList: (state, data) => state.favorites = data
  }
})