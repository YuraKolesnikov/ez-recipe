<template>
  <div class="product" @click="callback(product.name)">
    <h2 class="product__name">{{ product.name }}</h2>
    <span class="product__info">{{ product.cooking_time }}</span>
    <span class="product__info">{{ product.categorie_id }}</span>
    <span class="product__info">{{ product.favorite }}</span>
    <!-- <img :src="product.image" alt=""> -->
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    callback: Function
  },
}
</script>
<style lang="scss">
  .product {
    border: 1px solid rgb(175, 175, 175);
    width: 150px;
    margin: 0 10px;
    border-radius: 5px;
    transition: border .35s ease;

    &__info {
      display: block;
    }

    &.active {
      border: 1px solid tomato;
      transition: border .35s ease;
    }
  }
</style>
