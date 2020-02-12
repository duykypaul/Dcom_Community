import store from "../store";

let ifNotAuthenticated = (to, from, next) => {
	// đã đăng nhập  thì ko đc go to
	console.log(store);
	console.log("authen login", store.getters.getIsLogin);
	if(store.state.user.IsLogin == false) {
		console.log("authen login1", store.getters.getIsLogin);
		next();
	} else {
		console.log("authen login2", store.getters.getIsLogin);
		next({
			name: 'home',
			query: {
				direction: to.name
			}
		})
	}
}
let ifAuthenticated = (to, from, next) => {
	// yêu cầu login trước khi đến đích
	if(store.getters.getIsLogin) {
		next();
	} else {
		next({
			name: 'login',
			query: {
				direction: to.name
			}
		})
	}
}

export {
	ifNotAuthenticated, ifAuthenticated
}

