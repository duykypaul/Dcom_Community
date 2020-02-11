import axiosInstance from "../../plugins/axios";

export default {
	async getUserById({commit}, userId){
		try {
			let result = await axiosInstance.get('member/member.php?userid=' + userId);
			if (result.data && result.data.status === 200) {
				commit('SET_USER_INFO', result.data.user);
				return {
					ok: true,
					data: result.data.user,
					error: null
				}
			}
		} catch (error) {
			return {
				ok: false,
				error: error.message
			}
		}
	}
}
