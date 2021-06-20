<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/main/PointShoppingMall/Food' }">积分商城-食品美妆</el-breadcrumb-item>
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
                  <span style="margin-left: 10px; font-size: 15px;color: #797979;">康师傅方便面一桶</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="Noodleimg"></el-image>
                      </div>
                  </div>
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
          <div class="box2" >
              <div>
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">酸奶一瓶</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Yogurtimg"></el-image>
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
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">小袋原味花生</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Peanutimg"></el-image>
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
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">保湿面膜</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Maskimg"></el-image>
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
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">香皂一块</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Soapimg"></el-image>
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
                  <span style="margin-left: 5px; font-size: 15px;color: #797979;">黑芝麻500g×2包</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="Sesameimg"></el-image>
                      </div>
                  </div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">568积分</el-tag>
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
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">饼干组合3袋</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Biscuitimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">416积分</el-tag>
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
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">坚果麦片500g</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Oatmealimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">295积分</el-tag>
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
                  <span style="margin-left: 35px; font-size: 15px;color: #797979;">洗护套装</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Shampooimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">328积分</el-tag>
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
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">温泉卸妆水</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Removerimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">589积分</el-tag>
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
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">福临门软糯香米</span>
                  <div class="demo-image">
                      <div class="block" >
                          <el-image
                                  style="width: 130px; height: 130px"
                                  :src="Riceimg"></el-image>
                      </div>
                  </div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">790积分</el-tag>
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
                  <span style="margin-left: 25px; font-size: 15px;color: #797979;">鄱阳湖松花蛋</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Eggimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">295积分</el-tag>
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
                  <span style="margin-left: 15px; font-size: 15px;color: #797979;">曼秀雷敦洁面乳</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Cleanserimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">523积分</el-tag>
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
                  <span style="margin-left: 20px; font-size: 15px;color: #797979;">珀莱雅保湿水</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Pwaterimg"></el-image>
                  </div>
              </div>
              <div>
                  <el-tag style="margin-left: 35px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">625积分</el-tag>
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
                  <span style="margin-left: 20px; font-size: 15px;color: #797979;">小米电动牙刷</span>
              </div>
              <div class="demo-image">
                  <div class="block" >
                      <el-image
                              style="width: 130px; height: 130px"
                              :src="Brusherimg"></el-image>
                  </div>
              </div>
              <div>
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
      </el-card>
  </div>
</template>

<script>

export default {
  name: 'second',
  data () {
    return {
      Noodleimg: require('@/assets/images/noodle.png'),
      Yogurtimg: require('@/assets/images/yogurt.png'),
      Peanutimg: require('@/assets/images/peanut.png'),
      Maskimg: require('@/assets/images/mask.png'),
      Soapimg: require('@/assets/images/soap.png'),
      Riceimg: require('@/assets/images/rice.png'),
      Sesameimg: require('@/assets/images/sesame.png'),
      Biscuitimg: require('@/assets/images/biscuit.png'),
      Oatmealimg: require('@/assets/images/oatmeal.png'),
      Shampooimg: require('@/assets/images/shampoo.png'),
      Removerimg: require('@/assets/images/remover.png'),
      Eggimg: require('@/assets/images/egg.png'),
      Cleanserimg: require('@/assets/images/cleanser.png'),
      Pwaterimg: require('@/assets/images/proyaWater.png'),
      Brusherimg: require('@/assets/images/brusher.png')
    }
  },
  methods: {
    haha (key) {
      alert(key)
    },
    handleClick () {

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
