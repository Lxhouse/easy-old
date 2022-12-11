<template>
	<view class='signin_warp'>
		<zui-calendar :key="upDatakey" :list="list" :isShrink='true' :isUnfold='false' :extraData="extraData"
			@click-active="clickActive" @click-task="clickTask"></zui-calendar>
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
				list: [{
						avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
						title: '整理会议记录文档1',
						time: '45分钟',
						details: '首要任务',
						date: '10:30'
					},
					{
						avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
						title: '整理会议记录文档',
						time: '45分钟',
						details: '首要任务',
						date: '10:30'
					},
					{
						avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
						title: '整理会议记录文档',
						time: '45分钟',
						details: '首要任务',
						date: '10:30'
					}
				],
				extraData: [{
					date: '2022-12-10',
					value: '签到',
					status: true,
					dot: true,
					
				}, {
					date: '2022-12-11',
					value: '未签到',
					status: false,
					dot: true,
				}]
			}
		},
		created() {
			this.getInfo()
		},
		methods: {
			// 点击日数方法
			clickActive({
				year,
				month,
				date,
				index
			}) {
				console.log(year, month, date, index)
			},

			// 点击任务方法
			clickTask({
				row,
				index
			}) {
				console.log(row, index)
			},
			getInfo() {
				const data = {
					id: 1,
					date: moment().format('YYYY-MM-DD')
				}
				$http('/getPlay/CardInfo',{data}).then(res=>{
					this.list=res.list
					this.extraData=res.extraData
				}).catch(
					uni.showToast({
						icon: 'error',
						title: "初始化失败"
					})
				)
			}
		}
	}
</script>

<style lang='scss'>
	.signin_warp {
		/* background-color: #CCFF99; */
	}
</style>
