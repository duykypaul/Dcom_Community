import axiosInstance from "../../plugins/axios";

export default {
	async getListPostHasPaging({commit}, {pagesize = 6, currPage = 1}) {
		try{
			let config = {
				params: {
					pagesize,
					currPage
				}
			}
			let result = await axiosInstance.get('/post/getListPagination.php', config);
			if(result.data && result.data.status === 200){
				commit('SET_LIST_POSTS', result.data.posts);
			} else {
				console.log('error= ', result.data.error);
			}
		} catch (error) {
			console.log(error);
		}
	}
}