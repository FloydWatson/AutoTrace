import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as vueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
//floydbcseit@gmail.com
Vue.use(vueGoogleMaps, {
  load: {
    key: 'AIzaSyAtqumGbo0dZmpQI8wqAU8zTMVn1BQqdz4',
    libraries: 'places,drawing,geometry',
  },
});

new Vue({
  // import router and store
  router,
  store,
  vueGoogleMaps,
  render: (h) => h(App),
}).$mount('#app');
