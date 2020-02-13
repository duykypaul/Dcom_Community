<template>
	<div class="ass1-head-user" v-if="user">
		<div class="ass1-head-user__content">
			<div class="ass1-head-user__image">
				<a href="#">
					<img :src="getAvatar" :alt="user.fullname">
				</a>
			</div>
			<div class="ass1-head-user__info">
				<div class="ass1-head-user__info-head">
					<div class="ass1-head-user__name">
						<span>{{user.fullname}}</span>
						<i><img src="/dist/fonts/emotion/svg/Verified.svg" alt=""></i>
					</div>
					<div class="w-100"></div>
					
					<a v-if="!isCurrentUser" href="#" class="ass1-head-user__btn-follow ass1-btn">Theo dõi</a>
					
					<template v-else>
						<router-link
								:to="{name: 'change-password', params: {id: user.USERID}}"
								class="ass1-head-user__btn-follow ass1-btn"
						>Đổi mật khẩu
						</router-link>
						<router-link
								:to="{name: 'user-profile', params: {id: user.USERID}}"
								class="ass1-head-user__btn-follow ass1-btn"
						>Profile
						</router-link>
					</template>
					<!-- <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> -->
				</div>
				<div class="ass1-head-user__info-statistic">
					<div class="ass1-btn-icon"><i class="icon-Post"></i><span>Bài viết: {{countPost}}</span></div>
					<div class="ass1-btn-icon"><i class="icon-Followers"></i><span>Theo dõi: {{user.yourviewed}}</span></div>
					<div class="ass1-btn-icon"><i class="icon-Following"></i><span>Đang theo dõi: {{user.youviewed}}</span></div>
					<!-- <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> -->
				</div>
				<p>{{user.description}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from "vuex";
	export default {
		name: "user-page-info",
		props: {
			user: {type: Object, default: null},
			countPost: {type: Number, default: 0}
		},
		computed: {
			...mapGetters([
				'getCurrentUser'
			]),
			getAvatar(){
				// if(this.user.profilepicture){
				// 	return this.user.profilepicture;
				// }
				return '/dist/images/cat-1634369_1920.jpg';
			},
			isCurrentUser(){
				return this.$route.params.id == this.getCurrentUser.USERID;
			}
		}
	}
</script>

<style scoped>

</style>
