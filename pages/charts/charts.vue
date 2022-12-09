<template>
	<view class="charts_warp">
		<view class="charts_content">
			<view class="charts_item"></view>

		</view>
		<view class="charts_send"></view>
	</view>

</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.charts_warp {
		height: calc(100vh - 88rpx);


		.charts_content {
			height: calc(100% - 116rpx);
			overflow: auto;

			.charts_item {
				height: 80rpx;
				background-color: aquamarine;
				margin-bottom: 10rpx;
			}
		}

		.charts_send {
			background-color: aliceblue;
			height: 110rpx;
			width: 100%;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
