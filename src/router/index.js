import { createRouter, createWebHistory } from 'vue-router'
import Intro from "../views/Intro.vue"
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import IntroLayout from '../layouts/IntroLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {path: '/', component: Intro, meta: { layout: IntroLayout } },
  {path: '/home', component: Home, meta: { layout: DefaultLayout } },
  {path: '/about', component: About, meta: { layout: DefaultLayout } }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router