import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import register from '@/components/register'
import login from '@/components/login'
import createKeep from '@/components/createKeep'
import readKeeps from '@/components/readKeeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/createKeep',
      name: 'createKeep',
      component: createKeep
    },
    {
      path: '/readKeeps',
      name: 'readKeeps',
      component: readKeeps
    },
  ]
})
