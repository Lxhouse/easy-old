<template>
	<view class="article-detail">
		<view class="article-detail__head">大标题</view>
		<u-parse :content="content"></u-parse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
content:`<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />`
			};
		},
		onLoad(option) {
			console.log(option.artId)
		}
	}
</script>

<style lang="scss">
	.article-detail {
		margin: 0 30rpx;
		height: calc(100vh - 240rpx);
		overflow-y: auto;
		&__head {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			font-size: 50rpx;
			margin-bottom: 30rpx;
		font-weight: 900;	
		}
	}
</style>
