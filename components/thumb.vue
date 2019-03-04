<template>
	<b-img class="thumb" @click="$emit('updateCurrent', pid)" :src="thumbnail.url" :alt="image.alt" rounded="circle"/>
</template>
<script>
	
	export default {
		props: {
			title: Array,
			pid: String,
			thumbnail: Object,
			image: Object,
			description: Array
		}
	}
</script>