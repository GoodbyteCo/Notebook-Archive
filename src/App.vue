<template>
	<router-view id="page" role="main" :key="$route.fullPath" />
</template>

<style>
	@font-face
	{
		font-family: webfont;
		src: url('/assets/f.woff2');
		font-display: swap;
	}

	:root
	{
		--color: hsl(0, 0%, 10%);
		--bg-color: #fff;
		--font: "Futura", webfont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	body
	{
		background: var(--bg-color);
		color: var(--color);
		max-width: 100vw;
		margin: 0;
		padding: 0;
		font-family: Georgia, 'Times New Roman', Times, serif;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		line-height: 1.6;
	}

	.hidden-label
	{
		opacity: 0;
		pointer-events: none;
		display: block;
		position: absolute;
		width: 0px;
		height: 0px;
	}

	.error
	{
		text-align: center;
		padding: 30px 20px 10px;
		margin: 15vh auto;
		max-width: 30ch;
		border: 2px solid var(--color);
	}

	.error h1
	{
		font-size: 2rem;
		line-height: 1.1;
		font-family: var(--font);
		letter-spacing: -0.02em;
		font-weight: medium;
		margin: 0 0 3rem;
	}

	p
	{
		margin: 1.5rem 0;
	}

	a
	{
		color: #1e6cff;
		text-decoration: none;
	}

	a:hover, a:focus
	{
		text-decoration: underline;
	}

	a:focus-visible
	{
		outline: none;
		box-shadow: 0 0 0 2px var(--color);
		border-radius: 100px;
		display: inline-block;
		padding: 0 1ch;
		margin: 0 -1ch;
	}
</style>

<script>
	export default {}
</script>