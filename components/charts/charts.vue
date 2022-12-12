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