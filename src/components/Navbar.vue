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
            @click="callback(item.category)">
            <a class="navbar__link">
              <svg class="icon">
                <use :xlink:href="`images/icons/icons.svg#${item.category}`"></use>
              </svg>
              {{item.name}}
            </a>
          </li>
        </ul>
        <div class="navbar__favorites">
          <p>Favorite: {{ favorites.length }} {{dish}}</p>
          <div v-if="favorites.length > 0" class="favorites-modal">
            <ul class="favorites-modal__list">
              <li 
                class="favorites-modal__item"
                v-for="item in favorites" 
                :key="item.name">
                <span class="favorites-modal__item-name">{{item.name}}</span>
                <button 
                  @click="deleteCallback(item.name)"
                  class="favorites-modal__delete-button">
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
    deleteCallback: Function
  },

  data() {
    return {
      links: [
        { name: 'Chicken', category: 'chicken' },
        { name: 'Vegetarian', category: 'vegetarian' },
        { name: 'Fish', category: 'fish' },
        { name: 'Cookies', category: 'cookies' }
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