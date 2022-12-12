<template>
	<view class="charts_warp">
		<view class="charts_content" ref="charts_content">
			<view class="chartContentList" v-for='item in chartContentList' ref="charts_content">
				<view class="charts_item-left" v-if="item.location==='left'">
					<u-avatar icon="/static/img/robot-avater.png" fontSize="22"></u-avatar>
					<view class="charts_item-left--text">{{item.content}}</view>
				</view>
				<view class="charts_item-right" v-if="item.location==='right'">
					<view class="charts_item-right--text">{{item.content}}</view>
					<u-avatar icon="/static/img/old-avater.png" fontSize="22"></u-avatar>
				</view>
			</view>

		</view>
		<view class="charts_send">
			<u--input placeholder="输入开始咨询" border="surround" v-model="value"></u--input>
			<view class="charts_send--btn-warp">
				<u-button type="success" :disabled="value===''" text="发送" class="charts_send--btn" @click="send">
				</u-button>
			</view>

		</view>
	</view>

</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	export default {
		data() {
			return {
				value: '',
				chartContentList: [{
						location: 'left',
						content: '你好呀！欢迎向我提问各种问题哦！'
					},

				]
			};
		},
		mounted() {
			this.$nextTick(() => {
				document.querySelector('.charts_content').scrollTop = document.querySelector('.charts_content')
					.scrollHeight;
			})

		},
		methods: {
			send() {
				this.chartContentList.push({
					location: 'right',
					content: this.value
				})
				$http('/parent/aiDialogResult', {
					text: this.value
				}, 'POST').then(res => {
					this.chartContentList.push({
						location: 'left',
						content: res
					})
				}).finally(() => {
					this.value = ''
					this.$nextTick(() => {
						document.querySelector('.charts_content').scrollTop = document.querySelector(
								'.charts_content')
							.scrollHeight;
					})
				})


			}
		}
	}
</script>

<style lang="scss">
	.charts_warp {
		height: calc(100vh - 88rpx);


		.charts_content {
			height: calc(100% - 116rpx);
			background-color: #F5F5F5;
			scroll-behavior: smooth;
			overflow: auto;

			.chartContentList {
				overflow: auto;
			}

			.charts_item-left {
				margin: 20rpx 20rpx;
				// height: 100rpx;
				display: flex;
				box-sizing: border-box;
				// align-items: center;

				&--text {
					background-color: #fff;
					margin-right: 9px;
					width: 288px;
					padding: 9px;
					box-sizing: border-box;
					border-radius: 9px;
					letter-spacing: 1px;
					display: flex;
					justify-content: flex-end;
					width: auto;
				}
			}

			.charts_item-right {
				margin: 20rpx 20rpx;
				// height: 100rpx;
				display: flex;
				justify-content: flex-end;
				box-sizing: border-box;
				// align-items: center;

				&--text {
					background-color: #fff;
					margin-right: 9px;
					width: 288px;
					padding: 9px;
					box-sizing: border-box;
					border-radius: 9px;
					letter-spacing: 1px;
					display: flex;
					justify-content: flex-end;
					width: auto;
				}
			}
		}

		.charts_send {
			height: 90rpx;
			width: 100%;
			position: fixed;
			display: grid;
			grid-template-columns: 80% 20%;
			grid-template-rows: 100%;
			margin: 10rpx 10rpx;
			bottom: 0;
			left: 0;

			&--btn-warp {
				display: flex;
				justify-content: center;
				align-items: center;

				.charts_send--btn {
					width: 100rpx;
				}
			}

		}
	}
</style>
