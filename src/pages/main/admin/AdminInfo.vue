<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">个人信息查看</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <div class="topContainer">
                <p class="accountFont" >我的账户</p>
            </div>
            <div style="width: 90%; margin-left: 5%">
                <div class="leftContainer">
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin: 4%; font-size: 1.1em;">个人基本信息</p>
                    </div>
                    <div class="avatar">
                        <el-avatar icon="el-icon-user-solid" :size="80" style="margin: 10px 40%;"></el-avatar>
                    </div>
                    <div class="userInfo">
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">管理员id： {{this.userId}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">账号： {{account}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">用户类型： 管理员用户</p>
                        </div>
                        <el-button type="text" size="medium" style="float: right; margin-right: 5%; margin-top: 5px" @click="handleClick">修改密码</el-button>
                        <admin-pwd ref="adminPwd" @ok = 'getData'></admin-pwd>
                    </div>
                </div>
            </div>

        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import { _adminInfo } from '@api/user'
    import adminPwd from '../components/admin/AdminPwd'

    export default {
        name: 'AdminInfo',
        components: {
            adminPwd
        },
        data () {
            return {
                account: '',
                type: '',
                password: '',
                admin: {
                    adminAccount: '',
                    adminPassword: ''
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
            if (this.userType !== 2) {
                this.$alert('请登录后再进行个人信息管理', '提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `请登录后再进行个人信息管理`
                        })
                        this.$router.push('/login')
                    }
                })
            } else {
                this.getData()
            }
        },
        methods: {
                handleClick () {
                this.setAdminData()
                this.$refs.adminPwd.show(this.admin)
            },
            setAdminData () {
                this.admin.id = this.userId
                this.admin.adminAccount = this.account
                this.admin.adminPassword = this.password
            },
            getData () {
                _adminInfo(this.userId).then(res => {
                    this.account = res.data.adminAccount
                    this.password = res.data.adminPassword
                })
            }
        }
    }
</script>

<style scoped>
    .topContainer {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: rgb(61,182,243);
        border-radius: 4px;
        margin-bottom: 10px;
        width: 50%;
        margin-left: 25%;
        height: 200px
    }
    .accountFont {
        color:white;
        position: relative;
        left: 2%;
        top: 10% ;
        font-size: 1.5em;
        margin: 0
    }
    .leftContainer {
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        height: 430px;
        width: 47%;
        display: inline-block;
        border-radius: 4px;
        position: relative;
        top: -145px;
        left: 26.5%
    }
    .avatar {
        border-bottom: 1px solid rgb(240,240,240)
    }
</style>
