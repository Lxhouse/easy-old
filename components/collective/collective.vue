<template>
	<view class="collective">
		<view class="info-block" v-for="item in infoList">
			<view class="info-block--head" >
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
				<image src="/static/img//unLike.png" mode="aspectFill" class="info-commit"></image>
				<image src="/static/img/commit.png" mode="aspectFill" class="info-commit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "collective",
		data() {
			return {
				infoList: [{
					userId: 1,
					name:'我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content:'这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
				},{
					userId: 2,
					name:'我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content:'这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
				},{
					userId: 3,
					name:'我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content:'这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
				},{
					userId: 4,
					name:'我是大牛逼',
					avaterSrc: '/static/img/people.png',
					content:'这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的,这是用来测试发送的',
					isLike: 0,
				}],

			};
		},
		mounted() {

		},
		methods: {
			onLike() {
				this.isLike = !this.isLike
			}
		}
	}
</script>

<style lang="scss">
	.collective {
		margin: 0 20rpx;

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
	}
</style>
