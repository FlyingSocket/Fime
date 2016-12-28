<template>
    <div class="navigation">
      <v-nav nav-class="blue">
       <a href="#!" class="brand-logo" slot="logo">Fime</a>
       <ul class="right">
           <li>
               <a href="#!"><v-icon>list</v-icon></a>
           </li>
           <li>
               <a v-side-nav:demo="nav"><v-icon>more_vert</v-icon></a>
           </li>
           <li>

               <a @click="signOut" href="authentication">
                   <v-icon>power_settings_new</v-icon>
               </a>
           </li>
       </ul>

      <v-side-nav id="demo">
        <v-material-box src="http://materializecss.com/images/sample-1.jpg"></v-material-box>
          <ul>
              <li>
                  <router-link class="item" :to="{ name: 'Home' }">
                      <p> Home </p>
                  </router-link>
              </li>
              <li>
                  <router-link class="item" :to="{ name: 'Add' }">
                      <p> Add </p>
                  </router-link>
              </li>
              <li>
                  <router-link class="item" :to="{ name: 'Authentication' }">
                      <p> Authentication </p>
                  </router-link>
              </li>
              <li>
                  <router-link class="item" :to="{ name: 'Settings' }">
                      <p> Settings </p>
                  </router-link>
              </li>
          </ul>
      </v-side-nav>
      </v-nav>
    </div>
</template>

<script>
import * as firebase from 'firebase'
export default {
  name: 'navigation',
  data () {
    return {
      nav: {
        closeOnClick: true
      },
      errorCode: '',
      errorMessage: ''
    }
  },
  mounted () {
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        console.log('Sign-out successful.')
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
  .router-link-active {
      background-color: rgba(0, 0, 0, 0.05);
  }
</style>
