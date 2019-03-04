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
					<b-btn :href="repo.url" :target="repo.target" size="sm" class="main-btn" >See Project Repository</b-btn>
				</b-card-body>
			</b-col>
		</b-row>
	</b-card>
</template>
<script>
	export default {
		props: {
			title: Array,
			screenshots: Array,
			repo: Object,
			logo: Object,
			description: Array
		}
	}
</script>