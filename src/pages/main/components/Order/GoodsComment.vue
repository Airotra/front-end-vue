<template>
    <el-dialog
            append-to-body
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            center
            :before-close="handleClose"
            :modal-append-to-body="false">
        <el-form ref="form" label-width="80px">
            <el-rate
                    v-model="rateValue"
                    :colors="colors"
                    style="margin-left: 30%">
            </el-rate>
            <br>
            <br>
            <el-form-item label="评论">
                <el-input v-model="comment"></el-input>
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
    import {_addComment, _commentGoods} from '../../../../api/order'

    export default {
        name: 'GoodsComment',
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
                obj: {},
                comment: '',
                goodsComment: {
                    userId: '',
                    goodsId: '',
                    comment: '',
                    commentClass: ''
                },
                orderContainGoods: {
                    orderId: '',
                    goodsId: '',
                    goodsNumber: '',
                    goodsName: '',
                    goodsPrice: '',
                    comment: ''
                },
                rateValue: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }
        },
        methods: {
            show (obj) {
                this.dialogVisible = true
                this.goodsComment.goodsId = obj.goodsId
                this.obj = obj
            },
            handleClose (done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done()
                    })
                    .catch(_ => {})
            },
            save () {
                if (this.comment !== '') {
                    this.goodsComment.userId = this.userId
                    this.goodsComment.comment = this.comment
                    this.goodsComment.commentClass = this.rateValue
                    _addComment(this.goodsComment).then(res => {
                        // console.info(res)
                        // console.info(this.obj)
                        this.orderContainGoods.orderId = this.obj.orderId
                        this.orderContainGoods.goodsId = this.obj.goodsId
                        _commentGoods(this.orderContainGoods).then(res => {
                            // console.info('更新信息成功')
                            this.$emit('ok')
                            this.dialogVisible = false
                        })
                    })
                } else {
                    this.$alert('请输入有效评论', '无效评论', {
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
