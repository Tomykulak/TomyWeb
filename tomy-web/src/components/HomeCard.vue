<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex bg-grey-darken-3 align-center justify-center mx-auto my-auto pa-2">
      <v-row class="mx-auto my-auto">
        <v-col cols="auto" class="">
          <div class="text-h1 text-green-accent-4">
            Tomáš Okruhlica
          </div>
          <v-spacer class="my-5"/>
          <div class="typeWriter text-h3 text-green-accent-3">
            This is my personal web
          </div>
        </v-col>
      </v-row>
      <v-spacer class="my-5"/>
      <v-row class="mx-auto my-auto text-white ">
        <v-col cols="sm-5" class="">
          <div class="text-caption text-green-accent-1">
            Dive into a world where neon lights
            are not just part of the scenery,
            but a beacon calling to those brave
            enough to live out their fantasies in a vast,
            vibrant metropolis. Whether you're a seasoned
            roleplayer or just starting out, Neon City
            is your gateway to an immersive experience
            like no other.
          </div>
        </v-col>
      </v-row>
      <v-spacer class="my-5"/>
      <v-row class="mx-auto my-auto text-white">
        <v-col cols="sm-4" class="">
          <div class="text-caption text-green-accent-1">
            Signing up is easy!
            Click [Join Now] to start your adventure.
            Connect, collaborate, and create lasting friendships.
            Neon City is not just a place to play;
            it's a place to belong.
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>


<script setup lang="ts">

</script>

<style>
.typeWriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #00e676; /* The cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation:
    typing 1.5s steps(60, end) forwards,  /* Typing effect */
    blink-caret 1.25s step-end 3,         /* Blinking effect, 6 cycles */
    fadeOutCursor 0.5s ease-out 2.5s forwards; /* Cursor fade-out after blinking */
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #00e676 }
}

@keyframes fadeOutCursor {
  from { border-right-color: #00e676; }
  to { border-right-color: transparent; }
}
.main_thumbnail {
  background: rgb(0, 0, 0, 0);
  border-radius: 8px;
  border: 2px solid #831ad3;
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
