<template>
  <div class="home">
    <v-nav nav-class="blue">
     <a href="#!" class="brand-logo" slot="logo">Fime</a>
     <ul class="right">
         <!-- <li>
             <a href="#!"><v-icon>done</v-icon></a>
         </li> -->
         <li>
             <a href="#!"><v-icon>list</v-icon></a>
         </li>
         <li>
             <a v-side-nav:demo="nav"><v-icon>more_vert</v-icon></a>
             <!-- <a href="#!" v-dropdown:v-icon-drop><v-icon>more_vert</v-icon></a> -->
         </li>
     </ul>

    <v-side-nav id="demo">
      <v-material-box src="http://materializecss.com/images/sample-1.jpg"></v-material-box>
        <ul>
            <li v-for="n in 5">
                <a href="#!">Link</a>
            </li>
        </ul>
    </v-side-nav>
 </v-nav>

 <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'de'
    }
  },
  mounted () {
    // var database = firebase.database()
    var user = firebase.auth().currentUser

    if (user) {
  // User is signed in.
    } else {
      console.log('no')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
