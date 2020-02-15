<template>
	<header>
		<div class="ass1-header">
			<div class="container">
				<router-link class="ass1-logo" to="/">
					Dcom Community
				</router-link>
				<header-navigation/>
				<header-search/>
				<router-link class="ass1-header__btn-upload ass1-btn" to="/post-upload">
					<i class="icon-Upvote"></i> Upload
				</router-link>
				<router-link class="ass1-header__btn-upload ass1-btn" to="/login" v-if="!getIsLogin">
					Login
				</router-link>
				<div class="wrapper-user" v-else>
					<router-link :to="{name: 'user-page', params: {id: getCurrentUser.USERID}}" class="user-header">
						<span class="avatar">
							<img :src="getImageAvatar" alt="avatar">
						</span>
						<span class="email">{{getCurrentUser.email}}</span>
					</router-link>
					<div @click.prevent="handleLogOut" class="logout">Logout</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import $ from "jquery";
	import HeaderNavigation from "./HeaderNavigation";
	import HeaderSearch from "./HeaderSearch";
	import {mapActions, mapGetters} from "vuex";
	
	export default {
		name: "CompHeader",
		components: {HeaderSearch, HeaderNavigation},
		data() {
			return {}
		},
		computed: {
			...mapGetters([
				'getIsLogin',
				'getCurrentUser'
			]),
			getImageAvatar() {
				if (this.getCurrentUser.profilepicture) {
					return this.getCurrentUser.profilepicture;
				}
				return '/dist/images/avatar-02.png';
			},
		},
		methods: {
			...mapActions([
				'actionLogout'
			]),
			handleLogOut() {
				this.actionLogout();
			}
		},
		mounted() {
			$(".ass1-header__menu li > a").click(function (e) {
				// $(".ass1-header__nav").hide();
				$(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
			});
			
			$(".ass1-header__nav ul li > a").click(function (e) {
				$(this).parents(".ass1-header__nav").slideUp(300, 'swing');
			});
		}
	}
</script>

<style scoped>
	.user-header {
		position: relative;
		color: #1e1633;
		transition: all .2s ease;
		display: inline-block;
	}
	
	.user-header:hover {
		color: #3482e2;
	}
	
	.user-header > span {
		display: inline-block;
		vertical-align: middle;
	}
	
	.user-header .avatar {
		width: 35px;
		height: 35px;
		margin-right: 4px;
		border-radius: 100%;
		overflow: hidden;
	}
	
	.user-header .avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.wrapper-user {
		position: relative;
	}
	
	.logout {
		right: 0;
		top: 100%;
		position: absolute;
		background-color: #fff;
		padding: 10px 30px;
		min-width: 150px;
		text-align: right;
		border-radius: 3px;
		box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
		z-index: 0;
		transition: all .3s ease;
		opacity: 0;
		pointer-events: none;
		cursor: pointer;
	}
	
	.wrapper-user .logout:hover,
	.wrapper-user .user-header:hover + .logout {
		opacity: 1;
		z-index: 2;
		pointer-events: auto;
	}
	
	.ass1-header__nav > .container ul {
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.ass1-header__nav > .container ul li {
		flex: 0 0 25%;
		max-width: 25%;
	}
	
	.ass1-header__nav > .container ul li:first-child {
		margin-top: 8px;
	}
</style>
