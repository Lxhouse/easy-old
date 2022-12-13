<template>
	<view>
		<view class="n-chart_warp--inline">
			<qiun-data-charts :type="type" :chartData="newChartData" :opts="opts" :canvasId="chartData.index"
				touch="true" />
		</view>
	</view>
</template>

<script>
	export default {
		name: "charts",
		props: ['type', 'chartData'],
		data() {
			return {
				newChartData: {},
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
		created() {
			console.log(123321, this.chartData, this.chartData.index)
		},
		watch: {
			chartData: function(_value) {
				this.newChartData = _value.chartData || {}
			}
		}

	}
</script>

<style lang="scss">

</style>
