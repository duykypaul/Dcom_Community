import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from "./pages/HomePage";
import PostDetail from "./pages/PostDetail";
import UserPage from "./pages/UserPage";
import PostUpload from "./pages/PostUpload";
import UserProfile from "./pages/UserProfile";
import ChangePassword from "./pages/ChangePassword";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/post-detail/:id',
		name: 'post-detail',
		component: PostDetail
	},
	{
		path: '/user/:id',
		name: 'user-page',
		component: UserPage
	},
	{
		path: '/post-upload',
		name: 'post-upload',
		component: PostUpload
	},
	{
		path: '/user/:id/profile',
		name: 'user-profile',
		component: UserProfile
	},
	{
		path: '/user/:id/password',
		name: 'change-password',
		component: ChangePassword
	},
	{
		path: '/register',
		name: 'register',
		component: RegisterPage
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage
	},
	{
		path: '*',
		component: NotFound
	}
	
]
const router = new VueRouter({
	mode: 'history',
	routes
});
export default router;
