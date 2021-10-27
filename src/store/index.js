import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : {
      username: null,
      email: null
    }
  },
  mutations: {
    setUsername(state, username) {
      state.user.username = username
    },
    setEmail(state, email) {
      state.user.email = email
    }
  },
  actions: {
    async createUser(){
      axios.post('http://localhost:4000/api/users', {
        data: {
          user: {
            username: this.state.user.username,
            email: this.state.user.email
          }
        }
      })  
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
