<template>
  <div class="index">
    <div class="header">
      <span @click="go">&lt;</span>
      <span>购物车</span>
    </div>
    <div class="content" v-show="$store.state.numAll==0||$store.state.numAll==null">
        <div class="img">
          <img src="images/shop.png" alt="">
        </div>
        <p>购物车内暂时没有商品</p>
        <a href="/category">去逛逛</a>
    </div>

    <div class="content1" v-show="$store.state.numAll>0">
      <div class="product" v-for="(item,index) in list" :key="index">
        <div class="left">
          <span><input type="checkbox" class="cbox" v-model="item.ison"></span>
        </div>
        <div class="right">
          <!-- <div class="img"> -->
            <img :src="'images/'+item.img" alt="">
          <!-- </div> -->
          <div class="pro">
            <p class="title">{{item.title}}</p>
            <span class="text-count">数量</span>
              <div class="add-sub btn-group">
                <span class="add btn" v-show="item.count!=1" @click="sub(index)">-</span>
                <span class="iconfont icon-shanchu" v-show="item.count==1" @click="del(index)"></span>
                <input type="text btn1" v-model="item.count">
                <span class="sub btn1"  @click="add(index)">+</span>
              </div>
            <p class="price1"><span class="price">{{item.newprice}}</span></p>
          </div>
          <span class="iconfont icon-shanchu del"  @click="del(index)"></span>
        </div>
        
      </div>
      <div class="foot">
        <div class="foot-left">
          <span><span><input type="checkbox" class="cbox" v-model="ison"  @click="is"></span>全选</span>
          <span class="iconfont icon-shanchu" @click="clear"></span>
        </div>
        <div class="foot-right">
          <div class="pri">
            <span>合计&nbsp;</span>
            <span>￥{{sum}}</span>
          </div>
          <a href="">去结算({{zong}})</a>
        </div>
      </div>
    </div>
     
  </div>
  
</template>

<script>
export default {
    data(){
    return {
      img:"product1.jpg",
      list:[],
      ison:null,
      zong:0,
      sum:0
    }
  },
  methods:{
    go(){
      window.history.go(-1);
    },
    sub(index){
      this.list[index].count--;
      // this.$store.commit('sub');
    },
    del(index){
      this.list.splice(index,1);
      var list=JSON.stringify(this.list);
      window.localStorage.setItem('productArr',list);
      this.$store.commit('sub');
    },
    add(index){
      this.list[index].count++;
    },
    clear(){
      const c = this.list.filter(item => {
        return !item.ison;
      })
      var list=JSON.stringify(c);
      window.localStorage.setItem('productArr',list);
      window.history.go(0);
      var a=c.length;
      window.localStorage.setItem("publicTit",a);
    },
    is(){
    if(this.list.length!=0){
      if(this.ison==true){
        for(var i=0;i<this.list.length;i++){
          this.list[i].ison=false;
        }
      }else {
         for(var i=0;i<this.list.length;i++){
          this.list[i].ison=true;
        }
      }
    }
    }
  },
  mounted(){
    var productArr=window.localStorage.getItem('productArr');
    productArr=JSON.parse(productArr);
    this.list=productArr;
    // console.log(this.$store.state.numAll)
  },
  watch:{
    list:{
			handler:function(val){
        if(this.list!=null){
          console.log(this)
          var a=0;
          this.sum=0;
          this.zong=0;
          for(var i=0;i<val.length;i++){
            if(val[i].ison==true){
              this.sum+=val[i].newprice.substring(1)*val[i].count;
              this.zong+=val[i].count;
              a++;
            };
          };
            if(a==val.length){
              this.ison=true;
            };
            if(a<val.length){
              this.ison=false;
            };
          var list=JSON.stringify(this.list);
          window.localStorage.setItem('productArr',list);
        }
      },
			deep:true
    }
  }
}

