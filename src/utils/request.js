import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_baseUrl : '/',
  timeout: 100000
})
service.interceptors.request.use(
  config => {
    if (store.state.userToken) {
      config.headers.Authorization = 'Bearer ' + store.state.userToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  },
  error => {
    switch (error.response.status) {
      case 400:
        Message.error(error.config.url + ': ' + error.message);
        break
      case 401:
        Message.error('您当前未登录或登录状态已过期！');
        store.commit('set_token', null)
        window.location.href = process.env.VUE_APP_loginUrl
        break
      case 415:
        Message.error('请求数据格式错误');
        break
      case 500:
        router.push('/500')
        store.commit('set_token', null)
        break
      case 503:
        store.commit('set_token', null)
        break
    }
    return Promise.reject(error)
  }
)

export default service
