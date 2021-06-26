<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/goodsManage' }">商品管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      商品列表
      <el-button type="text" class="button" @click="getGoods" >刷新商品</el-button>
    </el-card>
    <el-card class="container" >
      <el-row>
        <el-col :span="5"><el-input v-model="query.name" placeholder="搜索商品" size="small" @keyup.enter.native="getGoods"  ></el-input></el-col>
        <el-col :span="2" style="text-align: right">
            <el-select v-model="query.category" placeholder="选择类别" size="small" @change="getGoods" >
              <el-option
                  v-for="item in typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        <el-col :span="2" style="text-align: right"><el-button type="primary" icon="el-icon-search" size="small" @click="getGoods" >搜索</el-button></el-col>
        <el-col :span="2" style="float: right"><el-button type="danger" :disabled="this.deleteButtonDisabled" size="small" @click="deleteGoods">删除商品</el-button></el-col>
        <el-col :span="2" style="float: right"><el-button type="primary" size="small" @click="createDialogVisible = true">上架商品</el-button></el-col>
      </el-row>
    </el-card>
    <el-table
        ref="multipleTable"
        :data="goodsList"
        tooltip-effect="dark"
        style="width: 100%"
        :default-sort = "{prop: 'time', order: 'descending'}"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          prop="name"
          label="商品名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="category"
          label="商品类别"
          :formatter="categoryFormat"
          width="120">
      </el-table-column>
      <el-table-column
          prop="time"
          label="上架时间"
          sortable
          width="120">
      </el-table-column>
      <el-table-column
          prop="price"
          label="价格/元"
          sortable
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)">详情</el-button>
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
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        </el-col>
        <el-col :span="12">
          <p>商品名: {{goodsDetail.name}}</p>
          <p>价格: ￥{{goodsDetail.price}}</p>
          <p>库存/件: {{goodsDetail.store}}</p>
          <p>商品种类: {{detailFormat()}}</p>
          <p>上架时间: {{goodsDetail.time}}</p>
          <p>描述: {{goodsDetail.description}}</p>
          <p v-if="goodsDetail.sideDec1 !== null&&goodsDetail.sideDec1">额外描述1: {{goodsDetail.sideDec1}} </p>
          <p v-if="goodsDetail.sideDec2 !== null&&goodsDetail.sideDec2">额外描述2: {{goodsDetail.sideDec2}} </p>
          <p v-if="goodsDetail.sideDec3 !== null&&goodsDetail.sideDec3">额外描述3: {{goodsDetail.sideDec3}} </p>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="detailDialogVisible = false">确 定</el-button>
                 </span>
    </el-dialog>
    <el-dialog
        title="商品信息编辑"
        :visible.sync="editDialogVisible"
        width="50%"
        :before-close="handleClose">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-image :src=" goodsDetail.picture?url + goodsDetail.picture:defaultImg" class="image"></el-image>
          <el-upload
              class="upload-demo"
              action="/api/file/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleUploadSuccess"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-col>
        <el-col :span="12">
          <el-form :model="goodsDetail" :rules="rules" ref="goodsForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="goodsDetail.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格/元" prop="price">
              <el-input v-model="goodsDetail.price"></el-input>
            </el-form-item>
            <el-form-item label="商品库存/件" prop="store">
              <el-input v-model.number="goodsDetail.store"></el-input>
            </el-form-item>
            <el-form-item label="商品类别" prop="category">
              <el-select v-model="goodsDetail.category" placeholder="请选择商品类别">
                <el-option label="服装" :value="1"></el-option>
                <el-option label="电子产品" :value="2"></el-option>
                <el-option label="食品" :value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="上架时间" required>
                <el-form-item prop="time">
                  <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择日期" v-model="goodsDetail.time" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
              <el-input type="textarea" v-model="goodsDetail.description"></el-input>
            </el-form-item>
            <el-form-item label="附加描述1" prop="sideDec1">
              <el-input type="textarea" v-model="goodsDetail.sideDec1"></el-input>
            </el-form-item>
            <el-form-item label="附加描述2" prop="sideDec2">
              <el-input type="textarea" v-model="goodsDetail.sideDec2"></el-input>
            </el-form-item>
            <el-form-item label="附加描述3" prop="sideDec3">
              <el-input type="textarea" v-model="goodsDetail.sideDec3"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('goodsForm')">保存修改</el-button>
        <el-button type="primary" @click="resetForm ('goodsForm')">取消</el-button>
      </span>
    </el-dialog>
    <el-dialog
        title="商品信息填写"
        :visible.sync="createDialogVisible"
        width="50%"
        :before-close="handleClose">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-image :src=" goodsDetail.picture?url + goodsDetail.picture:defaultImg" class="image"></el-image>
          <el-upload
              class="upload-demo"
              action="/api/file/upload"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleUploadSuccess"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-col>
        <el-col :span="12">
          <el-form :model="goodsDetail" :rules="rules" ref="createGoodsForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="goodsDetail.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格/元" prop="price">
              <el-input v-model="goodsDetail.price"></el-input>
            </el-form-item>
            <el-form-item label="商品库存/件" prop="store">
              <el-input v-model.number="goodsDetail.store"></el-input>
            </el-form-item>
            <el-form-item label="商品类别" prop="category">
              <el-select v-model="goodsDetail.category" placeholder="请选择商品类别">
                <el-option label="服装" :value="1"></el-option>
                <el-option label="电子产品" :value="2"></el-option>
                <el-option label="食品" :value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="上架时间" required>
              <el-form-item prop="time">
                <el-date-picker type="datetime" value-format="yyyy-MM-dd HH:mm:ss"  placeholder="选择日期" v-model="goodsDetail.time" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-form-item>
            <el-form-item label="商品描述" prop="description">
              <el-input type="textarea" v-model="goodsDetail.description"></el-input>
            </el-form-item>
            <el-form-item label="附加描述1" prop="sideDec1">
              <el-input type="textarea" v-model="goodsDetail.sideDec1"></el-input>
            </el-form-item>
            <el-form-item label="附加描述2" prop="sideDec2">
              <el-input type="textarea" v-model="goodsDetail.sideDec2"></el-input>
            </el-form-item>
            <el-form-item label="附加描述3" prop="sideDec3">
              <el-input type="textarea" v-model="goodsDetail.sideDec3"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createGoods('createGoodsForm')">创建商品</el-button>
        <el-button type="primary" @click="cancelCreateGoods">取消</el-button>
      </span>
    </el-dialog>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.query.pageNo"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="this.query.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.query.total">
    </el-pagination>
  </div>
