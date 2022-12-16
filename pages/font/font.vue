<template>
	<view class="font_warp">
		<view :style="`font-size:${fontSize}px`" class="font_text"> <text style="">字体大小{{fontSize}}</text></view>
		<view class="font_slider">	<u-slider v-model="fontSize" min="10" step="2" max="40"></u-slider></view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fontSize: 40 
			};
		}
	}
</script>

<style lang="scss">
	.font_warp {
		margin: 0 30rpx;
		width: 100%;
		height: calc(100vh - 90rpx);
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
