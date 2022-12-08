<template>
	<view class="health_warp">
		<view class="itemBox">
			<view class="titleBox u-flex" style="border: none;padding-bottom: 50rpx;">
				<view class="title">功能与服务</view>
			</view>
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="(item,index) in moreFun" :key="index" @click="navClick(item.onPlate)">
					<view class="u-flex u-p-t-30 u-p-b-30"
						style="position: relative;flex-direction: column;justify-content: center;">
						<image style="width: 70rpx;height: 70rpx;" :src="item.icon" />
						<view class="grid-text" style="color: #666;font-size: 22rpx;">{{item.word}}</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="clockIn">
			<button class="clockBtn">打卡</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moreFun: [{
						icon: '/static/img/time.png',
						word: '打卡信息',
						onPlate: 'punchInformation',
					}, {
						icon: '/static/img/data.png',
						word: '健康数据',
						onPlate: 'healthData',
					}, {
						icon: '/static/img/chart.png',
						word: '智能问答',
						onPlate: 'goCashCouponList',
					},
					{
						icon: '/static/img/query.png',
						word: '药品查询',
						onPlate: 'onHelp',
					},

				],
			};
		},
		methods: {
			navClick(e) {
				if (e == 'healthData') {
					uni.navigateTo({
						url: '/pages/healthData/healthData'
					})
				} else if (e == 'punchInformation') {
					uni.navigateTo({
						url: '/pages/signIn/signIn'
					})
				}else if(e==='goCashCouponList'){
					uni.navigateTo({
						url:'/pages/charts/charts'
					})
				}
				else if(e==='onHelp'){
					uni.navigateTo({
						url:'/pages/drugs/drugs'
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.health_warp {

		height: 100%;
		padding: 10rpx;

		.itemBox {
			background: #fff;
			padding: 0 24rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-top: 24rpx;
			margin-bottom: 24rpx;

			.titleBox {
				padding: 32rpx 0;
				border-bottom: 1rpx solid #eee;


				.title {
					font-size: 28rpx;
					font-weight: bold;
				}

				.word {
					font-size: 24rpx;
					color: #999;
				}
			}

			.grid-text {
				font-size: 24rpx;
				color: #333;
				padding-top: 10rpx;
			}
		}

		.clockIn {
			height: 400rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			.clockBtn{
				width: 400rpx;
				height: 400rpx;
box-sizing: border-box;
				text-align: center;
			}
		}
	}
</style>
/*
活动能量
静息能量
步数
已爬楼层
步行步长
步行速度

睡眠
血压
心率
体温
血糖
体重
*/
