<template>
  <b-container fluid>
  	<b-row>
		<b-col class="pt-3 px-3">
			<h1 class="clr-t mb-4 px-2 pb-1 clr-brdr-btm">projects</h1>
		</b-col>
	</b-row>
  	<project-list v-bind="$store.state.projects"></project-list>
  </b-container>
</template>

<script>
	import ProjectList from '~/components/project-list.vue'

	export default {
		components: {
			ProjectList
		},
		async fetch ({ store, params }) {
			await store.dispatch('projects/GET_PROJECTS')
		}
	}
</script>