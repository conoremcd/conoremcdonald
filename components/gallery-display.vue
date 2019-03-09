<template>
	<b-row class="vh-75">
		<gallery-list :class="{ open: listDisplay }" :gallery="gallery" @close="hideList()" @setCurrent="setCurrent($event)"></gallery-list>
		<b-col cols="2" sm="1">
			<open-list @open="showList()"></open-list>		
		</b-col>
		<b-col cols="10" sm="11">
			<piece v-bind.sync="current"></piece>
		</b-col>
	</b-row>
</template>

<script>
	import Piece from '~/components/piece.vue'
	import GalleryList from '~/components/gallery-list.vue'
	import OpenList from '~/components/open-list.vue'

	export default {
		props: {
			gallery: Array
		},
		components: {
			Piece,
			GalleryList,
			OpenList
		},
		data() {
			return {
				current: this.gallery[0].data,
				listDisplay: false
			}
		},
		methods: {
			setCurrent(cur) {
				this.current = cur;
				this.listDisplay = false;
			},
			showList() {
				this.listDisplay = true;
			},
			hideList() {
				this.listDisplay = false;
			}

		}
	}
</script>

<style>

</style>