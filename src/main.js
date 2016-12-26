// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: require('./components/pages/Home.vue'),
      name: 'Home'
    },
    {
      path: '/authentication',
      component: require('./components/pages/Authentication.vue'),
      name: 'Authentication'
    },
    {
      path: '/add',
      component: require('./components/pages/Add.vue'),
      name: 'Add'
    },
    {
      path: '/settings',
      component: require('./components/pages/Settings.vue'),
      name: 'Settings'
    },
    {
      path: '*',
      redirect: '/home'
    }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
