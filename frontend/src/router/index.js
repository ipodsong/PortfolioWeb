import Vue from 'vue'
import Router from 'vue-router'
import profile from '@/components/profile'
import stack from '@/components/stack'
import project from '@/components/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/stack',
      name: 'stack',
      component: stack
    },
    {
      path: '/project',
      name: 'project',
      component: project
    },
  ]
})
