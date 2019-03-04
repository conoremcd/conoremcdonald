<template>
	<b-row>
		<b-col class="px-0">
			<b-img :src="image.url" fluid-grow alt="banner"/>
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