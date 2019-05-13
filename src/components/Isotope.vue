<template>
  <div id="list-complete-demo" class="demo">
    <button v-on:click="shuffle">Перемешать</button>
    <button v-on:click="filter">Фильтр</button>
    <button v-on:click="filterSecond">Фильтр</button>
    <button v-on:click="add">Добавить</button>
    <button v-on:click="remove">Удалить</button>
    <div class="container">
      <transition-group name="list-complete" tag="div" class="row">
        <div class="col-3 list-complete-item" v-for="item in items" v-bind:key="item">
          <div>{{ item }}</div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    filter: function() {
      this.items = this.items.filter(item => item > 5)
    },
    filterSecond: function() {
      this.items = this.items.filter(item => item < 5)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
};
</script>
<style lang="scss">
.list-complete {
  display: flex;
}

.list-complete-item {
  width: calc(100% / 3 - 30px);
  margin: 15px;
  border: 1px solid teal;

  transition: transform .7s, opacity .15s;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
