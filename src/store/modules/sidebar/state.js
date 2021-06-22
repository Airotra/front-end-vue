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
        {
          path: '/main/second',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单2',
          group: 'second',
          children: [
            {
              path: '/main/second/second',
              icon: 'suncaper-menu-unfold',
              title: '二级菜单'
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
              title: '个人信息查看'
            },
            {
              path: '/main/user/userInfo',
              icon: 'suncaper-menu-unfold',
              title: '个人信息管理'
            }
          ]
        }
      ]
    },
    2: {},
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
        {
          path: '/main/second',
          icon: 'suncaper-menu-unfold',
          title: '一级菜单2',
          group: 'second',
          children: [
            {
              path: '/main/second/second',
              icon: 'suncaper-menu-unfold',
              title: '二级菜单'
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
              title: '个人信息查看'
            },
            {
              path: '/main/user/userInfo',
              icon: 'suncaper-menu-unfold',
              title: '个人信息管理'
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
