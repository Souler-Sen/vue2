// import store from '@/store'
export default [
  {
    path: '',
    name: 'index',
    component: () => import('@/views/home/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {
          path: '/home',
          title: ''
        },
        beforeEnter: (to, from, next) => {
            next()
            // if (!store.state.userToken) {
            //   window.location.href = process.env.VUE_APP_outloginUrl
            // } else {
            //   store.commit('set_header_state', false)
            //   next()
            // }
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error/404'),
        meta: {
          path: '',
          title: ''
        }
      }
    ]
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('@/views/redirect'),
    meta: {
      path: '/redirect',
      title: ''
    }
  }
]
