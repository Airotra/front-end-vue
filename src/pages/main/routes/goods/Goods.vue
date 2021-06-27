<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/goods' }">商品列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      商品列表
      <el-button type="text" class="button" @click="getGoods">刷新商品</el-button>
    </el-card>
    <el-card class="container">
      <el-row>
        <el-col :span="10">
          <el-input v-model="query.name" placeholder="搜索商品" size="small" @keyup.enter.native="getGoods"></el-input>
        </el-col>
        <el-row style="float: right">
          <el-col :span="5" style="text-align: right">
            <el-select v-model="query.category" placeholder="选择类别" size="small" @change="getGoods">
              <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" style="text-align: right">
            <el-select v-model="query.PriceDesc" placeholder="按价格排序" size="small" @change="getGoods">
              <el-option
                  v-for="item in priceDescOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" style="text-align: right">
            <el-select v-model="query.PurchaseDesc" placeholder="按人气排序" size="small" @change="getGoods">
              <el-option
                  v-for="item in purchaseDescOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5" style="text-align: right">
            <el-button type="primary" icon="el-icon-search" size="small" @click="getGoods">搜索</el-button>
          </el-col>
        </el-row>
      </el-row>
    </el-card>
    <el-row>
      <el-col :span="4" v-for="(o, index) in goodsList" :key="index" :offset="index > 0 ? 0.4 : 0">
        <el-card :body-style="{ padding: '1px'}" shadow="hover" class="card">
          <el-image :src="o.picture?url + o.picture:defaultImg" class="image"></el-image>
          <div style="padding: 14px;">
            <span>{{ o.name }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.time }}上架</time>
              <p>价格: ￥{{ o.price }}</p>
              <p>人气值: {{ o.purchaseTimes }}</p>
              <el-button type="text" class="button" @click="purchaseDialogVisible = true">购买</el-button>
              <el-button type="text" class="button2" @click="detailDialogVisible = true;openDetail(index)">详情
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.query.pageNo"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="this.query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.query.total">
    </el-pagination>
    <el-dialog
        title="商品详情"
        :visible.sync="detailDialogVisible"
        width="50%"
        style="background-color: #BDBDBD"
        :before-close="handleClose">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-image :src="goodsDetail.picture?url + goodsDetail.picture:defaultImg" class="image2"></el-image>
        </el-col>
        <el-col :span="12">
          <span>商品名: {{ goodsDetail.name }}</span>
          <el-divider></el-divider>
          <span>价格: ￥{{ goodsDetail.price }}</span>
          <el-divider></el-divider>
          <span>人气值: {{ goodsDetail.purchaseTimes }}</span>
          <el-divider></el-divider>
          <span>描述: {{ goodsDetail.description }}</span>
          <el-divider></el-divider>
          <span v-if="goodsDetail.sideDec1 !== null&&goodsDetail.sideDec1">额外描述1: {{ goodsDetail.sideDec1 }} <el-divider></el-divider></span>
          <span v-if="goodsDetail.sideDec2 !== null&&goodsDetail.sideDec2">额外描述2: {{ goodsDetail.sideDec2 }} <el-divider></el-divider></span>
          <span v-if="goodsDetail.sideDec3 !== null&&goodsDetail.sideDec3">额外描述3: {{ goodsDetail.sideDec3 }} <el-divider></el-divider></span>
        </el-col>
      </el-row>
      <!--   评论   -->
      <el-card class="box-card" shadow="hover" >
        <div slot="header" class="clearfix">
          <span style="margin-right: 39%">精选评论</span>
          <el-select v-model="commentListDTO.commentClass" placeholder="按评分分类" size="small" @change="getComment">
            <el-option
                v-for="item in commentClassOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="commentListDTO.timeDesc" placeholder="按时间筛选" size="small" @change="getComment">
            <el-option
                v-for="item in commentTimeDescOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div v-for="(o,index) in commentList" :key="index" class="text item">
          <el-row>
            <el-row>
              <el-col :span="1"><el-avatar size="small" :src="o.user.avatar?url+o.user.avatar:circleUrl"></el-avatar></el-col>
              <el-col :span="10" style="font-size: larger">{{o.user.nickName}}</el-col>
              <el-col :span="5">
                <el-rate
                    v-model="o.commentClass"
                    disabled
                    text-color="#ff9900">
                </el-rate>
              </el-col>
              <el-col :span="5" style="font-size: 12px;color: gray;float: right">{{o.commentTime}}</el-col>
            </el-row>
            <el-col :span="24">
              <el-divider direction="vertical"></el-divider>
              <el-card style="width: 100%">{{ o.comment }}</el-card>
            </el-col>
          </el-row>
        </div>
        <el-pagination
            @size-change="handleCommentSizeChange"
            @current-change="handleCommentCurrentChange"
            :current-page="this.commentListDTO.pageNo"
            :page-sizes="[5, 10, 20, 50]"
            :page-size="this.commentListDTO.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.commentListDTO.total">
        </el-pagination>
      </el-card>
      <el-dialog
          width="30%"
          title="添加确认"
          :visible.sync="trolleyVisible"
          append-to-body>
        <span>请选择添加购物车的数量:</span>
        <el-input-number v-model="purchaseDetail.goodsNumber" :min="1" :max="99"
                         label="描述文字"></el-input-number>
        <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="addGoodsToTrolley">确 定</el-button>
          <!--     这里插入添加购物车逻辑       -->
                 </span>
      </el-dialog>
      <span slot="footer" class="dialog-footer">
                  <el-button @click="trolleyVisible = true">添加购物车</el-button>
                  <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
                 </span>
    </el-dialog>
    <el-dialog
        title="提示"
        :visible.sync="purchaseDialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>确认购买吗？</span>
      <span slot="footer" class="dialog-footer">
                <el-button @click="purchaseDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="purchaseDialogVisible = false">确 定</el-button>
        <!--      这里插入购买支付逻辑         -->
                </span>
    </el-dialog>
  </div>
