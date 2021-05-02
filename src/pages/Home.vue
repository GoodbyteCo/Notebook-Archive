<template>
	<nav>
		<site-banner>
			Personal Notebook Archive
		</site-banner>
		<notebook-link
			v-for="number in range" 
			:key=number
			:number=number
			v-on:mouseover.native=playSound
		/>
	</nav>
</template>

<style scoped>
	nav
	{
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		max-width: 1200px;
		margin: auto;
	}
</style>

<script>

	import NotebookLink from "../components/NotebookLink.vue"
	import SiteBanner from "../components/SiteBanner.vue"
	import Sounds from "../sound"

	const NUMBER_OF_NOTEBOOKS = 4 // figure out a better way to do this
	const slideSound = Sounds.createNew("/assets/paper-slide.mp3", 0.7, 0.05)

	export default 
	{
		name: "hompage-layout",
		data () 
		{
			return {
				range: NUMBER_OF_NOTEBOOKS
			}
		},
		components: 
		{
			SiteBanner,
			NotebookLink
		},
		methods:
		{
			playSound: function()
			{
				slideSound()
			}
		}
	}
</script>