<template>
  <div class="index">
    <div class="header">
      <span>&lt;</span>
      <span>个人</span>
    </div>
    <div class="content">
      <div class="login">
        <p>Hi,欢迎来到花礼网</p>
        <p><a href="#/login">登录/注册</a></p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="content_pro">
      <div class="order">
        <p class="head">
          <span>我的订单</span>
          <span>全部订单&gt;</span>
        </p>
        <div class="order_pro">
          <div class="pro">
            <a href="">
              <img src="images/wodedingdan1.png" alt="">
              <p>待付款</p>
            </a>
          </div>
          <div class="pro">
            <a href="">
              <img src="images/wodedingdan2.png" alt="">
              <p>今日配送</p>
            </a>
          </div>
          <div class="pro">
            <a href="">
              <img src="images/wodedingdan3.png" alt="">
              <p>待评价</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 优惠卷，权益卡，余额等 -->
    <div class="content_pro">
      <div class="order">
        <div class="order_pro">
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-youhuiquan"></span>
              <p>优惠卷</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-quanyikajuan"></span>
              <p>权益卡</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-yue"></span>
              <p>余额</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-uEA-ste-service-"></span>
              <p>会员积分</p>
            </a>
          </div>
        </div>
        <div class="order_pro">
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-shouhuodizhi"></span>
              <p>收货地址</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-icon-test"></span>
              <p>生日纪念提醒</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-shoucang"></span>
              <p>我的收藏</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-liulanjilu"></span>
              <p>浏览记录</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 客服，帮助及设置等 -->
    <div class="content_pro">
      <div class="order">
        <div class="order_pro">
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-kefu"></span>
              <p>联系客服</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-frontent-header-help"></span>
              <p>帮助中心</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-guanyu"></span>
              <p>关于花礼</p>
            </a>
          </div>
          <div class="pro1">
            <a href="">
              <span class="iconfont icon-shezhi"></span>
              <p>设置</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bian" v-if="ison">
      <div class="guangao">
      <div class="left">
        <img src="images/wxgeren.png" alt="">
      </div>
      <div class="center">
        Hi~我是您的专属助理喜棠，可以给您推荐礼物和跟踪订单，有需求时，1对1帮您⾛绿⾊通道处理~
      </div>
      <div class="right">
        <a href="">加我微信</a>
      </div>
      <span class="clear" @click="isoff">
        x
      </span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function() {
    return {
      ison:true
    }
  },
  methods:{
    isoff(){
      this.ison=false;
    }
  },
  mounted(){
    this.$options.time();
  },
  time(){
    console.log(this);
  }
}

</script>
<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  box-sizing: content-box;
}
div.index{
  min-height: 100%;
  background: #E9ECF0;
}
  div.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: #ffffff;
    // position: absolute;
    box-shadow: 0 1px 3px 0 #cfcfcf;
    z-index: 10;
    span{
     
      &:nth-child(1){
        position: relative;
        left: 10px;
        font-size: 26px;
        top: 0;
        height: 48px;
        display: block;
        width: 26px;
        font-family: cursive;
        line-height: 48px;
      }
      &:nth-child(2){
      font-size: 20px;
      position: relative;
      display: block;
      width: 60px;
      height: 48px;
      line-height: 48px;
      left: 50%;
      top:-48px;
      margin-left: -30px;
    }
    }
  }
  div.content{
    margin-top: 50px;
    div.login{
      width: 100%;
      height: 160px;
      background: url("/images/background1.png");
      text-align: center;
      border: 1px solid transparent;
      box-sizing: border-box;
      p{
        &:first-child{
          font-size: 14px;
          color: #ffffff;
          margin-top: 30px;
        }
        &:last-child{
          margin: 14px 0;
          a{
            display: inline-block;
            text-decoration: none;
            width: 140px;
            height: 40px;
            border-radius: 22px;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            background: #ffffff;
            color: #000000;
          }
        }
      }
    }
  }
  div.content_pro{
    padding: 0 10px;
    position: relative;
    top: -26px;
    div.order{
      background: #ffffff;
      font-size: 12px;
      border-radius: 5px;
      padding: 4px 0;
      box-sizing: border-box;
      margin-bottom: 10px;
      p.head{
        display: block;
        height: 44px;
        padding: 0 24px;
        span{
          display: block;
          width: 50%;
          float: left;
          font-size: 16px;
          line-height: 44px;
          border-bottom: 1px solid #cccccc;
          &:first-child{
            text-align:start;
          }
          &:last-child{
            text-align: end;
          }
        }
      }
      div.order_pro{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      padding:0 24px;
      box-sizing: border-box;
      margin-bottom: 10px;
      div.pro{
        width: 30%;
        text-align: center;
        padding: 20px 0 4px;
        a{
          text-decoration: none;
          color: #000000;
          display: block;
          img{
          width: 34%;
          }
          p{
          text-align: center;
          }
        }
      }
      div.pro1{
        width: 25%;
        text-align: center;
        padding: 16px 0;
        a{
          display: inline-block;
          color: #000;
          p{
          margin-top: 6px;
        }
        } 
      }
      &:nth-child(2){
        div.pro1{
          border-top: 1px solid #cccccc;
        }
      }
    }
  }
  }
  div.bian{
    padding: 0 8px;
    div.guangao{
    padding:24px 10px;
    position: relative;
    margin: 30px 0 50px;
    top: -46px;
    width: 100%;
    background: url("/images/wodebeijing.png");
    overflow: hidden;
    box-sizing: border-box;
    div.left{
      float: left;
      width: 12%;
      height: 100%;
      line-height: 100%;
      z-index: 1;
      img{
        width: 90%;
        margin-top: 10px;
      }
    }
    div.center{
      font-size: 12px;
      width: 50%;
      float: left;
      padding: 10px;
      background: #FFC9BB;
      height: 100%;
    }
    div.right{
      float: left;
      padding: 10px;
      width: 22%;
      a{
        display: block;
        width: 114%;
        height: 36px;
        background: #FF734C;
        color: #ffffff;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        border-radius: 23px;
        margin-top: 4px;
      }
    }
    span.clear{
      width: 19px;
      height: 20px;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      position: absolute;
      top: 20px;
      right: 16px;
      border-radius: 50%;
      background: #999999;
      opacity: 0.7;
      color: #ffffff;
    }
  }
  }
</style>