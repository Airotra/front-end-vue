<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/PointShoppingMall' }">积分商城</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <span style="font-family:华文行楷; font-weight:bold;font-size: 20px;color: orangered;">“十分”精彩</span>
    </el-card>
    <el-card class="container">
      <div class="left">
        <div class="left">
        <img :src="Hatimg" style="width:130px;height:130px">
        </div>
        <div>
          <router-link to='/main' >
            <button class="top">商品详情</button>
          </router-link>
          <router-link to='/main' >
            <button class="bottom">购买</button>
          </router-link>
        </div>
        <span style="position: absolute;top: 150px;left: 35px; font-size: 15px;color: #797979;">白纹红色鸭舌帽</span>
        <span style="position: absolute;top: 270px;left: 65px; font-family:黑体; font-weight:bold;font-size: 10px;color: saddlebrown;">10积分</span>
      </div>
      <div class="right" >
        <img :src="Shoesimg" style="width:130px;height:130px">
        <div>
          <router-link to='/main' >
            <button class="top">商品详情</button>
          </router-link>
          <router-link to='/main' >
            <button class="bottom">购买</button>
          </router-link>
        </div>
        <span style="position: absolute;top: 150px;left: 285px; font-size: 15px;color: #797979;">室内拖鞋</span>
        <span style="position: absolute;top: 270px;left: 300px; font-family:黑体; font-weight:bold;font-size: 10px;color: saddlebrown;">10积分</span>
      </div>
    </el-card>
    <el-card class="container">
      <span style="font-family:华文行楷; font-weight:bold;font-size: 20px;color: orangered;">“十分”精彩</span>
    </el-card>
    <el-card class="container">
      <div class="left">
        <div class="left">
          <img :src="Hatimg" style="width:130px;height:130px">
        </div>
        <div>
          <router-link to='/main' >
            <button class="top">商品详情</button>
          </router-link>
          <router-link to='/main' >
            <button class="bottom">购买</button>
          </router-link>
        </div>
        <span style="position: absolute;top: 150px;left: 35px; font-size: 15px;color: #797979;">白纹红色鸭舌帽</span>
        <span style="position: absolute;top: 270px;left: 65px; font-family:黑体; font-weight:bold;font-size: 10px;color: saddlebrown;">10积分</span>
      </div>
      <div class="right" >
        <img :src="Shoesimg" style="width:130px;height:130px">
        <div>
          <router-link to='/main' >
            <button class="top">商品详情</button>
          </router-link>
          <router-link to='/main' >
            <button class="bottom">购买</button>
          </router-link>
        </div>
        <span style="position: absolute;top: 150px;left: 285px; font-size: 15px;color: #797979;">室内拖鞋</span>
        <span style="position: absolute;top: 270px;left: 300px; font-family:黑体; font-weight:bold;font-size: 10px;color: saddlebrown;">10积分</span>
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
      Shoesimg: require('@/assets/images/shoes.png')
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
  .left{
    font-size: 16px;
    margin:auto;
    float:left;
    flex:1
  }
  .right{
    margin-left:100px;
    float:right;
    flex:1
  }
</style>
