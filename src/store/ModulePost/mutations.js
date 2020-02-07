export default {
	SET_LIST_POSTS(state, data){
		state.listPosts = data;
	},
	PUSH_LIST_POSTS(state, data){
		state.listPosts = [...state.listPosts, ...data];
	}
}
