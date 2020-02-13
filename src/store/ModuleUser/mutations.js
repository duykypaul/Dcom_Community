import Vue from "vue";

export default {
	SET_USER_INFO(state, user) {
		Vue.set(state.users, user.USERID, user);
	},
	SET_LOGIN_INFO(state, data) {
		state.currentUser = data.user;
		state.ACCESS_TOKEN = data.token;
		localStorage.setItem('ACCESS_TOKEN', data.token);
	},
	SET_LOG_OUT(state) {
		state.currentUser = null;
		state.ACCESS_TOKEN = null;
		localStorage.removeItem('ACCESS_TOKEN');
	},
	SET_USER_POSTS(state, {posts, userId}) {
		Vue.set(state.posts, userId, posts);
	},
}
