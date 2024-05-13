<template>
  <!-- Navbar -->
  <v-app-bar
    :elevation="20"
    app
    @click="onNavBarClickColorChange"
    :color="state.navBarColor"
  >
    <!-- Menu Button for small screens -->
    <v-app-bar-nav-icon
      @click="state.drawer = !state.drawer"
      v-if="$vuetify.display.smAndDown"
    >
    </v-app-bar-nav-icon>
    <v-navigation-drawer
      class="my-7 pa-1"
      color="primary"
      v-if="!state.drawer"
      v-model="state.drawer"
      :location="$vuetify.display.smAndDown ? 'bottom' : undefined"
      temporary
    >
      <v-list class="">
        <v-list-item
          class="navButton"
          :class="{ active: $route.path === button.route }"
          v-for="(button, index) in navigationButtons"
          :key="index"
          @click="onMenuItemClicked(button.route)"
        >
          <v-list-item-title>{{ button.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Links for large screens -->
    <v-responsive class="
    d-flex
     align-center
      text-center
       fill-height" v-if="!$vuetify.display.smAndDown">
      <v-row>
        <v-col cols="auto">
          <router-link
            v-for="(button, index) in navigationButtons"
            :key="index"
            :to="button.route"
          >
            <v-btn
              class="navButton mx-2"
              :class="{ active: $route.path === button.route }"
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
import { reactive, ref } from 'vue';
import router from "@/router";



const navigationButtons = [
  { name: "Home", route: '/' },
  { name: "About Me", route: '/about-me' },
  { name: "Projects", route: '/projects' },
  { name: "Game", route: '/game' },
];

const state = reactive({
  navBarColor: "primary",
  drawer: true,
  counter: 0
});

const onNavBarClickColorChange = () => {
  state.counter++;
  state.navBarColor = state.counter % 2 === 0 ? "primary" : "darkPurple3";
};

const onMenuItemClicked = (path) => {
  router.push(path);
  state.drawer = true; // Close the drawer when an item is clicked
};
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
