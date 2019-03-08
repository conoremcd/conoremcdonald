<template>
	<b-btn @click="showImages()" size="sm" rounded class="view-img px-4 mr-2 mb-2">{{descriptions[shown]}}</b-btn>
</template>

<script>
	export default {
		data() {
			return {
				shown: 0,
				descriptions: [
					'See details',
					'Hide details'
					]
			}
		},
		methods: {
			showImages() {
				if ( this.shown === 0) {
					this.shown = 1
				} else {
					this.shown = 0
				}

				this.$emit('show');
			},

		}
	}
	
</script>

<style scoped>
	.view-img{
		background-color: #26a883;
		color: #f9fefe;
	}

	.open{
		background-color: #444444;
		color: #f9fefe;
	}
</style>