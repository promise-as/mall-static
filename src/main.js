import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import 'swiper/css/swiper.min.css'

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
