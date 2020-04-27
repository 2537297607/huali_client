<template>
  <div class="index">
     <div class="header">
      <span @click="fan">&lt;</span>
      <img src="/images/head.png" alt="">
      <span class="iconfont icon-fenlei"></span>
    </div>
    <!-- 轮播 -->
     <swiper class="mySwiper" :options="swiperOptions"> 
       <swiper-slide v-for="(item,index) in data1.detail.lunbo" :key="index"><img :src="'images/'+item" alt=""></swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
     <div class="content">
       <div class="pro">
         <div class="pt">
           {{data1.title}}-{{data1.info1}}
           <span class="col">{{data1.info2}}</span>
           <span :class="['iconfont',shoucang]" @click="shou"></span>
         </div>
         <div class="pf">
           <span class="newprice">{{data1.newprice}}</span>
           <span class="oldprice">{{data1.oldprice}}</span>
           <span class="sold">{{data1.sold}}</span>
         </div>
       </div>
       <div class="jianjia">
         <span class="iconfont icon-shouji"></span>
         <span>{{data1.detail.lijian}}</span>
         <span>&gt;</span>
       </div>
     </div>
     <!-- 花语等 -->
     <div class="content1">
        <div class="pro huayu" v-show="data1.detail.huayu!=''">
          <span>花语</span>
          <span>{{data1.detail.huayu}}</span>
        </div>
        <div class="pro cailiao" v-show="data1.detail.cailiao!=''">
          <span>材料</span>
          <span>{{data1.detail.cailiao}}</span>
        </div>
        <div class="pro peisong" v-show="data1.detail.peisong!=''">
          <span>配送</span>
          <span :class="{'peisong':!isoff}">{{data1.detail.peisong}}</span>
          <span :class="{'xuanzhuan':isoff}" @click="isoff=!isoff" v-if="data1.detail.peisong.length>5">&gt;</span>
        </div>
        <div class="pro fusong" v-show="data1.detail.fusong!=''">
          <span>附送</span>
          <span>{{data1.detail.fusong}}</span>
        </div>
     </div>
     <!-- 配送至 -->
     <div class="content2">
        <div class="pro huayu" v-if="data1.detail.xuangou.length!=0">
          <span>已选</span>
          <span>{{xuanzeobj.title}}</span>
          <span data-toggle="modal" data-target="#myModal1">···</span>
        </div>
        <div class="pro cailiao" v-show="data1.detail.peisongzhi.length!=0">
          <span class="dian">配送至</span>
          <span>{{data1.detail.peisongzhi[0]}}</span>
          <span class="dian">···</span>
        </div>
     </div>
     <!-- 模态框 -->
     <div class="modal fade" id="myModal1" v-if="data1.detail.xuangou.length!=0">
      <div class="modal-dialog dialog">
        <div class="modal-content" style="border-radius:0px;">
    
          <!-- 模态框头部 -->
          <div class="modal-header head">
            <img :src="'images/'+xuanzeobj.img" alt="">
            <div class="right">
              <p class="price">{{xuanzeobj.price}}</p>
              <p class="pro"><span>已选</span><span>{{xuanzeobj.title}}</span></p>
            </div>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
    
          <!-- 模态框主体 -->
          <div class="modal-body body1" id="body1">
            <span v-for="(item,index) in data1.detail.xuangou" :key="index" @click="ok(item,index)">{{item.title}}</span>
            <!-- <span>你最珍贵</span>
            <span>暖暖</span>
            <span>嫣然一笑</span>
            <span>一如初见</span> -->
          </div>
        </div>
      </div>
    </div>
     <!-- 为什么选择我们 -->
     <div class="brand">
      <h3 class="brandpro">为什么选择我们</h3>
      <div class="content">
        <div class="brand_pro" v-for="(item,index) in what" :key="index">
          <img :src="'images/'+item.img" alt="">
          <p>{{item.text}}</p>
        </div>
      </div>
     </div>
     <div class="zhanshi">
       <div class="head">图文详情</div>
       <img :src="'images/'+item" alt="" v-for="(item,index) in data1.detail.tuwenxq" :key="index">
     </div>
     <div class="foot">
       <div class="kefu left">
         <span class="iconfont icon-kefu"></span>
         <span>客服</span>
       </div>
       <div class="gouwuche left">
         <span class="iconfont icon-gouwuche"></span>
         <span>购物车</span>
         <span class="sum" v-if="$store.state.numAll>0">{{$store.state.numAll}}</span>
       </div>
        
       <div class="right">
         <a href="##"  data-toggle="modal" data-target="#myModal" @click="mtout">加入购物车</a>
         <a href="#/Shop" >立即购买</a>
       </div>
     </div>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="z-index:99999999;!important,background:#ffffff;">
          <div class="modal-content">
            <div class="modal-body body2">
              加入购物车成功
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
      </div><!-- /.modal -->
     <a href="##" class="zhiding" v-show="onScrollbox" @click="BackTop" ><span class="iconfont icon-fanhuidingbu"></span></a>
  </div>
