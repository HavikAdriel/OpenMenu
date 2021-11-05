import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register')
  },
  {
    path: '/default',
    name: 'default',
    component: () => import('@/views/default')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('@/views/upload')
  },
  {
    path: '/typeFilter',
    name: 'typeFilter',
    component: () => import('@/views/typeFilter')
  },
  {
    path: '/sum',
    name: 'sum',
    component: () => import('@/views/sum')
  },
  {
    path: '/myself',
    name: 'myself',
    component: () => import('@/views/myself')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
