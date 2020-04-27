import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Category from "../views/Category.vue";
import Shop from "../views/Shop.vue";
import Shop1 from "../views/Shop1.vue";
import My from "../views/My.vue";
import Detail from "../views/Detail.vue";
import login from "../views/login.vue";
import sjlogin from "../views/sjlogin.vue";


Vue.use(VueRouter);

const routes = [
  
  {
    path: "/index",
    name: "Index",
    component:Index,  
    meta:{showTabbar:true}
  },
  {
    path: "/index/detail",
    name:"detail",
    component:Detail,
    meta:{showTabbar:false}
  },
  {
    path: "/category",
    name: "Category",
    component:Category,
    meta:{showTabbar:true}
  },
  {
    path: "/shop",
    name: "Shop",
    component:Shop,
    meta:{showTabbar:true}

  },
  {
    path: "/my",
    name: "My",
    component:My,
    meta:{showTabbar:true}
  },
  {
    path: "/login",
    name: "login",
    component:login,
    meta:{showTabbar:false}
  },
  {
    path: "/sjlogin",
    name: "sjlogin",
    component:sjlogin,
    meta:{showTabbar:false}
  },
  {
    path: "/",
    component:Index,
    meta:{showTabbar:true}
  },
  {
    path: "*",
    meta:{showTabbar:true},
    component:My,
  }
  // {
  //   path: "/index",
  //   name: "Index",
  //   component:Index,
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Index.vue")
  // }
];
// router.beforeEach((to,next)=>{
//   if(this.$store.state.numAll==0){
//     to.path == '/index' || to.path == '/category' || to.path == '/shop' || to.path == '/my'
//   }else{
//     to.path == '/index' || to.path == '/category' || to.path == '/shop/shop1' || to.path == '/my'
//   }
// })
const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
});

export default router;
