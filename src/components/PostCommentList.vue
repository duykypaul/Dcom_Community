<template>
	<div class="ass1-comments">
		<div class="ass1-comments__head">
			<div class="ass1-comments__title">214 Bình luận</div>
			<div class="ass1-comments__options">
				<span>Sắp xếp theo:</span>
				<a class="ass1-comments__btn-upvote ass1-btn-icon" href="#"><i class="icon-Upvote"></i></a>
				<a class="ass1-comments__btn-down ass1-btn-icon" href="#"><i class="icon-Downvote"></i></a>
				<a class="ass1-comments__btn-expand ass1-btn-icon" href="#"><i
					class="icon-Expand_all"></i></a>
			</div>
		</div>
		<!--comment-->
		<post-comment-item/>
		<post-comment-item/>
		<post-comment-item/>
		<post-comment-item/>
	
	</div>
</template>

<script>
	import PostCommentItem from "./PostCommentItem";
	
	export default {
		name: "post-comment-list",
		components: {PostCommentItem}
	}
</script>

<style scoped>

</style>
