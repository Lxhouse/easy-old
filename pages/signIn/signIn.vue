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
				list: [],
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
				$http('/parent/signBitMap',{data}).then(res=>{
					if(Array.isArray(res.extraData)){
						this.extraData=res.extraData
					}
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
