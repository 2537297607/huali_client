<template>
  <div class="index">
    <div class="header">
      <div class="seach">
        <span class="iconfont icon-sousuo1"></span>
        <input type="text" placeholder="搜索鲜花，蛋糕，礼品">
      </div>
    </div>
    <div class="content">
      <div class="content_left">
        <ul>
          <li v-for="(item,index) in left_nav" :key="index"><a href="" :class="{active:item.ison}" @click.stop.prevent="qiehuan(index)">{{item.text}}</a></li>
        </ul>
      </div>
      <!-- 热门推荐 -->
       <div class="content_right" v-show="left_nav[0].ison==true">
        <div>
          <img src="images/fenlei_tuijian.jpg" alt="">
        <div class="content_pro">
          <div class="pro" v-for="(item,index) in tuijian" :key="index">
            <img :src="'images/'+item.img" :alt="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
        </div>
      </div>
      <!-- 左导航鲜花 -->
       <div class="content_right" v-show="left_nav[1].ison==true">
        <div>
          <img src="images/xianhua.png" alt="">
          <!-- 对象 -->
          <div class="content_pro">
            <div class="title">
              <span>对象</span>
              <div class="right">
                <span class="iconfont icon-caifuzhongxin"></span>
                鲜花排行榜
              </div>
            </div>
            <div class="pro" v-for="(item,index) in xianhua_duixiang" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 场合 -->
          <div class="content_pro">
            <div class="title">
              <span>场合</span>
            </div>
            <div class="pro" v-for="(item,index) in xianhua_changhe" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 花材 -->
          <div class="content_pro">
            <div class="title">
              <span>花材</span>
            </div>
            <div class="pro" v-for="(item,index) in xianhua_huacai" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 玫瑰 -->
          <div class="content_pro">
            <div class="title">
              <span>玫瑰</span>
            </div>
            <div class="pro" v-for="(item,index) in xianhua_meigui" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 类别 -->
          <div class="content_pro">
            <div class="title">
              <span>类别</span>
            </div>
            <div class="pro" v-for="(item,index) in xianhua_leibie" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 价格 -->
          <div class="content_pro">
            <div class="title">
              <span>价格</span>
            </div>
            <a href="" v-for="(item,index) in jiage" :key="index"><span>{{item}}</span></a>
          </div>
          <!-- 枝数 -->
          <div class="content_pro">
            <div class="title">
              <span>枝数</span>
            </div>
            <a href="" v-for="(item,index) in zhishu" :key="index"><span>{{item}}</span></a>
          </div>
        </div>
      </div>
      <!-- 左导航永生花 -->
       <div class="content_right" v-show="left_nav[2].ison==true">
        <div>
          <img src="images/yongshenghua.png" alt="">
          <!-- 对象 -->
          <div class="content_pro">
            <div class="title">
                <span>对象</span>
              </div>
            <div class="pro" v-for="(item,index) in yongsheng_duixiang" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
          <!-- 分类 -->
          <div class="content_pro">
            <div class="title">
                <span>分类</span>
              </div>
            <div class="pro" v-for="(item,index) in yongsheng_fenlei" :key="index">
              <img :src="'images/'+item.img" :alt="item.img">
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 蛋糕 -->
       <div class="content_right" v-show="left_nav[3].ison==true">
        <div>
          <img src="images/dangao.png" alt="">
        <div class="content_pro">
          <div class="pro" v-for="(item,index) in tuijian" :key="index">
            <img :src="'images/'+item.img" :alt="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
        </div>
      </div>
      <!-- 特色礼品 -->
       <div class="content_right" v-show="left_nav[4].ison==true">
        <div>
          <img src="images/teselipin.png" alt="">
        <div class="content_pro">
          <div class="pro" v-for="(item,index) in tuijian" :key="index">
            <img :src="'images/'+item.img" :alt="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
        </div>
      </div>
      <!-- 礼篮 -->
       <div class="content_right" v-show="left_nav[5].ison==true">
        <div>
          <img src="images/lilan.png" alt="">
        <div class="content_pro">
          <div class="pro" v-for="(item,index) in tuijian" :key="index">
            <img :src="'images/'+item.img" :alt="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
        </div>
      </div>
      <!-- 绿植花卉 -->
       <div class="content_right" v-show="left_nav[6].ison==true">
        <div>
          <img src="images/lvzhihuafen.png" alt="">
        <div class="content_pro">
          <div class="pro" v-for="(item,index) in tuijian" :key="index">
            <img :src="'images/'+item.img" :alt="item.img">
            <p>{{item.text}}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      left_nav:[
        {text:"热门推荐",ison:true},
        {text:"鲜花",ison:false},
        {text:"永生花",ison:false},
        {text:"蛋糕",ison:false},
        {text:"特色礼品",ison:false},
        {text:"礼篮",ison:false},
        {text:"绿植花卉",ison:false}
      ],
      tuijian:[
        {img:"tuijian1.png",text:"送恋人鲜花"},
        {img:"tuijian2.png",text:"送长辈鲜花"},
        {img:"tuijian3.png",text:"生日鲜花"},
        {img:"tuijian4.png",text:"礼盒鲜花"},
        {img:"tuijian5.png",text:"永生花"},
        {img:"tuijian6.png",text:"蛋糕"},
        {img:"tuijian7.png",text:"元祖蛋糕"},
        {img:"tuijian8.png",text:"金箔花"},
        {img:"tuijian9.png",text:"首饰"},
        {img:"tuijian10.png",text:"巧罗巧克力"},
        {img:"tuijian11.png",text:"创意礼盒"},
        {img:"tuijian12.png",text:"企业团购"},
      ],
      xianhua_duixiang:[
        {img:"quanbu.png",text:"全部"},
        {img:"xianhua_duixiang2.png",text:"送女友鲜花"},
        {img:"xianhua_duixiang3.png",text:"送男性鲜花"},
        {img:"xianhua_duixiang4.png",text:"送长辈鲜花"},
        {img:"xianhua_duixiang5.png",text:"送朋友鲜花"},
      ],
      xianhua_changhe:[
      {img:"xianhua_changhe1.png",text:"爱情鲜花"},
      {img:"xianhua_changhe2.png",text:"生日鲜花"},
      {img:"xianhua_changhe3.png",text:"探望慰问"},
      {img:"xianhua_changhe4.png",text:"商务鲜花"},
      {img:"xianhua_changhe5.png",text:"祝福庆贺"},
      {img:"xianhua_changhe6.png",text:"婚礼鲜花"},
      {img:"xianhua_changhe7.png",text:"全道歉鲜花部"},
      {img:"xianhua_changhe8.png",text:"哀思鲜花"},
      {img:"xianhua_changhe9.png",text:"港澳台鲜花"}
      ],
      xianhua_huacai:[
      {img:"xianhua_huacai1.png",text:"玫瑰"},
      {img:"xianhua_huacai2.png",text:"康乃馨"},
      {img:"xianhua_huacai3.png",text:"向日葵"},
      {img:"xianhua_huacai4.png",text:"百合"},
      {img:"xianhua_huacai5.png",text:"绣球"},
      {img:"xianhua_huacai6.png",text:"郁金香"},
      {img:"xianhua_huacai7.png",text:"扶郎/太阳花"},
      {img:"xianhua_huacai8.png",text:"马蹄莲"},
      ],
      xianhua_meigui:[
        {img:"xianhua_meigui1.png",text:"红玫瑰"},
        {img:"xianhua_meigui2.png",text:"粉玫瑰"},
        {img:"xianhua_meigui3.png",text:"白玫瑰"},
        {img:"xianhua_meigui4.png",text:"紫玫瑰"},
        {img:"xianhua_meigui5.png",text:"黄玫瑰"},
        {img:"xianhua_meigui6.png",text:"香槟色"},
      ],
      xianhua_leibie:[
        {img:"xianhua_leibie1.png",text:"花束"},
        {img:"xianhua_leibie2.png",text:"花盒"},
        {img:"xianhua_leibie3.png",text:"桌面花篮"},
        {img:"xianhua_leibie4.png",text:"瓶插花"},
        {img:"xianhua_leibie5.png",text:"果篮"},
        {img:"xianhua_leibie6.png",text:"开业花篮"},
      ],
      jiage:["特价鲜花","150元以下","150-200元","250-350元","350-550元","550-800元","800元以上"],
      zhishu:["9枝","11枝","19枝","22枝","29枝","33枝","50枝","66枝","99枝以上"],
      yongsheng_duixiang:[
        {img:"quanbu.png",text:"全部"},
        {img:"yongsheng_duixiang2.png",text:"送女友"},
        {img:"yongsheng_duixiang3.png",text:"送男性"},
        {img:"yongsheng_duixiang4.png",text:"送长辈"},
        {img:"yongsheng_duixiang5.png",text:"送朋友"}
      ],
      yongsheng_fenlei:[
        {img:"yongsheng_fenlei1.png",text:"永生瓶花"},
        {img:"yongsheng_fenlei2.png",text:"经典花盒"},
        {img:"yongsheng_fenlei3.png",text:"特色永生花"},
        {img:"yongsheng_fenlei4.png",text:"巨型玫瑰"}
      ]
    }
  },
  methods: {
    qiehuan(index){
      for(var i=0;i<this.left_nav.length;i++){
        this.left_nav[i].ison=false;
      }
      this.left_nav[index].ison=true;
    }
  }
}

