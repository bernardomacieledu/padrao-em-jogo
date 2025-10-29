import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/padrao-app',
      name: 'padrao-app',
      component: () => import('../views/AppView.vue'),
    },
    {
      path: '/end',
      name: 'end',
      component: () => import('../views/EndView.vue'),
    },
  ],
})

export default router
