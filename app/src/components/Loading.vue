<template>
	<div class="loading center">
		<returnArrow/>
		<div class="circle-load-layer-3 circle-main center">
			<div class="circle-load-layer-2 circle-main center">
				<div class="circle-load-layer-1 circle-main center"></div>
			</div>
		</div>
	</div>
</template>

<script>
import returnArrow from "../components/ReturnArrow.vue";
export default {

	components: {
		returnArrow,
	},
};
</script>

<style>
</style>