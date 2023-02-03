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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
