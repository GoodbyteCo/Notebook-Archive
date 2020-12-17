<template>
	<img :src=src :alt=alt draggable="false">
</template>

<style scoped>
	img
	{
		max-height: 100%;
		max-width: 100%;
		object-fit: contain;
		margin: 0 auto;
		display: block;
		user-select: none;
		filter: drop-shadow(0 2px 3px rgba(0,0,0,0.19)) drop-shadow(0 3px 3px rgba(0,0,0,0.24));
	}

	img:first-child, img:last-child
	{
		max-width: 50%;
	}

	.open-book img
	{
		animation: slide-right-full-sized 0.6s cubic-bezier(0.65, 0.15, 0, 1);
	}

	.open-book img:first-child
	{
		animation: slide-left 0.6s cubic-bezier(0.65, 0.15, 0, 1);
	}

	.close-book img
	{
		animation: slide-left-full-sized 0.6s cubic-bezier(0.65, 0.15, 0, 1);
	}

	.close-book img:last-child
	{
		animation: slide-right 0.6s cubic-bezier(0.65, 0.15, 0, 1);
	}

	@keyframes slide-left
	{
		from { transform: translateX(50%); }
		to { transform: translateX(0%); }
	}

	@keyframes slide-right
	{
		from { transform: translateX(-50%); }
		to { transform: translateX(0%); }
	}

	@keyframes slide-left-full-sized
	{
		from { transform: translateX(25%); }
		to { transform: translateX(0%); }
	}

	@keyframes slide-right-full-sized
	{
		from { transform: translateX(-25%); }
		to { transform: translateX(0%); }
	}
</style>

<script>
	export default
	{
		name: 'page-image',
		props:
		[
			'src',
			'alt'
		]
	}
</script>