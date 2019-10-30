import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        name: '首页'
      },
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/MainHome/Index.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('@/views/Archive/Index.vue')
    },
    {
      path: '/inspiration',
      name: 'inspiration',
      component: () => import('@/views/Inspiration/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/Index.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/Category/Index.vue')
    },
    {
      path: '/tags',
      name: 'tags',
      component: () => import('@/views/Tags/Index.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog',
      component: () => import('@/views/BlogDetail/Index.vue')
    }
  ]
})
