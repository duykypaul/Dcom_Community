<template>
	<header>
		<div class="ass1-header">
			<div class="container">
				<router-link to="/" class="ass1-logo">
					Dcom Community
				</router-link>
				<header-navigation/>
				<header-search />
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
	import HeaderNavigation from "./HeaderNavigation";
	import HeaderSearch from "./HeaderSearch";
	export default {
		name: "CompHeader",
		components: {HeaderSearch, HeaderNavigation},
		mounted() {
			$(".ass1-header__menu li > a").click(function(e) {
				// $(".ass1-header__nav").hide();
				$(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
			});
			
			$(".ass1-header__nav ul li > a").click(function(e) {
				$(this).parents(".ass1-header__nav").slideUp(300, 'swing');
			});
		}
	}
</script>

<style scoped>

</style>
