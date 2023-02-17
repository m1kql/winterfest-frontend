<script lang="ts">
import { IoLogoGithub, IoMoon, BiApple, BiDiscord } from "oh-vue-icons/icons";
import Navbar from "@/components/Navbar.vue";
import Terminal from "@/views/Terminal.vue";
import ColCards from "@/components/ColCards.vue";
import ImageCards from "@/components/ImageCards.vue";

export default {
  components: {
    IoLogoGithub,
    IoMoon,
    BiApple,
    BiDiscord,
    Navbar,
    Terminal,
    ColCards,
    ImageCards,
  },
  title: "Home",
};
</script>
<template>
  <div class="home">
    <div class="container mx-auto p-6 lg:p-12 lg:px-24">
      <Navbar />
      <!-- Main -->
      <div class="lg:px-4 py-4">
        <h1 class="winterfest-title font-semibold text-4xl lg:text-8xl md:text-6xl">
          Winterfest 1.x
        </h1>
        <h2 class="text-end font-bold text-2xl lg:text-4xl text-[#096cde]">2023</h2>
      </div>
      <!-- Graphics -->
      <Terminal />
      <!-- Prize -->
      <div class="lg:px-4 py-6">
        <h1 class="winterfest-design text-5xl lg:text-6xl font-bold">
          Up for the challenge?
        </h1>
        <div class="pt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <ColCards class="p-6" title="5 Days" description="5 Submissions per problem." />
          <ColCards
            class="p-6"
            title="$60 in prizes"
            description="First place wins a $20 Steam Gift Card, Second place wins one month of Xbox Ultimate Game Pass, and Third place wins a $10 Timmies gift card."
          />
          <ColCards
            class="p-6"
            title="10 problems"
            description="Problems range from CCC Junior type problems to CCO Problems"
            link="https://dmoj.ca/problemset"
          />
        </div>
        <!-- <h1 class="text-4xl font-bold">Prizes</h1>
        <div class="flex flex-col xl:flex-row pt-6">
          <ImageCards
            class="p-6"
            title="First Place"
            description="Buy your favourite games on Steam."
            image="https://www.thesource.ca/medias/8042411xl-mediaConversion-original-2-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w1NDUwMHxpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGIzLzg4MjQ1ODY4Mjk4NTQuanBnfGU4NzM4MDg4YWFhMmUwZmFiNTQwM2Q4ZDVhMmM3YTUyMDkyY2IzYTk2ZDU3NDU4NzkwYjg0MjQxYmIwNGM0NzA"
          />
          <ImageCards
            class="p-6"
            title="Second Place"
            description="Have 1 month of Xbox Game Pass Ultimate."
            image="https://media.cnn.com/api/v1/images/stellar/prod/201202111436-xbox-game-pass.jpg?q=x_0,y_0,h_900,w_1599,c_fill,g_auto"
          />
          <ImageCards
            class="p-6"
            title="Third Place"
            description="Warm yourself up with a hot beverage from Timmies."
            image="https://company.timhortons.com/ca/images/en/goc-confirm-tim-card.png"
          />
        </div> -->
      </div>
      <div class="py-6">
        <div class="flex flex-row justify-center space-x-4">
          <a href="" target="_blank"
            >Made with love ❤️ by AYJ Coding Club. Want to contribute? Fork us!</a
          >
          <a href="https://github.com/m1iang/winterfest-frontend" target="_blank"
            ><v-icon name="io-logo-github" scale="1.2"></v-icon
          ></a>
          <a href="https://discord.gg/S9cPkxHJZh" target="_blank"
            ><v-icon name="bi-discord" scale="1.2"></v-icon
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.winterfest-title {
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, 1px 1px 0 rgb(203, 185, 185),
    1px 1px 0 #fff, 2px -5px 0px #096cde;
}

.winterfest-design {
  font-weight: bold;
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, 1px 1px 0 #fff, 1px 1px 0 #fff,
    2px -5px 0px #84ffff;
}
</style>
