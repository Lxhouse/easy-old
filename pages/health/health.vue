<template>
	<view class="health_warp">
		<view class="itemBox">
			<view class="titleBox u-flex" style="border: none;padding-bottom: 50rpx;">
				<view class="title">功能与服务</view>
			</view>
			<u-grid :col="3" :border="false">
				<u-grid-item v-for="(item,index) in moreFun" :key="index" @click="navClick(item.onPlate)">
					<view class="u-flex u-p-t-30 u-p-b-30"
						style="position: relative;display:flex;align-items: center;flex-direction: column;font-weight: 900; column;justify-content: center;margin-bottom: 40rpx;">
						<image style="width: 70rpx;height: 70rpx;" :src="item.icon" />
						<view class="grid-text" style="color: #666;font-size: 22rpx;">{{item.word}}</view>
					</view>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="clockIn" @click="handleClock">
			<button :class="{clockBtn:true,wanc:!isClock,succeed:isClock} ">{{clockBtnText}}</button>
		</view>

		<!-- <u-button type="primary" text="退出登录" @click="unLogin"></u-button> -->
		<u-popup :show="show&&isClock" @close="changeShow" mode="right" customStyle="width:700rpx">
			<view style="margin-top: 30rpx;margin-left: 30rpx;overflow: auto;height: 96vh;width: 600rpx;">
				<view style="font-weight: 900;">请填写健康信息：</view>
				<u-form labelPosition="left">
					<u-form-item label="血压" prop="healthInfo.blood" borderBottom>
						<u--input v-model="healthInfo.blood" border="none" placeholder="请输入" >
							<template slot="suffix">mmHg</template>
						</u--input>
					</u-form-item>
					<u-form-item label="血糖" prop="healthInfo.bloodSugar" borderBottom>
						<u--input v-model="healthInfo.bloodSugar" border="none" placeholder="请输入">	<template slot="suffix">mmol/L</template></u--input>
					</u-form-item>
					<u-form-item label="已爬楼层" prop="healthInfo.floor" borderBottom>
						<u--input v-model="healthInfo.floor" border="none" placeholder="请输入"><template slot="suffix">层</template></u--input>
					</u-form-item>
					<u-form-item label="心跳" prop="healthInfo.heart" borderBottom>
						<u--input v-model="healthInfo.heart" border="none" placeholder="请输入"><template slot="suffix">次/分</template></u--input>
					</u-form-item>
					<u-form-item label="活动能量" prop="healthInfo.playEnergy" borderBottom>
						<u--input v-model="healthInfo.playEnergy" border="none" placeholder="请输入"><template slot="suffix">千卡</template></u--input>
					</u-form-item>
					<u-form-item label="静息能量" prop="healthInfo.restingEnergy" borderBottom>
						<u--input v-model="healthInfo.restingEnergy" border="none" placeholder="请输入"><template slot="suffix">千卡</template></u--input>
					</u-form-item>
					<u-form-item label="睡眠时长" prop="healthInfo.sleep" borderBottom>
						<u--input v-model="healthInfo.sleep" border="none" placeholder="请输入"><template slot="suffix">小时</template></u--input>
					</u-form-item>
					<u-form-item label="步数" prop="healthInfo.steps" borderBottom>
						<u--input v-model="healthInfo.steps" border="none" placeholder="请输入"><template slot="suffix">步</template></u--input>
					</u-form-item>
					<u-form-item label="步行层数" prop="healthInfo.stepsLength" borderBottom>
						<u--input v-model="healthInfo.stepsLength" border="none" placeholder="请输入"><template slot="suffix">层</template></u--input>
					</u-form-item>
					<u-form-item label="步行速度" prop="healthInfo.stepsSpeed" borderBottom>
						<u--input v-model="healthInfo.stepsSpeed" border="none" placeholder="请输入"><template slot="suffix">公里/时</template></u--input>
					</u-form-item>
					<u-form-item label="温度" prop="healthInfo.temper" borderBottom>
						<u--input v-model="healthInfo.temper" border="none" placeholder="请输入"><template slot="suffix">℃</template></u--input>
					</u-form-item>
					<u-form-item label="体重" prop="healthInfo.weight" borderBottom>
						<u--input v-model="healthInfo.weight" border="none" placeholder="请输入"><template slot="suffix">kg</template></u--input>
					</u-form-item>
					<u-button type="success" text="确定" @click="handelForm"></u-button>
					<u-button type="primary" text="暂存" @click="changeShow" style='margin-top: 30rpx;'></u-button>
				</u-form>
			</view>

		</u-popup>

		<u-popup :show="infoShow" @close="changeInfoShow" mode="left" customStyle="width:700rpx">
			<view style="margin-top: 30rpx;margin-left: 30rpx;overflow: auto;height: 96vh;width: 600rpx;">
				<view style="font-weight: 900;">请填写个人信息：</view>
				<u-form labelPosition="left">
					<u-form-item label="年龄" prop="personalInfo.age" borderBottom>
						<u--input v-model="personalInfo.age" border="none" placeholder="请输入">	<template slot="suffix">岁</template></u--input>
					</u-form-item>
					<u-form-item label="血压范围" prop="personalInfo.bloodScope" borderBottom>
						<u--input v-model="personalInfo.bloodScope" border="none" placeholder="请输入">	<template slot="suffix">mmHg</template>
						</u--input>
					</u-form-item>
					<u-form-item label="有无慢性疾病" prop="personalInfo.chroIll" borderBottom>
						<u-radio-group v-model="personalInfo.chroIll" @change="e=>personalInfo.chroIll===e">
							<u-radio   label="有" :name="1"> </u-radio>
							<u-radio style="margin-left: 20rpx;" label="无" :name="0"> </u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="有无医生诊断报告" prop="personalInfo.healthImg" borderBottom>
						<u-radio-group v-model="personalInfo.healthImg" @change="e=>personalInfo.healthImg===e">
							<u-radio label="有" :name="1"> </u-radio>
							<u-radio   style="margin-left: 20rpx;" label="无" :name="0"> </u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="健康等级" prop="personalInfo.healthLevel" borderBottom>
						<u-radio-group v-model="personalInfo.healthLevel" @change="e=>personalInfo.healthLevel===e">
							<u-radio label="健康" :name="2"> </u-radio>
							<u-radio   style="margin-left: 20rpx;"  label="良好" :name="1"> </u-radio>
							<u-radio   style="margin-left: 20rpx;"  label="差" :name="0"> </u-radio>
						</u-radio-group>
					</u-form-item>
					<u-form-item label="心率范围" prop="personalInfo.heartScope" borderBottom>
						<u--input v-model="personalInfo.heartScope" border="none" placeholder="请输入"><template slot="suffix">次/每分</template>
						</u--input>
					</u-form-item>
					<u-form-item label="身高" prop="personalInfo.height" borderBottom>
						<u--input v-model="personalInfo.height" border="none" placeholder="请输入">	<template slot="suffix">米</template>
						</u--input>
					</u-form-item>
					<u-form-item label="体重" prop="personalInfo.weight" borderBottom>
						<u--input v-model="personalInfo.weight" border="none" placeholder="请输入">	<template slot="suffix">斤</template>
						</u--input>
					</u-form-item>
					<u-form-item label="有无病史" prop="personalInfo.medicalHistory" borderBottom>
						<u-radio-group v-model="personalInfo.medicalHistory" @change="e=>personalInfo.medicalHistory===e">
							<u-radio label="有" :name="1"> </u-radio>
							<u-radio   style="margin-left: 20rpx;" label="无" :name="0"> </u-radio>
						</u-radio-group>
					</u-form-item>			
					<u-button type="success" text="确定" @click="addPersonInfo"></u-button>
				</u-form>
			</view>

		</u-popup>
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
				clockBtnText: "未打卡",
				isClock: true,
				show: false,
				infoShow: true,
				personalInfo: {},
				healthInfo: {
					blood: '',
					bloodSugar: '',
					floor: '',
					heart: '',
					playEnergy: '',
					restingEnergy: '',
					sleep: '',
					steps: '',
					stepsLength: '',
					stepsSpeed: '',
					temper: '',
					weight: '',
					userId: uni.getStorageSync('userId')
				},
				personalInfo:{
					age:'',
					bloodScope:'',
					chroIll:0,
					date:new moment(),
					healthImg:0,
					healthLevel:0,
					heartScope:'',
					height:'',
					weight:'',
					medicalHistory:0,
					userId: uni.getStorageSync('userId')
				},
				moreFun: [{
						icon: '/static/img/time.png',
						word: '打卡信息',
						onPlate: 'punchInformation',
					}, {
						icon: '/static/img/data.png',
						word: '健康数据',
						onPlate: 'healthData',
					}, {
						icon: '/static/img/chart.png',
						word: '智能问答',
						onPlate: 'goCashCouponList',
					},
					{
						icon: '/static/img/query.png',
						word: '药品查询',
						onPlate: 'onHelp',
					},
					{
						icon: '/static/img/entertainment.png',
						word: '娱乐',
						onPlate: 'happy',
					},
					{
						icon: '/static/img/font.png',
						word: '字体调整',
						onPlate: 'font',
					},
					{
						icon: '/static/img/logout.png',
						word: '退出',
						onPlate: 'logout',
					},
				],



			};
		},
		created() {
			this.getCardInfo();
			this.chackPersonInfo();
		},
		methods: {
			navClick(e) {
				if (e == 'healthData') {
					uni.navigateTo({
						url: '/pages/healthData/healthData'
					})
				} else if (e == 'punchInformation') {
					uni.navigateTo({
						url: '/pages/signIn/signIn'
					})
				} else if (e === 'goCashCouponList') {
					uni.navigateTo({
						url: '/pages/charts/charts'
					})
				} else if (e === 'onHelp') {
					uni.navigateTo({
						url: '/pages/drugs/drugs'
					})
				} else if (e === 'happy') {
					uni.navigateTo({
						url: '/pages/community/community'
					})
				} else if (e === 'logout') {
					uni.redirectTo({
						url: '/pages/login/login'
					})
					uni.clearStorageSync()
				} else if (e === 'font') {
					uni.navigateTo({
						url: '/pages/font/font'
					})

				}
			},
			getCardInfo() {
				const id = uni.getStorageSync('userId');
				const req = {
					id: id,
					date: moment().format('YYYY-MM-DD')
				}
				$http('/parent/checkDailyInfo', req).then(
					res => {
						console.log(res.data.data)
						if (res.data.data) {
							this.isClock = false
							this.clockBtnText = "已打卡"
						} else {
							this.isClock = true
							this.clockBtnText = "未打卡"
						}
					}
				)
			},
			handleClock() {
				this.changeShow()

			},
			changeShow() {
				this.show = !this.show
			},
			changeInfoShow() {
				this.infoShow = !this.infoShow
			},
			handelForm() {
				$http('/parent/addDailyInfo', this.healthInfo, "POST").then(
					res => {
						this.healthInfo = {
							blood: '',
							bloodSugar: '',
							floor: '',
							heart: '',
							playEnergy: '',
							restingEnergy: '',
							sleep: '',
							steps: '',
							stepsLength: '',
							stepsSpeed: '',
							temper: '',
							weight: '',
							userId: ''
						}
						this.isClock = false;
						this.clockBtnText = '已打卡'
						uni.showToast({
							title: '打卡成功'
						})
					}
				).catch(err => {
					uni.showToast({
						icon: 'error',
						title: "打卡失败"
					})
					console.log(err)
				}).finally(() => this.changeShow())


			},chackPersonInfo(){
				const id = uni.getStorageSync('userId');
				const req = {
					userId: id,
				}
				$http('/parent/checkUserInfo',req,'GET').then(res=>{
					if(res.data.data===false){
						this.changeInfoShow()
					}
				})
			},addPersonInfo(){
				$http('/admin/addOrUpdateUserInfo',this.personalInfo,"POST").then(res=>{
					this.changeInfoShow()
					uni.showToast({
						icon:'success'
					})
				}).catch(()=>{
					uni.showToast({
						icon:'error'
					})
				})
			}

		}
	}
