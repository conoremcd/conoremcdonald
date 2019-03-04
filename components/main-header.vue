<template>
	<b-navbar toggleable="md" type="dark" variant="dark" sticky>
		<b-navbar-brand to="/">
			<b-img class="logo" rounded="circle" :src="logo" alt="Logo"/>
		</b-navbar-brand>

		<b-navbar-toggle target="nav_collapse" />

		<b-collapse is-nav id="nav_collapse">
		  <!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto mr-5">
				<b-nav-item v-for="item in nav" :to="item.path" :key="item.title" right>{{item.title}}</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>

	export default {
		data () {
			return {
				logo: 'assets/images/logos/color/personal_logo_grey-01.png',
				nav: [
					{
						title: 'Home',
						path: '/'
					},
					{
						title: 'Projects',
						path: '/projects'
					},
					{
						title: 'Gallery',
						path: '/gallery'
					}
				]
			}
		}		
	}	
</script>