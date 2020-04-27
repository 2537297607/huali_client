<template>
  <div class="index">
    <div class="header">
      <span class="iconfont icon-fenlei"></span>
      <h2>花礼网</h2>
      <span class="iconfont icon-kefu"></span>
    </div>
     <swiper class="mySwiper" :options="swiperOptions"> 
       <swiper-slide v-for="(item,index) in banners" :key="index"><img :src="'images/'+item" alt=""></swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
     <!-- index广告 -->
    <div class="notice">
      <div class="notice-item" v-for = "(item,index) in notice" :key = "index">
        <span class="iconfont icon-wancheng"></span><span v-html = "item"></span>
      </div>
    </div>
    <!-- index广告结束 -->
    <!-- index图片导航 -->
    <div class="imgNav">
      <div class="imgNav-item" v-for = "(item,index) in imgNav" :key = "index">
        <img :src="'images/'+item.img" :alt="item.img">{{item.text}}
      </div>
    </div>
    <!-- index图片导航结束 -->

    <!-- 一秒选花 -->
    <div class="scene">
      <div class="scene_title">
        <span>|</span>
        一秒选花
      </div>
      <div class="scene_top">
        <div class="img" v-for = "(item,index) in scene_top" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <span>{{item.text}}</span>
        </div>
      </div>
      <div class="scene_center">
        <div class="img" v-for = "(item,index) in scene_center" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <span>{{item.text}}</span>
        </div>
      </div>
      <div class="scene_bottom">
        <div class="img" v-for = "(item,index) in scene_bottom" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <!-- 送恋人 -->
    <div class="product">
      <h3 class="productHeader">送恋人/爱情鲜花</h3>
      <div class="productContent"  v-for="(item1,i) in lianren" :key="i" @click="toxiang(textobj.lianren,item1.id)">
        <div class="productContentLeft">
          <img :src="'images/'+item1.img" alt="1">
        </div>
        <div class="productContentRight">
          <p>{{item1.title}}</p>
          <p>{{item1.info1}}</p>
          <p>{{item1.info2}}</p>
          <div class="productPrice">
            <p><span>{{item1.newprice}}</span><span>{{item1.oldprice}}</span></p>
            <p>{{item1.sold}}</p>
            <span class="iconfont icon-gouwuche" @click.stop="addshop(item1,i)"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <!-- 送长辈 -->
    <div class="product">
      <h3 class="productHeader">送长辈鲜花</h3>
      <div class="productContent"   v-for="(item1,i) in zhangbei" :key="i" @click="toxiang(textobj.zhangbei,item1.id)">
        <div class="productContentLeft">
          <img :src="'images/'+item1.img" alt="1">
        </div>
        <div class="productContentRight">
          <p>{{item1.title}}</p>
          <p>{{item1.info1}}</p>
          <p>{{item1.info2}}</p>
          <div class="productPrice">
            <p><span>{{item1.newprice}}</span><span>{{item1.oldprice}}</span></p>
            <p>{{item1.sold}}</p>
            <span class="iconfont icon-gouwuche" @click.stop="addshop(item1,i)"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <!-- 永生花 -->
    <div class="product">
      <h3 class="productHeader">永生花推荐</h3>
      <div class="content">
        <div class="pro" v-for="(item,index) in imgpro2" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <div class="pro_content">
            <p class="label"><span>{{item.label}}</span></p>
            <p class="info">{{item.info}}</p>
            <p class="price"><span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
            <p class="sold">{{item.sold}}</p>
            <span class="iconfont icon-gouwuche"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <!-- 蛋糕 -->
    <div class="product">
      <h3 class="productHeader">蛋糕推荐</h3>
      <div class="content">
        <div class="pro" v-for="(item,index) in imgpro3" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <div class="pro_content">
            <p class="label"><span>{{item.label}}</span></p>
            <p class="info">{{item.info}}</p>
            <p class="price"><span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
            <p class="sold">{{item.sold}}</p>
            <span class="iconfont icon-gouwuche"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <!-- 礼品 -->
    <div class="product">
      <h3 class="productHeader">礼品推荐</h3>
      <div class="content">
        <div class="pro" v-for="(item,index) in imgpro4" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <div class="pro_content">
            <p class="label"><span>{{item.label}}</span></p>
            <p class="info">{{item.info}}</p>
            <p class="price"><span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
            <p class="sold">{{item.sold}}</p>
            <span class="iconfont icon-gouwuche"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <!-- 巧克力 -->
    <div class="product nobor">
      <h3 class="productHeader">巧克力推荐</h3>
      <div class="content">
        <div class="pro" v-for="(item,index) in imgpro5" :key="index">
          <img :src="'images/'+item.img" :alt="item.img">
          <div class="pro_content">
            <p class="label"><span>{{item.label}}</span></p>
            <p class="info">{{item.info}}</p>
            <p class="price"><span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
            <p class="sold">{{item.sold}}</p>
            <span class="iconfont icon-gouwuche"></span>
          </div>
        </div>
      </div>
      <div class="productFooter">
        <a href="###">查看更多</a>
      </div>
    </div>
    <div class="sceen">
      <img src="/images/Advantage1.png" alt="">
    </div>
    <!-- 为什么选择我 -->
    <div class="brand">
      <h3 class="brandpro">为什么选择我们</h3>
      <div class="content">
        <div class="brand_pro" v-for="(item,index) in what" :key="index">
          <img :src="'images/'+item.img" alt="">
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="foot_top">
        <span v-for="(item,index) in foot" :key="index"><a href="">{{item.text}}</a> </span>
      </div>
      <div class="foot_center">
        <div class="fen">
          <span class="iconfont icon-shouji"></span>
          <p>客户端</p>
        </div>
         <div class="fen">
          <span class="iconfont icon-kefu"></span>
          <p>客服</p>
        </div>
      </div>
      <div class="foot_bottom">
        <p>Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有</p>
        <p>中国鲜花网领先品牌，鲜花速递专家！</p>
        <p>深圳市百易信息技术有限公司  粤ICP备09171662号</p>
      </div>
    </div>
      <a href="##" class="zhiding" v-show="onScrollbox" @click="BackTop" ><span class="iconfont icon-fanhuidingbu"></span></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners:['lunbo01.jpg','lunbo02.jpg','lunbo03.jpg','lunbo04.jpg'],
      swiperOptions:{
        autoplay:true,
        pagination:{
          el:'.swiper-pagination'
        }
      },
      onScrollbox:false,
      scrolltop:0,
      // 广告
      notice:['认证龙头企业','15年品牌','3小时送花','最近<a href = "###">359994</a>条好评'],
      // 图片导航
      imgNav:[
        {img:"procate1.png",text:"鲜花"},
        {img:"procate2.png",text:"永生花"},
        {img:"procate3.png",text:"蛋糕"},
        {img:"procate4.png",text:"礼品"},
        {img:"procate5.png",text:"巧克力"},
      ],
      scene_top:[
        {img:"scene1-listItem1.png",text:"送恋人"},
        {img:"scene1-listItem2.png",text:"送长辈"},
        {img:"scene1-listItem3.png",text:"送朋友"}
      ],
       scene_center:[
        {img:"scene2-listItem1.png",text:"生日祝福"},
        {img:"scene2-listItem2.png",text:"表白求婚"},
        {img:"scene2-listItem3.png",text:"开业商务"},
        {img:"scene2-listItem4.png",text:"周年纪念"}
      ],
      scene_bottom:[
        {img:"scene4-listItem1.png",text:"新品来袭"},
        {img:"scene4-listItem2.png",text:"品味之选"},
        {img:"scene4-listItem3.png",text:"设计师筛选"}
      ],
      textobj:{
        lianren:'lianren',
        zhangbei:'zhangbei'
      },
      lianren:[
        {
          "id":1,
          "img":"product1.jpg",
          "title":"一往情深",
          "info1":"精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
          "info2":"经典爆款，年销售冠军！",
          "newprice":"¥249",
          "oldprice":"¥349",
          "sold":"已销售12.0万件",
          "count":1,
          "ison":false,
          "label":"",
          "detail":{
            "lunbo":[
              "id2_lunbo1.jpg",
              "id2_lunbo2.jpg",
              "id2_lunbo3.jpg",
              "id2_lunbo4.jpg"
            ],
            "lijian":"App下单立减5元",
            "huayu":"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",
            "cailiao":"高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎",
            "peisong":"限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽",
            "fusong":"",
            "xuangou":[
            {"price":"￥249',title:'一往情深',img:'id1_lunbo3.jpg"},
            {"price":"￥229',title:'你最珍贵',img:'id1_xuanze2.jpg"},
            {"price":"￥252',title:'暖暖',img:'id1_xuanze3.jpg"},
            {"price":"￥278',title:'嫣然一笑',img:'id1_xuanze4.jpg"},
            {"price":"￥278',title:'一如初见',img:'id1_xuanze5.jpg"}
          ],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id1_xq1.jpg",
              "id1_xq2.jpg",
              "id1_xq3.jpg",
              "id1_xq4.jpg",
              "id1_xq5.jpg",
              "id1_xq6.jpg",
              "id1_xq7.jpg",
              "id1_xq8.jpg",
              "id1_xq9.jpg",
              "id1_xq2.jpg",
              "id1_xq10.jpg",
              "id1_xq2.jpg",
              "id1_xq11.jpg",
              "id1_xq12.jpg"
            ]
          }
        },
        {
          "id":2,
          "img":"product2.jpg",
          "title":"一心一意",
          "info1":"玫瑰11枝，粉色勿忘我0.3扎",
          "info2":"经典爆款 精选爆款",
          "newprice":"¥139",
          "oldprice":"¥189",
          "sold":"已销售11.7万件",
          "count":1,
          "ison":false,
          "label":"畅销爆款",
          "detail":{
            "lunbo":[
              "id1_lunbo1.jpg",
              "id1_lunbo2.jpg",
              "id1_lunbo3.jpg"
            ],
            "lijian":"APP下单立减",
            "huayu":"11枝玫瑰，寓意一心一意！<br>有情之人，天天是节。一句寒暖，一线相喧；一句叮咛，一笺相传；一份相思，一心相盼；一份爱意，一生相恋。",
            "cailiao":"红玫瑰11枝，粉色(或者紫色）勿忘我0.3扎，栀子叶8枝",
            "peisong":"全国",
            "fusong":"",
            "xuangou":[],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id2_xq1.jpg",
              "id2_xq2.jpg",
              "id2_xq3.jpg",
              "id2_xq4.jpg",
              "id2_xq5.jpg",
              "id2_xq6.jpg",
              "id2_xq7.jpg",
              "id2_xq8.jpg",
              "id2_xq9.jpg",
              "id2_xq10.jpg",
              "id2_xq11.jpg",
              "id2_xq12.jpg"
            ]
          }
        },
        {
          "id":3,
          "img":"product3.jpg",
          "title":"忘情巴黎",
          "info1":"33枚红玫瑰",
          "info2":"浪漫唯美 女神挚爱",
          "newprice":"¥298",
          "oldprice":"¥382",
          "sold":"已销售6.7万件",
          "count":1,
          "ison":false,
          "label":"畅销爆款",
          "detail":{
            "lunbo":[
              "id3_lunbo1.jpg",
              "id3_lunbo2.jpg",
              "id3_lunbo3.jpg",
              "id3_lunbo4.jpg"
            ],
            "lijian":"App下单立减6元",
            "huayu":"只想和你忘掉一切烦恼，尽情沉醉在最浪漫的气氛中。",
            "cailiao":"33枝红玫瑰，石竹梅20枝",
            "peisong":"全国",
            "fusong":"",
            "xuangou":[],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id3_xq1.jpg",
              "id3_xq2.jpg",
              "id3_xq3.jpg",
              "id3_xq4.jpg",
              "id3_xq5.jpg",
              "id3_xq6.jpg",
              "id3_xq7.jpg",
              "id3_xq8.jpg",
              "id3_xq9.jpg",
              "id3_xq10.jpg",
              "id3_xq11.jpg",
              "id3_xq12.jpg"
            ]
          }
        },
        {
          "id":4,
          "img":"product4.jpg",
          "title":"恋恋情深",
          "info1":"11枝香槟玫瑰，白色多头百合2枝",
          "info2":"经典款式 简约设计",
          "newprice":"¥198",
          "oldprice":"¥255",
          "sold":"已销售7.5万件",
          "count":1,
          "ison":false,
          "label":"",
          "detail":{
            "lunbo":[
              "id4_lunbo1.jpg",
              "id4_lunbo2.jpg",
              "id4_lunbo3.jpg"
            ],
            "lijian":"App下单立减4元",
            "huayu":"喜欢像是一阵风，而爱你是细水长流",
            "cailiao":"11枝香槟玫瑰，多头白百合2枝，栀子叶8枝",
            "peisong":"全国",
            "fusong":"",
            "xuangou":[],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id4_xq1.jpg",
              "id4_xq2.jpg",
              "id4_xq3.jpg",
              "id4_xq4.jpg",
              "id4_xq5.jpg",
              "id4_xq6.jpg",
              "id4_xq7.jpg",
              "id4_xq8.jpg",
              "id4_xq9.jpg",
              "ht.jpg",
              "id4_xq10.jpg",
              "ht.jpg",
              "id4_xq11.jpg",
              "id4_xq12.jpg"
            ]
          }
        },
        {
          "id":5,
          "img":"product5.jpg",
          "title":"韩式系列/亲爱的你",
          "info1":"粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
          "info2":"花艺师打造 韩式花束系列",
          "newprice":"¥368",
          "oldprice":"¥469",
          "sold":"已销售796件",
          "count":1,
          "ison":false,
          "label":"全新韩式系列",
          "detail":{
            "lunbo":[
              "id5_lunbo1.jpg",
              "id5_lunbo2.jpg",
              "id5_lunbo3.jpg"
            ],
            "lijian":"App下单立减7元",
            "huayu":"我喜欢的样子你都有",
            "cailiao":"韩式花束系列：粉佳人玫瑰16枝、3头或以上白色洋桔梗5枝、3头或以上粉色洋桔梗5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
            "peisong":"全国(小城市请提前一天预定)",
            "fusong":"下单填写留言，即免费赠送精美贺卡！",
            "xuangou":[
            {"price":"￥368","title":"韩式系列/亲爱的你","img":"id5_xuanze1.jpg"},
            {"price":"￥269","title":"韩式系列/着迷","img":"id5_xuanze2.jpg"},
            {"price":"￥389","title":"韩式系列/加倍爱你","img":"id5_xuanze3.jpg"},
            {"price":"￥296","title":"韩式系列/心愿","img":"id5_xuanze4.jpg"},
            {"price":"￥279","title":"韩式系列/佳期如梦","img":"id5_xuanze5.jpg"}
          ],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id5_xq1.jpg",
              "id5_xq2.jpg",
              "id5_xq3.jpg",
              "id5_xq4.jpg",
              "id5_xq5.jpg",
              "id5_xq6.jpg",
              "ht.jpg",
              "id5_xq7.jpg",
              "ht.jpg",
              "id5_xq8.jpg",
              "ht.jpg",
              "id5_xq9.jpg",
              "ht.jpg",
              "id5_xq10.jpg",
              "ht.jpg",
              "id5_xq11.jpg"
            ]
          }
        },
        {
          "id":6,
          "img":"product6.jpg",
          "title":"不变的承诺",
          "info1":"99枝红玫瑰",
          "info2":"经典99枝，鼎力推荐！",
          "newprice":"¥520",
          "oldprice":"¥869",
          "sold":"已销售6.4万件",
          "count":1,
          "ison":false,
          "label":"经典99枝",
          "detail":{
            "lunbo":[
              "id6_lunbo1.jpg",
              "id6_lunbo2.jpg",
              "id6_lunbo3.jpg"
            ],
            "lijian":"App下单立减10元",
            "huayu":"下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！",
            "cailiao":"99枝红玫瑰",
            "peisong":"全国",
            "fusong":"下单填写留言，即免费赠送精美贺卡！",
            "xuangou":[],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id6_xq1.jpg",
              "ht.jpg",
              "id6_xq2.jpg",
              "id6_xq3.jpg",
              "id6_xq4.jpg",
              "id6_xq5.jpg",
              "id6_xq6.jpg",
              "id6_xq7.jpg",
              "id6_xq8.jpg",
              "ht.jpg",
              "id6_xq9.jpg",
              "ht.jpg",
              "id6_xq10.jpg",
              "id6_xq11.jpg",
              "id6_xq12.jpg"
            ]
          }
        },
        {
          "id":7,
          "img":"product7.jpg",
          "title":"韩式系列/初心不负",
          "info1":" 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
          "info2":"花艺师打造 韩式花束系列",
          "newprice":"¥298",
          "oldprice":"¥398",
          "sold":"已销售6.2万件",
          "count":1,
          "ison":false,
          "label":"全新韩式系列",
          "detail":{
            "lunbo":[
              "id7_lunbo1.jpg",
              "id7_lunbo2.jpg",
              "id7_lunbo3.jpg"
            ],
            "lijian":"App下单立减5元",
            "huayu":"以热烈主题的红玫瑰及红色包装，搭配象征白色无暇的桔梗为设计主题，打造全新韩式系列。将这一簇美景包裹在一片雪白中，一条满载希望的丝带扎紧了无限的惊喜，只为将全世界的风景奉献于你怀里",
            "cailiao":"韩式花束系列：卡罗拉玫瑰11枝、3头或以上白底粉边洋桔梗5枝（如白底粉边桔梗缺货，可用白色桔梗代替）、大叶尤加利10枝、4枝红豆",
            "peisong":"全国(小城市请提前一天预定)",
            "fusong":"下单填写留言，即免费赠送精美贺卡！",
            "xuangou":[
              {"price":"￥298","title":"韩式/一路向阳","img":"id7_xuanze1.jpg"},
              {"price":"￥229","title":"韩式/初心不负","img":"id7_xuanze2.jpg"},
              {"price":"￥218","title":"韩式/公主的假日","img":"id7_xuanze3.jpg"},
              {"price":"￥268","title":"韩式/情窦初开","img":"id7_xuanze4.jpg"}
          ],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id7_xq1.jpg",
              "id7_xq2.jpg",
              "id7_xq3.jpg",
              "id7_xq4.jpg",
              "id7_xq5.jpg",
              "id7_xq6.jpg",
              "ht.jpg",
              "id7_xq7.jpg",
              "ht.jpg",
              "id7_xq8.jpg",
              "ht.jpg",
              "id7_xq9.jpg",
              "ht.jpg",
              "id7_xq10.jpg",
              "ht.jpg",
              "id7_xq11.jpg",
              "ht.jpg",
              "id7_xq12.jpg"
            ]
          }
        },
        {
          "id":8,
          "img":"product8.jpg",
          "title":"爱在心头-玫瑰50枝",
          "info1":"戴安娜粉玫瑰19枝，红玫瑰31枝 ",
          "info2":"双色搭配 赏心悦目",
          "newprice":"¥398",
          "oldprice":"¥479",
          "sold":"已销售7.1万件",
          "count":1,
          "ison":false,
          "label":"最新爆款",
          "detail":{
            "lunbo":[
              "id8_lunbo1.jpg",
              "id8_lunbo2.jpg",
              "id8_lunbo3.jpg",
              "id8_lunbo4.jpg"
            ],
            "lijian":"App下单立减8元",
            "huayu":"“此情无计可消除，才下眉头，却上心头。”李清照《一剪梅》",
            "cailiao":"玫瑰共50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",
            "peisong":"全国",
            "fusong":"下单填写留言，即免费赠送精美贺卡！",
            "xuangou":[],
            "peisongzhi":["北京","上海","南昌","都昌","广州"],
            "tuwenxq":[
              "id8_xq1.jpg",
              "id8_xq2.jpg",
              "id8_xq3.jpg",
              "id8_xq4.jpg",
              "id8_xq5.jpg",
              "id8_xq6.jpg"
            ]
          }
        }
      ],
    zhangbei:[
      {
        "id":1,
        "img":"product9.jpg",
        "title":"母爱",
        "info1":"紫红色康乃馨9枝，粉色多头康乃馨10枝",
        "info2":"红粉搭配  花色明艳",
        "newprice":"¥162",
        "oldprice":"¥228",
        "sold":"已销售1.6万件",
        "count":1,
        "ison":false,
        "label":"",
        "detail":{
          "lunbo":[
            "id1_zhangbei_lunbo1.jpg",
            "id1_zhangbei_lunbo2.jpg",
            "id1_zhangbei_lunbo3.jpg",
            "id1_zhangbei_lunbo4.jpg"
          ],
          "lijian":"App下单立减3元",
          "huayu":"没你疼爱我怎么生活，没你抚养我怎能长大，你给了我青春的年华，自己却满头白发，不负青春年华，是对你最好的报答！。",
          "cailiao":"紫红色康乃馨9枝，粉色多头康乃馨10枝",
          "peisong":"全国",
          "fusong":"下单填写留言，即免费赠送精美贺卡！",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id1_zhangbei_xq1.jpg",
            "id1_zhangbei_xq2.jpg",
            "id1_zhangbei_xq3.jpg",
            "id1_zhangbei_xq4.jpg",
            "id1_zhangbei_xq5.jpg",
            "id1_zhangbei_xq6.jpg",
            "id1_zhangbei_xq7.jpg"
          ]
         }
      },
      {
        "id":2,
        "img":"product10.jpg",
        "title":"留住好时光",
        "info1":"粉绣球1枝，粉雪山玫瑰6枝",
        "info2":"精选昆明A级花材",
        "newprice":"¥239",
        "oldprice":"¥306",
        "sold":"已销售9732件",
        "count":1,
        "ison":false,
        "label":"",
        "detail":{
          "lunbo":[
            "id2_zhangbei_lunbo1.jpg",
            "id2_zhangbei_lunbo2.jpg",
            "id2_zhangbei_lunbo3.jpg"
          ],
          "lijian":"App下单立减5元",
          "huayu":"让每点阳光，洒于你脸庞；令你的微笑，比花更盛放！",
          "cailiao":"粉绣球1枝，粉雪山玫瑰6枝，粉桔梗0.3扎，栀子叶0.5扎",
          "peisong":"全国",
          "fusong":"下单填写留言，即免费赠送精美贺卡！",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id2_zhangbei_xq1.jpg",
            "id2_zhangbei_xq2.jpg",
            "id2_zhangbei_xq3.jpg",
            "id2_zhangbei_xq4.jpg",
            "id2_zhangbei_xq5.jpg",
            "id2_zhangbei_xq6.jpg",
            "id2_zhangbei_xq7.jpg",
            "ht.jpg",
            "id2_zhangbei_xq7.jpg",
            "ht.jpg",
            "xq_mowei.jpg"
          ]
         }
      },
      {
        "id":3,
        "img":"product11.jpg",
        "title":"幸福绽放",
        "info1":"粉色康乃馨19枝",
        "info2":"温暖之选 亮丽花色 特价",
        "newprice":"¥165",
        "oldprice":"¥215",
        "sold":"已销售1.3万件",
        "count":1,
        "ison":false,
        "label":"",
        "detail":{
          "lunbo":[
            "id3_zhangbei_lunbo1.jpg",
            "id3_zhangbei_lunbo2.jpg",
            "id3_zhangbei_lunbo3.jpg",
            "id3_zhangbei_lunbo4.jpg"
          ],
          "lijian":"App下单立减3元",
          "huayu":"携带一束鲜花来到您的身旁，花儿浓缩了我对您的祝福，您在我的心里永远美丽、漂亮！",
          "cailiao":"粉色康乃馨19枝，石竹梅10枝、紫色勿忘我0.2扎、栀子叶10枝",
          "peisong":"全国",
          "fusong":"",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id3_zhangbei_xq1.jpg",
            "id3_zhangbei_xq2.jpg",
            "id3_zhangbei_xq3.jpg",
            "id3_zhangbei_xq4.jpg",
            "xq_mowei.jpg"
          ]
         }
      },
      {
        "id":4,
        "img":"product12.jpg",
        "title":"韩式系列/温柔以待",
        "info1":"粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
        "info2":"韩式系列 母亲节新品",
        "newprice":"¥239",
        "oldprice":"¥299",
        "sold":"已销售224件",
        "count":1,
        "ison":false,
        "label":"韩式系列新品",
        "detail":{
          "lunbo":[
            "id4_zhangbei_lunbo1.jpg",
            "id4_zhangbei_lunbo2.jpg",
            "id4_zhangbei_lunbo3.jpg",
            "id4_zhangbei_lunbo4.jpg"
          ],
          "lijian":"App下单立减5元",
          "huayu":"温柔的人，都是人间宝藏",
          "cailiao":"韩式花束系列：粉色康乃馨13枝，戴安娜玫瑰5枝、3头或以上粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
          "peisong":"全国(小城市请提前一天预定)",
          "fusong":"下单填写留言，即免费赠送精美贺卡！",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id4_zhangbei_xq1.jpg",
            "id4_zhangbei_xq2.jpg",
            "id4_zhangbei_xq3.jpg",
            "id4_zhangbei_xq4.jpg",
            "id4_zhangbei_xq5.jpg",
            "id4_zhangbei_xq6.jpg",
            "ht.jpg",
            "id4_zhangbei_xq7.jpg",
            "ht.jpg",
            "id4_zhangbei_xq8.jpg",
            "ht.jpg",
            "id4_zhangbei_xq9.jpg",
            "ht.jpg",
            "id4_zhangbei_xq10.jpg",
            "ht.jpg",
            "xq_mowei.jpg"
          ]
         }
      },
      {
        "id":5,
        "img":"product13.jpg",
        "title":"恩情无限",
        "info1":"粉色康乃馨11枝，百合2枝",
        "info2":"精选花材 精心设计",
        "newprice":"¥178",
        "oldprice":"¥232",
        "sold":"已销售1.3万件",
        "count":1,
        "ison":false,
        "label":"",
        "detail":{
          "lunbo":[
            "id5_zhangbei_lunbo1.jpg",
            "id5_zhangbei_lunbo2.jpg",
            "id5_zhangbei_lunbo3.jpg",
            "id5_zhangbei_lunbo4.jpg"
          ],
          "lijian":"App下单立减4元",
          "huayu":"我想在阳光下满身花香，我想在阳光下沐浴清新，我想在清新里感受每一天的好时光..",
          "cailiao":"粉色康乃馨11枝，粉色多头香水百合2枝，栀子叶10枝",
          "peisong":"全国",
          "fusong":"",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id5_zhangbei_xq1.jpg",
            "id5_zhangbei_xq2.jpg",
            "id5_zhangbei_xq3.jpg",
            "id5_zhangbei_xq4.jpg",
            "id5_zhangbei_xq5.jpg",
            "xq_mowei.jpg"
          ]
         }
      },
      {
        "id":6,
        "img":"product14.jpg",
        "title":"幸福万年长",
        "info1":"红色康乃馨66枝，白边紫色多头康乃馨15枝，栀子叶2扎",
        "info2":"温暖花束 幸福万年长",
        "newprice":"¥338",
        "oldprice":"¥486",
        "sold":"已销售3589件",
        "count":1,
        "ison":false,
        "label":"",
        "detail":{
          "lunbo":[
            "id6_zhangbei_lunbo1.jpg",
            "id6_zhangbei_lunbo2.jpg",
            "id6_zhangbei_lunbo3.jpg",
            "id6_zhangbei_lunbo4.jpg"
          ],
          "lijian":"App下单立减7元",
          "huayu":"家是什么?有人说家是倦鸟归来的巢，家是小船避风的港......有爱有家，幸福万年长。",
          "cailiao":"红色康乃馨66枝，搭配白边紫色多头康乃馨15枝，栀子叶2扎",
          "peisong":"全国",
          "fusong":"下单填写留言，即免费赠送精美贺卡！",
          "xuangou":[],
          "peisongzhi":["北京","上海","南昌","都昌","广州"],
          "tuwenxq":[
            "id6_zhangbei_xq1.jpg",
            "id6_zhangbei_xq2.jpg",
            "id6_zhangbei_xq3.jpg",
            "id6_zhangbei_xq4.jpg",
            "id6_zhangbei_xq5.jpg",
            "xq_mowei.jpg"
          ]
         }
      }
  ],
       imgpro2:[
        {img:"product15.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product16.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product17.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product18.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false}
       ],
      imgpro3:[
        {img:"product19.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product20.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product21.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product22.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false}
      ],
      imgpro4:[
        {img:"product23.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product24.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product25.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product26.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false}
      ],
      imgpro5:[
        {img:"product27.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product28.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product29.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false},
        {img:"product30.jpg",label:"畅销",info:"我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",newprice:"￥598",oldprice:"￥698",sold:"已销售6787件",count:1,ison:false}
      ],
      // 为什么选我们
      what:[
       
         {img:"Advantage2.png",text:"获评鲜花龙头企业"},
        {img:"Advantage3.png",text:"1~3小时送花上门"},
        {img:"Advantage4.png",text:"赛事冠军花艺师团队"},
        {img:"Advantage5.png",text:"严选花材"},
        {img:"Advantage6.png",text:"12道严苛品控标准"},
        {img:"Advantage7.png",text:"500万用户信赖好评"}
      ],
      // 页尾数据
      foot:[
        {text:"企业团购"},
        {text:"设计师款"},
        {text:"同城鲜花"},
        {text:"花语大全"},
        {text:"花礼优势"},
        {text:"勇敢爱"},
        {text:"常见问题"},
        {text:"关于我们"}
      ]
    }
  },
  methods: {
    toxiang(text,id){
      this.$router.push('/index/detail?'+`text=${text}`+`&id=${id}`)
    },
    onScrollTop(){
     this.scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (this.scrolltop>100) {
        this.onScrollbox =true;
      }else{
        this.onScrollbox=false
      };
    },
    BackTop(){
      let timer = setInterval(() => {
        let speed=Math.floor(-this.scrolltop/5);
         document.documentElement.scrollTop = document.body.scrollTop =this.scrolltop+speed;
         if(this.scrolltop==0){
           clearInterval(timer)
         }
      }, 16);
    },
    addshop(shopItem,index){
      console.log("-------------打印--------------");
      // console.log(this.$store.state.numAll)
      let productArr = window.localStorage.getItem('productArr')||[];
      
      // console.log(productArr)
      if(productArr.length==0){
        this.$store.commit('add');
        console.log(this.$store.state.numAll);
        productArr.push(shopItem);
        window.localStorage.setItem('productArr',JSON.stringify(productArr));
      }else{
        productArr=JSON.parse(productArr)
        var a=0;
        for(let i=0;i<productArr.length;i++){
          if(shopItem.img==productArr[i].img){
            // console.log(typeof shopItem.img==productArr[i].img);
            a++;
          }
        }
          if(a==0){
            this.$store.commit('add');
            console.log(this.$store.state.numAll)
            productArr.push(shopItem);
            window.localStorage.setItem('productArr',JSON.stringify(productArr));
          }
      }
    }
  },
  // 局部配置
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  // directives: {
  //   swiper: directive
  // },
  mounted() {
    // console.log('Current Swiper instance object',this.mySwiper);
    // this.mySwiper.slideTo(3,1000,false)
    window.addEventListener('scroll',this.onScrollTop);
  },
}

</script>
<style lang="less" scoped>
*{
  padding:0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: content-box;
}
.swiper-pagination{
  border-radius: 0%;
}
  .header{
    width: 100%;
    height: 50px;
    background: #435448;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    h2{
      font-size: 18px;
      color: #ff734c;
    }
    span{
      font-size: 30px;
      color: #fff;
      margin: 0 10px;
    }
    
  }
  .mySwiper{
    margin-top: 50px;
      img{
        width: 100%;
      }
    }
    /* 广告 */
  .notice{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .notice .notice-item{
    font-size: 12px;
    color: #435448;
  }
  .notice>.notice-item>span>a{
    color: #435448;
  }
 /* 图片导航 */
 /* 广告 */
  .imgNav{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 10px 0;
  }
  .imgNav .imgNav-item{
    font-size: 12px;
    color: #435448;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .imgNav .imgNav-item img{
    width: 40px;
    height: 40px;
  }
  /* 产品 */
  .product{
    margin: 10px 0;
    border-bottom: 8px solid #E9ECF0;
    padding: 0 8px 24px;
  }
  .product .productHeader{
    width: 100%;
    height: 60px;
    font-size: 18px;
    text-align: center;
    line-height: 60px;
    font-weight: normal;
  }
  .product .productContent{
    display: flex;
    width: 100%;
    margin-bottom: 12px;
    box-shadow: 0 12px 28px 0 #e9ecf0;
  }
  .product .productContent .productContentLeft,.product .productContent .productContentRight{
    flex:1;
  }
  .product .productContent .productContentLeft img{
    width: 100%;
  }
  .product .productContent .productContentRight{
    box-sizing: border-box;
    padding: 0 14px;
    width: 50%;
  }
  .product .productContent .productContentRight p:nth-child(1){
    font-size: 16px;
    margin-top: 8px;
    margin-bottom: 4px;
  }
  .product .productContent .productContentRight p:nth-child(2){
    font-size: 12px;
    display: block;
    height: 30px; 
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
  }
  .product .productContent .productContentRight p:nth-child(3){
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
    padding: 10px 0;
    border-top: 1px solid #E9ECF0;
    border-bottom: 1px solid #E9ECF0;
  }
  .product .productContent .productContentRight .productPrice{
    position: relative;
  }
  .product .productContent .productContentRight .productPrice p:nth-child(1) span:nth-child(1){
    font-size: 14px;
    color: #FF734C;
    font-weight: 500;
  } 
  .product .productContent .productContentRight .productPrice p:nth-child(1) span:nth-child(2){
    font-size: 10px;
    color: #71797F;
    margin-left: 5px;
    text-decoration: line-through;
  } 
  .product .productContent .productContentRight .productPrice p:nth-child(2){
    font-size: 12px;
  }
  .product .productContent .productContentRight .productPrice>span{
    font-size: 26px;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 65%;
    right: 4px;
    margin-top: -11px;
  }
  div.productFooter{
    margin-top: 22px;
    a{
    display: block;
    text-decoration: none;
    font-size: 18px;
    color: #111111;
    margin: 0 auto;
    border: 1px solid #232628;
    width: 120px;
    height: 30px;
    line-height:30px;
    text-align: center;
    border-radius: 0.14285714rem;
    }
  }
  div.scene{
    padding-bottom: 16px;
    border-bottom: 8px solid #E9ECF0;
    div.scene_title{
      padding: 14px 10px;
      font-size: 16px;
      height: 16px;
      line-height: 16px;
      span{
        font-weight: bold;
        margin-right: 4px;
        font-size: 16px;
        position: relative;
        bottom: 2px;
      }
    }
    div.scene_top{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding:6px 2px 0;
      div.img{
        width: 31%;
        position: relative;
        img{
          width: 100%;
        }
        span{
          position: absolute;
          font-size: 14px;
          width: 100%;
          text-align: center;
          display: block;
          bottom: 3%;
          left: 0;
          color: #ffffff;
        }
      }
    }
    div.scene_center{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding:6px 2px 0;
      div.img{
        width: 23%;
        position: relative;
        img{
          width: 100%;
        }
        span{
          position: absolute;
          font-size: 14px;
          width: 100%;
          text-align: center;
          display: block;
          top: 5px;
          left: 0;
          color: #111111;
        }
      }
    }
    div.scene_bottom{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding:6px 2px 0;
      div.img{
        width: 31%;
        position: relative;
        img{
          width: 100%;
        }
        span{
          position: absolute;
          font-size: 14px;
          width: 100%;
          text-align: center;
          display: block;
          bottom: 0px;
          left: 0;
          color: #ffffff;
          background: rgba(35, 38, 40, 0.8);
        }
      }
    }
  }
  div.product{
    div.content{
      display: flex;
      flex-direction: row;
      justify-content:space-between;
      flex-wrap: wrap;
      div.pro{
        width: 49%;
        box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
        padding-bottom: 8px;
        margin-bottom: 16px;
        img{
          width: 100%;
        }
        div.pro_content{
          position: relative;
          p{
            padding: 0 4px;
          }
          p.label{
            margin:7px 0;
            font-size: 14px;
            span{
              display: inline-flex;
              border-radius: 10rem;
              border: 1px solid #FF734C;
              color: #FF734C;
              font-size: 14px;
              padding: 0 8px;
            }
          }
          p.info{
            margin: 6px 0;
            font-size: 20px;
            font-weight: 300;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p.price{
            margin: 0;
            span{
              &:nth-child(1){
              font-size: 26px;
              color: #FF734C;
              font-weight: 500;
              }
              &:nth-child(2){
              font-size: 16px;
              color: #71797F;
              text-decoration: line-through;
              margin-left: 6px;
            }
            }
          }
          p.sold{
            margin: 0;
            font-size: 16px;
            color: #71797F;
          }
          span.iconfont{
            font-size: 22px;
            position:absolute;
            bottom: 20px;
            right: 14px;
          }
        }
      } 
    }
  }
  div.nobor{
    border: none;
  }
  div.sceen{
    width: 100%;
    img{
      width: 100%;
    }
  }
  div.brand{
    h3.brandpro{
      width: 100%;
      height: 60px;
      font-size: 18px;
      text-align: center;
      line-height: 60px;
      font-weight: normal;
    }
    div.content{
      padding-bottom: 14px;
      border-bottom: 8px solid #E9ECF0;
      width: 100%;
      overflow: hidden;
      div.brand_pro{
        width: 33.3333333%;
        float: left;
        text-align: center;
        img{
          width: 70%;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
  div.foot{
    margin-bottom: 50px;
    div.foot_top{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      span{
        width: 20%;
        height: 26px;
        margin: 20px 10px 2px;
        background: #E9ECF0;
        a{
          display: block;
          font-size: 14px;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 26px;
          text-decoration: none;
          color: #444444;
        }
      }
    }
    div.foot_center{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      padding-top: 20px;
      div.fen{
        width: 50%;
        text-align: center;
        span{
          display:inline-block;
          font-size: 22px;
          width: 50px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #E9ECF0;
          border-radius: 50%;
        }
        p{
          font-size: 14px;
          margin: 8px 0 14px;
        }
      }
    }
    div.foot_bottom{
      padding-bottom: 6px;
      p{
        padding: 0;
        font-size: 12px;
        margin: 0;
        color: #B4BABF;
        text-align: center;
      }
    }
  }
  a.zhiding{
    display: block;
    position: fixed;
    bottom: 60px;
    right: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    span{
      font-size: 22px;
      display: inline-block;
      width: 30px;
      height: 34px;
      color: #444444;
      border-radius: 50%;
      line-height: 34px;
      text-align: center;
      background: #ffffff;
      box-shadow: 0 5px 7px 0 #cccccc;
    }
  }
</style>