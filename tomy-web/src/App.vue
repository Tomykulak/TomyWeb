<template>
  <v-app>
    <v-main class="neo-background-dark">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style>
@import "@/assets/base.css";
@import "animate.css";
.neo-background-dark {
  background-color: black;
  padding: 0;
  margin: 0;
}
</style>
