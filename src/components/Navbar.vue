<template>
  <navbar class="navbar">
    <div class="container">
      <div class="navbar__main">
        <div class="navbar__logo">
          <svg class="icon">
            <use xlink:href="images/icons/icons.svg#logo"></use>
          </svg>
          <span class="navbar__brand">Recipe</span>
        </div>
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href class="navbar__link">
              <svg class="icon">
                <use xlink:href="images/icons/icons.svg#chicken"></use>
              </svg>
              Chicken
            </a>
          </li>
          <li class="navbar__item">
            <a href class="navbar__link">
              <svg class="icon">
                <use xlink:href="images/icons/icons.svg#vegetarian"></use>
              </svg>
              Vegetarian
            </a>
          </li>
          <li class="navbar__item">
            <a href class="navbar__link">
              <svg class="icon">
                <use xlink:href="images/icons/icons.svg#fish"></use>
              </svg>
              Fish
            </a>
          </li>
          <li class="navbar__item">
            <a href class="navbar__link">
              <svg class="icon">
                <use xlink:href="images/icons/icons.svg#cookies"></use>
              </svg>
              Cookies
            </a>
          </li>
        </ul>
        <div class="navbar__favorites">
          <p>Favorite: {{ favorites }} {{dish}}</p>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script>
export default {
  computed: {
    favorites() {
      return this.$store.getters.favorites.length
    },
    dish() {
      return this.$store.getters.favorites.length > 1
      ? 'dishes'
      : 'dish'
    }
  },
}
</script>

<style lang="scss">
.navbar {
  &__main {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 1px 150px;
    margin: 0 -15px;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    margin-left: 15px;
    width: calc(100% / 6);
    display: flex;
    align-items: center;
    & .icon {
      height: 37.38px;
      width: 37.38px;
    }
  }

  &__brand {
    font-size: 33.7119px;
    line-height: 28px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: calc(100% / 2);
    justify-content: space-between;
  }

  &__item {
    &:hover {
      .navbar__link { color: #F03360; }
      .navbar__link .icon { fill: #F03360; }
    }
  }

  &__link {
    font-size: 14px;
    font-family: 'Rubik';
    line-height: 17px;
    color: #37393C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color .35s ease;


    & .icon {
      height: 23px;
      width: 23px;
      margin-right: 14px;
      transition: fill .35s ease;
    }
  }

  &__favorites {
    margin-right: 15px;
    width: calc(100% / 6);
    text-align: right;
    & p { 
      color: #F03360;
      font-family: 'Rubik';
      font-size: 16px;
      line-height: 20px;
    }
  }
}

@media screen and (max-width: 480px) {

  .navbar__main {
    padding-top: 30px;
    padding-bottom: 100px;
  }
  .navbar__list {
    width: 100%;
    order: 3; 
    padding-top: 30px;
  }

  .navbar__item {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .navbar__favorites {
    width: calc(100% / 2);
    order: 2;
    white-space: nowrap;
  }
}
</style>