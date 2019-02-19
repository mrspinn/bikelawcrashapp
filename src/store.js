import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editing: false,
    crashes: [],
    currentCrash: null,
  },
  getters: {
    getCrashes: (state) => {
      return state.crashes;
    },
    getCurrentCrash: (state) => {
      return state.crashes[state.currentCrash];
    },
    getCrashByID: (state) => (id) => {
      return state.crashes[id];
    },
  },
  mutations: {
    createCrash: (state, payload) => {
      state.crashes.push(
        {
          ownerName: '',
          licensePlate: '',
          vehicleMake: '',
          vehicleModel: '',
          insuranceCompany: '',
          policyNumber: '',
          officerName: '',
          badgeNumber: '',
          phoneNumber: '',
          precinct: '',
          reportNumber: '',
          witnesses: [
            {
              name: '',
              phoneNumber: ''
            }
          ],
          bikeMake: '',
          bikeModel: '',
          bikeDamage: '',
          personalInjuries: '',
          weather: '',
          road: '',
          light: '',
          wind: '',
        }
      ).then(()=>navigator.vibrate(200));
      state.currentCrash = state.crashes.length - 1;
    },
    setEditing: (state, payload) => {
      state.editing = payload;
    },
    updateValue: (state, payload) => {
      state.crashes[state.currentCrash][payload.prop] = payload.value;
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
