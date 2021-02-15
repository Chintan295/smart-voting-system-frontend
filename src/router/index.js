import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoom from '../views/AdminRoom.vue'
import JoinRoom from '../views/JoinRoom.vue'
import CreateRoom from '../views/CreateRoom.vue'
import RoomCreated from '../views/RoomCreated.vue'
import Team from '../views/Team.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/room',
    name: 'AdminRoom',
    component: AdminRoom
  },
  {
    path: '/create',
    name: 'CreateRoom',
    component: CreateRoom
  },
  {
    path: '/join',
    name: 'JoinRoom',
    component: JoinRoom
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/create/sucess/:id',
    name: 'RoomCreated',
    component: RoomCreated
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
