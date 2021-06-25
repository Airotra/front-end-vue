import http from '@http/http'
// 获取商品列表
// export const goodsList = () => http.GET('/api/goods/list')
export const goodsPage = (query) => http.GET('/api/goods/listByPage', query)
