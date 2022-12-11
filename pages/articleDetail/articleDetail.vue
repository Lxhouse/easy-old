<template>
	<view class="article-detail">
		<view class="article-detail__head">{{title}}</view>
		<u-parse :content="content"></u-parse>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	export default {
		data() {
			return {
				title: '这边是写标题的',
				content: `<p>露从今夜白，月是故乡明</p>
					<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />`
			};
		},
		onLoad(option) {
			console.log(option.artId)
		},
		getArtDetails(_id) {
			$http('/communicate/getArtDetails', {
				artId: _id
			}).then(res => {
				this.title = res.title
				this.content = res.content
			})
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
