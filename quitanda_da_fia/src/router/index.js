import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShoppingCart from '../views/ShoppingCart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: ShoppingCart
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
