<template>
    <el-dialog title="确认" :visible.sync="outerVisible">
        <el-dialog
                width="80%"
                title="结算"
                :visible.sync="innerVisible"
                append-to-body>
            <el-tag type="info">结算清单</el-tag>
            <el-table
                    :data="GoodsSelection"
                    style="width:100%"
                    @select="handleSelect">
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
        </el-dialog>
        <span>是否进行结算？</span>
        <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="outerVisible = false;innerVisible = true">确 认</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
  name: 'TrolleyGoodsDetail',
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      TotalPrice: 0,
      GoodsSelection: []
    }
  },
  methods: {
    show (GoodsSelection) {
      this.outerVisible = true
      this.GoodsSelection = GoodsSelection
      for (var index = 0; index < GoodsSelection.length; index++) {
        this.TotalPrice = this.TotalPrice + GoodsSelection[index].goodsPrice * GoodsSelection[index].goodsNumber
      }
      console.info(this.TotalPrice)
    }
  }
}
</script>

<style scoped>

</style>
