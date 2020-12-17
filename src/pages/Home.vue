<template>
	<div>
		Home
		<!-- <router-link v-else v-for="friend in friends" :key="friend.name" :to="{path:'/profile/' + friend.id}" v-bind:style="{ background: friend.profile_color }" class="profile">{{ friend.name }}</router-link>
			-->
	</div>
</template>

<script>
	export default 
	{
		created () 
		{
			document.title = "Bookplate";
		}
	}
</script>