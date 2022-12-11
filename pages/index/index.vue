<template>
	<view class="inde-warp">
		<u-button type="primary" text="健康" @click="goHealth"></u-button>
		<u-button type="primary" text="社区" @click="goCommunity"></u-button>
		<u-button type="primary" text="子女" @click="goData"></u-button>

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
			},
			goCommunity() {
				uni.navigateTo({
					url: '/pages/community/community'
				})
			},
			goData() {
				uni.navigateTo({
					url: '/pages/healthData/healthData'
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
