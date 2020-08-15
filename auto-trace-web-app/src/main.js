import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;
//floydbcseit@gmail.com
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBsoHlnobJ-JnnwnTFdx4vRjHT-WDR2Uko',
    libraries: 'places,drawing,geometry',
  },
});

new Vue({
  // import router and store
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
