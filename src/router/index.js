import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home page',
    component: function () {
      return import('@/pages/homePage.vue')
    }
  } , 
  {
    path: '/experince-tools',
    name: 'experince tools page',
    component: function () {
      return import('@/pages/toolsPage.vue')
    }
  },
  {
    path: '/experince-works',
    name: 'experince works page',
    component: function () {
      return import('@/pages/worksPage.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
