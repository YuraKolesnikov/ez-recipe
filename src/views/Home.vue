<template>
  <div class="home">
    <div class="container">
      <div class="row" style="text-align: center">
        <p>Dishes: {{favorites}}</p>
        <p>Favories: {{ favoritesLength }} items</p>
      </div>
      <div class="row">
        <div 
          v-for="(product, key, index) in productData" 
          :key="index"
          class="col-3">
          <Product 
            :product="product"
            :callback="changeStatus"
            :class="{ 'active': product.favorite }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productData from '@/assets/db/data.json'

import Product from '@/components/Product.vue'
export default {
  name: 'home',
  components: {
    Product
  },
  data() {
    return {
      productData: productData
    }
  },
  computed: {
    favorites() {
      return this.$store.getters.favorites
    },
    favoritesLength() {
      return this.favorites.length
    }
  },
  methods: {
    changeStatus(name) {
      this.productData.forEach(item => {
        if (item.name == name) {
          item.favorite = !item.favorite
          this.filterFavorites()
        }
      })
    },

    filterFavorites() {
      const favorites = this.productData
      .filter(item => item.favorite === true)
      .map(item => ({
        name: item.name
      }))

      this.$store.commit('updateList', favorites)
    }
  }
}
</script>
