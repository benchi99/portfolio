<template>
  <div id="app">
    <HeadNavigator />
    <StartComponent />
    <div id="about">
      <CoolTitleYeah text="About me" />
      <AboutMeContent />
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
import AboutMeContent from './components/AboutMeContent.vue'

export default {
  name: 'App',
  components: {
    HeadNavigator,
    StartComponent,
    CoolTitleYeah,
    AboutMeContent,
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  #logo {
    border-radius: 50%;
  }
</style>
