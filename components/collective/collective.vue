<template>
	<view class="collective">
		<view class="info-block" v-for="item in infoList">
			<view class="info-block--head">
				<u-avatar :src="item.avaterSrc" shape="circle" size="30"></u-avatar>
				<span style="margin-left: 20rpx;">{{item.name}}</span>
			</view>
			<view class="info-block--body">
				<view class="">
					{{item.content}}
				</view>
			</view>
			<view class="info-block--footer">
				<!-- <view :class="{unLiekBox:true,likeBox:isLike}" @click="onLike"></view> -->
				<image :src="item.isLike!==1?'/static/img//unLike.png':'/static/img//isLike.png'" mode="aspectFill"
					class="info-commit" @click="handelLike(item)"></image><span
					style='margin-left: 10rpx;'>{{item.likeNum||0}}</span>
				<!-- 	<image src="/static/img/commit.png" mode="aspectFill" class="info-commit"></image><span
					style='margin-left: 10rpx;'>{{item.messageNum||0}}</span> -->
			</view>
		</view>
		<view class="info-send" @click="changeShow">
			<u-icon name="plus" color="#000" size="28"></u-icon>
		</view>
		<u-popup :show="popupInfo.show" @close="changeShow" mode='bottom'>
			<view style="height: 400rpx; margin: 30rpx;">
				<view style="font-weight: 900;margin-bottom: 40rpx;">说点什么吧：</view>
				<u--textarea v-model="popupInfo.content" placeholder="请输入内容"></u--textarea>
				<view style="display: flex;margin-top: 30rpx;">
					<u-button type="success" :disabled="popupInfo.content===''" text="发送" @click="handelSend"
						style='width:250rpx'></u-button>
					<u-button type="primary" text="取消" @click="changeShow" style='width:250rpx'></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	import moment from 'moment'
	export default {
		name: "collective",
		data() {
			return {
				infoList: [{
					messageID: 1,
					name: '我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content: '这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 1,
					likeNum: 22,
					messageNum: 23
				}],
				popupInfo: {
					show: false,
					content: ''
				}

			};
		},
		created() {
			this.getCollectiveList()
		},
		methods: {
			handelLike(_item) {
				//调用接口
				this.toLike(_item)
				// this.infoList = this.infoList.map(e => {
				// 	if (e.messageID === _item.messageID) {
				// 		const _islike = _item.isLike
				// 		const _likeNum = _item.likeNum || 0
				// 		return {
				// 			...e,
				// 			isLike: _islike !== 1 ? 1 : 0,
				// 			likeNum: _islike === 0 ? _likeNum + 1 : _likeNum - 1
				// 		}
				// 	} else {
				// 		return e
				// 	}
				// })
			},
			changeShow() {
				this.popupInfo.show = !this.popupInfo.show
				this.popupInfo.content = ''
			},
			handelSend() {
				const id = uni.getStorageSync('userId');
				const data = {
					id: id,
					content: this.popupInfo.content
				}
				$http('/communicate/send', data).then(res => {
					this.getCollectiveList()
					this.changeShow()
				})
			},
			getCollectiveList() {
				const id = uni.getStorageSync('userId');
				const data = {
					id: id
				}
				console.log(id)
				$http('/communicate/getCollectiveList',data).then(res => {
					console.log(res);
					if (Array.isArray(res.data.data)) {
						this.infoList = res.data.data
					}
				})
			},
			toLike(item) {
				const id = uni.getStorageSync('userId');

				const data = {
					id: id,
					messageID: item.messageID
				}
				$http('/communicate/toLike', data).then(res => {
					this.getCollectiveList()
				})
			},

		}
	}
</script>

<style lang="scss">
	.collective {
		margin: 0 30rpx;
		height: calc(100vh - 240rpx);
		overflow-y: auto;

		.info-block {
			box-shadow: 0 10px 6px -6px rgba(30, 30, 30, 0.1), 12px 0 8px -8px rgba(50, 50, 50, 0.1);
			transition: all .2s ease-in-out;

			.info-block--head {
				margin-left: 20rpx;
				height: 100rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}

			.info-block--body {
				text-indent: 2em;
				margin: 0 30rpx;
				line-height: 55rpx;
			}

			.info-block--footer {
				display: flex;
				justify-content: flex-end;
				height: 100rpx;

				align-items: center;

				.unLiekBox {
					width: 100rpx;
					height: 100rpx;
					background: url(/static/img/like.png) no-repeat;
					background-position: left;
					background-size: cover;

					/* border: 1px solid black; */

				}

				.info-commit {
					width: 36rpx;
					height: 36rpx;
					margin-left: 20rpx;
				}


				.likeBox {
					background-position: right;
					transition: background 0.6s steps(28);
				}
			}
		}

		.info-send {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
		}
	}
</style>
