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
        <el-container>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="订单编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="transportNumber"
                        label="快递单号"
                        width="180">
                </el-table-column>
                <el-table-column label="订单状态">
                    <template slot-scope="scope">
                        <el-button v-if="!scope.row.paid"
                                   style="display: inline-block"
                                   size="mini"
                                   type="warning"
                                   @click="pay_click(scope.row)">去付款</el-button>
                        <el-button v-else-if="scope.row.paid && scope.row.orderStatus == 0"
                                   style="display: inline-block"
                                   size="mini"
                                   type="primary"
                                   @click="order_confirm(scope.row)">确认收货</el-button>
                        <el-button v-else-if="scope.row.paid && scope.row.orderStatus == 1"
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
                                <el-button type="primary" @click="payment_confirm(scope.row)">确 定</el-button>
                            </div>
                        </el-dialog>
                    </template>
                </el-table-column>
                <el-table-column label="送货方式">
                <template slot-scope="scope">
                    <el-button v-if="!scope.row.getbySelf"
                               style="display: inline-block"
                               size="mini"
                               type="primary">快递</el-button>
                    <el-button v-else-if="scope.row.getbySelf"
                               style="display: inline-block"
                               size="mini"
                               type="primary">自取</el-button>
                </template>
            </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button style="display: inline-block"
                                   size="mini"
                                   type="primary"
                                   @click="getGoods(scope.row)">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-container>
        <goods ref="goodsDialog" @ok="ok"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {_getGoods, _getOrderList, _payOrder, _statusOrder} from '../../../../api/order'
    import Goods from '../../components/Order/OrderGoods'
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
                order_goods: {}
            }
        },
        methods: {
            getData () {
                _getOrderList(this.userId).then(res => {
                    this.tableData = res.data
                    // console.info(res.data)
                })
            },
            getGoods (obj) {
                // console.info(obj)
                _getGoods(obj.id).then(res => {
                    // console.info(res.data.list)
                    this.$refs.goodsDialog.show(res.data)
                })
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
                    console.info(this.item)
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
            ok () {
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>
</style>
