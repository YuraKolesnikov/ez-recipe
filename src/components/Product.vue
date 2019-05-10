<template>
  <div class="product" @click="callback(product.name)">
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

        </div>
        <div class="product__info-item">

        </div>
      </div>
    </div>
    <div class="product__star-icon">
      <svg class="icon" :class="{active: product.favorite}">
        <use xlink:href="images/icons/icons.svg#star"></use>
      </svg>
    </div>
    <!-- <h2 class="product__name">{{ product.name }}</h2>
    <span class="product__info">{{ product.cooking_time }}</span>
    <span class="product__info">{{ product.categorie_id }}</span>
    <span class="product__info">{{ product.favorite }}</span> -->
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
    box-sizing: border-box;
    height: 400px;
    margin-bottom: 15px;
    border: 1px solid #EAEAEA;
    border-radius: 3px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    transition: box-shadow .35s ease;
    position: relative;
    width: 340px;
    &:hover {
      box-shadow: 0px 5px 20px 20px rgba(0, 0, 0, 0.1);

      .product__img { filter: brightness(80%); }

      .product__star-icon .icon { opacity: 1; }
    }

    &__img {
      height: 340px;
      transition: filter .35s ease;
    }

    &__body {
      height: 180px;
      position: absolute;
      bottom: 0;
      background-color: #FFF;
      width: 340px;
      display: flex;
      flex-direction: column;
    }

    &__description {
      width: 100%;
      height: 130px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding: 20px;
    }

    &__title {
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #F03360;
    }

    &__caption {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #BFBFC5;
    }

    &__info {
      display: flex;
    }

    &__info-item {
      width: 50%;
      height: 50px;
    }

    &__star-icon {
      position: absolute;
      top: 20px;
      right: 20px;

      & .icon {
        width: 25px;
        height: 25px;
        fill: #fff;
        opacity: 0;
        transition: opacity .35s ease;

        &:hover {
          fill: #F03360;
        }

        &.active {
          opacity: 1;
          fill: #F03360;
        }
      }
    }

    /* width: 100%;
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
    } */
  }
</style>
