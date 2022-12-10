<template>
	<view>
		<u-subsection :list="list" :current="current" @change="changeTab"></u-subsection>
		<collective />
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

</style>
