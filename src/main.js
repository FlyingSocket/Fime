// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Materials from 'vue-materials'
import * as firebase from 'firebase'

Vue.use(Materials)
Vue.use(VueResource)
Vue.use(VueRouter)

var config = {
  apiKey: 'AIzaSyCUqWNfqsc5klXP41tbq1QJCqbs-v1SoZU',
  authDomain: 'fime-5baf1.firebaseapp.com',
  databaseURL: 'https://fime-5baf1.firebaseio.com',
  storageBucket: 'fime-5baf1.appspot.com',
  messagingSenderId: '623507253997'
}
firebase.initializeApp(config)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: require('./components/pages/Home.vue'),
      name: 'home'
    },
    {
      path: '/authentication',
      component: require('./components/pages/Authentication.vue'),
      name: 'authentication'
    },
    {
      path: '/reset-password',
      component: require('./components/pages/ResetPassword.vue'),
      name: 'reset-password'
    },
    {
      path: '/profile',
      component: require('./components/pages/Profile.vue'),
      name: 'profile'
    },
    {
      path: '/add',
      component: require('./components/pages/Add.vue'),
      name: 'add'
    },
    {
      path: '/settings',
      component: require('./components/pages/Settings.vue'),
      name: 'settings'
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
