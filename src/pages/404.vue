<template>
	<div class="error">
		<h1>That page does not exist</h1>
		<p>Idk if you messed something up or I messed something up, but try going <br><router-link to='/'>back home</router-link>.</p>
	</div>
</template>

<script>
	export default 
	{
		created () 
		{
			document.title = "404 - Page not found";
		}
	}
</script>