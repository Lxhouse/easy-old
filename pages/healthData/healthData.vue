<template>
	<view>
		<view class="" v-for="item in chartDataList">
			<view class="">
				<view
					style="font-size: 40rpx;font-weight: 900;height: 80rpx;display: flex;align-items: center;justify-content: center;">
					{{item.title}}</view>
				<charts :type="item.type||'line'" :chartData="item.chartData"></charts>
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
				chartDataList: [{
					title: '数据名称',
					type: 'column',
					chartData: {
						categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
						series: [{
								name: '血压',
								data: [35, 36, 31, 33, 13, 34]
							},
							{
								name: '血氧',
								data: [18, 27, 21, 24, 6, 28]
							}
						]
					},

				}, {
					title: '数据名称',
					type: 'line',
					chartData: {
						categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
						series: [{
								name: '血压',
								data: [35, 36, 31, 33, 13, 34]
							},
							{
								name: '血氧',
								data: [18, 27, 21, 24, 6, 28]
							}
						]
					},

				}]
			};
		},
		created() {
			this.getHealthData()
		},
		methods: {
			getHealthData() {
				const data = {
					id: 1,
					date: moment().format('YYYY-MM-DD')
				}
				$http('/parent/getHealthData', data).then(res => {
					if (Array.isArray(res)) {
						this.chartDataList = res
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

<style lang="scss">

</style>
