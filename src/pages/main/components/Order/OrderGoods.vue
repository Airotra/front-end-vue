<template>
    <el-dialog
            append-to-body
            title="提示"
            :visible.sync="dialogVisible"
            width="50%"
            center
            :before-close="handleClose"
            :modal-append-to-body="true">
        <el-table
                :data="order_goods"
                style="width: 100%">
            <el-table-column
                    prop="goodsName"
                    label="商品名称"
                    width="130">
            </el-table-column>
            <el-table-column
                    prop="goodsPrice"
                    label="商品单价"
                    width="130">
            </el-table-column>
            <el-table-column
                    prop="goodsNumber"
                    label="商品数量"
                    width="130">
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
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
        </span>
        <goods-comment ref="goodsComment" @ok="dialogVisible = false"></goods-comment>
    </el-dialog>
</template>

<script>
    import GoodsComment from '../../components/Order/GoodsComment'

    export default {
        name: 'OrderGoods',
        data () {
            return {
                order_goods: [],
                dialogVisible: false,
                item: {}
            }
        },
        components: {
            GoodsComment
        },
        methods: {
            show (obj) {
                this.dialogVisible = true
                this.order_goods = obj.list
                this.item = obj
                // console.info(obj)
            },
            handleClose (done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done()
                    })
                    .catch(_ => {})
            },
            open (obj) {
                // console.info(obj)
                this.$refs.goodsComment.show(obj)
            },
            save () {
                this.$emit('ok')
            }
        }
    }
</script>

<style scoped>

</style>
