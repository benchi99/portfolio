<template>
  <div id="app">
    <HeadNavigator />
    <StartComponent />
    <div id="about">
      <CoolTitleYeah text="About me" />
    </div>
    <div id="projects">
      <CoolTitleYeah text="Projects" />
    </div>
  </div>
</template>

<script>
import HeadNavigator from './components/HeadNavigator.vue'
import StartComponent from './components/StartComponent.vue'
import CoolTitleYeah from './components/CoolTitleYeah.vue'

export default {
  name: 'App',
  components: {
    HeadNavigator,
    StartComponent,
    CoolTitleYeah,
  }
}
</script>

<style>
  #logo {
    border-radius: 50%;
  }
</style>
