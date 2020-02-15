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
	async actionLogin({commit, dispatch}, {email = '', password = ''}) {
		try {
			let data = {
				email, password
			}
			let result = await axiosInstance.post('member/login.php', data);
			if (result.data && result.data.status === 200) {
				commit('SET_USER_INFO', result.data.user);
				commit('SET_LOGIN_INFO', result.data);
				dispatch('getListPostByUserId', result.data.user.USERID);
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
			if (userObj) {
				// let resultUser = await dispatch('getUserById', userObj.id);
				// console.log("resultUser: ", resultUser);
				// let resultPosts = await dispatch('getListPostByUserId', userObj.id);
				// console.log("resultPosts: ", resultPosts);
				
				let promiseUser = dispatch('getUserById', userObj.id);
				let promisePosts = dispatch('getListPostByUserId', userObj.id);
				let [resultUser, resultPosts] = await Promise.all([promiseUser, promisePosts]);
				if (resultUser.ok && resultPosts.ok) {
					let data = {
						user: resultUser.data,
						token: tokenLocal
					};
					commit('SET_LOGIN_INFO', data);
					return {
						ok: true,
						error: null
					}
				}
			} else {
				return {ok: false}
			}
		} catch (error) {
			return {
				ok: false,
				error: error.message
			}
		}
	},
	actionLogout({commit}) {
		commit('SET_LOG_OUT')
	},
	async getListPostByUserId({commit}, userid) {
		try {
			let config = {
				params: {
					userid
				},
				headers: {
					'accept': 'application/json',
					'Authorization': "Bearer " + localStorage.getItem("ACCESS_TOKEN")
				}
			};
			let resultPosts = await axiosInstance.get("/post/getListPostUserID.php", config);
			if (resultPosts.data && resultPosts.data.status === 200) {
				let data = {
					posts: resultPosts.data.posts,
					userId: userid
				};
				commit('SET_USER_POSTS', data);
				return {
					ok: true,
					data: resultPosts.data.posts
				}
			}
		} catch (e) {
			return {
				ok: false,
				error: e.message
			}
		}
	},
	async actionRegister({commit, dispatch}, {fullname = '', email = '', password = '', repassword = ''}) {
		commit('SET_LOADING', true);
		try {
			let data = {
				fullname,
				email,
				password,
				repassword
			};
			console.log(data);
			let resultUser = await axiosInstance.post("/member/register.php", data);
			commit('SET_LOADING', false);
			if (resultUser.data.code === 200) {
				let data = {
					user: resultUser.data.user,
					token: resultUser.data.token
				}
				commit('SET_USER_INFO', data.user);
				commit('SET_LOGIN_INFO', data);
				
				return {
					ok: true,
					data: resultUser.data
				}
			} else {
				console.log("resultUser.data.error", resultUser.data.error);
				return {
					ok: false,
					error: resultUser.data.error
				}
			}
		} catch (error) {
			commit('SET_LOADING', false);
			console.log("error.message", error.message);
			return {
				ok: false,
				error: error.message
			}
		}
	}
}
