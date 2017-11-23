<template>
	<div id="denglv">
		<v-content>
           <header>
           	   <div class='logo'></div>
           </header>
           <div class="loginBox">
                 <!-- 左边banner -->
           	    <div class="pic">
           	    	<a href=""><img src="../assets/image/login_banner.jpg"></a>
           	    </div>
           	    <!-- 右边登陆两种状态 -->
           	    <div class="formBox">
           	        <div class="LoginTypeChoose">
           	         	 <label @click='change_normal'>
           	         	 	<input type="radio" name="radio" value="1" class='normalLogin' checked>
           	         	 	<span>普通登陆</span>
           	         	 </label>
           	         	  <label @click='change_phone'>
           	         	 	<input  type="radio" name="radio" value="1" class='phoneLogin'>
           	         	 	<span>手机动态密码登陆</span>
           	         	 </label>
           	        </div>
           	        <!-- 这是普通登陆 -->
           	        <div class="normal_box" v-show='normal_show'>
	           	        <div class="loginId login_box">
	           	        	<input type='text' placeholder='用户名/卡号/手机号/邮箱'>
	           	        </div>
	           	        <div class="login_pw login_box">
	           	        	<input type='password' placeholder='输入密码'>
	           	        </div>
	                    <div class='login_code login_box'>
	                    	<input type='text' placeholder='验证码'><span>{{num}}</span>
	                    	<a href="javascript:void(null)"  style='font-size: 10px;' @click='hyz'>换一张</a>
	                    </div>
	                    <div class="forget">
		                	<input type='checkbox'>
		                	<span>两个月内免登陆</span>
	                    </div>
	                    <div class="login_btn">
	                    	<input type='submit' value='登陆'>
	                    </div>
                    </div>
                    <!-- 这是手机验证码登陆 -->
                    <div class="phone_box" v-show='phone_show'>
                    	<div class="loginId login_box">
                    	    <select class='phone_num'>
                    	    	<option>中国大陆+86</option>
                    	    	<option>中国香港+852</option>
                    	    	<option>中国澳门+853</option>
                    	    	<option>中国澳门+886</option>
                    	    </select>
							<input type='text' placeholder='请输入手机号'>
						</div>
                        <div class='login_code login_box'>
							<input type='text' placeholder='验证码'><span>{{num}}</span>
							<a href="javascript:void(null)"  style='font-size: 10px;' @click='hyz'>换一张</a>
						</div>
						<div class="login_pw login_box">
							<input type='password' placeholder='输入静态密码'>
							<a href="####" class='move_pass'>获取动态密码</a>
						</div>
						<div class="forget">
						    <input type='checkbox'>
							<span>记住我</span>
						</div>
						<div class="login_btn">
							<input type='submit' value='登陆'>
						</div>
                    </div>
                </div>
           </div>
           <div class="register_tip">
                <a href="http://localhost:8080/#/zhuce" title="立即注册">立即注册
                    <i></i>
                </a>
             </div>
           <div class="footer">
            	<p class="mobil">
            		<a class="iphone">
            			<span></span>
            			iPhone / iPad
            		</a>
            		<a class='android'>
            			<span></span>
            			Android
            		</a>
            	</p>
            	<p class='call_back'>
			        <a href="http://promotion.elong.com/hotel/cn/elongagent/elongagent.html">代理合作</a>|
			        <a href="http://promotion.elong.com/web/adservice/adservice.html">广告服务</a>|
			        <a href="http://promotion.elong.com/web/contact/contact.html">联系我们</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;©1999
			        - 2014 eLong, Inc or its affiliates. All Rights Reserved.
            	</p>
            </div>
		</v-content>
	</div>
