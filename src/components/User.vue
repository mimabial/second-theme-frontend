<template>
  <div class="user">
    <h1>User view</h1>
    <div class="input-row">
        <label for="username">Username</label>
        <input type="text" :value="$store.state.user.username" @input="setUsername($event.target.value)">
    </div>
    <div class="input-row">
        <label for="email">Email</label>
        <input type="text" :value="$store.state.user.email" @input="setEmail($event.target.value)">
      </div>
    <button @click="createUser()">sign in</button>
  </div>

</template>

<script>
import store from '../store/index'

export default {
    store: store,

    created(){
        
    },
    methods: {
        setUsername(username){
            store.commit('setUsername', username)
        },
        setEmail(email){
            store.commit('setEmail', email)
        },
        createUser(){
            store.dispatch('createUser')
        }
    },
    computed: {
        store(){
            return this.$store.state
        }
    }
}
</script>

<style>
.user {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.input-row {
    display: flex;
    flex-direction: column;
    height: 50px;
    width: 200px;
}

button {
    margin: 10px;
}
label {
    margin: 5px
}
</style>