<template>
    <el-dialog title="确认" :visible.sync="outerVisible" :before-close="handleClose">
        <el-dialog
                width="80%"
                title="结算"
                :visible.sync="innerVisible"
                append-to-body
                :before-close="handleClose">
            <el-dialog
                    width="80%"
                    title="结果"
                    :visible.sync="lastVisible"
                    append-to-body
                    :before-close="handleClose">
                <span>{{info}}</span>
            </el-dialog>
            <el-tag style=" margin-left:120px" type="info">结算清单</el-tag>
            <el-table
                    :data="GoodsSelection"
                    style=" margin-left:120px;width:70%">
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

            <el-divider style="margin-top: 30px"></el-divider>

            <el-tag style=" margin-left:120px" type="info">订单信息确认</el-tag>

            <el-form ref="form" label-width="200px" style="margin-top: 20px" >
                <el-form-item label="商品总额">
                    <el-input v-model="TotalPrice" style="width: 200px"></el-input>
                </el-form-item>
                <el-form-item label="选择送货地址">
                    <el-checkbox-group
                            v-model="checkedAddress"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(address) in addresslistdetail" :label="address" :key="address">{{address}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="选择支付方式">
                    <el-checkbox-group
                            v-model="checkedPaid"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(paidmethod) in paidmethodlist" :label="paidmethod" :key="paidmethod">{{paidmethod}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="是否自提">
                    <el-checkbox-group
                            v-model="checkedGet"
                            :min="0"
                            :max="1">
                        <el-checkbox v-for="(getmethod) in getmethodlist" :label="getmethod" :key="getmethod">{{getmethod}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <el-button style="margin-top: 50px;margin-left: 120px" type="primary" @click="submitOrder">提交订单</el-button>
        </el-dialog>
        <span>是否进行结算？</span>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="outerVisible = false;innerVisible = true">确 认</el-button>
        </div>
    </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import {updateOrder} from '@api/order'
export default {
  name: 'ConfirmSettlement',
  computed: {
    ...mapGetters({
        userType: 'user/getUserType',
        userId: 'user/getUserId',
        getSidebarList: 'sidebar/getSidebarList'
    })
  },
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      lastVisible: false,
      TotalPrice: 0,
      GoodsSelection: [],
        info: '',
        orderDetail: {
            adressId: 1,
            userId: 1,
            getBySelf: false,
            paid: false,
            orderStatus: 0
        },
        addresslistId: [],
        addresslistdetail: [],
        checkedAddress: [],
        paidmethodlist: ['微信支付', '支付宝支付', '网银支付', '暂不支付'],
        checkedPaid: ['暂不支付'],
        getmethodlist: ['是', '否'],
        checkedGet: ['否'],
        addresslist: {}
    }
  },
  methods: {
    handleClose () {
        this.TotalPrice = 0
        this.GoodsSelection = []
        this.addresslistId = []
        this.addresslistdetail = []
        this.checkedAddress = []
        this.addresslist = {}
        this.innerVisible = false
        this.outerVisible = false
        this.lastVisible = false
    },
    show (GoodsSelection, addressId, addressDetail) {
      this.outerVisible = true
      this.GoodsSelection = GoodsSelection
      for (var index = 0; index < GoodsSelection.length; index++) {
        this.TotalPrice = this.TotalPrice + GoodsSelection[index].goodsPrice * GoodsSelection[index].goodsNumber
      }
      this.addresslistId = addressId
      this.addresslistdetail = addressDetail
      this.addresslist = {addressId, addressDetail}
    },
      submitOrder () {
          this.innerVisible = false
          this.lastVisible = true

          this.orderDetail.userId = this.userId
          if (this.GoodsSelection.length === 0) { this.info = '您未购买任何商品！' } else {
              if (this.checkedAddress.length === 0) { this.info = '订单提交失败，未选择送货地址' } else if (this.checkedPaid.length === 0) { this.info = '订单提交失败，未选择支付方式' } else if (this.checkedGet.length === 0) { this.info = '订单提交失败，未选择是否自提' } else if (this.checkedGet.length === 0) { this.info = '订单提交失败，未选择是否自提' } else {
                  this.info = '订单提交成功，即将为您安排发货'
                  for (var index = 0; index < this.addresslist.addressDetail.length; index++) {
                      if (this.checkedAddress[0] === this.addresslist.addressDetail[index]) {
                          this.orderDetail.adressId = this.addresslist.addressId[index]
                          break
                      }
                  }
                  if (this.checkedGet[0] === '是') { this.orderDetail.getBySelf = true } else { this.orderDetail.getBySelf = false }
                  if (this.checkedPaid[0] === '暂不支付') { this.orderDetail.paid = false } else { this.orderDetail.paid = true }
                  updateOrder(this.orderDetail)
              }
          }
      }
  }
}
</script>

<style scoped>

</style>
