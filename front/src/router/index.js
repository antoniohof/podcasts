import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'
// const axios = require('axios')

Vue.use(Router)

const load = component => () => import(`@/${component}`)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('components/home/HomePage'),
      meta: {
        auth: false,
        keepAlive: false,
        top: {
          show: true
        }
      }
    },
    {
      path: '/explore',
      component: load('components/views/Explore'),
      name: 'explore',
      meta: {
        auth: false,
        keepAlive: false,
        top: {
          show: true
        }
      }
    },
    {
      path: '/stories/:id',
      component: load('components/views/Story'),
      name: 'stories',
      meta: {
        auth: false,
        keepAlive: false,
        top: {
          show: true
        }
      }
    },
    {
      path: '*',
      component: load('components/home/HomePage'),
      name: 404,
      redirect: '/',
      meta: {
        auth: false,
        keepAlive: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // route guard
  /*
  if (to.matched.some(record => record.meta.auth) === true && store.getters['auth/isAuthenticated'] === false) {
    next('/')
    return
  }
  */
  next()
})

export default router
