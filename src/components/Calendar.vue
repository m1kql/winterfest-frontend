<script lang="ts">

import { VCalendar, VDatePicker } from ''

export default {
  name: 'Calendar',
  components: {
    VCalendar,
    VDatePicker
  },
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<template>
  <div>
    <v-calendar/>
  </div>
</template>

<style scoped>
</style>