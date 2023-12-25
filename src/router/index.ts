import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Login,

  },
  {
    path: '/list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Manager.vue')
  },
  {
    path: '/detail',
    component: () => import('../views/Detail.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router