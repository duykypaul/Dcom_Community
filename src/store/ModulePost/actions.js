import axiosInstance from "../../plugins/axios";
import {PAZE_SIZE, CURR_PAGE} from "../../constants";

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
			console.log(error);
		}
	}
}
