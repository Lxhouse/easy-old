<template>
	<page-meta :root-font-size="`${fontSize}px`"></page-meta>
	<view> <easy-scroll></easy-scroll></view>
	
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		onLoad(option) {
			console.log(123321,uni.getStorageSync('fontSize'))
			this.fontSize=uni.getStorageSync('fontSize')??14
			console.log(option.artId)
			this.getArtDetails(option.artId)
		},	methods: {
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
	.drugs_warp {
		height: 100%;
		background-color: antiquewhite;
		font-size: 30rpx;
	}
</style>
