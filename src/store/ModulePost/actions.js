import axiosInstance from "../../plugins/axios";
import {CURR_PAGE, PAZE_SIZE} from "../../constants";

export default {
	async getListPostHasPaging({commit}, {pagesize = PAZE_SIZE, currPage = CURR_PAGE, tagIndex = null}) {
		commit('SET_LOADING', true);
		try {
			let config = {
				params: {
					pagesize,
					currPage
				}
			};
			let result;
			if (tagIndex) {
				config.params.tagIndex = tagIndex;
				result = await axiosInstance.get('/post/getListByCategory.php', config);
			} else {
				result = await axiosInstance.get('/post/getListPagination.php', config);
			}
			commit('SET_LOADING', false);
			if (result.data && result.data.status === 200) {
				if(currPage === 1) {
					commit('SET_LIST_POSTS', result.data.posts);
				} else {
					commit('PUSH_LIST_POSTS', result.data.posts);
				}
			}
		} catch (error) {
			commit('SET_LOADING', false);
			console.log(error);
		}
	},
	async getPostDetailByPostId({commit, dispatch}, postid = null) {
		commit('SET_LOADING', true);
		try {
			let result = await axiosInstance.get('/post/post.php?postid=' + postid);
			commit('SET_LOADING', false);
			if (result.data && result.data.status === 200) {
				console.log("post detail success");
				let resultUser = await dispatch('getUserById', result.data.data.post.USERID);
				// console.log("resultUser: ", resultUser);
				
				// commit('SET_USER_INFO', result.data.data);
				commit('SET_POST_DETAIL', result.data.data);
				return {
					ok: true,
					data: result.data.data,
					error: null
				}
			}
		} catch (error) {
			commit('SET_LOADING', false);
			return {
				ok: false,
				error: error.message
			}
		}
	}
}
