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
							<repo-link 
								:url="repo.url" 
								:target="repo.target"
							></repo-link>
							<view-screens 
								:class="{ open: show, invisible: noImages }" 
								@show="show = !show"
							></view-screens>
						</b-col>
					</b-row>
					<transition-group 
						name="shots"
						tag="div"
						class="mt-5"
					>
						<screen-shot 
							v-for="image in screenshotList" 
							:image="image" 
							:key="image.caption[0].text"
							class="screen-shot"
						></screen-shot>
					</transition-group>
				</b-card-body>
			</b-col>
		</b-row>
	</b-card>
</template>

<script>
	import RepoLink from '~/components/repo-link.vue'
	import ViewScreens from '~/components/view-screens.vue'
	import ScreenShot from '~/components/screen-shot.vue'

	export default {
		components: {
			RepoLink,
			ViewScreens,
			ScreenShot
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
				show: false,

			}
		},
		computed: {
			noImages: function () {

				return (this.screenshots === undefined || this.screenshots.length == 0)
			},
			screenshotList: function () {
				if (this.show) {
					return this.screenshots;
				} else {
					return [];
				}
			}
		}
	}
</script>

<style scoped>
	.shots-enter-active, .shots-leave-active {
		transition: all 0.8s;
	}
	.shots-enter, .shots-leave-to {
		opacity: 0;
	}
	.shots-enter-to, .shots-leave {
		opacity: 100;
	}
</style>