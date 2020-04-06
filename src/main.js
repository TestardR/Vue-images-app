import Vue from 'vue'
import VueRouter from 'vue-router';
import store from './store'

import App from './App.vue'
import AuthHandler from './components/AuthHandler'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/oauth2/callback', component: AuthHandler
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
