<template>
	<div
		@mouseenter="hovering()"
		@mouseleave="hovering()"
		class="icon"
	>
		<b-link 
			:href="path" 
			target="_blank"
		>
			<b-img 
				fluid
				rounded
				:src="icon"
			/>
		</b-link>
	</div>
</template>

<script>
	
	export default {
		props: {
			path: String,
			primary: String,
			secondary: String
		},
		data() {
			return {
				hover: false
			}
		},
		computed: {
			icon: function () {
				if (this.hover) {
					return this.secondary;
				} else {
					return this.primary;
				}
			}
		},
		methods: {
			hovering() {
				this.hover = !this.hover;
			}
		}
	}
</script>

<style scoped>
	.icon {
		width: 10vh;
	}
</style>