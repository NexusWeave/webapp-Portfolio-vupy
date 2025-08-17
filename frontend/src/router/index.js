import { createRouter, createWebHistory } from 'vue-router'

import { academicStore } from '@/stores/academicStore.js';
import { achivementStore } from '@/stores/achivementsStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),

      beforeEnter: async (to, from, next) => {

        const academic = academicStore();
        await academic.fetchData();

        const achivement = achivementStore();
        await achivement.fetchData();
        
        !!academic.timelines && achivement.isLoaded ? next() : next();

      }
    },
    {
      name: 'About',
      path: '/about',
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
