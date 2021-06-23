<template>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
        <el-form ref="form" label-width="80px">
            <el-form-item label="ID">
                <el-input readonly v-model="goods.goodsId"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">取消</el-button>
  </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'TrolleyGoodsDetail',
  data () {
    return {
      dialogVisible: false,
      goods: {}
    }
  },
  methods: {
    show (obj) {
      this.goods = obj
      this.dialogVisible = true
    },
    handleClose () {
      this.goods = {}
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
