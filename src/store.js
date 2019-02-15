import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editing: false,
    crashes: []
  },
  mutations: {
    createCrash: (state, payload) => {
      state.crashes.push(payload);
    },
    setEditing: (state, payload) => {
        state.editing = payload;
    }
  },
  actions: {
    createCrash: ({commit}, payload) => {
        commit('createCrash', payload)
    },
    setEditing: ({commit}, payload) => {
        commit('setEditing', payload)
    }
  },
})
