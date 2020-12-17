<template>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" role="presentation"><path d="M0 12.5L12.065 0l2.877 2.778L5.555 12.5l9.392 9.725-2.877 2.778z"/><path id="book-number-back-arrow-tail" d="M4.839 14.474v-3.94h25.48v3.94z"/></svg>
		<h1>
			<span class="hidden-label">Notebook</span>
			<span id="book-number">{{ number }}</span>
		</h1>
		<router-link to='/'>See all <br> books</router-link>
	</div>
</template>

<style scoped>
	div
	{
		position: relative;
		width: min-content;
		font-family: var(--font);
	}

	h1
	{
		margin: 0;
	}

	#book-number
	{
		font-size: 64px;
		font-weight: medium;
		letter-spacing: -0.02em;
		min-width: 50px;
		text-align: center;
		display: inline-block;

		line-height: 64px;
	}

	a
	{
		color: var(--color);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		font-size: 12px;
		line-height: 1.3;
		background: rgba(255, 255, 255, 0.9);

		display: block;
		position: absolute;
		box-sizing: border-box;
		text-align: center;

		/* add 20px to the left to cover the back arrow */
		width: calc(100% + 20px);
		left: -20px;
		padding-left: 20px;

		height: 100%;
		top: 0;
		padding-top: 18px;

		opacity: 0;
		transition: opacity 0.15s ease;
	}

	a:hover, a:focus
	{
		text-decoration: none;
		opacity: 1;
	}

	a:focus-visible
	{
		padding: 0;
		padding-top: 18px;
		margin: 0;
		display: block;
		box-shadow: none;
		border-radius: 0px;
		transform: translateX(10px);
	}

	a:focus-visible::after
	{
		content: "";
		display: block;
		position: absolute;
		top: -6px;
		left: calc(50% - 40px);
		margin: 0 auto;
		width: 80px;
		height: 80px;
		box-sizing: border-box;

		border-radius: 100%;
		border: 2px solid var(--color);

		transition: opacity 0.05s ease;
	}

	svg
	{
		width: 30px;
		height: 25px;
		fill: var(--color);
		
		position: absolute;
		top: calc(50% - 14px);
		left: -15px;
		z-index: 99;
		pointer-events: none;

		transition: transform 0.2s ease;
	}

	#book-number-back-arrow-tail
	{
		transform: scaleX(0);
		transition: transform 0.2s ease;
	}

	div:hover > svg, div:focus-within > svg
	{
		transform: translateX(-15px);
	}

	div:hover > svg #book-number-back-arrow-tail, div:focus-within > svg #book-number-back-arrow-tail
	{
		transform: scaleX(0.8);
	}

	@media screen and (max-width: 830px)
	{
		div
		{
			transform: translateX(15px);
		}	
	}
</style>

<script>
	export default
	{
		name: 'book-number',
		props:
		[
			'number'
		]
	}   
</script>
