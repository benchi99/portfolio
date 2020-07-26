import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import StartComponent from "./components/StartComponent"
import AboutMeComponent from "./components/AboutMeComponent"
import './../node_modules/materialize-css/dist/css/materialize.min.css'
import './../node_modules/materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: "/", component: StartComponent },
    { path: "/about", component: AboutMeComponent }
  ]
});

new Vue({
  router,
  ...App
}).$mount('#app')
