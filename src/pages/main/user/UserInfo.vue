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

        </el-card>
    </div>
</template>

<script>
    import {_getLocalStorage} from '../../../tools/utils'

    export default {
        name: 'UserInfo',
        created () {
            console.info(_getLocalStorage('isLogin'))
            /* if (_getLocalStorage('isLogin') !== true) {
                    this.$alert('请登录后在进行个人信息管理', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `请登录后在进行个人信息管理`
                            })
                        }
                    })
                this.$router.push('/login')
            } */
        }
    }
</script>

<style scoped>

</style>
