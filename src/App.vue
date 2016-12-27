<template>
    <div id="app">
        <navigation v-if="!hideMenu"></navigation>
        <router-view @route-data-loaded="detectRoute"></router-view>
        <!-- <hello></hello> -->
    </div>
</template>

<script>
import Hello from './components/pages/Hello.vue'
import Navigation from './components/navigation/Navigation.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Navigation
  },
  data () {
    return {
      hideMenu: false
    }
  },
  mounted () {
    // console.log(this.$route.path)
    // if (this.$route.path == '/authentication') {
    //   console.log('yes')
    // }
  },
  methods: {
    detectRoute (vm) {
      console.log(this.$route.path)
      console.log('hideMenu :' + vm.hideMenu)
      if (this.$route.path === '/authentication') {
        vm.hideMenu = true
      } else {
        vm.hideMenu = false
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
