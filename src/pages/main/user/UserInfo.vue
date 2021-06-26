<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">个人信息管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <div class="topContainer">
                <p class="accountFont" >我的账户</p>
            </div>
            <div style="width: 90%; margin-left: 5%">
                <div class="leftContainer">
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin: 4%; font-size: 1.1em;">个人基本信息</p>
                    </div>
                    <el-upload
                            class="avatar-uploader"
                            action="/api/file/upload"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <el-avatar v-if="avatar" :src="url + avatar" class="avatar"></el-avatar>
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                    <div class="userInfo">
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">昵称： {{nickName}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">手机号： {{phoneNumber}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">积分： {{point}}</p>
                        </div>
                        <div style="border-bottom: 1px solid rgb(240,240,240)">
                            <p style="margin-left: 5%">用户类型： 普通用户</p>
                        </div>
                        <el-button type="text" size="medium" style="float: right; margin-right: 5%; margin-top: 5px" @click="handleClick">编辑</el-button>
                        <user-detail ref="userDetail" @ok = 'getData'></user-detail>
                    </div>
                </div>
                <div class="rightContainer">
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin: 4%; font-size: 1.1em;">常用地址</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">收货人： {{nickName}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">手机号： {{phoneNumber}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">省份： {{address.provice}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">市/县： {{address.city}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">区/乡： {{address.district}}</p>
                    </div>
                    <div style="border-bottom: 1px solid rgb(240,240,240)">
                        <p style="margin-left: 5%">详细地址：{{address.addr}}</p>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import userDetail from '../components/user/UserDetailDialog'
    import { _userInfo } from '@api/user'
    import {_userAddrInfo, _userInfoSave} from '../../../api/user'
    import {_delPicture} from '../../../api/api'

    export default {
        name: 'UserInfo',
        components: {
            userDetail
        },
        data () {
            return {
                url: 'api/file/picture?url=',
                nickName: '',
                phoneNumber: '',
                avatar: '',
                point: '',
                password: '',
                user: {
                    id: '',
                    nickName: '',
                    phoneNumber: '',
                    password: '',
                    avatar: ''
                },
                address: []
            }
        },
        computed: {
            ...mapGetters({
                userType: 'user/getUserType',
                userId: 'user/getUserId',
                getSidebarList: 'sidebar/getSidebarList'
            })
        },
        created () {
            if (this.userType !== 1) {
                    this.$alert('请登录后再进行个人信息管理', '提示', {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$message({
                                type: 'info',
                                message: `请登录后再进行个人信息管理`
                            })
                            this.$router.push('/login')
                        }
                    })
            } else {
                this.getData()
                this.getAddr()
            }
        },
        methods: {
            getAddr () {
                _userAddrInfo(this.userId).then(res => {
                    // console.info(res)
                    this.address = res.data.list[0]
                })
            },
            handleClick () {
                this.setUserData()
                this.$refs.userDetail.show(this.user)
            },
            setUserData () {
                this.user.id = this.userId
                this.user.nickName = this.nickName
                this.user.phoneNumber = this.phoneNumber
                this.user.password = this.password
                this.user.avatar = this.avatar
            },
            getData () {
                _userInfo(this.userId).then(res => {
                    this.nickName = res.data.nickName
                    this.phoneNumber = res.data.phoneNumber
                    this.avatar = res.data.avatar
                    this.point = res.data.point
                    this.password = res.data.password
                })
            },
            handleAvatarSuccess (res, file) {
                console.info(res)
               this.avatar = res.url
                console.info(this.avatar)
                this.setUserData()
                // console.info(this.user)
                _userInfoSave(this.user).then(res => {
                    if (res.status) {
                        this.$message({
                            message: '保存成功',
                            type: 'success'
                        })
                        this.getData()
                    }
                })
            },
            beforeAvatarUpload (file) {
                if (this.avatar !== '') {
                    _delPicture(this.avatar).then(res => {
                        // console.info(res)
                    })
                }

                const isJPG = file.type === 'image/jpeg'
                const isLt2M = file.size / 1024 / 1024 < 2

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!')
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!')
                }
                return isJPG && isLt2M
            }
        }
    }
</script>

<style scoped>
    .topContainer {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        background-color: rgb(61,182,243);
        border-radius: 4px;
        margin-bottom: 10px;
        width: 90%;
        margin-left: 5%;
        height: 200px
    }
    .accountFont {
        color:white;
        position: relative;
        left: 2%;
        top: 10% ;
        font-size: 1.5em;
        margin: 0
    }
    .leftContainer {
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        height: 465px;
        width: 47%;
        display: inline-block;
        border-radius: 4px;
        position: relative;
        top: -145px;
        left: 2%
    }
    .rightContainer {
        background-color: white;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        height: 465px;
        width: 47%;
        display: inline-block;
        float: right;
        border-radius: 4px;
        position: relative;
        top: -145px;
        right: 2%;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 140px;
    }
    .avatar {
        width: 150px;
        height: 150px;
        display: block;
        margin-left: 165%;
    }
</style>
