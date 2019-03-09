<template>
	<b-container fluid class="main-footer" sticky>
		<b-row>
			<b-col sm="4" class="pt-2" align-self="start">
				<h5 class="md-t pb-2 px-2 drk-brdr-btm">contact me</h5>
				<pre class='md-t px-2'>
484.326.6252
conormcdonald714@gmail.com
				</pre>
			</b-col>
			<b-col sm="8" class="mb-3 pr-5 clearfix" align-self="end">
				<social-link class="mb-2 py-2 pl-2 float-right" v-bind="github"></social-link>
				<social-link class="mb-2 py-2 pl-2 float-right" v-bind="linkedin"></social-link>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
	import SocialLink from '~/components/social-link.vue'

	export default {
		data: function () {
			return {
				github: {	
					title: 'github',
					path: 'https://github.com/conoremcd',
					icon: 'assets/images/icons/github_icon.png'
				},
				linkedin: {	
					title: 'linkedin',
					path: 'https://www.linkedin.com/in/conormcdonald147/',
					icon: 'assets/images/icons/linkedin_icon.png'
				}
			}
		},
		components: {
			SocialLink
		}
		
	}
</script>

<style scoped>
	.main-footer {
		background-color: #dddddd;
	}
</style>

