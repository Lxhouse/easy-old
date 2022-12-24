<template>

	<view>
		<u-subsection :list="list" :current="current" @change="changeTab"></u-subsection>
		<collective v-if="current===0" />
		<article-list v-if="current===1"></article-list>

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
				console.log({
					e
				})
				this.current = e
			}
		}
	}
</script>

<style lang="scss">
	.community-content {
		height: calc(100vh - 240rpx);
		overflow-y: auto;
	}
</style>
