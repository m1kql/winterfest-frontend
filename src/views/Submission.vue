<template>
  <div class="submissions">
    <Navbar />
    <div class="container mx-auto">
      <div class="px-12 lg:px-48 lg:py-12">
        <h1 class="text-3xl lg:text-4xl font-semibold">Submit your solution</h1>
        <div class="drag-and-drop">
          <div class="py-10">
            <div
              class="p-10 py-24 flex flex-row border-4 border-dashed border border-gray-300 rounded-xl justify-center"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="drop"
            >
              <div class="input">
                <input
                  type="file"
                  name="file"
                  id="fileInput"
                  class="hidden"
                  @change="onFileChange"
                  ref="file"
                  accept=".py,.js,.java,.cpp,.c,.cs,.go,.kts,.php,.rb,.rs,.swift,.hs"
                />
                <label for="fileInput" class="file-label">
                  <div class="font-semibold" v-if="isDragging">
                    Release to drop files here.
                  </div>
                  <div class="font-semibold" v-else>
                    Drop files <span class="text-cyan-600">here</span> or click
                    <span class="text-cyan-600 cursor-pointer">here</span> to upload.
                  </div>
                </label>
              </div>
            </div>

            <div v-if="files.length" class="">
              <div class="py-10">
                <div class="flex flex-row justify-between">
                  <div class="font-semibold">File Name</div>
                  <div class="font-semibold">File Size</div>
                </div>
                <div v-for="file in files" class="flex flex-row justify-between py-2">
                  <div class="text-sky-500">{{ file.name }}</div>
                  <div>{{ file.size }} bytes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="selections">
          <Listbox v-model="getSelectedLang">
            <ListboxLabel class="py-2 block text-sm font-medium text-gray-700">
              Select Language
            </ListboxLabel>
            <ListboxButton
              class="flex flex-row rounded-lg border hover:border-cyan-500 shadow-lg px-12 py-1 focus:outline-none"
            >
              <div class="grow">{{ getSelectedLang.label }}</div>
              <v-icon class="mr-4" name="bi-chevron-down"> </v-icon>
            </ListboxButton>
            <ListboxOptions>
              <ListboxOption
                v-for="option in listBoxOptionsLang"
                :key="option.value"
                v-slot="{ active, selected }"
                :value="option"
                as="template"
              >
                <li
                  :class="[
                    active
                      ? 'text-cyan-600 font-semibold cursor-pointer'
                      : 'text-gray-900',
                    'rounded-lg cursor-default select-none relative py-2 pl-10 pr-4',
                  ]"
                >
                  {{ option.label }}
                </li>
              </ListboxOption>
            </ListboxOptions>
          </Listbox>
          <div class="py-12">
            <Combobox v-model="getSelectedProblem">
              <ComboboxLabel class="py-2 block text-sm font-medium text-gray-700">
                Select Problem
              </ComboboxLabel>
              <div class="">
                <ComboboxInput
                  class="rounded-lg border-1 border-gray-200 shadow-lg"
                  :display-value="(option: any) => option.label"
                  @change="query = $event.target.value"
                />
                <ComboboxButton>
                  <v-icon name="bi-chevron-down" />
                </ComboboxButton>
              </div>
              <TransitionRoot>
                <ComboboxOptions>
                  <div class="" v-if="filteredProblems.length === 0 && query !== ''">
                    Nothing found.
                  </div>
                  <ComboboxOption
                    v-for="option in filteredProblems"
                    :key="option.value"
                    :value="option"
                    v-slot="{ active, selected }"
                    as="template"
                  >
                    <li
                      :class="{
                        'bg-teal-600 text-white': active,
                        'text-gray-900': !active,
                      }"
                    >
                      {{ option.label }}
                    </li>
                  </ComboboxOption>
                </ComboboxOptions>
              </TransitionRoot>
            </Combobox>
          </div>
        </div>
        <div class="flex justify-end">
          <button
            @click="handleSubmit"
            class="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  TransitionRoot,
} from "@headlessui/vue";
import { computed, ref } from "vue";
import { BiCheck, BiChevronDown } from "oh-vue-icons/icons";
import { Alert } from "flowbite-vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import { getStorage, ref as fireRef, uploadBytes } from "@firebase/storage";
import { store } from "@/store";

