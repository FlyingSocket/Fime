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
    this.getUserProfile()
  },
  methods: {
    getUserProfile: function () {
      console.log('get user\'s profile ...')
      var user = firebase.auth().currentUser

      if (user != null) {
        this.email = user.email
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
