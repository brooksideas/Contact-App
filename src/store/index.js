import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
      email: 'someone@gmail.com',
      firstName: 'First Name',
      lastName: 'Last Name',
      jobTitle: 'Job Title',
      bio: 'Biography',
    },
    getters:{ 
      initialValues: (state) => { 
        console.log('initialValues', state);

       if(state.email == ''){ 
           var email = 'someone@gmail.com'
          return store.dispatch('setInitialValue', email)
       }
      }
    },
    mutations: {
      mutateInitialValue (state, value) {
        console.log('mutat', value);
        state.email = value;
      },
      mutateEmailValue(state, value){
        console.log('EMAL MUTAY =>', value);
        state.email = value;
      },
      mutateFirstNameValue(state, value){
        console.log('First MUTAY =>', value);
        state.firstName = value;
      },
      mutateLastNameValue(state, value){ 
        state.lastName = value;
      },
      mutateJobValue(state, value){ 
        state.jobTitle = value;
      },
      mutateBioValue(state, value){ 
        state.bio = value;
      },
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
        },
        setInitialValue ({commit}, value) { 
          commit('mutateInitialValue', value)
        },
        changeEmailAddress({commit} , value) {
        console.log('Change Action', value);
        if(value === ''){
        return  commit('mutateInitialValue', 'someone@gmail.com')
        }
          commit('mutateEmailValue', value)
        },
        changeFirstName({commit}, value){
          return commit('mutateFirstNameValue', value);
        },
        changeLastName({commit}, value){
          return commit('mutateLastNameValue', value);
        },
        changeJobTitle({commit} , value) { 
            commit('mutateJobValue', value)
          },

        changeBio({commit} , value) { 
            commit('mutateBioValue', value)
          }
      }
  }) 

  export default store;