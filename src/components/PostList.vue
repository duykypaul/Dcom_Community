<template>
	<div>
		<post-item
				v-for="item in getListPosts"
				:key="item.PID"
				:post="item"
		/>
		
		<button class="load-more ass1-btn">
			<span>Xem thêm</span>
		</button>
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