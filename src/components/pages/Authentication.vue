<template>
    <div class="authentication" v-if="account">
        <h1>Sign In</h1>
        <div class="row">
            <p class="red-text text-darken-3">{{ errorMessage }}</p>
          <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input v-model="email" id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
            <div class="input-field col s12">
              <input v-model="password" id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          </form>
        </div>
        <button @click="signIn" class="btn waves-effect waves-light" name="action">Sign In
           <i class="material-icons right">send</i>
        </button>
        <p @click="account = !account">Vous n'avez pas encore de compte ?</p>
    </div>

    <div class="authentication" v-else>
        <h1>Sign Up</h1>
        <div class="row">
            <p class="red-text text-darken-3">{{ errorMessage }}</p>
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="email" id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s12">
                        <input v-model="password" id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
            </form>
        </div>
        <button @click="signUp" class="btn waves-effect waves-light" name="action">Sign Up
            <i class="material-icons right">send</i>
        </button>
        <p @click="account = !account">Vous avez déjà un compte ?</p>
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
      errorMessage: '',
      account: true
    }
  },
  methods: {
    signIn: function () {
      console.log(this.email + this.password)
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
        // ...
      })
      this.isSignedIn()
    },
    signUp: function () {
      console.log(this.email + this.password)
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
        // ...
      })
    },
    isSignedIn: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
          console.log('User is signed in.')
        } else {
          console.log(user)
          console.log('No user is signed in.')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