</template>
<style lang='scss' scope>
    *{
    	margin:0;padding:0;
    	list-style: none;
    	text-decoration: none;
    }
    @mixin border-shadows{
		box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
		border: 1px solid #cccccc;
		border-radius: 2px;
    }
    html{
        background-color: #e8eff6;
	}
	#denglv{
		width: 100%;
		height: 100%;
		header{
			width:1000px;
			height:48px;
			margin:0 auto;
			padding: 25px 0;
			.logo{
				width: 113px;
				height: 48px;
				background: url(../assets/image/myelong_login.png) 0 0 no-repeat;
			}
		}
		.loginBox{
			width:1000px;
			height: 350px;
			margin:0 auto;
			box-sizing: border-box;
			.pic{
				width: 620px;
				height: 350px;
				float: left;
			}
			/*这是大框form*/
			.formBox{
				width: 290px;
	            height: 325px;
	            padding: 25px 45px 0px;
	            float: right;
	            background-color: white;
	            .LoginTypeChoose{
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    font-size: .6rem;  
                    height: 16px;
                    input{
                    	vertical-align: middle;
                        margin-right: 3px;
                        width: 16px;
                        height: 16px;
                        background-color:transparent ;
                    }
	            }
	            /*这是所有的input输入框*/
	            .login_box{
	            	input{
			          height:30px;
			          line-height: 30px;
			          color: black;
			          font-size: 14px;
			          margin-top: 20px;
                      @include border-shadows;
	               }
	            }
              /*普通登陆*/
                .normal_box{
                    .loginId,.login_pw{
                        input{
                            width:100%;
                        }
                    }

                }
                /*手机登录*/
                .phone_box{
                	text-align: left;
                	.loginId{
                		.phone_num{
                			font-size: .1rem;
                			width: 30%;
                			height: 32.5px;
                			 @include border-shadows;
                		}
                		input{
                			width: 67%; 
                		}
                	}
                	.login_pw{
                        .move_pass{
							height:32px;
							width: 39%;
							display: inline-block;
							line-height: 32px;
							background-color: #37D;
							color:#fff;
							font-size:.9rem;
							text-align: center;
							border-radius: 4px;
                        }
                	}
                }
                .login_code{
                  	text-align: left;
                  	line-height: 30px;
                    input{
                       width:50%;
                       border:1px solid red;
                    }
                    span{
                        width: 65px;
		                height: 30px;
		                display: inline-block;
		                text-align: center;
		                color: red;
                    }
                }
                .forget{
                	text-align: left;
                    width:100%;
		            height: 35px;
		            font-size: 0.7rem;
		            line-height: 35px;
		            margin:10px 0;
                }
	            .login_btn{
                    input{
                        width: 100%;
                        height:40px;
                        border-radius: 2px;
                        background-color: #ff8800;
                        border:0;
                        color: white;
                        font-size: 16px;
			        }
			        &:hover input{
			            background-color: #ee6600
			        }
			    }
		    }
		}
        /*立即注册*/
        .register_tip{
            width:986px;
            height: 15px;
            padding: 15px; 
            margin: 0 auto;   
            a{
                float: right;
                font-size: .5rem;
                font-weight: bold;
                i{
                    width: 15px;
                    height: 15px;
                    display: inline-block;
                    background:url(../assets/image/myelong_login.png) no-repeat 0 -430px;
                    vertical-align: bottom;
                }
                &:hover i{
                    background:url(../assets/image/myelong_login.png) no-repeat 0 -445px;
                }
            } 
            &:hover a{
                color:#FF6500
            }  
        }
		.footer{
            width: 100%;
	    	height: 140px;
	    	text-align: center;
            padding:60px 0 30px;
            font-size: .5rem;
            .mobil{
            	cursor: pointer;
                a{
                	display: inline-block;
                    line-height:25px;
                    margin-left: 2rem;
                	span{
                		 display: inline-block;
                		 width:22px;
                	     height: 25px;
                	     vertical-align: middle;
                	}
                }
                .iphone{
                	span{
                		background: url(../assets/image/myelong_login.png) 0px -274px no-repeat;
                	}
                	&:hover{
                		color:#f60;
                	}
                	&:hover span{
                        background: url(../assets/image/myelong_login.png) 0px -301px no-repeat;
                	}
                }
                .android{
                	span{
                		background: url(../assets/image/myelong_login.png) -25px -274px no-repeat;
                	}
                	&:hover{
                		color:#f60;
                	}
                	&:hover span{
                        background: url(../assets/image/myelong_login.png) -25px -301px no-repeat;
                	}
                }
            }
            .call_back{
            	a{
            		color: #333;
            		margin:5px;
            	}
            }
	    }
	}
</style>
<script type="text/javasc	ript">
	export default{
		name:'Denglv',
		data(){
			return{
				num:8888,
				normal_show:true,
				phone_show:false
			}
		},
		methods:{
			hyz:function(){
                this.num=Math.floor(Math.random()*10000)
			},
			change_normal:function(){
                this.normal_show=true;
                this.phone_show=false;
			},
			change_phone:function(){
                this.phone_show=true;
                this.normal_show=false;
			},
		}
	}
</script>
