<template>
	<div class="container">
		<user-page-info :countPost="countPosts" :user="UserInfo"/>
		<!--sections-->
		<div class="ass1-section__wrap row ass1-section__isotope-init"
		     column-width=".grid-sizer"
		     item-selector=".ass1-section__item"
		     transition-duration=".4s"
		     v-if="PostsOfUser && PostsOfUser.length"
		     v-masonry
		>
			<div class="grid-sizer"></div>
			<post-item
				:key="item.PID"
				:post="item"
				class="col-lg-6"
				v-for="item in PostsOfUser"
				v-masonry-tile
			/>
		</div>
	</div>
</template>

<script>
	import PostItem from "../components/PostItem";
	import UserPageInfo from "../components/UserPageInfo";
	import {mapActions} from "vuex";
	
	export default {
		name: "user-page",
		components: {UserPageInfo, PostItem},
		data() {
			return {
				userId: this.$route.params.id,
				UserInfo: null,
				PostsOfUser: []
			}
		},
		watch: {
			$route(to, from) {
				this.userId = to.params.id;
				this.fetchAllData();
			}
		},
		computed: {
			countPosts() {
				return this.PostsOfUser.length;
			}
		},
		methods: {
			...mapActions([
				'setLoading',
				'getUserById',
				'getListPostByUserId'
			]),
			async fetchAllData() {
				this.setLoading(true);
				let promiseUser = this.getUserById(this.userId);
				let promiseUserPosts = this.getListPostByUserId(this.userId);
				let [resultUser, resultUserPosts] = await Promise.all([promiseUser, promiseUserPosts]);
				this.setLoading(false);
				if (resultUser.ok && resultUserPosts.ok) {
					this.UserInfo = resultUser.data;
					this.PostsOfUser = resultUserPosts.data || [];
				}
			}
		},
		created() {
			this.fetchAllData();
		}
	}
</script>

<style scoped>

</style>
