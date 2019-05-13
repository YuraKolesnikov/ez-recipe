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
    updateList: (state, data) => state.favorites = data,
    removeFromList: (state, name) => {
      /* Deleting from favorites */
      const index = state.favorites.findIndex(item => item.name == name)
      state.favorites.splice(index, 1)

      /* Changing status in product list */
      state.productData.map(item => {
        if (item.name === name) {
          return item.favorite = false
        }
      })

      return state
    }
  }
})