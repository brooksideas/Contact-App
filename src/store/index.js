import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      email: '',
      firstName: '',
      lastName: '',
    },
    mutations: {
      loggedInValue (state, value) {
        // mutate state
        console.log('mutat =>', value);

        state.email = value.email;
        state.firstName = value.firstName;
        state.lastName = value.lastName;

      }
    },
    actions: {
        loggedInAction ({commit}, {payload}) {
            console.log('Actions =>', payload);
          commit('loggedInValue', payload)
        }
      }
  })

  export default store;