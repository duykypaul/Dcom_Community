<template>
	<div id="app">
		<comp-header v-if="isRenderHeader"/>
		<router-view/>
		<comp-footer v-if="isRenderFooter"/>
	</div>
</template>

<script>
	import CompHeader from "./components/CompHeader";
	import CompFooter from "./components/CompFooter";
	
	export default {
		name: 'app',
		components: {CompFooter, CompHeader},
		data() {
			return {
			}
		},
		computed: {
			isRenderHeader(){
				let arrRoutes = ['login', 'register'];
				let RouteName = this.$route.name;
				if(arrRoutes.indexOf(RouteName) !== -1) return false;
				return true;
			},
			isRenderFooter(){
				let arrRoutes = ['home', 'post-detail'];
				let RouteName = this.$route.name;
				if(arrRoutes.indexOf(RouteName) !== -1) return false;
				return true;
			}
		},
		created() {
			this.$store.dispatch('getListPostHasPaging', {});
		}
	}
</script>

<style>

</style>
