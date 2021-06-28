<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/PointShoppingMall/Mobile' }">积分商城-数码电器</el-breadcrumb-item>
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
                    <span style="margin-left: 15px; font-size: 15px;color: #797979;">简易手机壳款式1</span>
                    <div class="demo-image">
                        <div class="block" >
                            <el-image
                                    style="width: 130px; height: 130px"
                                    :src="Phonesuitimg"></el-image>
                        </div>
                    </div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('简易手机壳款式1', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('简易手机壳款式2', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box2" >
                <div>
                    <span style="margin-left: 35px; font-size: 15px;color: #797979;">简易手机壳款式2</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Phonesuit2img"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('简易手机壳款式2', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('简易手机壳款式2', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box3" >
                <div>
                    <span style="margin-left: 25px; font-size: 15px;color: #797979;">Type-C数据线</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Datalineimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('Type-C数据线', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('Type-C数据线', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box4" >
                <div>
                    <span style="margin-left: 35px; font-size: 15px;color: #797979;">手机挂绳</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Phonestringimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('手机挂绳', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('手机挂绳', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box5" >
                <div>
                    <span style="margin-left: 35px; font-size: 15px;color: #797979;">手机保护膜</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Phonemaskimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">10积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('手机保护膜', 10)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('手机保护膜', 10)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
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
                    <span style="margin-left: 5px; font-size: 15px;color: #797979;">手机支架黑款</span>
                    <div class="demo-image">
                        <div class="block" >
                            <el-image
                                    style="width: 130px; height: 130px"
                                    :src="Phoneholderimg"></el-image>
                        </div>
                    </div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">259积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('手机支架黑款', 259)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('手机支架黑款', 259)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box2" >
                <div>
                    <span style="margin-left: 15px; font-size: 15px;color: #797979;">手机支架白款</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Phoneholder2img"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">259积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('手机支架白款', 259)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('手机支架白款', 259)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box3" >
                <div>
                    <span style="margin-left: 15px; font-size: 15px;color: #797979;">移动电源2000mAh</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Batteryimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">395积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('移动电源2000mAh', 395)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('移动电源2000mAh', 395)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box4" >
                <div>
                    <span style="margin-left: 15px; font-size: 15px;color: #797979;">55度恒温暖杯套装</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Bottleimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">828积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('55度恒温暖杯套装', 828)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('55度恒温暖杯套装', 828)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box5" >
                <div>
                    <span style="margin-left: 25px; font-size: 15px;color: #797979;">蓝牙耳机</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Bluetoothimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">2589积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('蓝牙耳机', 2589)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('蓝牙耳机', 2589)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
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
                    <span style="margin-left: 15px; font-size: 15px;color: #797979;">纽曼专业录音笔</span>
                    <div class="demo-image">
                        <div class="block" >
                            <el-image
                                    style="width: 130px; height: 130px"
                                    :src="Recorderimg"></el-image>
                        </div>
                    </div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">1790积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('纽曼专业录音笔', 1790)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('纽曼专业录音笔', 1790)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box2" >
                <div>
                    <span style="margin-left: 25px; font-size: 15px;color: #797979;">Dell-5470</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Dellimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">11295积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('Dell-5470', 11295)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('Dell-5470', 11295)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box3" >
                <div>
                    <span style="margin-left: 25px; font-size: 15px;color: #797979;">Iphone10</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Iphoneimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">15523积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('Iphone10',15523)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('Iphone10', 15523)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box4" >
                <div>
                    <span style="margin-left: 20px; font-size: 15px;color: #797979;">美的电烤箱</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Roasterimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 35px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">4625积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('美的电烤箱', 4625)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('美的电烤箱', 4625)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
                </div>
            </div>
            <div class="box5" >
                <div>
                    <span style="margin-left: 20px; font-size: 15px;color: #797979;">苏泊尔电饭煲</span>
                </div>
                <div class="demo-image">
                    <div class="block" >
                        <el-image
                                style="width: 130px; height: 130px"
                                :src="Suporimg"></el-image>
                    </div>
                </div>
                <div>
                    <el-tag style="margin-left: 40px; font-weight:bold;color:#1F2D3D" size="small" type="warning" color="#EFF2F7">3400积分</el-tag>
                </div>
                <div>
                    <el-button @click="show('苏泊尔电饭煲', 3400)" class="top" style="margin-top: 10px" size="small" type="info" >商品详情</el-button>
                    <el-button @click="buy('苏泊尔电饭煲', 3400)" class="bottom" style="margin-top: 10px" size="small" type="primary">购买</el-button>
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
                Phonesuitimg: require('@/assets/images/phonesuit.png'),
                Phonesuit2img: require('@/assets/images/phonesuit2.png'),
                Datalineimg: require('@/assets/images/dataline.png'),
                Phonestringimg: require('@/assets/images/phonestring.png'),
                Phonemaskimg: require('@/assets/images/phonemask.png'),
                Phoneholderimg: require('@/assets/images/phoneholder.png'),
                Phoneholder2img: require('@/assets/images/phoneholder2.png'),
                Batteryimg: require('@/assets/images/battery.png'),
                Bottleimg: require('@/assets/images/bottle.png'),
                Bluetoothimg: require('@/assets/images/bluetooth.png'),
                Recorderimg: require('@/assets/images/recorder.png'),
                Dellimg: require('@/assets/images/dell.png'),
                Iphoneimg: require('@/assets/images/iphone.png'),
                Roasterimg: require('@/assets/images/roaster.png'),
                Suporimg: require('@/assets/images/supor.png')
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
