import axiosInstance from "../../plugins/axios";

export default {
	async getListPostHasPaging({commit}, {pagesize = 3, currPage = 1}) {
		try{
			let result = await axiosInstance.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
			console.log(result);
		} catch (error) {
			console.log(error);
		}
	}
}