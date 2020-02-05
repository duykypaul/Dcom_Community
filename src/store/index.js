import Vue from 'vue'
import Vuex from 'vuex'

import user from './ModuleUser';
import post from './ModulePost';

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
	
	},
	mutations: {
	
	},
	modules: {
		user,
		post
	}
});
export default store;