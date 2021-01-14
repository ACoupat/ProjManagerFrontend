import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Playground } from './components/playground'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Playground)
}).$mount("#app");
