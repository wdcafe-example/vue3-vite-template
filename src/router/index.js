import { createRouter, createWebHistory } from 'vue-router'
import Intro from "../views/Intro.vue"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/Products.vue'
import IntroLayout from '../layouts/IntroLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import ProductsLayout from '../layouts/ProductsLayout.vue'

const routes = [
  {path: '/', component: Intro, meta: { layout: IntroLayout } },
  {path: '/home', component: Home },
  {path: '/about', component: About }, 
  {path: '/products', component: Products, meta: { layout: ProductsLayout } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router