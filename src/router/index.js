import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/AcceptChallenge',
    name: 'AcceptChallenge',
    component: () => import('../views/AcceptChallenge.vue')
  },
  {
    path: '/SortWork',
    name: 'SortWork',
    component: () => import('../views/SortWork.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
