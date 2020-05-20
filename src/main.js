import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  el:'#app',
  store,
  render: h => h(App),
  router,
 
})
