<template>
	<div aria-labelledby="start-finish-label">
		<title id="start-finish-label">Time used</title>
		<p>
			{{ started }}
		</p>
		<p>
			to {{ finished }}
		</p>
	</div>
</template>

<style scoped>
	div
	{
		max-width: 100%;
		overflow: hidden;
		padding: 4px 0;
	}

	p
	{
		font-family: var(--font);
		font-size: 18px;
		line-height: 28px;
		opacity: 0.6;

		margin: 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media screen and (max-width: 550px)
	{
		div
		{
			padding: 18px 0 8px;
		}

		p
		{
			font-size: 14px;
			line-height: 20px;
		}	
	}
</style>

<script>
	export default
	{
		name: 'start-finish',
		props:
		[
			'started',
			'finished'
		]
	}   
</script>