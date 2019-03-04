<template>
	<div>
		<div id="gallery-display" class="mb-3 px-0">
			<piece v-bind.sync="current"></piece>
		</div>
		<div id="gallery-list" class="pt-3 px-4">
			<thumb class="mb-5 mx-4" v-for="piece in gallery" v-bind="piece.data" v-on:updateCurrent="setCurrent" :key="piece.data.pid"></thumb>
		</div>
	</div>
</template>

<script>
	import Piece from '~/components/piece.vue'
	import Thumb from '~/components/thumb.vue'

	export default {
		props: {
			gallery: Array
		},
		components: {
			Piece,
			Thumb
		},
		data() {
			return {
				current: this.gallery[0].data,
				display: 'none'
			}
		},
		methods: {
			setCurrent(id) {
				let current = null;

				this.gallery.forEach((elem) => {
					if (elem.data.pid === id) {
						current = elem.data;
					}
				});

				this.current = current;
			}
		}
	}
</script>
<style>
	#gallery-display{	
		display: this.display;
	}
</style>