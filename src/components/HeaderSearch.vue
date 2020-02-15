<template>
	<div class="ass1-header__search">
		<form action="#" @submit.prevent="handleSearch">
			<label>
				<input v-model="querySearch" required class="form-control" name="search-text" placeholder="Nhập từ khóa ..." type="search">
				<i class="icon-Search"></i>
			</label>
		</form>
	</div>
</template>

<script>
	export default {
		name: "header-search",
		data() {
			return {
				querySearch: ''
			}
		},
		methods: {
			handleSearch() {
				if(this.querySearch) {
					this.$router.push({
						name: 'search',
						query: {
							query: this.querySearch
						}
					})
					this.querySearch = '';
				}
			}
		}
		
	}
</script>

<style scoped>

</style>
