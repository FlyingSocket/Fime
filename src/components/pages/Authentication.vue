<template>
    <transition name="fade" appear mode="out-in">
        <div class="authentication" v-if="visible" key="visible">
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
                <router-link class="item" :to="{ name: 'reset-password' }">
                    <p>Forget password ?</p>
                </router-link>
            </div>
            <button @click="signIn" class="btn waves-effect waves-light" name="action">Sign In
                <i class="material-icons right">send</i>
            </button>
            <p @click="toggle">Vous n'avez pas encore de compte ?</p>
        </div>

        <div class="authentication" v-else key="invisible">
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
            <p @click="toggle">Vous avez déjà un compte ?</p>
        </div>
    </transition>
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
      visible: true
    }
  },
  methods: {
    toggle: function () {
      this.visible = !this.visible
    },
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
          this.$router.push({ path: 'profile' })
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s, transform .8s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateX(90%);
    }
</style>
