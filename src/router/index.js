import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EtnaDetailView from '../views/EtnaDetailView.vue'
import TravelView from '../views/TravelView.vue'
import RecensioniView from '../views/RecensioniView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/RecensioniView',
    redirect: '/recensioni',
  },
  {
    path: '/etna',
    name: 'etna-detail',
    component: EtnaDetailView,
  },
  {
    path: '/viaggi',
    name: 'travel-page',
    component: TravelView,
  },
  {
    path: '/recensioni',
    name: 'recensioni',
    component: RecensioniView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
