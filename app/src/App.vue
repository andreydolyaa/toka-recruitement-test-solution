<template>
	<div id="app">
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>


<script>
export default {};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
    transition-duration: 100ms;
}
.fade-enter-active{
    /* transition-delay: .25s; */
}
.fade-enter,.fade-leave-active{
    opacity:.1;
}
</style>