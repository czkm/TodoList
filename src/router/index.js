import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import UserApi from '@/components/UserApi'
import EventApi from '@/components/EventApi'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/user',
      name: 'userapi',
      component: UserApi
    },
    {
      path: '/event',
      name: 'eventapi',
      component: EventApi
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
