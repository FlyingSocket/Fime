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
export default {
  name: 'navigation',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
