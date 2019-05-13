import Vue from 'vue'
import Vuex from 'vuex'

import productData from './products'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favorites: [],
    productData,
    filteredData: []
  },

  getters: {
    favorites: state => state.favorites,
    productData: state => state.productData,
    filteredData: state => state.filteredData
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
    },

    filterDishes: (state, filters = ['all']) => {
      if (filters.includes('all')) {
        return state.filteredData = state.productData
      }
      state.filteredData = 
      state.productData
      .filter(item => filters.includes(item.categorie_id) === true)
    }
  }
})