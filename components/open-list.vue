<template>
	<div @click="open()">
		<b-img class="arrow" src="assets/images/icons/arrow-right.png" rounded="circle"/>
	</div>
</template>

<script>
	export default {
		methods: {
			open() {
				this.$emit('open');
			}
		}
	}
	
</script>

<style scoped>
	.arrow{
		width: 2rem;
	}
</style>