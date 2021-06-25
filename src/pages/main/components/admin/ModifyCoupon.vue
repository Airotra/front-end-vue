<template>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            center
            :before-close="handleClose">
        <el-form ref="form" label-width="80px">
            <el-form-item label="金额">
                <el-input v-model="coupon.amount"></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input v-model="coupon.quantity"></el-input>
            </el-form-item>
            <el-form-item label="到期时间">
                <el-input v-model="coupon.time"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    import {_modifyCoupon, _modifyUserCoupon} from '../../../../api/admin'

    export default {
        name: 'ModifyCoupon',
        data () {
          return {
              dialogVisible: false,
              coupon: {}
          }
        },
        methods: {
            handleClose (done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done()
                    })
                    .catch(_ => {})
            },
            show (obj) {
                this.dialogVisible = true
                this.coupon = obj
                // console.info(this.coupon)
            },
            save () {
                // console.info(this.coupon)
                if (this.coupon.amount !== '' && this.coupon.quantity !== '' && this.coupon.time !== '') {
                    _modifyCoupon(this.coupon).then(res => {
                        if (res.status) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            _modifyUserCoupon(this.coupon).then(res => {
                                console.info('用户优惠券更新完成')
                            })
                            this.dialogVisible = false
                            this.$emit('ok')
                        }
                    })
                } else {
                    this.$alert('请输入有效优惠券信息', '无效优惠券信息', {
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
