export default {
  sidebarMap: {
    1: {
      main: [
        {
          groupTitle: '分组1'
        },
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单1'
        },
        {// syan
          path: '/main/goods',
          icon: 'suncaper-menu-unfold',
          title: '商品',
          group: 'goods',
          children: [
            {
              path: '/main/goods/goods',
              icon: 'suncaper-menu-unfold',
              title: '商品列表'
            },
            {
              path: '/main/goodsManage/goodsManage',
              icon: 'suncaper-menu-unfold',
              title: '商品管理'
            }
          ]
        },
          {
              path: '/main/PointShoppingMall',
              icon: 'suncaper-menu-unfold',
              title: '积分商城',
              group: 'PointShoppingMall',
              children: [
                  {
                      path: '/main/PointShoppingMall/Clothes',
                      icon: 'suncaper-menu-unfold',
                      title: '服装百货'
                  },
                  {
                      path: '/main/PointShoppingMall/Mobile',
                      icon: 'suncaper-menu-unfold',
                      title: '数码电器'
                  },
                  {
                      path: '/main/PointShoppingMall/Food',
                      icon: 'suncaper-menu-unfold',
                      title: '食品美妆'
                  }
              ]
          },
          {
              path: '/main/Trolley',
              icon: 'suncaper-menu-unfold',
              title: '购物车'
          },
        {
          groupTitle: '个人中心'
        },
        {
          path: '/main/user',
          icon: 'suncaper-menu-unfold',
          title: '个人信息',
          group: 'user',
          children: [
            {
              path: '/main/user/userInfo',
              icon: 'suncaper-menu-unfold',
              title: '个人信息管理'
            },
            {
              path: '/main/user/userAddressInfo',
              icon: 'suncaper-menu-unfold',
              title: '收货地址管理'
            },
            {
              path: '/main/user/couponInfo',
              icon: 'suncaper-menu-unfold',
              title: '优惠券管理'
            }
          ]
        }
      ]
    },
    2: {
        main: [
          {
            groupTitle: '分组1'
          },
          {
            path: '/main/first',
            icon: 'suncaper-menu-unfold',
            title: '一级菜单1'
          },
          {
            groupTitle: '个人中心'
          },
          {
            path: '/main/admin/adminInfo',
            icon: 'suncaper-menu-unfold',
            title: '个人信息管理'
          },
          {
            groupTitle: '优惠券'
          },
          {
            path: '/main/admin/CouponManage',
            icon: 'suncaper-menu-unfold',
            title: '优惠券管理'
          }
        ]
    },
    3: {
      main: [
        {
          groupTitle: '分组1'
        },
        {
          path: '/main/first',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单1'
        },
        {// syan
          path: '/main/goods',
          icon: 'suncaper-menu-unfold',
          title: '商品',
          group: 'goods',
          children: [
            {
              path: '/main/goods/goods',
              icon: 'suncaper-menu-unfold',
              title: '商品列表'
            },
            {
              path: '/main/goodsManage/goodsManage',
              icon: 'suncaper-menu-unfold',
              title: '商品管理'
            }
          ]
        }
      ]
    }
  },
  sidebarTheme: {
    dark: {
      background: '#1f2c35',
      text: '#ffffff',
      activeText: '#ffffff'
    },
    light: {
      background: '#ffffff',
      text: '#000000',
      activeText: '#1890ff'
    }
  }
}
