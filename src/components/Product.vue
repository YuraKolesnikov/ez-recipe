<template>
  <div class="product">
    <h2 class="product__name">{{ product.name }}</h2>
    <span class="product__info">{{ product.cooking_time }}</span>
    <span class="product__info">{{ product.categorie_id }}</span>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: Object
  }
}
</script>
<style lang="scss">
  .product {
    border: 1px solid rgb(175, 175, 175);
    width: 150px;
    margin: 0 10px;
    border-radius: 5px;

    &__info {
      display: block;
    }
  }
</style>
