export default {
	getIsLogin: state => {
		if(state.ACCESS_TOKEN) return true;
		return false;
	},
	getCurrentUser: state => {
		return state.currentUser;
	},
	getListPostOfCurrentUser: state => {
		return state.posts[state.currentUser.USERID];
	}
}
