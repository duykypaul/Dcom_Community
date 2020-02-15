<template>
	<div class="ass1-login">
		
		<div class="ass1-login__logo">
			<router-link class="ass1-logo" to="/">DCOM Community</router-link>
		</div>
		<div class="ass1-login__content">
			<p>Đăng nhập</p>
			<div class="ass1-login__form">
				<form action="#">
					<input class="form-control" placeholder="Email" required type="text" v-model="email">
					<div class="ass1-input-copy">
						<input class="form-control" placeholder="Mật khẩu" required type="password" v-model="password">
						<a href="#">Copy</a>
					</div>
					<div class="ass1-login__send">
						<router-link to="/register">Đăng ký một tài khoản</router-link>
						<button @click.prevent="handleLogin" class="ass1-btn" type="submit">Đăng nhập</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	
	export default {
		name: "login-page",
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			...mapActions([
				'actionLogin'
			]),
			handleLogin() {
				let data = {
					email: this.email,
					password: this.password
				};
				this.actionLogin(data).then(res => {
					if (!res.ok) {
						if (typeof res.error == 'string') {
							alert(res.error);
						} else {
							alert(res.error.join(' '));
						}
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
