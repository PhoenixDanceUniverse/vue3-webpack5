import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../src/home/index'
// import About from '../src/About/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../src/About/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router