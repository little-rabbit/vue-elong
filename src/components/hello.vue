<template>
	<div id="hello">
		<v-header></v-header>
		<v-content>
            <div class="box">
                <div class="swiper">
                   <ul>
                       <li v-for='(item,index) in arr1' :class='{showImg:num==index}'>
                       </li>
                   </ul>
                </div>
                <div class="circle">
                   <ul>
                       <li v-for='(item,index) in arr1' :class='{bgb:num==index}' @click='changeb(index)'></li>
                   </ul>
               </div>
               <div class="controller">  
                   <ul class="left">
                       <li v-for='(item,index) in arr_controller'>
                           {{item}}
                       </li>
                   </ul>
                   <div class="box">
                   <ul class="right">
                       <div class="hotel_right">
                            <b @click='china_show' :class='{bor:china_shows==true}'>国内酒店</b> <b @click='china_out_show' :class='{bor:china_out_shows==true}'>国际酒店</b>
                        </div>
                       <li class="controller_show" v-show='china_shows'>  
                           <dl>
                               <dt>目的地</dt>
                               <dd class='long'><input type='text' value='黄山市'></dd>
                           </dl>
                           <dl>
                               <dt>入住</dt>
                               <dd class='short'>
                                   <label>
                                       <input type='date' value='2017-11-23'>
                                       <i></i>
                                   </label>
                               </dd>
                               <dt class='last_dt'>退房</dt>
                               <dd class='short'>
                                   <label>
                                       <input type='date' value='2017-11-24'>
                                       <i></i>
                                   </label>
                               </dd>
                           </dl>
                           <dl>
                               <dt>关键词</dt>
                               <dd class='long'>
                                   <input type='text' placeholder="如位置\酒店名\品牌">
                               </dd>
                           </dl>
                           <div class="submit_warp">
                               <span class='sosuo'>搜索</span>
                               <span class='map'>地图搜索</span>
                           </div>
                       </li>
                       <li class="controller_show" v-show='china_out_shows'>  
                           <dl>
                               <dt>目的地</dt>
                               <dd class='long'><input type='text' value='首尔'></dd>
                           </dl>
                           <dl>
                               <dt>入住</dt>
                               <dd class='short'>
                                   <label>
                                       <input type='date' value='2017-11-23'>
                                       <i></i>
                                   </label>
                               </dd>
                               <dt class='last_dt'>退房</dt>
                               <dd class='short'>
                                   <label>
                                       <input type='date' value='2017-11-24'>
                                       <i></i>
                                   </label>
                               </dd>
                           </dl>
                           <dl>
                               <dt>关键词</dt>
                               <dd class='long'>
                                   <input type='text' placeholder="如圈子\酒店名\品牌">
                               </dd>
                           </dl>
                           <div class="submit_warp">
                               <span class='sosuo'>搜索</span>
                           </div>
                       </li> 
                   </ul>
                   </div>
               </div>
            </div>
            <!-- 酒店 -->
            <div class="hotel_box">
                <div class="wrap1" v-show='wrap1_show'>
                    <div class="left">
                        <i class="ei_icon"></i>
                        <a href="https://secure.elong.com/passport/login_cn.html">登录</a>
                        <font>展示你的个性化内容</font>
                    </div>
                </div>
                <ul>
                    <li v-for='(item,index) in arr_h' @mouseover='hotel_over(index)' @mouseout='hotel_out(index)' :class='{hotel_big:cont==index,hotel_small:cont!=index,hotel_normal:cont==-1}'>
                        <div v-show='cont!=index'>
                            <h4>{{item.title}}</h4>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- 国内 -->
            <div class="china_box">
                <h2 class="clearfix">
                    <a class="pr10" href="javascript:void(0);" style="cursor:text;">目的地指数</a> 
                    <span>覆盖全球75万家酒店，你想住的，我们都有</span>
                </h2>
                <h3>
                    <a href="http://localhost:8080/#/china"><i></i>国内</a>
                    <ul>
                        <li v-for='(item,index) in arr_china' @click='theme(index)' :class='{bg:cont_theme==index}'>
                            {{item.title}}
                        </li>
                    </ul>
                    <a href="http://hotel.elong.com/">更多>>></a>
                </h3>
                <ul class="tab_theme" v-for='(item,index) in arr_china' v-show='cont_theme==index'>
                    <li v-for='(child,index) in item.data'>

                        <div class='add_pc'>
                             <a href="http://localhost:8080/#/china"><img :src="child.src"></a>
                        </div>  
                        <div class="city_name">{{child.marks}}</div>
                        <p>{{child.detail}}</p>
                    </li>
                </ul>
            </div>
            <!-- 海外 -->
            <div class="china_out">
                <h3>
                    <a href="http://localhost:8080/#/inter"><i></i>海外</a>
                    <ul class='out_title'>
                        <li v-for='(item,index) in arr_out' @click='themes(index)' :class='{bg:cont_themes==index}'>
                            {{item.title}}
                        </li>
                    </ul>
                    <a href="http://hotel.elong.com/">更多>>></a>
                </h3>
                <ul class="tab_theme" v-for='(item,index) in arr_out' v-show='cont_themes==index'>
                    <li v-for='(child,index) in item.data'>
                        <div class='add_pc'>
                             <img :src="child.src">
                        </div>  
                        <div class="city_name">{{child.marks}}</div>
                        <p>{{child.detail}}</p>
                    </li>
                </ul>
            </div>
            <!-- 票 -->
            <div class="paper_box">
                <h2 class="clearfix">
                    <a class="pr10" href="javascript:void(0);" style="cursor:text;">超值特价票</a> 
                </h2>
                <h3>
                    <a href="http://localhost:8080/#/plane"><i></i>机票</a>
                    <ul>
                        <li v-for='(item,index) in arr_paper' @click='themess(index)' :class='{bg_paper:cont_themess==index}'>
                            {{item.title}}
                        </li>
                    </ul>
                    <a href="http://hotel.elong.com/">更多>>></a>
                </h3>
                <ul class="tab_theme" v-for='(item,index) in arr_paper' v-show='cont_themess==index'>
                    <li v-for='(child,index) in item.data'>
                         <div class="top">
                             <span>{{child.from}}</span>
                             <i class='plain'></i>
                             <span>{{child.to}}</span>
                         </div>
                        <div class="bottom">
                             <span>{{child.time}}</span>
                             <span class='discount'>{{child.discount}}</span>
                             <span class='price'>{{child.price}}</span>
                         </div>
                    </li>
                </ul>
                <h3 style='margin-top: 20px;'>
                    <a href="http://localhost:8080/#/train"><i></i>火车票</a>
                    <ul>
                        <li v-for='(item,index) in arr_paper' @click='themesss(index)' :class='{bg_paper:cont_themesss==index}'>
                            {{item.title}}
                        </li>
                    </ul>
                    <a href="http://hotel.elong.com/">更多>>></a>
                </h3>
                <ul class="tab_theme" v-for='(item,index) in arr_paper' v-show='cont_themesss==index' >
                    <li v-for='(child,index) in item.data'>
                         <div class="top">
                             <span>{{child.from}}</span>
                             <i class='train'></i>
                             <span>{{child.to}}</span>
                         </div>
                        <div class="bottom">
                             <span>{{child.time}}</span>
                             <span class='discount'>{{child.discount}}</span>
                             <span class='price'>{{child.price}}</span>
                         </div>
                    </li>
                </ul>
            </div>
            <!-- 旅行指南 -->
            <div class="point_box">
                <h2 class="clearfix">
                    <a class="pr10" href="http://localhost:8080/#/point" style="cursor:text;">旅行指南</a> 
                </h2>
                <div class="left">
                    <ul class="theme">
                        <li v-for='(item,index) in arr_point' @mouseover='point_over(index)'>
                            {{item.title}}
                        </li>
                    </ul>
                    <ul class="thene_show">
                        <li v-for='(item,index) in arr_point' v-show='cont_point==index'>
                            <img :src="item.src">
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <ul>
                        <li v-for='item in point_right'>
                            <img :src="item.src">
                            <p>{{item.marks}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 页尾部分 -->
            <div class="bottom_box">
                <div class="top">
                    <ul>
                        <li>
                            <i></i>
                            <span>全球75万家酒店</span>
                        </li>
                        <li>
                            <i></i>
                            <span>订酒店返现金高达20%</span>
                        </li>
                        <li>
                            <i></i>
                            <span>国际酒店8折起</span>
                        </li>
                        <li>
                            <i></i>
                            <span>7X24小时服务</span>
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <span>亲，留下您的邮箱，会有惊喜呦~ </span>
                    <input type='text' placeholder="请输入您的E-mail">
                    <input type='button' value='立即订阅'>
                    <a href="">艺龙服务协议</a>
                </div>
            </div>
		</v-content>
		<v-footer></v-footer>
	</div>
</template>
<style lang='scss' scope>
body,ul,li,h1,h2,h3,h4,h5{
    margin:0;
    padding:0;
}
*{
    li{
        cursor: pointer;
    }
}
html{
    background-color: #fff;
}
.clearfix{
    width: 1200px;
    height: 30px;
    padding:5px 0;
    text-align: left;
    margin: 0 auto;
    border-bottom: 2px solid #f55;
    line-height: 30px;
    a{
        font: 24px/30px Microsoft yahei;
        color: #f55;
    }
    span{
        font: 14px/30px Microsoft yahei;
        color: #999;
    }
}
h3{
    position: relative;
    width: 1200px;
    height: 28px;
    margin: 10px auto;
    text-align: left;
    font-size: 14px;
    line-height: 28px;
    color: #666;
    a:nth-of-type(1){
        display:block;
        width: 85px;
        height: 24px;
        float: left;
        font-size:17px;
        color: #666;
        i{
            display: inline-block;
            width: 24px;
            height: 24px;
            background:url(../assets/image/icon_index.png) -575px -101px;
            vertical-align: top;
            margin-right:6px;
        }
    }
    ul{
        width:600px;
        height: 28px;
        position: absolute;
        top:0;
        left:90px;
        display: flex;
        justify-content: space-around;
        li{
            width: 76px;
            height: 28px;
            text-align: center;    
            border:1px solid #fff;
            -webkit-border-radius:30px;
            border-radius:30px;
            
            &:hover{ 
                border:1px solid #f55;
                color:#f55;
                background-color: white;
            }
        }
        .bg{
            color: white; 
            background-color: #f55;
        }
    }
    a:nth-of-type(2){
        position: absolute;
        right: 0;
    }
}
@mixin theme_border{
    .tab_theme{
        width: 1200px;
        margin:0 auto;
        height:202px;
        display: flex;
        justify-content: space-between;
        position: relative;
        li{
            width:293px;
            height: 202px;
            .city_name{
                position: absolute;
                top:120px;
                color:white;
                font-size:24px;
                margin-left: 5px;
            }
            .add_pc{
                width: 293px;
                height:160px;
                overflow: hidden;
                img{
                    width: 293px;
                    height: 202px; 
                    -webkit-transiton:all .3s;
                    transition:all .3s;
                    &:hover{
                        margin-top:-20px;
                        -webkit-transiton:all .3s;
                        transition:all .3s;
                    } 
                }
            }
            p{
                width:96%;
                padding: 5px;
                float: left;
                background: #f7f7f7;
                border-bottom: 1px solid #ccc;
                margin-bottom: 1px;
                text-align: left;
                font-size: 14px;
            }
            &:hover p{
                border-bottom: 2px solid #f55;
            }
        }
    }
}
#hello{
    .box{
        /*轮播banner*/
        width:100%;
        height: 380px;
        position: relative;
        .swiper{
        	width:1200px;
        	height: 380px;
        	ul{
        		li{
                    width: 100%;
                    position: absolute;
                    opacity: 0;
                    transition: all 2s;
                    height:380px;
        		}
                li:nth-of-type(1){
                    background:url(../assets/image/ban1.jpg) center;
                }
                li:nth-of-type(2){
                    background:url(../assets/image/ban2.jpg) center;
                }
                li:nth-of-type(3){
                    background:url(../assets/image/ban3.jpg) center;
                }
                li:nth-of-type(4){
                    background:url(../assets/image/ban4.jpg) center;
                }
                li:nth-of-type(5){
                    background:url(../assets/image/ban5.jpg) center;
                }
                .showImg{
                    opacity: 1;
                }
        	}
        }
        /*轮播小圆圈*/
        .circle{
            width: 250px;
            height: 30px; 
            position: absolute;
            z-index: 33;
            right: 20px;
            top:340px;
            ul{
                width: 250px;
                height: 30px;
                display: flex;
                justify-content: space-around;
                li{
                    margin:15px 0;
                    width: 30px;
                    height: 4px;
                    background-color:#666;
                   
                }
                .bgb{
                    background-color: #FF6500;
                }
            }
        }
        .controller{
            width: 600px;
            height: 300px;
            display: flex;
            justify-content: space-between;
            box-shadow: 2px 2px 2px #666;
            background-color: #fff;
            position: absolute;
            top:40px;
            left:70px;
            z-index: 44;
            font-size: 14px;
            .left{
                width: 100px;
                height: 300px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                li{
                    width: 100%;
                    height: 100%;
                    line-height: 60px;
                    text-align: center; 
                    border-right: 1px solid #e1e1e1;
                    background-color:#f3f3f3; 
                }
                li:nth-of-type(1),li:nth-of-type(2){
                    border-bottom: 1px solid #e1e1e1;
                }
            }
            .box{
                margin:0 auto;
                width: 440px;
                height: 257px;
                .right{
                    width:100%;
                    height: 257px;
                    .hotel_right{
                        width: 440px;
                        height: 32px;
                        margin-top: 20px;
                        border-bottom: 2px solid #aaa;
                        b{
                            width: 90px;
                            height: 32px;
                           
                            float: left;
                        }
                        .bor{
                            border-bottom: 2px solid #37D; 
                            color:#37D;
                        }
                    }
                    input{
                        border:0;
                        line-height: 36px;
                        height: 34px;
                        width: 80%;
                        margin-left:8px;
                    }
                    input:focus{
                        border:0;/*这里你可以自己调节边框样式*/
                        outline: none;
                    }
                    .controller_show{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        dl{
                            width: 440px;
                            height: 32px;
                            margin-top: 20px;
                            line-height: 32px;
                            dt{
                                width:50px;
                                float: left;
                                text-align: right;
                                margin:0 8px;
                            }
                            .last_dt{
                                width:30px;
                            }
                            dd{
                                float: left;
                                text-align: left;
                                border-radius:6px;
                            }
                            .long{
                                width: 370px;
                                height: 34px;
                                border:1px solid #ccc;
                            }
                            .short{
                                width:160px;
                                height: 34px;
                                border:1px solid #ccc;
                                label{
                                    width: 100%;
                                    height: 100%;
                                    display: inline-block;
                                    i{
                                        display: inline-block;
                                        width: 16px;
                                        height: 16px;
                                        background: url(../assets/image/icon2015-0.png) -480px -763px;
                                        position: absolute;
                                        z-index: 888;
                                        margin:7px 0;
                                    }
                                }
                            }
                        }
                        .submit_warp{
                            width: 280px;
                            height: 32px;
                            padding-left:58px;
                            margin-top: 20px;
                            span{
                                display: inline-block;
                                height: 32px;
                                border-radius: 4px;
                                line-height: 32px;
                            }
                            .sosuo{
                                width: 159px;
                                background-color: #f55;
                                color: white;
                                font-size:16px;
                                margin-right: 5px;
                                &:hover{
                                    background-color:#e55;;
                                }
                            }
                            .map{
                                width: 95px;
                                border:1px solid #ccc;
                                &:hover{
                                    background: #39f;
                                    border: 1px solid #39f;
                                    color: #FFF;
                                }
                            }
                        }
                    }
                    
                }
            }
            
        }
    }
    /*酒店*/
    .hotel_box{
        width:100%;
        .wrap1{
            width: 1200px;
            margin:20px auto;
            height: 32px;
            .left{
                float: left;
                width: 215px;
                -webkit-border-radius:20px;
                padding: 5px 20px;
                border-radius: 20px;
                border: 1px solid #ccc;
                font-size: 14px;
                color: #555;
                i{
                    display: inline-block;
                    width: 14px;
                    height:15px;
                    background:url(../assets/image/icon_index.png) -583px -13px;
                }
            }
        }
        ul{
            width: 1200px;
            height:260px;
            margin: 0 auto;
            display: flex;
            justify-content: center;

            li{
                width:171px;
                transition: all .5s linear;
                position: relative;
                div{
                    width:100%;
                    height: 100%;
                    position: absolute;
                    background: rgba(1,1,1,.5);
                    h4{
                        color: #fff;
                        width: 30px;
                        margin: 0 auto;
                        display: block;
                        font: 30px/30px Microsoft Yahei;
                        position: relative;
                        padding: 30px 0 0 0;
                    }
                }
            }
            li:nth-of-type(1){
                background:url(../assets/image/hotel1.jpg) center;
            }
            li:nth-of-type(2){
                background:url(../assets/image/hotel2.jpg) center;
            }
            li:nth-of-type(3){
                background:url(../assets/image/hotel3.jpg) center;
            }
            li:nth-of-type(4){
                background:url(../assets/image/hotel4.jpg) center;
            }
            li:nth-of-type(5){
                background:url(../assets/image/hotel5.jpg) center;
            }
            li:nth-of-type(6){
                background:url(../assets/image/hotel6.jpg) center;
            }
            li:nth-of-type(7){
                background:url(../assets/image/hotel7.jpg) center;
            }
            .hotel_big{
                transition: all .5s linear;
                width: 400px;
            }
            .hotel_small{
                transition: all .5s linear;
                width: 133px;
            }
            .hotel_normal{
                width:171px;
            }
        }
    }
    /*国内*/
    .china_box{
        width:100%;
        height:250px; 
        margin-top: 20px;
        @include theme_border
    }
    /*海外*/
    .china_out{
        width:100%;
        height:250px; 
        margin-top: 60px;
        a:nth-of-type(1){
            i{
                background:url(../assets/image/icon_index.png) -575px -131px!important;
            }
        }
        .out_title{
            width:500px!important;
        }
        @include theme_border
    }
    /*票*/
    .paper_box{
        width:100%;
        height:374px;
        .bg_paper{
            background-color: #49f;
            color: white;
        }
        .clearfix{
            border-bottom: 2px solid #49f!important;
            a{color:#49f!important;}
        } 
        h3{
            a:nth-of-type(1){
                i{
                    background:url(../assets/image/icon_index.png) -573px -189px!important;
                }
            }
            ul{
                li{
                    &:hover{ 
                        border:1px solid #49f;
                        color:#49f;
                        background-color: white;
                    }
                }
            }
        }
        h3:nth-of-type(2){
             a:nth-of-type(1){
                i{
                    background:url(../assets/image/icon_index.png) -573px -220px!important;
                    height: 25px;
                }
            }
        }
        .tab_theme{
            font-size: 14px;
            width: 1200px;
            height:101px;
            margin:0 auto;
            display: flex;
            justify-content: space-between;
            li{
                background-color: #f4f9ff;
                width: 100%;
                height: 100%;
                border: 1px solid #d8e8fe;
                &:hover{
                    border:1px solid #4599ff;
                }
                .top{
                    margin-top:30px;
                }
                .top,.bottom{
                    width:100%;
                    height:40%;
                    span{
                        display: inline-block;
                        width: 58px;
                        height: 20px;
                        overflow: hidden;
                    }
                    .discount{
                        background-color: #090;
                        color: white;
                        border-radius: 8px;
                        width: 36px;
                        height: 20px;
                    }
                    .price{
                        color: #fc6622;
                        font-size: 16px; 
                    }
                    .plain{
                        display: inline-block;
                        width:30px;
                        height: 20px; 
                        background:url(../assets/image/icon_index.png) -568px -162px;
                    }
                    .train{
                        @extend .plain;
                        background:url(../assets/image/icon_index.png) -527px -162px;
                    }
                }
            }
        }
    }
    /*旅行指南*/
    .point_box{
        width:1200px;
        margin:0 auto;
        height:274px; 
        .clearfix{
            border-bottom: 2px solid #77cc11!important;
            a{color:#77cc11!important;}
        }
        .left{
            margin-top: 10px;
            width: 580px;
            height: 220px;
            float: left;
            .theme{
                width: 200px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;
                font-size: 14px;
                float: left;
                li{
                    width: 100%;
                    height:100%;
                    line-height:54px;
                    border-bottom: 1px solid #ccc;
                    &:hover{
                        background: #89ca00;
                        color: #fff;
                    }
                }
            }
            .thene_show{
                 float: left;
            }
        }
        .right{
            margin-top: 10px;
            width: 600px;
            height: 220px;
            float: right;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                li{
                    width: 100%;
                    height: 100%;
                    
                    img{
                        width:99%;
                    }
                    p{
                        width:96%;
                        height:32px;
                        padding: 5px;
                        line-height: 32px;
                        float: left;
                        background: #f7f7f7;
                        border-bottom: 1px solid #ccc;
                        margin-bottom: 1px;
                        text-align: left;
                        font-size: 14px;
                    }
                    &:hover p{
                        border-bottom: 2px solid #89ca00;
                        color: #F55
                    }
                }
            }
        }
    }
    /*页尾*/
    .bottom_box{
        width:1200px;
        margin:20px auto;
        height:181px; 
        .top{
            width:96.6%;
            height: 60px;
            overflow: hidden;
            padding:20px;
            border-bottom: 1px solid #e5e5e5;
            background-color:#f7f7f7;
            ul{
                display: flex;
                justify-content: space-between;
                text-align: left;
                li{
                    width: 100%;
                    height: 100%;
                    i{
                        display: inline-block;
                        width: 60px;
                        height: 60px;
                        -webkit-border-radius:50px;
                        border-radius:50px;
                        vertical-align: middle;
                        margin-right: 10px;
                        &:hover{
                              animation: myi 3s infinite linear;
                              @keyframes myi
                              {
                                0%{transform:rotateZ(15deg)}
                                5%{transform:rotateZ(-15deg)}
                                10%{transform:rotateZ(15deg)}
                                15%{transform:rotateZ(-15deg)}
                                20%{transform:rotateZ(15deg)}
                                25%{transform:rotateZ(-15deg)}
                                30%{transform:rotateZ(0deg)}
                                100%{transform:rotateZ(0deg)}
                              }
                              @keyframes myi
                              {
                                0%{-webkit-transform:rotateZ(15deg);}
                                5%{-webkit-transform:rotateZ(-15deg);}
                                10%{-webkit-transform:rotateZ(15deg);}
                                15%{-webkit-transform:rotateZ(-15deg);}
                                20%{-webkit-transform:rotateZ(15deg);}
                                25%{-webkit-transform:rotateZ(-15deg);}
                                30%{-webkit-transform:rotateZ(0deg);}
                                100%{-webkit-transform:rotateZ(0deg);}
                              }
                        }
                    }
                }
                li:nth-of-type(1){
                    i{
                        background:url(../assets/image/icon_index.png) -90px -4px;
                    }
                }
                li:nth-of-type(2){
                    i{
                        background:url(../assets/image/icon_index.png) -160px -4px;
                    }
                }
                li:nth-of-type(3){
                    i{
                        background:url(../assets/image/icon_index.png) -230px -4px;
                    }
                }
                li:nth-of-type(4){
                    i{
                        background:url(../assets/image/icon_index.png) -295px -4px;
                    }
                }
            }
        }
        .bottom{
            height: 80px;
            line-height: 80px;
            background-color:#f7f7f7;
            span{
                color:#71829d;
            }
            input:nth-of-type(1){
                height: 30px;
                width: 208px;
            }
            input:nth-of-type(2){
                border:0;
                width: 80px;
                height: 33px;
                background: #3377dd;
                color: #fff;
                margin-left:-5px;
                vertical-align: middle;
            }
            a{
                font-size: 14px;
                float: right;
                margin-right: 10px;
            }
        }
    }


}
</style>
<script type="text/javascript">
import Bana from '../assets/image/ban1.jpg'
    import Banb from '../assets/image/ban2.jpg'
    import Banc from '../assets/image/ban3.jpg'
    import Band from '../assets/image/ban4.jpg'
    import Bane from '../assets/image/ban5.jpg'

    import H1 from '../assets/image/hotel1.jpg'
    import H2 from '../assets/image/hotel2.jpg'
    import H3 from '../assets/image/hotel3.jpg'
    import H4 from '../assets/image/hotel4.jpg'
    import H5 from '../assets/image/hotel5.jpg'
    import H6 from '../assets/image/hotel6.jpg'
    import H7 from '../assets/image/hotel7.jpg'

    import hs1 from '../assets/image/dgtq-hs.jpg'
    import hs2 from '../assets/image/dgtq-ems.jpg'
    import hs3 from '../assets/image/dgtq-wts.jpg'
    import hs4 from '../assets/image/dgtq-ls.jpg'

    import tmh1 from '../assets/image/hbtl-tianmuhu.jpg'
    import tmh2 from '../assets/image/hbtl-tianmuweihai.jpg'
    import tmh3 from '../assets/image/hbtl-zhongshan.jpg'
    import tmh4 from '../assets/image/hbtl-anbo.jpg'

    import ld1 from '../assets/image/termini_it1_ld.jpg'
    import ld2 from '../assets/image/termini_it1_qm.jpg'
    import ld3 from '../assets/image/termini_it1_jzd.jpg'
    import ld4 from '../assets/image/termini_it1_lm.jpg'

    import pj1 from '../assets/image/termini_it2_pjd.jpg'
    import pj2 from '../assets/image/termini_it2_medf.jpg'
    import pj3 from '../assets/image/termini_it2_sb.jpg'
    import pj4 from '../assets/image/termini_it2_xwy.jpg'

    import point1 from '../assets/image/17072891.jpg'
    import point2 from '../assets/image/17072892.jpg'
    import point3 from '../assets/image/17072893.jpg'
    import point4 from '../assets/image/17051704.jpg'   
    import point5 from '../assets/image/17080254.jpg'
    import point6 from '../assets/image/17030505.jpg' 
    export default{
        name:'Hello',
        data() {  
            return {
                arr1:[Bana,Banb,Banc,Band,Bane],
                t:'',
                num:0,
                cont_theme:0,
                cont_themes:0,
                cont_themess:0,
                cont_themesss:0,
                cont:-1,
                wrap1_show:false,
                t1:'',
                cont_point:0,
                china_shows:true,
                china_out_shows:false,
                arr_controller:['酒店','手机版','','',''],
                arr_h:[
                    {src:H1,title:'园林酒店'},
                    {src:H2,title:'情侣酒店'},
                    {src:H3,title:'设计师酒店'},
                    {src:H4,title:'青年旅社'},
                    {src:H5,title:'特色客栈'},
                    {src:H6,title:'海岛酒店'},
                    {src:H7,title:'海外温泉'}
                ],
                arr_china:[
                    {title:'登高踏青',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'黄山',src:hs1},
                             {detail:'古树错落 帝王温泉',marks:'峨眉山',src:hs2},
                             {detail:'古树错落 帝王温泉',marks:'五台山',src:hs3},
                             {detail:'古树错落 帝王温泉',marks:'庐山',src:hs4},
                        ]
                     },
                    {title:'小憩温泉',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'天目湖',src:tmh1},
                             {detail:'古树错落 帝王温泉',marks:'威海温泉',src:tmh2},
                             {detail:'古树错落 帝王温泉',marks:'广东中山温泉',src:tmh3},
                             {detail:'古树错落 帝王温泉',marks:'辽宁大连安波温泉',src:tmh4},
                        ]
                     },
                    {title:'天然氧吧',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'黄山',src:hs1},
                             {detail:'古树错落 帝王温泉',marks:'峨眉山',src:hs2},
                             {detail:'古树错落 帝王温泉',marks:'五台山',src:hs3},
                             {detail:'古树错落 帝王温泉',marks:'庐山',src:hs4},
                        ]
                     },
                    {title:'草原撒欢',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'天目湖',src:tmh1},
                             {detail:'古树错落 帝王温泉',marks:'威海温泉',src:tmh2},
                             {detail:'古树错落 帝王温泉',marks:'广东中山温泉',src:tmh3},
                             {detail:'古树错落 帝王温泉',marks:'辽宁大连安波温泉',src:tmh4},
                        ]
                     },
                    {title:'小镇时光',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'黄山',src:hs1},
                             {detail:'古树错落 帝王温泉',marks:'峨眉山',src:hs2},
                             {detail:'古树错落 帝王温泉',marks:'五台山',src:hs3},
                             {detail:'古树错落 帝王温泉',marks:'庐山',src:hs4},
                        ]
                     },
                    {title:'美食之城',
                        'data':[
                             {detail:'古树错落 帝王温泉',marks:'天目湖',src:tmh1},
                             {detail:'古树错落 帝王温泉',marks:'威海温泉',src:tmh2},
                             {detail:'古树错落 帝王温泉',marks:'广东中山温泉',src:tmh3},
                             {detail:'古树错落 帝王温泉',marks:'辽宁大连安波温泉',src:tmh4},
                        ]
                     }
                ],
                arr_out:[
                    {title:'文艺清新',
                        'data':[
                             {detail:'风情英伦',marks:'伦敦',src:ld1},
                             {detail:'泰北玫瑰',marks:'清迈',src:ld2},
                             {detail:'最传统的浪漫',marks:'济州岛',src:ld3},
                             {detail:'永恒之城，魅力无限',marks:'罗马',src:ld4},
                        ]
                     },
                    {title:'面朝大海',
                        'data':[
                             {detail:'海岛胜地 天人合一',marks:'普吉岛',src:pj1},
                             {detail:'一鸟一世界',marks:'马尔代夫',src:pj2},
                             {detail:'纯净之地的原生态梦幻岛屿',marks:'沙巴',src:pj3},
                             {detail:'凝聚着东方妩媚与西方性感',marks:'夏威夷',src:pj4},
                        ]
                     },
                    {title:'别样建筑',
                        'data':[
                             {detail:'风情英伦',marks:'伦敦',src:ld1},
                             {detail:'泰北玫瑰',marks:'清迈',src:ld2},
                             {detail:'最传统的浪漫',marks:'济州岛',src:ld3},
                             {detail:'永恒之城，魅力无限',marks:'罗马',src:ld4},
                        ]
                     },
                    {title:'浪漫主义',
                        'data':[
                             {detail:'海岛胜地 天人合一',marks:'普吉岛',src:pj1},
                             {detail:'一鸟一世界',marks:'马尔代夫',src:pj2},
                             {detail:'纯净之地的原生态梦幻岛屿',marks:'沙巴',src:pj3},
                             {detail:'凝聚着东方妩媚与西方性感',marks:'夏威夷',src:pj4},
                        ]
                     },
                    {title:'魅力都市',
                        'data':[
                             {detail:'风情英伦',marks:'伦敦',src:ld1},
                             {detail:'泰北玫瑰',marks:'清迈',src:ld2},
                             {detail:'最传统的浪漫',marks:'济州岛',src:ld3},
                             {detail:'永恒之城，魅力无限',marks:'罗马',src:ld4},
                        ]
                     }
                ],
                arr_paper:[
                   {title:'北京出发',
                        'data':[
                             {from:'北京',to:'大连',time:'12月11日',discount:'1.6折',price:'￥140'},
                             {from:'北京',to:'烟台',time:'11月28日',discount:'2折',price:'￥140'},
                             {from:'北京',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥160'},
                             {from:'北京',to:'银川',time:'11月27日',discount:'1.5折',price:'￥180'},
                             {from:'北京',to:'太原',time:'11月21日',discount:'1.6折',price:'￥200'},
                             {from:'北京',to:'青岛',time:'11月26日',discount:'1.6折',price:'￥210'},
                        ]
                  },
                   {title:'上海出发',
                        'data':[
                             {from:'上海',to:'大连',time:'12月11日',discount:'1折',price:'￥140'},
                             {from:'上海',to:'烟台',time:'11月28日',discount:'2折',price:'￥140'},
                             {from:'上海',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥160'},
                             {from:'上海',to:'银川',time:'11月27日',discount:'5折',price:'￥180'},
                             {from:'上海',to:'太原',time:'2月',discount:'1.6折',price:'￥200'},
                             {from:'上海',to:'青岛',time:'11月26日',discount:'6折',price:'￥210'},
                        ]
                  },
                   {title:'广州出发',
                        'data':[
                             {from:'广州',to:'大连',time:'12月11日',discount:'1.6折',price:'￥140'},
                             {from:'广州',to:'烟台',time:'11月28日',discount:'2折',price:'￥140'},
                             {from:'广州',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥160'},
                             {from:'广州',to:'银川',time:'',discount:'1折',price:'￥180'},
                             {from:'广州',to:'太原',time:'11月21日',discount:'1.6折',price:'￥200'},
                             {from:'广州',to:'青岛',time:'11月26日',discount:'1折',price:'￥210'},
                        ]
                  },
                   {title:'杭州出发',
                        'data':[
                             {from:'杭州',to:'大连',time:'12月11日',discount:'1.6折',price:'￥140'},
                             {from:'杭州',to:'烟台',time:'11月28日',discount:'2折',price:'￥140'},
                             {from:'杭州',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥160'},
                             {from:'杭州',to:'银川',time:'11月27日',discount:'8折',price:'￥180'},
                             {from:'杭州',to:'太原',time:'11月21日',discount:'1.6折',price:'￥200'},
                             {from:'杭州',to:'青岛',time:'11',discount:'1折',price:'￥210'},
                        ]
                  },
                   {title:'深圳出发',
                        'data':[
                             {from:'深圳',to:'大连',time:'12',discount:'1.6折',price:'￥100'},
                             {from:'深圳',to:'烟台',time:'11月28日',discount:'2折',price:'￥180'},
                             {from:'深圳',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥500'},
                             {from:'深圳',to:'银川',time:'11',discount:'1.5折',price:'￥180'},
                             {from:'深圳',to:'太原',time:'11月21日',discount:'1.6折',price:'￥200'},
                             {from:'深圳',to:'青岛',time:'11月26日',discount:'1.6折',price:'￥210'},
                        ]
                  },
                   {title:'成都出发',
                        'data':[
                             {from:'成都',to:'大连',time:'12月11日',discount:'1.6折',price:'￥840'},
                             {from:'成都',to:'烟台',time:'11月21日',discount:'2折',price:'￥140'},
                             {from:'成都',to:'鄂尔多斯',time:'11月26日',discount:'2折',price:'￥160'},
                             {from:'成都',to:'银川',time:'11月28日',discount:'1.5折',price:'￥180'},
                             {from:'成都',to:'太原',time:'11月21日',discount:'1.6折',price:'￥200'},
                             {from:'成都',to:'青岛',time:'11月26日',discount:'1.6折',price:'￥210'},
                        ]
                  },
                ],
                arr_point:[
                  {title:'小朋友超爱的三亚酒店',src:point1},
                  {title:'7条航线带你“邮”世界',src:point2},
                  {title:'盘点国内52处世界遗产',src:point3},
                  {title:'青岛七星酒店住一晚',src:point4},

                ],
                point_right:[
                   {marks:'探秘海岛，赵薇在象岛开的中餐厅',src:point5},
                   {marks:'毛里求斯 海誓山盟',src:point6}
                ]
            }  
        },   
        methods:{
            move:function (){
                 this.t=setInterval(()=>{
                    this.num++;
                    if(this.num>4){
                         this.num=0
                    }
                },3000)
            },
            move1:function(){
                this.t1=setTimeout(()=>{
                    this.wrap1_show=true
                },2000)
            },
            changeb:function(index){
                this.num=index
            },
            hotel_over:function(index){
                this.cont=index
            },
            hotel_out:function(index){
                this.cont=-1
            },
            theme:function(index){
                this.cont_theme=index
            },
            themes:function(index){
                this.cont_themes=index
            },
            themess:function(index){
                this.cont_themess=index
            },
            themesss:function(index){
                this.cont_themesss=index
            },
            point_over:function(index){
                this.cont_point=index
            },
            china_show:function(){
                this.china_shows=true;
                this.china_out_shows=false;
            },
            china_out_show:function(){
                this.china_shows=false;
                this.china_out_shows=true;
            },
            input_value:function(){
                const input_all=document.getElementsByTagName('input');
                for(var i=0;i<input_all.length;i++){
                    console.log(input_all[i]);
                    input_all[i].onfocus=function(){
                        console.log(this)
                    }
                }
            }
        },
        mounted () {  
            this.move(),
            this.move1(),
            this.input_value()
        }  


    }
</script>