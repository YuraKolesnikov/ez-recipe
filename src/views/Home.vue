<template>
  <div class="wrapper">
    <Navbar 
      :data="productData" 
      :favorites="favorites"
      :favoritesLength="favorites.length"
      :deleteCallback="removeFromFavorites"
      @filterDishes="filterDishes"
    />
    <div class="products">
      <div class="products__wrapper">
        <div class="container">
          <transition-group class="row" name="products__list">
            <div 
              v-for="product in filteredList" 
              :key="product.name"
              class="col-3 products__list-item">
              <Product
                :product="product"
                :callback="changeStatus"
                :class="{ 'active': product.favorite }"
              />
            </div>
          </transition-group>
        <div class="button-wrap">
          <button class="btn">More recipe looool</button>
        </div>
      </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Product,
    Footer
  },

  data() {
    return {
      filterCategory: ''
    }
  },

  computed: {
    productData() {
      return this.$store.getters.productData
    },
    
    favorites() {
      return this.$store.getters.favorites
    },
    
    filteredList() {
      return this.$store.getters.filteredData
    }
  }, 

  mounted() {
    this.$store.commit('filterDishes')
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
    },

    removeFromFavorites(name) {
      this.$store.commit('removeFromList', name)
    },

    filterDishes(activeFilters) {
      this.$store.commit('filterDishes', activeFilters)
    }
  }
}
</script>