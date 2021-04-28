<template>
	<div class="scanning-container">
		<div class="return-arrow center" @click="goBack">
			<img src="../assets/images/arrow-left.svg" alt />
		</div>
		<div>
			<p class="arrow-text">{{isLoading ? 'scanning...' : 'results'}}</p>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isLoading() {
			return this.$store.getters.getIsLoading;
		},
	},
	methods: {
		goBack() {
			this.$router.push("/start");
			this.$store.commit({ type: "clearSearchAndCriteria" });
		},
	},
};
</script>

<style>
</style>