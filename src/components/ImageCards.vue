<template>
  <div class="card-component py-4">
    <div class="border p-8 rounded-xl shadow">
      <div class="flex flex-col">
        <div class="max-h-1/2">
          <img :src="image" class="rounded-xl w-96 object-cover" />
        </div>
        <h1
          class="pt-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
        >
          {{ title }}
        </h1>
        <p class="text-xl py-2 pb-4">{{ description }}</p>
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
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
