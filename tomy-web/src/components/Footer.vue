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
        This web was done using Vue, Vuetify and written in TypeScript. <br>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Tomy Personal Web</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script setup>
import {
  mdiFacebook,
  mdiGithub
} from "@mdi/js";
// https://pictogrammers.com/library/mdi/

const buttons = [
  { icon: mdiFacebook, link: 'https://www.facebook.com/tomas.okruhlica.1' },
  { icon: mdiGithub, link: 'https://github.com/Tomykulak?tab=repositories' }
];

function navigateTo(link, isExternal = false) {
  if (isExternal) {
    window.open(link, '_blank');
  } else {
    router.push(link);
  }
}

</script>

<style>
/* Add any custom styles here */
</style>
