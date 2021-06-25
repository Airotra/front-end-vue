const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/Login')
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
export default [...loginPage, ...mainPage, ...errorPage]
