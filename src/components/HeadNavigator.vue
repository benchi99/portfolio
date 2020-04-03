<template>
  <nav id="navigator" class="nav-extended">
    <div id="navbarlol" class="nav-content teal">
      <ul class="tabs tabs-transparent">
        <li class="tab">
          <a href="#start" id="startLink">Start</a>
        </li>
        <li class="tab">
          <a href="#about" id="aboutLink">About</a>
        </li>
        <li class="tab">
          <a href="#projects" id="projectsLink">Projects</a>
        </li>
        <li class="tab">
          <a href id="cv">CV</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeadNavigator"
};
</script>

<style scoped>
    #navbarlol {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
    }
</style>