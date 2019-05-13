<template>
  <div id="list-complete-demo" class="demo">
    <button v-on:click="shuffle">Перемешать</button>
    <button v-on:click="filter">Фильтр</button>
    <button v-on:click="add">Добавить</button>
    <button v-on:click="remove">Удалить</button>
    <transition-group name="list-complete" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-complete-item">{{ item }}</span>
    </transition-group>
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
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
