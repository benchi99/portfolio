<template>
  <div id="app">
    <HeadNavigator />
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNavigator from './components/HeadNavigator.vue'

export default {
  name: 'App',
  components: {
    HeadNavigator,
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
  }

  #logo {
    border-radius: 50%;
  }

  router-view {
    height: 100%
  }
</style>
