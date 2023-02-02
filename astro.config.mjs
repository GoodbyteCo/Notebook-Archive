import { defineConfig } from 'astro/config'
import image from '@astrojs/image'

export default defineConfig({
	base: '/notebooks',
	publicDir: './notebooks',
	trailingSlash: 'always',
	integrations: [ image() ],
	vite: { optimizeDeps: { exclude: [ '@resvg/resvg-js' ]}},
})
