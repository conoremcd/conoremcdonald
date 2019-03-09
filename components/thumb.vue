<template>
	<div class="mb-3">
		<b-img fluid @click="changeImage()" :src="thumbnail.url" :alt="image.alt" rounded="circle"/>
	</div>
</template>

<script>
	export default {
		props: {
			title: Array,
			pid: String,
			thumbnail: Object,
			image: Object,
			description: Array
		},
		methods: {
			changeImage() {
				this.$emit('changeImage', this.pid);
			}
		}
	}
</script>

<style>
	
</style>