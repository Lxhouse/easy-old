<template>
	<view class="font_warp">
		<view :style="`font-size:${fontSize}px`" class="font_text"> <text style="">字体大小{{fontSize}}</text></view>
		<view class="font_slider">	<u-slider v-model="fontSize" min="10" step="1" max="22"></u-slider></view>
		<u-button style="width: 200rpx;margin-top: 30rpx;" type="success" text="确定修改" @click="changeSize"></u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fontSize: 14
			};
		},onLoad() {
			this.fontSize=uni.getStorageSync('fontSize')||14
		},
		methods:{
			changeSize(){
				uni.setStorageSync('fontSize',this.fontSize);
				uni.showToast({
					text:'修改成功',
					icon:'success'
				})
			}
		}
	}
</script>

<style lang="scss">
	.font_warp {
		width: 100%;
		height: calc(100vh - 240rpx);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.font_text{
		width: 500rpx;
		height: 500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.font_slider{
		width: 100%;
		// display: flex;
		// align-items: center;
		// justify-content: center;
	}
</style>
