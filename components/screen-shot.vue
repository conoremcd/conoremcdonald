<template>
	<b-row>
		<b-col>
			<b-img :src="image.shot.url" fluid />
			<p>{{ image.caption[0].text }}</p>
		</b-col>
	</b-row>
</template>

<script>
	export default {
		props: {
			image: Object
		}
	}
</script>

<style scoped>
	
</style>