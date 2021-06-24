<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">优惠券管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <el-container>
                <el-main class="main" width="50%">
                    <el-header class="Header">
                        <p class="font1">已发放的优惠券</p>
                    </el-header>
                    <el-table
                            :data="coupons"
                            style="width: 100%">
                        <el-table-column
                                prop="couponId"
                                label="优惠券编号"
                                width="200">
                        </el-table-column>
                        <el-table-column
                                prop="amount"
                                label="优惠券金额"
                                width="200">
                        </el-table-column>
                        <el-table-column
                                prop="quantity"
                                label="优惠券数量">
                        </el-table-column>
                        <el-table-column
                                prop="time"
                                label="到期时间"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                label="操作"
                                width="100"
                                fixed="right">
                            <template slot-scope="scope">
                                <el-button @click="modifyCoupon(scope.row)" type="text" size="small">修改</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-card>
        <modify-coupon ref="couponManage" @ok = 'getCoupons'></modify-coupon>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_getAllCoupon} from '../../../api/admin'
    import modifyCoupon from '../components/admin/ModifyCoupon'

    export default {
        name: 'CouponManage',
        components: {
            modifyCoupon
        },
        data () {
            return {
                coupons: [],
                provideCoupon: {
                    adminId: '',
                    couponId: '',
                    amount: '',
                    quantity: '',
                    time: ''
                },
                coupon: {
                    couponId: '',
                    amount: '',
                    quantity: '',
                    time: ''
                }
            }
        },
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
                userId: 'user/getUserId',
                getSidebarList: 'sidebar/getSidebarList'
            })
        },
        methods: {
            getCoupons () {
                _getAllCoupon().then(res => {
                    this.coupons = res.data
                })
            },
            modifyCoupon (obj) {
                // console.info(obj)
                this.$refs.couponManage.show(obj)
            }
        },
        created () {
            this.getCoupons()
        }
    }
</script>

<style scoped>
    .Header {
        background-color: rgb(61,182,243);
    }
    .font1 {
        margin: 0;
        position: relative;
        top: 30%;
        color: white;
        font-size: 1.5em;
    }

</style>
