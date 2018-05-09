import Vue from 'vue'
import App from './App.vue'
import pagination from './lib/index.js'
Vue.use(pagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
