const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
        import(/* webpackChunkName: "Login" */ '../pages/login/Login')
  },
  {
    path: '/adminLogin',
    name: 'adminLogin',
    component: () =>
        import(/* webpackChunkName: "adminLogin" */ '../pages/login/AdminLogin')
  }
]

const registerPage = [
  {
    path: '/register',
    name: 'register',
    component: () =>
        import(/* webpackChunkName: "Register" */ '../pages/register/Register')
  }
]

const mainPage = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "Main" */ '../pages/main/Main'),
    children: [
      {
        path: 'first',
        name: 'first',
        component: () =>
            import(
              /* webpackChunkName: "Second" */ '../pages/main/routes/first/First'
            )
      },
      {
        path: 'PointShoppingMall/PointShoppingMall',
        name: 'PointShoppingMall/PointShoppingMall',
        component: () =>
            import(
              '../pages/main/routes/PointShoppingMall/PointShoppingMall'
            )
      },
      {
        path: 'PointShoppingMall/Clothes',
        name: 'PointShoppingMall/Clothes',
        component: () =>
            import(
              '../pages/main/routes/PointShoppingMall/Clothes'
            )
      },
      {
        path: 'PointShoppingMall/Mobile',
        name: 'PointShoppingMall/Mobile',
        component: () =>
            import(
              '../pages/main/routes/PointShoppingMall/Mobile'
            )
      },
      {
        path: 'PointShoppingMall/Food',
        name: 'PointShoppingMall/Food',
        component: () =>
            import(
              '../pages/main/routes/PointShoppingMall/Food'
            )
      },
      {
        path: 'Trolley',
        name: 'Trolley',
        component: () =>
            import(
              /* webpackChunkName: "First" */ '../pages/main/routes/Trolley/Trolley'
            )
      },
      {
        path: 'second',
        name: 'second',
        component: () =>
            import(
              /* webpackChunkName: "First" */ '../pages/main/routes/second/Second'
            )
      },
      {
        path: 'user/userInfo',
        name: 'userInfo',
        component: () =>
            import(
                /* webpackChunkName: "First" */ '../pages/main/user/UserInfo'
                )
      },
      {
        path: 'admin/adminInfo',
        name: 'adminInfo',
        component: () =>
            import(
                /* webpackChunkName: "First" */ '../pages/main/admin/AdminInfo'
                )
      },
      {
        path: 'admin/couponManage',
        name: 'couponManage',
        component: () =>
            import(
                /* webpackChunkName: "First" */ '../pages/main/admin/CouponManage'
                )
      },
      {
        path: 'user/userAddressInfo',
        name: 'addressInfo',
        component: () =>
            import(
                /* webpackChunkName: "First" */ '../pages/main/user/UserAddressInfo'
                )
      },
      {
        path: 'user/couponInfo',
        name: 'couponInfo',
        component: () =>
            import(
                /* webpackChunkName: "First" */ '../pages/main/user/CouponInfo'
                )
      },
      {
        // 这里的path是拼接到网址的，应该与导航栏对应
        path: 'goods/goods',
        name: 'goods',
        component: () =>
            import(
                /* webpackChunkName: "Goods" */ '../pages/main/routes/goods/Goods'
                )
      },
      {
        path: 'goodsManage/goodsManage',
        name: 'goodsManage',
        component: () =>
            import(
                /* webpackChunkName: "Goods" */ '../pages/main/routes/goodsManage/GoodsManage'
                )
      }
    ]
  }
]

const errorPage = [
  {
    path: '/notFound',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../pages/error/NotFound')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () =>
      import(/* webpackChunkName: "Forbidden" */ '../pages/error/Forbidden')
  },
  {
    path: '/badGateway',
    name: 'badGateway',
    component: () =>
      import(/* webpackChunkName: "BadGateway" */ '../pages/error/BadGateway')
  },
  {
    path: '*',
    redirect: '/notFound'
  }
]
export default [...loginPage, ...registerPage, ...mainPage, ...errorPage]
