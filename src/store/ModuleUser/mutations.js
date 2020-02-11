import Vue from "vue";
export default {
	SET_USER_INFO(state, user){
		// console.log('mutation user', user);
		Vue.set(state.users, user.USERID, user);
	}
}
