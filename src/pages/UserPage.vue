<template>
	<div class="container">
		<user-page-info :user="UserInfo" :countPost="countPosts" />
		<!--sections-->
		<div v-if="PostsOfUser && PostsOfUser.length"
		     v-masonry
		     column-width=".grid-sizer"
		     transition-duration=".4s"
		     item-selector=".ass1-section__item"
			class="ass1-section__wrap row ass1-section__isotope-init"
		>
			<div class="grid-sizer"></div>
			<post-item
					v-for="item in PostsOfUser"
					:key="item.PID"
					:post="item"
					v-masonry-tile
					class="col-lg-6"
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
		data(){
			return {
				userId: this.$route.params.id,
				UserInfo: null,
				PostsOfUser: []
			}
		},
		watch: {
			$route(to, from){
				this.userId = to.params.id;
				this.fetchAllData();
			}
		},
		computed: {
			countPosts(){
				return this.PostsOfUser.length;
			}
		},
		methods: {
			...mapActions([
				'setLoading',
				'getUserById',
				'getListPostByUserId'
			]),
			async fetchAllData(){
				this.setLoading(true);
				let promiseUser = this.getUserById(this.userId);
				let promiseUserPosts = this.getListPostByUserId(this.userId);
				let [resultUser, resultUserPosts] = await Promise.all([promiseUser, promiseUserPosts]);
				this.setLoading(false);
				if(resultUser.ok && resultUserPosts.ok){
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
