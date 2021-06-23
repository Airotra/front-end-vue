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
        <el-table-column label="商品数量">
          <template slot-scope="scope">
            <el-button
                    size="mini"
                    type="info"
                    icon="el-icon-remove"
                    @click="reduceNumber(scope.row)"></el-button>
            <span>{{scope.row.goodsNumber}}</span>
            <el-button
                    size="mini"
                    type="info"
                    icon="el-icon-circle-plus"
                    @click="increaseNumber(scope.row)"></el-button>
          </template>
        </el-table-column>
        <el-table-column
                label="操作"
                width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="handleRemove(scope.row)" type="text" size="small">移除</el-button>
          </template>
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
    <goods-detail ref="goodsDetail"></goods-detail>
    <goods-remove ref="goodsRemove"></goods-remove>
  </div>
</template>

<script>
import {trolleylist} from '@api/trolleylist'
import {removegoods} from '@api/removegoods'
import {goodsnumberChange} from '@api/goodsnumberChange'
import GoodsDetail from '../../components/Trolley/TrolleyGoodsDetail'
import GoodsRemove from '../../components/Trolley/TrolleyGoodsRemove'
export default {
  name: 'Second',
  components: {
    GoodsDetail,
    GoodsRemove
  },
  data () {
    return {
      TrolleyGoods: [],
      query: {
        pageNo: 1,
        pageSize: 5,
        total: 0,
        id: 0,
        goodsid: 0,
        goodsnumber: 0
      }
    }
  },
  created () {
    this.getTrolley()
  },
  methods: {
    handleClick (obj) {
      this.$refs.goodsDetail.show(obj)
    },
    handleRemove (obj) {
      this.query.goodsid = obj.goodsId
      removegoods(this.query).then(res => {
        this.$refs.goodsRemove.show(res.data)
        this.getTrolley()
      })
    },
    increaseNumber (obj) {
      obj.goodsNumber++
      this.query.goodsid = obj.goodsId
      this.query.goodsnumber = obj.goodsNumber
      goodsnumberChange(this.query)
      this.getTrolley()
    },
    reduceNumber (obj) {
      obj.goodsNumber--
      this.query.goodsid = obj.goodsId
      this.query.goodsnumber = obj.goodsNumber
      goodsnumberChange(this.query)
      this.getTrolley()
      if (obj.goodsNumber === 0) {
        removegoods(this.query).then(res => {
          this.$refs.goodsRemove.show(res.data)
          this.getTrolley()
        })
        this.getTrolley()
      }
    },
    getTrolley () {
      this.$axios.get('/api/user/getTrolleyID', {params: {
        id: 1
      }}).then(res => {
        this.query.id = res.data
        trolleylist(this.query).then(res => {
          this.TrolleyGoods = res.data.records
          this.query.pageNo = res.data.current
          this.query.total = res.data.total
        })
      })
    },
    // 页面大小改变
    handleSizeChange (val) {
      this.query.pageSize = val
      this.getTrolley()
    },
    // 页码改变
    handleCurrentChange (val) {
      this.query.pageNo = val
      this.getTrolley()
    }
  }
}
</script>
