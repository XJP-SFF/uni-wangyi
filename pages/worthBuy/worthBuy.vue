<template>
	<div class="worthBuyModule">
		<!-- 头部 -->
		<div class="trustBuy-header">
			<i class="iconfont icon-shouye" @click="handleMsite"></i>
			<span class="trustBuyWord">值得买</span>
			<i class="iconfont icon-search" @click="handleSearch"></i>
			<i class="iconfont icon-cart-Empty" @click="handleShopCar"></i>
		</div>
		<!-- 轮播 -->
		<div class="swiperTab-wrap">
			<div class="swiperTab-title">
				<img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
				<span>严选好物 用心生活</span>
			</div>
			<div class="swiper-container">
				<swiper :indicator-dots="true" :autoplay="true" indicator-color='gray' indicator-active-color='red'>
					<swiper-item v-for="(navItem, index) in newNavList" :key="index">
						<a class="link-to-pro" v-for="(item, index) in navItem" :key="index">
							<div class="pro-container">
								<img :src="item.picUrl" />
							</div>
							<div class="text">
								<span class="text-title">{{item.mainTitle}}</span><br>
								<span class="text-desc">{{item.viceTitle}}</span>
							</div>
						</a>
					</swiper-item>
				</swiper>
			</div>
		</div>
		<!-- 瀑布流 -->
		<WaterFall/>
	</div>
</template>

<script>
	/* 引入lodash */
	import _ from "lodash"
	import WaterFall from '../../components/WaterFall/WaterFall.vue'
	import { wangyiRequest } from '../../utils/request.js'
	export default{
		components: {WaterFall},
		data(){
			return {
				navList: [],
			}
		},
		async mounted(){
			// console.log('-------')
			let result = await wangyiRequest('/topic/v1/know/navWap.json')
			// console.log(result)
			this.navList = result.data.navList
			// console.log(this.navList)
		},
		computed: {
			newNavList(){
				// console.log(_.chunk(this.navList, 8))
				return _.chunk(this.navList, 8)
			}
		},
		methods: {
			//搜索获取焦点
			handleSearch(){
				//跳转页面
				uni.navigateTo({
					url:'/pages/search/search'
				})
			},
			handleMsite(){
				//跳转页面
				uni.switchTab({
					url:'/pages/msite/msite'
				})
			},
			handleShopCar(){
				//跳转页面
				uni.switchTab({
					url:'/pages/shopCar/shopCar'
				})  
			}
		}
	}
</script>

<style lang="stylus" scoped>
.worthBuyModule
	height 100%
	background-color #FAFAFA
	.trustBuy-header
		width 100%
		height 40px
		text-align center
		line-height 40px
		display flex
		// background-color #fff
		.trustBuyWord
			margin 0  100px 0 110px
			font-size 22px
		.iconfont
			font-size 30px
			vertical-align middle
	//轮播图
	.swiperTab-wrap
		width 100%
		padding 0 15px
		box-sizing border-box
		background url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png') no-repeat
		background-size cover
		overflow hidden
		.swiperTab-title
			width 100%
			display flex
			font-size 16px
			color #fff
			padding-top 32px
			margin-bottom 12px
			>img
				width 100px
				height 40px
			span 
				margin 13px 0 0 5px
		//
		.swiper-container 
			width 100%
			height 100%
			background-color #fff
			border-radius 10px
			padding-bottom 25px
			padding-left 10px
			swiper 
				width 100%
				height 300px
				swiper-item
					display flex
					justify-content center
					align-items flex-start
					flex-wrap wrap
					height 100%
					.link-to-pro
						width 25%
						text-align center
						padding-top 12px
						.pro-container
							width 80%
							height 70px
							>img 
								width 40px
								height 40px
								display inline
						.text
							width 100%
							height 100%
							line-height 18px
							padding-top 8px
							.text-title
								font-size 14px
								font-weight bold
								color #333
							.text-desc
								font-size 12px
								color #999
				
</style>
