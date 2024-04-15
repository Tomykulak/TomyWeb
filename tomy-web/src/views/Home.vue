<template>
  <div class="fill-height neo-background">
    <NavBar/>
    <HomePage/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import HomePage from "@/components/HomePage.vue";
import Footer from "@/components/Footer.vue"
</script>

<style scoped>
.neo-background {
  background-image: url("@/assets/digital_rain.gif");
  background-repeat: repeat;
  padding: 0;
  margin: 0;
  animation: fadeInGif 5s ease forwards;
  position: relative;
}

.neo-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  animation: hideOverlay 5s ease forwards;
}

@keyframes fadeInGif {

}

@keyframes hideOverlay {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
