import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Profile from './views/Profile'
import NewCrash from './views/NewCrash'
import CrashForm from './views/CrashForm'
import Colours from './views/Colours'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/new',
      name: 'new',
      component: NewCrash
    },
    {
      path: '/crashform',
      name: 'crashform',
      component: CrashForm
    },
    {
      path: '/colours',
      name: 'colours',
      component: Colours
    }
  ]
})
