<template>
		<div class="container">
			<!--sections-->
			<div class="row">
				<div class="col-lg-8">
					<post-list/>
				</div>
				
				<div class="col-lg-4">
					<side-bar />
				</div>
			</div>
		</div>
</template>

<script>
	import PostList from "../components/PostList";
	import SideBar from "../components/SideBar";
	import {mapActions} from 'vuex';
	export default {
		name: "home-page",
		components: {SideBar, PostList},
		watch: {
			$route(to, from ){
				let tagIndex = to.query.tagIndex;
				if(tagIndex){
					this.getListPostHasPaging({tagIndex});
				} else {
					this.getListPostHasPaging({});
				}
			}
		},
		methods: {
			...mapActions([
				'getListPostHasPaging',
				'getListPostByCategory'
			])
		}
	}
</script>

<style scoped>

</style>
