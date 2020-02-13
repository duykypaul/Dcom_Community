import store from "../store";

let ifNotAuthenticated = (to, from, next) => {
	// đã đăng nhập  thì ko đc go to
	if(store.getters.getIsLogin == false) {
		next();
	} else {
		next({
			name: 'home',
			query: {
				direction: to.name
			}
		})
	}
};
let ifAuthenticated = (to, from, next) => {
	// yêu cầu login trước khi đến đích
	if(store.getters.getIsLogin) {
		next();
	} else {
		console.log(store.getters.getIsLogin);
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

