<template>
    <div id="app">
        <el-container class="continer" style="height: 100%">
            <el-aside class="left" style="width: 400px">
                <img src="static/images/picture/shop.png" style="transform:scale(0.5)">
                <h2 style="left: 50px;top: -20px;margin: 0;position: relative;font-weight: lighter; width: fit-content;">欢迎使用</h2>
                <h2 style="left: 150px;top: -10px;margin: 0;position: relative;font-weight: normal; width: fit-content;">综合购物商城</h2>
                <p style="font-weight: lighter; color: gray;font-size: small; ; margin-left: 50px;margin-top: 30px">综合购物商城为您提供全网最佳网上购物体验</p>
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
                <el-button type="primary" style="position: relative; left: 300px; top: 30px;" v-on:click="userLogin">登录</el-button>
                <div style="position: relative; left: 40%;bottom: -55px; width: fit-content;">
                    <el-link type="primary" @click.native="touristLogin"><i class="el-icon-user"></i>游客登录</el-link>
                </div>
                <div class="register" style="margin-top: 77px; margin-left: 115px;">
                    <p style="display: inline;">还没有账号？</p>
                    <el-link type="primary" href="/#/register">去注册<i class="el-icon-caret-right"></i></el-link>
                </div>
                <div style="font-size: small; margin-left: 105px;margin-top: 30px">
                    Copyright © 2021 SCUTeam08
                </div>
                <el-link type="primary" href="/#/adminLogin" style="position: relative; left: 75%;bottom: -20px;">管理员登录<i class="el-icon-s-custom"></i></el-link>
            </el-aside>

            <el-main class="right" style="padding: 0">
                <img src="static/images/picture/login-bg.jpg" style="width: 100%;height: 100%;margin: 0;padding: 0">
            </el-main>
        </el-container>

    </div>
</template>

<script>

import {_userLogin} from '../../api/user'
import store from '../../store/'

export default {
    name: 'login',
    data () {
      return {
          account: '',
          password: '',
          user: {
              phoneNumber: '',
              password: ''
          }
      }
    },
    methods: {
        userLogin () {
            if (this.account !== '' && this.password !== '') {
                this.user.phoneNumber = this.account
                this.user.password = this.password
                _userLogin(this.user).then(res => {
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
        },
        touristLogin () {
            store.dispatch('user/fetchUserInfo').then(res => {
                this.$router.push('/main/first')
            })
        }
    }
}
</script>

<style scoped>

</style>
