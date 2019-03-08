<template>
	<b-btn :href="url" :target="target" size="sm" rounded class="repo-link bg-md px-4 mr-2 mb-2">View project</b-btn>
</template>

<script>
	export default {
		props: {
			url: String,
			target: String
		}
	}
	
</script>

<style scoped>
	.repo-link{
		color: #f9fefe;
	}
</style>