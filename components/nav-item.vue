<template>
	<b-nav-item :to="path">{{ title }}</b-nav-item>
</template>
<script>
	export default {
		props: {
			title: String,
			path: String
		}
	}
</script>