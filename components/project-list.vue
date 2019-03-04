<template>
	<div id="project-list" class="pt-3 px-3">
		<project class="mb-2" v-for="project in projects" v-bind="project.data" :key="project.data.title[0].text"></project>
	</div>
</template>
<script>
	import Project from '~/components/project.vue'

	export default {
		props: {
			projects: Array
		},
		components: {
			Project
		}
	}
</script>