<template>
  <v-footer
    dark
    padless
    color="primary"
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
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
