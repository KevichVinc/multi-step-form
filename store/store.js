import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: { firstName: ' ', email: ' ', currentStep: 1, hasNextStep: true },
  mutations: {
    setFirstname(state, payload) {
      state.firstname = payload.firstname
    },
    setEmail(state, payload) {
      state.email = payload.email
    },
  },
})
