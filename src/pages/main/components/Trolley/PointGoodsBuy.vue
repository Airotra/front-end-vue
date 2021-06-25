<template>
    <el-dialog
            title="购买"
            :visible.sync="dialogVisible"
            width="80%"
            :before-close="handleClose">
        <el-form ref="form" label-width="200px" >
            <el-form-item label="商品名称">
                <el-input readonly v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="购买此商品所需积分">
                <el-input readonly v-model="point"></el-input>
            </el-form-item>
            <el-form-item label="用户持有积分">
                <el-input readonly v-model="userpoint"></el-input>
            </el-form-item>
            <el-form-item label="购买后剩余积分">
                <el-input readonly v-model="surpluspoint"></el-input>
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
      point: 0,
      userpoint: 0,
      surpluspoint: 0
    }
  },
  methods: {
    show (name, point, userpoint) {
      this.name = name
      this.point = point
      this.userpoint = userpoint
      this.surpluspoint = userpoint - point
      this.dialogVisible = true
    },
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
