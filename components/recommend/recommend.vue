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
		<!-- 分类 -->
		<CateGorys :cateGorysList='categoryModule' :atest='123' />
	</div>


</template>

<script>
	import {
		request
	} from '../../utils/request.js'
	import CateGorys from '../cateGorys/cateGorys.vue'
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
		components: {
			CateGorys
		},
		async mounted() {
			let result = await request('/getIndex')
			console.log(result)
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
					
	
	
</style>
