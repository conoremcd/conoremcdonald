<template>
	<b-link :id="title" class="social-link" :href="path" target="_blank">
		<b-img  v-bind="iconProps" :src="icon" rounded="circle" alt="icon"/>
	</b-link>
</template>

<script>
	export default {
		props: {
			title: String,
			path: String,
			icon: String
		},
		data () {
			return {
				iconProps: {width: 40, height: 40, class: 'mx-1 mb-2'}
			}
		}
	}
</script>