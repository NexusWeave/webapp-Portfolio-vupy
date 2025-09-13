import { createRouter, createWebHistory } from 'vue-router'

import { academicStore } from '@/stores/academicStore.js';
import { portfolioStore } from '@/stores/portfolioStore.js';
import { achievementStore } from '@/stores/achievementsStore.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/personal.vue'),

      beforeEnter: async (to, from, next) => {

        const academic = academicStore();
        await academic.fetchData();

        const achievement = achievementStore();
        await achievement.fetchData();

        const portfolio = portfolioStore();
        await portfolio.fetchData("http://127.0.0.1:5000/api/github");

        console.log(academic.timelineRange, achievement.isLoaded, portfolio.isLoaded);
        !!portfolio.isLoaded ? next() : next();
      }
    },
    {
      path: '/dev',
      name: 'Dev',
      component: () => import('../views/dev.vue'),
      beforeEnter: async (to, from, next) =>
        {

          const academic = academicStore();
          await academic.fetchData();

          const achievement = achievementStore();
          await achievement.fetchData();

          const portfolio = portfolioStore();
          await portfolio.fetchData("http://127.0.0.1:5000/api/github");

          //console.log(academic.timelineRange, achievement.isLoaded, portfolio.isLoaded);
          !!academic.isLoaded && !!achievement.isLoaded ? next() : next();
        }
    },
    
  ]
})

export default router
