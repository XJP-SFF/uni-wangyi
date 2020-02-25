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
				&.activeClass
					color #BB2C08
					border-bottom 1px solid #BB2C08
					
  // 箭头
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
</style>
