export default {
	getListPosts: state => {
		return state.listPosts;
	},
	getPostDetail(state, getters, rootState) {
		if(state.postDetail) {
			let USERID = state.postDetail.post.USERID;
			let user = rootState.user.users[USERID]
			let data = {
				post: {
					...state.postDetail.post,
					fullname: user.fullname,
					profilepicture: user.profilepicture
				},
				categories: state.postDetail.categories
			};
			return data;
		}
		
		
	}
}
