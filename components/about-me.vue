<template>
	<b-row class="bg-md px-3" align-h="start">
		<b-col sm="2" md="3" lg="2" xl="1" class="mb-3 py-2 px-2">
			<b-img class="bg-drk" v-bind="profileProps" rounded="circle" fluid-grow :src="profile.url"/>
		</b-col>
		<b-col sm="10" md="9" lg="10" xl="8" class="my-2 py-2 px-2" align-self="end">			
			<p class="lt-t pl-2">{{description[0].text}}</p>
		</b-col>
	</b-row>
</template>

<script>
	export default {
		props: {
			profile: Object,
			description: Array
		},
		data () {
			return {
				profileProps: { class: 'my-3' }
			}
		}
	}

</script>