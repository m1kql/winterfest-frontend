<template>
  <Navbar />
  <div class="dashboard">
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
          <h1 class="text-8xl font-light font-mono">0</h1>
          <h1 class="font-mono">Problems Solved</h1>
        </div>
      </div>
      <div class="flex flex-col">
        <h1 class="text-4xl font-bold pb-12">Problem Statements</h1>
        <div class="flex flex-row flex-wrap">
          <div v-for="problem in problems" :key="problem.id" class="p-4 border">
            <h1>{{ problem.problem_title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { auth } from "@/config/firebaseConfig";
import { store } from "@/store";
import { isSignInWithEmailLink, signInWithEmailLink } from "@firebase/auth";

export default {
  title: "Dashboard",
  setup() {
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
  components: { Navbar },
};
</script>

<style scoped></style>
