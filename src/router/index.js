import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_routeBase : '/',
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router