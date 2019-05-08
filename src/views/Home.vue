<template>
  <div class="home">
    <div v-for="(product, key, index) in productData" :key="index">
      <Product 
        :product="product"
      />
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
