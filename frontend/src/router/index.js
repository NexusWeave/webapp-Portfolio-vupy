import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dev',
      name: 'DevProfile',
      //component: () => import('../views/AboutView.vue')
    },
    
  ]
})

export default router
