<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__main">
        <div class="navbar__logo">
          <svg class="icon">
            <use xlink:href="images/icons/icons.svg#logo"></use>
          </svg>
          <a href="#"><span class="navbar__brand">Recipe</span></a>
        </div>
        <ul class="navbar__list">
          <li 
            v-for="item in links"
            :key="item.name"
            class="navbar__item"
            @click="callback(item.name.toLowerCase())">
            <a class="navbar__link">
              <svg class="icon">
                <use :xlink:href="`images/icons/icons.svg#${item.name.toLowerCase()}`"></use>
              </svg>
              {{item.name}}
            </a>
          </li>
        </ul>
        <div class="navbar__favorites">
          <p>Favorite: {{ favoritesLength }} {{dish}}</p>
          <div v-if="favorites.length > 0" class="favorites-modal">
            <ul class="favorites-modal__list">
              <li 
                class="favorites-modal__item"
                v-for="item in favorites" 
                :key="item.name">
                <span style="padding-right: 15px;">{{item.name}}</span>
                <button 
                  @click="deleteCallback(item.name)"
                  style="
                    background: transparent; 
                    transform: rotate(45deg); 
                    border: 0;
                    float: right;">
                  +
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    callback: Function,
    favorites: Array,
    favoritesLength: Number,
    deleteCallback: Function
  },
  data() {
    return {
      links: [
        { name: 'Chicken' },
        { name: 'Vegetarian' },
        { name: 'Cookies' },
        { name: 'Fish' }
      ]
    }
  },
  methods: {
    filterData(key) {
      return 
    }
  },
  computed: {
    dish() {
      return this.$store.getters.favorites.length != 1
      ? 'dishes'
      : 'dish'
    }
  },
}
</script>