<template>
	<div class="search">
		<div class="search-container">
			<div class="icon">
				<font-awesome-icon icon="search" />
			</div>
			<input type="text" placeholder="Quick search..." v-model="search" @input="filterUsers" />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: "",
		};
	},
	methods: {
		filterUsers() {
			this.$store.commit({ type: "setFilterByText", data: this.search });
		},
	},
};
</script>

<style>
</style>