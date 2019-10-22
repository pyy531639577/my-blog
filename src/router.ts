import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Archive from './views/Archive/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    }
  ]
})