</script>
<style lang="less" scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}
input.cbox {
            -webkit-appearance: none;
            width: 17px!important;
            height: 17px!important;
            display: inline-block;
            margin: -3px 5px 0 0!important;
            cursor: pointer;
            vertical-align: middle;
            // border: 1px solid #cccccc;
            background: url("/images/checkbox.jpg") no-repeat -1px -1px;
            // border-radius: 50%;
            outline: none;
        }
        input.cbox:checked {
          background: url("/images/checkbox.jpg") no-repeat -1px -22px;
            // color: #FF734C;
        }
.index{
  background: #E9ECF0;
}
  div.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: #fff;
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
  div.content1{
    width: 100%;
    margin: 50px 0;
    div.head{
      height: 32px;
      overflow: hidden;
      line-height: 32px;
      background: #fff;
      margin: 2px 0 2px;
      border-top: 2px solid #E9ECF0;
      div.head-right{
        float: right;
        margin-right: 14px;
        span{
          font-size: 14px;
          display: inline-block;
          height: 32px;
          line-height: 32px;
        }
      }
    }
    div.product{
         width: 100%;
        height: 140px;
        overflow: hidden;
        padding: 10px 0;
        background: #fff;
        margin-bottom: 2px;
        box-shadow: 0 1px 1px 0 #dfdfdf;
      div.left{
        float: left;
        width: 10%;
        height: 140px;
        line-height: 140px;
        text-align: center;
      }
      div.right{
        float: right;
        width: 90%;
        height:140px;
        // position: absolute;
        // div.img{
          // width: 35%;
          img{
            height: 100%;
            float: left;
            margin-right: 8px;
          }
          div.pro{
            float: left;
            margin-right: 15px;
            // padding-left: 4px;
            p{
              font-size: 14px;
              margin: 0 0 20px;
            }
            .text-count{
              font-size: 12px;
              position: relative;
              top: -10px;
            }
            div.add-sub{
              display: inline-block;
              height: 28px;
              background-color: #F7F9FA;
              border: 1px solid #E9ECF0;
              overflow: hidden;
              margin-left: 4px;
              span{
                height: 100%;
                float: left;
                width: 28px;
                line-height: 28px;
                text-align: center;
                font-size: 18px;
              }
              span.add{
                display: inline-block;
                // width: 16px;
                // height: 16px;
              }
              input{
                display: block;
                border: none;
                width: 40px;
                height: 100%;
                float: left;
                outline: none;
                text-align: center;
                font-size:14px;
              }
            }
            p.price1{
              margin: 30px 0  10px;
              color: #FF734C;
              font-size: 16px;
            }
          }
          span.del{
            color: #444444;
            font-size: 18px;
            float: right;
            margin: 115px 16px 0 0;
          }
        // }
      }
    }
  }
  div.foot{
    max-width: 750px;
    margin: 0 auto;
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    // border-bottom: 1px solid #ffffff;
    background: #fff;
    z-index: 10;
    div.foot-left{
      float: left;
      span{
        &:first-child{
          font-size: 18px;
          padding: 0 20px 0 10px;
          span{
            padding: 0;
          }
        }
      }
    }
    div.foot-right{
      height: 100%;
      float: right;
      div.pri{
        display: inline-block;
        span{
          &:first-child{
            font-size: 16px;
          }
          &:last-child{
            font-size: 12px;
            color: #FF734C;
          }
        }
      }
      a{
        display: inline-block;
        height: 100%;
        width: 80px;
        background: #FF734C;
        color: #ffffff;
        // line-height: 50px;
        text-align: center;
        text-decoration: none;
        font-size: 14px;
        line-height: 46px;
        margin-left:16px;
        padding: 0 10px;
      }
    }
  }
  div.content{
    background: #ffffff;
    margin-top: 54px;
    text-align: center;
    padding-bottom: 40px;
    div.img{
      padding: 40px 0 10px;
      margin-right: 5px;
      img{
        width: 146px;
      }
    }
    p{
      font-size: 14px;
    }
    a{
      display:inline-block;
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      background-color: #ff734c;
      width: 100px;
      height: 32px;
      line-height: 32px;
      border-radius: 30px;
    }
  }

</style>
