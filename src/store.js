import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    choices: []
  },
  mutations: {
    addChoice (state, choice) {
      state.choices.push(choice)
    },
    removeChoice(state, index) {
      Vue.delete(state.choices, index)
    }
  },
  actions: {
    addChoice({ state, commit }, value) {
      if (!state.choices.includes(value)) {
        commit('addChoice', value)
      }
    },
    removeChoice({ commit }, index) {
      commit('removeChoice', index)
    }
  }
})
