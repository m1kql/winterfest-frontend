<template>
  <Navbar />
  <div class="dashboard px-6">
    <div class="container mx-auto py-12">
      <div class="flex flex-row pb-12">
        <div class="profile relative">
          <img :src="userDisplayInfo.photoURL" class="rounded-full parent" alt="" />
          <div class="text-4xl absolute bottom-0 right-0">👋</div>
        </div>
        <div class="flex flex-col pl-12">
          <h1 class="text-5xl font-semibold">
            Hi,
            <span
              class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
            >
              {{ userDisplayInfo.name }}
            </span>
          </h1>
          <p class="text-gray-500">{{ userDisplayInfo.email }}</p>
        </div>
        <div class="problems grow text-right">
          <h1 class="text-8xl font-light font-mono">
            <!-- change to dyanmic -->
            0
          </h1>
          <h1 class="font-mono">Problems Solved</h1>
        </div>
      </div>
      <div class="pt-4 pb-8 flex flex-row align-center">
        <button
          @click="navigateToSubmission"
          class="py-2 px-3 bg-gradient-to-r from-indigo-600 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-indigo-500 transition-all duration-600 ease-in-out scale-100 hover:scale-105 shadow-lg border-2 border-white hover:shadow-xl"
        >
          <h1 class="text-lg font-mono text-white font-semibold">Submit your solution</h1>
        </button>
        <div class="px-7">
          <h1 class="text-2xl font-mono">
            <!-- change to dyanmic -->
            Your points: <span class="text-3xl">0</span> points
          </h1>
        </div>
      </div>
      <h1 class="text-slate-500 pb-4">
        Unsure about how this all works? Check out our
        <a
          class="font-semibold text-cyan-600 shadow-lg hover:shadow-none hover:underline"
          href="/faq"
          >FAQ</a
        >!
      </h1>
      <h1 class="text-4xl font-bold">Problem Set</h1>
      <div class="py-6 flex-col space-y-4">
        <Accordion
          v-for="(problem, index) in problems"
          :key="problem.problemId"
          class="space-y-4"
        >
          <accordion-panel>
            <accordion-header class="bg-[#f3f4f6]">
              <h1 class="font-semibold text-3xl font-mono flex">
                <h1
                  class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400"
                >
                  p-{{ index + 1 }}.
                </h1>
                {{ problem.problemTitle }}
                <div>
                  <Badge type="indigo" class="ml-2 w-fit"
                    ><span class="text-lg">
                      {{ problem.points }}
                      <span v-if="problem.points > 1">points</span>
                      <span v-if="problem.points == 1">point</span>
                    </span></Badge
                  >
                </div>
                <div>
                  <Badge
                    v-if="problem.difficulty === 'easy'"
                    type="green"
                    class="ml-2 w-fit"
                    ><span class="text-lg">easy</span></Badge
                  >
                  <Badge
                    v-if="problem.difficulty === 'medium'"
                    type="yellow"
                    class="ml-2 w-fit"
                    ><span class="text-lg">medium</span></Badge
                  >
                  <Badge
                    v-if="problem.difficulty === 'hard'"
                    type="red"
                    class="ml-2 w-fit"
                    ><span class="text-lg">hard</span></Badge
                  >
                  <Badge
                    v-if="problem.difficulty === 'advanced'"
                    type="pink"
                    class="ml-2 w-fit"
                    ><span class="text-lg">advanced</span></Badge
                  >
                </div>
                <div class="flex flex-row">
                  <Badge v-for="tag in problem.tags" type="purple" class="ml-2 w-fit"
                    ><span class="text-lg">{{ tag }}</span></Badge
                  >
                </div>
              </h1>
              <!-- <div class="flex space-x-2 pt-2" v-for="tag in problem.tags">
                <Badge v-if="tag === 'implementation'" type="green"
                  ><span class="text-lg"></span
                ></Badge>
              </div> -->
            </accordion-header>
            <accordion-content>
              <div>
                <div v-if="problem.problemStatement != ''">
                  <p class="font-serif text-lg" v-html="problem.problemStatement"></p>
                </div>
                <p class="text-lg text-slate-400" v-else>
                  Problem hasn't been released yet... stay tuned 🤫
                </p>
                <div class="pt-6 pb-2" v-if="problem.sampleInput != ''">
                  <samp class="text-xl">Sample Input:</samp>
                  <div class="p-4 border-2 rounded-lg">
                    <samp v-html="problem.sampleInput"></samp>
                  </div>
                </div>
                <div v-else>
                  <p>
                    Oops... looks like we forgot to put in the sample I/O. Please SHOOT US
                    AN ANGRY MESSAGE
                  </p>
                </div>
                <div class="pt-6 pb-2" v-if="problem.sampleOutput != ''">
                  <samp class="text-xl">Sample Output:</samp>
                  <div class="p-4 border-2 rounded-lg">
                    <samp v-html="problem.sampleOutput"></samp>
                  </div>
                </div>
                <div v-else>
                  <p>
                    Oops... looks like we forgot to put in the sample I/O. Please SHOOT US
                    AN ANGRY MESSAGE
                  </p>
                </div>
              </div>
            </accordion-content>
          </accordion-panel>
        </Accordion>
      </div>

      <!-- <div v-for="problem in problems" :key="problem.id">
        {{ problem.problemTitle  }}
        {{ problem.difficulty }}
        <div class="" v-for="tag in problem.tags">
          {{ tag }}
        </div>
        {{ problem.sampleInput }}
        {{ problem.sampleOutput }}
  
      
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { auth } from "@/config/firebaseConfig";
import { store } from "@/store";
import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  signInWithEmailLink,
} from "@firebase/auth";
import { BiChevronDown } from "oh-vue-icons/icons";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionHeader,
  Badge,
} from "flowbite-vue";
import router from "@/router";

export default {
  title: "Dashboard",
  setup() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        store.dispatch("auth/setUser", user);
      } else {
        store.dispatch("auth/setUser", null);
      }
    });
    store.dispatch("problems/fetchProblems");
    /** Do not mind the following code */
    // const url = location.href;
    // const email = store.getters["auth/getUserEmail"];
    // console.log(url, email);
    // if (isSignInWithEmailLink(auth, url)) {
    //   signInWithEmailLink(auth, email, url).then((result) => {
    //     console.log(result.user.toJSON);
    //   });
    // } else {
    //   console.log("Not a sign in link");
    // }
  },
  computed: {
    user() {
      console.log(store.getters["auth/getUser"]);
      return store.getters["auth/getUser"];
    },
    userDisplayInfo() {
      return {
        name: store.getters["auth/getUserName"],
        email: store.getters["auth/getUserEmail"],
        photoURL: store.getters["auth/getUserPhotoUrl"],
      };
    },
    problems() {
      return store.getters["problems/getAllProblems"];
    },
  },
  methods: {
    navigateToSubmission() {
      router.push("/submit");
    },
  },
  components: {
    Navbar,
    Badge,
    Accordion,
    AccordionPanel,
    AccordionHeader,
    AccordionContent,
    BiChevronDown,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
};
</script>

<style scoped></style>
