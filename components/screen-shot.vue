<template>
	<b-row class="py-3 md-brdr-top">
		<b-col cols="8">
			<b-img class="pb-2" :src="image.shot.url" fluid />
		</b-col>
		<b-col>
			<p class="md-t">{{ image.caption[0].text }}</p>
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