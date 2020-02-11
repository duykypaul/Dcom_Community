<template>
	<div class="container">
		<!--sections-->
		<div class="row">
			<div class="col-lg-8">
				<!--section-->
				<div class="ass1-section__list">
					<div class="ass1-section" v-if="getPostDetail && getPostDetail.post">
						<post-item  :post="getPostDetail.post" >
							<template id="post-detail-categories">
								<li v-for="item in getPostDetail.categories" :key="item.tag_index">
									<router-link :to="getLinkCategory(item)" >{{item.tag_value}}</router-link>
								</li>
							</template>
						</post-item>
<!--						<post-feeling/>-->
					
					
					</div>
					<post-comment-add/>
					<post-comment-list/>
				</div>
			</div>
			<div class="col-lg-4">
				<side-bar/>
			</div>
		</div>
	</div>
</template>

<script>
	import PostItem from "../components/PostItem";
	import PostFeeling from "../components/PostFeeling";
	import PostCommentAdd from "../components/PostCommentAdd";
	import PostCommentList from "../components/PostCommentList";
	import SideBar from "../components/SideBar";
	import {mapActions, mapGetters} from "vuex";
	import {removeVietnameseFromString} from "../helpers";
	
	export default {
		name: "post-detail",
		components: {SideBar, PostCommentList, PostCommentAdd, PostFeeling, PostItem},
		data() {
			return {
				postId: this.$route.params.id
			}
		},
		watch: {
			$route(to, from){
				this.postId = to.params.id;
				this.fetchPostById();
			}
		},
		created(){
			this.fetchPostById();
		},
		computed: {
			...mapGetters([
				'getPostDetail'
			])
		},
		methods: {
			...mapActions([
				'getPostDetailByPostId'
			]),
			getLinkCategory(category){
				return {
					name: 'home',
					query: {
						text: removeVietnameseFromString(category.tag_value),
						tagIndex: category.tag_index
					}
				}
			},
			fetchPostById(){
				this.getPostDetailByPostId(this.postId).then(res => {
					if(!res.ok){
						this.$router.push('/');
					}
				});
			}
		}
	}
</script>

<style scoped>
	#post-detail-categories {
		list-style-type: none;
	}
</style>
