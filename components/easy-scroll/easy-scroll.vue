<template>
	<view >	<u-modal :show="show" title="药品详情" :content='content' @close="closeShow" @confirm="closeShow">
	<text class="modalSty" style="font-size: 1rem;">{{content}}<u-button style="margin-top: 30rpx;" type="primary" text="语音播报" @click="speak"></u-button></text>
	</u-modal>
    <view class="container">
        <view class="nav-list">
            <view class="nav-item"
                v-for="(item,index) of list" 
                :class="{active:index==viewNavIndex}"
                @click="handleClickNav(index)"
                :key="index">{{item.itemClassName}}
			</view>
        </view>
        <view class="list-wrapper">
            <scroll-view class="list-container" id="list-container"
                @scroll="handleListScroll"
                @touchstart="handleTouchScrollView"
                :scroll-y="true" 
                :scroll-into-view="'scroll-item-'+clickedNavIndex" 
                :show-scrollbar="false"
                :scroll-with-animation="true">
                <view class="list" v-for="(item,listIndex) of list" :key="listIndex" :id="'scroll-item-'+listIndex">
                    <view class="title"><text>{{item.itemClassName}}-对应内容</text></view>
                    <view class="item-container">
                        <view class="item" v-for="(itemTwo,index) of item.drugList" :key="index" @click="getdetail(itemTwo)">
                            <image :src="itemTwo.img" mode=""></image>
                            <view class="name">{{itemTwo.name}}</view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
		</view>
    </view>
</template>

<script>
	import {
		$http
	} from '@/serve/request.js'
import Speech from 'speak-tts'
export default {
    name: 'easy-scroll',
    props:{
        topDistance:{
            type: Number,
            default:0
        }
    },
    data() {
        return {
            list:[{itemClassName:'发烧药',drugList:[{img:'/static/img/chart.png',name:'牛逼药'},{img:'/static/img/chart.png',name:'牛逼药'}]},{itemClassName:'感冒药',drugList:[{img:'/static/img/chart.png',name:'牛逼药'},{img:'/static/img/chart.png',name:'牛逼药'}]}],
            isTouchScrollView: false,
            clickedNavIndex: 0,
            viewNavIndex: 0,
            nodeInfoList: [],
			show:false,
			
      speech:null,
			content:'降低说几句窦娥hi有五个发热回复降低说几句窦娥hi有五个发热回复降低说几句窦娥hi有五个发热回复1'
        }
    },
	created() {
		this.getDrugList()
	},
    methods:{
        init(){
            const query = uni.createSelectorQuery().in(this);
            query.selectAll('#list-container .list').boundingClientRect(data => {
                // console.log(data);
                this.nodeInfoList = data
            }).exec()
        },
        handleClickNav(nav){
            if(!this.isTouchScrollView&&this.clickedNavIndex == nav) return;
            // 锁定联动
            this.isTouchScrollView = false;
            // 解决clickedNavIndex相同触发更新失败
            if(this.clickedNavIndex == nav){
                this.clickedNavIndex = -1;
            }
            this.$nextTick(function(){
                this.clickedNavIndex = nav;
                this.viewNavIndex = nav
            })
        },
        handleListScroll(e){
            if(!this.isTouchScrollView) return;
            let scrollTop = this.scrollTop = e.detail.scrollTop;
            // console.log("scrollTop: " + scrollTop);
            let currentNavIndex = this.nodeInfoList.map((item,index)=>({index,...item}))
            .filter(item => item.top <= scrollTop + this.topDistance)
            .sort((a,b)=>b.top-a.top)[0].index;
            // console.log(currentNavIndex);
            this.viewNavIndex = currentNavIndex;
        },
        handleTouchScrollView(){
            this.isTouchScrollView = true;
        },
		getDrugList(){
			$http('/parent/getDrugList').then(res=>{
				console.log(res.data.data)
				this.list=res.data.data
			})
		},getdetail(item){
			
		item?.drugId&&$http('/parent/getDrugInfo',{drugId:item?.drugId}).then(res1=>{
			const res=res1.data.data;
				this.show=true;
				this.content=`${res.medName}是${res.prescription}是由${res.mainComponent}组成的，
				通常它的售卖单价是${res.price}元`
			})
		},closeShow(){
			this.show=false
		},
		speechInit(){
		     this.speech = new Speech();
		     this.speech.setLanguage('zh-CN');
		     this.speech.init().then(()=>{
		        console.log('语音播报初始化完成...')
		      })
		   },
		   
		   //语音播报
		   speak(){
		     this.speech.speak({text:this.content}).then(()=>{
		       console.log("播报完成...")
		     })
		   }
		
		
    },
    mounted() {
        this.$nextTick(function(){
            this.init()
        }),
		  this.speechInit();
    }
}
</script>

<style lang="stylus" scoped>
.container
    display flex
    height calc(100vh - var(--window-top))
    .nav-list
        width: 160rpx;
        border-right: 2rpx solid #efefef;
        overflow-y auto
        overflow-x hidden
        display flex
        flex-direction column
        align-items center
        font-size 17rpx
        &::-webkit-scrollbar
            width 0
            height 0
            background transparent
        .nav-item
            width 100%
            padding 25rpx 0
            text-align center
            transition: transform .1s linear;
            &.active
                color: #fb7d34
                transform-origin: center center;
                transform: scale(1.32);
    .list-wrapper
        flex 1
        position relative
        .list-container
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            padding 0 32rpx
            box-sizing border-box
            .title
                height 132rpx
                line-height 132rpx
                text-align center
            .item-container
                display flex
                flex-wrap wrap
                align-items center
                .item
                    width 33.33%
                    text-align center
                    padding-top 21rpx 
                    padding-bottom 31rpx
                    image
                        width 104rpx
                        height 104rpx
                        margin-bottom 28rpx
                    .name
                        font-size 23rpx
                        color #0000008a
</style>
