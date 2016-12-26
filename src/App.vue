<template>
    <div id="app">
        <navigation></navigation>
        <router-view></router-view>
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
  mounted () {
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
