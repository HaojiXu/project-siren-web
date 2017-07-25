import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(Vuetify)
Vue.use(VueRouter)

import HttpApi from './utils/api_utils.js'
Vue.mixin(HttpApi)

import main from './components/main.vue'
import view from './components/view.vue'

const routes = [
    {path: '/', component: main},
    {path: '/view', component: view},

];

const router = new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




