import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/',
    name: 'products',
    component: () => import('../views/ProductsView.vue'),
    props: true
  },
  {
    path: '/products/:categoria',
    name: 'productscategoria',
    component: () => import('../views/ProductsView.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
