<template>
	<view>
		<view class="n-chart_warp--inline">
			<qiun-data-charts :type="type" :chartData="chartData" :opts="opts"
				:ontouch="true" :canvas2d="true"  />
		</view>
	</view>
</template>

<script>
	export default {
		name:"charts",
		props:['type','chartData'],
		data() {
			return {
				// chartData: {
				// 	categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
				// 	series: [{
				// 			name: '血压',
				// 			data: [35, 36, 31, 33, 13, 34]
				// 		},
				// 		{
				// 			name: '血氧',
				// 			data: [18, 27, 21, 24, 6, 28]
				// 		}
				// 	]
				// },
				opts: {
					dataLabel: false,
					canvas2d: true,
					padding: [15, 10, 5, 15],
					legend: {
						position: "top",
						margin: 10
					},
					extra: {
						line: {
							type: "curve",
							width: 2
						},
						area: {
							type: "curve",
							width: 2
						},
						column: {
							width: 7,
							barBorderCircle: true,
						}
					},
				},
			};
		},
	
	}
</script>

<style lang="scss">

</style>