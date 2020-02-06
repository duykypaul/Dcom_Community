<template>
	<div class="ass1-section__list">
		<post-item
				v-for="item in getListPosts"
				:key="item.PID"
				:post="item"
		/>
		<button v-if="getListPosts && getListPosts.length" class="load-more ass1-btn">
			<span>Xem thêm</span>
		</button>
		<h3 v-else>Danh sách rỗng</h3>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import PostItem from "./PostItem";
	export default {
		name: "post-list",
		components: {PostItem},
		computed: {
			...mapGetters([
				'getListPosts'
			])
		}
	}
</script>

<style scoped>

</style>
