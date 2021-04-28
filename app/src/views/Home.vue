<template>
	<div class="home center">
		<transition name="fade" appear mode="out-in">
			<div @click="goToStart">
				<img src="../assets/images/logo.svg" class="main-logo" />
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	methods: {
		goToStart() {
			this.$router.push("/start");
		},
	},
};
</script>

<style lang="css">
.fade-enter-from{
    opacity:0;
}
.fade-enter-to{
    opacity: 1;
}
.fade-enter-active{
    transition: all 2s ease;
}
</style>