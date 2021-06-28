<template>
    <div>
        <!--导航栏-->
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/order/order' }">订单管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-container v-for="(item,index) in tableData" :key="index">
            <el-header style="height: fit-content">
                <p style="display: inline-block;padding-right: 20px">订单时间: {{item.order_date}}</p>
                <p style="display: inline-block;padding-right: 20px">订单编号: {{item.id}}</p>
                <p style="display: inline-block;padding-right: 20px">快递单号: {{item.transportNumber}}</p>
                <el-button v-if="item.paid==0"
                           style="display: inline-block"
                           size="mini"
                           type="warning"
                           @click="pay_click(item)">去付款</el-button>
                <el-button v-else-if="item.paid == 1 && item.orderStatus == 0"
                           style="display: inline-block"
                           size="mini"
                           type="primary"
                           @click="order_confirm(item)">确认收货</el-button>
                <el-button v-else-if="item.paid == 1 && item.orderStatus == 1"
                           style="display: inline-block"
                           size="mini"
                           type="success">已完成</el-button>
                <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        width="30%">
                    <template>
                        <el-radio v-model="radio" label="1">微信支付</el-radio>
                        <el-radio v-model="radio" label="2">支付宝</el-radio>
                    </template>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="payment_confirm(item)">确 定</el-button>
                    </div>
                </el-dialog>
            </el-header>
            <el-main style="padding-top: 0px">
                <el-table
                        :data="order_goods[index]"
                        style="width: 100%">
                    <el-table-column
                            prop="goodsName"
                            label="商品名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="goodsPrice"
                            label="商品单价"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="goodsNumber"
                            label="商品数量"
                            width="180">
                    </el-table-column>
                    <el-table-column label="评价">
                        <template slot-scope="scope">
                            <el-button v-if="!scope.row.comment && item.paid == 1 && item.orderStatus == 1"
                                       size="mini"
                                       type="primary"
                                       @click="open(scope.row)">去评价</el-button>
                            <el-button v-if="scope.row.comment && item.paid == 1 && item.orderStatus == 1"
                                       size="mini"
                                       type="success">已评价</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <goods ref="goodsDialog" @ok="changeCommentStatus"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_getGoods, _getOrderList, _payOrder, _statusOrder} from '../../../../api/order'
    import Goods from '../../components/Order/GoodsComment'
    export default {
        name: 'Order',
        components: {
            Goods
        },
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
                userId: 'user/getUserId',
                getSidebarList: 'sidebar/getSidebarList'
            })
        },
        created () {
            this.getData()
        },
        data () {
            return {
                item: {},
                dialogVisible: false,
                radio: '1',
                // 获取订单列表的参数对象
                tableData: [],
                order_goods: []
            }
        },
        methods: {
            getData () {
                _getOrderList(this.userId).then(res => {
                    this.tableData = res.data
                    // console.info(res.data)
                    for (let i = 0; i < res.data.length; i++) {
                        _getGoods(res.data[i].id).then(res => {
                            // console.info(res.data.list)
                            this.order_goods.push(res.data.list)
                        })
                    }
                })
            },
            open (obj) {
                // console.info(obj)
                this.$refs.goodsDialog.show(obj)
            },
            order_confirm (item) {
                this.$confirm('确认收货吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '确认收货成功!'
                    })
                    this.item = item
                    this.item.orderStatus = 1
                    // console.info(this.item)
                    _statusOrder(this.item).then(res => {
                        // console.info('状态更新成功')
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                })
            },
            payment_confirm (item) {
                this.$confirm('确认付款吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '付款成功!'
                    })
                    this.item.paid = true
                    // console.info(this.item)
                    _payOrder(this.item).then(res => {})
                    this.dialogVisible = false
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                })
            },
            pay_click (item) {
                this.dialogVisible = true
                this.item = item
            },
            changeCommentStatus () {
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>
</style>
