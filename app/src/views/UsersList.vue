<template>
	<div class="users-list">
		<div class="container users-row" v-if="!isLoading">
			<returnArrow />
			<search />
			<div class="row d-flex justify-content-between" v-if="users">
				<div class="col-sm-7">
					<div class="num-of-users align">
						<p>{{numOfUsers}} Found</p>
					</div>
					<transition-group name="list">
						<div v-for="user in users" :key="user.id">
							<userPreview :user="user" />
						</div>
					</transition-group>
				</div>
				<div class="col-sm-4">
					<div class="num-of-users align">
						<p>criteria</p>
					</div>
					<div>
						<filterBar :data="criterias" />
					</div>
					<div class="row city-filter">
						<div class="col-sm-12">
							<div class="num-of-users align">
								<p>city</p>
							</div>
							<div>
								<filterBar :data="cities" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<loading />
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import userPreview from "../components/UserPreview.vue";
import loading from "../components/Loading.vue";
import returnArrow from "../components/ReturnArrow.vue";
import filterBar from "../components/Filter.vue";
import search from "../components/Search.vue";
export default {
	data() {
		return {
			criterias: ["Normal", "Advanced", "Expert"],
			cities: ["Vancouver", "Chennai", "Quito"],
		};
	},
	computed: {
		...mapGetters({
			users: "getUsers",
			isLoading: "getIsLoading",
			numOfUsers: "getNumOfUsers",
		}),
	},
	created() {
		this.$store.dispatch({ type: "startUsersSearch" });
	},
	components: {
		userPreview,
		loading,
		returnArrow,
		filterBar,
		search,
	},
};
</script>
<style lang="css">
.list-enter-active,
.list-leave-active {
	transition: all 0.2s;
}
.list-enter,
.list-leave-to {
	transform: translatey(-10px);
	opacity: 0;
}
</style>