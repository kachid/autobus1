import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/tasks/:id',
    name: 'task',
    props: true,
    component: () => import('../views/Task.vue')
  },
  {
    path: '/directories',
    name: 'directories',
    component: () => import('../views/Directories.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
