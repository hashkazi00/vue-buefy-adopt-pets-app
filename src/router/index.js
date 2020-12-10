import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pet from '../views/Pet.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // path: '/pet',
    path: '/pets/:species/:id', // We pluralised it for the reason that we'll be looking for specific pet from all the pets and also the /:id url parameter cane be accesed through our route in our respective component.
    name: 'Pet',
    component: Pet
  },
  {
    path: '/cats',
    name: 'Cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
