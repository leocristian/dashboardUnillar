<template>
	<div class="seller-container">
		<AvatarComponent />
		<div class="seller-info">
			<span class="name">Nome: {{ sellerName }}</span> <br>
			<span class="totalValue">Vendas: R$ {{ totalValue }}</span>
		</div>
	</div>
</template>

<script>

import AvatarComponent from './AvatarComponent.vue'

export default {
	name: 'CardSeller',
	components: { AvatarComponent },
	props: {
		sellerName: String,
		totalValue: String
	}
}
</script>

<style scoped>
.seller-container {
	display: flex;
	text-align: left;
	padding: 10px;
	position: relative;
	margin: 10px;
	background-color: rgb(228, 228, 228);
	border-radius: 5px;
}

.seller-info {
	margin-left: 10px;
}
</style>