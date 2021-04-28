<template>
	<div class="filters">
		<div v-for="item in data" :key="item">
			<div class="wrapper">
				<div class="checkbox-border">
					<input type="checkbox" :id="item" :value="item" @change="setCriteriaFilter(item)" />
				</div>
				<label :for="item">{{item}}</label>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: Array,
	},
	methods: {
		setCriteriaFilter(item) {
			this.$store.commit({
				type: "setFilterByCriteria",
				item,
			});
		},
	},
};
</script>


        <pre>
            {{checkedValues}}
        </pre>