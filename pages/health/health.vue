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
			<button class="clockBtn succeed">{{clockBtnText}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clockBtnText:"打卡",
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
				} else if (e === 'goCashCouponList') {
					uni.navigateTo({
						url: '/pages/charts/charts'
					})
				} else if (e === 'onHelp') {
					uni.navigateTo({
						url: '/pages/drugs/drugs'
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

			.clockBtn {
				width: 400rpx;
				height: 400rpx;
				margin-top: 20%;
				border-radius: 50%;
				text-align: center;
				text-align: center;
				line-height: 400rpx;
				font-size: 60rpx;
				cursor: pointer;
				// border: 1px solid #fff;

			}

			.succeed {
				color: #fff;
				background-color: $uni-color-success;
				box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
				/*线性渐变语法：
	    background-image:-webkit-gradient(type,x1 y1, x2 y2, from(开始颜色值),to(结束颜色值), [color-stop(偏移量小数,停靠颜色值),…] );
	        type:line   -->表示渐变为线性
	        x1,x2,y1,y2     -->渐变坐标，x1=x2垂直变换,y1=y2左右变换
	    */
				background-image: -webkit-gradient(linear, left top, left bottom, from(#33CC66), to($uni-color-success));
				/*上下垂直渐变*/

				/*规定动画变换速度：ease-in-out -->动画以低速开始和结束 */
				-webkit-animation-timing-function: ease-in-out;

				/*为 @keyframes 动画规定一个名称*/
				-webkit-animation-name: submit;

				/*完成一个动画所需时间*/
				-webkit-animation-duration: 2500ms;

				/*规定动画播放次数：infinite为无限次*/
				-webkit-animation-iteration-count: infinite;

				/*规定动画播放方式：alternate为轮流反向播放*/
				-webkit-animation-direction: alternate;
			}

			@-webkit-keyframes submit {
				0% {
					opacity: .5;
					/*元素不透明级别*/
					box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
				}

				100% {
					opacity: 1;
					// border: 1px solid rgba(51, 153, 0, 2);
					box-shadow: 0 1px 30px rgba(51, 153, 0, 2);
				}
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
