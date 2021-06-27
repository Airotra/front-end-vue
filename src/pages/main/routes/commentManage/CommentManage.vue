<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/goods' }">评论管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      评论管理
      <el-button type="primary" size="small" @click="getComment" style="float: right">刷新</el-button>
      <el-button type="danger" :disabled="deleteButtonDisabled" @click="handleDeleteComment" size="small" style="float: right;margin-right: 10px">
        删除
      </el-button>
    </el-card>
    <el-table
        ref="multipleTable"
        :data="commentList"
        tooltip-effect="dark"
        style="width: 100%"
        :default-sort = "{prop: 'commentTime', order: 'descending'}"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          prop="comment"
          label="评论内容"
          width="120">
      </el-table-column>
      <el-table-column
          prop="commentClass"
          label="评价等级"
          sortable
          width="120">
      </el-table-column>
      <el-table-column
          prop="user.nickName"
          label="评论人"
          width="120">
      </el-table-column>
      <el-table-column
          prop="user.id"
          label="评论人ID"
          width="120">
      </el-table-column>
      <el-table-column
          prop="goodsId"
          label="被评论商品ID"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          prop="commentTime"
          label="评论发布时间"
          sortable
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="商品详情"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="handleGoodsDetail(scope.row)"
              type="text"
              size="small">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="商品详情"
        :visible.sync="detailDialogVisible"
        width="50%"
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
      <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
                 </span>
    </el-dialog>
  </div>
</template>

<script>
import {getCommentList, deleteCommentsByList, getGoodsById} from '../../../../api/commentManage'
export default {
  name: 'CommentManage',
  created () {
    this.getComment()
  },
  methods: {
    getComment () {
      getCommentList(this.commentListDTO).then(res => {
        console.info(res)
        this.commentListDTO.total = res.data.total
        this.commentList = res.data.records
      })
    },
    handleDeleteComment () {
      this.$confirm('确认删除？')
          .then(_ => {
            for (let i = 0; i < this.multipleSelection.length; i++) {
              this.commentDeleteDTO.ids.push(this.multipleSelection[i].commentId)
            }
            this.commentDeleteDTO.ids = JSON.parse(JSON.stringify(this.commentDeleteDTO.ids))
            deleteCommentsByList(this.commentDeleteDTO).then(result => {
              // console.info(result)
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.getComment()
            })
          })
          .catch(_ => {})
    },
    handleSelectionChange (val) {
      // val是对象数组，为选中的对象
      this.multipleSelection = val
      // console.log(val)
      if (this.multipleSelection.length > 0) {
        this.deleteButtonDisabled = false
      } else {
        this.deleteButtonDisabled = true
      }
    },
    handleGoodsDetail (row) {
      this.detailDialogVisible = true
      // console.info(row)
      this.goodsId = row.goodsId
      // console.info(this.goodsId)
      getGoodsById(this.goodsId).then(res => {
        // console.info(res)
        this.goodsDetail = res.data
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {
          })
    }
  },
  data () {
    return {
      defaultImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      url: 'api/file/picture?url=',
      goodsId: '',
      detailDialogVisible: false,
      deleteButtonDisabled: true,
      commentList: [],
      multipleSelection: [],
      commentDeleteDTO: {
        ids: []
      },
      commentListDTO: {
        commentClass: '0',
        pageNo: 1,
        pageSize: 10,
        total: 0,
        timeDesc: false
      },
      goodsDetail: {
        // 商品拥有的属性
        name: 'null',
        price: 'null',
        purchaseTimes: '0',
        description: 'null'
      }
    }
  }
}
</script>

<style scoped>
.button {
  padding: 0;
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
</style>
