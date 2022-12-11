<template>
	<view>
		<u-subsection :list="list" :current="current" @change="changeTab"></u-subsection>
		<!-- <view class="community-content"> -->
				<collective />
		<!-- </view> -->
<!-- 	<view class="community-content">
		
	</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['社区', '文章'],
				current: 0
			}
		},
		methods: {
			changeTab(e) {
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
.community-content{
	height: calc(100vh - 240rpx);
	overflow-y: auto;
}
</style>
