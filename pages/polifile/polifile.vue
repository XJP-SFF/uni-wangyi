<template>
	<div id="polifileModule">
		<div class="header">
			<image class="userImg" :src="userInfo.avatarUrl?userInfo.avatarUrl:'../../static/images/personal/personal.png'" mode=""></image>
			<div class='userInfo' @click='toLogin'>
				<p>{{userInfo.nickName?userInfo.nickName:'未登录'}}</p>
				<p>{{userInfo.nickName?'微信用户':'点击登录账号'}}</p>
			</div>
		</div>
		<div class="content">
			<h2>我的资产</h2>
			<p class='line'></p>
			<div class="myAssetList">
				<div class='assetItem'>
					<span>￥0</span>
					<span>回馈金</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>红包</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>优惠券</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>津贴</span>
				</div>
				<div class='assetItem'>
					<span>￥0</span>
					<span>礼品卡</span>
				</div>
			</div>
			<!-- 列表选项 -->
			<div class="personalList">
				<div class="navItem" v-for='(item, index) in personalList' :key='index'>
					<i class='iconfont ' :class='item.icon'></i>
					<p>{{item.name}}</p>
				</div>
			</div>
			<!-- 退出登录 -->
			<div class="logout" @click='toLogin'>
				<span>退出登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		data(){
			return {
				userInfo: {
					
				},
				personalList: [
					{
						name: '我的订单',
						icon: 'icon-dingdan'
					},
					{
						name: '我的拼团',
						icon: 'icon-pintuan'
					},
					{
						name: '领红包',
						icon: 'icon-hongbao'
					},
					{
						name: '我的积分',
						icon: 'icon-jifen'
					},
					{
						name: '地址管理',
						icon: 'icon-dizhi'
					},
					{
						name: '账号安全',
						icon: 'icon-zhanghaoanquan'
					},
					{
						name: '联系客服',
						icon: 'icon-kefu'
					},
					{
						name: '用户反馈',
						icon: 'icon-wode-'
					},
					{
						name: '帮助中心',
						icon: 'icon-bangzhuzhongxin1'
					},
					{
						name: '退还/售后',
						icon: 'icon-shouhou'
					}
				]
			}
		},
		mounted(){
			// console.log(this)
			if(this.$mp.query.userInfo){
				let userInfo = JSON.parse(this.$mp.query.userInfo)
				this.userInfo = userInfo
			}else {
				uni.getUserInfo({
					success:(res) => {
						this.userInfo = res.userInfo
					},
					fail: () => {
						console.log('获取失败')
					}
				})
			}
		},
		methods: {
			toLogin(){
				if(this.userInfo.nickName){
					return
				}
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		
	}
</script>

<style lang="stylus">
#polifileModule	
	.header
		display flex
		padding 40px
		background-color #C5A973
		.userImg
			width 100px
			height 100px
			margin-right 20px
			border-radius 50px
			background #FFFFFF
		.userInfo
			p
				height 50px
				line-height 50px
				// &:first-child
				// 	font-size 14px
				// &:last-child
				// 	font-size 24px
	.content
		h2
			// font-size 26px
			line-height 100px
			margin-left 5%
		.line
			width 90%
			height 2px
			background #eee
			margin 0 auto
		.myAssetList
			width 90%
			margin 20px auto
			display flex 
		
			.assetItem
				width 25%
				display flex
				flex-direction column
				align-items center
				// font-size 24px
				color #333333
				line-height 40px
		.personalList
			display flex
			flex-wrap wrap
			border-top 1px solid #EEEEEE
			.navItem
				width 33.3333%
				text-align center
				border-bottom 1px solid #EEEEEE
				border-right 1px solid #EEEEEE
				box-sizing border-box
				padding 30px 0
				&:nth-child(3n)
					border-right none
				.iconfont 
					font-size 30px
				p
					// font-size 24px
					line-height 40px
		.logout
			border-top 40px solid #eee
			border-bottom 40px solid #eee
			height 60px
			margin-bottom 88px
			text-align center
			line-height 60px		
				

</style>

