<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <Product 
          v-for="(product, key, index) in productData" :key="index"
          :product="product"
        />
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
  }
}
</script>
