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
    width: 100%;
    border: 1px solid rgb(175, 175, 175);
    border-radius: 5px;
    margin-bottom: 25px;
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
