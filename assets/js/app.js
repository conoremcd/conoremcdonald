/**************************************************/
/* Global Components ******************************/

const Main = {
	template: `
		<main class="container-fluid main">

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

/**************************************************/
/* Vue Instance ***********************************/

const vm = new Vue({
	el: '#app',
	router
});

/**************************************************/
/* Functions **************************************/

// prismic link resolver
function linkResolver(doc) {
	
	// Return the path depending on Prismic Document's type

	if (doc.type === 'background') {
		return '/background';
	}

    if (doc.type === 'header') {
      return '/header';
    }

    if (doc.type === 'footer') {
    	return '/footer';

    }

    // Default to the root
    return '/';
}

