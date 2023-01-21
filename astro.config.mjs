import { defineConfig } from 'astro/config'

export default defineConfig({
	base: '/notebooks',
	publicDir: './notebooks',
	trailingSlash: 'always',
	vite: { optimizeDeps: { exclude: '@resvg/resvg-js' }},
})
