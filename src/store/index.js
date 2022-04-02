import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aaa: false,
    username: 'youyi'
  },
  mutations: {
    SET_AUTHENTICATED(state, { username, password }) {
      state.aaa = true
    }
  },
  actions,
  modules: {},
  getters
})
