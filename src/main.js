import Vue from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')