<template>
    <div id="app" style="background-color: rgb(244,246,249)">
        <el-container class="continer" style="height: 100%">
            <el-header style="height: 180px; text-align: center">
                <div style="padding: 0;margin: 0; text-align: center;width: 700px; margin-left: 25%">
                    <img src="static/images/picture/shop.png" style="transform:scale(0.5);">
                </div>
            </el-header>

            <el-main>
                <div style="background-color: white;height: 450px;width: 700px; margin-left: 25%;  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); border-top: rgb(31,97,193) solid 2px;border-radius: 2px;padding: 0;">
                    <div class="from-header" style="height: 50px; border-bottom: 1px solid rgb(240,240,240)">
                        <p style="color: rgb(31,97,193); font-weight: bold;position: relative; left: 20px; top: 10px;">注册</p>
                    </div>
                    <div class="main-form" style="margin: 20px 20px; height: 330px">
                        <p style="font-weight: bold; font-size: small; margin-top: 0">昵称</p>
                        <el-input
                                placeholder="请输入昵称"
                                v-model="nickName"
                                clearable style="width: 300px">
                        </el-input>
                        <p style="font-weight: bold; font-size: small;">账号</p>
                        <el-input
                                placeholder="请输入账号（手机号）"
                                v-model="account"
                                clearable style="width: 300px">
                        </el-input>
                        <p style="font-weight: bold; font-size: small">密码</p>
                        <el-input
                                placeholder="请输入密码"
                                v-model="password"
                                show-password style="width: 300px">
                        </el-input>
                        <div style="position: relative; left: 340px;bottom: 80px;">
                            <p style="font-weight: bold; font-size: small">确认密码</p>
                            <el-input
                                    placeholder="请再次输入密码"
                                    v-model="repassword"
                                    show-password style="width: 300px">
                            </el-input>
                        </div>
                        <el-checkbox v-model="agreeRegister" style="position: relative; bottom: 50px;">同意注册</el-checkbox>
                        <el-button type="primary" style="position: relative;left: 45px; bottom: 10px;width: 300px">注册</el-button>
                    </div>
                    <div class="login" style="margin-top: 77px; margin-left: 100px;">
                        <p style="display: inline;margin-left: 25%">已经有账号了？</p>
                        <router-link to="/login">马上登录</router-link>
                        <i class="el-icon-caret-right"></i>
                    </div>
                    <div style="font-size: small; margin-left: 37%;margin-top: 30px">
                        Copyright © 2021 SCUTeam8
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            nickName: '',
            account: '',
            password: '',
            repassword: '',
            agreeRegister: false
        }
    }
}
</script>

<style scoped>

</style>
