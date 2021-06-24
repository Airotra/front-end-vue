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
        path: 'second/second',
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
