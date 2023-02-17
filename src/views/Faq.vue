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
            You have until February 20th at 11:59 PM to submit your code.  
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            What languages are supported?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Supported langauges and versions: C++ 11, C++ 14, Java, Java 8, Python, Python 3, C, C#, JavaScript, Go, Kotlin, PHP, Ruby, Rust, Swift, Swift 4.1, and Haskell
          </p>
        </div>
      </accordion-content>
    </accordion-panel>
    <accordion-panel>
      <accordion-header>
        <h1 class="font-semibold text-2xl font-mono flex">
            How do submissions work?
        </h1>
      </accordion-header>
      <accordion-content>
        <div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Write your solution code in any separate IDE, then click "Submit your solution" at the top of the dashboard:
          </p>
          <img style="border: 1px solid black; margin-top: 17px; margin-bottom: 17px;" src="@/assets/images/faq1.png" alt="Submit Solution Button image"/>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Then, drag in or upload your code file, select the langauge you used, and choose the appropriate problem: 
          </p>
          <img style="border:1px solid black; margin-top: 17px; margin-bottom: 17px;" src="@/assets/images/faq2.png" alt="Select problem and language image"/>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            Then, click submit!
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
            Nope, just do as many problems as you can :)
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
            Join our <a style="color: #7289d9" href="https://discord.gg/pVwaTma6g6">discord</a> and ask!  
          </p>
          <img style="opacity:0.08; margin-top: 500px; scale: 1;" src="@/assets/images/hmm.png"/>
        </div>
      </accordion-content>
    </accordion-panel>
  </Accordion>
  </div>
</template>


<style scoped></style>
