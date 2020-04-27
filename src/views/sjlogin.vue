<template>
  <div class="index">
   <div class="header">
      <span @click="back">&lt;</span>
      <span>登录注册</span>
      <span class="iconfont icon"></span>
    </div>
    <div class="hua">
      <img src="/images/head.png" alt="">
    </div>
    <div class="form">
      <div class="denglu">
        <p>手机号/邮箱</p>
        <input type="text" placeholder="请输入手机号或邮箱" v-model="zhanghao" @focus="cleartxt">
      </div>
      <div class="denglu">
        <p>密码</p>
        <input type="password" placeholder="请输入密码" v-model="mima" @focus="cleartxt">
        <span>忘记密码</span>
      </div>
      <span class="error" v-text="error"></span>
      <div class="shouji"><a href="##" @click="denglu">登录</a></div>
      <div class="mimadenglu"><a href="#/login">手机短信登录</a></div>
    </div>
    <div class="foot">
      <p>其他登录方式</p>
      <div class="foot-login">
        <div class="left">
          <span class="iconfont icon-QQ"></span>
          <span>QQ</span>
        </div>
        <div class="center">
          <span class="iconfont icon-zhifubao"></span>
          <span>支付宝</span>
        </div>
        <div class="right">
          <span class="iconfont icon-youxiang"></span>
          <span>邮箱地址</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      zhanghao:'',
      mima:'',
      error:''
    }
  },
  methods:{
    back(){
      window.history.go(-1);
    },
    denglu(){
      var zhanghao1=window.localStorage.getItem("zhanghu");
      if(zhanghao1==null){
        this.error='账户未注册';
      }else{
        if(this.zhanghao!=''&&this.mima!=''){
          var arr=JSON.parse(zhanghao1);
          console.log(arr);
          var zhanghao=this.zhanghao;
          var mima=this.mima;
          var a=0;
          for(var i=0;i<arr.length;i++){
            if(arr[i].username==this.zhanghao&&arr[i].password==this.mima){
              a++;
              console.log('恭喜登录成功')
              window.location.href='/my';
            }else if(arr[i].username==this.zhanghao&&arr[i].password!=this.mima){
              a++;
              this.error='密码错误';
            }
          }
          if(a==0){
            this.error='账户未注册';
          }
        }else if(this.zhanghao==''||this.mima==''){
          this.error='账户或密码不能为空';
        }
      }
    },
    cleartxt(){
      this.error='';
      this.mima='';
    }
  }
}
</script>
<style lang="less" scoped>
    *{
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
      box-sizing: content-box;
    }
    a:active{
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
        height: 48px;
        line-height: 48px;
        left: 50%;
        top:-48px;
        margin-left: -30px;
        }
      }
    }
    div.hua{
      margin-top: 50px;
      padding: 30px 0 6px;
      text-align: center;
      text-align: center;
      img{
        width: 45%;
      }
    }
   div.form{
     padding: 0 16px;
     span.error{
      font-size: 12px;
      color: red;
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
     }
     div.denglu{
        position: relative;
       p{
         font-size: 14px;
         padding: 22px 0 6px;
       }
       input{
         border:none;
         outline: none;
         display: block;
         font-size: 14px;
         padding: 10px 2px;
         width: 100%;
         border-bottom: 1px solid #dddddd;
       }
       span{
          position: absolute;
          font-size: 14px;
          right: 0;
          top: 60px;
        }
     }
     div.shouji{
       a{
         display: block;
         font-size: 18px;
         padding: 12px 0;
         background: #ff734c;
         color: #ffffff;
         margin: 10px 0 0;
         border-radius: 30px;
         text-align: center;
       }
     }
     div.mimadenglu{
       a{
          display: block;
         font-size: 18px;
         padding: 12px 0;
         color: #666666;
         margin: 16px 0;
         border-radius: 30px;
         text-align: center;
       }
     }
   }
      div.foot{
     padding: 0 16px;
     text-align: center;
     p{
       display: inline-block;
       font-size: 14px;
       background: #ffffff;
       position: relative;
       bottom: -15px;
       padding: 0 20px;
     }
     div.foot-login{
      overflow: hidden;
      padding: 10px 0;
      height:50px;
      line-height: 70px;
      border-top: 1px solid #dddddd;
       div{
         float: left;
         width: 33.3333%;
         span{
           &:first-child{
             font-size: 20px;
             color: #1CACEA;
           }
           &:last-child{
             font-size: 14px;
             padding: 0 5px 3px;
           }
         }
       }
     }
   }
</style>