export default {
  title: "Submit Solution",
  data() {
    return {
      isDragging: false,
      files: [] as File[],
    };
  },
  components: {
    Navbar,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    ListboxLabel,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
    BiChevronDown,
    BiCheck,
    TransitionRoot,
    Alert,
    VueReCaptcha,
  },
  methods: {
    getSelectedLang() {
      return this.getSelectedLang;
    },
    getSelectedProblem() {
      return this.getSelectedProblem;
    },
    handleSuccess() {
      console.log("Success");
    },
    handleSubmit() {
      console.log("disabled");
    },
    // handleSubmit() {
    //   const problemId = this.getSelectedProblem;
    //   const language = this.getSelectedLang;
    //   const id = this.userId;
    //   // check if files has a File or Blob
    //   const file = this.files[0] as File | Blob;
    //   // upload to firebase storage
    //   const storage = getStorage();
    //   const submissionsRef = fireRef(
    //     storage,
    //     `submissions/${problemId.value}/${id}/${language.value}/main.${language.ext}`
    //   );
    //   uploadBytes(submissionsRef, file).then((snapshot) => {
    //     console.log("Uploaded a blob or file!");
    //     console.log(snapshot.metadata.name);
    //     this.$router.push("/dashboard");
    //   });
    // },
    // makeApiCall(sourceCode: string, language: string, problem: string, input: string) {},
    // updateUserFromAPIResponse(response: any) {
    //   console.log(response);
    // },
    dragover(e: any) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave(e: any) {
      e.preventDefault();
      this.isDragging = false;
    },
    drop(e: any) {
      e.preventDefault();
      this.isDragging = false;
      this.files = e.dataTransfer.files;
      this.onFileChange(e);
      this.isDragging = false;
    },
    onFileChange(e: any) {
      this.files = e.target.files;
    },
  },
  computed: {
    userId() {
      const id = store.getters["auth/getUserUid"];
      return id;
    },
  },
  setup() {
    const comboBoxOptionsProblemTitle = [
      { value: "p1", label: "Abandoned Warehouse?" },
      { value: "p2", label: "A Broken Van 🕵️" },
      { value: "p3", label: "⛺️ Camping with CS kids" },
      { value: "p4", label: "A simple Graph Theory problem" },
      { value: "p5", label: "Dr. Burt loves sequences 🧬" },
      { value: "p6", label: "War of AYJ" },
      { value: "p7", label: "Kanowitz's Marble Launcher" },
      { value: "p8", label: "Alexandru's pet tree 🌳" },
    ];
    const listBoxOptionsLang = [
      { value: "CPP11", ext: ".cpp", label: "C++ 11" },
      { value: "CPP14", ext: ".cpp", label: "C++ 14" },
      { value: "JAVA8", ext: ".java", label: "Java 8" },
      { value: "JAVA", ext: ".java", label: "Java" },
      { value: "PYTHON", ext: ".py", label: "Python" },
      { value: "PYTHON3", ext: ".py", label: "Python 3" },
      { value: "C", ext: ".c", label: "C" },
      { value: "CSHARP", ext: ".cs", label: "C#" },
      { value: "JAVASCRIPT_NODE", ext: ".js", label: "JavaScript" },
      { value: "GO", ext: ".go", label: "Go" },
      { value: "KOTLIN", ext: ".kt", label: "Kotlin" },
      { value: "PHP", ext: "php", label: "PHP" },
      { value: "RUBY", ext: ".rb", label: "Ruby" },
      { value: "RUST", ext: ".rs", label: "Rust" },
      { value: "SWIFT", ext: ".swift", label: "Swift" },
      { value: "SWIFT_4_1", ext: ".swift", label: "Swift 4.1" },
      { value: "HASKELL", ext: ".hs", label: "Haskell" },
    ];
    const selectedLang = ref(listBoxOptionsLang[0]);
    const selectedProblem = ref(comboBoxOptionsProblemTitle[0]);
    const query = ref("");
    const filteredProblems = computed(() =>
      query.value === ""
        ? comboBoxOptionsProblemTitle
        : comboBoxOptionsProblemTitle.filter((option) =>
            option.label.toLowerCase().includes(query.value.toLowerCase())
          )
    );
    const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const codeSphereAPIKEY = import.meta.env.VITE_HACKER_EARTH_API_KEY;
    return {
      listBoxOptionsLang: listBoxOptionsLang,
      comboBoxOptionsProblemTitle: comboBoxOptionsProblemTitle,
      getSelectedLang: selectedLang,
      getSelectedProblem: selectedProblem,
      filteredProblems: filteredProblems,
      query: query,
      siteKey: siteKey,
    };
  },
};
</script>
