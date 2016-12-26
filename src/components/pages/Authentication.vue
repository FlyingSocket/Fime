<template>
    <div class="authentication">
        <h1>Authentication</h1>
        <div class="row">
          <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input v-model="Firstname" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input v-model="Lastname" id="last_name" type="text" class="validate">
              <label for="last_name">Last Name</label>
            </div>
          </div>
        </div>
        <button @click="send" class="btn waves-effect waves-light" name="action">Submit
           <i class="material-icons right">send</i>
        </button>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'authentication',
  data () {
    return {
      Firstname: '',
      Lastname: '',
      errorCode: '',
      errorMessage: ''
    }
  },
  methods: {
    send: function () {
      console.log(this.Firstname + this.Lastname)
      firebase.auth().createUserWithEmailAndPassword(this.Firstname, this.Lastname).catch((error) => {
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
