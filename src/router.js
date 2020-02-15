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

import {ifAuthenticated, ifNotAuthenticated} from './plugins/authenticate';

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
		component: UserPage,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/post-upload',
		name: 'post-upload',
		component: PostUpload,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/user/:id/profile',
		name: 'user-profile',
		component: UserProfile,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/user/:id/password',
		name: 'change-password',
		component: ChangePassword,
		beforeEnter: ifAuthenticated
	},
	{
		path: '/register',
		name: 'register',
		component: RegisterPage,
		beforeEnter: ifNotAuthenticated
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage,
		beforeEnter: ifNotAuthenticated
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
