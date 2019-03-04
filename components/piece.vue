<template>
	<div id="gallery-display-port">
		<b-img class="piece" :src="image.url" :alt="title[0].text" :width="auto" />
		<b-row class="mt-5">
			<b-col>
				<h3 class="drk-t drk-brdr-btm">{{ title[0].text }}</h3>
				<p>{{ description[0].text }}</p>
				<p>{{ description[1].text }}</p>
				<p>{{ description[2].text }}</p>
			</b-col>
		</b-row>
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