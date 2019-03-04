var Prismic = require('prismic-javascript');
var apiEndpoint = "https://conoremcdonald.cdn.prismic.io/api/v2";
 
export const state = () => ({
	banner: null,
	about: null,
	resume: null
})

export const mutations = { 
	SET_BANNER (state, banner) {
		state.banner = banner;
	},
	SET_ABOUT (state, about) {
		state.about = about;
	},
	SET_RESUME (state, resume) {
		state.resume = resume;
	}
}
export const actions = {
	async GET_BANNER ({ commit }) {
		const { data } = await this.$prismic.api.getSingle('banner')
		commit('SET_BANNER', data)
	},
	async GET_ABOUT ({ commit }) {
		const { data } = await this.$prismic.api.getSingle('about')
		commit('SET_ABOUT', data)
	},
	async GET_RESUME ({ commit }) {
		const { data } = await this.$prismic.api.getSingle('resume')
		commit('SET_RESUME', data)
	}
}

