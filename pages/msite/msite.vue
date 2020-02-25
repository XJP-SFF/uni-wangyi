<template>
	<div class="msiteModule">
		<!-- 头部固定容器 -->
		<div class="fixedContainer">
			<!-- 头部 -->
			<Header/>
			<!-- 导航 -->
			<div class="navContainer">
				<scroll-view scroll-x="true">
					<view @click="changeNavIndex(0, 0)" class="navItem" :class="{activeClass: 0 === navIndex}">推荐</view>
					<view @click="changeNavIndex((index + 1), item.L1Id)" class="navItem " :class="{activeClass: (index + 1) === navIndex}" v-for="(item, index) in navList" :key='index'>{{item.text}}</view>
				</scroll-view>
			</div>
		</div>
		<!-- 箭头 -->
		<div class="jiantou" @click="handleDownMask">
			<i class="iconfont" :class="isDown? 'icon-RectangleCopy1':'icon-RectangleCopy2'"></i>
		</div>
		<!-- 遮罩层 -->
		<div class="mask-wrap" v-show="isShowMask">
		    <div class="mask-top" @click="isShowMask=true">
				<div class="nav-title">
				  全部频道
				</div>
				<div class="more-cate">
					<ul class="cate-list">
						<li @click="changeNavIndex(0, 0)" class="navItem" :class="{activeClass: 0 === navIndex}"><span>推荐</span></li>
						<li @click="changeNavIndex((index + 1), navItem.L1Id)" class="navItem " :class="{activeClass: (index + 1) === navIndex}" v-for="(navItem, index) in navList" :key="index"><span>{{navItem.text}}</span></li>
					</ul>
				</div>
			</div>
			<!-- toggleIsShowMask -->
			<div class="mask-bottom" @click="isShowMask=false, isDown=true"></div>
		</div>
		<!-- contentContainer -->
		<scroll-view scroll-y="true" class="contentContainer">
			<div id='content'>
				<Recommend v-if='navIndex=== 0'/>
				<CateList v-if='navIndex !== 0' :navId='navId'/>
			</div>
		</scroll-view>
	</div>
</template>

<script>
	import { request } from '../../utils/request.js'
	import Header from '../../components/header/header.vue'
	import Recommend from '../../components/recommend/recommend.vue'
	import CateList from '../../components/cateList/cateList.vue'
	export default{
		components: {
			Header,
			Recommend,
			CateList
		},
		data(){
			return {
				navList: [],//导航列表
				navIndex: 0, // 标识下边框
				navId: 0,
				isDown:true,
				isShowMask:false
			}
		},
		methods:{
			changeNavIndex(index, navId){
				this.navIndex = index
				this.navId = navId
			},
			handleDownMask(){
				this.isDown = !this.isDown
				this.isShowMask = !this.isShowMask
			}
		},
		async mounted(){
			let result = await request('/getIndex')
			this.navList = result.kingKongModule.kingKongList
		}
	}
</script>

<style lang="stylus">
.msiteModule
	width 100%
	height 100%
	//fixed固定容器
	.fixedContainer
		position fixed
		left 0
		top 0
		z-index 99
		width 100%
		background-color white
		//导航
		.navContainer
			height 40px
			width 100%
			border-bottom 1px solid #eee
			white-space nowrap
			.navItem
				width 70px
				height 100%
				margin 0 5px
				display inline-block 
				line-height 40px
				text-align center
				font-size 14px
				position relative
				&:nth-child(11)
					padding-right 70px
				&.activeClass
					color #BB2C08
					border-bottom 1px solid #BB2C08
    //箭头
	.jiantou
		position fixed
		right 0
		top 50px
		height 42px
		line-height 38px
		background-color #ffffff
		width 70px
		text-align center
		z-index 120
		.iconfont
			font-size 30px
	//遮罩层
	.mask-wrap
		width 100%
		height calc(100vh - 52px)
		position fixed 
		bottom 0
		left 0
		z-index 100
		background-color rgba(0, 0, 0, 0.4)
		.mask-top
			width 100%
			.nav-title
				width 100%
				height 40px
				line-height 40px
				font-size 14px
				padding-left 15px
				box-sizing border-box
				background-color #fff
			.more-cate
				padding-top 10px
				width 100%
				background-color #fff
				padding-bottom 20px
				.cate-list
					width 100%
					overflow hidden
					li
						float left 
						width 70px
						height 30px
						line-height 30px
						margin-left 20px
						margin-bottom 20px
						border 1px solid #ccc
						background-color #eee
						&.activeClass
							color #BB2C08
							border 1px solid #BB2C08
						span
							display block
							width 100%
							height 100%
							text-align center
							font-size 12px
		.mask-bottom
			width 100%
			height 100%
			
		
		
	    
			
 
</style>
