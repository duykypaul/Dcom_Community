<template>
	<div class="ass1-login">
		
		<div class="ass1-login__logo">
			<router-link to="/" class="ass1-logo">DCOM Community</router-link>
		</div>
		<div class="ass1-login__content">
			<p>Đăng ký một tài khoản</p>
			<div class="ass1-login__form">
				<form @submit.prevent="handleRegister">
					<input v-model="fullName" type="text" class="form-control" placeholder="Tên hiển thị" required="">
					<input v-model="email" type="email" class="form-control" placeholder="Email" required="">
					<input v-model="password" type="password" class="form-control" placeholder="Mật khẩu" required="">
					<input v-model="rePassword" type="password" class="form-control" placeholder="Nhập lại mật khẩu" required="">
					<div class="ass1-login__send">
						<router-link to="/login">Đăng nhập</router-link>
						<button type="submit" class="ass1-btn">Đăng ký</button>
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
		data () {
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
			handleRegister(){
				let data = {
					fullname : this.fullName,
					email: this.email,
					password: this.password,
					repassword: this.rePassword
				};
				this.actionRegister(data).then(res => {
					if(!res.ok) {
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
