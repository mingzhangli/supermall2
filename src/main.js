import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import toast from 'components/common/toast/index'
import VueLazyLoad from 'vue-lazyload';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//注册事件总线
Vue.prototype.$bus = new Vue()
//安装element-ui
Vue.use(ElementUI);

//安装toast插件
//安装好后,就会调用toast里install方法
Vue.use(toast)

//安装懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
 });

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount("#app");