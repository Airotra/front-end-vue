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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                  </router-link>
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
              </div>
          </div>
      </el-card>

      <point-goods-buy ref="PointgoodsBuy"></point-goods-buy>
  </div>
</template>

<script>
import PointGoodsBuy from '../../components/Trolley/PointGoodsBuy'

export default {
  name: 'second',
  components: {
    PointGoodsBuy
  },
  data () {
    return {
      userPoint: 0,
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
    buy (name, point) {
      console.info(point)
      this.$axios.get('/api/user/getUserDetail', {params: {
        // 获取用户的详细信息，主要为用户积分点
        id: 1
      }}).then(res => {
        this.userPoint = res.data.data.point
        console.info(this.userPoint)
      })
      this.$refs.PointgoodsBuy.show(name, point, this.userPoint)
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
