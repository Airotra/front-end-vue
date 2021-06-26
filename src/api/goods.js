import http from '@http/http'
// 获取商品列表
// export const goodsList = () => http.GET('/api/goods/list')
export const goodsPage = (query) => http.GET('/api/goods/listByPage', query)
export const addGoodsToTrolley = (purchaseDetail) => http.POST('/api/trolleyContainGoods', purchaseDetail)
export const getTrolleyIdByUserId = (id) => http.GET('/api/user/getTrolleyIdByUserId?id=' + id)
export const getByFKs = (purchaseDetail) => http.POST('/api/trolleyContainGoods/getByFKs', purchaseDetail)
export const updateTrolleyContainGoods = (purchaseDetail) => http.POST('/api/trolleyContainGoods/updateTrolleyContainGoodsNumber', purchaseDetail)
