<template>
	<div class="container">
		<!--sections-->
		<div class="row">
			<div class="col-lg-8">
				<!--section-->
				<div class="ass1-section ass1-section__edit-post">
					<div class="ass1-section__content">
						<form action="#">
							<div class="form-group">
								<input class="form-control ttg-border-none" placeholder="https://" type="text">
							</div>
							<div class="form-group">
									<textarea class="form-control ttg-border-none" placeholder="Mô tả ..."
									          type="text"></textarea>
							</div>
						</form>
						<div class="ass1-section__image">
							<a href="#"><img alt="default" src="/dist/images/no_image_available.jpg"></a>
						</div>
						<a class="ass1-btn ass1-btn-meme" href="https://memeful.com/" target="_blank">Chế ảnh từ
							meme</a>
						<a class="ass1-btn ass1-btn-meme" href="#">Đăng ảnh từ máy tính</a>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<aside class="ass1-aside ass1-aside__edit-post">
					<div>
						<a class="ass1-btn" href="#">Đăng bài</a>
					</div>
					<div class="ass1-aside__edit-post-head">
						<span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
						<label class="ass1-checkbox">
							<input checked="checked" name="state-post" type="radio">
							<span></span>
							<p>Ảnh troll</p>
						</label>
						<label class="ass1-checkbox">
							<input name="state-post" type="radio">
							<span></span>
							<p>FapTV</p>
						</label>
						<label class="ass1-checkbox">
							<input checked="checked" name="state-post" type="radio">
							<span></span>
							<p>Ảnh troll</p>
						</label>
						<label class="ass1-checkbox">
							<input name="state-post" type="radio">
							<span></span>
							<p>FapTV</p>
						</label>
						<label class="ass1-checkbox">
							<input checked="checked" name="state-post" type="radio">
							<span></span>
							<p>Ảnh troll</p>
						</label>
						<label class="ass1-checkbox">
							<input name="state-post" type="radio">
							<span></span>
							<p>FapTV</p>
						</label>
						<label class="ass1-checkbox">
							<input checked="checked" name="state-post" type="radio">
							<span></span>
							<p>Ảnh troll</p>
						</label>
						<label class="ass1-checkbox">
							<input name="state-post" type="radio">
							<span></span>
							<p>FapTV</p>
						</label>
					</div>
					<div class="ass1-aside__get-code">
						<p>Share Link</p>
					</div>
					<div class="ass1-aside__social">
						<a class="ass1-btn-social__facebook ass1-btn-social" href=""><i aria-hidden="true"
						                                                                class="fa fa-facebook"></i></a>
						<a class="ass1-btn-social__twitter ass1-btn-social" href=""><i aria-hidden="true"
						                                                               class="fa fa-twitter"></i></a>
						<a class="ass1-btn-social__google ass1-btn-social" href=""><i aria-hidden="true"
						                                                              class="fa fa-google-plus"></i></a>
					</div>
				
				</aside>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "post-upload",
	}
</script>

<style scoped>

</style>
