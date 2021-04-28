<template>
	<div class="start center">
        <div class="small-logo" @click="toMainPage">
            <img src="../assets/images/logo-text.svg">
        </div>
		<div class="circle-main circle-layer-3 center">
			<div class="circle-main circle-layer-2 center">  
				<div @click="findUsers" class="circle-main circle-layer-1 center shdow">
					<p class="text">START</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		findUsers() {
			this.$store.dispatch({ type: "startUsersSearch" });
			this.$router.push("/users");
		},
        toMainPage(){
            this.$router.push('/');
        }
	},
};
</script>