</template>

<script>
export default {
  data(){
    return {
      swiperOptions:{
        autoplay:true,
        pagination:{
          el:'.swiper-pagination'
        }
      },
      onScrollbox:false,
      scrolltop:0,
      peisongison:false,
      shoucang:'icon-shoucang',
      isoff:false,
      xuanzeobj:{},
      canshu:{},
      data1:{},
      dataobj:{
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
              {"price":"￥249","title":"一往情深","img":"id1_lunbo3.jpg"},
              {"price":"￥229","title":"你最珍贵","img":"id1_xuanze2.jpg"},
              {"price":"￥252","title":"暖暖","img":"id1_xuanze3.jpg"},
              {"price":"￥278","title":"嫣然一笑","img":"id1_xuanze4.jpg"},
              {"price":"￥278","title":"一如初见","img":"id1_xuanze5.jpg"}
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
      },
      // 为什么选我们
      what:[
       
         {img:"Advantage2.png",text:"获评鲜花龙头企业"},
        {img:"Advantage3.png",text:"1~3小时送花上门"},
        {img:"Advantage4.png",text:"赛事冠军花艺师团队"},
        {img:"Advantage5.png",text:"严选花材"},
        {img:"Advantage6.png",text:"12道严苛品控标准"},
        {img:"Advantage7.png",text:"500万用户信赖好评"}
      ],
    }
  },
  methods:{
    shou(){
      // console.log(this.shoucang)
      if(this.shoucang=='icon-shoucang'){
        this.shoucang='icon-shoucang1';
      }else if(this.shoucang=='icon-shoucang1'){
        this.shoucang='icon-shoucang';
      }
    },
    fan(){
      window.history.go(-1);
      // console.log(this.data)
    },
    ok(item,index){
      // console.log(item)
      var a=document.getElementById('body1').children;
      for(var i=0;i<a.length;i++){
        a[i].classList.remove('bor-col');
      }
      a[index].classList.add('bor-col');
      this.xuanzeobj=item;
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
    mtout(){
       function imgin(){
        $("#myModal").modal("hide")
        }
       setTimeout(imgin,1000);
    }
  },
  created(){
    var text=this.$route.query.text;
   var id=this.$route.query.id;
   this.canshu={text:text,id:id};
   for(var i in this.dataobj){
    //  console.log(text)
     if(text==i){
      var a=this.dataobj[i];
      console.log(a)
       for(var j=0;j<a.length;j++){
        //  console.log(a[j])
         if(id==a[j].id){
           this.data1=a[j];
         }
       }
     }
   }
  //  console.log(this.data1)
  },
  mounted(){
   this.xuanzeobj=this.data1.detail.xuangou[0];
   window.addEventListener('scroll',this.onScrollTop);
   
  },
  watch:{
  //   shoucang:function (val) {
  //     var shoucang=window.localStorage.getItem('shoucang');
  //     shoucang=JSON.parse(shoucang)
  //     console.log(shoucang)
  //     if(shoucang==null){
  //       shoucang=Array();
  //       window.localStorage.setItem('shoucang',JSON.stringify(shoucang));
  //     }else if(val=='icon-shoucang1'){
  //       // for(var i=0;i<zhong[0].imgpro.length;i++){
  //       //   if(zhong[0].imgpro[0].id==1){
            
  //       //   }
  //       // }
  //       var  shou=this.zhong[0].imgpro[0];
  //       // console.log(shoucang)
  //       shoucang.push(shou);
  //       window.localStorage.setItem('shoucang',stringify(shoucang));
  //     }else if(val=='icon-shoucang'){
  //       // for(var i=0;i<zhong[0].imgpro.length;i++){
  //       //   if(zhong[0].imgpro[0].id==1){
            
  //       //   }
  //       // }
  //       for(var i=0;i<shoucang.length;i++){
  //         if(shoucang[i].id=1){
  //           shoucang.splice(i,1);
  //         }
  //       }
  //       window.localStorage.setItem('shoucang',stringify(shoucang));
  //     }
  //   }
  }
}
</script>
<style lang="less" scoped>
*{
  padding: 0px;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
//选择样式模态框
div.dialog{
  position: fixed !important;
  bottom: 50px;
  max-width: 750px;
  width: 100%;
  // margin: 0 auto;
  // position: absolute !important;
  // top:50% !important;
  left:50% !important;
  transform:translateX(-50%) !important;
  -webkit-transform:translateX(-50%) !important;
  -moz-transform:translateX(-50%) !important;
  -ms-transform:translateX(-50%) !important;
  -o-transform:translateX(-50%) !important; 
  // left: -50%;
  // transform: translateX(-50%);
  div.modal-content{
    div.head{
      display: block;
      overflow: hidden;
      padding: 14px 24px;
      height: 110px;
      img{
        height: 100%;
        float: left;
      }
      button.close{
        margin: 0px;
        font-size: 26px;
        padding: 0;
      }
      div.right{
        float: left;
        padding: 0 12px;
        p.price{
            font-size: 16px;
            color: #FF734C;
            padding: 10px 0;
        }
        p.pro{
          overflow: hidden;
          span{
            float: left;
            font-size: 12px;
            &:first-child{
              color: #555555;
            }
            &:last-child{
              color: #111111;
              margin-left: 4px;
            }
          }
        }
      }
    }
    div.body1{
      padding: 10px 12px;
      span{
        float: left;
        width: 24%;
        height: 30px;
        line-height: 30px;
        background-color: #F7F9FA;
        font-size: 14px;
        border: 1px solid #F7F9FA;
        text-align: center;
        border-radius: 0.14285714rem;
        margin: 0 14px 16px;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span.bor-col{
        border: 1px solid #FF734C;
        color: #FF734C;
      }
    }
  }
}
// 加入购物车模态框
/* 模态框 */
.body2{
    position: fixed;
    background-image: radial-gradient(circle at 50% 50%,#ffffff,#fff6e6 150%);;
    top: 300px;
    height: 100px;
    width: 70%;
    left: 0;
    right: 0;
    margin: 0 auto;
    line-height: 70px;
    text-align: center;
    color: #967766;
    font-size: 20px;
    }
    h3{
      margin: 0;
      font-weight: bolder;
    }
//轮播
  .swiper-pagination{
    border-radius: 0%;
  }
 .mySwiper{
    margin-top: 50px;
      img{
        width: 100%;
      }
  }
  .header{
    width: 100%;
    height: 50px;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    img{
      width: 36%;
    }
    span{
      font-size: 30px;
      color: #333333;
      margin: 0 10px;
      font-family: cursive;
    }
    
  }

  span.icon-shoucang1{
    color: #FF734C;
  }
  div.content{
    // padding: 0px 12px 16px;
    border-bottom: 8px solid #dfdfdf;
    div.pro{
       padding: 8px 12px 16px;
       border-bottom: 1px solid #cccccc;
       position: relative;
      div.pt{
        display: inline-block;
        font-size: 14px;
        width: 80%;
        
        span.col{
          font-size: 14px;
          color: red;
        }
        span{
          &:last-child{
            position: absolute;
            top: 8px;
            right: 14px;
          }
        }
      }
      div.pf{
        overflow: hidden;
        padding: 10px 0 0;
        span.newprice{
          display: block;
          float: left;
          font-size: 18px;
          color: #FF734C;
          font-weight: 600;
        }
         span.oldprice{
          display: block;
          float: left;
          font-size: 14px;
          color: #bbbbbb;
          text-decoration: line-through;
          padding: 6px 0 0 5px;
        }
         span.sold{
          display: block;
          float: right;
          font-size: 12px;
          color: #111111;
          padding: 10px 0 0;
        }
      }
    }
    div.jianjia{
      padding: 10px 12px;
      overflow: hidden;
      span{
        &:nth-child(1){
          font-size: 24px;
          float: left;
        }
        &:nth-child(2){
          font-size: 18px;
          float: left;
          margin:3px 0 0 16px ;
        }
        &:nth-child(3){
          font-size: 18px;
          float: right;
          margin-left: 16px;
          font-family: cursive;
          padding-top: 4px
        }
      }
    }
  }
  // 花语等
  div.content1{
    padding: 10px 12px;
    border-bottom: 8px solid #dfdfdf;
    div.pro{
      overflow: hidden;
      padding: 6px 0;
      span{
        display: block;
        font-size: 12px;
        &:first-child{
          float: left;
          width: 10%;
        }
        &:nth-child(2){
          float: left;
          width: 84%;
          margin-left: 2px;
        }
         &:nth-child(3){
          font-size: 16px;
          float: right;
          margin-left: 2px;
          font-family: cursive; 
          margin-right: 4px;       
        }
      }
       
      span.xuanzhuan{
        transform: rotate(90deg);
      }
    }
    div.peisong{
      span.peisong{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
 }
 //配送至
  div.content2{
    padding: 10px 12px;
    border-bottom: 8px solid #dfdfdf;
    div.pro{
      overflow: hidden;
      padding: 6px 0;
      span{
        display: block;
        font-size: 12px;
        &:first-child{
          float: left;
          width: 10%;
        }
        &:nth-child(2){
          float: left;
          width: 80%;
          margin-left: 2px;
        }
         &:nth-child(3){
          font-size: 16px;
          float: right;
          margin-left: 2px;
          font-family: cursive;        
          letter-spacing: -6px;
        }
      }
    }
    div.peisong{
      span.peisong{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
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
        margin-bottom: 10px;
        img{
          width: 50%;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
div.zhanshi{
  margin-bottom: 50px;
  div.head{
    padding: 10px 12px;
    font-size: 16px;
  }
  img{
    width: 100%;
  }
}
div.foot{
  position: fixed;
  bottom: 0;
  height: 50px;
  overflow: hidden;
  background: #F7F9FA;
  max-width: 750px;
  margin: 0 auto;
  width: 100%;
  z-index: 20;
  div.left{
    float: left;
    display: flex;
    height: 50px;
    width: 20%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    span{
      font-size: 14px;
      font-weight: 100;
      font-weight: inherit
    }
    span.iconfont{
      font-size: 20px;
    }
    span.sum{
      font-size: 10px;
      position: absolute;
      top: 4px;
      left: 31%;
      background: #FF734C;
      color: #ffffff;
      padding: 0 6px;
      border-radius: 6px;
    }
  }
  div.kefu{
    border-right: 1px solid #cccccc;
    box-sizing: border-box;
  }
  div.right{
    width: 60%;
    float: left;
    height: 100%;
    a{
      display:block;
      width: 50%;
      height: 50px;
      padding: 0;
      line-height: 50px;
      float: left;
      background-color: #3D4D42;
      text-align: center;
      font-size: 14px;
      color: #fff;
      &:nth-child(2){
        background: #FF734C;
      }
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