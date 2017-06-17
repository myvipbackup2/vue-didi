// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-awesome/icons'
import '../library/mint-ui'
import store from '@/store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AMap from 'vue-amap';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */

let vm = new Vue({
  el: '#app',
  router,
  store,
  AMap,
  template: '<App/>',
  components: {App}
});

