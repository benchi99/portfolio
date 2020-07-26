<template>
  <nav id="navigator" class="nav-extended">
    <div id="navbarlol" class="nav-content green">
      <ul class="tabs tabs-transparent">
        <li class="tab">
          <router-link to="/" id="startLink" exact>Start</router-link>
        </li>
        <li class="tab">
          <router-link to="/about" id="aboutLink">About</router-link>
        </li>
        <li class="tab">
          <router-link to="/projects" id="projectsLink">Projects</router-link>
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
    nav {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1;
    }

    ul.tabs.tabs-transparent {
      display: flex;
      justify-content: center;
    }
</style>