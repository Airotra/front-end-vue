<template>
    <el-dialog title="确认" :visible.sync="outerVisible" :before-close="handleClose">
        <el-dialog
                width="80%"
                title="结算"
                :visible.sync="innerVisible"
                append-to-body
                :before-close="handleClose">
            <el-tag style=" margin-left:120px" type="info">结算清单</el-tag>
            <el-table
                    :data="GoodsSelection"
                    style=" margin-left:120px;width:70%">
                <el-table-column
                        prop="goodsId"
                        label="商品编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="goodsName"
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="goodsPrice"
                        label="商品价格"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="goodsNumber"
                        label="商品数量"
                        width="180">
                </el-table-column>
            </el-table>

            <el-divider style="margin-top: 30px"></el-divider>

            <el-tag style=" margin-left:120px" type="info">订单信息确认</el-tag>

            <el-form ref="form" label-width="200px" style="margin-top: 20px" >
                <el-form-item label="商品总额">
                    <el-input v-model="TotalPrice" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="选择送货地址"
                              :rules="{
                               required: true, trigger: 'blur'}">
                    <el-checkbox-group
                            v-model="checkedAddress"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(address) in addresslistdetail" :label="address" :key="address">{{address}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="选择支付方式"
                              :rules="{
                               required: true, trigger: 'blur'}">
                    <el-checkbox-group
                            v-model="checkedPaid"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(paidmethod) in paidmethodlist" :label="paidmethod" :key="paidmethod">{{paidmethod}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="是否自提"
                              :rules="{
                               required: true, trigger: 'blur'}">
                    <el-checkbox-group
                            v-model="checkedGet"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(getmethod) in getmethodlist" :label="getmethod" :key="getmethod">{{getmethod}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="优惠券选择">
                    <el-select v-model="value" placeholder="请选择优惠券" @change="reloadPrice">
                        <el-option
                                v-for="item in CouponList"
                                :key="item.couponId"
                                :label="item.detail"
                                :value="item.couponId"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="需支付金额">
                    <el-input v-model="LastPrice" style="width: 200px"></el-input>
                </el-form-item>
            </el-form>
            <el-button style="margin-top: 50px;margin-left: 120px" type="primary" @click="submitOrder(judgestore)">提交订单</el-button>
        </el-dialog>
        <span>是否进行结算？</span>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary"  @click="ordershow(judgestore)">确 认</el-button>
        </div>
    </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import {updateOrderGoods, updateOrder} from '@api/order'
import {getGoods, getTrolleyIdByUserId} from '@api/goods'
import {_userCouponInfo} from '@api/user'
import {removegoods} from '@api/removegoods'

