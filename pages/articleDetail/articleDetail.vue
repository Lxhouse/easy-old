<template>
	<page-meta :root-font-size="`${fontSize}px`"></page-meta>
	<view class="article-detail">
		<view class="article-detail__head">{{title}}</view>
		<u-button type="primary" text="语音播报" @click="speak"></u-button>
		<u-parse  class="article-detail__body" :content="content"></u-parse>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	import Speech from 'speak-tts'
	export default {
		data() {
			return {
				title: '标题',
				content: `<H1>测试测试</H1><span>我最牛逼，我是超级无敌牛逼的！！！！s<span>`,
				fontSize:14,
				  speech:null,
			};
		},
		onLoad(option) {
			console.log(123321,uni.getStorageSync('fontSize'))
			this.fontSize=uni.getStorageSync('fontSize')??14
			console.log(option.artId)
			this.getArtDetails(option.artId)
		},
		mounted() {
		  this.speechInit();	
		},
		methods: {
			getArtDetails(_id) {
				$http('/communicate/getArtDetailsById', {
					artId: _id
				}).then(res => {
					console.log(res.data.data)
					this.title = res.data.data.title
					this.content = res.data.data.content
				})
			},
			speechInit(){
			     this.speech = new Speech();
			     this.speech.setLanguage('zh-CN');
			     this.speech.init().then(()=>{
			        console.log('语音播报初始化完成...')
			      })
			   },
			   
			   //语音播报
			   speak(){
			     this.speech.speak({text:this.content}).then(()=>{
			       console.log("播报完成...")
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
