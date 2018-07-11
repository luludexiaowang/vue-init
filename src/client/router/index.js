/* eslint-disable no-mixed-operators */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home/index' },
    { path: '/home', redirect: '/home/index' },
    ...routes
  ]
})
export default router
