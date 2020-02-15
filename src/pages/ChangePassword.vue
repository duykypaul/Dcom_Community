<template>
	<div class="ass1-login">
		<div class="ass1-login__content">
			<p>Đổi mật khẩu</p>
			<div class="ass1-login__form">
				<form action="#">
					<input class="form-control" placeholder="Mật khẩu cũ" required="" type="password">
					<input class="form-control" placeholder="Mật khẩu mới" required="" type="password">
					<input class="form-control" placeholder="Xác nhận mật khẩu mới" required="" type="password">
					<div class="ass1-login__send justify-content-center">
						<button class="ass1-btn" type="submit">Gửi</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: "change-password"
	}
</script>

<style scoped>

</style>
