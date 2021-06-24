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
                <el-aside class="aside" width="40%">
                    <el-header class="Header">
                        <p class="font1">已领取的优惠券</p>
                    </el-header>
                    <el-table
                            :data="userCoupons"
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
                                prop="time"
                                label="到期时间"
                                width="200">
                        </el-table-column>
                    </el-table>
                </el-aside>
                <el-main class="main" width="48.5%">
                    <el-header class="Header">
                        <p class="font1">可领取的优惠券</p>
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
                                <el-button @click="recCoupon(scope.row)" type="text" size="small">领取</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_userCouponInfo, _couponInfo, _updateCouponQuantity, _userRecCoupon} from '../../../api/user'

    export default {
        name: 'CouponInfo',
        data () {
          return {
              userCoupons: [],
              coupons: [],
              receivedCoupon: {
                  userId: '',
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
            getUserCoupon () {
                _userCouponInfo(this.userId).then(res => {
                    // console.info(res)
                    this.userCoupons = res.data.list
                })
            },
            getCoupon () {
                _couponInfo(this.userId).then(res => {
                    // console.info(res)
                    this.coupons = res.data
                })
            },
            recCoupon (obj) {
                // console.info(obj)
                this.setData(obj)
                console.info(this.receivedCoupon)
                _updateCouponQuantity(this.coupon).then(res => {
                    if (res.status) {
                        console.info('更新数量成功')
                        this.getCoupon()
                    }
                })
                _userRecCoupon(this.receivedCoupon).then(res => {
                    if (res.status) {
                        console.info('增加记录成功')
                        this.getUserCoupon()
                    }
                })
            },
            setData (obj) {
                this.coupon.couponId = obj.couponId
                this.coupon.amount = obj.amount
                this.coupon.quantity = obj.quantity - 1
                this.coupon.time = obj.time

                this.receivedCoupon.userId = this.userId
                this.receivedCoupon.couponId = obj.couponId
                this.receivedCoupon.amount = obj.amount
                this.receivedCoupon.quantity = 1
                this.receivedCoupon.time = obj.time
            }
        },
        created () {
            this.getUserCoupon()
            this.getCoupon()
        }
    }
</script>

<style scoped>
    .aside {
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-right: 10px;
        height: 400px;
    }
    .main {
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        height: 400px;
        padding: 0;
    }
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
