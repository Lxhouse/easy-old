<template>
	<view class="index-warp">
		<!-- 	<u-button type="primary" text="健康" @click="goHealth"></u-button>
		<u-button type="primary" text="社区" @click="goCommunity"></u-button>
		<u-button type="primary" text="子女" @click="goData"></u-button> -->
		<view class="semi-card" @click="goHealth">健康</view>
		<view class="semi-card" @click="goCommunity">社区</view>
		<view class="semi-card" @click="goData">健康数据</view>
		<view class="semi-card" @click="goCard">打卡记录</view>
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
			},
			goCard() {
				uni.navigateTo({
					url: '/pages/signIn/signIn'
				})
			}
		}
	}
</script>

<style lang="scss">
	.index-warp {
		display: grid;
		height: 100%;
		grid-template-rows: repeat(2, calc(50vh - 45rpx));
		grid-auto-rows: calc(50vh - 45rpx);
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		// margin: 0 30rpx;

	}

	.semi-card {
		display: flex;
		width: 100%;
		height: 98%;
		margin-bottom: 20rpx;
		align-items: center;
		justify-content: center;
		border: 1px #ccc solid;
		border-radius: 20rpx;
		box-shadow: 10rpx 10rpx 10rpx #cdcfcf;
		font-size: 80rpx;
		// color: #fff;
	}
</style>
