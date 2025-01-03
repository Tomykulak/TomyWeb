/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          // primary: colors.purple.darken4,
          primary: colors.grey.darken4,
          secondary: colors.green.lighten5,
          greenAccent3: colors.green.accent3,
          darkPurple3: colors.purple.darken3
        },
      },
    },
  },
})
