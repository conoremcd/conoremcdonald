<template>
	<b-container fluid class="main-footer" sticky>
		<b-row>
			<b-col sm="4" class="pt-2" align-self="start">
				<h5 class="md-t pb-2 px-2 brdr-btm">contact me</h5>
				<pre class='md-t px-2'>
484.326.6252
conormcdonald714@gmail.com
				</pre>
			</b-col>
			<b-col sm="8" class="mb-3 pr-5 clearfix" align-self="end">
				<icon-link class="mb-2 px-2 float-right" v-bind="github"></icon-link>
				<icon-link class="mb-2 px-2 float-right" v-bind="linkedin"></icon-link>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import IconLink from '~/components/icon-link.vue'

	export default {
		components: {
			IconLink
		},
		data: function () {
			return {
				github: {	
					path: 'https://github.com/conoremcd',
					primary: '/assets/images/icons/github-icon.png',
					secondary: '/assets/images/icons/github-icon-hover.png'
				},
				linkedin: {	
					path: 'https://www.linkedin.com/in/conormcdonald147/',
					primary: '/assets/images/icons/linkedin-icon.png',
					secondary: '/assets/images/icons/linkedin-icon-hover.png'
				}
			}
		}
	}
</script>

<style scoped>
	.main-footer {
		background-color: #dce6e6;
	}
</style>

