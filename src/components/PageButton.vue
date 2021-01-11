<template>
	<button 
		v-on:click=onclick()
		:aria-label="'Go to ' + dir + 'page'"
		:class="'btn-' + dir">
		<svg xmlns="http://www.w3.org/2000/svg" width="172" height="54">
			<path :class="'arrow-' + dir" d="M172 27L146 0l-3 3 21 22H0v4h164l-21 22 3 3z"/>
		</svg>
	</button>
</template>

<style scoped>
	button
	{
		outline: none;
		border: none;
		border-radius: 0px;
		display: block;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		user-select: none;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		text-align: right;

		width: 40%;
		background: transparent;
	}

	button.btn-previous
	{
		right: auto;
		left: 0;
	}

	svg
	{
		width: 172px;
		height: 54px;
		display: block;
		float: right;
		filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 0.5));

		opacity: 0;
		transition: opacity 0.1s ease;
	}

	button.btn-previous svg
	{
		float: left;
	}

	button:hover svg
	{
		opacity: 1;
		animation: bump-in-right 0.15s ease;
	}

	button:focus-visible svg
	{
		opacity: 1;
		animation: bump-in-right 0.15s ease;
	}

	button.btn-previous:hover svg
	{
		animation: bump-in-left 0.15s ease;
	}

	button.btn-previous:focus-visible svg
	{
		animation: bump-in-left 0.15s ease;
	}

	.arrow-previous
	{
		transform: scaleX(-1);
		transform-origin: center;
	}

	@keyframes bump-in-left
	{
		from { transform: translateX(20px); }
		to   { transform: translateX(0px);  }
	}

	@keyframes bump-in-right
	{
		from { transform: translateX(-20px); }
		to   { transform: translateX(0px);  }
	}

	@media screen and (max-width: 500px)
	{
		button
		{
			top: auto;
			bottom: -130px;
			height: 54px;
			width: calc(50% - 40px);
			padding: 60px 20px;
			box-sizing: content-box;
		}

		svg
		{
			opacity: 1;
		}
	}
</style>

<script>
	export default
	{
		name: 'page-button',
		props:
		[
			'dir',
			'onclick'
		]
	}
</script>