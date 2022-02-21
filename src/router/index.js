import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Members from '../views/Member/Members.vue'
import MemberDetails from '../views/Member/MemberDetails.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  //Member details page
  {
    path: '/members/:id',
    name: 'MemberDetails',
    component: MemberDetails,
    props:true
},
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
