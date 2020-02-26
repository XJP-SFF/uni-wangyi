<template>
	<div id='categoryContainer'>
		<div class="header" @click="handleSearch">
			<div class='headerBg'></div>
			<span>搜索商品</span>
		</div>
		
		<div class="content">
			<div class="left">
				<scroll-view  class="scrollContainer" scroll-y="true" show-scrollbar='false'>
						<ul class='navList'>
							<li @click='changeActive(index)' v-for='(item,index) in categoryDatas' :key='index' :class='{active: index === navIndex}'>{{item.name}}</li>
						</ul>
				</scroll-view>
			</div>
			<div class="right" >
				<scroll-view scroll-y="true" v-if='categoryListObj' class="scrollContainer">
					<div class="proList">
						<image class="cateImg" src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" mode=""></image>
						<div class="cate-list">
							<ul v-if="categoryListObj.categoryList">
								<li v-for="(cateItem, index) in categoryListObj.categoryList" :key="index">
									<div class="cate-img">
										<img :src="cateItem.wapBannerUrl" alt="">
									</div>
									<div class="cate-text">{{cateItem.name}}</div>
								</li>	
							</ul>
							<ul v-if="categoryListObj.subCateList">
								<li v-for="(cateItem, index) in categoryListObj.subCateList" :key="index">
									<div class="cate-img">
										<img :src="cateItem.wapBannerUrl" alt="">
									</div>
									<div class="cate-text">{{cateItem.name}}</div>
								</li>
							</ul>
						</div>
					</div>
				</scroll-view>
			</div>
		</div>
	</div>
</template>

<script>
	import {request} from '../../utils/request.js'
	export default {
		data(){
			return {
				categoryList: [],
				categoryListObj:{},
				navIndex: 0,
				categoryDatas:[]
			}
		},
		async mounted(){
			let categoryList = await request('/getCateList')
			this.categoryList = categoryList
			let categoryDatas = await request('/getCategoryDatas')
			this.categoryDatas = categoryDatas.categoryL1List
			this.categoryListObj = this.categoryList[this.navIndex]
			// console.log(this.categoryListObj)
		},
		methods: {
			changeActive(index){
				this.navIndex = index
			},
			handleSearch(){
				//跳转到search.vue页面
				uni.navigateTo({
				    url: '/pages/search/search'
				});
			}
		},
		watch:{
			navIndex(){
				this.categoryListObj = this.categoryList[this.navIndex]
				// console.log(this.categoryListObj)
			}
		}
	}
</script>

<style lang="stylus">
	
	#categoryContainer
		.header 
			width 100%
			height 40px
			position relative
			padding 10px 0
			.headerBg 
				width 90%
				height 30px
				background #EDEDED
				margin auto
				border-radius 10px 
			span 
				position absolute
				text-align center 
				height 30px 
				line-height 30px
				left 0
				top 10px
				width 100%
				font-size 12px
		.content 
			border-top 1px solid #eee 
			display flex 
			width 100%
			.left 
				width 20%
				border-right 1px solid #eee
				font-size 14px
				box-sizing border-box
				.scrollContainer 
					height calc(100vh - 96px) /* 1vh = 屏幕高度的百分之一 */
					::-webkit-scrollbar  /* 去除默认滚动条样式的 */
						width 0
					.navList 
						li 
							height 40px
							line-height 40px
							text-align center
							margin 10px 0
							&.active
								color #B4282D
								position relative
								&:after
									content ''
									height 70%
									width 2px 
									background #B4282D
									position absolute
									top 15%
									left 6px
									
			.right 
				width 80%
				.scrollContainer
					height calc(100vh - 96px)
				.proList
					width 100%
					display flex
					flex-wrap wrap
					.cateImg
						width 90%
						height 150px
						margin 20px auto
					.cate-list
						margin-top 10px
						width 100%
						>ul
							display flex
							flex-wrap wrap
							width 100%
							overflow hidden
							box-sizing border-box
							>li
								width 90px
								height 100px
								margin 5px 5px 10px 5px
								// float left
								&:nth-child(3n)
									margin-right 0
								.cate-img
									width 100%
									height 80px
									>img 
										width 100%
										height 100%
										border-radius 50%
								.cate-text
									width 100%
									height 26px
									font-size 12px
									text-align center
									line-height 26px
						
				
</style>
		