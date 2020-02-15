<template>
	<div class="ass1-login">
		<div class="ass1-login__content">
			<p>Profile</p>
			
			<div class="ass1-login__form">
				<div class="avatar">
					<img :src="getAvatar" alt="">
				</div>
				<form @submit.prevent="handleSubmit" action="#" v-if="getCurrentUser">
					<input
						:value="getCurrentUser.fullname"
						@input="fullName = $event.target.value"
						class="form-control" placeholder="Tên ..." required="" type="text">
					
					<select
						:value="getCurrentUser.gender"
						@change="gender = $event.target.value"
						class="form-control"
					>
						<option disabled value="">Giới tính</option>
						<option value="nam">Nam</option>
						<option value="nu">Nữ</option>
					</select>
					<input @change="uploadAvatar" class="form-control" name="avatar" placeholder="Ảnh đại diện"
					       type="file">
					<textarea
						:value="getCurrentUser.description"
						@change="description = $event.target.value"
						class="form-control" cols="30" placeholder="Mô tả ngắn ..." rows="5">

					</textarea>
					<div class="ass1-login__send justify-content-center">
						<button class="ass1-btn" type="submit">Cập nhật</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	
	export default {
		name: "user-profile",
		data() {
			return {
				fullName: '',
				gender: '',
				description: '',
				avatar: {
					objFile: null,
					base64: ''
				},
				userId: this.$route.params.id
			}
		},
		watch: {
			$route(to, from) {
				this.userId = to.params.id;
				this.checkCurrentUser();
			}
		},
		computed: {
			...mapGetters([
				'getCurrentUser'
			]),
			getAvatar() {
				if (this.avatar.base64 === '' && this.getCurrentUser) {
					return this.getCurrentUser.profilepicture;
				}
				return this.avatar.base64;
				
			}
			
		},
		methods: {
			checkCurrentUser() {
				if (this.getCurrentUser.USERID && this.userId) {
					if (this.userId != this.getCurrentUser.USERID) {
						this.$router.push({name: 'home', query: {direction: this.$route.name}});
					}
				}
			},
			handleSubmit() {
				console.log("fullName: ", this.fullName);
				console.log("gender: ", this.gender);
				console.log("description: ", this.description);
			},
			uploadAvatar(e) {
				if (e.target.files && e.target.files[0]) {
					const avatarFile = e.target.files[0];
					
					let reader = new FileReader();
					reader.onload = (e) => {
						let previewSrc = e.target.result;
						this.avatar.base64 = previewSrc;
						this.avatar.objFile = avatarFile;
					};
					reader.onerror = function (error) {
						alert(error);
					};
					reader.readAsDataURL(avatarFile);
				}
			}
		},
		created() {
			this.checkCurrentUser();
		}
	}
</script>

<style scoped>
	.avatar {
		border-radius: 50%;
		overflow: hidden;
	}
</style>
