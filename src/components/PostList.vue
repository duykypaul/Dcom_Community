<template>
	<div class="ass1-section__list">
		<post-item
				v-for="item in getListPosts"
				:key="item.PID"
				:post="item"
		/>
		<button
				v-if="getListPosts && getListPosts.length"
				class="load-more ass1-btn"
				@click="handleLoadMore"
		>
			<span>Xem thêm</span>
		</button>
		<h3 v-else>Danh sách rỗng</h3>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import PostItem from "./PostItem";
	import {CURR_PAGE, PAZE_SIZE} from "../constants";
	export default {
		name: "post-list",
		components: {PostItem},
		data() {
			return {
				pagesize: PAZE_SIZE,
				currPage: CURR_PAGE,
				tagIndex: parseInt(this.$route.query.tagIndex)
			}
		},
		watch: {
			$route(to, from) {
				this.tagIndex = to.query.tagIndex;
				this.currPage = CURR_PAGE;
			}
		},
		computed: {
			...mapGetters([
				'getListPosts'
			])
		},
		methods: {
			...mapActions([
				'getListPostHasPaging'
			]),
			handleLoadMore(){
				this.currPage++;
				let obj = {
					pagesize: this.pagesize,
					currPage: this.currPage,
					tagIndex: this.tagIndex
				};
				this.getListPostHasPaging(obj);
			}
		}
	}
</script>

<style scoped>

</style>
