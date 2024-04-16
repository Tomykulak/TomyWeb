<template>
  <v-container class="fill-height">
    <v-responsive v-if="showCmdWindow" class="cmd-window
    d-flex
     bg-primary
      align-center
       justify-center
       mx-auto my-auto
        pa-2"
    >
      <div class="cmd-top-bar">
        <span class="cmd-tab active">Tab 1 - Command Prompt</span>
        <div class="window-controls">
          <div class="control minimize"></div>
          <div class="control maximize"></div>
          <div class="control close">
            <v-img :src="Cross" @click="onExitCmdClick"></v-img>
          </div>
        </div>
      </div>
      <v-row class="mx-auto my-auto">
        <v-col cols="auto" class="">
          <div class="typeWriter typeFirst
            text-h1
             text-green-accent-4">
            Tomáš Okruhlica
          </div>
          <v-spacer class="my-5"/>
          <div class="typeWriter typeSecond text-h3 text-green-accent-3">
            This is my personal web
          </div>
        </v-col>
      </v-row>
      <v-spacer class="my-5"/>
      <v-row class="mx-auto my-auto text-white">
        <v-col cols="sm-4" class="">
          <div class="text-caption text-green-accent-2">
            Get to know me? [<strong>k</strong>]
            <br>
            Wanna play a game? [<strong>y</strong>]/[<strong>n</strong>]
            <v-text-field
              variant="underlined"
              v-model="cmdText"
              @keyup.enter="gameStart"
            ><div class="text-green-accent-1">C:\Users\UNKNOWN_ENTITY></div>
            </v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
    <v-responsive v-else>
      <v-btn @click="onStartCmdClick">
        Start CommandLine
      </v-btn>
    </v-responsive>
  </v-container>
</template>


<script setup lang="ts">
import Cross from '@/assets/cross.png';
import {ref} from "vue";
import router from "@/router";

const cmdText = ref("");

const gameStart = () => {
  switch(cmdText.value){
    case "k":
      router.push("/about-me");
      break;
    case "y":
      router.push("/game");
      break;
    case "n":
      cmdText.value = "Think twice..."
      break;
    default:
      cmdText.value = "TRY AGAIN!!!";
      break;
  }
}

const showCmdWindow = ref(true);

const onExitCmdClick = () => {
  showCmdWindow.value = false;
}
const onStartCmdClick = () => {
  showCmdWindow.value = true;
}

</script>

<style>

.typeWriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-space: nowrap; /* Keeps the content on a single line */
}

.typeFirst, .typeSecond {
  border-right: .15em solid transparent; /* Initially hides the cursor */
  width: 0;
}

.typeFirst {
  animation: typing 1.5s steps(30, end) forwards,
  blink-caret 1s step-end 3 1.5s forwards,
  fadeOutCursor 0.5s ease-out 3s forwards;
}

.typeSecond {
  animation: typing 1.5s steps(30, end) forwards 3.25s, /* Delays typing until the first text completes all animations */ blink-caret 1.25s step-end 3 6s forwards, /* Start blinking after typing starts */ fadeOutCursor 0.5s ease-out 11s forwards; /* Fade cursor out after all blinks */
}

@keyframes typing {
  from {
    width: 0
  }
  to {
    width: 100%
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent
  }
  50% {
    border-color: var(--green-accent-3);
  }
}

@keyframes fadeOutCursor {
  from {
    border-right-color: var(--green-accent-3);
  }
  to {
    border-right-color: transparent;
  }
}

.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cmd-window {
  border: 2px solid #333;
}

.cmd-top-bar {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}

.cmd-tab {
  padding: 2px 6px;
  border-bottom-right-radius: 6px;
}

.cmd-tab.active {
  background-color: #212121;
  border: 2px solid #424242;
  color: #00C853;
}

.window-controls {
  display: flex;
}

.control {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 5px;
}

.control.close {
  filter: invert(100%);
}

</style>
