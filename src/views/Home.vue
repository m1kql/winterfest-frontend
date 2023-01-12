<script lang="ts">
import {IoLogoGithub, IoMoon } from 'oh-vue-icons/icons';
import Navbar from '@/components/Navbar.vue';

export default { components: { IoLogoGithub, IoMoon, Navbar} }
</script>
<template>
  <div class="home">
    <div class="container mx-auto">
      <Navbar/>
      <!-- Main --> 
      <div class="px-4 py-4">
        <h1 class="winterfest-title font-semibold text-8xl">Winterfest 1.x</h1>
        <h2 class="text-end font-bold text-4xl text-[#096cde]">2023</h2>
      </div>
      <!-- Calendar -->

      <!-- Prize -->
      <!-- Participate -->
    </div>
  </div>
</template>
<style scoped>
.winterfest-title {
  
   font-weight: bold;
   font-size: 7em;
   text-transform: uppercase;
   text-shadow:
     -1px -1px 0 #fff, 1px -1px 0 #fff, 1px 1px 0 #fff, 1px 1px 0 #fff, 2px -5px 0px #096cde
}
</style>