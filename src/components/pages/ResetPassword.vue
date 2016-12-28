<template>
    <div class="reset-password">
        <h1>Reset Password</h1>
        <div class="row">
            <p class="red-text text-darken-3">{{ errorMessage }}</p>
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="email" id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
            </form>
        </div>
        <button @click="resetPassword" class="btn waves-effect waves-light" name="action">Reset password
            <i class="material-icons right">send</i>
        </button>
    </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'reset-password',
  data () {
    return {
      email: '',
      errorCode: '',
      errorMessage: ''
    }
  },
  methods: {
    resetPassword: function () {
      firebase.auth().sendPasswordResetEmail(this.email).then(() => {
        console.log('Email sent.')
      }, (error) => {
        console.log('An error happened.')
        // Handle Errors here.
        this.errorCode = error.code
        this.errorMessage = error.message
        // ...
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>