<template>
    <div id="app">
        <el-container class="continer" style="height: 100%">
            <el-aside class="left" style="width: 400px">
                <img src="static/images/picture/shop.png" style="transform:scale(0.5)">
                <h2 style="left: 50px;top: -20px;margin: 0;position: relative;font-weight: lighter; width: fit-content;">XX购物商城</h2>
                <h2 style="left: 180px;top: -10px;margin: 0;position: relative;font-weight: normal; width: fit-content;">管理员登录</h2>
                <p style="font-weight: lighter; color: gray;font-size: small; ; margin-left: 50px;margin-top: 30px">XX购物商城为您提供全网最佳网上购物体验</p>
                <div class="input" style="width: 80%; position: relative; margin-left: 50px;margin-top: 30px">
                    <p style="margin-bottom: 10px">账号</p>
                    <el-input
                            placeholder="请输入账号"
                            v-model="account"
                            clearable>
                    </el-input>
                    <p style="margin-bottom: 10px">密码</p>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <el-button type="primary" style="position: relative; left: 300px; top: 30px;" v-on:click="adminLogin">登录</el-button>
                <div class="register" style="margin-top: 77px; margin-left: 115px;">
                    <p style="display: inline;">不是管理员？</p>
                    <el-link type="primary" href="/#/login">用户登录<i class="el-icon-caret-right"></i></el-link>
                </div>
                <div style="font-size: small; margin-left: 105px;margin-top: 30px">
                    Copyright © 2021 SCUTeam08
                </div>
            </el-aside>

            <el-main class="right" style="padding: 0">
                <img src="static/images/picture/login-bg.jpg" style="width: 100%;height: 100%;margin: 0;padding: 0">
            </el-main>
        </el-container>

    </div>
</template>

<script>

import {_adminLogin} from '../../api/admin'
import store from '../../store/'

export default {
  name: 'adminLogin',
    data () {
        return {
            account: '',
            password: '',
            admin: {
                adminAccount: '',
                adminPassword: ''
            }
        }
    },
    methods: {
        adminLogin () {
            if (this.account !== '' && this.password !== '') {
                this.admin.adminAccount = this.account
                this.admin.adminPassword = this.password
                _adminLogin(this.admin).then(res => {
                    // console.info(res.data)
                    if (res.data == null) {
                        this.$alert('账号或密码错误', '登录失败', {
                            confirmButtonText: '确定',
                            callback: action => {
                                this.$message({
                                    type: 'info',
                                    message: `请重新登录`
                                })
                            }
                        })
                    } else {
                        store.dispatch('user/fetchUserInfo').then(res => {
                            this.$router.push('/main/first')
                        })
                    }
                })
            } else {
                this.$alert('请输入有效账密', '无效账密', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `请重新登录`
                        })
                    }
                })
            }
        }
    }
}
</script>

<style scoped>

</style>
