<template>
	<div class="ass1-login">
		<div class="ass1-login__content">
			<p>Đổi mật khẩu</p>
			<div class="ass1-login__form">
				<form action="#" @submit.prevent="handleChangePassword">
					<input v-model="oldPassword" class="form-control" placeholder="Mật khẩu cũ" required type="password">
					<input v-model="newPassword" class="form-control" placeholder="Mật khẩu mới" required type="password">
					<input v-model="reNewPassword" class="form-control" placeholder="Xác nhận mật khẩu mới" required type="password">
					<div class="ass1-login__send justify-content-center">
						<button class="ass1-btn" type="submit">Gửi</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {mapActions, mapGetters} from "vuex";
	
	export default {
		name: "change-password",
		data() {
			return {
				oldPassword: '',
				newPassword: '',
				reNewPassword: '',
				userId: this.$route.params.id
			}
		},
		watch: {
			'$route' (to, from) {
				this.userId = to.params.id;
				console.log("checkCurrentUser, watch");
				this.checkCurrentUser();
			}
		},
		computed: {
			...mapGetters([
				'getCurrentUser'
			])
		},
		created() {
			this.checkCurrentUser();
		},
		methods: {
			...mapActions([
				'changePassword'
			]),
			checkCurrentUser() {
				if (this.getCurrentUser.USERID && this.userId) {
					console.log("this.getCurrentUser.USERID", this.getCurrentUser.USERID);
					console.log("this.userId", this.userId);
					if (this.userId != this.getCurrentUser.USERID) {
						this.$router.push({name: 'home', query: {direction: this.$route.name}});
					}
				}
			},
			handleChangePassword(){
				let { oldPassword ,newPassword, reNewPassword } = this;
				if(oldPassword && newPassword && reNewPassword) {
					if(oldPassword == newPassword) {
						alert('Mật khẩu cũ không được trùng với mật khẩu mới');
					} else if (newPassword != reNewPassword) {
						alert('Mật khẩu nhập lại không khớp');
					} else {
						let data = {
							oldPassword,
							newPassword,
							reNewPassword
						}
						this.changePassword(data).then(res => {
							if(res.ok) {
								alert(res.message);
								this.$router.push('/');
							} else {
								alert(res.error);
							}
						})
					}
				}
			}
		}
	}
</script>

<style scoped>

</style>
