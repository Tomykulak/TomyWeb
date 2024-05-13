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
      These are my skills that I'm constantly improving = [
      <br>
      <v-container
        class="d-flex flex-column align-start"
      >
        <v-chip
          v-for="skill in skills"
          :key="skill"
          class="my-1"
        >
          {{ "'"+ skill +"'"+"," }}
        </v-chip>
      </v-container>
      ]
    </div>
  </v-container>
</template>

<script setup lang="ts">
  let skills = [
    "Python",
    "C++",
    "Java",
    "Javascript",
    "Typescript",
    "Kotlin",
    "Swift",
    "HTML+CSS",
  ]
</script>

<style scoped>

</style>
