<template>
  <div id="app">
    
    <!-- 组件渲染出口 -->
      <router-view />
    <!-- </div> -->
   <!-- app导航 -->
    <Tabbar v-if="this.$route.meta.showTabbar" v-show="bb!='/shop'||aa==0"></Tabbar>
  </div>
</template>

<script>
//引入组件
import Tabbar from './components/Tabbar';
//注入组件
export default {
  components:{
    Tabbar
  },
  data() {
    return {
      inoff:null,
      showTabbar:true,
      bb:this.$route.path,
      aa:this.$store.state.numAll
    }
  },
  mounted(){
    console.log(this.aa)
    // if(this.$store.state.numAll==0){
      
    // }
    // if(this.$route.path=='/shop/shop1'||this.$route.path=='/index/detail'){
    //   this.showTabbar=false;
    // }
  },
  watch:{
    // bb
  }
}
</script>

<style lang="less">
html,body{
  max-width: 750px;
  margin: 0 auto;
  height: 100%;
  padding: 0px;
  #app{
  width: 100%;
  height: 100%;
  }
}

  
</style>