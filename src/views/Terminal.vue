<template>
  <div class="terminal">
    <div class="flex flex-col p-4 mt-12">
      <div class="bg-[#333333] p-6 rounded-2xl">
        <div class="flex flex-col">
          <div class="flex flex-row justify-start space-x-2">
            <button
              @click="toggleClose()"
              class="bg-[#FF605C] hover:px-4 transition-all ease-in-out duration-500 rounded-full w-[16px] h-[16px]"
            ></button>
            <div class="bg-[#FFBD44] rounded-full w-[16px] h-[16px]"></div>
            <button
              @click="toggleOpen()"
              class="bg-[#00CA4E] hover:px-4 transition-all ease-in-out duration-500 rounded-full w-[16px] h-[16px]"
            ></button>
          </div>
          <div class="pt-6 paragraph text-white lg:text-xl" v-show="display">
            <v-icon name="bi-apple" class="mr-4" scale="1.2" /><samp
              >~/<span class="text-[#84ffff]"><strong>home&nbsp;</strong></span
              ><samp
                ><span class="text-[#b4fa72]"
                  >git [..<span class="text-[#fefdc2]">master</span>]&nbsp;</span
                >⎇:</samp
              ></samp
            ><samp class="ml-4 px-2">sudo chmod +x winterfest && ./winterfest</samp>
          </div>
          <div class="pt-6 pb-4 text-sm lg:text-xl text-white" v-show="display">
            <samp>
              <strong class="text-xl lg:text-2xl">
                Welcome to Winterfest 1.x @ AYJ, hosted by the coding club.
              </strong>

              <br />
              Winterfest is a 5-day competitive programming contest open to everyone.
              <br />
              Have some fun, learn some new things, and win some prizes!
              <br />
              <div class="px-6 pt-3 py-2">
                <ul class="list-disc text-lg lg:text-2xl">
                  <li><strong>$60</strong> in prizes 🤩🎉</li>
                  <li>learn algos + ds 🧑‍💻</li>
                  <li>
                    join our
                    <span class="text-[#84ffff] hover:underline"
                      ><strong
                        ><a href="https://discord.com/strongHJZh">discord</a></strong
                      ></span
                    >
                    🚀
                  </li>
                  <li>stress-free, fun and open to everyone! 🌱</li>
                </ul>
              </div>
              <br />
              Remember, you don't have to be a pro to attend. If you ever need any help or
              have any questions, feel free to reach out to us on discord!
              <br />
              <br />
              <strong class="text-[#84ffff]">STARTING on Feb 6 - 10, 2023</strong>
            </samp>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BiApple } from "oh-vue-icons/icons";

export default {
  components: {
    BiApple,
  },
  data: () => ({
    display: true,
  }),
  methods: {
    toggleClose() {
      this.display = false;
    },
    toggleOpen() {
      this.display = true;
    },
  },
};
</script>

<style scoped></style>
