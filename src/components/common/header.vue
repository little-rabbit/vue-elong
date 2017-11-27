<template>
	<div id="header">
	    <div class="top">
	    	<div class="logo">
	    		<img src="../../assets/image/logo.jpg">
	    	</div>
	    	<div class="meau">
    			<span><a href="">积分商城</a></span><b></b>
    			<span><a href="">礼品卡</a></span><b></b>
    			<span><a href="">在线客服</a></span><b></b>
    			<span><a href="">English</a></span>
	    	</div>
	    	<div class="right">
	    		
	    		<div class="panic xcx">
	    			<i></i>
	    			<p>
	    				<span>小程序</span><br/>
	    				<span>体验更轻盈</span>
	    			</p>
	    			<div class="top_show">
	    				
	    			</div>
	    		</div>
	    		<div class="panic sjb">
	    			<i></i>
	    			<p>
	    				<span>手机版</span> <br/>
	    				<span>专享五折起</span>
	    			</p>
	    			<div class="top_show">
	    				
	    			</div>
	    		</div>
	    		<div class="panic kf">
	    			<i></i>
	    			<p>
	    				<span>7x24 客服电话</span><br/>
	    				<b>4009-333-333</b>
	    			</p>
	    			<div class="top_show">
	    			    <ul>
	    			        <li><p>国内：4009-333-333</p></li> 
	    			        <li><p>香港：852-8131-8883</p> <p class="ti3">852-8131-8983</p></li> 
	    			        <li class="last"><p>海外：86-10-6432-9999</p></li> 
	    			    </ul>
                        <ul>
                            <li><p>国内：4009-333-333</p></li> 
                            <li><p>香港：852-8131-8883</p> <p class="ti3">852-8131-8983</p></li> 
                            <li class="last"><p>海外：86-10-6432-9999</p></li> 
                        </ul>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	    <div style='background-color: #2064c8'>
	    <div class="bottom">
		    <div class="left">
				<ul>
					<li v-for='(nav,index) in navs'  @click='click_header(index)'  :class='{bg:cont==index}' >
						<router-link :to='nav.path'>{{nav.title}}</router-link>
					</li>
				</ul>
			</div>
			<div class="right">
				<li v-for='(paths,index) in paths' :key="index">
					<router-link :to="paths.path">{{paths.title}}</router-link>
				</li>
			</div>
		</div>
		</div>
	</div>
</template>
<style lang="scss" scope>
    *{
    	margin:0;
    	padding:0;
        list-style: none;
        text-decoration: none;
    }
    body{
    	width:100%;
    	height:100%;
    	overflow-x:hidden;
    }
	#header{
		width:100%;
		height:115px;
		font-size: .8rem;
		margin:0 auto;
		.top{
             width:1200px;
		     height:75px;
		     margin: 0 auto;
		     position: relative;
		     .logo{
		     	position: absolute;
		     	left: 0;
		     }
	      	.meau{
                width:350px;
                height: 21px;
                position: absolute;
                left: 300px;
                top:20px;
	     		a{
	     			color:#666;
	     			font-size: 12px;
	     			padding:12px;
	     		}
	     		b{
	     			width: 1px;
					height: 12px;
					overflow: hidden;
					zoom: 1;
					border-right: 1px solid #c5c5c5;
					position: relative;
					top: 3px;
	     		}
	     	}
		     .right{
		     	width:40%;
                float: right;
                margin-top:20px;
		     	.panic{
		     		float: left;
		     		width: 150px;
					position: relative;
					z-index: 1000;
					i{
						display:block;
						width:42px;
						height:42px;
						float: left;
					}
					p{
                        float: left;
                        padding-left:8px;
					}
					.top_show{
						display: none;
					}
					&:hover .top_show{
						  display: block;
					}
		     	}
		     	.xcx{
					i{
						background:url(../../assets/image/icon201706.png?t=20170614) -127px -763px; 
					}
					span{
						color:#09bb07;
					}
					.top_show{
						box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						width: 217px;
						position: absolute;
						height: 92px;
						top: 54px;
						left: 0px;
						background: url(../../assets/image/icon201706.png?t=20170614) no-repeat -397px -173px #fff;
						padding: 10px;
						z-index: 999;
					}
				}
				.sjb{
					i{
						width:40px;
						height: 40px;
						background: url(../../assets/image/com_icon01.gif)
					}
					span{
						color:#ff6a6a;
					}
					.top_show{
                        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						width: 210px;
						position: absolute;
						height: 92px;
						top: 54px;
						left: 0px;
						background: url(../../assets/image/icon201706.png?t=20170614) no-repeat -460px -48px #fff;
						padding: 10px;
					}
				}
				.kf{
					i{
						background: url(../../assets/image/icon201706.png?t=20170614) -42px -762px
					}
					b{
						color:#2064c8;
						font-size: 16px;
					}
					.top_show{
						box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
						position: absolute;
						width: 160px;
						border: 1px solid #ccc;
						background: #fff;
						top: 54px;
						left: 0px;
						z-index: 100;
						padding: 4px 10px;
						color: #999;
						li{
							color:#999;
							font-size: 10px;
							line-height: 18px;
						}
					}
				}
		     }

		}
		.bottom{
			width:1200px;
		    height:40px;
			/*background: #2064c8;*/
			text-align: center;
			line-height: 40px;
			margin: 0 auto;
			position: relative;
        	.left{
				width:45%;
				height:40px;
				position: absolute;
				left: 0;
				ul{
					display: flex;
					justify-content: space-around;
					li{
						width:100%;
						height:100%;
						display: inline-block;
						border-right:1px solid #3774ce;
						background: #2064c8;
						a{
							display: inline-block;
							width: 100%;
							height: 100%;
							color:white;
						}
						&:hover{
							background-color: #0053ac
						}
					}
					.bg{background-color:#003679}
				}
		    }
		    .right{
		    	float: right;
		    	li{
		    		float: right;
		    		width: 4rem;
		    		height: 100%;
		    		background:#003679;
		    		a{
		    			color: white;
		    		}
		    	}
		    }
		}
	}
</style>
<script type="text/javascript">
	export default{
		name:'v-header',
		data(){
			return{
				navs:[
	                 {path:'/',title:'首页'},
	                 {path:'/china',title:'国内酒店'},
	                 {path:'/inter',title:'国际酒店'},
	                 {path:'/plane',title:'机票'},
	                 {path:'/train',title:'火车票'},
	                 {path:'/car',title:'汽车票'},
	                 {path:'/point',title:'旅行指南'},   
				],
				paths:[
					 {path:'/zhuce',title:'注册'},
                     {path:'/denglv',title:'登陆'},
				],
				cont:'',
		    }
		},
		methods:{
              click_header:function(index){
                  this.cont=index
              }
		}
		
	}
</script>