export default {
    name: 'ConfirmSettlement',
    computed: {
        ...mapGetters({
            userType: 'user/getUserType',
            userId: 'user/getUserId',
            getSidebarList: 'sidebar/getSidebarList'
        })
    },
    data () {
        return {
            outerVisible: false,
            innerVisible: false,
            judgestore: true,
            TotalPrice: 0,
            LastPrice: 0,
            PointGet: 0,
            GoodsSelection: [],
            GoodsNumber: 0,
            CouponList: [],
            value: '',
            info: '',
            query: {
                pageNo: 1,
                pageSize: 10,
                total: 0,
                id: 0,
                goodsid: 0,
                goodsnumber: 0
            },
            orderDetail: {
                adressId: 1,
                userId: 1,
                getBySelf: false,
                paid: false,
                orderStatus: 0
            },
            orderId: 1,
            goodsDetails: [],
            addresslistId: [],
            addresslistdetail: [],
            checkedAddress: [],
            paidmethodlist: ['微信支付', '支付宝支付', '网银支付', '暂不支付'],
            checkedPaid: ['暂不支付'],
            getmethodlist: ['是', '否'],
            checkedGet: ['否'],
            addresslist: {}
        }
    },
    methods: {
        handleClose () {
            this.TotalPrice = 0
            this.LastPrice = 0
            this.PointGet = 0
            this.GoodsNumber = 0
            this.GoodsSelection = []
            this.CouponList = []
            this.addresslistId = []
            this.addresslistdetail = []
            this.checkedAddress = []
            this.goodsDetails = []
            this.addresslist = {}
            this.judgestore = true
            this.innerVisible = false
            this.outerVisible = false
            this.value = ''
            this.info = ''
            this.query = {
                pageNo: 1,
                pageSize: 10,
                total: 0,
                id: 0,
                goodsid: 0,
                goodsnumber: 0
            }
            this.orderDetail = {
                adressId: 1,
                userId: 1,
                getBySelf: false,
                paid: false,
                orderStatus: 0
            }
        },
        // 显示订单结算界面
        show (GoodsSelection, addressId, addressDetail) {
            this.GoodsSelection = GoodsSelection
            this.outerVisible = true
            for (var index = 0; index < GoodsSelection.length; index++) {
                this.TotalPrice = this.TotalPrice + GoodsSelection[index].goodsPrice * GoodsSelection[index].goodsNumber
            }
            this.LastPrice = this.TotalPrice
            this.addresslistId = addressId
            this.addresslistdetail = addressDetail
            this.addresslist = {addressId, addressDetail}
            _userCouponInfo(this.userId).then(res => {
                if (res.data.list.length === 0) {
                    this.CouponList.push({amount: 0, couponId: 0, time: 0, disabled: false, detail: '您没有优惠券'})
                } else {
                    for (var index = 0; index < res.data.list.length; index++) {
                        this.CouponList.push({
                            amount: res.data.list[index].amount,
                            couponId: res.data.list[index].couponId,
                            time: res.data.list[index].time,
                            disabled: false,
                            detail: '优惠券编号： ' + res.data.list[index].couponId + '  面额：' + res.data.list[index].amount
                        })
                        // 判断优惠券是否过期，如果过期则不可选
                    }
                    for (var i = 0; i < this.CouponList.length; i++) {
                        var localtime = new Date()
                        var coupontime = new Date(this.CouponList[i].time)
                        if (localtime.getTime() > coupontime.getTime()) {
                            this.CouponList[i].disabled = true
                            this.CouponList[i].detail = this.CouponList[i].detail + '——已过期'
                        }
                    }
                }
            })
            this.checkStore()
        },
        ordershow (judge) {
            this.outerVisible = false
            if (judge === true) this.innerVisible = true
        },
        checkStore () {
            for (var i = 0; i < this.GoodsSelection.length; i++) {
                this.GoodsNumber = this.GoodsSelection[i].goodsNumber
                getGoods(this.GoodsSelection[i].goodsId).then(res => {
                    if ((res.data.store - this.GoodsNumber) < 0) {
                        this.info = '编号为：' + res.data.goodsId + '的商品库存不足，购买失败'
                        this.$message({
                            message: this.info,
                            type: 'warning',
                            showClose: true,
                            duration: 0
                        })
                        this.judgestore = false
                    }
                })
            }
        },
        // 重新加载最终价格
        reloadPrice () {
            for (var index = 0; index < this.CouponList.length; index++) {
                if (this.value === this.CouponList[index].couponId) {
                    this.LastPrice = this.TotalPrice - this.CouponList[index].amount
                }
            }
            if (this.LastPrice < 0) this.LastPrice = 0
        },
        // 提交订单
        submitOrder (judge) {
            this.innerVisible = false

            this.orderDetail.userId = this.userId
            if (this.GoodsSelection.length === 0) {
                this.info = '您未购买任何商品！'
                this.$message({
                    message: this.info,
                    type: 'warning'
                })
            } else {
                if (this.checkedAddress.length === 0) {
                    this.info = '订单提交失败，未选择送货地址'
                    this.$message({
                        message: this.info,
                        type: 'warning'
                    })
                } else if (this.checkedPaid.length === 0) {
                    this.info = '订单提交失败，未选择支付方式'
                    this.$message({
                        message: this.info,
                        type: 'warning'
                    })
                } else if (this.checkedGet.length === 0) {
                    this.info = '订单提交失败，未选择是否自提'
                    this.$message({
                        message: this.info,
                        type: 'warning'
                    })
                } else {
                    if (judge === true) {
                        for (var index = 0; index < this.addresslist.addressDetail.length; index++) {
                            if (this.checkedAddress[0] === this.addresslist.addressDetail[index]) {
                                this.orderDetail.adressId = this.addresslist.addressId[index]
                                break
                            }
                        }
                        if (this.checkedGet[0] === '是') {
                            this.orderDetail.getBySelf = true
                        } else {
                            this.orderDetail.getBySelf = false
                        }
                        if (this.checkedPaid[0] === '暂不支付') {
                            this.orderDetail.paid = false
                            this.info = '您暂未支付，请及时前往订单页面支付'
                            this.$message({
                                message: this.info,
                                type: 'warning',
                                showClose: true,
                                duration: 0
                            })
                        } else {
                            this.orderDetail.paid = true
                        }
                        // 购物车操作，删除购买的物品
                        getTrolleyIdByUserId(this.userId).then(res => {
                            // 获取购物车id，作为参数传入
                            this.query.id = res.data
                            // 购买后删除购物车中的记录
                            for (var trolleygoods = 0; trolleygoods < this.GoodsSelection.length; trolleygoods++) {
                                this.query.goodsid = this.GoodsSelection[trolleygoods].goodsId
                                removegoods(this.query)
                            }
                        })
                        // 如果使用了优惠券则移除优惠券
                        for (var cdex = 0; cdex < this.CouponList.length; cdex++) {
                            if (this.value === this.CouponList[cdex].couponId) {
                                this.LastPrice = this.TotalPrice - this.CouponList[cdex].amount
                                if (this.LastPrice < 0) this.LastPrice = 0
                                this.$axios.get('/api/userCouponHas/removeUserCoupon', {
                                    params: {
                                        userid: this.userId,
                                        couponid: this.value
                                    }
                                })
                                break
                            }
                        }
                        // 更新 order_list表
                        updateOrder(this.orderDetail).then(res => {
                            // 获取orderid，传参
                            this.orderId = res.data.id
                            for (var i = 0; i < this.GoodsSelection.length; i++) {
                                this.GoodsNumber = this.GoodsSelection[i].goodsNumber
                                this.goodsDetails.push({
                                    orderId: this.orderId,
                                    goodsId: this.GoodsSelection[i].goodsId,
                                    goodsNumber: this.GoodsSelection[i].goodsNumber,
                                    goodsName: this.GoodsSelection[i].goodsName,
                                    goodsPrice: this.GoodsSelection[i].goodsPrice,
                                    goodsPicture: this.GoodsSelection[i].goodsPicture
                                })
                                getGoods(this.GoodsSelection[i].goodsId).then(res => {
                                    // 更新商品购买次数
                                    this.$axios.get('/api/goods/updatePurchaseTimes', {
                                        params: {
                                            goodsid: res.data.goodsId,
                                            purchaseTimes: ++res.data.purchaseTimes
                                        }
                                    })
                                    // 更新库存
                                    this.$axios.get('/api/goods/updatestore', {
                                        params: {
                                            goodsid: res.data.goodsId,
                                            buynumber: this.GoodsNumber
                                        }
                                    })
                                })
                            }
                            this.info = '订单提交成功,本单可获得的返还积分点数：' + this.PointGet
                            this.$message({
                                message: this.info,
                                type: 'success'
                            })
                            // 更新order_contain_goods 表
                            updateOrderGoods(this.goodsDetails)
                        })
                        this.PointGet = Math.round(this.LastPrice * 0.1)
                        // 完成购买后积分获取
                        this.$axios.get('/api/user/getUserDetail', {
                            params: {
                                id: this.userId
                            }
                        }).then(res => {
                                this.$axios.get('/api/user/updatePoint', {
                                    params: {
                                        id: this.userId,
                                        point: this.PointGet + res.data.data.point
                                    }
                                })
                            }
                        )
                    }
                    this.$emit('ok')
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
