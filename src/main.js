import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import toast from 'components/common/toast/index'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
Vue.use(ElementUI);

Vue.use(toast)

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount("#app");