</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
div.index{
  height: 100%;
}
  div.header{
    width: 100%;
    height: 50px;
    border-bottom:1px solid #cccccc;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    background: #ffffff;
    z-index: 10;
    div.seach{
      display: inline-block;
      margin-top: 5px;
      background: #E9ECF0;
      width: 90%;
      height: 40px;
      border-radius: 28px;
      position: relative;
      span{
        position: absolute;
        top: 9px;
        left: 16px;
        font-size: 22px;
      }
      input{
        border:none;
        outline: none;
        display: inline-block;
        width: 60%;
        height: 40px;
        position: absolute;
        top: 0;
        left: 50px;
        background: transparent;
        font-size: 16px;
      }
    }
  }
  div.content{
    // height: 100%;
    width: 100%;
    padding: 50px 0;
    position: relative;
    div.content_left{
      height: 100%;
      width: 20%;
      position: fixed;
      top: 50px;
      left: 0;
      border-right: 1px solid #cccccc;
      ul{
        li{
         a{
          display: inline-block;
          font-size: 14px;
          width: 100%;
          height: 26px;
          text-align: center;
          line-height: 26px;
          color: #444444;
          padding: 6px 0;
          border-left: 2px solid transparent;
          box-sizing: content-box;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          &.active{
            border-left: 2px solid #FF734C;
            color: #FF734C;
            text-decoration: none;
          }
         }
        }
      }
    }
    div.content_right{
      position: absolute;
      right: 0;
      top: 50px;
      padding: 10px 10px 70px;
      width: 80%;
      
      img{
        width: 100%;
      }
      div.content_pro{
        width: 100%;
        padding: 5px;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 #dddddd;
        margin-bottom: 5px;
        div.pro{
          width: 33.333%;
          text-align: center;
          padding: 8px 0;
          float: left;
          img{
            width: 64%;
          }
          p{
            font-size: 14px;
            color: #999999;
          }
        }
        div.title{
          overflow: hidden;
          padding: 6px 8px 10px;
          color: #666666;
          span{
            float: left;
            font-size: 14px;
          }
          div.right{
            float: right;
            font-size: 14px;
          }
        }
        a{
          display: block;
          font-weight: 300;
          font-size: 14px;
          float: left;
          height: 40px;
          width: 30%;
          margin: 0 5px 8px 4px;
          span{
            display: inline-block;
            width: 100%;
            height: 40px;
            color: #000000;
            line-height: 40px;
            text-align: center;
            background: #F7F9FA;
          }
        }
      }
    }
  }
  
</style>
