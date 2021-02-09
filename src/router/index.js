import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoom from '../views/AdminRoom.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminRoom',
    component: AdminRoom
  }
]

const router = new VueRouter({
  routes
})
export default router
