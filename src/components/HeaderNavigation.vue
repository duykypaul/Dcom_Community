<template>
	<nav>
		<ul class="ass1-header__menu">
			<li>
				<a href="#">Danh mục</a>
				<div class="ass1-header__nav" style="display: none;">
					<div class="container">
						<ul>
							<li :key="item.id" v-for="item in categories">
								<router-link :to="getLinkCategory(item)">{{item.text}}</router-link>
							</li>
						</ul>
					</div>
					<div class="ass1-header__menu-transition"></div>
				</div>
			</li>
		</ul>
	</nav>
</template>

<script>
	import {mapState} from 'vuex';
	import {removeVietnameseFromString} from "../helpers";
	
	export default {
		name: "header-navigation",
		methods: {
			getLinkCategory(category) {
				return {
					name: 'home',
					query: {
						text: removeVietnameseFromString(category.text),
						tagIndex: category.id
					}
				}
			}
		},
		computed: {
			...mapState({
				categories: state => state.post.categories
			})
		}
	}
</script>

<style scoped>
	.ass1-header__nav > .container ul {
		Width: 100%;
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	.ass1-header__nav > .container ul li {
		width: 25%;
	}
</style>
