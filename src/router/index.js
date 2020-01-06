import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home')
const Tasks = () => import ('@/views/Tasks')
const Task = () => import ('@/views/Task')
const Directories = () => import ('@/views/Directories')

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
    component: Tasks
  },
  {
    path: '/task/:id',
    name: 'task',
    props: true,
    component: Task
  },
  {
    path: '/directories',
    name: 'directories',
    component: Directories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
