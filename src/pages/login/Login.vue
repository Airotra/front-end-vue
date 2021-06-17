<template>
    <div id="app">
        <el-container class="continer" style="height: 100%">
            <el-aside class="left" style="width: 400px; border: 1px solid black">
                <img src="static/images/icon/shop.png" style="transform:scale(0.5)">
                <h2 style="left: 50px;top: -30px;margin: 0;position: relative;font-weight: lighter">欢迎使用</h2>
                <h2 style="left: 150px;top: -15px;margin: 0;position: relative;font-weight: normal">XX购物商城</h2>
                <div class="input" style="width: 80%; position: relative; margin-left: 50px">
                    <p style="margin-bottom: 7px">账号</p>
                    <el-input
                            placeholder="请输入账号"
                            v-model="account"
                            clearable>
                    </el-input>
                    <p style="margin-bottom: 7px">密码</p>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </div>
                <el-button type="primary" style="position: relative; left: 300px; top: 20px;" v-on:click="userLogin">登录</el-button>
                <div class="register" style="margin-top: 77px; margin-left: 100px;">
                    <p style="display: inline;">还没有账号？</p>
                    <router-link to="/register">去注册</router-link>
                </div>
                <router-link to="/adminLogin">管理员登录</router-link>
            </el-aside>

            <el-main class="right">

            </el-main>
        </el-container>

    </div>
</template>

<script>
export default {
    name: 'login',
    data () {
      return {
          account: '',
          password: ''
      }
    },
    methods: {
        userLogin () {

        }
    }
}
</script>

<style scoped>

</style>
