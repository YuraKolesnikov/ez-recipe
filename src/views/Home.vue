<template>
  <div class="wrapper">
    <Navbar :data="productData" :callback="filterData"/>
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
          <button class="btn">More recipe</button>
        </div>
      </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>

import Product from '@/components/Product.vue'
import Isotope from '@/components/Isotope.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    Isotope,
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
    filteredList() {
      if (this.filterCategory !== '') {
        return this.productData.filter(item => item.categorie_id == this.filterCategory)
      }
      return this.productData
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
    },

    filterData(key) {
      this.filterCategory = key
    }
  }
}
</script>
<style lang="scss">
/* Just animation */
.products__list {
  
  &-item {
    transition: transform .7s, opacity .15s;
  }

  &-enter, &-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  &-leave-active {
    position: absolute;
  }
}


</style>
