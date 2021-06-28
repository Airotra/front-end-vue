<template>
    <div>
    <!--导航栏-->
    <el-card class="crumbs-card">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/main/admin/AdminOrderManage' }">管理员订单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </el-card>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="id"
                label="订单编号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="order_date"
                label="下单时间"
                width="180">
        </el-table-column>
        <el-table-column
                label="支付状态"
                width="180">
            <template slot-scope="scope">
                <el-button v-if="scope.row.paid == 0"
                           size="mini"
                           type="danger">未支付</el-button>
                <el-button v-if="scope.row.paid == 1"
                           size="mini"
                           type="success">已支付</el-button>
            </template>
        </el-table-column>
        <el-table-column
                prop="transport_number"
                label="发货状态">
            <template slot-scope="scope">
                <el-button v-if="scope.row.paid == 1 && scope.row.orderStatus == 0 && scope.row.transportNumber == null"
                        size="mini"
                        type="warning"
                        @click="handleEdit(scope.row)">点击发货</el-button>
                <el-button v-if="scope.row.transportNumber != null"
                           size="mini"
                           type="success">已发货</el-button>
            </template>
        </el-table-column>
        <el-table-column
                label="订单状态"
                width="180">
            <template slot-scope="scope">
                <el-button v-if="scope.row.orderStatus==0"
                           size="mini"
                           type="danger">未完成</el-button>
                <el-button v-if="scope.row.orderStatus==1"
                           size="mini"
                           type="success">已完成</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import {_getAllOrderList, _orderConfirm} from '../../../api/admin'

    export default {
        name: 'AdminOrderManage',
        created () {
            _getAllOrderList().then(res => {
                // console.info(res)
                this.tableData = res.data
            })
        },
        data () {
            return {
                tableData: []
            }
        },
        methods: {
            handleEdit (obj) {
                // console.info(obj)
                _orderConfirm(obj).then(res => {
                    console.info(res)
                })
                this.$router.go(0)
            }
        }
    }
</script>

<style scoped>
</style>
