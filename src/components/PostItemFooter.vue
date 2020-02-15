<template>
	<div class="ass1-section__footer">
		<a class="ass1-section__btn-comment ass1-btn-icon" href="#"><i
			class="icon-Comment_Full"></i><span>{{getCommentCount}}</span></a>
	</div>
</template>

<script>
	export default {
		name: "post-item-footer",
		props: {
			post: {type: Object, default: null}
		},
		computed: {
			getCommentCount() {
				return this.post.count !== null ? this.post.count : 0;
			}
		}
	}
</script>

<style scoped>

</style>
