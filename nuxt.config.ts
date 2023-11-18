import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	build: {
		transpile: ['@google-cloud/storage'],
	},
	runtimeConfig: {
		public: {
			baseUrl: '',
		},
	},
	extends: ['oxecore'],
	modules: ['@kevinmarrec/nuxt-pwa'],
	pwa: {
		manifest: {
			name: 'Dolarcito',
			short_name: 'Dolarcito',
		},
	},
	srcDir: 'src',
	unocss: {
		theme: {
			colors: {
				primary: colors.blue,
			},
		},
	},
})
