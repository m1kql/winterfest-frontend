<template>
  <div class="container mx-auto">
    <div class="px-24">
      <section class="">
        <div
          class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0"
        >
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              class="w-24 h-24 mr-2"
              src="@/assets/images/landing-image.png"
              alt="logo"
            />
            <span class="text-3xl font-semibold text-gray-900 dark:text-white"
              >AYJ Coding Club</span
            >
          </a>
          <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div class="p-6 sm:p-8">
              <div class="" action="">
                <div class="flex flex-col space-y-4 pb-4">
                  <OAuthButton
                    title="Sign In With Google"
                    logo="./src/assets/images/google_logo_g.svg"
                    border="border-[#4285f4]"
                    text="text-[#4285f4]"
                    @click="handleSignInWithGoogle"
                  />
                  <!-- <OAuthButton
                    title="Sign In With Apple"
                    logo="./src/assets/images/apple_logo_black.svg"
                    border="border-[#1f1f1f]"
                    text="text-[#1f1f1f]"
                  /> -->
                </div>
                <div class="flex flex-row items-center justify-center space-x-4 py-6">
                  <div class="border-t-2 rounded-lg border-slate-200 w-full"></div>
                  <h1 class="text-slate-500 px-4">OR</h1>
                  <div class="border-t-2 rounded-lg border-slate-200 w-full"></div>
                </div>
                <div class="pb-4">
                  <div class="flex flex-col space-y-2">
                    <label
                      for="email"
                      class="text-sm font-semibold text-gray-500 dark:text-gray-400"
                      >Email</label
                    >
                    <form @submit.prevent="handleSubmit" class="flex flex-row">
                      <input
                        v-model="email"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        class="grow px-4 py-2 text-gray-700 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-gray"
                      />
                      <button type="button" disabled>
                        <v-icon
                          scale="2.5"
                          class="transition-all duration-500 ease-in-out"
                          name="bi-arrow-right-square-fill"
                        ></v-icon>
                      </button>
                    </form>
                  </div>
                </div>
                <div class="rounded-lg bg-slate-200 p-4">
                  <div class="flex space-x-3">
                    <v-icon name="hi-solid-sparkles" class="text-slate-500"></v-icon>
                    <div class="grow">
                      <p>
                        We&apos;ll email you a magic link for a password-free sign in. 😉
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import OAuthButton from "@/components/OAuthButton.vue";
import { HiSolidSparkles, BiArrowRightSquareFill } from "oh-vue-icons/icons";
import { store } from "@/store/index";
import { auth } from "@/config/firebaseConfig";
import { isSignInWithEmailLink, signInWithEmailLink } from "@firebase/auth";

export default {
  data() {
    return {
      email: "",
    };
  },
  created() {
    const url = location.href;
    const email = this.userEmail;
    console.log(url, email);
    if (isSignInWithEmailLink(auth, url)) {
      signInWithEmailLink(auth, email, url);
    }
  },
  title: "Login",
  components: { OAuthButton, HiSolidSparkles, BiArrowRightSquareFill },
  methods: {
    handleSignInWithGoogle() {
      store.dispatch("auth/signInWithGoogle").then(() => {
        console.log("Signed in with Google");
        console.log(store.getters["auth/getUserEmail"]);
        this.$router.push({ name: "Dashboard" });
      });
    },
    handleSubmit() {
      store.dispatch("auth/sendSignInLink", { email: this.email }).then(() => {
        alert("Email sent");
        console.log(store.getters["auth/getUserEmail"]);
      });
    },
  },
  computed: {
    userEmail() {
      return store.getters["auth/getUserEmail"];
    },
  },
};
</script>
