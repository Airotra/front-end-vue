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
                            <p style="margin-left: 5%">昵称： {{nickName}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">手机号： {{phoneNumber}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">积分： {{point}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">用户类型： 普通用户</p>
                        </div>
                    </div>
                </div>
                <div class="rightContainer">
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin: 4%; font-size: 1.1em;">常用地址</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">收货人： {{nickName}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">手机号： {{phoneNumber}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">省份： {{nickName}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">市/县： {{phoneNumber}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">区/乡： {{point}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">详细地址： 普通用户</p>
                    </div>
                </div>
            </div>

        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'UserInfo',
        data () {
            return {
                nickName: '',
                phoneNumber: '',
                avatar: '',
                address: '',
                point: ''
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
                    this.$alert('请登录后再进行个人信息管理', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `请登录后再进行个人信息管理`
                            })
                        }
                    })
                this.$router.push('/login')
            } else {
                this.$axios.get('/api/user/' + this.userId).then(res => {
                    this.nickName = res.data.data.nickName
                    this.phoneNumber = res.data.data.phoneNumber
                    this.avatar = res.data.data.avatar
                    this.point = res.data.data.point
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
        width: 90%;
        margin-left: 5%;
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
        left: 2%
    }
    .rightContainer {
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        height: 430px;
        width: 47%;
        display: inline-block;
        float: right;
        border-radius: 4px;
        position: relative;
        top: -145px;
        right: 2%;
    }
    .avatar {
        border-bottom: 1px solid rgb(240,240,240)
    }
</style>
