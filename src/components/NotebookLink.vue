<template>
	<router-link :to="{ path:'/book/' + number }" :aria-labelledby="'notebook-title-' + number">
		<title :id="'notebook-title-' + number">Notebook {{ number }}</title>
		<img :src="'/file/' + number + '/0.png'" alt="Front cover" draggable="false">
		<p role="presentation"><span class="superscript">No.</span>{{ number }}</p>
	</router-link>
</template>

<style scoped>
	a
	{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		text-decoration: none;

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		justify-items: center;
		align-items: center;

		transition: background-color 0.05s ease;
	}

	a:hover, a:focus-visible
	{
		background: #eee;
		transition: background-color 0.15s ease;
	}

	/* remove global focus style */
	a:focus-visible
	{
		outline: none;
		box-shadow: none;
		border-radius: 0px;
		display: grid;
		padding: 0;
		margin: 0;
	}

	img
	{
		max-width: 100%;
		max-height: 60%;
		position: relative;
		z-index: 99;

		grid-column: 1;
		grid-row: 1;

		filter: drop-shadow(0 2px 3px rgba(0,0,0,0.15)) drop-shadow(0 4px 2px rgba(0,0,0,0.3));
		transition: transform 0.3s ease;
	}

	a:hover img, a:focus-visible img
	{
		transform: translateY(-10%);
	}

	p
	{
		font-size: 4rem;
		color: #000;
		font-style: italic;

		margin-top: 70%;
		position: relative;
		grid-column: 1;
		grid-row: 1;

		transition: transform 0.3s ease;
	}

	a:hover p, a:focus-visible p
	{
		transform: translateY(50%);
	}

	.superscript
	{
		text-transform: lowercase;
		font-size: 1.3rem;

		display: inline-block;
		transform: translateY(-1rem);
	}
</style>

<script>
	export default
	{
		name: 'notebook-link',
		props:
		[
			'number'
		]
	}   
</script>
