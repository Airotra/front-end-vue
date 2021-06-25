<template>
  <suncaper-layout
    theme="dark"
    :logo="logo"
    :sidebar-list="sidebarList"
    :logout="logout"
  />
</template>

<script>
import {mapGetters} from 'vuex'
import Layout from '@/layouts/Layout'
import logo from '@/assets/images/logo.png'
import {_saveLocalStorage} from '../../tools/utils'

export default {
  name: 'Main',
  data () {
    return {
      logo: {
        src: logo,
        alt: '上程数据',
        firstDes: '综合网上购物商城',
        secondDes: '广泛UE模板'
      }
    }
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      getSidebarList: 'sidebar/getSidebarList'
    }),
    sidebarList () {
      return this.getSidebarList(this.userType).main
    }
  },
  methods: {
    logout () {
      if (this.userType !== 3) {
        this.$confirm('此操作将注销登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
                    type: 'success',
                    message: '注销登录成功!'
                  },
                  _saveLocalStorage('isLogin', false),
                  _saveLocalStorage('id', null),
                  _saveLocalStorage('type', 3),
                  this.$axios.get('/api/user/logout', {
                    params: {}
                  }).then(res => {
                    this.$router.push('/login')
                  })
          )
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销登录'
          })
        })
      } else {
        this.$router.push('/login')
      }
    }
  },
  components: {
    'suncaper-layout': Layout
  }
}
</script>
