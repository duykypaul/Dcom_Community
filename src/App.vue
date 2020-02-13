<template>
	<div id="app">
		<comp-header v-if="isRenderHeader"/>
		<router-view/>
		<comp-footer v-if="isRenderFooter"/>
		<app-loading :class="{show: isLoading}"/>
	</div>
</template>

<script>
	import CompHeader from "./components/CompHeader";
	import CompFooter from "./components/CompFooter";
	import AppLoading from "./components/AppLoading";
	import {mapState, mapActions} from "vuex";
	
	export default {
		name: 'app',
		components: {AppLoading, CompFooter, CompHeader},
		data() {
			return {
			}
		},
		computed: {
			...mapState([ 'isLoading']),
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
		methods: {
			...mapActions([
				'checkLogin'
			])
		},
		created(){
			this.checkLogin();
		}
	}
</script>

<style>

</style>
