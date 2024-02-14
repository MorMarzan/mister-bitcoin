import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Signup from '../cmps/Signup.vue'

const options = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/signup',
          name: 'Signup',
          component: Signup
        }
      ]
    },
    {
      path: '/contact',
      name: 'ContactIndex',
      component: ContactIndex,
    },
    {
      path: '/contact/:contactId',
      name: 'ContactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:contactId?',
      name: 'ContactEdit',
      component: ContactEdit
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: () => import('../pages/Statistics.vue')
    }
  ]
}
const router = createRouter(options)

export default router
