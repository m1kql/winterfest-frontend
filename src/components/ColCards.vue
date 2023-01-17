<template>
  <div class="card-component py-4">
    <div class="border p-8 rounded-xl shadow">
      <div class="flex flex-col">
        <h1
          class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
        >
          {{ title }}
        </h1>
        <p class="lg:text-xl py-2 pb-4">{{ description }}</p>
        <button
          class="rounded-lg p-2 text-white font-bold sm:w-1/4 md:w-1/3 lg:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          v-if="link"
        >
          Read More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped></style>
