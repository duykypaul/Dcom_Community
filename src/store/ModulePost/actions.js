import axiosInstance from "../../plugins/axios";

export default {
	async getListPostHasPaging({commit}, {pagesize = 6, currPage = 1, tagIndex = null}) {
		commit('SET_LOADING', true);
		try{
			let config = {
				params: {
					pagesize,
					currPage
				}
			};
			let result;
			if (tagIndex){
				config.tagIndex = tagIndex;
				result = await axiosInstance.get('/post/getListByCategory.php', config);
			} else {
				 result = await axiosInstance.get('/post/getListPagination.php', config);
			}
			if(result.data && result.data.status === 200){
				commit('SET_LIST_POSTS', result.data.posts);
			}
			commit('SET_LOADING', false);
		} catch (error) {
			console.log(error);
		}
	}
}
