import http from '@http/http'
// 获取商品列表
// export const goodsList = () => http.GET('/api/goods/list')
export const updateOrder = (OrderDetail) => http.POST('/api/orderList', OrderDetail)
