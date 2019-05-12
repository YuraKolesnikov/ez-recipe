<template>
  <div class="home">
    <div class="container">
      <div style="text-align: left">
        <p>Dishes: {{favorites}}</p>
        <p>Favories: {{ favoritesLength }} items</p>
      </div>
      <div class="row">
        <Product 
          v-for="(product, key, index) in productData" 
          :key="index"
          class="col-3"
          :product="product"
          :callback="changeStatus"
          :class="{ 'active': product.favorite }"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import productData from '@/assets/db/data.json'

import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Product,
    Footer
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
