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
      <el-tag type="info" style="font-weight: bold; font-family: 黑体; color:yellow; background-color: royalblue; ">我的购物车</el-tag>
      <el-table
              ref="multipleTable"
              :data="TrolleyGoods"
              style="width:100%"
              @select="handleSelect">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
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
        <el-table-column label="商品数量" width="280">
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
                width="300">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
            <el-button @click="handleRemove(scope.row)" type="primary" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="query.pageNo"
              :page-sizes="[10, 20, 30, 50]"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="query.total">
      </el-pagination>
      <div style="margin-top: 20px">
        <el-button type= "primary" @click="SettlePrice(GoodsSelection)">结算</el-button>
      </div>
    </el-card>
    <goods-detail ref="goodsDetail"></goods-detail>
    <goods-remove ref="goodsRemove"></goods-remove>
    <confirm-settlement ref="confirmSettle" @ok="refresh"></confirm-settlement>
    <el-dialog
        title="商品详情"
        :visible.sync="detailDialogVisible"
        width="50%"
        :before-close="handleClose">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-image :src="goodsInfo.picture?url + goodsInfo.picture:defaultImg" class="image2"></el-image>
        </el-col>
        <el-col :span="12">
          <span>商品名: {{ goodsInfo.name }}</span>
          <el-divider></el-divider>
          <span>价格: ￥{{ goodsInfo.price }}</span>
          <el-divider></el-divider>
          <span>人气值: {{ goodsInfo.purchaseTimes }}</span>
          <el-divider></el-divider>
          <span>描述: {{ goodsInfo.description }}</span>
          <el-divider></el-divider>
          <span v-if="goodsInfo.sideDec1 !== null&&goodsInfo.sideDec1">额外描述1: {{ goodsInfo.sideDec1 }} <el-divider></el-divider></span>
          <span v-if="goodsInfo.sideDec2 !== null&&goodsInfo.sideDec2">额外描述2: {{ goodsInfo.sideDec2 }} <el-divider></el-divider></span>
          <span v-if="goodsInfo.sideDec3 !== null&&goodsInfo.sideDec3">额外描述3: {{ goodsInfo.sideDec3 }} <el-divider></el-divider></span>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {trolleylist} from '@api/trolleylist'
import {removegoods} from '@api/removegoods'
import {getTrolleyIdByUserId} from '@api/goods'
import {goodsnumberChange} from '@api/goodsnumberChange'
import GoodsDetail from '../../components/Trolley/TrolleyGoodsDetail'
import GoodsRemove from '../../components/Trolley/TrolleyGoodsRemove'
import ConfirmSettlement from '../../components/Trolley/ConfirmSettlement'
import {getGoods} from '../../../../api/trolleylist'

export default {
  name: 'Second',
  components: {
    GoodsDetail,
    GoodsRemove,
    ConfirmSettlement
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      userId: 'user/getUserId',
      getSidebarList: 'sidebar/getSidebarList'
    })
  },
  data () {
    return {
      defaultImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      url: 'api/file/picture?url=',
      detailDialogVisible: false,
      TrolleyGoods: [],
      GoodsSelection: [],
      address: '',
      addressId: 0,
      addresslistId: [],
      goodsInfo: {
        // 商品拥有的属性
        name: 'null',
        price: 'null',
        purchaseTimes: '0',
        description: 'null'
      },
      addresslistdetail: [],
      query: {
        pageNo: 1,
        pageSize: 10,
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
    refresh () {
      this.getTrolley()
    },
    // 点击获取购物车中商品信息
    handleClick (obj) {
      // console.info(obj)
      this.detailDialogVisible = true
      getGoods(obj.goodsId).then(res => {
        this.goodsInfo = res.data
      })
    },
    // 点击移除购物车中商品
    handleRemove (obj) {
      console.info(obj.goodsId)
      this.query.goodsid = obj.goodsId
      console.info(this.query.goodsid)
      removegoods(this.query).then(res => {
        this.$refs.goodsRemove.show(res.data)
        this.getTrolley()
      })
    },
    // 增加购物车内商品数量
    increaseNumber (obj) {
      obj.goodsNumber++
      this.query.goodsid = obj.goodsId
      this.query.goodsnumber = obj.goodsNumber
      goodsnumberChange(this.query)
      this.getTrolley()
    },
    // 减少购物车内商品数量
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
    handleSelect (val) {
      this.GoodsSelection = val
    },
    // 获取购物车中信息
    getTrolley () {
        getTrolleyIdByUserId(this.userId).then(res => {
        // 获取购物车id，作为参数传入
        console.info(res)
        this.query.id = res.data
        trolleylist(this.query).then(res => {
          this.TrolleyGoods = res.data.records
          this.query.pageNo = res.data.current
          this.query.total = res.data.total
        })
      })
    },
    // 结算购物车内商品信息
    SettlePrice (GoodsSelection) {
      this.$axios.get('/api/user/getAddr', {params: {
          id: this.userId
        }}).then(res => {
        this.addresslistId = []
        this.addresslistdetail = []
        for (var index = 0; index < res.data.data.list.length; index++) {
          this.address = res.data.data.list[index].nation + res.data.data.list[index].provice +
                  res.data.data.list[index].city + res.data.data.list[index].district +
                  res.data.data.list[index].addr
          this.addressId = res.data.data.list[index].id
          this.addresslistId.push(this.addressId)
          this.addresslistdetail.push(this.address)
        }
        // 弹出结算对话框
        this.$refs.confirmSettle.show(GoodsSelection, this.addresslistId, this.addresslistdetail)
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
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {
          })
    }
  }
}
</script>

<style>
.image {
  width: 100%;
  height: 200px;
  display: block;
}
.image2{
  width: 100%;
  display: block;
}
</style>
