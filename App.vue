<script>
	export default {
		onInit() {
				uni.setStorageSync('fontSize', 14)	
		},
		onLaunch: function() {
	
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>


<style lang="scss">
	/*每个页面公共css */
	@import "uni_modules/uview-ui/index.scss";
</style>
