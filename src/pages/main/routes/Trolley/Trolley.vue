<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/Trolley/Trolley' }">购物车</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="crumbs-card">
      <el-button @click="getTrolley" size="small" type="primary">我的购物车</el-button>
      <el-table
      :data="TrolleyGoods"
      style="width:100%">
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
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="query.pageNo"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="query.total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {trolleylist} from '@api/trolleylist'
export default {
  name: 'Second',
  data () {
    return {
      TrolleyGoods: [],
      Goodsname: [],
      query: {
        pageNo: 1,
        pageSize: 5,
        total: 0
      }
    }
  },
  methods: {
    // 页面大小改变
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    // 页码改变
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    getTrolley () {
      this.$axios.get('/api/user/getTrolleyID', {params: {
        id: 1
      }}).then(res => {
        trolleylist(res.data).then(res => {
          console.info(res)
          this.TrolleyGoods = res.data.records
          this.query.pageNo = res.data.current
          this.query.total = res.data.total
        })
      })
    }
  }
}
</script>
