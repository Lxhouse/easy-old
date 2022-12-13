<template>
	<view class="login__warp">
		<view class="">
			<view class="login_img ">
				<image src="@/static/img/logo.png" mode="aspectFit" style="width: 200rpx;height: 200rpx;"></image>
				<view style="font-weight: 900;">易老APP</view>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;width: 120rpx;">姓名：</view>
				<u--input border="surround" v-model="info.name"></u--input>
			</view>


			<view class="login_item">
				<view style="font-weight: 900;width: 120rpx;">身份证：</view>
				<u--input border="surround" v-model="info.idCard"></u--input>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;width: 120rpx;">手机号：</view>
				<u--input border="surround" v-model="info.phone"></u--input>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;width: 120rpx;">密码：</view>
				<u--input border="surround" v-model="info.pwd" password></u--input>
			</view>
			<view class="login_item">
				<view style="font-weight: 900;width: 120rpx;">验证码：</view>
				<u--input border="surround" v-model="code">
					<template slot="suffix">
						<u-code ref="uCode" @change="codeChange" seconds="60" changeText="X秒重新获取"></u-code>
						<u-button @tap="getCode" :text="tips" :disabled="!isMobile(info.phone)" type="success" size="mini">
						</u-button>
					</template>
				</u--input>
			</view>
			<view class="login_item">
				<u-button type="success" class="btn" text="注册" @click="toRegistered"></u-button>
				<u-button type="primary" class="btn" text="去登录" @click="goLogin"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
	import moment from 'moment'
	export default {
		data() {
			return {
				info: {
					name: '',
					pwd: '',
					idCard: '',
					role: 'parent',
					correctCode: '',
					date: moment().format('YYYY-MM-DD')
				},
				code: '',
				tips: '',
				range: [{
						value: 'parent',
						text: "父母"
					},
					{
						value: 'child',
						text: "子女"
					},
				],

			};
		},	mounted() {
			let a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none';
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
						phone: this.info.phone
					}).then(res => {
						uni.hideLoading();
						this.correctCode = res
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
			toRegistered() {
				if (this.code != this.correctCode.data.data) {
					console.log(this.code);
					console.log(this.correctCode);
					uni.showToast({
						title: '请确认验证码',
						icon: 'error'
					})
				} else {
					let flag = true;
					for (var key in this.ruleForm) {
						if (!this.ruleForm[key]) {
							flag = false
						};
					}
					if (flag) {
						$http('/admin/registerAccount', this.info,'POST').then(res => {
							uni.showToast({
								title: '注册成功',
							})
							this.goLogin()
						})
					} else {
						uni.showToast({
							title: '请确保每一项都填写完毕',
							icon: 'error'
						})
					}

				}

			},
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
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
