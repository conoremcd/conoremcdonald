<template>
	<b-row class="main-focus px-3 pt-3">
		<b-col md="12" class="mb-4">
			<h1 class="clr-t mb-4 px-2 pb-1 clr-brdr-btm">resume</h1>
			<p class="drk-t pl-2">{{description[0].text}}</p>
			<b-btn size="sm" variant="link" :href="resume.url" target="_blank">
				<b-img class="bg-lt" v-bind="iconProps" rounded="circle" src="assets/images/icons/resume.png"/>
			</b-btn>
		</b-col>
	</b-row>
</template>
<script>
	export default {
		props: {
			description: Array,
			resume: Object
		},
		data () {
			return {
				iconProps: { width: 100 }
			}
		}
	}
	
</script>