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
				<image :src="item.isLike===0?'/static/img//unLike.png':'/static/img//isLike.png'" mode="aspectFill"
					class="info-commit" @click="handelLike(item)"></image><span
					style='margin-left: 10rpx;'>{{item.likeNum||0}}</span>
				<image src="/static/img/commit.png" mode="aspectFill" class="info-commit"></image><span
					style='margin-left: 10rpx;'>{{item.messageNum||0}}</span>
			</view>
		</view>
		<view class="info-send">
			<u-icon name="plus" color="#000" size="28"></u-icon>
		</view>
	</view>
</template>

<script>
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
				}, {
					messageID: 2,
					name: '我是大牛逼??',
					avaterSrc: '/static/img/people.png',
					content: '这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
					likeNum: 2,
				}, {
					messageID: 3,
					name: '我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content: '这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 1,
					likeNum: 0,
				}, {
					messageID: 4,
					name: '我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content: '这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
					likeNum: 0,
				}],

			};
		},
		mounted() {

		},
		methods: {
			handelLike(_item) {
				this.infoList = this.infoList.map(e => {
					if (e.messageID === _item.messageID) {
						const _islike = _item.isLike
						const _likeNum = _item.likeNum
						return {
							...e,
							isLike: _islike === 0 ? 1 : 0,
							likeNum: _islike === 0 ? _likeNum + 1 : _likeNum - 1
						}
					}else{
						return e
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.collective {
		margin: 0 20rpx;
		height: calc(100vh - 240rpx);
		overflow-y: auto;

		.info-block {
			.info-block--head {
				margin-left: 20rpx;
				height: 100rpx;
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}

			.info-block--body {
				text-indent: 2em;

			}

			.info-block--footer {
				display: flex;
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
