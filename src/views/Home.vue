<template>
  <div class="wrapper">
    <Navbar :data="productData" :callback="filterData"/>
    <Isotope />
   <!--  <div class="products">
      <div class="products__main">
        <div class="container">
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
        <div class="button-wrap">
          <button class="btn">More recipe</button>
        </div>
      </div>
      </div>
    </div> -->
    <Footer />
  </div>
</template>

<script>
import productData from '@/assets/db/data.json'

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
      productData: productData
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
      return this.productData.filter(item => item.categorie_id === key)
    }
  }
}
</script>
