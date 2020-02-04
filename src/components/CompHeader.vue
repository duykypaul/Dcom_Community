<template>
	<header>
		<div class="ass1-header">
			<div class="container">
				<a href="index.html" class="ass1-logo">
					ZendVn Meme
				</a>
				<nav>
					<ul class="ass1-header__menu">
						<li>
							<a href="#">Danh mục</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li><a href="/">Funny</a></li>
										<li><a href="/">Animals</a></li>
										<li><a href="/">Anime & Mâng</a></li>
										<li><a href="/">Awesome</a></li>
										<li><a href="/">Basketball</a></li>
									</ul>
									<ul>
										<li><a href="/">Car</a></li>
										<li><a href="/">Comic</a></li>
										<li><a href="/">Cosplay</a></li>
										<li><a href="/">Countryballs</a></li>
										<li><a href="/">Classical Art Memes</a></li>
									</ul>
									<ul>
										<li><a href="/">Girl</a></li>
										<li><a href="/">History</a></li>
										<li><a href="/">K-POP</a></li>
										<li><a href="/">V-POP</a></li>
										<li><a href="/">Pokémon</a></li>
									</ul>
									<ul>
										<li><a href="/">School</a></li>
										<li><a href="/">Star war</a></li>
										<li><a href="/">Coder</a></li>
										<li><a href="/">Travel</a></li>
										<li><a href="/">Sport</a></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
						<li class="active">
							<a href="/">Hot</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li><a href="/">Funny</a></li>
										<li><a href="/">Animals</a></li>
										<li><a href="/">Anime & Mâng</a></li>
										<li><a href="/">Awesome</a></li>
										<li><a href="/">Basketball</a></li>
									</ul>
									<ul>
										<li><a href="/">Car</a></li>
										<li><a href="/">Comic</a></li>
										<li><a href="/">Cosplay</a></li>
										<li><a href="/">Countryballs</a></li>
										<li><a href="/">Classical Art Memes</a></li>
									</ul>
									<ul>
										<li><a href="/">Girl</a></li>
										<li><a href="/">History</a></li>
										<li><a href="/">K-POP</a></li>
										<li><a href="/">V-POP</a></li>
										<li><a href="/">Pokémon</a></li>
									</ul>
									<ul>
										<li><a href="/">School</a></li>
										<li><a href="/">Star war</a></li>
										<li><a href="/">Coder</a></li>
										<li><a href="/">Travel</a></li>
										<li><a href="/">Sport</a></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
					</ul>
				</nav>
				<div class="ass1-header__search">
					<form action="#">
						<label>
							<input type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
							<i class="icon-Search"></i>
						</label>
					</form>
				</div>
				<a href="#" class="ass1-header__btn-upload ass1-btn">
					<i class="icon-Upvote"></i> Upload
				</a>
				<a href="dang-nhap.html" class="ass1-header__btn-upload ass1-btn">
					Login
				</a>
			
			</div>
		</div>
	</header>
</template>

<script>
	import $ from "jquery";
	export default {
		name: "CompHeader",
		mounted() {
			$(".ass1-header__menu li > a").click(function(e) {
				// $(".ass1-header__nav").hide();
				$(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
			});
		}
	}
</script>

<style scoped>

</style>