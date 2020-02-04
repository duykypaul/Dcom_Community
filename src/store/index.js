import Vue from 'vue'
import Vuex from 'vuex'

import ModuleExample from './ModuleExample';

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state: {
	
	},
	mutations: {
	
	},
	modules: {
		ModuleExample
	}
});
export default store;