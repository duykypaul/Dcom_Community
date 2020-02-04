<template>
	<div class="ass1-section__item">
		<div class="ass1-section">
			<post-item-header/>
			<post-item-content/>
			<post-item-footer/>
		</div>
	</div>
</template>

<script>
	import PostItemHeader from "./PostItemHeader";
	import PostItemContent from "./PostItemContent";
	import PostItemFooter from "./PostItemFooter";
	
	export default {
		name: "post-item",
		components: {PostItemFooter, PostItemContent, PostItemHeader}
	}
</script>

<style scoped>

</style>