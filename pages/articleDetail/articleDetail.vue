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
				title: '',
				content: ``
			};
		},
		onLoad(option) {
			console.log(option.artId)
			this.getArtDetails(option.artId)
		},
		methods: {
			getArtDetails(_id) {
				$http('/communicate/getArtDetails', {
					artId: _id
				}).then(res => {
					console.log(res.data.data)
					this.title = res.data.data.title
					this.content = res.data.data.content
				})
			}
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
