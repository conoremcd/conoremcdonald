<template>
	<div class="piece">
		<div class="pb-2">
			<b-img class="image" :src="image.url" :alt="title[0].text" />
		</div>
		<div class="py-3">
			<h3 class="drk-t drk-brdr-btm">{{ title[0].text }}</h3>
			<p class="py-0">
				{{ description[0].text }} <br/>
				{{ description[1].text }} <br/>
				{{ description[2].text }}
			</p>
		</div>
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
		}

	}
</script>

<style>
	.image{
		max-width: 100%;
		max-height: 30rem;
	}

	.piece{
		width: 100%;
	}
</style>