</script>
<style lang="scss">
	.health_warp {

		height: 100%;
		padding: 10rpx;

		.itemBox {
			background: #fff;
			padding: 0 24rpx;
			border-radius: 20rpx;
			overflow: hidden;
			margin-top: 24rpx;
			margin-bottom: 24rpx;

			.titleBox {
				padding: 32rpx 0;
				border-bottom: 1rpx solid #eee;


				.title {
					font-size: 28rpx;
					font-weight: bold;
				}

				.word {
					font-size: 24rpx;
					color: #999;
				}
			}

			.grid-text {
				font-size: 24rpx;
				color: #333;
				padding-top: 10rpx;
			}
		}

		.clockIn {
			height: 400rpx;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			.clockBtn {
				width: 400rpx;
				height: 400rpx;
				margin-top: 20%;
				border-radius: 50%;
				text-align: center;
				text-align: center;
				line-height: 400rpx;
				font-size: 60rpx;
				cursor: pointer;
				// border: 1px solid #fff;

			}

			.succeed {
				color: #fff;
				background-color: $uni-color-success;
				box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
				/*线性渐变语法：
	    background-image:-webkit-gradient(type,x1 y1, x2 y2, from(开始颜色值),to(结束颜色值), [color-stop(偏移量小数,停靠颜色值),…] );
	        type:line   -->表示渐变为线性
	        x1,x2,y1,y2     -->渐变坐标，x1=x2垂直变换,y1=y2左右变换
	    */
				background-image: -webkit-gradient(linear, left top, left bottom, from(#33CC66), to($uni-color-success));
				/*上下垂直渐变*/

				/*规定动画变换速度：ease-in-out -->动画以低速开始和结束 */
				-webkit-animation-timing-function: ease-in-out;

				/*为 @keyframes 动画规定一个名称*/
				-webkit-animation-name: submit;

				/*完成一个动画所需时间*/
				-webkit-animation-duration: 2500ms;

				/*规定动画播放次数：infinite为无限次*/
				-webkit-animation-iteration-count: infinite;

				/*规定动画播放方式：alternate为轮流反向播放*/
				-webkit-animation-direction: alternate;
			}

			.wanc {
				background-color: dodgerblue;
				color: #fff;
			}

			@-webkit-keyframes submit {
				0% {
					opacity: .5;
					/*元素不透明级别*/
					box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
				}

				100% {
					opacity: 1;
					// border: 1px solid rgba(51, 153, 0, 2);
					box-shadow: 0 1px 30px rgba(51, 153, 0, 2);
				}
			}
		}
	}
</style>