</template>

<script>
import {goodsPage, updateGoodsById, deleteGoodsByList, createGoodsApi} from '../../../../api/goodsManage'
export default {
  name: 'goodsManage',
  created () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      goodsPage(this.query).then(result => {
        console.info(result.data)
        this.goodsList = result.data.records
        this.query.total = result.data.total
      })
      console.info(this.query.category)
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.query.pageSize = val
      this.getGoods()
    },
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.query.pageNo = val
      this.getGoods()
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
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
    handleEdit (index, row) {
      // console.log(index, row)
      this.editDialogVisible = true
      this.goodsDetail = row
    },
    handleDetail (index, row) {
      this.detailDialogVisible = true
      this.goodsDetail = row
      // console.log(this.goodsDetail)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.getGoods()
          done()
        })
        .catch(_ => {})
    },
    changeGoodsImg () {
      // 修改商品图片逻辑
      console.info('修改图片逻辑暂未实现')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.editDialogVisible = false
          // console.info(this.goodsDetail)
          updateGoodsById(this.goodsDetail.goodsId, this.goodsDetail).then(res => {
            // console.log(res)
            alert('修改成功！')
            this.getGoods()
          })
        } else {
          this.$message({
            message: '请输入正确的商品信息！',
            type: 'warning'
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.editDialogVisible = false
      this.getGoods()
    },
    categoryFormat (row, col) {
      // 映射关系，待统一
      if (row.category === 1) {
        return '服装'
      } else if (row.category === 2) {
        return '电子产品'
      } else if (row.category === 3) {
        return '食品'
      } else return '未知类型'
    },
    detailFormat () {
      if (this.goodsDetail.category === 1) {
        return '服装'
      } else if (this.goodsDetail.category === 2) {
        return '电子产品'
      } else if (this.goodsDetail.category === 3) {
        return '食品'
      } else return '未知类型'
    },
    deleteGoods () {
      // console.log('deleteGoods')
      this.$confirm('确认删除？')
        .then(_ => {
          for (let i = 0; i < this.multipleSelection.length; i++) {
            this.goodsDeleteDTO.ids.push(this.multipleSelection[i].goodsId)
          }
          this.goodsDeleteDTO.ids = JSON.parse(JSON.stringify(this.goodsDeleteDTO.ids))
          deleteGoodsByList(this.goodsDeleteDTO).then(result => {
            // console.info(result)
            alert('删除成功！')
            this.getGoods()
          })
        })
        .catch(_ => {})
    },
    createGoods (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createDialogVisible = false
          // console.info(this.goodsDetail)
          // tianjia
          this.goodsDetail.goodsId = null
          createGoodsApi(this.goodsDetail).then(result => {
            alert('创建成功')
            this.getGoods()
          })
        } else {
          this.$message({
            message: '请输入正确的商品信息！',
            type: 'warning'
          })
          return false
        }
      })
    },
    cancelCreateGoods () {
      this.createDialogVisible = false
      this.getGoods()
    },
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handlePreview (file) {
      // console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleUploadSuccess (res) {
      this.goodsDetail.picture = res.url
      // console.info(this.url + this.goodsDetail.picture)
    }

  },
  data () {
    let priceValidator = (rule, value, callback) => { // 正数保留两位小数
      let reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/
      if (value === '') {
        callback(new Error('请输入价格'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入合法值,格式:123.45（最多保留两位）'))
      } else if (value.length > 15) {
        callback(new Error('价格过长！'))
      } else {
        callback()
      }
    }
    let storeValidator = (rule, value, callback) => { // 正数保留两位小数
      let reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('请输入库存'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入正整数'))
      } else if (value > 2147483646) {
        callback(new Error('数字过大！'))
      } else {
        callback()
      }
    }
    return {
      fileList: [],
      defaultImg: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      url: 'api/file/picture?url=',
      detailDialogVisible: false,
      purchaseDialogVisible: false,
      editDialogVisible: false,
      createDialogVisible: false,
      goodsList: [],
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
        goodsId: 'null',
        name: 'null',
        price: 'null',
        purchaseTimes: '0',
        description: 'null',
        category: 1,
        picture: ''
      },
      deleteButtonDisabled: true,
      goodsDeleteDTO: {
        ids: []
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
      multipleSelection: [],
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, validator: priceValidator, trigger: 'blur' }
        ],
        store: [
          { required: true, validator: storeValidator, trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入描述', trigger: 'blur' },
          { min: 5, max: 15, message: '长度在 5 到 50 个字符', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style>
.button {
  padding: 0;
  float: right;
}
.el-pagination{
  text-align: center;
  margin-top: 20px;
}
.image {
  width: 100%;
  height: fit-content;
  display: block;
}

</style>
