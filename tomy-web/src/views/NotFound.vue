<template>
  <v-container class="d-flex align-content-center fill-height">
    <v-responsive class="
      d-flex
      bg-primary
      bg-red
      align-center
      justify-center
      mx-auto my-auto
      pa-2">
      <v-row class="mx-auto my-auto errorWindow">
          <v-col cols="auto" class="" :color="GreenAccent3">
            <div class="text-h2">404 Not Found</div>
            The page you are looking for does not exist.
            <br>
            <v-spacer class="pa-5"/>
            <router-link to="/">
              <v-btn
                class="errorWindow mx-2"
                variant="outlined"
              >
                Home
              </v-btn>
            </router-link>
          </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import GreenAccent3 from '@/plugins/vuetify'
</script>

<style scoped>
.errorWindow{
  color: #00E676;
}
</style>
