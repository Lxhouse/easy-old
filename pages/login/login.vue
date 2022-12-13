<template>
	<view class="login__warp">
		<view class="">
			<view class="login_img ">
				<image src="@/static/img/logo.png" mode="aspectFit" style="width: 200rpx;height: 200rpx;"></image>
				<view style="font-weight: 900;">易老APP</view>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;">账号：</view>
				<u--input border="surround" v-model="name"></u--input>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;">密码：</view>
				<u--input border="surround" v-model="password" password></u--input>
			</view>
			<view class="login_item">
				<u-button type="success" class="btn" text="登录" @click="toLogin"></u-button>
				<u-button type="primary" class="btn" text="去注册" @click="goRegistered"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	export default {
		data() {
			return {
				name: '',
				password: '',
				tips: '',
			};
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					$http('/admin/sendCode', {
						phone: this.name
					}).then(res => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						uni.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					})

				} else {
					uni.$u.toast('倒计时结束后再发送');
				}
			},
			isMobile(mobile) {
				return /^1[3-9]\d{9}$/.test(mobile)
			},
			toLogin() {
				console.log(!this.isMobile(this.name) , this.password==='')
				if ( this.password==='') {
					uni.showToast({
						title: '请确认密码',
						icon: 'error'
					})
				} else {
					$http('/admin/login', {
						userName: this.name,
						pwd: this.password
					}).then(res => {
						// 存和取
						// 存 id 和 role
						try {
							uni.setStorageSync('userId', res.data.data.userId);
							uni.setStorageSync('role', res.data.data.role);
							console.log(this.role);
							console.log(this.userId);
							
							if (uni.getStorageSync('role') === 'parent') {
								uni.navigateTo({
									url: '/pages/health/health'
								})
							} else if (uni.getStorageSync('role') === 'child') {
								uni.navigateTo({
									url: '/pages/offspring/offspring'
								})
							}
						} catch (e) {
							// error
							console.log(e)
						}
					}).catch(err => {
						uni.showToast({
							title: '登录失败',
							icon: 'error'
						})
					})
				}

			},
			goRegistered() {
				uni.navigateTo({
					url: '/pages/registered/registered'
				})
			}
		}
	}
</script>

<style lang="scss">
	.login__warp {
		display: flex;
		flex-direction: column;
		margin: 0 30rpx;
		height: calc(100vh - 240rpx);
		align-items: center;
		justify-content: center;

		.login_img {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 30rpx;
		}

		.login_item {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 20rpx;
			width: 80vw;
		}

		.btn {
			width: 280rpx;
		}
	}
</style>
