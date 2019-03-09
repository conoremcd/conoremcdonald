<template>
	<div class="gallery-list bg-drk">
		<b-container>
			<b-row class="py-2">
				<b-col cols="10" sm="9" md="10" xl="11">
					<thumb v-for="piece in gallery" v-bind="piece.data" @changeImage="setCurrent($event)" :key="piece.data.pid"></thumb>
				</b-col>
				<b-col cols="2" sm="3" md="2" xl="1" class="px-2 clear-fix">
					<close-list @close="close()"></close-list>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import Thumb from '~/components/thumb.vue'
	import CloseList from '~/components/close-list.vue'

	export default{
		props: {
			gallery: Array
		},
		components: {
			Thumb,
			CloseList
		},
		methods: {
			setCurrent(id) {
				let current = null;

				this.gallery.forEach((elem) => {
					if (elem.data.pid === id) {
						current = elem.data;
					}
				});

				this.$emit('setCurrent', current);
			},
			close() {
				this.$emit('close');
			}
		}
	}
</script>

<style scoped> 
	.gallery-list{
		width: 0;
		height: 30rem;
		position: absolute;
		z-index: 1;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	

	@media only screen and (min-width: 768px)  {
		.gallery-list.open{
			width: 30%;
			transition: width 1s;
		}
	}

	@media only screen and (min-width: 1200px) {
		.gallery-list.open{
			width: 25%;
			transition: width 1s;
		}
	}

	@media only screen and (min-width: 2000px) {
		.gallery-list.open{
			width: 15%;
			transition: width 1s;
		}
	}

	@media only screen and (max-width: 767px) {
		.gallery-list.open{
			width: 100%;
			transition: width 1s;
		}
	}
	
</style>