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
    import {mapGetters} from 'vuex'

    export default {
        name: 'UserInfo',
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
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

            }
        }
    }
</script>

<style scoped>

</style>
