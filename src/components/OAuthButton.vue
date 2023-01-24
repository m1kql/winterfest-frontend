<template>
  <button
    class="hover:shadow-lg hover:scale-105 transition-all duration-500 items-center ease-in-out border rounded-lg border-2 px-8 py-2 w-full flex flex-row justify-center items-center"
    :class="$props.border"
  >
    <img class="w-6 h-6 mr-2" :src="$props.logo" alt="logo" />
    <h1 class="text-xl font-semibold" :class="$props.text">{{ $props.title }}</h1>
  </button>
</template>

<style scoped></style>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: "Sign In",
    },
    logo: {
      type: String,
      default: "@/assets/images/apple_logo_black.png",
    },
    border: {
      type: String,
      default: "border-gray-300",
    },
    text: {
      type: String,
      default: "text-gray-900",
    },
  },
};
</script>
