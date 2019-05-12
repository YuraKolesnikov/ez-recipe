<template>
  <div class="product">
    <div class="product__img">
      <img :src="product.image" class="img-fluid">
    </div>
    <div class="product__body">
      <div class="product__description">
        <h4 class="product__title">{{product.name}}</h4>
        <p class="product__caption">{{ product.description }}</p>
      </div>
      <div class="product__info">
        <div class="product__info-item">
          <svg class="icon">
            <use xlink:href="images/icons/icons.svg#clocks"></use>
          </svg>
          <p>{{product.cooking_time}}</p>
        </div>
        <div class="product__info-item">
          <svg class="icon">
            <use :xlink:href="`images/icons/icons.svg#${product.categorie_id}`"></use>
          </svg>
          <p>{{capitalize(product.categorie_id)}}</p>
        </div>
      </div>
    </div>
    <div class="product__star-icon" @click="callback(product.name)">
      <svg class="icon" :class="{active: product.favorite}">
        <use xlink:href="images/icons/icons.svg#star"></use>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    product: Object,
    callback: Function
  },
  methods: {
    capitalize(string) {  
      return string.split('')[0].toUpperCase() + string.slice(1)
    }
  }
}
</script>
