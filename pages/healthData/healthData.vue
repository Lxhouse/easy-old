<template>
	<view>
		<view class="" v-for="(item,index) in chartDataList">
			<view class="">
				<view
					style="font-size: 40rpx;font-weight: 900;height: 80rpx;display: flex;align-items: center;justify-content: center;">
					{{item.title}}
				</view>
				<charts :type="item.type||'line'" :chartData="{chartData:item.chartData,index:index+'charts'}"></charts>
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
				// uni.request({
				// 	url:'https://yxwdata.huwentec.com/yxw/getData',
				// 	method:'GET',
				// 	// data,
				// 	success:(res)=> {
				// 		// resolve(res)
				// 		this.chartDataList = res.data.data
				// 		console.log( res.data.data)
				// 	},
				// 	fail: (err) => {
				// 		reject(err)
				// 	}
				// })
				const id = uni.getStorageSync('userId');
				const data = {
					id: id,
					date: moment().format('YYYY-MM-DD')
				}
				
				try{
					$http('/parent/getHealthData', data).then(res => {
						if (Array.isArray(res.data.data)) {
							this.chartDataList = res.data.data
						}
					})
				}catch(e){
					//TODO handle the exception
					console.log(e)
				}
			
			}
		}
	}
</script>

<style lang="scss">

</style>
