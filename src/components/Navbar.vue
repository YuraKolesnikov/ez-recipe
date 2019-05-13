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
            class="navbar__item">
            <input
              class="navbar__checkbox-hidden" 
              type="checkbox" 
              :value="item.category"
              :name="item.name" 
              :id="item.name"
              v-model="activeFilters"
              @change="$emit('filterDishes', activeFilters)">
            <label :for="item.name" class="navbar__label">
              <a class="navbar__link">
                <svg class="icon">
                  <use :xlink:href="`images/icons/icons.svg#${item.category}`"></use>
                </svg>
                {{item.name}}
              </a>
            </label>
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
      activeFilters: [],
      links: [
        { name: 'Chicken', category: 'chicken', active: false },
        { name: 'Vegetarian', category: 'vegetarian', active: false },
        { name: 'Fish', category: 'fish', active: false },
        { name: 'Cookies', category: 'cookies', active: false }
      ]
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