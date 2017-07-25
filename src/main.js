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
import static_about from './components/static_about.vue'

const routes = [
    {path: '/', component: main},
    {path: '/view', component: view},
    {path: '/about', component: static_about}

];

const router = new VueRouter({routes})

var vm = new Vue({
  el: '#app',
    data: {
        // declare message with an empty value
        message: ''
    },
  router,
  render: h => h(App)
})




