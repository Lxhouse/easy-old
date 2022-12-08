<template>
<view class='signin_warp'>
<zui-calendar :key="upDatakey" :list="list":isShrink='true' :isUnfold='false' :extraData="extraData" @click-active="clickActive" @click-task="clickTask"></zui-calendar>
</view>
</template>

<script>
/*  */
export default {
    data() {
        return {
            list: [
                {
                    avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
                    title: '整理会议记录文档1',
                    time: '45分钟',
                    details:'首要任务',
                    date: '10:30'
                },
                {
                    avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
                    title: '整理会议记录文档',
                    time: '45分钟',
                    details:'首要任务',
                    date: '10:30'
                },
                {
                    avatar: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/6acec660-4f31-11eb-a16f-5b3e54966275.jpg',
                    title: '整理会议记录文档',
                    time: '45分钟',
                    details:'首要任务',
                    date: '10:30'
                }
            ],
            upDatakey: '',//为重新渲染DOM值，入不需要则可取消
            extraData:[{date: '2022-7-20', value: '签到', status: true, dot: true, active: false},{date: '2022-7-19', value: '未签到', status: false, dot: true, active: true}]
        }
    },
    methods: {
        // 点击日数方法
        clickActive({year, month, date, index}){
            console.log(year, month, date, index)
        },

        // 点击任务方法
        clickTask({row, index}){
            console.log(row, index)
        }
    }
}
</script>

<style lang='scss'>
.signin_warp{
		/* background-color: #CCFF99; */
	}
</style>
