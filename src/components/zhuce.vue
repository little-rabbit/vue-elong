<template>
	<div id="zhuce">
		<v-content>
            <header>
           	   <div class='logo'></div>
           </header>
           <div class="container">
           	   <h1>
           	   	   <label>注册新会员</label>
           	   	   <span>已有艺龙账号，</span>
           	   	   <a href="http://localhost:8080/#/denglv">直接登录</a>
           	   </h1> 
           	   <div class="cardbox">
	           	   <div class="cards">
	           	   	   <input type='checkbox' @click='startShowTing'>我有艺龙合作卡
	           	   </div>
	           	   <!-- 艺龙合作卡	  -->
	           	   <dl class="start" v-show='startShow' >
	           	   	   <dt>
	           	   	   	  <span class='cf00'>*</span>卡类型:
	           	   	   </dt>
	           	   	   <dd>
	           	   	   	   <select>
	                            <option value="12">银行卡类
	                            </option>
	                            <option value="17">酒店合作类
	                            </option>
	                            <option value="13">无线通讯类
	                            </option>
	                            <option value="14">购物消费类
	                            </option>
	                            <option value="15">航空类
	                            </option>
	                            <option value="11">所有联名卡[按首字拼音排序]
	                            </option>
	                            <option value="16">其他</option>   
                           </select>
	           	   	   </dd>
	           	   	   <dt>
	           	   	   	  <span class='cf00'>*</span>卡名称:
	           	   	   </dt>
	           	   	   <dd>
		                   <select >

		                   </select>
	           	   	   </dd>
	           	   	   <dt>
	           	   	   	   卡号:
	           	   	   </dt>
	           	   	   <dd>
	           	   	   	   <input type='text'>
	           	   	   </dd>
	           	   </dl> 
	           	   <!-- 注册信息 -->
	           	   <ul class="end">
	           	   	   <li>
	           	   	        <p><span class='cf00'>*</span>手机:</p>
	           	   	        <select>
	           	   	        	<option>中国大陆+86</option>
	           	   	        	<option>中国香港+852</option>
	           	   	        	<option>中国澳门+853</option>
	           	   	        	<option>中国台湾+886</option>
	           	   	        </select>
	           	   	        <input type='text'>
	           	   	   </li>
	           	   	   <li>
	           	   	   	    <p><span class='cf00'>*</span>输入验证码:
	           	   	   	    </p>
	           	   	   	    <input type='text'>
	           	   	   	    <span class='nums'>{{num}}</span>
	           	   	   	    <a href="javascript:void(null)"  style='font-size: 10px;' @click='hyz'>换一张</a>
	           	   	   </li>
	           	   	   <li>
	           	   	   	    <p>
	           	   	   	       <span class='cf00'>*</span>短信验证码:
	           	   	   	    </p>
	           	   	   	    <input type='text'>
	           	   	   	    <input class='dx' type='submit' value='获取短信验证码'>
	           	   	   </li>
	           	   	   <li>
	           	   	   	    <p><span class='cf00'>*</span>邮箱:</p>
	           	   	   	    <input type='text' class='msg'>
	           	   	   </li>
	           	   	   <li>
	           	   	   	    <p><span class='cf00'>*</span>密码:</p>
	           	   	        <input type='text' class='msg'>
	           	   	   </li>
	           	   	   <li>
	           	   	   	    <p><span class='cf00'>*</span>再次输入密码:</p>
	           	   	   	    <input type='text' class='msg'>
	           	   	   </li>
	           	   	   <li class='agree'>
	           	   	   	    	<input type='checkbox'>
	           	   	   	    	<span>同意并接受艺龙发送的促销信息</span>
	           	   	   </li>
	           	   </ul>
	           	   <div class='hobby'>
	           	   	    <a href="javascript:void(null)" @click='hobbyThing'>填写出行习惯</a>
	           	   	    <dl v-show='hobbyTrue'>
				            <dt>您的常住城市：</dt>
				            <dd><input method="prefCity" id="prefCityInput" type="text"><span class="l_black">（支持中文/拼音）</span>
				            </dd>
				            <dt>您的出差频率：</dt>
				            <dd>
				                <label for=""><input name="BusinessRate" value="1" type="radio">基本不出差</label>
				                <label for=""><input name="BusinessRate" value="2" type="radio">一月一次</label>
				                <label for=""><input name="BusinessRate" value="3" type="radio">一季度一次</label>
				                <label for=""><input name="BusinessRate" value="4" type="radio">一年一次</label>
				            </dd>
				            <dt>出差时入住酒店价位：</dt>
				            <dd>
				                <label for=""><input name="BusinessHotel" value="4" type="radio">150以下</label>
				                <label for=""><input name="BusinessHotel" value="5" type="radio">150-300元</label>
				                <label for=""><input name="BusinessHotel" value="6" type="radio">300-600元</label>
				                <label for=""><input name="BusinessHotel" value="7" type="radio">600元以上</label>
				            </dd>
				            <dt>您的旅游频率：</dt>
				            <dd>
				                <label for=""><input name="TravelRate" value="4" type="radio">1年1-2次</label>
				                <label for=""><input name="TravelRate" value="3" type="radio">1季度1次</label>
				                <label for=""><input name="TravelRate" value="2" type="radio">1月至少1次</label>
				                <label for=""><input name="TravelRate" value="2" type="radio">1月至少5次</label>

				            </dd>
				            <dt>旅游时入住酒店价位：</dt>
				            <dd>
				                <label for=""><input name="TravelHotel" value="4" type="radio">150以下</label>
				                <label for=""><input name="TravelHotel" value="5" type="radio">150-300元</label>
				                <label for=""><input name="TravelHotel" value="6" type="radio">300-600元</label>
				                <label for=""><input name="TravelHotel" value="7" type="radio">600元以上</label>
				            </dd>
				        </dl>
	           	   </div>
	           	   <div class='agrees'>
	           	   	    <input type='checkbox'>同意艺龙旅行网服务条款
	           	   	    <a href="javascript:void(null)" @click='tipsShowThing'>查看条款</a>
	           	   	    <div class="tips" v-show='tipsShow'>
							<p class="tc">《艺龙旅行网服务条款》</p>
							<p>1．艺龙旅行网服务条款的确认</p>
							<p><span class="ti2em"></span>艺龙旅行网的所有权与运作权归北京艺龙信息技术有限公司（以下简称"艺龙"）所有。本服务条款具有法律约束力。一旦您点选"注册"并通过注册程序，即表示您自愿接受本协议之所有条款，并已成为艺龙旅行网的注册会员。</p>
							<p><span class="ti2em"></span>用户在享用艺龙网络会员服务的同时，同意接受艺龙网络会员服务提供的各类信息服务。</p>
							<p>2．服务内容</p><p><span class="ti2em"></span>2.1艺龙旅行网服务的具体内容由艺龙根据实际情况提供，艺龙对其所提供之服务拥有最终解释权。</p><p><span class="ti2em"></span>2.2艺龙在艺龙旅行网上向其会员提供相关网络服务，与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均由会员自行负担。</p><p>3．会员帐号及密码</p><p><span class="ti2em">3.1用户可通过在艺龙旅行网网站系统或移动客户端系统完成注册程序并通过身份认证成为会员。如会员的账号信息（包括但不限于用户名、头像、简介、个性签名等）含有不雅、不当、非法、令人反感的词汇或图像或存在以下情形的，艺龙可不予注册，并保留对已注册会员进行注销的权利：</span></p><p><span class="ti2em">3.2冒用党和国家领导人、社会名人、国家机构或其他社会机构的真实姓名、名称、字号、艺名、笔名注册的；</span></p><p><span class="ti2em">3.3包含不文明、不健康内容，或包含歧视、侮辱、猥亵类词语的；</span></p><p><span class="" ti2em="">3.4注册易产生歧义、引起他人误解或其他不符合法律规定的账号的</span></p><p><span class="ti2em"></span>3.5您注册会员成功后，将得到一个帐号和密码。您应妥善保管该帐号及密码，并对以该帐号进行的所有活动及事件负法律责任。因黑客行为或会员保管疏忽致使帐号、密码被他人非法使用的，艺龙不承担任何责任。如您发现任何非法使用会员帐号或安全漏洞的情况，请立即与艺龙联系。</p><p>4．会员权责</p><p><span class="ti2em"></span>4.1会员有权按照艺龙规定的程序和要求使用艺龙向会员提供的各项网络服务，如果会员对该服务有异议，可以与艺龙联系以便得到及时解决。</p><p><span class="ti2em"></span>4.2用户在申请使用艺龙旅行网网络服务时，必须向艺龙旅行网提供准确的个人资料，如个人资料有任何变动，必须及时更新。</p><p><span class="ti2em"></span>4.3会员须同意接受艺龙旅行网通过电子邮件或其他方式向会员发送促销或其他相关商业信息。</p><p><span class="ti2em"></span>4.4会员同意如果其参加艺龙旅行网举办的各种促销、返现活动，即自愿遵守活动规则并接受活动相关费用标准。</p><p><span class="ti2em"></span>4.5会员在艺龙旅行网的网页上发布信息或者利用艺龙旅行网的服务时必须符合国家的法律法规以及国际法的有关规定。</p><p><span class="ti2em"></span>4.6对于会员通过艺龙旅行网网上消息平台（包括但不限于论坛、BBS、评论）上传到艺龙旅行网网站上可公开获取区域的任何内容，会员同意授予艺龙在全世界范围内享有完全的、免费的、永久性的、不可撤销的、非独家的权利，以及再许可第三方的权利，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容（整体或部分），和/或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。</p><p><span class="ti2em"></span>4.7会员承诺不会在艺龙旅行网的消息平台（包括但不限于论坛、BBS、评论）发布或在其账号注册信息（包括但不限于用户名、头像、简介、个性签名等）包含如下信息：</p><p><span class="ti2em"></span><span class="ti2em"></span>1.反对宪法所确定的基本原则或违反宪法或法律法规规定的；</p><p><span class="ti2em"></span><span class="ti2em"></span>2.危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p><p><span class="ti2em"></span><span class="ti2em"></span>3.损害国家荣誉和利益的，损害公共利益的；</p><p><span class="ti2em"></span><span class="ti2em"></span>4.煽动民族仇恨、民族歧视，破坏民族团结的；</p><p><span class="ti2em"></span><span class="ti2em"></span>5.破坏国家宗教政策，宣扬邪教和封建迷信的；</p><p><span class="ti2em"></span><span class="ti2em"></span>6.散布谣言，扰乱社会秩序，破坏社会稳定的；</p><p><span class="ti2em"></span><span class="ti2em"></span>7.散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p><p><span class="ti2em"></span><span class="ti2em"></span>8.侮辱或者诽谤他人，侵害他人合法权益的；</p><p><span class="ti2em"></span><span class="ti2em"></span>9.含有法律、行政法规禁止的其他内容的。</p><p><span class="ti2em"></span>4.8会员单独为其发布在艺龙旅行网上信息承担责任。会员若在艺龙旅行网散布和传播违法信息，网络会员服务的系统记录有可能作为会员违法之证据。</p><p><span class="ti2em"></span>4.9会员不得利用本站的服务从事以下活动：</p><p><span class="ti2em"></span><span class="ti2em"></span>1.未经允许，进入计算机信息网络或者使用计算机信息网络资源；</p><p><span class="ti2em"></span><span class="ti2em"></span>2.未经允许，对计算机信息网络功能进行删除、修改或者增加；</p><p><span class="ti2em"></span><span class="ti2em"></span>3.未经允许，对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；</p><p><span class="ti2em"></span><span class="ti2em"></span>4.故意制作、传播计算机病毒等破坏性程序；</p><p><span class="ti2em"></span><span class="ti2em"></span>5.其他危害计算机信息网络安全的行为。</p><p><span class="ti2em"></span>4.10会员不得以任何方式干扰本站的服务。</p><p><span class="ti2em"></span>4.11会员承诺遵守本站的所有其他规定和程序。</p><p><span class="ti2em"></span>4.12如果会员违反上述规定，艺龙有权要求其改正或直接采取一切必要措施（包括但不限于更改或删除会员发布的信息、中断或终止会员使用网络的权利等），以减轻会员不当行为所造成的影响。</p><p><span class="" ti2em=""></span>4.13会员应承诺遵守法律法规、拥挤社会主义制度、不损害国家利益、公民合法权益和公共秩序、社会道德风尚，并确保其信息的真实性。</p><p>5．服务条款的修改</p><p><span class="ti2em"></span><span style="">艺龙有权在必要时修改本服务条款，如服务条款发生变动，艺龙将会在用户进入下一步使用前或相关服务内容的页面提示修改内容。会员有权接受或拒绝，如您不同意修改，可以主动选择取消会员资格；如您选择继续使用艺龙服务，则视为同意接受所有服务条款的变动修改和限制。</span></p><p>6．服务内容的修改或中断</p><p><span class="ti2em"></span>鉴于网络服务的特殊性，艺龙保留随时修改或中断其部分或全部网络服务的权利，并无需通知会员或为此对会员及任何第三方负责。</p><p>7．会员隐私保护</p><p><span class="ti2em"></span>艺龙尊重会员的隐私权，不会公开、编辑或泄露任何有关会员的个人资料以及会员在使用网络服务时存储在艺龙旅行网的非公开内容，但以下情况除外：</p><p><span class="ti2em"></span><span class="ti2em"></span>1.事先获得会员的明确授权；</p><p><span class="ti2em"></span><span class="ti2em"></span>2.遵守法律规定或艺龙旅行网合法服务程序；</p><p><span class="ti2em"></span><span class="ti2em"></span>3.按照相关政府主管部门的合理要求；</p><p><span class="ti2em"></span><span class="ti2em"></span>4.维护社会公众利益；</p><p><span class="ti2em"></span><span class="ti2em"></span>5.维护艺龙的合法权益；</p><p><span class="ti2em"></span><span class="ti2em"></span>6.符合其他合法要求。</p><p>8．中断或终止服务</p><p><span class="ti2em"></span>如发生下列任何一种情形，艺龙有权随时中断或终止向会员提供本协议项下的网络服务，而无需对会员或任何第三方承担任何责任。</p><p><span class="ti2em"></span>1.会员向艺龙提供的个人资料不真实。</p><p><span class="ti2em"></span>2.会员违反本协议的规则或不履行其所承担的义务。</p><p><span class="ti2em"></span>除此之外，会员可随时根据需要通知艺龙终止向该会员提供服务，会员服务终止后，会员使用服务的权利同时终止。自会员服务终止之时起，艺龙旅行网不再对该会员承担任何责任。</p><p>9.知识产权及其他权益</p><p><span class="ti2em"></span>9.1艺龙旅行网专属权利</p><p><span class="ti2em"></span><span class="ti2em"></span>9.1.1除明显归属于合作伙伴、第三方所有的信息资料外，艺龙旅行网拥有网络服务内所有内容，包括但不限于文字、图片、图形、表格、动画、程序、软件、音频和视频资料等单独或组合的版权。任何被授权的浏览、复制、打印和传播属于本网站内的内容必须符合以下条件：</p><p><span class="ti2em"></span><span class="ti2em"></span>1)所有的资料和图像均以获得信息为目的；</p><p><span class="ti2em"></span><span class="ti2em"></span>2)所有的资料和图像均不得用于商业目的；</p><p><span class="ti2em"></span><span class="ti2em"></span>3)所有的资料和图像及其任何部分都必须包括此版权声明。</p><p><span class="ti2em"></span><span class="ti2em"></span>未经艺龙旅行网许可，任何人不得擅自以非法的方式复制、传播、展示、镜像、上载、下载进行使用；否则，艺龙旅行网将依法追究法律责任。</p><p><span class="ti2em"></span><span class="ti2em"></span>9.1.2艺龙为提供网络服务而自行开发的软件，包括不限于无线客户端应用等，拥有完整的知识产权。艺龙在此授予您个人非独家、不可转让、可撤销的，并通过在一部拥有所有权或使用权的手机或计算机上使用该软件的权利，且仅限于个人非商业性使用之合法目的，您应当保证合法使用该等软件，任何用户不得对该等软件进行如下违法行为：</p><p><span class="ti2em"></span><span class="ti2em"></span>1)开展反向工程、反向编译或反汇编，或以其他方式发现其原始编码，以及实施任何涉嫌侵害著作权等其他知识产权的行为；</p><p><span class="ti2em"></span><span class="ti2em"></span>2)以出租、租赁、销售、转授权、分配或其他任何方式向第三方转让该等软件或利用该等软件为任何第三方提供相似服务；</p><p><span class="ti2em"></span><span class="ti2em"></span>3)任何复制该等软件的行为；</p><p><span class="ti2em"></span><span class="ti2em"></span>4)以移除、规避、破坏、损害或其他任何方式干扰该等软件的安全功能；</p><p><span class="ti2em"></span><span class="ti2em"></span>5)以不正当手段取消该等软件上权利声明或权利通知的；</p><p><span class="ti2em"></span><span class="ti2em"></span>6)其他违反法律规定的行为。</p><p><span class="ti2em"></span><span class="ti2em"></span>艺龙有权对该等软件进行定期或不定期的修订、扩展、升级等更新措施，而无需提前通知用户，但您有权选择是否使用更新后的软件。</p><p><span class="ti2em"></span><span class="ti2em"></span>9.1.3以下文字、图形及艺龙旅行网服务LOGO等，均为艺龙旅行网及其关联公司的注册商标以及受法律保护的商号；未经授权的任何形式使用，均为侵权，将被依法追究其责任：</p><p><span class="ti2em"></span><span class="ti2em"></span>“eLong.com”，“艺龙”，“艺龙旅行网”，“e龍”，“e龙”等。</p><p><span class="ti2em"></span>9.2知识产权权属</p><p><span class="ti2em"></span><span class="ti2em"></span>9.2.1您应对通过艺龙旅行网或艺龙移动客户端上传的可公开浏览区域中任何内容的真实性、合法性负责，保证对该等内容拥有完整的、无瑕疵的所有权和知识产权，或拥有完整的授权，并不存在任何侵犯第三方合法权益（包括但不限于著作权、肖像权、商标权、专利权、企业名称权、商号权、商业秘密、个人隐私、合同权利等权利）的情形。因您上传或发布该等内容而给艺龙或任何第三方造成的损害和相关后果，均由您全部承担，艺龙旅行网对此不承担任何责任；且艺龙旅行网有义务配合第三方、司法机关或行政机关完成相关的取证，并根据法律、主管部门或司法部门的要求将用户注册信息给予披露。</p><p><span class="ti2em"></span><span class="ti2em"></span>9.2.2对于您通过互联网或移动终端等设备访问艺龙旅行网及其关联公司网站时发表的任何形式的文字、图片等信息及内容：</p><p><span class="ti2em"></span><span class="ti2em"></span>1)您在此同意将您在任何时间段在本站发表的任何形式的信息的著作财产权，包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权、据以创作衍生作品权以及其他除必须由著作权人享有的权利以外的可转让权利，无偿独家转让给艺龙及其关联公司所有。</p><p><span class="ti2em"></span><span class="ti2em"></span>2)您在此同意并授予艺龙及其关联公司独家的、全球通用的、永久的、免费的许可使用权利(并有权在多个层面对该权利进行再授权)。</p><p><span class="ti2em"></span><span class="ti2em"></span>3)您在此同意并授予艺龙及其关联公司有权(全部或部份地)使用、复制、修订、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、交易行为数据及全部展示于艺龙旅行平台的各类信息）或制作其派生作品，并以现在已知或日后开发的任何形式、媒体或技术，将上述信息纳入艺龙旅行作品内。</p><p><span class="ti2em"></span><span class="ti2em"></span>4)您同意并许可艺龙就任何主体侵权而单独提起诉讼，并获得全部赔偿。</p><p><span class="ti2em"></span><span class="ti2em"></span>5)您保证不将已发表于本站的信息资料，以任何形式发布或授权其它网站（及媒体）使用；同时，您承诺配合艺龙为保证您发表的信息资料的独家性而进行的任何合法的维权行为。</p><p><span class="ti2em"></span><span class="ti2em"></span>6）本协议已经构成《著作权法》第二十五条所规定的书面协议，其效力及于用户在艺龙旅行网发布的任何受著作权法保护的作品内容，无论该内容形成于本协议签订前还是本协议签订后。</p><p><span class="ti2em"></span><span class="ti2em"></span>9.2.3艺龙为提供网络服务而使用的任何软件（包括但不限于软件中的任何文字、图形、音频、视频资料及其辅助资料）的一切权利属于该软件的著作权人，未经该著作权人同意，任何人不得对该软件进行反向工程、反向编译或反汇编。。</p><p><span class="ti2em"></span><span class="ti2em"></span>9.2.4若您浏览、复制、打印和传播艺龙旅行网其他用户上传到艺龙旅行网站的内容，应保证仅用于个人欣赏之目的，不得用于商业目的，不得侵犯权利人的合法权益以及艺龙旅行网的合法权益和商业利益。</p><p><span class="ti2em"></span>9.3若您认为您的知识产权或其他合法权益被侵犯，请向艺龙提供以下资料：</p><p><span class="ti2em"></span><span class="ti2em"></span>1)对涉嫌侵权内容拥有知识产权或其他合法权益的权属证明；</p><p><span class="ti2em"></span><span class="ti2em"></span>2)权利人具体的主体资质和联络信息，包括个人的姓名、身份证或护照复印件、单位的营业执照复印件或者其他资质证明复印件、通信地址及电话号码等；</p><p><span class="ti2em"></span><span class="ti2em"></span>3)涉嫌侵权内容在本网站上的位置；</p><p><span class="ti2em"></span><span class="ti2em"></span>4)对侵权情况的详细描述；</p><p><span class="ti2em"></span><span class="ti2em"></span>5)请在权利通知中加入如下关于通知内容真实性的声明：“我保证，本通知中所述信息是充分、真实、准确的，如果本权利通知内容不完全属实，本人将承担由此产生的一切法律责任。”</p><p><span class="ti2em"></span><span class="ti2em"></span>6)在签字或加盖公章后，请将上述资料发往以下地址：北京市朝阳区酒仙桥路10号星科大厦C座三层艺龙法务部（邮编100015），也可发往以下邮箱：legal@corp.elong.com。</p><p><span class="ti2em"></span>9.4艺龙及其关联公司是艺龙旅行网的制作者，拥有此网站内容及资源的全部著作权；未经艺龙的明确书面许可，任何第三方不得为任何非私人或商业目的获取或使用本网站的任何部分或通过本网站可直接或间接获得的任何内容、服务或资料。任何第三方违反本协议的规定以任何方式，和/或以任何文字对本网站的任何部分进行发表、复制、转载、更改、引用、链接、下载或以其他方式进行使用，或向任何其它第三方提供获取本网站任何内容的渠道，则对本网站的使用权将立即终止，且任何第三方必须按照艺龙的要求，归还或销毁使用本网站任何部分的内容所创建的资料的任何副本。同时，艺龙保留进一步追究其法律责任的权利。</p><p>10．免责声明</p><p><span class="ti2em"></span>10.1艺龙对任何因会员不正当或非法使用服务、在网上进行交易、在账户信息中散播非法或不良信息、或会员传送信息变动而产生的直接、间接、偶然、特殊及后续的损害不承担责任。</p><p><span class="ti2em"></span>10.2艺龙对任何他人的威胁性的、诽谤性的、淫秽的、令人反感的或非法的内容或行为或对他人权利的侵犯（包括知识产权）不承担责任；并对任何第三方通过服务发送或在服务中包含的任何内容不承担责任。</p><p><span class="ti2em"></span>10.3会员明确同意承担因其提供个人信息不真实、不准确而对艺龙或艺龙网络服务造成的一切不利后果。会员明确同意其使用艺龙旅行网服务所存在的风险以及使用艺龙网络服务产生的一切后果由其自己承担。</p><p><span class="ti2em"></span>10.4对于因不可抗力或艺龙旅行网不能控制的原因造成的网络服务中断或其它缺陷，艺龙旅行网不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</p><p><span class="ti2em"></span>10.5艺龙不对所提供之网络服务做任何类型之担保，包括但不限于：</p><p><span class="ti2em"></span><span class="ti2em"></span>1.网络服务一定能满足会员要求；</p><p><span class="ti2em"></span><span class="ti2em"></span>2.网络服务不会中断；</p><p><span class="ti2em"></span><span class="ti2em"></span>3.网络服务的及时性、安全性、准确性。</p><p><span class="ti2em"></span><span class="ti2em"></span>但是艺龙对不违反规定的特定目的担保不作限制。</p><p>11．赔偿</p><p><span class="ti2em"></span>因会员对本服务之使用而导致艺龙遭受任何来自第三方之纠纷、诉讼及索赔要求，会员同意向艺龙及其关联企业、职员赔偿相应损失（包括合理的律师费），并尽力使之免受损害。</p><p>12．通告</p><p><span class="ti2em"></span>所有发给会员的通告都可以通过重要页面的公告、电子邮件以及常规信件的形式传送。</p><p>13．法律</p><p><span class="ti2em"></span>艺龙服务条款之效力、解释、执行均适用中华人民共和国法律。如发生争议，应提交至北京市朝阳区人民法院管辖。</p><p>14．其他规定</p><p><span class="ti2em"></span>本服务条款中的标题仅为方便而设，在解释本服务条款时应被忽略。</p>
					   </div>
	           	   </div>	   
                   <div class='zhuce'>
                   	    <input type='submit' value='立即注册'>
                   </div>
           	   </div> 
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
@mixin detail{
	width:135px;
	height: 30px;
	display: inline-block;
    text-align: right;
    margin-bottom: 20px;
}
html{
    background-color: #e8eff6;
}
#zhuce{
	width:100%;
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
	.container{
		width:1000px;
		/*height:100%;*/
		margin:0 auto;
		background: white;
		padding:36px 30px;
		h1{
			text-align: left;
			label{
				font-size:1.6rem;
				margin-right: 1rem;
			}
			span,a{
				font-size: .9rem;
			}
		}
        .cardbox{
        	 font-size: .9rem;
        	 text-align: left;
        	.cf00{
        		color:#f00;
        		font-size:1rem;
        	}
        	.cards{
				width: 600px;
				height: 18px;
				padding:35px 0 0 135px;
				color:#111;
				text-align: left;
				font-size: .5rem;
				line-height: 18px;
				border-bottom: 1px dashed #e0e0e0;
	            input{
	            	vertical-align: middle;
	                margin-right: 2px;
	            }
            }
            .start{
            	margin-top: 20px;
            	width: 600px;
            	height: 170px;
            	text-align: left;
            	border-bottom:1px dashed #e0e0e0;
            	dt{
            		@include detail
            	}
            	dd{
            		width:460px;
            		height: 26px;
            		display: inline-block;
            		margin-bottom: 20px;
            		select{
            			width: 250px;
            			height: 32px;
            		}
            		input{
            			width: 246px;
            			height: 26px;
            		}
            	}
            }
            .end{
            	margin-top: 20px;
            	text-align: left;
            	width: 940px;
            	height: 100%;
            	li{
            		height:26px;
            		line-height:30px;
            		margin-bottom:25px;
            		*{
            			height:26px;
            		}
            		.nums{
            			display: inline-block;
            			width: 65px;
                        text-align: center;
            		}
            		p{
            		    @include detail
            	    }
            	    select{
            	    	height:30px;

            	    }
            	    .msg{
            	    	width: 246px;
            	    	height: 30px;
            	    }
            	    input{
            	    	width:120px;
            	    }
            	    .dx{
            	    	border-radius: 4px;
            	    	background-color: #37D;
            	    	border:0;
            	    	height:30px;
            	    	color: white;
            	    }
            	    &:hover .dx{
            	    	background-color: #114387;

            	    }
            	}
                .agree{
                	color: black;
                	font-size: .5rem;
                	input{
                		margin-left:135px;
                		width: 13px;
                		vertical-align: middle;
                	}
                }
            }
            .hobby,.agrees,.zhuce{
            	padding-left: 135px;
            }
            .hobby{
            	a{
            		display: inline-block;
					font-size: 14px;
					color: #555;
					padding: 0 10px;
					width: 106px;
					height: 30px;
					line-height: 30px;
					background: #f8f8f8;
					border:1px solid #d9d9d9;
					text-align: center;
            	}
            	dl{
            		width: 530px;
            		height: 140px;
            		background: #f8f8f8;
            		border: 1px solid #d9d9d9;
            		padding: 12px;
            		font-size: .5rem;
            		color: black;
            		dt{
            			display: inline-block;
            			width: 140px;
            			height: 30px;
            		}
            		dd{
            			display: inline-block;
            		}
            	}
            }
            .agrees{
            	font-size: .5rem;
            	padding: 20px 135px;
            	input{
            		vertical-align: middle;
            	}
            	.tips{
                     width:530px;
                     height: 120px;
                     padding:12px;
                     border: 1px solid #d9d9d9;
                     overflow: scroll;
            	}
            }
            .zhuce{
            	height: 40px;
            	input{
            		width: 200px;
            		height: 40px;
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
}
</style>
<script type="text/javascript">
	export default{
		name:'Zhuce',
		data(){
			return{
				num:6666,
				hobbyTrue:false,
				startShow:false,
				tipsShow:false,
			}
		},
		methods:{
			hyz:function(){
                this.num=Math.floor(Math.random()*10000)
			},
			hobbyThing:function(){
				if(this.hobbyTrue){
					this.hobbyTrue=false
				}else{
                    this.hobbyTrue=true
				}
			},
			startShowTing:function(){
                if(!this.startShow){
					this.startShow=true
				}else{
                    this.startShow=false
				}
			},
			tipsShowThing:function(){
                if(!this.tipsShow){
					this.tipsShow=true
				}else{
                    this.tipsShow=false
				}
			},
		}
	}
</script>