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
                <p style="display: inline-block;padding-right: 20px">订单编号: {{item.order_id}}</p>
                <p style="display: inline-block;padding-right: 20px">快递单号: {{item.order_expressid}}</p>
                <el-button v-if="item.order_paid==0"
                           style="display: inline-block"
                           size="mini"
                           type="warning"
                           @click="pay_click(item)">去付款</el-button>
                <el-button v-else-if="item.order_paid==1&&item.order_status==0"
                           style="display: inline-block"
                           size="mini"
                           type="primary"
                           @click="order_confirm(item)">确认收货</el-button>
                <el-button v-else-if="item.order_paid==1&&item.order_status==1"
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
                        <el-button type="primary" @click="payment_confirm">确 定</el-button>
                    </div>
                </el-dialog>
            </el-header>
            <el-main style="padding-top: 0px">
                <el-table
                        :data="order_goods"
                        style="width: 100%">
                    <el-table-column
                            prop="goods_name"
                            label="商品名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="goods_price"
                            label="商品单价"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="goods_number"
                            label="商品数量"
                            width="180">
                    </el-table-column>
                    <el-table-column label="评价">
                        <template slot-scope="scope">
                            <el-button v-if="scope.row.is_commented==0"
                                       size="mini"
                                       type="primary"
                                       @click="open">去评价</el-button>
                            <el-button v-if="scope.row.is_commented==1"
                                       size="mini"
                                       type="success"
                                       @click="handleDelete(scope.$index, scope.row)">已评价</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'Order',
        data () {
            return {
                item: {},
                dialogVisible: false,
                radio: '1',
                // 获取订单列表的参数对象
                tableData: [{
                    comment_status: '0',
                    order_date: '2021.6.25',
                    order_id: '11111',
                    order_expressid: 'SF7862487263',
                    order_paid: '0',
                    order_status: '0'
                }, {
                    comment_status: '0',
                    order_date: '2021.6.24',
                    order_id: '2222',
                    order_expressid: 'SF7862487267',
                    order_paid: '1',
                    order_status: '0'
                }, {
                    comment_status: '0',
                    order_date: '2021.6.24',
                    order_id: '3333',
                    order_expressid: 'SF7862487267',
                    order_paid: '1',
                    order_status: '1'
                }],
                order_goods: [{
                    order_id: '1111',
                    goods_id: '1',
                    goods_name: '乌龙茶',
                    goods_number: '10',
                    goods_price: '5',
                    is_commented: '0'
                }]
            }
        },
        methods: {
            open () {
                this.$prompt('请输入评价', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
                    inputErrorMessage: '评论不可为空！'
                }).then(({ value }) => {
                    this.$message({
                        type: 'success',
                        message: '商品评价成功！'
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '取消输入'
                    })
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
                    this.item.order_status = 1
                    console.info(this.item)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    })
                })
            },
            payment_confirm () {
                this.$confirm('确认付款吗?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '付款成功!'
                    })
                    this.dialogVisible = false
                    this.item.order_paid = 1
                    console.info(this.item)
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
                console.log(item)
            }
        }
    }
</script>

<style scoped>
</style>
