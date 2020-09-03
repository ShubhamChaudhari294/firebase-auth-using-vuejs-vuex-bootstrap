import * as firebase from 'firebase';
import Vuex from 'vuex';
import router from "../router";
export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    signOut(state, payload) {
      state.user = payload
    }
  },
  actions: {
    register({commit}, payload: any)  {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
             .then((response: any) => {
                 alert('User added successfully')
                 commit('setUser', response.user.uid)
                 router.replace('home');
             })
             .catch((error: any) => {
                 alert(error.message)
             })
    },
    signIn({commit}, payload: any)  {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
               .then((response: any) => {
                alert('User logged in successfully')
                commit('setUser', response.user.uid)
                router.replace('home');
               })
               .catch(err => {
                 alert(err.message)
               });
  },
  signOut() {
      firebase.auth().signOut().then(() => {
        this.commit('signOut', null)
        router.replace('login');
      });
 }

},
  getters: {
    getUser(state) {
       return state.user
    }
  }
});
