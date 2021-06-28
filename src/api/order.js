import http from '@http/http'
// 获取商品列表
// export const goodsList = () => http.GET('/api/goods/list')
export const updateOrder = (OrderDetail) => http.POST('/api/orderList', OrderDetail)
export const updateOrderGoods = (OrderGoodsDetail) => http.POST('/api/orderContainGoods/insertGoodsByList', OrderGoodsDetail)

export const _getOrderList = (id) => http.GET('/api/orderList/getOrderListByUserId', {id: id})
export const _getGoods = (id) => http.GET('/api/orderList/getGoods', {id: id})
export const _payOrder = (query) => http.PUT('/api/orderList/' + query.id, query)
export const _statusOrder = (query) => http.PUT('/api/orderList/' + query.id, query)
export const _addComment = (query) => http.POST('/api/goodsComment/addComment', query)
export const _commentGoods = (query) => http.POST('/api/orderContainGoods/commentGoods', query)
