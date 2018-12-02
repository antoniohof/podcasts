import Vuex from 'vuex'
import Vue from 'vue'
import modal from './modal'
import alert from './alert'
import auth from './auth'
import globals from './globals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    modal,
    alert,
    globals
  }
})
