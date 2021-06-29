<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/user/userAddressInfo' }">收货地址管理</el-breadcrumb-item>
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
                        <el-button @click="deleteClick(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="primary" icon="el-icon-plus" circle style="margin-left: 96.5%; margin-top: 10px" @click="addAddr"></el-button>
            <addr-detail ref="addrDetail" @ok = 'getAddr'></addr-detail>
            <addr-add ref="addrAdd" @ok = 'getAddr'></addr-add>
        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_addrDelete, _userAddrInfo} from '../../../api/user'
    import addrDetail from '../components/user/AddrDetailDialog'
    import addrAdd from '../components/user/AddrAddDialog'

    export default {
        name: 'UserAddressInfo',
        components: {
            addrDetail,
            addrAdd
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
                if (obj.id !== null) {
                    this.setAddrData(obj)
                    // console.info(this.addressData)
                    this.$refs.addrDetail.show(this.addressData)
                } else {
                    this.$alert('无收货地址不能修改', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `无收货地址不能修改`
                            })
                        }
                    })
                }
            },
            deleteClick (obj) {
                // console.info(obj)
                if (obj.id !== null) {
                    this.$confirm('此操作将删除该地址, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.delete(obj)
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        })
                    })
                } else {
                    this.$alert('无收货地址不能删除', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `无收货地址不能修改`
                            })
                        }
                    })
                }
            },
            delete (obj) {
                _addrDelete(obj.id).then(res => {
                    if (res.status) {
                        this.$alert('删除成功', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$message({
                                    type: 'success',
                                    message: `删除成功`
                                })
                                this.getAddr()
                            }
                        })
                    } else {
                        this.$alert('删除失败', '提示', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$message({
                                    type: 'error',
                                    message: `有订单使用该地址，地址删除失败`
                                })
                                this.getAddr()
                            }
                        })
                    }
                })
            },
            addAddr () {
                if (this.address.length < 3) {
                    this.$refs.addrAdd.show(this.userId)
                } else {
                    this.$alert('每个用户最多只能添加3个收货地址', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `每个用户最多只能添加3个收货地址`
                            })
                            this.getAddr()
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
