<template>

	<view class="article-list__warp">
		<view class="article-list__item" v-for="item in articleList">
			<view class="article-list__head">{{item.title}}</view>
			<view class="article-list__body">
				<view class="article-list__body--text">
					{{item.introduce}}
				</view>
				<image :src="item.imgUrl" v-if="item.imgUrl" mode="aspectFill"
					style="width: 180rpx;height: 180rpx;border-radius: 20rpx;"></image>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: "article-list",
		data() {
			return {
				articleList: [{
					artId: 1,
					title: '没错这是一个！标题！！',
					imgUrl: '../../static/img/people.png',
					introduce: '测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi'
				}, {
					artId: 1,
					title: '没错这是一个！标题！！',
					imgUrl: '../../static/img/people.png',
					introduce: '测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi'
				}, {
					artId: 1,
					title: '没错这是一个！标题！！',
					imgUrl: '../../static/img/people.png',
					introduce: '测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi测试是皇测试是皇上为何测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克测试是皇测试是皇上为何独克测试是皇上为何独克测试是皇上为何独克上为何独克独克测试是皇上为何独克测试是皇上为何独克上为何独克hi'
				}]
			};
		}
	}
</script>

<style lang="scss">
	.article-list__warp {
		margin: 10rpx 30rpx;
		height: calc(100vh - 240rpx);
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		// justify-content: center;

		.article-list__item {
			height: 300rpx;
			width: 90vw;
			border: 1px #ccc dotted;
			border-radius: 20rpx;
			margin-bttom: 30rpx;
			padding: 20rpx;
			box-shadow: 10rpx 10rpx 10rpx #cdcfcf;

			.article-list__head {
				height: 80rpx;
				display: flex;
				// margin-left: 30rpx;
				justify-content: flex-start;
				align-items: center;
				font-size: 40rpx;
				font-weight: 700;
				border-bottom: 1px solid #ccc;
			}

			.article-list__body {
				display: grid;
				grid-template-columns: auto 200rpx;
				align-items: center;
				height: 200rpx;

				&--text {
					margin-top: 20rpx;
					height: 200rpx;
					// display: flex;
					text-indent: 2em;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 5;
					line-clamp: 5;
					-webkit-box-orient: vertical;
				}
			}
		}
	}
</style>
