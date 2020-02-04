<template>
	<div class="container">
		<!--sections-->
		<div class="row">
			<div class="col-lg-8">
				<!--section-->
				<div class="ass1-section__list">
					<div class="ass1-section">
						<post-item/>
						<post-feeling/>
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
	
	export default {
		name: "post-detail",
		components: {SideBar, PostCommentList, PostCommentAdd, PostFeeling, PostItem}
	}
</script>

<style scoped>

</style>