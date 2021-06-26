<template>
    <el-dialog
            title="购买"
            :visible.sync="outerVisible"
            width="80%"
            :before-close="handleClose">
        <el-dialog
                width="60%"
                title="订单提交"
                :visible.sync="innerVisible"
                append-to-body>
            <span>{{info}}</span>
        </el-dialog>
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
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="handleClose">取消</el-button>
            <el-button type="primary" @click="submitOrder">确 认</el-button>
  </span>
    </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import {updateOrder} from '@api/order'

export default {
  name: 'TrolleyGoodsDetail',
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
      AddressSelection: '',
      info: '',
      orderDetail: {
          adressId: 1,
          userId: 1,
          getBySelf: false,
          paid: false,
          orderStatus: 0
        },
      name: '',
      point: 0,
      userpoint: 0,
      surpluspoint: 0,
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
    show (name, point, userpoint, addressId, addressDetail) {
        this.name = name
        this.point = point
        this.userpoint = userpoint
        this.surpluspoint = userpoint - point
        this.addresslistId = addressId
        this.addresslistdetail = addressDetail
        this.addresslist = {addressId, addressDetail}
        this.outerVisible = true
    },
      handleSelect (val) {
          this.AddressSelection = val
      },
    handleClose () {
        this.name = ''
        this.point = 0
        this.userpoint = 0
        this.surpluspoint = 0
        this.addresslist = {}
        this.outerVisible = false
    },
      submitOrder () {
          this.outerVisible = false
          this.innerVisible = true
          this.orderDetail.userId = this.userId
          if (this.surpluspoint < 0) { this.info = '您的积分不足，无法购买该商品' } else {
          this.$axios.get('/api/user/updatePoint', {params: {
                  id: this.userId,
                  point: this.surpluspoint
              }})
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
