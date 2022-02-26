import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import Dashboard from '../views/Dashboard.vue'
import HomePage from '../views/landing/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/demo',
    component: DefaultLayout,
    children: [
      {
        path: '/demo',
        name: 'Demo',
        component: Dashboard,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
