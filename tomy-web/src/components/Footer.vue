<template>
  <v-footer
    dark
    padless
    color="primary"
    class="d-flex flex-column"
  >
    <v-card
      flat
      tile
      class="text-center"
      color="primary"
    >
      <v-card-text>
        <v-btn
          v-for="(button, index) in buttons"
          :key="index"
          class="mx-4 white--text"
          @click="navigateTo(button.link, !!button.link)"
          color="black"
        >
          <v-icon size="24px">{{ button.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This web is built using Vue, Vuetify and it's written in a TypeScript. <br>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Okruhlica</strong> Personal Web
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup lang="ts">
import { mdiFacebook, mdiGithub } from "@mdi/js";
import { useRouter } from "vue-router"; // Import the router instance

const router = useRouter(); // Create a router instance

// Define the buttons array with icons and links
const buttons = [
  { icon: mdiFacebook, link: 'https://www.facebook.com/tomas.okruhlica.1' },
  { icon: mdiGithub, link: 'https://github.com/Tomykulak?tab=repositories' }
];

// Function to handle navigation
function navigateTo(link: string, isExternal = false) {
  if (isExternal) {
    window.open(link, '_blank'); // Open external links in a new tab
  } else {
    router.push(link); // Navigate to internal routes
  }
}
</script>


<style>
/* Add any custom styles here */
</style>
