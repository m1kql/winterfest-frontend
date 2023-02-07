<script lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import { Accordion, AccordionPanel, AccordionHeader, AccordionContent } from 'flowbite-vue'

  export default {
    title: "FAQ",
    components: {
      Navbar,
      Accordion,
      AccordionContent,
      AccordionPanel,
      AccordionHeader
    },
  };
</script>

<template>
  <Navbar/>
  <div class="container mx-auto flex flex-row pb-12 mt-10">
    <h1 class="lg:text-6xl font-bold">
        FAQ
    </h1>
  </div>
  <div class="container mx-auto pb-12">
  <Accordion flush>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            What time will the contest be over?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            You have until February 10th at 11:59 PM to submit your code.  
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            Why can't I submit?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Submissions will be working very soon. Make sure to look out for announcements!
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            Do I need to submit an answer for each problem?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Nope, just do as many problems as you can.
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            When will the winners be announced?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Winners will be announced shortly on our socials/discord after the contest ends. 
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            Where do the problems come from?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            All problems were proposed by the very talented and handsome Simon
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            Any other questions?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Join our Discord and ask!  
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
  </div>
</template>


<style scoped></style>
