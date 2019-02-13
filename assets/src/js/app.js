/**************************************************/
/* Global Components ******************************/

const Main = {
	template: `
		<main class="container-fluid main">
			<about-section></about-section>
			<main-button-section></main-button-section>
			<stat-section></stat-section>
		</main>

	`
};

const Projects = {
	template: `
	<div></div>

	`

};

const Gallery = {
	template: `
	<div></div>

	`

};


// vue router 
const router = new VueRouter({
	routes: [
		{ path: '/', component: Main },
		{ path: '/projects', component: Projects },
		{ path: '/gallery', component: Gallery}
	]
});

// link to prismic headless CMS 
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver: linkResolver
});

// vue instance
const vm = new Vue({
	el: '#app',
	router,
	data: {
		fields: {
			background: null,
			logo: null
		}

	},
	methods: {
		getContent() {
			this.$prismic.client.getSingle('home')
				.then((document) => {
					this.fields.background = document.data.background;
					this.fields.logo = document.data.logo;
				})
		}

	},
	created() {
		this.getContent();
	},
	
});

// prismic link resolver
function linkResolver() {
	
	// Return the path depending on Prismic Document's type
    // If it is a Single Custom Type with the API ID of "home"
	if (doc.type === 'home') {
		return '/';
	}

	// If it is a Single Custom Type with the API ID of "projects"
    if (doc.type === 'projects') {
      return '/projects';
    }

    if (doc.type === 'gallery') {
    	return '/gallery';
    }
    
    // Default to the root
    return '/';
}

