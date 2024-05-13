// Composables
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    name: 'Home',
  },
  {
    path: '/about-me',
    component: () => import('@/views/AboutMeView.vue'),
    name: 'AboutMe',
  },
  {
    path: '/game',
    component: () => import('@/views/GameView.vue'),
    name: 'Game',
  },
  {
    path: '/projects',
    component: () => import('@/views/ProjectsView.vue'),
    name: 'Projects',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFoundView.vue'),
    name: 'NotFound',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Or import.meta.env.BASE_URL
  routes,
})

export default router
