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
                <el-date-picker
                        v-model="coupon.time"
                        type="datetime"
                        placeholder="选择日期时间"
                        default-time="12:00:00"
                        value-format="yyyy-MM-dd HH:mm:ss">
                </el-date-picker>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="save">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_addrAdminProvideCoupon, _addrCoupon} from '../../../../api/admin'

    export default {
        name: 'AddCoupon',
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
                userId: 'user/getUserId',
                getSidebarList: 'sidebar/getSidebarList'
            })
        },
        data () {
            return {
                dialogVisible: false,
                adminProvideCoupon: {
                    adminId: '',
                    couponId: ''
                },
                coupon: {
                    amount: '',
                    quantity: '',
                    time: ''
                }
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
            show () {
                this.dialogVisible = true
            },
            save () {
                // console.info(this.coupon)
                if (this.coupon.time !== '' && this.coupon.quantity !== '' && this.coupon.amount !== '') {
                    _addrCoupon(this.coupon).then(res => {
                        if (res.status) {
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            })
                            // console.info(res)
                            this.adminProvideCoupon.couponId = res.data.couponId
                            this.adminProvideCoupon.adminId = this.userId
                            // console.info(this.adminProvideCoupon)
                            _addrAdminProvideCoupon(this.adminProvideCoupon).then(res => {
                                if (res.status) {
                                    // console.info('管理员优惠券表更新成功')
                                }
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
