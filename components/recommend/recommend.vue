<template>
	<div class='recommendContainer'>
		<!-- 轮播 -->
		<swiper :indicator-dots="true" :autoplay="true" indicator-color='green' indicator-active-color='pink'>
			<swiper-item v-for="(focusItem, index) in focusList" :key="index">
				<image :src="focusItem.picUrl" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- policyDescList 三图标 -->
		<div class='policyDescList'>
			<div class='policyDescItem' v-for='(item, index) in policyDescList' :key='index'>
				<img :src="item.icon" alt="">
				<span>{{item.desc}}</span>
			</div>
		</div>
		<!-- kingKongList 10个图标列表 -->
		<div class="kingKongList">
			<div class="kingKongItem" v-for='(item, index) in kingKongModule' :key='index'>
				<img :src="item.picUrl" mode=""></img>
				<span>{{item.text}}</span>
			</div>
		</div>
		<!-- 促销模块 -->
		<div class="promotion-module">
			<div class="floor-top">
				<img src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
			</div>
			<div class="floor-first">
				<img src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75" alt="">
			</div>
			<div class="floor-list">
				<ul>
					<li><img src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
					<li><img src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
					<li><img src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
					<li><img src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0" alt=""></li>
				</ul>
			</div>
		</div>
		<!-- 新人专享 -->
		<div class="freshman-module">
			<div class="module-title">
				<span>新人专享礼</span>
			</div>
			<div class="module-content">
				<div class="content-left">
				    <div class="font-wrap"><span>新人专享礼包</span></div>
				    <div class="img-wrap">
						<img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
				    </div>
				</div>
				<div class="content-right">
					<div class="module1">
						<div class="small-title">
							<span class="big-title">福利社</span><br>
							<span class="sub-title">今日特价</span>
						</div>
						<div class="small-img">
						    <img src="https://yanxuan-item.nosdn.127.net/858cc027d5dae682799a633cd331a29a.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
						</div>
					</div>
					<div class="module2">
						<div class="small-title">
							<span class="big-title">新人拼团</span><br>
							<span class="sub-title">1元起包邮</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 类目热搜榜 -->
		<div class="category-hotSell-module">
			<div class="hotSell-module-title"><span>类目热搜榜</span></div>
			<div class="hotSell-module-content">
				<div class="content-top">
					<div class="content-top-left">
						<div class="text">
							<span>热销榜</span>
						</div>
						<div class="img-wrap">
							<img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
						</div>
					</div>
					<div class="content-top-right">
						<div class="text">
							<span>好评榜</span>
						</div>
						<div class="img-wrap">
							<img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
						</div>
					</div>
				</div>
				<div class="content-bottom">
					<ul>
						<li v-for="(categoryHotSellItem,index) in categoryHotSellModule" :key="index" v-show="index>1">
							<div class="title"><span>{{categoryHotSellItem.categoryName}}</span></div>
							<div class="img-wrap">
								<img :src="categoryHotSellItem.picUrl" alt="">
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 限时购 -->
		<div class="flashSale-module">
			<div class="flashSale-module-title">
				<div class="flashSale"><span>限时购</span></div>
				<div class="count-time">
					<span class="hour">00</span>
					<span class="dot">:</span>
					<span class="minute">00</span>
					<span class="dot">:</span>
					<span class="second">00</span>
				</div>
				<div class="more">更多 ></div>
			</div>
			<div class="flashSale-content">
				<ul>
					<li v-for="(flashSaleItem,index) in flashSaleModule" :key="index">
						<div class="img-wrap"><img :src="flashSaleItem.picUrl" alt=""></div>
						<div class="price">
							<span>￥{{flashSaleItem.activityPrice}}</span>
							<span>￥{{flashSaleItem.originPrice}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 新品首发 -->
		<div class="newItem-module">
			<div class="newItem-title">
				<div class="newItem"><span>新品首发</span></div>
				<div class="more">更多 ></div>
			</div>
			<div class="newItem-content">
				<ul>
					<li v-for="(newItem,index) in newItemList" :key="index" v-show="index<=5">
						<div class="img-wrap"><img :src="newItem.showPicUrl" alt=""></div>
						<div class="good">
							<div class="newItemDesc"><span>{{newItem.name}}</span></div>
							<div class="price"><span>￥{{newItem.retailPrice}}</span></div>
							<div class="tag-wrap"><span>特价</span></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 其他 -->
		<div class="sceneLight-shoppingGuide-module">
			<ul>
				<li v-for="(shoppingGuideItem,index) in shoppingGuideModule" :key="index">
					<div class="title">
						<span>{{shoppingGuideItem.styleItem.title}}</span><br>
						<span>{{shoppingGuideItem.styleItem.desc}}</span>
					</div>
					<div class="pic">
						<img :src="shoppingGuideItem.styleItem.picUrlList[0]" alt="">
						<img :src="shoppingGuideItem.styleItem.picUrlList[1]" alt="">
					</div>
				</li>
			</ul>
		</div>
		<!-- 底部版权所有 -->
		<div class="bottom-copyright-module">
			<div class="load">
				<a class="app" href="#1">下载App</a>
				<a class="computer" href="#2">电脑版</a>
			</div>
			<div class="copyright">
				<span class="copy1">网易公司版权所有 @1997-2020</span>
				<span class="copy2">食品经营许可证：JY13301080111719</span>
			</div>
		</div>
	</div>


</template>

<script>
	import {
		request
	} from '../../utils/request.js'
	export default {
		data() {
			return {
				focusList: [],
				policyDescList: [],
				indexCateModule: [],
				categoryHotSellModule: [],
				flashSaleModule: [],
				newItemList: [],
				shoppingGuideModule: [],
				kingKongModule:[]
			}
		},
		async mounted() {
			let result = await request('/getIndex')
			// console.log(result)
			const {
				newItemList,
				focusList,
				sceneLightShoppingGuideModule,
				policyDescList,
				categoryHotSellModule,
				flashSaleModule,
				indexCateModule,
				kingKongModule
			} = result
			
			
			this.focusList = focusList
			this.policyDescList = policyDescList
			this.indexCateModule = indexCateModule
			this.categoryHotSellModule = categoryHotSellModule.categoryList
			this.flashSaleModule = flashSaleModule.itemList
			this.newItemList = newItemList
			this.shoppingGuideModule = sceneLightShoppingGuideModule
			this.kingKongModule = kingKongModule.kingKongList
		},
		computed: {

		}
	}
</script>

<style lang="stylus">
	.recommendContainer
		width 100%
		margin-top 90px
		swiper
			width 100%
			height 200px
			image
				width 100%
				height 100%
		//政策
		.policyDescList
			display flex
			.policyDescItem
				flex 1
				text-align center
				img 
					width 16px
					height 16px
					vertical-align middle
					margin-right 3px
				span 	
					font-size 12px
					vertical-align middle
		
		//商品列表
		.kingKongList
			display flex 
			flex-wrap wrap
			margin-top 10px
			padding-bottom 20px
			border-bottom 1px solid #eee
			.kingKongItem 
				width 20% 
				display flex
				flex-direction column
				align-items center 
				img 
					width 55px
					height 55px
				span
					font-size 12px
					line-height 25px
		//促销模块
		.promotion-module
			width 100%
			background-color #fff
			padding-top 5px
			.floor-top, .floor-first
				img
					width 100%
					height 140px
			.floor-first, .floor-list
				padding 0 20px
				background-color #1674e3
				box-sizing border-box
			.floor-list
				width 100%
				overflow hidden
				padding-bottom 10px
				ul
					width 100%
					li
						width 160px
						height 80px
						margin-top 10px
						float left
						img
							width 100%
							height 100%
						&:nth-child(2n+1)
							margin-right 15px
	    //新人专享
		.freshman-module
			width 100%
			padding 20px auto
			box-sizing border-box
			background-color #fff
			&::before,&::after
				content ""
				background-color #eee
				height 10px
				width 100%
				display block
			//标题
			.module-title
				width 100%
				height 50px
				color #333
				font-size 16px
				text-align center
				line-height 50px
				span
					position relative
					&::before,&::after
						content ''
						display block
						position absolute
						left -20px
						top 50%
						width 10px
						height 1px
						background-color #333
					&::after
						left auto
						right -20px
			//内容区域
			.module-content
				display flex
				width 100%
				padding-bottom 20px
				>div
					width 50%
					height 100%
				//左边内容
				.content-left
					background-color #F9E9CF
					margin-right 5px
					border-radius 5px
					margin-left 10px
					.font-wrap
						width 100%
						font-size 18px
						padding-left 20px
						height 40px
						line-height 50px
						box-sizing border-box
					.img-wrap
						width 100%
						height 200px
						margin-top 20px
						position relative
						img 
							width 129px
							height 129px
							position absolute
							left 50%
							transform translate(-50%)
							top 20px        
				//右边内容
				.content-right
					padding-right 10px
					>div
						width 100%
						height 126px
						border-radius 5px
						box-sizing border-box
						overflow hidden
					.module1,.module2
						position relative
						padding 20px 0 0 20px
						margin-bottom 8px
						background-color #fbe2d3
						.small-title
							span
								line-height 30px
							.big-title
								font-size 16px
							.sub-title
								font-size 12px
						.small-img
							position absolute
							right 0
							top 0
							width 100px
							height 100px
							padding-top 20px
							.discount
								width 80px
								height 80px
								background-color #f6a447
								border-radius 50%
								position absolute
								right 30px
								top 15px
								z-index 99
								>span 
									position absolute
									left 20px
									color #fff
								.price1
									top 20px
								.price2
									top 40px
							img 
								width 100px
								height 100px
					.module2
						background-color #ffecc2
						.sub-title
							background-color rgba(0,0,0,0.2)
							border-radius 5px
							color #fff
							padding 0 8px
		//类目热搜榜
		.category-hotSell-module
			width 100%
			padding 0 20px 20px 20px 
			box-sizing border-box
			background-color #fff
			.hotSell-module-title
				width 100%
				height 50px
				line-height 50px
				font-size 16px
			.hotSell-module-content
				width 100%
				//上半部分
				.content-top
					display flex
					width 100%
					height 100px
					>div
						width 50%
						height 100%
						border-radius 5px
					.content-top-left, .content-top-right
						display flex
						width 168px
						background-color #f9f3e4
						padding-left 30px
						line-height 80px
						margin 0 10px 10px 0
						box-sizing border-box
						>div
							width 50%
							height 100%
						.text
							position relative
							font-size 14px
							&::after
								content ''
								display block
								position absolute
								left 0
								top 50%
								margin-top 10px
								width 24px
								height 2px
								background-color #666
						.img-wrap
							width 100%
							height 100%
							padding-top 15px
							box-sizing border-box
							img 
								width 80px
								height 80px
					.content-top-right
						background-color #ebeff6
						margin-right 0
				//下半部分
				.content-bottom
					margin-top 10px
					width 100%
					ul
						width 100%
						overflow hidden
						box-sizing border-box
						li
							position relative
							width 80px
							height 100px
							float left
							border-radius 5px
							background-color #f5f5f5
							margin 0 5px 10px 0
							&:nth-child(6), &:nth-child(10)
								margin-right 0
							.title
								width 100%
								height 20px
								font-size 12px
								text-align center
								line-height 20px
								padding-top 5px
							.img-wrap 
								position absolute
								left 50%
								transform translateX(-50%)
								top 25px
								width 60px
								height 60px
								text-align center
								img 
									width 100%
									height 100%
		//限时购
		.flashSale-module
			width 100%
			padding 0 30px
			background-color #fff
			box-sizing border-box
			margin-bottom 30px
			.flashSale-module-title
				display flex
				width 100%
				height 100px
				line-height 100px
				font-size 32px
				.flashSale
					flex-grow 1
				.count-time
					flex-grow 7
					.hour, .minute, .second
						width 36px
						height 36px
						background-color #333
						text-align center
						line-height 36px
						color #fff
						font-size 24px
						padding 0 5px
						border-radius 5px
					.dot
						margin 0 10px
				.more
					flex-grow 2
					text-align right
					margin-right 10px
			.flashSale-content
				width 100%
				box-sizing border-box
				ul
					width 100%
					overflow hidden
					li
						width 250px
						float left
						padding-bottom 30px
						margin-right 30px
						border-radius 5px
						&:nth-child(3), &:nth-child(6)
							margin-right 0
						>.img-wrap
							width 250px
							height 240px
							background-color #f5f5f5
							img
								width 100%
								height 100%
						.price
							width 100%
							margin-top 10px
							padding-left 20px
							span 
								&:nth-child(1)
									color red
									font-size 28px
									margin-right 10px
								&:nth-child(2)
									font-size 24px
							

</style>