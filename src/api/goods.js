import http from '@http/http'

// 获取商品列表
export const goodsPage = (query) => http.GET('/api/goods/listByPage', query)
// 添加商品到购物车
export const addGoodsToTrolley = (purchaseDetail) => http.POST('/api/trolleyContainGoods', purchaseDetail)
// 获取用户的购物车id
export const getTrolleyIdByUserId = (id) => http.GET('/api/user/getTrolleyIdByUserId?id=' + id)
// 根据外键获取购物车中的一条商品记录
export const getByFKs = (purchaseDetail) => http.POST('/api/trolleyContainGoods/getByFKs', purchaseDetail)
// 更新商品在购物车中的信息
export const updateTrolleyContainGoods = (purchaseDetail) => http.POST('/api/trolleyContainGoods/updateTrolleyContainGoodsNumber', purchaseDetail)
export const getGoods = (goodsid) => http.GET('/api/goods/getGoods', {goodsid: goodsid})
// 获取评论
export const getCommentList = (commentListDTO) => http.POST('/api/goodsComment/listByPage', commentListDTO)
