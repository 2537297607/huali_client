import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//引入vue-swiper轮播
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'

Vue.config.productionTip = false;
//使用
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
