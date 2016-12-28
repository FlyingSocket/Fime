<template>
    <div class="profile">
        <h1>Profile</h1>
        <div class="row">
            <p>Your email is {{ email }}</p>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'profile',
  data () {
    return {
      email: ''
    }
  },
  mounted: function () {
    this.isSignedIn()
  },
  methods: {
    isSignedIn: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
          console.log('User is signed in.')
          this.getUserProfile()
        } else {
          console.log(user)
          console.log('No user is signed in.')
        }
      })
    },
    getUserProfile: function () {
      console.log('get user\'s profile ...')
      var user = firebase.auth().currentUser

      if (user != null) {
        this.email = user.email
        console.log(user)
        console.log(this.email)
      } else {
        console.log('No user')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
