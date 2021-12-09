import { createRouter, createWebHashHistory } from 'vue-router'
import Converter from '../views/Converter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Converter
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "livedata" */ '../views/LiveData.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
