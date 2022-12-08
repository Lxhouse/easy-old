<template>
	<view class="inde-warp">
		<u-button type="primary" text="健康" @click="goHealth"></u-button>
		<u-button type="primary" text="娱乐"></u-button>
		<u-button type="primary" text="子女"></u-button>

	</view>

</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goHealth() {
				uni.navigateTo({
					url: '/pages/health/health'
				})
			}
		}
	}
</script>

<style lang="scss">
	.inde-warp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
