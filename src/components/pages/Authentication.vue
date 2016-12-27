<template>
    <div class="authentication">
        <h1>Authentication</h1>
        <div class="row">
            <p>{{ errorMessage }}</p>
          <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input v-model="email" id="email" type="text" class="validate">
              <label for="email">Email</label>
            </div>
            <div class="input-field col s6">
              <input v-model="password" id="password" type="text" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          </form>
        </div>
        <button @click="send" class="btn waves-effect waves-light" name="action">Submit
           <i class="material-icons right">send</i>
        </button>
    </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'authentication',
  data () {
    return {
      email: '',
      password: '',
      errorCode: '',
      errorMessage: ''
    }
  },
  methods: {
    send: function () {
      console.log(this.email + this.password)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
        // ...
      })
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log('User is signed in.')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
