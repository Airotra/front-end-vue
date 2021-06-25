<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/main/PointShoppingMall/PointShoppingMall' }">积分商城</el-breadcrumb-item>
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
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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

      <el-card class="container" style="background-color: lightyellow">
          <span style="font-family:华文行楷; font-weight:bold;font-size: 25px;color: orange;">品牌优选</span>
          <span style="font-family:微软雅黑; font-weight:bold;font-size: 10px;color:darkgray;">——大品牌商品任选</span>
      </el-card>
      <el-divider content-position="right"><i class="el-icon-star-on" style="color:yellow; background-color: royalblue; font-size:20px"></i></el-divider>
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
                  <router-link to='/main' >
                      <el-button class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                  </router-link>
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
  </div>
</template>

<script>

export default {
  name: 'second',
  data () {
    return {
      Hatimg: require('@/assets/images/hat.png'),
      Shoesimg: require('@/assets/images/shoes.png'),
      Combimg: require('@/assets/images/Comb.png'),
      Hairpinimg: require('@/assets/images/hairpin.png'),
      Glovesimg: require('@/assets/images/gloves.png')
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
