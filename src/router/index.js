import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'     // '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
// import Login from '../components/GameTable'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login }
    // { path: '/gameTable', name: 'GameTable', component: GameTable }
  ]
})
