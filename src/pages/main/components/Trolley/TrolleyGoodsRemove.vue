<template>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
        <span>{{info}}</span>
        <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确定</el-button>
  </span>
    </el-dialog>
</template>

<script>
export default {
  name: 'TrolleyGoodsDetail',
  data () {
    return {
      dialogVisible: false,
      info: ''
    }
  },
  methods: {
    show (remove) {
      this.dialogVisible = true
      if (remove === true) {
        this.info = '移除成功'
      } else {
        this.info = '移除失败'
      }
    },
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
