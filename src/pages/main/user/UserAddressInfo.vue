<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">收货地址管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <el-table
                    :data="address"
                    style="width: 100%">
                <el-table-column
                        prop="nation"
                        label="国家"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="provice"
                        label="省份"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="市/乡">
                </el-table-column>
                <el-table-column
                        prop="district"
                        label="区/县">
                </el-table-column>
                <el-table-column
                        prop="addr"
                        label="详细地址">
                </el-table-column>
                <el-table-column
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <addr-detail ref="addrDetail" @ok = 'getAddr'></addr-detail>
        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_userAddrInfo} from '../../../api/user'
    import addrDetail from '../components/user/AddrDetailDialog'

    export default {
        name: 'UserAddressInfo',
        components: {
            addrDetail
        },
        data () {
          return {
              address: [],
              addressData: {
                  id: '',
                  userId: '',
                  provice: '',
                  city: '',
                  district: '',
                  addr: '',
                  nation: '中国'
              }
          }
        },
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
                userId: 'user/getUserId',
                getSidebarList: 'sidebar/getSidebarList'
            })
        },
        created () {
            if (this.userType !== 1) {
                this.$alert('请登录后再进行收货地址管理', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `请登录后再进行收货地址管理`
                        })
                        this.$router.push('/login')
                    }
                })
            } else {
                this.getAddr()
            }
        },
        methods: {
            getAddr () {
                _userAddrInfo(this.userId).then(res => {
                    // console.info(res)
                    this.address = res.data.list
                })
            },
            setAddrData (obj) {
                this.addressData.id = obj.id
                this.addressData.userId = obj.userId
                this.addressData.provice = obj.province
                this.addressData.city = obj.city
                this.addressData.district = obj.district
                this.addressData.addr = obj.addr
            },
            handleClick (obj) {
                this.setAddrData(obj)
                // console.info(this.addressData)
                this.$refs.addrDetail.show(this.addressData)
            }
        }
    }
</script>

<style scoped>

</style>
