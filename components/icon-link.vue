<template>
	<div
		@mouseenter="hovering()"
		@mouseleave="hovering()"
		class="icon"
	>
		<b-link 
			:href="href" 
			target="_blank"
		>
			<b-img 
				class="bg-lt"
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
			href: String,
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