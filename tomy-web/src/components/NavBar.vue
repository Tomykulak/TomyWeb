<template>
  <!-- Navbar -->
  <v-app-bar
    :elevation="20"
    app
    @click="onNavBarClickColorChange"
    :color="state.navBarColor
">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class=" ">
        <v-col cols="auto">

          <router-link
            v-for="(button, index) in navigationButtons"
            :key="index"
            :to=button.route
            v-slot="{ isActive }"
          >
            <v-btn
              class="navButton mx-2"
              :class="{ active: isActive}"
              variant="outlined"
            >
              {{ button.name }}
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-responsive>
  </v-app-bar>
</template>

<script lang="ts" setup>
import Logo from '@/assets/logo.png';
import router from "@/router";
import {reactive} from "vue";

// List names and links for navBar
const navigationButtons = [
  { name: "Home", route: '/' },
  { name: "About Me", route: '/about-me' },
  { name: "Projects", route: '/projects' },
  { name: "Game", route: '/game' },

  // TODO finish buttons
  /*
  { name: "Game", route: '/game' }
   */
];


const state = reactive({
  navBarColor: "primary",
  counter: 0
});

const onMenuClick = () => {
      console.log('Menu button clicked');
      router.push("/");
    }
const onNavBarClickColorChange = () => {
  state.counter++;
  if (state.counter % 2 == 0) {
    state.navBarColor = "primary"
  } else {
    state.navBarColor = "darkPurple3"
  }
}
</script>


<style scoped>
.navButton {
  color: var(--green-accent-3);
}
.navButton.active {
  color: black;
  background: var(--green-accent-3);
}

.brandLogo {
  margin-bottom: 30px;
}
</style>
