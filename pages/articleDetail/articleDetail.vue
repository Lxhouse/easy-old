<template>
	<page-meta :root-font-size="'24px'"></page-meta>
	<view class="article-detail">
		<view class="article-detail__head">{{title}}</view>
		<u-parse  class="article-detail__body" :content="content"></u-parse>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	export default {
		data() {
			return {
				title: '这个是标题呀兄弟',
				content: `<H1>测试测试</H1><span>我最牛逼，我是超级无敌牛逼的！！！！s<span>`
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
		height: calc(100vh - 90rpx);
		overflow-y: auto;

		&__head {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			font-size: 2rem;
			margin-bottom: 30rpx;
			font-weight: 900;
		}

		&__body {
			font-size: 1rem;
		}
	}
</style>
