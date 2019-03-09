<template>
  	<b-container class="h-100" fluid>
	  	<b-row class="vh-25">
			<b-col class="pt-3 px-3">
				<h1 class="clr-t mb-4 px-2 pb-1 clr-brdr-btm">gallery</h1>
			</b-col>
		</b-row>
		<gallery-display v-bind="$store.state.gallery"></gallery-display>
  	</b-container>
</template>

<script>
	import GalleryDisplay from '~/components/gallery-display.vue'

	export default {
		components: {
			GalleryDisplay
		},
		async fetch ({ store, params }) {
			await store.dispatch('gallery/GET_GALLERY')
		}
	}
</script>

<style>

</style>