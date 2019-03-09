<template>
	<b-card>
		<b-row align-h="center">
			<b-col md="1" xl="2">
				<b-card-img :src="logo.url" alt="project logo" />
			</b-col>
			<b-col md="11" xl="10">
				<b-card-body :title="title[0].text">
					<b-card-text>
						{{ description[0].text }}
					</b-card-text>
					<b-row>
						<b-col md="4" class="ml-auto">
							<repo-link :url="repo.url" :target="repo.target"></repo-link>
							<view-screens :class="{ open: show, invisible: noImages }" @show="show = !show"></view-screens>
						</b-col>
					</b-row>
					<transition-group name="grow-in">
						<screen-shots v-for="image in screenshots" :image="image" :shown="show" :key="image.caption[0].text"></screen-shots>
					</transition-group>
				</b-card-body>
			</b-col>
		</b-row>
	</b-card>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>

<script>
	import RepoLink from '~/components/repo-link.vue'
	import ViewScreens from '~/components/view-screens.vue'
	import ScreenShots from '~/components/screen-shots.vue'

	export default {
		components: {
			RepoLink,
			ViewScreens,
			ScreenShots
		},
		props: {
			title: Array,
			screenshots: Array,
			repo: Object,
			logo: Object,
			description: Array
		},
		data() {
			return {
				show: false
			}
		},
		computed: {
			noImages() {

				return (this.screenshots === undefined || this.screenshots.length == 0)
			}

		},
		methods: {
			beforeEnter(el) {
				el.style.opacity = 0
				el.style.height = 0
			},
			enter(el) {
				var delay = el.dataset.index * 150

			},
			leave(el, done) {

			}
		}

	}
</script>

<style scoped>
	
</style>