<template>
	<div class="ass1-section__head" >
		<router-link :to="getUserLink"  class="ass1-section__avatar ass1-avatar">
			<img :src="getImageAvatar" alt="undefine">
		</router-link>
		<div>
			<RouterLink :to="getUserLink" class="ass1-section__name">{{post.fullname}}</RouterLink>
			<span class="ass1-section__passed">{{formatTimeAdded}}</span>
		</div>
		<router-link :to="getUserLink" class="ass1-section__link ass1-btn-icon"><i class="icon-Link"></i></router-link>
	</div>
</template>

<script>
	import moment from 'moment';
	export default {
		name: "post-item-header",
		props: {
			post: {type: Object, default: null}
		},
		computed: {
			getUserLink(){
				return {name: 'user-page', params: {id: this.post.USERID}};
			},
			formatTimeAdded(){
				moment.locale('vi');
				console.log(moment);
				return moment(this.post.time_added).fromNow();
			},
			getImageAvatar(){
				if(this.post.profilepicture) {
					// console.log(this.post.profilepicture);
					// return this.post.profilepicture;
					return 'https://avatars2.githubusercontent.com/u/37139777?s=460&v=4';
				}
				return '/dist/images/avatar-02.png';
			}
		}
	}
</script>

<style scoped>

</style>
