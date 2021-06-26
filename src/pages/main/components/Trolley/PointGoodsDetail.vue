<template>
    <el-dialog
            title="商品详情"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
        <el-form ref="form" label-width="80px">
            <el-tag>物超所值，不换血亏</el-tag>
            <el-form-item style="margin-top: 20px" label="商品名称">
                <el-input readonly v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="所需积分">
                <el-input readonly v-model="point"></el-input>
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
      name: '',
      info: '66666',
      point: 0
    }
  },
  methods: {
    show (name, point) {
        this.name = name
        this.point = point
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
