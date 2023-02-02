<template>
  <Navbar />
  <div class="dashboard">
    <h1 class="text-xl">Dashboard</h1>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import { auth } from "@/config/firebaseConfig";
import { store } from "@/store";
import { isSignInWithEmailLink, signInWithEmailLink } from "@firebase/auth";

export default {
  title: "Dashboard",
  created() {
    const url = location.href;
    const email = store.getters["auth/getUserEmail"];
    console.log(url, email);
    if (isSignInWithEmailLink(auth, url)) {
      signInWithEmailLink(auth, email, url).then((result) => {
        console.log(result.user.toJSON);
      });
    } else {
      console.log("Not a sign in link");
    }
  },
  components: { Navbar },
};
</script>

<style scoped></style>
