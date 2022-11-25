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
  },
  {
    path: '/MembersTalk',
    name: 'MembersTalk',
    component: () => import('../views/MembersTalk.vue')
  },
  {
    path: '/ArrangeTasks',
    name: 'ArrangeTasks',
    component: () => import('../views/ArrangeTasks.vue')
  },
  {
    path: '/LearnProcess',
    name: 'LearnProcess',
    component: () => import('../views/LearnProcess.vue')
  },
  {
    path: '/TestProcess',
    name: 'TestProcess',
    component: () => import('../views/TestProcess.vue')
  },
  {
    path: '/TheFeedback',
    name: 'TheFeedback',
    component: () => import('../views/TheFeedback.vue')
  },
  {
    path: '/FinishAll',
    name: 'FinishAll',
    component: () => import('../views/FinishAll.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
