<template>
	<div id="footer">
        <div class="footer_info"> 
            <dl> 
                <dt>加盟合作</dt> 
                <dd> 
                    <a href="" title="酒店加盟" rel="nofollow">酒店加盟</a> 
                </dd> 
                <dd> 
                    <a href="" title="机票酒店分销联盟" rel="nofollow">开放平台
                    </a>
                </dd>
                <dd> 
                    <a href="" title="旅游产品代理合作" rel="nofollow">代理合作
                    </a> 
                </dd> 
                <dd> 
                    <a href="" title="在线广告服务" rel="nofollow">广告服务
                    </a> 
                </dd> 
                <dd> 
                    <a href="http:" title="艺龙商家中心" rel="nofollow">商家中心</a> 
                </dd> 
            </dl> 
            <dl> 
                <dt>关于艺龙</dt> 
                <dd> 
                    <a href="" title="酒店大全">酒店大全</a> 
                </dd> 
                <dd> 
                     <a href="" title="国际酒店">国际酒店</a> 
                </dd>
                <dd> 
                     <a href="" title="校园招聘" rel="nofollow">校园招聘</a> 
                </dd> 
                <dd> 
                     <a href="" title="联系艺龙旅行网" rel="nofollow">联系我们</a> 
                </dd> 
            </dl> 
            <dl> 
                <dt>艺龙APP下载</dt> 
                <dd class="pt10"> 
                      <i class="cm_icon footer_info_app"></i> 
                </dd> 
            </dl> 
            <dl> 
                <dt>艺龙官方微信</dt> 
                <dd class="pt10"> 
                    <i class="cm_icon footer_info_wx"></i> 
                </dd> 
            </dl> 
            <dl> 
                <dt>艺龙官方小程序</dt> 
                <dd class="pt10">
                     <i class="cm_icon footer_info_xcx"></i>
                </dd> 
            </dl> 
        </div>
        <div class="footer_copy"> © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
             <a href="">京ICP证010011号</a> 
             <a href=""><i class='jh'></i> 京公网安备11010502026059号</a>
             <i class="cm_icon"></i>
             <a href="">经营执照</a>
        </div>
        <div class="footer_safe">
        	<ul>
        		<li><i class='qua-1'></i></li>
        		<li><i class='qua-2'></i></li>
        		<li><i class='qua-3'></i></li>
        		<li><i class='qua-4'></i></li>
        		<li><i class='qua-5'></i></li>
        		<li><i class='qua-6'></i></li>
        	</ul>
        </div>
        <div style='background-color:#7c8fa2 '>
    		<ul class='bottoms'>
    			<li v-for='(path,index) in navs' @click='item_detail(index)'>
    				<a href="javascript:void(null)">{{path.title}}</a>
    			</li>
    		</ul>
        </div>
        <div class="detail">
            <div class="bottom_con" style='display: none;'> 
                <h2>酒店预订</h2> 
                <p>艺龙旅行网提供全球50万家酒店的预订服务和酒店团购服务。通过真实的酒店照片、酒店评价，无论您是和家人一起旅游度假还是商务出行，我们都能为您提供称心如意的酒店。</p> 
                <h2><a style="color: rgb(85, 85, 85);" href="http://hotel.elong.com/poi/">艺龙酒店地标大全</a></h2> 
                <p>为了方便用户快速定位酒店而存在，我们涵盖了北京、西安、上海、成都、广州、武汉、南京、东莞、长沙、深圳、重庆等城市的常见地标类型。</p> 
            </div>
            <div class="bottom_con" style='display: none;'> 
                <h2>机票查询</h2> 
                <p>艺龙旅行网是中航协认证的机票服务提供商，提供国内和国际的特价机票、航班信息、机票查询和预订服务。</p> 
            </div>
            <div class="bottom_con" style='display: none;'> 
                <h2>酒店团购</h2> 
                <p> 
                <a title="北京酒店团购" href="http://tuan.elong.com/beijing_0101_jiudian_tuangou/">北京酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="上海酒店团购" href="http://tuan.elong.com/shanghai_0201_jiudian_tuangou/">上海酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="三亚酒店团购" href="http://tuan.elong.com/sanya_2201_jiudian_tuangou/">三亚酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="广州酒店团购" href="http://tuan.elong.com/guangzhou_2001_jiudian_tuangou/">广州酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="杭州酒店团购" href="http://tuan.elong.com/hangzhou_1201_jiudian_tuangou/">杭州酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="厦门酒店团购" href="http://tuan.elong.com/xiamen_1401_jiudian_tuangou/">厦门酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="苏州酒店团购" href="http://tuan.elong.com/soochow_1102_jiudian_tuangou/">苏州酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="深圳酒店团购" href="http://tuan.elong.com/shenzhen_2003_jiudian_tuangou/">深圳酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="西安酒店团购" href="http://tuan.elong.com/xian_2701_jiudian_tuangou/">西安酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="成都酒店团购" href="http://tuan.elong.com/chengdu_2301_jiudian_tuangou/">成都酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="丽江酒店团购" href="http://tuan.elong.com/lijiang_2503_jiudian_tuangou/">丽江酒店团购</a><br> 
                <a title="武汉酒店团购" href="http://tuan.elong.com/wuhan_1801_jiudian_tuangou/">武汉酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="宁波酒店团购" href="http://tuan.elong.com/ningbo_1202_jiudian_tuangou/">宁波酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="重庆酒店团购" href="http://tuan.elong.com/chongqing_0401_jiudian_tuangou/">重庆酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="大连酒店团购" href="http://tuan.elong.com/dalian_0801_jiudian_tuangou/">大连酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="南京酒店团购" href="http://tuan.elong.com/nanjing_1101_jiudian_tuangou/">南京酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="青岛酒店团购" href="http://tuan.elong.com/qingdao_1601_jiudian_tuangou/">青岛酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="桂林酒店团购" href="http://tuan.elong.com/guilin_2101_jiudian_tuangou/">桂林酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="天津酒店团购" href="http://tuan.elong.com/tianjin_0301_jiudian_tuangou/">天津酒店团购</a><span class="pl5 pr5">|</span> 
                <a title="沈阳酒店团购" href="http://tuan.elong.com/shenyang_0802_jiudian_tuangou/">沈阳酒店团购</a><span class="pl5 pr5">|</span> 
                </p> 
            </div>
            <div class="bottom_con" style='display: none;'> 
                <h2>热门城市</h2> 
                <p> 
                <a title="北京酒店预订" href="http://hotel.elong.com/beijing/">北京酒店</a><span class="pl5 pr5">|</span> 
                <a title="上海酒店预订" href="http://hotel.elong.com/shanghai/">上海酒店</a><span class="pl5 pr5">|</span> 
                <a title="杭州酒店预订" href="http://hotel.elong.com/hangzhou/">杭州酒店</a><span class="pl5 pr5">|</span> 
                <a title="成都酒店预订" href="http://hotel.elong.com/chengdu/">成都酒店</a><span class="pl5 pr5">|</span> 
                <a title="深圳酒店预订" href="http://hotel.elong.com/shenzhen/">深圳酒店</a><span class="pl5 pr5">|</span> 
                <a title="青岛酒店预订" href="http://hotel.elong.com/qingdao/">青岛酒店</a><span class="pl5 pr5">|</span> 
                <a title="苏州酒店预订" href="http://hotel.elong.com/soochow/">苏州酒店</a><span class="pl5 pr5">|</span> 
                <a title="广州酒店预订" href="http://hotel.elong.com/guangzhou/">广州酒店</a><span class="pl5 pr5">|</span> 
                <a title="香港酒店预订" href="http://hotel.elong.com/hongkong/">香港酒店</a><span class="pl5 pr5">|</span> 
                <a title="厦门酒店预订" href="http://hotel.elong.com/xiamen/">厦门酒店</a><span class="pl5 pr5">|</span> 
                <a title="天津酒店预订" href="http://hotel.elong.com/tianjin/">天津酒店</a><span class="pl5 pr5">|</span> 
                <a title="西安酒店预订" href="http://hotel.elong.com/xian/">西安酒店</a><span class="pl5 pr5">|</span> 
                <a title="武汉酒店预订" href="http://hotel.elong.com/wuhan/">武汉酒店</a><span class="pl5 pr5">|</span> 
                <a title="重庆酒店预订" href="http://hotel.elong.com/chongqing/">重庆酒店</a><span class="pl5 pr5">|</span> 
                <a title="沈阳酒店预订" href="http://hotel.elong.com/shenyang/">沈阳酒店</a><span class="pl5 pr5">|</span> 
                <a title="长沙酒店预订" href="http://hotel.elong.com/changsha/">长沙酒店</a><span class="pl5 pr5">|</span> 
                <a title="三亚酒店预订" href="http://hotel.elong.com/sanya/">三亚酒店</a><span class="pl5 pr5">|</span> 
                <a title="珠海酒店预订" href="http://hotel.elong.com/zhuhai/">珠海酒店</a><span class="pl5 pr5">|</span> 
                <a title="宁波酒店预订" href="http://hotel.elong.com/ningbo/">宁波酒店</a><span class="pl5 pr5">|</span> 
                <a title="南京酒店预订" href="http://hotel.elong.com/nanjing/">南京酒店</a><span class="pl5 pr5">|</span> 
                <a title="大连酒店预订" href="http://hotel.elong.com/dalian/">大连酒店</a><span class="pl5 pr5">|</span> 
                <a title="济南酒店预订" href="http://hotel.elong.com/jinan/">济南酒店</a><span class="pl5 pr5">|</span> 
                <a title="昆明酒店预订" href="http://hotel.elong.com/kunming/">昆明酒店</a><span class="pl5 pr5">|</span> 
                <a title="合肥酒店预订" href="http://hotel.elong.com/hefei/">合肥酒店</a><span class="pl5 pr5">|</span> 
                </p> 
            </div>
            <div class="bottom_con" style='display: none;'> 
                <h2>合作伙伴</h2> 
                <p> 
                <a title="住哪网" href="http://www.zhuna.cn/" target="_blank">住哪网</a><span class="pl5 pr5">|</span> 
                <a title="TripAdvisor" href="http://www.tripadvisor.cn/" target="_blank">TripAdvisor</a><span class="pl5 pr5">|</span> 
                <a title="吉祥航空" href="http://www.juneyaoair.com/" target="_blank">吉祥航空</a><span class="pl5 pr5">|</span> 
                <a title="北京房产" href="http://bj.house.sina.com.cn/" target="_blank">北京房产</a><span class="pl5 pr5">|</span> 
                <a title="装修家居" href="http://www.jiaju.com/" target="_blank">装修家居</a><span class="pl5 pr5">|</span> 
                <a title="住哲酒店管理系统" href="http://www.zhuzher.com/" target="_blank">住哲酒店管理系统</a> 
                </p> 
            </div>
            <div class="bottom_con" style='display: none;'> 
                <h2>常见酒店</h2> 
                <p> 
                <a title="如家快捷酒店" href="http://hotel.elong.com/hotel-chain/32.html">如家酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="布丁连锁酒店" href="http://hotel.elong.com/hotel-chain/111.html">布丁酒店</a><span class="pl5 pr5">|</span> 
                <a title="酒店预订" href="http://hotel.elong.com/ ">酒店预订</a><span class="pl5 pr5">|</span> 
                <a title="汉庭连锁酒店" href="http://hotel.elong.com/hotel-chain/56.html ">汉庭酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="7天连锁酒店" href="http://hotel.elong.com/hotel-chain/53.html ">七天连锁酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="希尔顿饭店" href="http://hotel.elong.com/hotel-chain/14.html">希尔顿酒店</a><span class="pl5 pr5">|</span> 
                <a title="书香府邸附近酒店" href="http://hotel.elong.com/chengdu/place3220538/">书香府邸酒店</a><span class="pl5 pr5">|</span> 
                <a title="情侣主题酒店" href="http://www.elong.com/promotion/web/fold/fold2/index.html">情侣酒店</a><span class="pl5 pr5">|</span> 
                <a title="桔子酒店" href="http://hotel.elong.com/hotel-chain/65.html">桔子酒店</a><span class="pl5 pr5">|</span> 
                <a title="格林豪泰连锁酒店" href="http://hotel.elong.com/hotel-chain/44.html">格林豪泰连锁酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="香格里拉大酒店" href="http://hotel.elong.com/hotel-chain/11.html">香格里拉酒店</a><span class="pl5 pr5">|</span> 
                <a title="维也纳连锁酒店" href="http://hotel.elong.com/hotel-chain/97.html">维也纳酒店</a><span class="pl5 pr5">|</span> 
                <a title="喜来登酒店官网" href="http://hotel.elong.com/hotel-chain/313.html">喜来登酒店</a><span class="pl5 pr5">|</span> 
                <a title="公寓式酒店" href="http://jia.elong.com/">酒店式公寓</a><span class="pl5 pr5">|</span> 
                <a title="长隆酒店" href="http://hotel.elong.com/guangzhou/52015001/">广州长隆酒店</a><span class="pl5 pr5">|</span> 
                <a title="四季酒店官网" href="http://hotel.elong.com/hotel-chain/104.html">四季酒店</a><span class="pl5 pr5">|</span> 
                <a title="万豪酒店官网" href="http://hotel.elong.com/hotel-chain/13.html">万豪酒店</a><span class="pl5 pr5">|</span> 
                <a title="假日酒店" href="http://hotel.elong.com/hotel-chain/316.html">皇冠假日酒店</a><span class="pl5 pr5">|</span> 
                <a title="上海书香世家酒店" href="http://hotel.elong.com/shanghai/50201315/">书香世家酒店</a><span class="pl5 pr5">|</span> 
                <a title="凯宾斯基酒店官网" href="http://hotel.elong.com/hotel-chain/45.html">凯宾斯基酒店</a><span class="pl5 pr5">|</span> 
                <a title="锦江之星连锁酒店" href="http://hotel.elong.com/hotel-chain/34.html">锦江之星连锁酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="洲际酒店官网" href="http://hotel.elong.com/hotel-chain/15.html">洲际酒店</a><span class="pl5 pr5">|</span> 
                <a title="华住全季酒店官网" href="http://hotel.elong.com/hotel-chain/29323.html">全季酒店</a><span class="pl5 pr5">|</span> 
                <a title="广州大学城附近宾馆" href="http://hotel.elong.com/guangzhou/center100756275/">广州大学城附近酒店</a><span class="pl5 pr5">|</span> 
                <a title="威斯汀酒店官网" href="http://hotel.elong.com/hotel-chain/423.html">威斯汀酒店</a><span class="pl5 pr5">|</span> 
                <a title="杭州西湖附近酒店" href="http://hotel.elong.com/hangzhou/place2846567/">杭州西湖附近的酒店</a><span class="pl5 pr5">|</span> 
                <a title="W酒店官网" href="http://hotel.elong.com/hotel-chain/29303.html">w酒店</a><span class="pl5 pr5">|</span> 
                <a title="速八酒店" href="http://hotel.elong.com/hotel-chain/41.html">速8酒店官网</a><span class="pl5 pr5">|</span> 
                <a title="星程酒店官网" href="http://hotel.elong.com/hotel-chain/425.html">星程酒店</a><span class="pl5 pr5">|</span> 
                <a title="丽思卡尔顿酒店官网" href="http://hotel.elong.com/hotel-chain/488.html">丽思卡尔顿酒店</a><span class="pl5 pr5">|</span> 
                <a title="华天酒店官网" href="http://hotel.elong.com/hotel-chain/392.html">华天酒店</a><span class="pl5 pr5">|</span> 
                <a title="半岛酒店集团" href="http://hotel.elong.com/hotel-chain/390.html">半岛酒店</a><span class="pl5 pr5">|</span> 
                <a title="北京国宾酒店" href="http://hotel.elong.com/beijing/50101021/ ">国宾酒店</a><span class="pl5 pr5">|</span> 
                <a title="凯悦酒店官网" href="http://hotel.elong.com/hotel-chain/10.html ">凯悦酒店</a><span class="pl5 pr5">|</span> 
                <a title="宜必思酒店预订" href="http://hotel.elong.com/hotel-chain/312.html ">宜必思酒店</a><span class="pl5 pr5">|</span> 
                <a title="千岛湖洲际酒店官网" href="http://hotel.elong.com/qiandaohu_hangzhou/51233010/ ">千岛湖洲际度假酒店</a><span class="pl5 pr5">|</span> 
                <a title="北京盘古七星酒店" href="http://hotel.elong.com/beijing/50101507/ ">盘古七星酒店</a><span class="pl5 pr5">|</span> 
                <a title="北戴河刘庄家庭旅馆" href="http://hotel.elong.com/beidaihe/00508256/">北戴河刘庄家庭旅馆</a><span class="pl5 pr5">|</span> 
                <a title="公寓" href="http://www.elong.com/apartment/">公寓</a><span class="pl5 pr5">|</span> 
                <a title="家庭旅馆" href="http://www.elong.com/family/">家庭旅馆</a><span class="pl5 pr5">|</span> 
                <a title="青年旅舍" href="http://www.elong.com/youth/">青年旅舍</a><span class="pl5 pr5">|</span> 
                <a title="情侣酒店" href="http://www.elong.com/love/">情侣酒店</a><span class="pl5 pr5">|</span> 
                <a title="农家乐" href="http://www.elong.com/farmhouse/">农家乐</a><span class="pl5 pr5">|</span> 
                <a title="短租公寓" href="http://www.elong.com/shortrent/">短租公寓</a><span class="pl5 pr5">|</span> 
                <a title="客栈" href="http://www.elong.com/inn/">客栈</a><span class="pl5 pr5">|</span> 
                <a title="主题酒店" href="http://www.elong.com/theme/">主题酒店</a> 
                </p> 
            </div>
        </div>
	</div>
