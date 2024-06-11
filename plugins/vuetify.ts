
import '@mdi/font/css/materialdesignicons.css'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases, fa } from "vuetify/iconsets/fa";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxt) => {
    const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			
		},
		icons: {
			defaultSet: "fa",
			aliases,
			sets: {
				fa,
				mdi,
			},
		},
	});
  nuxt.vueApp.use(vuetify);
})
