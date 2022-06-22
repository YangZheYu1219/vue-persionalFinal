import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
