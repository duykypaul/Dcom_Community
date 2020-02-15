<template>
	<div class="ass1-section__content">
		<p>{{post.post_content}}</p>
		<div class="ass1-section__image">
			<router-link :to="getPostLink" href="bai-viet-chi-tiet.html">
				<img :alt="post.post_content" :src="post.url_image" @click="handlePostDetail(post.PID)">
			</router-link>
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";
	
	export default {
		name: "post-item-content",
		props: {
			post: {type: Object, default: null}
		},
		computed: {
			getPostLink() {
				return {name: 'post-detail', params: {id: this.post.PID}};
			}
		},
		methods: {
			...mapActions([
				'getPostDetailByPostId'
			]),
			handlePostDetail(PID) {
				this.getPostDetailByPostId(PID);
			}
		}
	}
</script>

<style scoped>

</style>
