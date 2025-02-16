import { createRouter, createWebHistory } from "vue-router";
// import Preload from "../components/Preload.vue";

import DayLayout from "../views/DayLayout.vue";
import ProjectMenu from "../components/ProjectMenu.vue";
import MemberCenterMenu from "../components/MemberCenterMenu.vue";
import BackStageMenu from "../components/BackStageMenu.vue";

import Phantasia from "../views/Phantasia.vue";
import PhantasiaDay from "../views/PhantasiaDay.vue";
import PhantasiaNight from "../views/PhantasiaNight.vue";

//==================因為下方使用懶加載，這段不需要====================

// import About from "../views/About.vue";

// MyCabin 個人頁面
// import MyCabin from "../views/MyCabin/MyCabin.vue";
// import MyBookcase from "../views/MyCabin/MyBookcase.vue";
// import MyColset from "../views/MyCabin/MyColset.vue";
// import MyRewardCard from "../views/MyCabin/MyRewardCard.vue";

// products 商品頁
// import Products from "@/views/Products/Products.vue";
// import ProductsInfo from "@/views/Products/ProductsInfo.vue";
// import ProductsRead from "@/views/Products/ProductsRead.vue";
// ================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Phantasia, // 懶加載(可以提升效能)
      // loading: Preload,
      children: [
        {
          path: "Day",
          name: "Day",
          component: PhantasiaDay, // 懶加載(可以提升效能)
          // loading: Loading,
        },
        {
          path: "Night",
          name: "Night",
          component: PhantasiaNight, // 懶加載(可以提升效能)
          // loading: Loading,
        },
      ],
    },

    {
      path: "/About",
      name: "about",
      component: () => import("@/views/About.vue"),
      // loading: Loading,
    },

    //===================個人頁面(書櫃、換裝、集點)=======================
    {
      path: "/MyCabin",
      component: DayLayout, // 使用共用佈局(header和footer) 在src>views>DayLayout
      children: [
        {
          path: "",
          name: "MyCabin", //個人頁面入口  /MyCabin
          component: () => import("@/views/MyCabin/MyCabin.vue"),
        },
        {
          path: "MyBookcase", //書櫃 /MyCabin/MyBookcase
          name: "MyBookcase",
          component: () => import("@/views/MyCabin/MyBookcase.vue"),
        },
        {
          path: "MyColset", //換裝 /MyCabin/MyColset
          name: "MyColset",
          component: () => import("@/views/MyCabin/MyColset.vue"),
        },
        {
          path: "MyRewardCard", //集點頁面 /MyCabin/MyRewardCard
          name: "MyRewardCard",
          component: () => import("@/views/MyCabin/MyRewardCard.vue"),
        },
      ],
    },

    //========================商品頁==========================

    {
      path: "/Products", //商品頁
      component: DayLayout, // 使用共用佈局(header和footer) 在src>views>DayLayout
      children: [
        {
          path: "", // 商品列表頁  /Products
          name: "productList",
          component: () => import("@/views/Products/Products.vue"),
        },
        {
          path: ":id", // 商品詳細頁  /Products/:id   (:id的位置到時候會帶入商品編號)
          name: "productInfo",
          component: () => import("@/views/Products/ProductsInfo.vue"),
        },
        {
          path: ":id/read", // 進入閱讀頁  /Products/:id/read
          name: "productRead",
          component: () => import("@/views/Products/ProductsRead.vue"),
        },
      ],
    },

    //=========================創作頁============================

    {
      path: "/CreateProject",
      component: DayLayout, // 使用共用佈局(header和footer) 在src>views>DayLayout
      children: [
        {
          path: "/CreateProject",
          component: ProjectMenu, // 使用共用佈局(風琴選單) 在components>ProjectMenu
          children: [
            {
              path: "", // 創作頁我的專案   /CreateProject
              name: "CreateProject",
              component: () =>
                import("@/views/CreateProject/CreateProject.vue"),
            },
            {
              path: "Draft", // 創作頁草稿   /CreateProject/Draft
              name: "Draft",
              component: () => import("@/views/CreateProject/Draft.vue"),
            },
          ],
        },
      ],
    },

    {
      path: "/Create",
      component: DayLayout, // 使用共用佈局(header和footer) 在src>views>DayLayout
      children: [
        {
          path: "", //創作編輯頁面   /Create
          name: "Create",
          component: () => import("@/views/CreateProject/Create/Create.vue"),
        },
        {
          path: "CreateInfo", //上傳資訊  /Create/CreateInfo
          name: "CreateInfo",
          component: () =>
            import("@/views/CreateProject/Create/CreateInfo.vue"),
            children: [
              {
                path: "", //
                name: "CreateCover",
                component:() =>
                  import("@/views/CreateProject/Create/CreateInforMation.vue")
              },
              {
                path: "CreateInforMation", 
                name: "CreateInforMation",
                component:() =>
                  import("@/views/CreateProject/Create/CreateInforMation.vue")
              },
              {
                path: "CreateConfirm", //
                name: "CreateConfirm",
                component:() =>
                  import("@/views/CreateProject/Create/CreateConfirm.vue")
              }
            ]
        },
      ],
    },

    // ======================會員中心=======================

    {
      path: "/MemberCenter",
      component: DayLayout, // 使用共用佈局(header和footer) 在src>views>DayLayout
      children: [
        {
          path: "",
          component: MemberCenterMenu, // 使用共用佈局(風琴選單) 在components>MemberCenterMenu
          children: [
            {
              path: "", //會員中心  /MemberCenter  (是否為會員用條件判斷寫在這一頁)
              name: "MemberCenter",
              component: () => import("@/views/MemberCenter/MemberCenter.vue"),
            },
            {
              path: "MyPlanSubscribed", //訂閱方案(會員)  /MemberCenter/MyPlanSubscribed
              name: "MyPlanSubscribed",
              component: () =>
                import("@/views/MemberCenter/MyPlanSubscribed.vue"),
            },
            {
              path: "MyPlanVisitor", //訂閱方案(訪客)  /MemberCenter/MyPlanVisitor
              name: "MyPlanVisitor",
              component: () => import("@/views/MemberCenter/MyPlanVisitor.vue"),
            },
            {
              path: "MyPlanCancel", //訂閱方案(取消訂閱)  /MemberCenter/MyPlanCancel
              name: "MyPlanCancel",
              component: () => import("@/views/MemberCenter/MyPlanCancel.vue"),
            },
            {
              path: "SubscriptionStatus", //訂閱成功or失敗  /MemberCenter/SubscriptionStatus  (成功或失敗用條件判斷寫在這一頁)
              name: "SubscriptionStatus",
              component: () =>
                import("@/views/MemberCenter/SubscriptionStatus.vue"),
            },
            {
              path: "PurchaseHistory", //訂閱歷史  /MemberCenter/PurchaseHistory
              name: "PurchaseHistory",
              component: () =>
                import("@/views/MemberCenter/PurchaseHistory.vue"),
            },

            {
              path: "MyProjects", //上架作品  /MemberCenter/MyProjects
              name: "MyProjects",
              component: () => import("@/views/MemberCenter/MyProjects.vue"),
            },
            {
              path: "MyProjectsRemoved", //下架作品  /MemberCenter/MyProjectsRemoved
              name: "MyProjectsRemoved",
              component: () =>
                import("@/views/MemberCenter/MyProjectsRemoved.vue"),
            },
            {
              path: "AccountSetting", //帳號設定  /MemberCenter/AccountSetting
              name: "AccountSetting",
              component: () =>
                import("@/views/MemberCenter/AccountSetting.vue"),
            },
            {
              path: "FAQ", //QA  /MemberCenter/FAQ
              name: "FAQ",
              component: () => import("@/views/MemberCenter/FAQ.vue"),
            },
          ],
        },
      ],
    },

    // ======================後台=======================

    {
      path: "/BKMember",
      component: BackStageMenu, // 使用共用佈局風琴選單  請寫在src>components>BackStageMenu.vue
      children: [
        {
          path: "", //會員管理   /BKMember
          name: "BKMember",
          component: () => import("@/views/Backstage/BackstageMember.vue"),
        },
        {
          path: "BKInfo", //資訊管理  /BKMember/BKInfo
          name: "BackstageInfo",
          component: () => import("@/views/Backstage/BackstageInfo.vue"),
        },
        {
          path: "BKProduct", //商品管理  /BKMember/BKProduct
          name: "BackstageProduct",
          component: () => import("@/views/Backstage/BackstageProduct.vue"),
        },
      ],
    },

    // ======================按鈕使用教學=========================

    {
      path: "/btnFmaily", //按鈕元件範例1  /btnFmaily
      name: "test",
      component: () => import("@/views/test/btnFmaily.vue"),
      // loading: Loading,
    },
    {
      path: "/sidebar", //按鈕元件範例2  /sidebar
      name: "sidebar",
      component: () => import("@/views/test/sidebar.vue"),
      // loading: Loading,
    },

    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
