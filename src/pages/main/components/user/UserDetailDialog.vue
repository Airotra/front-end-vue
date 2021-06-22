<template>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            center
            :before-close="handleClose">
        <el-form ref="form" label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="user.nickName"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="user.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="user.password" show-password></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    import { _userInfoSave } from '@api/user'

    export default {
        name: 'UserDetailDialog',
        data () {
            return {
                dialogVisible: false,
                user: {}
            }
        },
        methods: {
            show (user) {
                this.dialogVisible = true
                this.user = user
            },
            handleClose (done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done()
                    })
                    .catch(_ => {})
            },
            save () {
                // console.info(this.user)
                _userInfoSave(this.user).then(res => {
                    if (res.status) {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.dialogVisible = false
                        this.$emit('ok')
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
