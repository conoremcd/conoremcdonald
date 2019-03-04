var Prismic = require('prismic-javascript');
var apiEndpoint = "https://conoremcdonald.cdn.prismic.io/api/v2";

export const state = () => ({
	gallery: []
})

export const mutations = { 
	SET_GALLERY (state, gallery) {
		state.gallery = gallery;
	}
}

export const actions = {
	async GET_GALLERY ({ commit }) {
		const data = await this.$prismic.api.query(
				Prismic.Predicates.at('document.type', 'piece'),
				{ pageSize : 100, orderings : '[my.piece.pid]' }
			).then((response) => {

				return response.results;
			});

		commit('SET_GALLERY', data)
	}
}