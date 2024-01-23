import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UznemumsView from '../views/UznemumsView.vue'
import MaterialsView from '../views/MaterialsView.vue'
import MontazaView from '../views/MontazaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/uznemums',
      name: 'uznemums',
      component: UznemumsView
    },
    {
      path: '/materials',
      name: 'materials',
      component: MaterialsView
    },
    {
      path: '/montaza',
      name: 'montaza',
      component: MontazaView
    }
  ]
})

export default router
