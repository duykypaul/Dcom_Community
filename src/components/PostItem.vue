<template>
	<div class="ass1-section__item" v-if="post">
		<div class="ass1-section">
			<post-item-header :post="post"/>
			<post-item-content :post="post"/>
			<post-item-footer :post="post"/>
			<slot/>
		</div>
	</div>
</template>

<script>
	import PostItemHeader from "./PostItemHeader";
	import PostItemContent from "./PostItemContent";
	import PostItemFooter from "./PostItemFooter";
	
	export default {
		name: "post-item",
		components: {PostItemFooter, PostItemContent, PostItemHeader},
		props: {
			post: {type: Object, default: null}
		}
	}
</script>

<style scoped>

</style>
