export default {
	getIsLogin: state => {
		return state.isLogin;
	},
	getCurrentUser: state => {
		return state.currentUser;
	},
	getListPostOfCurrentUser: state => {
		return state.posts[state.currentUser.USERID];
	}
}
