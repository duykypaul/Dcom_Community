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
	},
	async updateProfile({commit}, {fullname = '', description = '', gender = '', objFile = null}) {
		commit('SET_LOADING', true);
		try {
			let bodyFormData = new FormData();
			
			bodyFormData.append('gender', gender);
			bodyFormData.append('fullname', fullname);
			bodyFormData.append('description', description);
			
			// For avatar
			if (objFile) {
				bodyFormData.append('avatar', objFile);
			}
			
			let config = {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
				}
			}
			
			let result = await axiosInstance.post('/member/update.php', bodyFormData, config);
			commit('SET_LOADING', false);
			if (result.data.status === 200) {
				commit('SET_CURRENT_USER', result.data.user);
				return {
					ok: true,
					user: result.data.user
				}
			} else {
				return {
					ok: false,
					error: result.data.error
				}
			}
			
		} catch (error) {
			commit('SET_LOADING', false);
			return {
				ok: false,
				error: error.message
			}
		}
	},
	async changePassword({commit}, {oldPassword = '', newPassword = '', reNewPassword = ''}) {
		try {
			let data = {
				oldPassword,
				newPassword,
				reNewPassword
			};
			let config = {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': "Bearer " + localStorage.getItem("ACCESS_TOKEN")
				}
			};
			console.log("change_password: ");
			let change_password = await axiosInstance.post("/member/password.php", data, config);
			console.log("change_password: ", change_password);
			if (change_password.data && change_password.data.status === 200) {
				return {
					ok: true,
					message: change_password.data.message
				}
			} else {
				return {
					ok: false,
					error: change_password.data.error
				}
			}
		} catch (e) {
			console.log("catch");
			return {
				ok: false,
				error: e.error
			}
		}
	}
}
