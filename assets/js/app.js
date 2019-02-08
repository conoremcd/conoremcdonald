const Main = {
	template: `
		<main class="container-fluid main">
			<about-section></about-section>
			<main-button-section></main-button-section>
			<stat-sections></stat-section>
		</main>

	`
};

const Projects = {
	template: `

	`

};

const Gallery = {
	template: `

	`

};

const router = new VueRouter({
	routes: [
	{ path: '/', component: Main },
	{ Path: '/projects', component: Projects },
	{ path: '/gallery', component: Gallery}
	]
});

const vm = new Vue({
	el: '#app',
	router
});