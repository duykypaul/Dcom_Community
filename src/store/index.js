import Vue from 'vue'
import Vuex from 'vuex'

import user from './ModuleUser';
import post from './ModulePost';

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
		isLoading: false
	},
	actions: {
		setLoading({commit}, isLoading){
			commit('SET_LOADING', isLoading);
		}
	},
	mutations: {
		SET_LOADING(state, isLoading = true) {
			state.isLoading = isLoading;
		}
	},
	modules: {
		user,
		post
	}
});
export default store;
