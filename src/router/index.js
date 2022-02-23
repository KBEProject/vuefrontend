import { createRouter, createWebHashHistory } from 'vue-router'
import Converter from '../views/Converter.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import LiveData from '../views/LiveData.vue'

const routes = [
  {
    path: '/converter',
    name: 'Converter',
    component: Converter,
    meta: {auth: true}
  },
  {
    path: '/live',
    name: 'Livedata',
    component: LiveData,
    meta: {auth: false}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {auth: false}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {auth: false}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to,from, next) => {
  
  if(to.meta.auth){
    if(!localStorage.getItem("loggedIn")){
      next({name: 'Login'})
    } else {
    next()
    }
  } else{
    next()
  }
  
})
export default router
