<template>
	<div class="user-preview align">
		<div class="align user-container">
			<div class="profile-img"></div>
			<div class="user-details">
				<p class="city">{{user.city}}</p>
				<p class="name">{{user.name}}</p>
			</div>
		</div>
		<div>
			<p class="criteria align">{{user.criteria}}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		user: Object,
	},
};
</script>

