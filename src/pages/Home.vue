<template>
	<div>
		<notebook-link
			v-for="number in range" 
			:key=number
			:number=number
		/>
	</div>
</template>

<style scoped>
	div
	{
		display: grid;
		grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
	}
</style>

<script>

	import NotebookLink from "../components/NotebookLink.vue"

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
			NotebookLink
		}
	}
</script>