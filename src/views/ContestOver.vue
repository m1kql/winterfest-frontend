<template>
  <div>
    <!--Center the div horizontally and vertically -->
    <div class="flex items-center justify-center h-screen">
      <div class="text-center text-3xl">
      <h1 class="text-6xl font-semibold">
        <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-cyan-400">Winterfest</span>
       Contest is over</h1>
      <h2>Thank you for participating 🤗</h2>
      <h3>Results will be announced soon on our discord!</h3>
      <div class="flex space-x-4 py-6">
        <a href="https://discord.gg/S9cPkxHJZh" target="_blank" rel="noopener noreferrer">
          <button class="flex items-cetner bg-[#7289DA] hover:bg-[#5F73BC] text-white font-bold py-2 px-4 rounded-full">
            <v-icon name="bi-discord" scale="1.6" class="mx-2"/>
            <span>Join our Discord</span>
          </button>
        </a>
        <!-- Github -->
        <a href="https://github.com/m1iang/winterfest-frontend" target="_blank" rel="noopener noreferrer">
          <!-- flex inline items in button icon and text -->
          <button class="flex items-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
            <v-icon name="io-logo-github" scale="1.6" class="mx-2"/>
            <span>View Source</span>
          </button>
        </a>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import {IoLogoGithub, BiDiscord} from "oh-vue-icons/icons"
export default {
  name: "ContestOver",
  title: "Winterfest Contest Over",
  components: {
    IoLogoGithub,
    BiDiscord
  }
}
</script>