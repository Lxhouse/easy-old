<template>
	<view class="collective">
		<view class="info-block">
			<view class="info-block--head">
				<u-avatar :src="src" shape="circle" size="30"></u-avatar>
				<span style="margin-left: 20rpx;">戴尼维布鲁斯</span>
			</view>
			<view class="info-block--body">
				<view class="">核对货物的黑u发hi大家都拿出当年的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"collective",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.collective{
	.info-block{
	.info-block--head{
		margin-left: 20rpx;
		height: 100rpx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}	
	}
}
</style>