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
								<input v-model="url_image" class="form-control ttg-border-none" placeholder="https://" type="text">
							</div>
							<div class="form-group">
									<textarea v-model="post_content" class="form-control ttg-border-none" placeholder="Mô tả ..."
									          type="text">
									</textarea>
							</div>
						</form>
						<div class="ass1-section__image">
							<a href="#"><img alt="default" :src="renderImage"></a>
						</div>
						<a class="ass1-btn ass1-btn-meme" href="https://memeful.com/" target="_blank">Chế ảnh từ
							meme</a>
						<button class="ass1-btn ass1-btn-meme" @click="UploadImageFromLocal">Đăng ảnh từ máy tính</button>
						<input
							style="display: none"
							@change="imageUpload"
							ref="imageUpload"
							name="imageUpload"
							placeholder="Ảnh đại diện"
							type="file"
						>
					</div>
				</div>
			</div>
			<div class="col-lg-4">
				<aside class="ass1-aside ass1-aside__edit-post">
					<div>
						<button @click.prevent="handlePostUpload" class="ass1-btn" href="#">Đăng bài</button>
					</div>
					<div class="ass1-aside__edit-post-head">
						<span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
						<label class="ass1-checkbox"
						       v-for="item in categories"
						       :key="item.id"
						>
							<input name="state-post" type="checkbox" v-model="category" :value="item.id">
							<span></span>
							<p>{{item.text}}</p>
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
	import {mapActions, mapState} from "vuex";
	import {checkImageFile, checkImageURL} from "../helpers";
	
	export default {
		name: "post-upload",
		data() {
			return {
				obj_image: {
					objFile : null,
					base64URL: ''
				},
				url_image: '',
				post_content: '',
				category: []
			}
		},
		computed: {
			renderImage(){
				if(this.url_image) {
					return this.url_image;
				} else if(this.obj_image.base64URL) {
					return this.obj_image.base64URL;
				}
				return '/dist/images/no_image_available.jpg';
			},
			...mapState({
				categories: state => state.post.categories
			})
		},
		methods: {
			...mapActions([
				'createNewPost'
			]),
			UploadImageFromLocal(){
				this.$refs.imageUpload.click();
			},
			imageUpload(e){
				if (e.target.files && e.target.files[0]) {
					const imageFile = e.target.files[0];
					if(!checkImageFile(imageFile)) {
						alert("file tải lên không hợp lệ");
						return;
					}
					let reader = new FileReader();
					reader.onload = (e) => {
						let previewSrc = e.target.result;
						this.obj_image.base64URL = previewSrc;
						this.obj_image.objFile = imageFile;
					};
					reader.onerror = function (error) {
						alert(error);
					};
					reader.readAsDataURL(imageFile);
				}
			},
			handlePostUpload(){
				let {obj_image, post_content, url_image, category} = this;
				if(post_content && category.length) {
					if(url_image || obj_image.base64URL) {
						
						let data = {
							post_content,
							category
						};
						if(!checkImageURL(url_image)) {
							if (obj_image.base64URL) {
								data.obj_image = obj_image.objFile;
							} else {
								alert("vui lòng chọn link hình ảnh hợp lệ hoặc tải ảnh lên từ máy tính");
								return;
							}
						} else {
							data.url_image = url_image;
						}
						this.createNewPost(data).then(res => {
							if(res.ok) {
								alert("đăng bài viết thành công");
								this.resetData();
							} else {
								alert(res.error);
							}
						});
					} else {
						alert("vui lòng chọn hình ảnh bài viết");
					}
				} else {
					alert('Vui lòng nhập đầy đủ nội đụng');
				}
			},
			resetData() {
				this.obj_image = {
					base64URL: '',
					objFile: null
				};
				this.url_image = '';
				this.category = [];
				this.post_content= ''
			}
		}
	}
</script>

<style scoped>

</style>