</template>
<style lang='scss' scope>
	#footer{
		width:100%;
		height:293px;
		font-size: .5rem;
        padding: 20px 0;
        border-top: 1px solid #EEE;
        min-width: 1000px;
        margin-top: 20px;
		.footer_info{
			width:1000px;
			margin:0 auto;
			display: flex;
			height: 160px;
			justify-content: space-around;
			line-height:1.8rem;
			dt{
				width: 100%;
				font-size: 1.1rem;
			}
			dd{
				a{
					color: #333;
				}
                &:hover a{
                    color:red;
                    margin-left: 5px;
                    transition: all .5s;
                }
			}
			.pt10{
/*        		width: 180px;
        		height: 110px;*/
            	.cm_icon{
            		display: inline-block;
            		width: 100px;
            		height: 100px;
            	}
            	.footer_info_app{
                    background: url(../../assets/image//icon201706.png) -150px -49px no-repeat;
            	}
            	.footer_info_wx{
            		background: url(../../assets/image/icon201706.png) -360px -49px no-repeat;
            	}
            	.footer_info_xcx{
            		background: url(../../assets/image/icon201706.png) -260px -49px no-repeat;
            	}
            }
		}
		.bottoms{
			background: #7c8fa2;
			line-height: 40px;
			height: 40px;
			width:1000px;
			margin:0 auto;
			display: flex;
			justify-content: space-around;
			li{
				 width:100%;
				 height: 100%;
				a{
					color:white;
				}
				&:hover{
					background-color: #333
				}
			}
		}
		.footer_copy{
			width: 100%;
			height: 18px;
            text-align: center;
            margin:36px 0;
            .cm_icon{
            	width: 22px;
            	height: 27px;
            	display: inline-block;
            }
            .jh{
            	display: inline-block;
            	width: 20px;
            	height: 20px;
            	background: url(../../assets/image/anbei.png);
            }
		}
		.footer_safe{
			margin:20px 0;
			width: 100%;
			height: 37px;
			ul{
				width:600px;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				li{
					i{
						display: inline-block;
						width: 80px;
						height:37px;
						cursor: pointer;
					}
					.qua-1{
						background: url(../../assets/image/icon201706.png) -328px -440px no-repeat;
					}
					.qua-2{
						background: url(../../assets/image/icon201706.png) -310px -483px no-repeat;
					}
					.qua-3{
						width: 93px;
						background: url(../../assets/image/icon201706.png) -472px -440px no-repeat;
					}
					.qua-4{
						width: 88px;
						background: url(../../assets/image/icon201706.png) -570px -440px no-repeat;
					}
					.qua-5{
						width: 88px;
						background: url(../../assets/image/icon201706.png) -660px -440px no-repeat;
					}
					.qua-6{
						width: 88px;
						background: url(../../assets/image/icon201706.png) -391px -482px no-repeat;
					}
					& i:hover {
					    margin-top: 5px;
					    transition: all .5s;
				    }
				}
		}

	}
    .detail{
        width:1000px;
        margin:0 auto;
        background-color: #f0f0f0; 
        text-align: left;
        line-height: 20px;
        overflow: hidden;
        div{
            margin-left: 20px;
            margin-top: 20px;
            h2{
                font-size:16px;
            }
            a{
                color:#333;
            }
        }
    }
}
</style>
<script type="text/javascript">
	export default{
		name:'v-footer',
		data(){
			return{
				navs:[
                    {path:'/jdyd',title:'酒店预订'},
                    {path:'/jpcx',title:'机票查询'},
                    {path:'/jdtg',title:'酒店团购'},
                    {path:'/rmcs',title:'热门城市'},
                    {path:'/hzhb',title:'合作伙伴'},
                    {path:'/cjjd',title:'常见酒店'},

				],
                detail_show:'',
                bottom_con:[]
			}
		},
        methods:{
            item_detail:function(index){
                this.detail_show=true
            },
            item_detail:function(index){
                var bottom_con=document.getElementsByClassName('bottom_con');
                this.bottom_con=bottom_con;
                for(var i=0;i<this.bottom_con.length;i++){
                    this.bottom_con[i].style.display='none'
                }
                this.bottom_con[index].style.display='block'
            }
        },
        mounted(){

        }
	}
</script>