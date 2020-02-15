<template>
	<div class="ass1-login">
		
		<div class="ass1-login__logo">
			<router-link class="ass1-logo" to="/">DCOM Community</router-link>
		</div>
		<div class="ass1-login__content">
			<p>Đăng ký một tài khoản</p>
			<div class="ass1-login__form">
				<form @submit.prevent="handleRegister">
					<input class="form-control" placeholder="Tên hiển thị" required="" type="text" v-model="fullName">
					<input class="form-control" placeholder="Email" required="" type="email" v-model="email">
					<input class="form-control" placeholder="Mật khẩu" required="" type="password" v-model="password">
					<input class="form-control" placeholder="Nhập lại mật khẩu" required="" type="password"
					       v-model="rePassword">
					<div class="ass1-login__send">
						<router-link to="/login">Đăng nhập</router-link>
						<button class="ass1-btn" type="submit">Đăng ký</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {mapActions} from "vuex";
	
	export default {
		name: "register-page",
		data() {
			return {
				fullName: '',
				email: '',
				password: '',
				rePassword: ''
			}
		},
		methods: {
			...mapActions([
				'actionRegister'
			]),
			handleRegister() {
				let data = {
					fullname: this.fullName,
					email: this.email,
					password: this.password,
					repassword: this.rePassword
				};
				this.actionRegister(data).then(res => {
					if (!res.ok) {
						alert(res.error);
					} else {
						this.$router.push('/');
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>