</template>

<script>
import {goodsPage, addGoodsToTrolley, getTrolleyIdByUserId, getByFKs, updateTrolleyContainGoods, getCommentList} from '../../../../api/goods'
import {mapGetters} from 'vuex'

export default {
  name: 'GoodsList',
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      goodsPage(this.query).then(result => {
        // console.info(result.data)
        this.goodsList = result.data.records
        this.query.total = result.data.total
      })
      // console.info(this.query.category)
    },
    getComment () {
      this.commentListDTO.goodsId = this.goodsDetail.goodsId
      getCommentList(this.commentListDTO).then(res => {
        console.info(res)
        this.commentList = res.data.records
        this.commentListDTO.total = res.data.total
      })
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.query.pageSize = val
      this.getGoods()
    },
    handleCommentSizeChange (val) {
      this.commentListDTO.pageSize = val
      this.getComment()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.query.pageNo = val
      this.getGoods()
    },
    handleCommentCurrentChange (val) {
      this.commentListDTO.pageNo = val
      this.getComment()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {
          })
    },
    openDetail (index) {
      this.goodsDetail = this.goodsList[index]
      this.getComment()
    },
    addGoodsToTrolley () {
      if (this.userType === 3) {
        this.$message({
          message: '请先登录!',
          type: 'warning'
        })
        this.trolleyVisible = false
        // 跳转登录页面
      } else {
        // console.info(this.userId)
        getTrolleyIdByUserId(this.userId).then(res => {
          // 获取本用户对应的购物车id
          // console.info(res.data)
          this.purchaseDetail.goodsId = this.goodsDetail.goodsId
          this.purchaseDetail.goodsName = this.goodsDetail.name
          this.purchaseDetail.goodsPicture = this.goodsDetail.picture
          this.purchaseDetail.goodsPrice = this.goodsDetail.price
          this.purchaseDetail.id = res.data
          // 先判断是否已经添加过该商品
          getByFKs(this.purchaseDetail).then(res2 => {
            // console.info(res2)
            if (res2.data === null) {
              // alert('未添加')
              addGoodsToTrolley(this.purchaseDetail).then(res3 => {
                this.trollyVisible = false
                this.$message({
                  message: '已添加至购物车',
                  type: 'success'
                })
                // console.info(res3)
                this.trolleyVisible = false
              })
            } else {
              // alert('已添加')
              // 这里更新添加商品的数量，新的数量为已添加数量和本次添加数量之和
              // console.info(res2.data.goodsNumber)
              this.purchaseDetail.goodsNumber += res2.data.goodsNumber
              // console.info(this.purchaseDetail.goodsNumber)
              updateTrolleyContainGoods(this.purchaseDetail).then(res4 => {
                // console.info(res4)
                this.$message({
                  message: '物品数量更新成功',
                  type: 'success'
                })
                this.trolleyVisible = false
              })
            }
          })
        })
      }
    }
  },
  data () {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      defaultImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      url: 'api/file/picture?url=',
      currentDate: new Date(),
      goodsList: [],
      userInfo: {
        id: this.userId,
        name: 'null',
        userType: this.userType
      },
      detailDialogVisible: false,
      purchaseDialogVisible: false,
      trolleyVisible: false,
      commentList: [],
      commentListDTO: {
        goodsId: 2,
        commentClass: '0',
        pageNo: 1,
        pageSize: 5,
        total: 0,
        timeDesc: false
      },
      query: {
        pageNo: 1,
        pageSize: 5,
        total: 0,
        category: '0',
        PriceDesc: false,
        PurchaseDesc: true
      },
      goodsDetail: {
        // 商品拥有的属性
        name: 'null',
        price: 'null',
        purchaseTimes: '0',
        description: 'null'
      },
      purchaseDetail: {
        id: 'null',
        goodsId: 'null',
        goodsNumber: 1,
        goodsName: 'null',
        goodsPrice: 0,
        goodsPicture: 'null'
      },
      userCommentDetail: {
      },
      typeOptions: [{
        value: '0',
        label: '所有商品'
      }, {
        value: '1',
        label: '服装'
      }, {
        value: '2',
        label: '电子产品'
      }, {
        value: '3',
        label: '食品'
      }],
      commentClassOptions: [{
        value: '5',
        label: '五星好评'
      }, {
        value: '4',
        label: '四星好评'
      }, {
        value: '3',
        label: '三星中评'
      }, {
        value: '2',
        label: '两星差评'
      }, {
        value: '1',
        label: '一星差评'
      }, {
        value: '0',
        label: '所有评论'
      }],
      priceDescOptions: [{
        value: false,
        label: '价格升序'
      }, {
        value: true,
        label: '价格降序'
      }],
      purchaseDescOptions: [{
        value: false,
        label: '人气升序'
      }, {
        value: true,
        label: '人气降序'
      }],
      commentTimeDescOptions: [{
        value: false,
        label: '时间升序'
      }, {
        value: true,
        label: '时间降序'
      }]
    }
  },
  computed: {
    ...mapGetters({
      userType: 'user/getUserType',
      userId: 'user/getUserId',
      getSidebarList: 'sidebar/getSidebarList'
    })
  }
}
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  line-height: 12px;
  margin-top: 13px;
}

.button {
  padding: 0;
  float: right;
}

.button2 {
  padding: 0;
  margin-right: 10px;
  float: right;
}

.image {
  width: 100%;
  height: 200px;
  display: block;
}
.image2{
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.card {
  width: 200px;
  height: 400px;
  margin: 10px;
}

.el-pagination {
  text-align: center;
  margin-top: 20px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}
</style>
