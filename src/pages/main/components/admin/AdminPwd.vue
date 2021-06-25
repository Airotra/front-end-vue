<template>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            center
            :before-close="handleClose">
        <el-form ref="form" label-width="80px">
            <el-form-item label="密码">
                <el-input v-model="admin.adminPassword" show-password></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    import { _adminInfoSave } from '@api/user'
    export default {
        name: 'AdminPwd',
        data () {
            return {
                dialogVisible: false,
                admin: {}
            }
        },
        methods: {
            show (admin) {
                this.dialogVisible = true
                this.admin = admin
            },
            handleClose (done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done()
                    })
                    .catch(_ => {})
            },
            save () {
                console.info(this.admin.adminPassword)
                if (this.admin.adminPassword !== '') {
                    // console.info(this.user)
                    _adminInfoSave(this.admin).then(res => {
                        if (res.status) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            this.dialogVisible = false
                            this.$emit('ok')
                        }
                    })
                } else {
                    this.$alert('请输入有效账密', '无效账密', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `请重新输入`
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
