<template>
  <v-container class="fill-height">
    <div
      class="text-green-accent-3"
    >
      <div
        class="text-h2"
      >Hey, my name's <span class="text-purple-accent-4">Tomáš Okruhlica.</span>
      </div><br>

      <div class="text-h5">I'm a <span class="text-uppercase text-purple-accent-4">software developer.</span></div><br>
      I love being <v-chip class="bg-black text-purple-accent-2">creative</v-chip> and always strive to
      <v-chip class="bg-black text-purple-accent-2">learn</v-chip> new skills.<br>
      This is my expertise that I'm constantly improving = [
      <br>
      <v-container
        class="d-flex flex-column align-start"
      >
        <v-chip
          v-for="skill in skills"
          :key="skill"
          class="my-1"
        >
          {{ "'" + skill + "'" + "," }}
        </v-chip>
      </v-container>
      ]
      <div class="py-4">
        Take a look at my
        <router-link to="/projects">
          <v-btn
            :class="['animate__animated', isShaking ? 'animate__pulse' : '']"
            class="bg-black text-purple-accent-2"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
            color=""
          >Projects
          </v-btn>
        </router-link>

      </div>
    </div>
  </v-container>

</template>

<script setup lang="ts">
  import {ref} from "vue";

  let skills = ref([
    "Python",
    "C++",
    "Java",
    "Javascript",
    "Typescript",
    "Kotlin",
    "Swift",
    "HTML+CSS",
  ])
  let isShaking = ref(false);
  let handleMouseOver = () => {
    isShaking.value = true;
  }

  let handleMouseLeave = () => {
    isShaking.value = false;
  }
</script>

<style scoped>

</style>
