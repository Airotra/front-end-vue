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
