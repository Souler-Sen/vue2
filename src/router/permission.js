import router from './index'
// import store from '@/store'
// import { GetUserInfo } from '@/api/home'
// import { Message } from 'element-ui'

router.beforeEach((to, from, next) => {
  // if (to.path === '/redirect') {
  //   store.commit('set_token', localStorage.getItem(process.env.VUE_APP_token))
  //   if (to.query.PageUrl) {
  //     if (to.query.PageUrl2) {
  //       next('/' + to.query.PageUrl + '/' + to.query.PageUrl2)
  //     } else {
  //       next('/' + to.query.PageUrl)
  //     }
  //   } else {
  //     next('/')
  //   }
  // } else if (!store.state.userToken) {
  //   next()
  // } else if (!store.state.info.UserName) {
  //   GetUserInfo().then(res => {
  //     if (res.Status === 1) {
  //       store.commit('user_info', res.Data)
  //       if (to.name) {
  //         next()
  //       } else {
  //         next('/404')
  //       }
  //     } else {
  //       Message(res.Message)
  //       next()
  //       // location.href = process.env.VUE_APP_loginUrl
  //     }
  //   })
  // } else if (to.name) {
  //   next()
  // } else {
  //   next('/404')
  // }
  next()
})
