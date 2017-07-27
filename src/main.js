import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(VueRouter)

// Vue-router configuration for unity
import feedPage from './pages/feed.vue'
import aboutPage from './pages/static_about.vue'

const routes = [
    {path: '/', component: feedPage},
    {path: '/about', component: aboutPage}
]

const router = new VueRouter({
    routes
})

// Start the main interface :)

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
