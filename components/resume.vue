<template>
	<b-row class="main-focus px-3 pt-3">
		<b-col md="12" class="mb-4">
			<h1 class="clr-t mb-4 px-2 pb-1 clr-brdr-btm">resume</h1>
			<p class="drk-t pl-2">{{description[0].text}}</p>
			<icon-link 
				:path="resume.url"
				primary="assets/images/icons/resume-icon.png"
				secondary="assets/images/icons/resume-icon-hover.png"
			></icon-link>
		</b-col>
	</b-row>
</template>
<script>
	import IconLink from '~/components/icon-link.vue'
	
	export default {
		components: {
			IconLink
		},
		props: {
			description: Array,
			resume: Object
		}
	}
	
</script>