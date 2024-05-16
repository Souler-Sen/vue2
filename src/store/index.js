import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userToken: localStorage.getItem(process.env.VUE_APP_token)
  },
  getters: {

  },
  mutations: {
    // set_token (state, res) {
    //   if (res) {
    //     localStorage.setItem(process.env.VUE_APP_token, res)
    //   } else {
    //     localStorage.removeItem(process.env.VUE_APP_token)
    //   }
    //   state.userToken = res
    // },
    // user_info (state, res) {
    //   state.info = res
    // }
  },
  actions: {

  },
  modules: {

  }
})
