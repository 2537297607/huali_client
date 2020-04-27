<template>
   <!-- app导航 -->
   <div class="dinwei">
      <div id="nav" class="nav">      
      <div class="nav-item" v-for="(item,index) in nav" :key="index">
        <router-link :to="item.path">
          <span :class="['iconfont' ,item.iconc]"></span>{{item.text}}
          <span class="sum" @click="dian" v-if="index==2&&$store.state.numAll>0">{{$store.state.numAll}}</span>
        </router-link>
        <!-- <router-link :to="item.path" v-if="this.$store.state.numAll==0">
          <span :class="['iconfont' ,item.iconc]"></span>{{item.text}}
          <span class="sum" @click="dian" v-if="index==2&&numAll>0">{{numAll}}</span>
        </router-link> -->
      </div>         
    </div>
   </div>
</template>

<script>
export default {
  name:'Tabbar',
  data(){
    return {
      // numAll:this.$store.state.numAll,
      nav:[
      {path:"/index",icon:true,iconc:"icon-shouye",text:"首页"},
      {path:"/category",icon:true,iconc:"icon-fenlei",text:"分类"},
      {path:"/shop",icon:true,iconc:"icon-gouwuche",text:"购物车"},
      {path:"/my",icon:true,iconc:"icon-xiaolian",text:"我的"}
      ]
    }
  },
  methods: {
    rou(){
      console.log(this.$router)
    },
    dian(){
      console.log(this.$store)
    }
  },
  mounted(){
    var productArr=window.localStorage.getItem('productArr')||[];  
  }
}
</script>

<style lang="less" scoped>
  .nav{
    max-width: 750px;
    width: 100%;
    height: 40px;
    padding: 5px 0;
    background: #F7F9FA;
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: content-box;
  }
  .nav .nav-item{
    width: 25%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    float: left;
    padding-top: 3px;
    height: 100%;
    
  }
  .nav .nav-item a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #232628;
    text-decoration: none;
    position: relative;
    /* 取消点击nav图标时背景高亮 */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .nav .nav-item a.router-link-active{
    color: #FF734C;
  }  
  span.sum{
    font-size: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    background: #FF734C;
    color: #ffffff;
    padding: 0 6px;
    border-radius: 6px;
}
</style>