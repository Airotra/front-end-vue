<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/main/PointShoppingMall/Clothes' }">积分商城-服装百货</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
  </el-card>
      <el-card class="container" style="background-color: lightgreen">
          <span style="font-family:华文行楷; font-weight:bold;font-size: 25px;color:darkgreen;">十分精彩</span>
          <span style="font-family:微软雅黑; font-weight:bold;font-size: 10px;color:white;">——10积分换取专区</span>
      </el-card>
      <el-divider content-position="left"><i class="el-icon-star-on" style="color:yellow; background-color: royalblue; font-size:20px"></i></el-divider>
      <el-card class="container">
          <div class="box1">
              <div>
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">白纹红色鸭舌帽</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="Hatimg"></el-image>
                      </div>
                  </div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('白色红纹鸭舌帽', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('白色红纹鸭舌帽', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box2" >
              <div>
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">室内拖鞋</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Shoesimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('室内拖鞋', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('室内拖鞋', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box3" >
              <div>
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">木质梳子</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Combimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('木质梳子', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('木质梳子', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box4" >
              <div>
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">精致发卡</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Hairpinimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('精致发卡', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('精致发卡', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box5" >
              <div>
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">纺织手套</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Glovesimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('纺织手套', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('纺织手套', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
      </el-card>

      <el-card class="container" style="background-color: mediumpurple">
          <span style="font-family:华文行楷; font-weight:bold;font-size: 25px;color: navy">精品推荐</span>
          <span style="font-family:微软雅黑; font-weight:bold;font-size: 10px;color:white;">——为您推荐优质商品</span>
      </el-card>
      <el-divider><i class="el-icon-star-on" style="color:yellow; background-color: royalblue; font-size:20px"></i></el-divider>
      <el-card class="container">
          <div class="box1">
              <div>
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">连帽T恤衫</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="Tshirtimg"></el-image>
                      </div>
                  </div>
                  <el-tag style="margin-left: 30px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">420积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('连帽T恤衫', 420)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('连帽T恤衫', 420)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box2" >
              <div>
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">三色浴巾组合</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Towelimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">265积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('三色浴巾组合', 265)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('三色浴巾组合', 265)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box3" >
              <div>
                  <span style="margin-left: 40px; font-size: 15px;color: #797979;">棉袜套装</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 150px; height: 130px"
                              :src="Stockingimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">323积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('棉袜套装', 323)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('棉袜套装', 323)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box4" >
              <div>
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">全棉床上四件套</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Bedimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 30px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">1996积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('全棉床上四件套', 1996)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('全棉床上四件套', 1996)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box5" >
              <div>
                  <span style="margin-left: 30px; font-size: 15px;color: #797979;">柔光床头灯</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Lampimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 30px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">395积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('柔光床头灯', 395)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('柔光床头灯', 395)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
      </el-card>

      <el-card class="container" style="background-color: lightyellow">
          <span style="font-family:华文行楷; font-weight:bold;font-size: 25px;color: orange;">品牌优选</span>
          <span style="font-family:微软雅黑; font-weight:bold;font-size: 10px;color:darkgray;">——大品牌商品任选</span>
      </el-card>
      <el-divider content-position="right"><i class="el-icon-star-on" style="color:yellow; background-color: royalblue; font-size:20px"></i></el-divider>
      <el-card class="container">
          <div class="box1">
              <div>
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">李宁运动鞋</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="SportingShoesimg"></el-image>
                      </div>
                  </div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">1400积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('李宁运动鞋', 1400)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('李宁运动鞋', 1400)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box2" >
              <div>
                  <span style="margin-left: 5px; font-size: 15px;color: #797979;">骆驼牌户外运动服装</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Suitimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 35px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">1850积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('骆驼牌户外运动服装', 1850)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('骆驼牌户外运动服装', 1850)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box3" >
              <div>
                  <span style="margin-left: 30px; font-size: 15px;color: #797979;">恒源祥U形枕</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Upillowimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">474积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('恒源祥U型枕，保护颈椎，长久耐用', 474)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('恒源祥U型枕', 474)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box4" >
              <div>
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">洁柔可湿手帕纸</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Tissueimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">211积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('洁柔可湿手帕纸1件-12包*360抽', 211)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('洁柔可湿手帕纸', 211)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
          <div class="box5" >
              <div>
                  <span style="margin-left: 20px; font-size: 15px;color: #797979;">藏青色天堂伞</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Umbrellaimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">310积分</el-tag>
              </div>
              <div>
                  <el-button @click="show('藏青色天堂伞，老品牌值得信赖', 310)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  <el-button @click="buy('藏青色天堂伞', 310)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
              </div>
          </div>
      </el-card>

      <point-goods-buy ref="PointgoodsBuy"></point-goods-buy>
      <point-goods-detail ref="PointgoodsDetail"></point-goods-detail>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PointGoodsBuy from '../../components/Trolley/PointGoodsBuy'
import PointGoodsDetail from '../../components/Trolley/PointGoodsDetail'

export default {
  name: 'second',
  components: {
    PointGoodsBuy,
    PointGoodsDetail
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
      userPoint: 0,
      address: '',
      addressId: 0,
      addresslistId: [],
      addresslistdetail: [],
      Hatimg: require('@/assets/images/hat.png'),
      Shoesimg: require('@/assets/images/shoes.png'),
      Combimg: require('@/assets/images/Comb.png'),
      Hairpinimg: require('@/assets/images/hairpin.png'),
      Tshirtimg: require('@/assets/images/Tshirt.png'),
      Towelimg: require('@/assets/images/towel.png'),
      Stockingimg: require('@/assets/images/stocking.png'),
      Bedimg: require('@/assets/images/bed.png'),
      Lampimg: require('@/assets/images/lamp.png'),
      SportingShoesimg: require('@/assets/images/sportingshoes.png'),
      Suitimg: require('@/assets/images/suit.png'),
      Upillowimg: require('@/assets/images/Upillow.png'),
      Tissueimg: require('@/assets/images/tissue.png'),
      Umbrellaimg: require('@/assets/images/umbrella.png'),
      Glovesimg: require('@/assets/images/gloves.png')
    }
  },
  methods: {
    show (name, point) {
        // 弹出商品详情对话框
        this.$refs.PointgoodsDetail.show(name, point)
      },
    buy (name, point) {
      this.$axios.get('/api/user/getUserDetail', {params: {
        // 获取用户的详细信息，主要为用户积分点
        id: this.userId
      }}).then(res => {
        this.userPoint = res.data.data.point
      })
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
            this.$refs.PointgoodsBuy.show(name, point, this.userPoint, this.addresslistId, this.addresslistdetail)
        })
    }
  }
}
</script>

<style scoped>
  .container{
    background: white;
    margin-top: 8px;
    width:100%;
    display: flex;
  }
  .box1{
    font-size: 16px;
    margin:auto;
    float:left;
    flex:1
  }
  .box2{
    margin-left:130px;
    float:left;
    flex:1
  }
  .box3{
      margin-left:130px;
      float:left;
      flex:1
  }
  .box4{
      margin-left:130px;
      float:left;
      flex:1
  }
  .box5{
      margin-left:130px;
      float:left;
      flex:1
  }
</style>
