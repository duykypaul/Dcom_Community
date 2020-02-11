import axiosInstance from "../../plugins/axios";
import {parseJwt} from "../../helpers";

export default {
	async getUserById({commit}, userId) {
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
	},
	async actionLogin({commit}, {email = '', password = ''}) {
		try {
			let data = {
				email, password
			}
			let result = await axiosInstance.post('member/login.php', data);
			if (result.data && result.data.status === 200) {
				commit('SET_USER_INFO', result.data.user);
				commit('SET_LOGIN_INFO', result.data);
				return {
					ok: true,
					data: result.data,
					error: null
				}
			} else {
				return {
					ok: false,
					error: result.data.error
				}
			}
		} catch (error) {
			return {
				ok: false,
				error: error.message
			}
		}
	},
	async checkLogin({commit, dispatch}) {
		try {
			let tokenLocal = localStorage.getItem('ACCESS_TOKEN');
			let userObj = parseJwt(tokenLocal);
			if(userObj) {
				let resultUser = await dispatch('getUserById', userObj.id);
				let data = {
					user: resultUser.data,
					token: tokenLocal
				};
				commit('SET_LOGIN_INFO', data);
				return {
					ok: true,
					error: null
				}
			} else {
				return { ok: false }
			}
		} catch (error) {
			return {
				ok: false,
				error: error.message
			}
		}
	},
	actionLogout({commit}){
		commit('SET_LOG_OUT')
	}
}
