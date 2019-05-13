<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__main">
        <div class="navbar__logo">
          <svg class="icon">
            <use xlink:href="images/icons/icons.svg#logo"></use>
          </svg>
          <span class="navbar__brand">Recipe</span>
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
          <p>Favorite: {{ favorites }} {{dish}}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    data: Array,
    callback: Function
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
    favorites() {
      return this.$store.getters.favorites.length
    },
    dish() {
      return this.$store.getters.favorites.length != 1
      ? 'dishes'
      : 'dish'
    }
  },
}
</script>