import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numAll:JSON.parse(window.localStorage.getItem("publicTit"))
  },
  mutations: {
    add(state){
      window.localStorage.setItem("publicTit",0);
      state.numAll++;
      window.localStorage.setItem("publicTit",JSON.stringify(state.numAll));
      this.numAll=JSON.parse(window.localStorage.getItem("publicTit"))
    },
    sub(state){
      state.numAll--;
      window.localStorage.setItem("publicTit",JSON.stringify(state.numAll));
      this.numAll=JSON.parse(window.localStorage.getItem("publicTit"))
    },
    clear(state){
      // state.numAll==0;
      // var productArr=window.localStorage.getItem("productArr");
      // productArr=JSON.parse(productArr);
      // state.numAll=productArr.length;
      // window.localStorage.setItem("publicTit",JSON.stringify(state.numAll));
      // this.numAll=JSON.parse(window.localStorage.getItem("publicTit"))
    }
  },
  actions: {},
  modules: {}
});
