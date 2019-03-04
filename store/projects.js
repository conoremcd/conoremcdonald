var Prismic = require('prismic-javascript');
var apiEndpoint = "https://conoremcdonald.cdn.prismic.io/api/v2";

export const state = () => ({
	projects: []
})

export const mutations = { 
	SET_PROJECTS (state, projects) {
		state.projects = projects;
	}
}

export const actions = {
	async GET_PROJECTS ({ commit }) {
		const data = await this.$prismic.api.query(
				Prismic.Predicates.at('document.type', 'project'),
				{ pageSize : 100, orderings : '[my.project.title desc]' }
			).then((response) => {

				return response.results;
			});


		commit('SET_PROJECTS', data)
	}
}

