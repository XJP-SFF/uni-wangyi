<template>
	 <div class="header-search-login">
			<image class="logo" src="../../static/images/logo.png" ></image>
			<div class="searchInput" >
				 <i class='iconfont icon-sousuo'></i>
				 <input @click="handleSearch" type="text" placeholder="搜索商品" placeholder-class="placeholder">
			</div>
			<button @click="handleLogin">登录</button>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleLogin(){
				//跳转到login.vue页面
				uni.navigateTo({
				    url: '/pages/login/login'
				})
			},
			handleSearch(){
				//跳转到search.vue页面
				uni.navigateTo({
				    url: '/pages/search/search'
				});
			}
		}
	}
</script>

<style lang="stylus">

.header-search-login
	display flex
	width 100%
	height 30px
	padding 10px 0
	.logo
		width 70px
		height 20px
		margin 5px 15px
	.searchInput 
		height 30px
		width 200px
		background #ededed
		position relative
		border-radius 5px
		.iconfont
			font-size 15px
			position absolute
			left 20px 
			top 25%
		input
			border-radius 10px
			height 30px
			width 150px
			margin-left 40px
		.placeholder
			font-size 12px
			color #666
	button
		width 50px
		height 28px
		color #fff
		line-height 24px
		text-align center
		font-size 10px
		background-color #b4282d
		margin-top 2px
</style>
