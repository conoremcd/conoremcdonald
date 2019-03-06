<template>
	<div class="mb-2" @click="close()">
		<b-img class="arrow" src="assets/images/icons/arrow-left.png" rounded="circle"/>
	</div>
</template>

<script>
	export default {
		methods: {
			close() {
				this.$emit('close');
			}
		}
	}
	
</script>

<style scoped>
	.arrow{
		width: 2rem;
	}
</style>