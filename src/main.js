import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Vuetify from 'vuetify'
import VueMarkdown from 'vue-markdown'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueMarkdown)

// Vue-router configuration for unity
import feedPage from './pages/feed.vue'
import aboutPage from './pages/static_about.vue'
import viewPage from './pages/view.vue'
import createPage from './pages/create_page.vue'

const routes = [
    {path: '/', component: feedPage},
    {path: '/about', component: aboutPage},
    {path: '/view', component: viewPage},
    {path: '/create_page', component: createPage}
]

const router = new VueRouter({
    routes
})

// Start the main interface :)

new Vue({
    components: {
        VueMarkdown
    },
    el: '#app',
        router,
    render: h => h(App)
})
