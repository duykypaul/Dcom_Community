<template>
	<aside class="ass1-aside">
		<div class="ass1-content-head__t">
			<div>Bài viết gần đây của bạn.</div>
		</div>
		<div v-if="!getIsLogin">Vui lòng đăng nhập để xem nội dung này
			<router-link to="/login">Đăng nhập</router-link>
		</div>
		<div v-else-if="getIsLogin && getListPostOfCurrentUser && getListPostOfCurrentUser.length">
			<post-item
				:key="item.PID"
				:post="item"
				v-for="item in getListPostOfCurrentUser"
			/>
		</div>
	</aside>
</template>

<script>
	import {mapGetters} from "vuex";
	import PostItem from "./PostItem";
	
	export default {
		name: "side-bar",
		components: {PostItem},
		computed: {
			...mapGetters([
				'getListPostOfCurrentUser',
				'getIsLogin'
			])
		}
	}
</script>

<style scoped>

</style>
