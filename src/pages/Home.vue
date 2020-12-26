<template>
	<nav>
		<site-banner>
			Notebook Archive
		</site-banner>
		<notebook-link
			v-for="number in range" 
			:key=number
			:number=number
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

	const NUMBER_OF_NOTEBOOKS = 5 // figure out a better way to do this

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
		}
	}
</script>