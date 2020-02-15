<template>
	<div class="ass1-section__content">
		<p v-html="formatPostContent"></p>
		<div class="ass1-section__image">
			<router-link :to="getPostLink" href="bai-viet-chi-tiet.html">
				<img :alt="post.post_content" :src="post.url_image" @click="handlePostDetail(post.PID)">
			</router-link>
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";
	import {replaceAll} from "../helpers";
	
	export default {
		name: "post-item-content",
		props: {
			post: {type: Object, default: null}
		},
		data() {
			return {
				querySearch: this.$route.query.query,
			}
		},
		computed: {
			getPostLink() {
				return {name: 'post-detail', params: {id: this.post.PID}};
			},
			formatPostContent() {
				if(this.querySearch) {
					// Replace html
					return replaceAll(this.post.post_content, this.querySearch, `<mark>${this.querySearch}</mark>`)
				} else {
					return this.post.post_content;
				}
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
