<template>
	<header>
		<router-link to='/'>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 54" aria-label="logo" role="presentation">
				<path fill="#e2e2e2" d="M55 53v-4h-5v4h-1v-4h-5v4h-1v-4h-5v4h-1v-4h-5v4H5a4 4 0 01-4-4V5a4 4 0 014-4h27v5h5V1h1v5h5V1h1v5h5V1h1v5h5V1h1v5h5v1h-5v5h5v1h-5v5h5v1h-5v5h5v1h-5v5h5v1h-5v5h5v1h-5v5h5v1h-5v5h5v1h-5v4zm-5-5h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5v-5h-5zm-6 0h5v-5h-5zm-6 0h5v-5h-5zm-1 0v-5h-5v5zm13-6h5V7h-5zm-6 0h5V7h-5zm-6 0h5V7h-5zm-1 0V7h-5v5z"/>
				<path fill="#000000" d="M32 54H5a5 5 0 01-5-5V5a5 5 0 015-5h52a5 5 0 015 5v44a5 5 0 01-5 5zm25-1a4 4 0 004-4V5a4 4 0 00-4-4H32v52zM1 5v44a4 4 0 004 4h26V1H5a4 4 0 00-4 4z"/>
			</svg>
			<h1>
				<slot></slot>
			</h1>
		</router-link>
	</header>
</template>

<style scoped>
	header
	{
		grid-column: 1 / -1;
		padding: 80px 60px 20px;
	}

	a
	{
		display: grid;
		grid-column: 1fr;
		grid-row: 1fr;
		align-items: center;
		position: relative;

		max-width: 350px;	
		color: inherit;
	}

	a:focus-visible::after
	{
		content: "";
		display: block;
		position: absolute;
		top: -10px;
		left: -10px;
		right: -10px;
		bottom: -10px;

		border: solid 2px #000;
		border-radius: 12px;
	}

	/* remove global focus style */
	a:hover, a:focus
	{
		outline: none;
		box-shadow: none;
		border-radius: 0px;
		text-decoration: none;
		display: grid;
		padding: 0;
		margin: 0;
	}

	a:focus-visible
	{
		outline: none;
		box-shadow: none;
		border-radius: 0px;
		text-decoration: none;
		display: grid;
		padding: 0;
		margin: 0;
	}

	h1
	{
		font-family: var(--font);
		font-size: 16px;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		line-height: 1.3;

		display: inline-block;
		margin: 0 0 0 5rem;

		grid-column: 1;
		grid-row: 1;
	}

	svg
	{
		display: inline-block;
		height: 3.5rem;

		grid-column: 1;
		grid-row: 1;
	}
</style>

<script>
	export default
	{
		name: 'site-banner'
	}
</script>