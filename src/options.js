import Vue from 'vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import OptionsPage from './components/OptionsPage'
import createStore from './store'
import Document from './components/Document.vue'
import ProjectTablePage from './components/ProjectTablePage.vue'
import BotTablePage from './components/bot/BotTablePage.vue'

Vue.use(VueRouter)
Vue.config.devtools = false
const routes = [
  { path: '/docs', component: Document },
  { path: '/bot', component: BotTablePage },
  { path: '/', component: ProjectTablePage }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

createStore().then((store) => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { OptionsPage },
    template: '<OptionsPage />',
    vuetify
  })
})
