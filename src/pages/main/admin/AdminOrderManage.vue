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
                prop="order_id"
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
                <el-button v-if="scope.row.paid==0"
                           size="mini"
                           type="danger">未支付</el-button>
                <el-button v-if="scope.row.paid==1"
                           size="mini"
                           type="success">已支付</el-button>
            </template>
        </el-table-column>
        <el-table-column
                prop="transport_number"
                label="发货状态">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="warning"
                        @click="handleEdit(scope.$index, scope.row)">点击发货</el-button>
            </template>
        </el-table-column>
        <el-table-column
                label="订单状态"
                width="180">
            <template slot-scope="scope">
                <el-button v-if="scope.row.order_status==0"
                           size="mini"
                           type="danger">未完成</el-button>
                <el-button v-if="scope.row.order_status==1"
                           size="mini"
                           type="success">已完成</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    export default {
        name: 'AdminOrderManage',
        data () {
            return {
                tableData: [{
                    order_id: '1111',
                    order_date: '2016-05-02',
                    paid: '0',
                    transport_number: '',
                    order_status: '0'
                },
                    {
                        order_id: '2222',
                        order_date: '2016-05-02',
                        paid: '1',
                        transport_number: '',
                        order_status: '0'
                    },
                    {
                        order_id: '3333',
                        order_date: '2016-05-02',
                        paid: '1',
                        transport_number: '',
                        order_status: '1'
                    }]
            }
        }
    }
</script>

<style scoped>
</style>
